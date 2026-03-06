from __future__ import annotations

import json
import re
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .config import EXPORT_DIR, RUNTIME_LOG_PATH, RuntimeSettings, SEED_CANON_DIR
from .ingest.pipeline import IngestService
from .logging import RuntimeLog
from .models.base import BaseModelAdapter
from .models.mlx_backend import MLXModelAdapter
from .models.mock import MockModelAdapter
from .observatory.exporters import ObservatoryExporter
from .observatory.server import ObservatoryServer
from .regard import ema, feedback_signal
from .retrieval import RetrievalService
from .storage.graph_store import GraphStore
from .utils import now_utc, safe_excerpt, top_phrases


CONTROL_CHAR_RE = re.compile(r"[\x00-\x08\x0B\x0C\x0E-\x1F]")


@dataclass(slots=True)
class ChatOutcome:
    turn: dict[str, Any]
    active_set: list[dict[str, Any]]
    trace: list[dict[str, Any]]
    membrane_events: list[dict[str, Any]]
    graph_counts: dict[str, int]


class EdenRuntime:
    def __init__(
        self,
        *,
        store: GraphStore,
        settings: RuntimeSettings | None = None,
        runtime_log: RuntimeLog | None = None,
    ) -> None:
        self.store = store
        self.settings = settings or RuntimeSettings()
        self.runtime_log = runtime_log or RuntimeLog(RUNTIME_LOG_PATH)
        self.ingest_service = IngestService(self.store, self.runtime_log)
        self.retrieval_service = RetrievalService(self.store)
        self.exporter = ObservatoryExporter(self.store, self.retrieval_service, self.runtime_log)
        self.observatory_server = ObservatoryServer(EXPORT_DIR, self.settings.observatory_port)
        self.agent_profile = json.loads((Path(__file__).resolve().parent / "agents" / "adam" / "profile.json").read_text())
        self.agent_id = self.store.upsert_agent(
            slug=self.agent_profile["slug"],
            name=self.agent_profile["name"],
            profile=self.agent_profile,
        )
        self._model_adapter: BaseModelAdapter | None = None

    def _get_model_adapter(self) -> BaseModelAdapter:
        backend = self.settings.model_backend.lower()
        if self._model_adapter and self._model_adapter.backend_name == backend:
            return self._model_adapter
        if backend == "mlx":
            if not self.settings.model_path:
                raise RuntimeError("MLX backend selected but no model path was provided.")
            self._model_adapter = MLXModelAdapter(self.settings.model_path)
        else:
            self._model_adapter = MockModelAdapter()
        return self._model_adapter

    def _constitution_statements(self) -> list[str]:
        seed_path = Path(__file__).resolve().parent / "agents" / "adam" / "seed_constitution.md"
        lines = []
        for line in seed_path.read_text().splitlines():
            line = line.strip()
            if line.startswith("- "):
                lines.append(line[2:].strip())
        return lines

    def initialize_experiment(self, mode: str, *, name: str | None = None) -> dict[str, Any]:
        experiment = self.store.create_experiment(
            name=name or f"{mode.title()} Eden",
            mode=mode,
            metadata={"initialized_at": now_utc(), "mode": mode},
        )
        self.runtime_log.emit("INFO", "experiment_create", "Created experiment.", experiment_id=experiment["id"], mode=mode)
        self.store.record_trace_event(
            experiment_id=experiment["id"],
            session_id=None,
            turn_id=None,
            event_type="BOOTSTRAP",
            level="INFO",
            message=f"Created {mode} experiment",
            payload={"mode": mode},
        )
        self._seed_constitution(experiment["id"])
        if mode == "seeded":
            self._seed_canon(experiment["id"])
        return experiment

    def _seed_constitution(self, experiment_id: str) -> None:
        member_ids: list[str] = []
        for statement in self._constitution_statements():
            meme = self.store.upsert_meme(
                experiment_id=experiment_id,
                label=statement[:80],
                text=statement,
                domain="behavior",
                source_kind="constitution",
                scope="global",
                evidence_inc=1.0,
                metadata={"title": "ADAM constitutional seed", "origin": "seed_constitution"},
            )
            member_ids.append(meme["id"])
            self.store.add_edge(
                experiment_id=experiment_id,
                src_kind="agent",
                src_id=self.agent_id,
                dst_kind="meme",
                dst_id=meme["id"],
                edge_type="BELONGS_TO_AGENT",
                provenance={"kind": "constitution"},
            )
        memode = self.store.upsert_memode(
            experiment_id=experiment_id,
            label="ADAM constitutional stack",
            member_ids=member_ids,
            summary="The constitutional scaffold that defines EDEN v1, ADAM, membrane visibility, and regard.",
            domain="behavior",
            metadata={"origin": "seed_constitution"},
        )
        for member_id in member_ids:
            self.store.add_edge(
                experiment_id=experiment_id,
                src_kind="memode",
                src_id=memode["id"],
                dst_kind="meme",
                dst_id=member_id,
                edge_type="MATERIALIZES_AS_MEMODE",
                provenance={"kind": "constitution"},
            )
        self.runtime_log.emit("INFO", "constitution_seeded", "Seeded constitutional graph.", experiment_id=experiment_id)

    def _seed_canon(self, experiment_id: str) -> None:
        seed_paths = sorted(path for path in SEED_CANON_DIR.rglob("*") if path.is_file() and path.suffix.lower() in {".pdf", ".txt", ".md", ".csv"})
        for path in seed_paths:
            self.ingest_service.ingest_path(experiment_id=experiment_id, path=path, source_kind="canon")
        self.runtime_log.emit("INFO", "canon_seeded", "Seeded canonical sources.", experiment_id=experiment_id, file_count=len(seed_paths))

    def start_session(self, experiment_id: str, *, title: str | None = None) -> dict[str, Any]:
        experiment = self.store.get_experiment(experiment_id)
        session = self.store.create_session(
            experiment_id=experiment_id,
            agent_id=self.agent_id,
            title=title or f"{experiment['name']} session",
            metadata={"started_with_backend": self.settings.model_backend},
        )
        self.runtime_log.emit("INFO", "session_start", "Started session.", experiment_id=experiment_id, session_id=session["id"])
        return session

    def _recent_history_context(self, session_id: str) -> str:
        turns = list(reversed(self.store.list_turns(session_id, limit=3)))
        if not turns:
            return "No prior turns."
        parts = []
        for turn in turns:
            parts.append(f"T{turn['turn_index']} USER: {safe_excerpt(turn['user_text'], limit=220)}")
            parts.append(f"T{turn['turn_index']} ADAM: {safe_excerpt(turn['membrane_text'], limit=220)}")
        return "\n".join(parts)

    def _recent_feedback_context(self, session_id: str) -> str:
        feedback = list(reversed(self.store.recent_feedback(session_id, limit=3)))
        if not feedback:
            return "No explicit feedback yet."
        parts = []
        for item in feedback:
            corrected = item.get("corrected_text") or ""
            parts.append(f"T{item['turn_index']} {item['verdict'].upper()}: {safe_excerpt(item['explanation'], limit=180)}")
            if corrected:
                parts.append(f"CORRECTED: {safe_excerpt(corrected, limit=180)}")
        return "\n".join(parts)

    def _build_prompts(self, *, user_text: str, active_set: dict[str, Any], session_id: str) -> tuple[str, str]:
        system_prompt = (
            f"You are {self.agent_profile['name']}, the first graph-conditioned agent in EDEN.\n"
            "Your persistent identity is externalized into a memetic graph.\n"
            "Do not mention hidden chain-of-thought. Expose only operator-visible basis.\n"
            "Respond using the sections: Answer, Basis, Next Step.\n"
            "Treat recent feedback as binding context when relevant."
        )
        conversation_prompt = (
            "ACTIVE SET\n"
            f"{active_set['prompt_context']}\n\n"
            "RECENT FEEDBACK\n"
            f"{self._recent_feedback_context(session_id)}\n\n"
            "RECENT HISTORY\n"
            f"{self._recent_history_context(session_id)}\n\n"
            f"USER: {user_text}"
        )
        return system_prompt, conversation_prompt

    def _apply_membrane(self, *, text: str, active_set: list[dict[str, Any]]) -> tuple[str, list[dict[str, Any]]]:
        original = text or ""
        events: list[dict[str, Any]] = []
        cleaned = CONTROL_CHAR_RE.sub("", original).strip()
        if cleaned != original:
            events.append({"event_type": "CONTROL_CHAR_STRIPPED", "detail": "Removed non-printing control characters."})
        max_chars = int(self.agent_profile.get("prompt_contract", {}).get("max_response_chars", 1800))
        if len(cleaned) > max_chars:
            cleaned = cleaned[: max_chars - 1].rstrip() + "…"
            events.append({"event_type": "TRIMMED", "detail": f"Clamped response to {max_chars} characters."})
        if "Answer:" not in cleaned or "Basis:" not in cleaned or "Next Step:" not in cleaned:
            cleaned = f"Answer:\n{cleaned}\n\nBasis:\nDerived from the active set and recent feedback.\n\nNext Step:\nProvide feedback to reinforce or correct this output."
            events.append({"event_type": "FORMAT_ENFORCED", "detail": "Applied sectioned membrane format."})
        if not events:
            events.append({"event_type": "PASSTHROUGH", "detail": "Response passed the membrane unchanged."})
        return cleaned, events

    def _index_text_into_graph(
        self,
        *,
        experiment_id: str,
        turn_id: str,
        session_id: str,
        text: str,
        domain: str,
        source_kind: str,
        actor: str,
    ) -> dict[str, list[str]]:
        member_ids: list[str] = []
        memode_ids: list[str] = []
        for phrase, score in top_phrases(text, limit=6):
            meme = self.store.upsert_meme(
                experiment_id=experiment_id,
                label=phrase,
                text=text,
                domain=domain,
                source_kind=source_kind,
                scope=f"session:{session_id}",
                evidence_inc=score,
                metadata={"session_id": session_id, "turn_id": turn_id, "origin": actor},
            )
            member_ids.append(meme["id"])
            self.store.add_edge(
                experiment_id=experiment_id,
                src_kind="turn",
                src_id=turn_id,
                dst_kind="meme",
                dst_id=meme["id"],
                edge_type="OCCURS_IN",
                provenance={"actor": actor},
            )
        for idx, left in enumerate(member_ids):
            for right in member_ids[idx + 1 :]:
                self.store.add_edge(
                    experiment_id=experiment_id,
                    src_kind="meme",
                    src_id=left,
                    dst_kind="meme",
                    dst_id=right,
                    edge_type="CO_OCCURS_WITH",
                    provenance={"turn_id": turn_id, "actor": actor},
                )
        if len(member_ids) >= 2:
            memode = self.store.upsert_memode(
                experiment_id=experiment_id,
                label=" / ".join(self.store.get_meme(member_id)["label"] for member_id in member_ids[:3]),
                member_ids=member_ids[: min(4, len(member_ids))],
                summary=safe_excerpt(text, limit=320),
                domain=domain,
                scope=f"session:{session_id}",
                metadata={"turn_id": turn_id, "session_id": session_id, "origin": actor},
            )
            memode_ids.append(memode["id"])
            self.store.add_edge(
                experiment_id=experiment_id,
                src_kind="turn",
                src_id=turn_id,
                dst_kind="memode",
                dst_id=memode["id"],
                edge_type="MATERIALIZES_AS_MEMODE",
                provenance={"actor": actor},
            )
            for member_id in member_ids[: min(4, len(member_ids))]:
                self.store.add_edge(
                    experiment_id=experiment_id,
                    src_kind="memode",
                    src_id=memode["id"],
                    dst_kind="meme",
                    dst_id=member_id,
                    edge_type="MATERIALIZES_AS_MEMODE",
                    provenance={"turn_id": turn_id},
                )
        return {"meme_ids": member_ids, "memode_ids": memode_ids}

    def chat(self, *, session_id: str, user_text: str) -> ChatOutcome:
        session = self.store.get_session(session_id)
        experiment_id = session["experiment_id"]
        active_set = self.retrieval_service.retrieve(
            experiment_id=experiment_id,
            session_id=session_id,
            query=user_text,
            settings=self.settings,
        )
        system_prompt, conversation_prompt = self._build_prompts(user_text=user_text, active_set=active_set, session_id=session_id)
        model = self._get_model_adapter()
        self.runtime_log.emit(
            "INFO",
            "generation_start",
            "Generating Adam response.",
            experiment_id=experiment_id,
            session_id=session_id,
            backend=model.backend_name,
        )
        result = model.generate(system_prompt=system_prompt, conversation_prompt=conversation_prompt)
        membrane_text, membrane_events = self._apply_membrane(
            text=result.text,
            active_set=active_set["items"],
        )
        trace = list(active_set["trace"])
        trace.append(
            {
                "label": "prompt_assembly",
                "kind": "system",
                "domain": "behavior",
                "selection": 0.0,
                "semantic_similarity": 0.0,
                "activation": 0.0,
                "regard": 0.0,
                "session_bias": 0.0,
                "explicit_feedback": 0.0,
                "scope_penalty": 0.0,
                "membrane_penalty": 0.0,
                "breakdown": {
                    "active_set_size": len(active_set["items"]),
                    "backend": result.backend,
                    "history_lines": len(self._recent_history_context(session_id).splitlines()),
                },
                "provenance": "prompt_assembly",
            }
        )
        turn = self.store.record_turn(
            experiment_id=experiment_id,
            session_id=session_id,
            user_text=user_text,
            prompt_context=conversation_prompt,
            response_text=result.text,
            membrane_text=membrane_text,
            active_set=active_set["items"],
            trace=trace,
        )
        self.store.store_active_set(
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn["id"],
            query_text=user_text,
            items=active_set["items"],
        )
        for event in membrane_events:
            self.store.record_membrane_event(
                experiment_id=experiment_id,
                session_id=session_id,
                turn_id=turn["id"],
                event_type=event["event_type"],
                detail=event["detail"],
                payload={"active_set_size": len(active_set["items"])},
            )
        indexed_user = self._index_text_into_graph(
            experiment_id=experiment_id,
            turn_id=turn["id"],
            session_id=session_id,
            text=user_text,
            domain="knowledge",
            source_kind="turn_user",
            actor="user",
        )
        indexed_adam = self._index_text_into_graph(
            experiment_id=experiment_id,
            turn_id=turn["id"],
            session_id=session_id,
            text=membrane_text,
            domain="behavior",
            source_kind="turn_adam",
            actor="adam",
        )
        selected_meme_ids = [item["node_id"] for item in active_set["items"] if item["node_kind"] == "meme"]
        selected_memode_ids = [item["node_id"] for item in active_set["items"] if item["node_kind"] == "memode"]
        self.store.touch_nodes("meme", selected_meme_ids + indexed_user["meme_ids"] + indexed_adam["meme_ids"])
        self.store.touch_nodes("memode", selected_memode_ids + indexed_user["memode_ids"] + indexed_adam["memode_ids"])
        self.store.record_trace_event(
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn["id"],
            event_type="TURN",
            level="INFO",
            message="Completed chat turn.",
            payload={
                "backend": result.backend,
                "active_set_size": len(active_set["items"]),
                "membrane_events": [event["event_type"] for event in membrane_events],
            },
        )
        self.runtime_log.emit(
            "INFO",
            "generation_complete",
            "Completed Adam response.",
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn["id"],
            backend=result.backend,
            active_set_size=len(active_set["items"]),
        )
        return ChatOutcome(
            turn=turn,
            active_set=active_set["items"],
            trace=trace,
            membrane_events=membrane_events,
            graph_counts=self.store.graph_counts(experiment_id),
        )

    def _turn_related_nodes(self, turn_id: str) -> dict[str, list[str]]:
        meme_ids: list[str] = []
        memode_ids: list[str] = []
        for edge in self.store.list_edges(self.store.get_turn(turn_id)["experiment_id"]):
            if edge["src_kind"] == "turn" and edge["src_id"] == turn_id:
                if edge["dst_kind"] == "meme":
                    meme_ids.append(edge["dst_id"])
                if edge["dst_kind"] == "memode":
                    memode_ids.append(edge["dst_id"])
        return {"meme_ids": sorted(set(meme_ids)), "memode_ids": sorted(set(memode_ids))}

    def apply_feedback(
        self,
        *,
        session_id: str,
        turn_id: str,
        verdict: str,
        explanation: str,
        corrected_text: str = "",
    ) -> dict[str, Any]:
        verdict = verdict.lower().strip()
        if verdict in {"accept", "reject"} and not explanation.strip():
            raise ValueError(f"{verdict.title()} feedback requires an explanation.")
        if verdict == "edit" and (not explanation.strip() or not corrected_text.strip()):
            raise ValueError("Edit feedback requires both an explanation and corrected text.")
        turn = self.store.get_turn(turn_id)
        experiment_id = turn["experiment_id"]
        signal = feedback_signal(verdict)
        feedback = self.store.record_feedback(
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn_id,
            verdict=verdict,
            explanation=explanation,
            corrected_text=corrected_text,
            signal=signal,
        )
        related = self._turn_related_nodes(turn_id)
        impacted_meme_ids = set(related["meme_ids"])
        impacted_memode_ids = set(related["memode_ids"])
        active_set = json.loads(turn["active_set_json"] or "[]")
        for item in active_set:
            if item["node_kind"] == "meme":
                impacted_meme_ids.add(item["node_id"])
            else:
                impacted_memode_ids.add(item["node_id"])

        for memode_id in list(impacted_memode_ids):
            memode = self.store.get_memode(memode_id)
            new_reward = ema(float(memode.get("reward_ema", 0.0)), signal["reward"])
            new_risk = ema(float(memode.get("risk_ema", 0.0)), signal["risk"])
            new_edit = ema(float(memode.get("edit_ema", 0.0)), signal["edit"])
            self.store.update_feedback_channels("memode", memode_id, reward=new_reward, risk=new_risk, edit=new_edit)
            metadata = json.loads(memode["metadata_json"] or "{}")
            for member_id in metadata.get("member_ids", []):
                impacted_meme_ids.add(member_id)

        propagate_scale = 0.65 if verdict == "edit" else 0.8
        for meme_id in impacted_meme_ids:
            meme = self.store.get_meme(meme_id)
            if verdict == "skip":
                self.store.bump_skip_count("meme", meme_id)
                continue
            new_reward = ema(float(meme.get("reward_ema", 0.0)), signal["reward"] * propagate_scale)
            new_risk = ema(float(meme.get("risk_ema", 0.0)), signal["risk"] * propagate_scale)
            new_edit = ema(float(meme.get("edit_ema", 0.0)), signal["edit"] * propagate_scale)
            self.store.update_feedback_channels("meme", meme_id, reward=new_reward, risk=new_risk, edit=new_edit)

        feedback_text = (
            f"Feedback verdict={verdict}. Explanation: {explanation.strip() or 'none provided.'} "
            f"Corrected text: {corrected_text.strip() or 'n/a'}"
        )
        feedback_nodes = self._index_text_into_graph(
            experiment_id=experiment_id,
            turn_id=turn_id,
            session_id=session_id,
            text=feedback_text,
            domain="behavior",
            source_kind="feedback",
            actor="feedback",
        )
        self.store.record_trace_event(
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn_id,
            event_type="FEEDBACK",
            level="INFO",
            message=f"Applied {verdict} feedback.",
            payload={
                "feedback_id": feedback["id"],
                "affected_memes": len(impacted_meme_ids) + len(feedback_nodes["meme_ids"]),
                "affected_memodes": len(impacted_memode_ids) + len(feedback_nodes["memode_ids"]),
            },
        )
        self.runtime_log.emit(
            "INFO",
            "feedback_applied",
            "Applied turn feedback.",
            experiment_id=experiment_id,
            session_id=session_id,
            turn_id=turn_id,
            verdict=verdict,
        )
        return feedback

    def ingest_document(self, *, experiment_id: str, path: str) -> dict[str, Any]:
        result = self.ingest_service.ingest_path(experiment_id=experiment_id, path=Path(path))
        return asdict(result)

    def graph_health(self, experiment_id: str) -> dict[str, Any]:
        _, metrics = self.retrieval_service.build_graph_metrics(experiment_id)
        counts = self.store.graph_counts(experiment_id)
        counts.update({key: round(value, 4) for key, value in metrics.items()})
        return counts

    def export_dir_for_experiment(self, experiment_id: str) -> Path:
        path = EXPORT_DIR / experiment_id
        path.mkdir(parents=True, exist_ok=True)
        return path

    def export_observability(self, *, experiment_id: str, session_id: str | None = None) -> dict[str, str]:
        out_dir = self.export_dir_for_experiment(experiment_id)
        return self.exporter.export_all(experiment_id=experiment_id, session_id=session_id, out_dir=out_dir)

    def start_observatory(self) -> str:
        url = self.observatory_server.start()
        self.runtime_log.emit("INFO", "observatory_start", "Started local observatory server.", url=url)
        return url

    def stop_observatory(self) -> None:
        self.observatory_server.stop()
        self.runtime_log.emit("INFO", "observatory_stop", "Stopped local observatory server.")
