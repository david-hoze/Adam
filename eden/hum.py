from __future__ import annotations

import json
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .utils import now_utc, safe_excerpt


HUM_ARTIFACT_VERSION = "hum.v1"
HUM_DERIVED_FROM = ["turns.active_set_json", "feedback_events", "membrane_events"]
HUM_LIMITS = {
    "artifact_version": HUM_ARTIFACT_VERSION,
    "turn_window": 3,
    "max_text_chars": 320,
    "max_lines": 6,
    "max_recurring_items": 4,
    "max_table_rows": 6,
    "max_feedback_events": 4,
    "max_membrane_events": 6,
}
_FEEDBACK_ORDER = ("accept", "edit", "reject", "skip")


@dataclass(slots=True)
class HumRecurringItem:
    node_id: str
    node_kind: str
    label: str
    count: int
    turn_indices: list[int]


@dataclass(slots=True)
class HumOverlap:
    latest_turn_id: str | None
    previous_turn_id: str | None
    count: int
    labels: list[str]


@dataclass(slots=True)
class HumFeedbackSummary:
    counts: dict[str, int]
    recent: list[dict[str, Any]]


@dataclass(slots=True)
class HumMembraneSummary:
    counts: dict[str, int]
    recent: list[dict[str, Any]]


@dataclass(slots=True)
class HumStatus:
    cross_turn_recurrence_present: bool
    feedback_present: bool
    membrane_activity_present: bool


@dataclass(slots=True)
class HumMetrics:
    char_count: int
    line_count: int
    turn_window_size: int
    recurring_item_count: int
    feedback_event_count: int
    membrane_event_count: int


@dataclass(slots=True)
class HumPayload:
    artifact_version: str
    generated_at: str
    experiment_id: str
    session_id: str
    latest_turn_id: str | None
    turn_ids: list[str]
    turn_indices: list[int]
    derived_from: list[str]
    boundedness: dict[str, Any]
    status: HumStatus
    continuity: dict[str, Any]
    metrics: HumMetrics
    text_surface: str

    def to_dict(self) -> dict[str, Any]:
        payload = asdict(self)
        payload["status"] = asdict(self.status)
        payload["metrics"] = asdict(self.metrics)
        return payload


class HumService:
    def __init__(self, *, store, runtime_log, root: Path) -> None:
        self.store = store
        self.runtime_log = runtime_log
        self.root = root

    def refresh(self, *, session_id: str) -> dict[str, Any]:
        payload, markdown_path, json_path = self._build_artifact(session_id)
        markdown_path.parent.mkdir(parents=True, exist_ok=True)
        json_path.write_text(json.dumps(payload.to_dict(), indent=2), encoding="utf-8")
        markdown_path.write_text(self._render_markdown(payload, markdown_path=markdown_path, json_path=json_path), encoding="utf-8")
        metadata = {
            "artifact_version": payload.artifact_version,
            "generated_at": payload.generated_at,
            "latest_turn_id": payload.latest_turn_id,
            "turn_window_size": payload.metrics.turn_window_size,
            "cross_turn_recurrence_present": payload.status.cross_turn_recurrence_present,
        }
        self.store.record_export_artifact(
            experiment_id=payload.experiment_id,
            session_id=payload.session_id,
            artifact_type="hum_markdown",
            path=markdown_path,
            metadata=metadata,
        )
        self.store.record_export_artifact(
            experiment_id=payload.experiment_id,
            session_id=payload.session_id,
            artifact_type="hum_json",
            path=json_path,
            metadata=metadata,
        )
        self.runtime_log.emit(
            "INFO",
            "hum_refreshed",
            "Refreshed bounded hum artifact.",
            experiment_id=payload.experiment_id,
            session_id=payload.session_id,
            latest_turn_id=payload.latest_turn_id,
            recurring_item_count=payload.metrics.recurring_item_count,
            feedback_event_count=payload.metrics.feedback_event_count,
            membrane_event_count=payload.metrics.membrane_event_count,
        )
        return self.snapshot(session_id)

    def snapshot(self, session_id: str) -> dict[str, Any]:
        markdown_path, json_path = self._artifact_paths(session_id)
        base = {
            "present": False,
            "artifact_version": HUM_ARTIFACT_VERSION,
            "generated_at": None,
            "markdown_path": str(markdown_path),
            "json_path": str(json_path),
            "latest_turn_id": None,
            "turn_window_size": 0,
            "cross_turn_recurrence_present": False,
            "text_surface": "",
        }
        if not json_path.exists() or not markdown_path.exists():
            return base
        try:
            payload = json.loads(json_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return {**base, "error": "invalid_hum_json"}
        metrics = payload.get("metrics", {})
        status = payload.get("status", {})
        return {
            **base,
            "present": True,
            "artifact_version": payload.get("artifact_version", HUM_ARTIFACT_VERSION),
            "generated_at": payload.get("generated_at"),
            "latest_turn_id": payload.get("latest_turn_id"),
            "turn_window_size": int(metrics.get("turn_window_size", 0) or 0),
            "cross_turn_recurrence_present": bool(status.get("cross_turn_recurrence_present")),
            "text_surface": str(payload.get("text_surface") or ""),
        }

    def _artifact_paths(self, session_id: str) -> tuple[Path, Path]:
        session = self.store.get_session(session_id)
        experiment_id = str(session["experiment_id"])
        base_dir = self.root / experiment_id / session_id
        return base_dir / "current_hum.md", base_dir / "current_hum.json"

    def _build_artifact(self, session_id: str) -> tuple[HumPayload, Path, Path]:
        session = self.store.get_session(session_id)
        experiment = self.store.get_experiment(session["experiment_id"])
        markdown_path, json_path = self._artifact_paths(session_id)
        turns = self.store.list_all_turns(session_id)[-HUM_LIMITS["turn_window"] :]
        feedback_events = self.store.recent_feedback(session_id, limit=HUM_LIMITS["max_feedback_events"])
        membrane_events = self.store.list_membrane_events(
            experiment["id"],
            limit=HUM_LIMITS["max_membrane_events"],
            session_id=session_id,
        )
        recurring_items, overlap = self._summarize_active_set_recurrence(turns)
        feedback_summary = self._summarize_feedback(feedback_events)
        membrane_summary = self._summarize_membrane(membrane_events)
        text_surface = self._render_text_surface(
            turn_count=len(turns),
            recurring_items=recurring_items,
            overlap=overlap,
            feedback_summary=feedback_summary,
            membrane_summary=membrane_summary,
        )
        payload = HumPayload(
            artifact_version=HUM_ARTIFACT_VERSION,
            generated_at=now_utc(),
            experiment_id=str(experiment["id"]),
            session_id=str(session["id"]),
            latest_turn_id=str(turns[-1]["id"]) if turns else None,
            turn_ids=[str(turn["id"]) for turn in turns],
            turn_indices=[int(turn.get("turn_index", 0) or 0) for turn in turns],
            derived_from=list(HUM_DERIVED_FROM),
            boundedness=dict(HUM_LIMITS),
            status=HumStatus(
                cross_turn_recurrence_present=bool(recurring_items),
                feedback_present=bool(feedback_events),
                membrane_activity_present=bool(membrane_events),
            ),
            continuity={
                "recurring_items": [asdict(item) for item in recurring_items],
                "active_set_overlap": asdict(overlap),
                "feedback_summary": asdict(feedback_summary),
                "membrane_summary": asdict(membrane_summary),
            },
            metrics=HumMetrics(
                char_count=len(text_surface),
                line_count=max(1, text_surface.count("\n") + 1),
                turn_window_size=len(turns),
                recurring_item_count=len(recurring_items),
                feedback_event_count=len(feedback_events),
                membrane_event_count=len(membrane_events),
            ),
            text_surface=text_surface,
        )
        return payload, markdown_path, json_path

    def _summarize_active_set_recurrence(self, turns: list[dict[str, Any]]) -> tuple[list[HumRecurringItem], HumOverlap]:
        latest_labels: dict[str, tuple[str, str]] = {}
        appearances: dict[str, set[int]] = defaultdict(set)
        turn_node_labels: list[dict[str, str]] = []
        for turn in turns:
            items = json.loads(turn.get("active_set_json") or "[]")
            labels_for_turn: dict[str, str] = {}
            seen_ids: set[str] = set()
            turn_index = int(turn.get("turn_index", 0) or 0)
            for item in items:
                node_id = str(item.get("node_id") or "").strip()
                if not node_id or node_id in seen_ids:
                    continue
                seen_ids.add(node_id)
                label = safe_excerpt(str(item.get("label") or node_id), limit=72)
                node_kind = str(item.get("node_kind") or "unknown")
                latest_labels[node_id] = (label, node_kind)
                appearances[node_id].add(turn_index)
                labels_for_turn[node_id] = label
            turn_node_labels.append(labels_for_turn)

        recurring: list[HumRecurringItem] = []
        for node_id, turn_indices in appearances.items():
            if len(turn_indices) < 2:
                continue
            label, node_kind = latest_labels[node_id]
            recurring.append(
                HumRecurringItem(
                    node_id=node_id,
                    node_kind=node_kind,
                    label=label,
                    count=len(turn_indices),
                    turn_indices=sorted(turn_indices),
                )
            )
        recurring.sort(key=lambda item: (-item.count, -max(item.turn_indices), item.label.lower(), item.node_id))
        recurring = recurring[: HUM_LIMITS["max_recurring_items"]]

        latest_turn = turns[-1] if turns else None
        previous_turn = turns[-2] if len(turns) > 1 else None
        latest_ids = set(turn_node_labels[-1].keys()) if turn_node_labels else set()
        previous_ids = set(turn_node_labels[-2].keys()) if len(turn_node_labels) > 1 else set()
        overlap_ids = sorted(latest_ids & previous_ids)
        overlap_labels = [turn_node_labels[-1].get(node_id) or turn_node_labels[-2].get(node_id) or node_id for node_id in overlap_ids]
        overlap = HumOverlap(
            latest_turn_id=str(latest_turn["id"]) if latest_turn else None,
            previous_turn_id=str(previous_turn["id"]) if previous_turn else None,
            count=len(overlap_ids),
            labels=overlap_labels[: HUM_LIMITS["max_recurring_items"]],
        )
        return recurring, overlap

    def _summarize_feedback(self, feedback_events: list[dict[str, Any]]) -> HumFeedbackSummary:
        ordered_counts: dict[str, int] = {}
        verdict_counts = Counter(str(item.get("verdict") or "").lower() for item in feedback_events)
        for verdict in _FEEDBACK_ORDER:
            if verdict_counts.get(verdict):
                ordered_counts[verdict] = int(verdict_counts[verdict])
        recent = [
            {
                "turn_index": int(item.get("turn_index", 0) or 0),
                "verdict": str(item.get("verdict") or "").lower(),
                "explanation": safe_excerpt(str(item.get("explanation") or ""), limit=96),
            }
            for item in feedback_events[: HUM_LIMITS["max_feedback_events"]]
        ]
        return HumFeedbackSummary(counts=ordered_counts, recent=recent)

    def _summarize_membrane(self, membrane_events: list[dict[str, Any]]) -> HumMembraneSummary:
        event_counts = Counter(str(item.get("event_type") or "").upper() for item in membrane_events)
        counts = {event_type: int(event_counts[event_type]) for event_type in sorted(event_counts)}
        recent = [
            {
                "turn_id": str(item.get("turn_id") or ""),
                "event_type": str(item.get("event_type") or "").upper(),
                "detail": safe_excerpt(str(item.get("detail") or ""), limit=96),
            }
            for item in membrane_events[: HUM_LIMITS["max_membrane_events"]]
        ]
        return HumMembraneSummary(counts=counts, recent=recent)

    def _render_text_surface(
        self,
        *,
        turn_count: int,
        recurring_items: list[HumRecurringItem],
        overlap: HumOverlap,
        feedback_summary: HumFeedbackSummary,
        membrane_summary: HumMembraneSummary,
    ) -> str:
        parts: list[str] = []
        if turn_count < 2:
            parts.append(f"seed-state: {turn_count} persisted turn; cross-turn recurrence not available yet")
        elif recurring_items:
            labels = ", ".join(item.label for item in recurring_items[:2])
            parts.append(
                f"continuity: {len(recurring_items)} recurring items across {turn_count} turns; latest overlap {overlap.count}"
                + (f" ({labels})" if labels else "")
            )
        else:
            parts.append(f"continuity: {turn_count} turns persisted; no recurring active-set items yet")

        if feedback_summary.counts:
            feedback_bits = [f"{verdict}x{count}" for verdict, count in feedback_summary.counts.items()]
            parts.append(f"feedback: {', '.join(feedback_bits)}")
        else:
            parts.append("feedback: absent")

        if membrane_summary.counts:
            membrane_bits = [f"{event_type}x{count}" for event_type, count in membrane_summary.counts.items()]
            parts.append(f"membrane: {', '.join(membrane_bits[:3])}")
        else:
            parts.append("membrane: absent")

        text = ". ".join(parts).strip()
        if not text.endswith("."):
            text += "."
        return safe_excerpt(text, limit=HUM_LIMITS["max_text_chars"])

    def _render_markdown(self, payload: HumPayload, *, markdown_path: Path, json_path: Path) -> str:
        data = payload.to_dict()
        recurring_items = data["continuity"]["recurring_items"]
        if not recurring_items:
            table_rows = ["| seed_state | none | 0 | current turn only |"]
        else:
            table_rows = [
                f"| {item['label']} | {item['node_kind']} | {item['count']} | {', '.join(str(value) for value in item['turn_indices'])} |"
                for item in recurring_items[: HUM_LIMITS["max_table_rows"]]
            ]
        lines = [
            "# Adam Hum",
            "",
            f"- artifact_version: {payload.artifact_version}",
            f"- generated_at: {payload.generated_at}",
            f"- experiment_id: {payload.experiment_id}",
            f"- session_id: {payload.session_id}",
            f"- derived_from: {', '.join(payload.derived_from)}",
            f"- markdown_path: {markdown_path}",
            f"- json_path: {json_path}",
            "",
            f"hum: {payload.text_surface}",
            "",
            "[HUM_STATS]",
            f"- latest_turn_id: {payload.latest_turn_id or 'n/a'}",
            f"- turn_ids: {', '.join(payload.turn_ids) if payload.turn_ids else 'none'}",
            f"- turn_indices: {', '.join(str(value) for value in payload.turn_indices) if payload.turn_indices else 'none'}",
            "",
            "[HUM_METRICS]",
            f"- char_count: {payload.metrics.char_count}",
            f"- line_count: {payload.metrics.line_count}",
            f"- turn_window_size: {payload.metrics.turn_window_size}",
            f"- recurring_item_count: {payload.metrics.recurring_item_count}",
            f"- feedback_event_count: {payload.metrics.feedback_event_count}",
            f"- membrane_event_count: {payload.metrics.membrane_event_count}",
            "",
            "[HUM_TABLE]",
            "| label | kind | count | turns |",
            "| --- | --- | --- | --- |",
            *table_rows[: HUM_LIMITS["max_table_rows"]],
            "",
        ]
        return "\n".join(lines)
