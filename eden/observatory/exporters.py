from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

import networkx as nx
import numpy as np

from ..utils import now_utc, safe_excerpt
from .geometry import compute_ablation_report, compute_coordinate_sets, compute_geometry_metrics


class ObservatoryExporter:
    def __init__(self, store, retrieval_service, runtime_log) -> None:
        self.store = store
        self.retrieval_service = retrieval_service
        self.runtime_log = runtime_log

    def export_all(self, *, experiment_id: str, session_id: str | None, out_dir: Path) -> dict[str, str]:
        out_dir.mkdir(parents=True, exist_ok=True)
        snapshot = self.store.graph_snapshot(experiment_id)
        basin_paths, basin_payload = self.export_behavioral_basin(
            experiment_id=experiment_id,
            session_id=session_id,
            out_dir=out_dir,
            snapshot=snapshot,
        )
        graph_model = self._build_graph_model(snapshot=snapshot, session_id=session_id, basin_payload=basin_payload)
        graph_paths, graph_payload = self.export_graph_knowledge_base(
            experiment_id=experiment_id,
            session_id=session_id,
            out_dir=out_dir,
            graph_model=graph_model,
        )
        geometry_paths = self.export_geometry_lab(
            experiment_id=experiment_id,
            session_id=session_id,
            out_dir=out_dir,
            graph_model=graph_model,
        )
        index_paths = self.export_observatory_index(
            experiment_id=experiment_id,
            session_id=session_id,
            out_dir=out_dir,
            graph_payload=graph_payload,
            basin_payload=basin_payload,
            graph_paths=graph_paths,
            basin_paths=basin_paths,
            geometry_paths=geometry_paths,
        )
        return {**graph_paths, **basin_paths, **geometry_paths, **index_paths}

    def export_graph_knowledge_base(
        self,
        *,
        experiment_id: str,
        session_id: str | None,
        out_dir: Path,
        graph_model: dict[str, Any],
    ) -> tuple[dict[str, str], dict[str, Any]]:
        _, health_metrics = self.retrieval_service.build_graph_metrics(experiment_id)
        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "health_metrics": health_metrics,
            "counts": self.store.graph_counts(experiment_id),
            "nodes": graph_model["nodes"],
            "edges": graph_model["edges"],
            "view_modes": {
                "force": "render_coords.force",
                "spectral": "derived_coords.spectral",
                "circular_candidate": "derived_coords.circular_candidate",
                "temporal": "derived_coords.temporal",
                "symmetry": "derived_coords.pca",
                "basin_linked": "derived_coords.basin_linked",
            },
            "filters": graph_model["filters"],
        }
        json_path = out_dir / "graph_knowledge_base.json"
        html_path = out_dir / "graph_knowledge_base.html"
        manifest_path = out_dir / "graph_knowledge_base.manifest.json"
        json_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        manifest_path.write_text(
            json.dumps(
                {
                    "artifact_type": "graph_knowledge_base",
                    "generated_at": payload["generated_at"],
                    "json_path": str(json_path),
                    "html_path": str(html_path),
                    "counts": payload["counts"],
                    "health_metrics": payload["health_metrics"],
                    "view_modes": list(payload["view_modes"].keys()),
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        html_path.write_text(self._graph_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="graph_knowledge_base_html", path=html_path)
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="graph_knowledge_base_json", path=json_path)
        self.runtime_log.emit("INFO", "export_graph", "Generated graph knowledge-base export.", experiment_id=experiment_id, path=str(html_path))
        return (
            {
                "graph_html": str(html_path),
                "graph_json": str(json_path),
                "graph_manifest": str(manifest_path),
            },
            payload,
        )

    def export_behavioral_basin(
        self,
        *,
        experiment_id: str,
        session_id: str | None,
        out_dir: Path,
        snapshot: dict[str, Any] | None = None,
    ) -> tuple[dict[str, str], dict[str, Any]]:
        snapshot = snapshot or self.store.graph_snapshot(experiment_id)
        turns = sorted(snapshot["turns"], key=lambda item: (item["session_id"], item["turn_index"]))
        feedback_by_turn: dict[str, list[dict[str, Any]]] = defaultdict(list)
        membrane_by_turn: dict[str, list[dict[str, Any]]] = defaultdict(list)
        for feedback in snapshot["feedback"]:
            feedback_by_turn[feedback["turn_id"]].append(feedback)
        for event in snapshot["membrane_events"]:
            if event["turn_id"]:
                membrane_by_turn[event["turn_id"]].append(event)

        features: list[list[float]] = []
        rendered_turns: list[dict[str, Any]] = []
        previous_active_labels: set[str] = set()
        previous_profile_name = ""
        previous_pressure = ""
        for turn in turns:
            active_set = json.loads(turn["active_set_json"] or "[]")
            metadata = json.loads(turn.get("metadata_json") or "{}")
            inference = metadata.get("inference_profile", {})
            budget = metadata.get("budget", {})
            if not active_set:
                continue
            knowledge_mass = sum(max(0.0, item["selection"]) for item in active_set if item["domain"] != "behavior")
            behavior_mass = sum(max(0.0, item["selection"]) for item in active_set if item["domain"] == "behavior")
            avg_regard = float(np.mean([item["regard"] for item in active_set])) if active_set else 0.0
            avg_activation = float(np.mean([item["activation"] for item in active_set])) if active_set else 0.0
            memode_fraction = sum(1 for item in active_set if item["node_kind"] == "memode") / max(1, len(active_set))
            feedback_verdicts = [entry["verdict"] for entry in feedback_by_turn.get(turn["id"], [])]
            score_map = {"accept": 1.0, "edit": 0.4, "reject": -1.0, "skip": 0.0}
            feedback_balance = (
                sum(score_map.get(verdict, 0.0) for verdict in feedback_verdicts) / len(feedback_verdicts)
                if feedback_verdicts
                else 0.0
            )
            dominant = max(active_set, key=lambda item: item["selection"])
            active_labels = {item["label"] for item in active_set[:8]}
            overlap = len(active_labels & previous_active_labels) / max(1, len(active_labels | previous_active_labels)) if previous_active_labels else 0.0
            profile_name = str(inference.get("profile_name", "unknown"))
            pressure = str(budget.get("pressure_level", "LOW"))
            phase_transition = bool(
                previous_profile_name
                and (
                    previous_profile_name != profile_name
                    or previous_pressure != pressure
                    or abs(feedback_balance) >= 0.9
                )
            )
            features.append(
                [
                    knowledge_mass,
                    behavior_mass,
                    avg_regard,
                    avg_activation,
                    memode_fraction,
                    feedback_balance,
                    float(budget.get("pressure_ratio", 0.0)),
                    overlap,
                ]
            )
            rendered_turns.append(
                {
                    "turn_id": turn["id"],
                    "session_id": turn["session_id"],
                    "turn_index": turn["turn_index"],
                    "created_at": turn["created_at"],
                    "knowledge_mass": knowledge_mass,
                    "behavior_mass": behavior_mass,
                    "avg_regard": avg_regard,
                    "avg_activation": avg_activation,
                    "memode_fraction": memode_fraction,
                    "feedback_balance": feedback_balance,
                    "dominant_label": dominant["label"],
                    "dominant_domain": dominant["domain"],
                    "feedback_verdicts": feedback_verdicts,
                    "active_set_labels": sorted(active_labels),
                    "active_set_overlap": round(float(overlap), 4),
                    "profile_name": profile_name,
                    "requested_mode": inference.get("requested_mode", "unknown"),
                    "effective_mode": inference.get("effective_mode", "unknown"),
                    "budget_pressure": pressure,
                    "remaining_input_tokens": budget.get("remaining_input_tokens", 0),
                    "reserved_output_tokens": budget.get("reserved_output_tokens", 0),
                    "response_char_cap": inference.get("response_char_cap", 0),
                    "count_method": budget.get("count_method", "unknown"),
                    "membrane_event_count": len(membrane_by_turn.get(turn["id"], [])),
                    "phase_transition": phase_transition,
                }
            )
            previous_active_labels = active_labels
            previous_profile_name = profile_name
            previous_pressure = pressure

        projection = {"method": "svd_on_turn_features", "explained_variance_top2": 0.0}
        if features:
            matrix = np.array(features, dtype=float)
            centered = matrix - matrix.mean(axis=0, keepdims=True)
            if len(rendered_turns) >= 2:
                u, s, vt = np.linalg.svd(centered, full_matrices=False)
                components = vt[:2]
                coords = centered @ components.T
                power = np.square(s)
                projection["explained_variance_top2"] = float(power[:2].sum() / max(1e-9, power.sum()))
            else:
                coords = np.column_stack((centered[:, 0], np.zeros(len(centered))))
            for turn, coord in zip(rendered_turns, coords, strict=True):
                turn["x"] = float(coord[0])
                turn["y"] = float(coord[1])
        attractor_groups: dict[str, list[dict[str, Any]]] = defaultdict(list)
        for turn in rendered_turns:
            attractor_groups[turn["dominant_label"]].append(turn)
        attractors = []
        for label, group in attractor_groups.items():
            attractors.append(
                {
                    "label": label,
                    "count": len(group),
                    "x": float(np.mean([item["x"] for item in group])) if group else 0.0,
                    "y": float(np.mean([item["y"] for item in group])) if group else 0.0,
                    "domain": Counter(item["dominant_domain"] for item in group).most_common(1)[0][0],
                    "session_count": len({item["session_id"] for item in group}),
                }
            )
        transitions: Counter[tuple[str, str]] = Counter()
        for left, right in zip(rendered_turns, rendered_turns[1:], strict=False):
            transitions[(left["dominant_label"], right["dominant_label"])] += 1
        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "turn_count": len(rendered_turns),
            "session_count": len({turn["session_id"] for turn in rendered_turns}),
            "projection": projection,
            "turns": rendered_turns,
            "attractors": sorted(attractors, key=lambda item: item["count"], reverse=True),
            "transitions": [
                {"from": left, "to": right, "count": count}
                for (left, right), count in transitions.most_common()
            ],
            "continuity": {
                "revisitation_ratio": float(
                    sum(count for count in Counter(turn["dominant_label"] for turn in rendered_turns).values() if count > 1)
                    / max(1, len(rendered_turns))
                ),
                "mean_step_distance": float(
                    np.mean(
                        [
                            np.linalg.norm(np.array([right["x"], right["y"]]) - np.array([left["x"], left["y"]]))
                            for left, right in zip(rendered_turns, rendered_turns[1:], strict=False)
                        ]
                    )
                    if len(rendered_turns) > 1
                    else 0.0
                ),
                "phase_transition_count": sum(1 for turn in rendered_turns if turn["phase_transition"]),
            },
        }
        json_path = out_dir / "behavioral_attractor_basin.json"
        html_path = out_dir / "behavioral_attractor_basin.html"
        manifest_path = out_dir / "behavioral_attractor_basin.manifest.json"
        json_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        manifest_path.write_text(
            json.dumps(
                {
                    "artifact_type": "behavioral_attractor_basin",
                    "generated_at": payload["generated_at"],
                    "json_path": str(json_path),
                    "html_path": str(html_path),
                    "turn_count": payload["turn_count"],
                    "session_count": payload["session_count"],
                    "projection": payload["projection"],
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        html_path.write_text(self._basin_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="behavioral_attractor_basin_html", path=html_path)
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="behavioral_attractor_basin_json", path=json_path)
        self.runtime_log.emit("INFO", "export_basin", "Generated behavioral attractor basin export.", experiment_id=experiment_id, path=str(html_path))
        return (
            {
                "basin_html": str(html_path),
                "basin_json": str(json_path),
                "basin_manifest": str(manifest_path),
            },
            payload,
        )

    def export_geometry_lab(
        self,
        *,
        experiment_id: str,
        session_id: str | None,
        out_dir: Path,
        graph_model: dict[str, Any],
    ) -> dict[str, str]:
        graph = graph_model["graph"]
        directed = graph_model["directed_graph"]
        edge_types = graph_model["edge_types"]
        node_order = graph_model["node_order"]
        base_metrics = compute_geometry_metrics(graph, directed, coords=graph_model["coords"], node_order=node_order)
        dominant = base_metrics["communities"][0]["members"] if base_metrics["communities"] else []
        ablations = compute_ablation_report(
            graph,
            directed,
            edge_types=edge_types,
            node_order=node_order,
            drop_community=dominant,
        )
        slices = self._geometry_slices(graph_model, session_id=session_id)
        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "legend": {
                "OBSERVED": "Directly computed from graph topology or explicit recurrence counts.",
                "DERIVED": "Computed from transforms, projections, or ordered-structure proxies.",
                "SPECULATIVE": "Operator-facing hypothesis layer only. Not used for any current score.",
            },
            "nodes": graph_model["nodes"],
            "edges": graph_model["edges"],
            "coordinate_methods": {
                "force": "Render layout only.",
                "spectral": "Laplacian eigenvectors.",
                "pca": "PCA on adjacency rows.",
                "circular_candidate": "Evenly spaced circle using spectral-order angles.",
                "temporal": "Ordered chronology projection.",
            },
            "full_graph": {
                "metrics": base_metrics,
                "ablations": ablations,
            },
            "slices": slices,
        }
        json_path = out_dir / "geometry_diagnostics.json"
        html_path = out_dir / "geometry_lab.html"
        manifest_path = out_dir / "geometry_manifest.json"
        json_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        manifest_path.write_text(
            json.dumps(
                {
                    "artifact_type": "geometry_lab",
                    "generated_at": payload["generated_at"],
                    "json_path": str(json_path),
                    "html_path": str(html_path),
                    "slice_names": list(payload["slices"].keys()),
                    "coordinate_methods": list(payload["coordinate_methods"].keys()),
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        html_path.write_text(self._geometry_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="geometry_lab_html", path=html_path)
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="geometry_diagnostics_json", path=json_path)
        self.runtime_log.emit("INFO", "export_geometry", "Generated geometry diagnostics export.", experiment_id=experiment_id, path=str(html_path))
        return {
            "geometry_html": str(html_path),
            "geometry_json": str(json_path),
            "geometry_manifest": str(manifest_path),
        }

    def export_observatory_index(
        self,
        *,
        experiment_id: str,
        session_id: str | None,
        out_dir: Path,
        graph_payload: dict[str, Any],
        basin_payload: dict[str, Any],
        graph_paths: dict[str, str],
        basin_paths: dict[str, str],
        geometry_paths: dict[str, str],
    ) -> dict[str, str]:
        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "artifacts": {
                "graph": graph_paths,
                "basin": basin_paths,
                "geometry": geometry_paths,
            },
            "summary": {
                "nodes": len(graph_payload["nodes"]),
                "edges": len(graph_payload["edges"]),
                "turns": basin_payload["turn_count"],
                "sessions": basin_payload["session_count"],
            },
        }
        html_path = out_dir / "observatory_index.html"
        json_path = out_dir / "observatory_index.json"
        json_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        html_path.write_text(self._index_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="observatory_index_html", path=html_path)
        return {
            "observatory_index_html": str(html_path),
            "observatory_index_json": str(json_path),
        }

    def _build_graph_model(self, *, snapshot: dict[str, Any], session_id: str | None, basin_payload: dict[str, Any]) -> dict[str, Any]:
        graph = nx.Graph()
        directed = nx.DiGraph()
        nodes: list[dict[str, Any]] = []
        edges: list[dict[str, Any]] = []
        edge_types: dict[tuple[str, str], str] = {}
        feedback_by_turn: dict[str, list[dict[str, Any]]] = defaultdict(list)
        basin_coords = {turn["turn_id"]: {"x": turn.get("x", 0.0), "y": turn.get("y", 0.0)} for turn in basin_payload["turns"]}
        turn_session_map = {turn["id"]: turn["session_id"] for turn in snapshot["turns"]}
        session_meta = {item["id"]: json.loads(item["metadata_json"] or "{}") for item in snapshot["sessions"]}
        turn_meta = {item["id"]: json.loads(item.get("metadata_json") or "{}") for item in snapshot["turns"]}
        document_ids = {item["id"] for item in snapshot["documents"]}
        for feedback in snapshot["feedback"]:
            feedback_by_turn[feedback["turn_id"]].append(feedback)

        def add_node(node_id: str, label: str, kind: str, **extra: Any) -> None:
            node = {"id": node_id, "label": label, "kind": kind, **extra}
            nodes.append(node)
            graph.add_node(node_id, **node)
            directed.add_node(node_id, **node)

        for agent in snapshot["agents"]:
            add_node(agent["id"], agent["name"], "agent", domain="behavior", source_kind="agent", summary=agent["name"], session_id="")
        for session in snapshot["sessions"]:
            meta = session_meta.get(session["id"], {})
            add_node(
                session["id"],
                session["title"],
                "session",
                domain="behavior",
                source_kind="session",
                summary=session["title"],
                session_id=session["id"],
                created_at=session["created_at"],
                requested_mode=meta.get("requested_mode", ""),
                verdicts=[],
            )
            graph.add_edge(session["agent_id"], session["id"], weight=1.0)
            directed.add_edge(session["agent_id"], session["id"], weight=1.0)
            edges.append({"source": session["agent_id"], "target": session["id"], "type": "BELONGS_TO_AGENT", "weight": 1.0})
            edge_types[(session["agent_id"], session["id"])] = "BELONGS_TO_AGENT"
        for document in snapshot["documents"]:
            metadata = json.loads(document["metadata_json"] or "{}")
            add_node(
                document["id"],
                document["title"],
                "document",
                domain="knowledge",
                source_kind=document["kind"],
                summary=document["path"],
                session_id="",
                created_at=document["created_at"],
                provenance=metadata.get("source_path", document["path"]),
                verdicts=[],
            )
        for turn in snapshot["turns"]:
            metadata = turn_meta.get(turn["id"], {})
            inference = metadata.get("inference_profile", {})
            budget = metadata.get("budget", {})
            verdicts = [item["verdict"] for item in feedback_by_turn.get(turn["id"], [])]
            add_node(
                turn["id"],
                f"T{turn['turn_index']}",
                "turn",
                domain="behavior",
                source_kind="turn",
                summary=safe_excerpt(turn["user_text"], limit=140),
                session_id=turn["session_id"],
                created_at=turn["created_at"],
                requested_mode=inference.get("requested_mode", ""),
                effective_mode=inference.get("effective_mode", ""),
                profile_name=inference.get("profile_name", ""),
                budget_pressure=budget.get("pressure_level", ""),
                verdicts=verdicts,
                time_order=turn["turn_index"],
            )
            graph.add_edge(turn["session_id"], turn["id"], weight=1.0)
            directed.add_edge(turn["session_id"], turn["id"], weight=1.0)
            edges.append({"source": turn["session_id"], "target": turn["id"], "type": "BELONGS_TO_SESSION", "weight": 1.0})
            edge_types[(turn["session_id"], turn["id"])] = "BELONGS_TO_SESSION"
        for feedback in snapshot["feedback"]:
            add_node(
                feedback["id"],
                feedback["verdict"].upper(),
                "feedback",
                domain="behavior",
                source_kind="feedback",
                summary=safe_excerpt(feedback["explanation"], limit=140),
                session_id=feedback["session_id"],
                created_at=feedback["created_at"],
                verdicts=[feedback["verdict"]],
            )
            graph.add_edge(feedback["turn_id"], feedback["id"], weight=1.0)
            directed.add_edge(feedback["turn_id"], feedback["id"], weight=1.0)
            edges.append({"source": feedback["turn_id"], "target": feedback["id"], "type": "FED_BACK_BY", "weight": 1.0})
            edge_types[(feedback["turn_id"], feedback["id"])] = "FED_BACK_BY"
        for meme in snapshot["memes"]:
            metadata = json.loads(meme["metadata_json"] or "{}")
            turn_id = metadata.get("turn_id", "")
            add_node(
                meme["id"],
                meme["label"],
                "meme",
                domain=meme["domain"],
                source_kind=meme["source_kind"],
                scope=meme["scope"],
                summary=safe_excerpt(meme["text"], limit=160),
                evidence=float(meme["evidence_n"]),
                reward=float(meme["reward_ema"]),
                risk=float(meme["risk_ema"]),
                provenance=metadata.get("title") or metadata.get("source_path") or metadata.get("origin", ""),
                session_id=metadata.get("session_id", ""),
                created_at=meme["created_at"],
                verdicts=[item["verdict"] for item in feedback_by_turn.get(turn_id, [])],
            )
        for memode in snapshot["memodes"]:
            metadata = json.loads(memode["metadata_json"] or "{}")
            turn_id = metadata.get("turn_id", "")
            add_node(
                memode["id"],
                memode["label"],
                "memode",
                domain=memode["domain"],
                source_kind="memode",
                scope=memode["scope"],
                summary=safe_excerpt(memode["summary"], limit=160),
                evidence=float(memode["evidence_n"]),
                reward=float(memode["reward_ema"]),
                risk=float(memode["risk_ema"]),
                provenance=metadata.get("title") or metadata.get("origin", ""),
                session_id=metadata.get("session_id", ""),
                created_at=memode["created_at"],
                verdicts=[item["verdict"] for item in feedback_by_turn.get(turn_id, [])],
            )
        for edge in snapshot["edges"]:
            if edge["src_id"] not in graph or edge["dst_id"] not in graph:
                continue
            graph.add_edge(edge["src_id"], edge["dst_id"], weight=float(edge["weight"]))
            directed.add_edge(edge["src_id"], edge["dst_id"], weight=float(edge["weight"]))
            edge_payload = {
                "source": edge["src_id"],
                "target": edge["dst_id"],
                "type": edge["edge_type"],
                "weight": float(edge["weight"]),
            }
            edges.append(edge_payload)
            edge_types[(edge["src_id"], edge["dst_id"])] = edge["edge_type"]

        node_order = [
            node["id"]
            for node in sorted(
                nodes,
                key=lambda item: (
                    0 if item["kind"] == "turn" else 1 if item["kind"] == "feedback" else 2,
                    item.get("session_id", ""),
                    item.get("time_order", 999999),
                    item.get("created_at", ""),
                    item["label"],
                ),
            )
        ]
        coords = compute_coordinate_sets(graph, node_order=node_order)
        geometry = compute_geometry_metrics(graph, directed, coords=coords, node_order=node_order)
        community_lookup: dict[str, int] = {}
        for item in geometry["communities"]:
            for member in item["members"]:
                community_lookup[member] = item["community_id"]
        for node in nodes:
            node["cluster_id"] = community_lookup.get(node["id"], -1)
            node["render_coords"] = {"force": coords["force"].get(node["id"], {"x": 0.0, "y": 0.0})}
            node["derived_coords"] = {
                "spectral": coords["spectral"].get(node["id"], {"x": 0.0, "y": 0.0}),
                "pca": coords["pca"].get(node["id"], {"x": 0.0, "y": 0.0}),
                "circular_candidate": coords["circular_candidate"].get(node["id"], {"x": 0.0, "y": 0.0}),
                "temporal": coords["temporal"].get(node["id"], {"x": 0.0, "y": 0.0}),
                "basin_linked": basin_coords.get(node["id"], coords["spectral"].get(node["id"], {"x": 0.0, "y": 0.0})),
            }
        filters = {
            "sessions": sorted({node.get("session_id", "") for node in nodes if node.get("session_id")}),
            "kinds": sorted({node["kind"] for node in nodes}),
            "domains": sorted({node.get("domain", "") for node in nodes if node.get("domain")}),
            "sources": sorted({node.get("source_kind", "") for node in nodes if node.get("source_kind")}),
            "verdicts": sorted({verdict for node in nodes for verdict in node.get("verdicts", [])}),
        }
        latest_active_ids: list[str] = []
        if session_id:
            turns = [turn for turn in snapshot["turns"] if turn["session_id"] == session_id]
            if turns:
                latest_turn = sorted(turns, key=lambda item: item["turn_index"])[-1]
                latest_active_ids = [item["node_id"] for item in json.loads(latest_turn["active_set_json"] or "[]")]
        return {
            "nodes": nodes,
            "edges": edges,
            "graph": graph,
            "directed_graph": directed,
            "edge_types": edge_types,
            "coords": coords,
            "node_order": node_order,
            "filters": filters,
            "latest_active_ids": latest_active_ids,
        }

    def _geometry_slices(self, graph_model: dict[str, Any], *, session_id: str | None) -> dict[str, Any]:
        nodes = graph_model["nodes"]
        graph = graph_model["graph"]
        directed = graph_model["directed_graph"]
        slices: dict[str, Any] = {}
        slices["full_graph"] = self._slice_payload("full_graph", graph, directed, graph_model["coords"], graph_model["node_order"])
        if session_id:
            session_nodes = {node["id"] for node in nodes if node.get("session_id") == session_id or node["id"] == session_id}
            if len(session_nodes) >= 2:
                slices["current_session"] = self._slice_payload("current_session", *self._subgraphs(graph, directed, session_nodes))
        active_nodes = set(graph_model["latest_active_ids"])
        if len(active_nodes) >= 2:
            slices["current_active_set"] = self._slice_payload("current_active_set", *self._subgraphs(graph, directed, active_nodes))
        for verdict in ("accept", "edit", "reject", "skip"):
            verdict_nodes = {node["id"] for node in nodes if verdict in node.get("verdicts", [])}
            if len(verdict_nodes) >= 2:
                slices[f"verdict_{verdict}"] = self._slice_payload(f"verdict_{verdict}", *self._subgraphs(graph, directed, verdict_nodes))
        return slices

    def _slice_payload(
        self,
        name: str,
        graph: nx.Graph,
        directed: nx.DiGraph,
        coords: dict[str, dict[str, dict[str, float]]] | None = None,
        node_order: list[str] | None = None,
    ) -> dict[str, Any]:
        coords = coords or compute_coordinate_sets(graph, node_order=node_order)
        metrics = compute_geometry_metrics(graph, directed, coords=coords, node_order=node_order)
        return {
            "name": name,
            "counts": metrics["counts"],
            "metrics": metrics["metrics"],
            "communities": metrics["communities"],
            "projection_quality": metrics["projection_quality"],
        }

    def _subgraphs(self, graph: nx.Graph, directed: nx.DiGraph, node_ids: set[str]):
        subgraph = graph.subgraph(node_ids).copy()
        subdirected = directed.subgraph(node_ids).copy()
        order = [node for node in graph.nodes() if node in node_ids]
        coords = compute_coordinate_sets(subgraph, node_order=order)
        return subgraph, subdirected, coords, order

    def _graph_html(self, payload: dict[str, Any]) -> str:
        data = json.dumps(payload, ensure_ascii=True)
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>EDEN Graph Knowledge Base</title>
  <style>
    :root {{
      --bg: #090603;
      --panel: rgba(27, 15, 4, 0.88);
      --amber: #ffbf66;
      --amber-soft: #d79a43;
      --grid: rgba(255, 191, 102, 0.08);
      --text: #ffe2af;
      --muted: #c08b45;
      --edge: rgba(255, 191, 102, 0.16);
      --cyan: #7de3ff;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: Menlo, SFMono-Regular, monospace;
      background:
        radial-gradient(circle at 20% 20%, rgba(255, 180, 70, 0.18), transparent 28%),
        radial-gradient(circle at 80% 30%, rgba(255, 120, 40, 0.14), transparent 24%),
        linear-gradient(180deg, #050403 0%, #0b0603 100%);
      color: var(--text);
      min-height: 100vh;
    }}
    header {{
      padding: 18px 22px 12px;
      border-bottom: 1px solid rgba(255, 191, 102, 0.25);
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }}
    main {{
      display: grid;
      grid-template-columns: 330px 1fr 340px;
      gap: 14px;
      padding: 14px;
    }}
    .panel {{
      background: var(--panel);
      border: 1px solid rgba(255, 191, 102, 0.25);
      border-radius: 14px;
      box-shadow: 0 0 24px rgba(0, 0, 0, 0.34);
      overflow: hidden;
    }}
    .panel h2, .panel h3 {{
      margin: 0;
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255, 191, 102, 0.18);
      font-size: 14px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--amber);
    }}
    .panel .body {{
      padding: 12px 14px;
    }}
    .controls {{
      display: grid;
      gap: 10px;
    }}
    select, input {{
      width: 100%;
      background: #120b04;
      border: 1px solid rgba(255, 191, 102, 0.3);
      color: var(--text);
      border-radius: 10px;
      padding: 8px 10px;
    }}
    canvas {{
      width: 100%;
      height: 70vh;
      display: block;
      background:
        radial-gradient(circle at center, rgba(255, 191, 102, 0.03), transparent 45%),
        linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0));
    }}
    .cards {{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      margin-top: 10px;
    }}
    .card {{
      background: rgba(255, 191, 102, 0.05);
      border: 1px solid rgba(255, 191, 102, 0.14);
      border-radius: 10px;
      padding: 10px;
    }}
    .muted {{ color: var(--muted); }}
    .legend span {{
      display: inline-block;
      margin-right: 10px;
    }}
    pre {{
      white-space: pre-wrap;
      font-family: inherit;
      margin: 0;
    }}
    @media (max-width: 1100px) {{
      main {{ grid-template-columns: 1fr; }}
      canvas {{ height: 50vh; }}
    }}
  </style>
</head>
<body>
  <script>const payload = {data};</script>
  <header>
    <div>
      <div style="color: var(--amber); font-size: 28px; letter-spacing: 0.14em;">EDEN / GRAPH KNOWLEDGE BASE</div>
      <div class="muted">Render coordinates and derived coordinates are separated. A circle on-screen is not evidence by itself.</div>
    </div>
    <div class="legend">
      <span>modes: force / spectral / circular / temporal / symmetry / basin-linked</span>
    </div>
  </header>
  <main>
    <section class="panel">
      <h2>Filters</h2>
      <div class="body controls">
        <input id="search" placeholder="search label / summary / provenance" />
        <select id="mode"></select>
        <select id="sessionFilter"></select>
        <select id="kindFilter"></select>
        <select id="domainFilter"></select>
        <select id="sourceFilter"></select>
        <select id="verdictFilter"></select>
        <input id="timeFilter" placeholder="created_at contains (e.g. 2026-03-06)" />
      </div>
      <h2>Health</h2>
      <div class="body" id="health"></div>
    </section>
    <section class="panel">
      <h2>Graph View</h2>
      <canvas id="canvas" width="1200" height="760"></canvas>
      <div class="body muted">Hover for inspection. Click to pin. Coordinate mode only changes the view surface; it does not change the underlying graph.</div>
    </section>
    <section class="panel">
      <h2>Inspector</h2>
      <div class="body">
        <pre id="inspector">Hover a node to inspect provenance, verdicts, and budget-linked turn data.</pre>
      </div>
    </section>
  </main>
  <script>
    const nodes = payload.nodes;
    const edges = payload.edges;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const inspector = document.getElementById("inspector");
    const mode = document.getElementById("mode");
    const search = document.getElementById("search");
    const sessionFilter = document.getElementById("sessionFilter");
    const kindFilter = document.getElementById("kindFilter");
    const domainFilter = document.getElementById("domainFilter");
    const sourceFilter = document.getElementById("sourceFilter");
    const verdictFilter = document.getElementById("verdictFilter");
    const timeFilter = document.getElementById("timeFilter");
    const state = {{ pinned: null, hover: null }};

    const optionize = (element, label, values) => {{
      element.innerHTML = `<option value="">${{label}}</option>` + values.map(v => `<option value="${{v}}">${{v}}</option>`).join("");
    }};
    optionize(mode, "coord mode", Object.keys(payload.view_modes));
    optionize(sessionFilter, "all sessions", payload.filters.sessions);
    optionize(kindFilter, "all kinds", payload.filters.kinds);
    optionize(domainFilter, "all domains", payload.filters.domains);
    optionize(sourceFilter, "all sources", payload.filters.sources);
    optionize(verdictFilter, "all verdicts", payload.filters.verdicts);
    mode.value = "force";

    document.getElementById("health").innerHTML = `
      <div class="cards">
        <div class="card"><div class="muted">nodes</div><div>${{payload.counts.memes + payload.counts.memodes + payload.counts.turns + payload.counts.documents + payload.counts.feedback + payload.counts.sessions + 1}}</div></div>
        <div class="card"><div class="muted">edges</div><div>${{payload.health_metrics.edge_count.toFixed(0)}}</div></div>
        <div class="card"><div class="muted">triadic closure</div><div>${{payload.health_metrics.triadic_closure.toFixed(3)}}</div></div>
        <div class="card"><div class="muted">memode coverage</div><div>${{payload.health_metrics.memode_coverage.toFixed(3)}}</div></div>
      </div>`;

    function filteredNodes() {{
      const text = search.value.trim().toLowerCase();
      const session = sessionFilter.value;
      const kind = kindFilter.value;
      const domain = domainFilter.value;
      const source = sourceFilter.value;
      const verdict = verdictFilter.value;
      const time = timeFilter.value.trim();
      return nodes.filter(node => {{
        if (session && node.session_id !== session) return false;
        if (kind && node.kind !== kind) return false;
        if (domain && node.domain !== domain) return false;
        if (source && node.source_kind !== source) return false;
        if (verdict && !(node.verdicts || []).includes(verdict)) return false;
        if (time && !(node.created_at || "").includes(time)) return false;
        if (!text) return true;
        const haystack = [node.label, node.summary, node.provenance, node.profile_name, node.requested_mode].join(" ").toLowerCase();
        return haystack.includes(text);
      }});
    }}

    function coord(node) {{
      const selected = mode.value;
      const source = selected === "force" ? node.render_coords.force : (node.derived_coords[selected] || node.render_coords.force);
      return source || {{ x: 0, y: 0 }};
    }}

    function scale(points) {{
      const xs = points.map(p => p.x);
      const ys = points.map(p => p.y);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      return point => {{
        const px = 60 + ((point.x - minX) / Math.max(1e-9, maxX - minX)) * (canvas.width - 120);
        const py = 60 + ((point.y - minY) / Math.max(1e-9, maxY - minY)) * (canvas.height - 120);
        return {{ x: px, y: py }};
      }};
    }}

    function color(node) {{
      if (node.kind === "memode") return "#7de3ff";
      if (node.kind === "feedback") return "#ff7b72";
      if (node.kind === "turn") return "#fff27d";
      if (node.kind === "document") return "#8effa0";
      return "#ffbf66";
    }}

    function draw() {{
      const visibleNodes = filteredNodes();
      const visibleIds = new Set(visibleNodes.map(node => node.id));
      const mapped = visibleNodes.map(node => ({{ node, raw: coord(node) }}));
      if (!mapped.length) {{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        inspector.textContent = "No nodes match the current filters.";
        return;
      }}
      const transform = scale(mapped.map(item => item.raw));
      mapped.forEach(item => item.screen = transform(item.raw));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.02)";
      for (let x = 0; x < canvas.width; x += 60) ctx.fillRect(x, 0, 1, canvas.height);
      for (let y = 0; y < canvas.height; y += 60) ctx.fillRect(0, y, canvas.width, 1);
      ctx.strokeStyle = "rgba(255, 191, 102, 0.16)";
      edges.forEach(edge => {{
        if (!visibleIds.has(edge.source) || !visibleIds.has(edge.target)) return;
        const left = mapped.find(item => item.node.id === edge.source);
        const right = mapped.find(item => item.node.id === edge.target);
        if (!left || !right) return;
        ctx.lineWidth = Math.max(0.5, Math.min(2.5, edge.weight));
        ctx.beginPath();
        ctx.moveTo(left.screen.x, left.screen.y);
        ctx.lineTo(right.screen.x, right.screen.y);
        ctx.stroke();
      }});
      mapped.forEach(item => {{
        ctx.fillStyle = color(item.node);
        const radius = item.node.id === state.pinned?.id ? 8 : 5;
        ctx.beginPath();
        ctx.arc(item.screen.x, item.screen.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }});
      const focused = state.pinned || state.hover;
      if (focused) {{
        inspector.textContent = JSON.stringify(focused, null, 2);
      }}
      canvas._mapped = mapped;
    }}

    function nearest(event) {{
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) * (canvas.width / rect.width);
      const y = (event.clientY - rect.top) * (canvas.height / rect.height);
      const mapped = canvas._mapped || [];
      let best = null;
      let bestDist = 999999;
      mapped.forEach(item => {{
        const dist = Math.hypot(item.screen.x - x, item.screen.y - y);
        if (dist < bestDist && dist < 12) {{
          bestDist = dist;
          best = item.node;
        }}
      }});
      return best;
    }}

    [mode, search, sessionFilter, kindFilter, domainFilter, sourceFilter, verdictFilter, timeFilter].forEach(el => el.addEventListener("input", draw));
    canvas.addEventListener("mousemove", event => {{ state.hover = nearest(event); draw(); }});
    canvas.addEventListener("mouseleave", () => {{ state.hover = null; draw(); }});
    canvas.addEventListener("click", event => {{ state.pinned = nearest(event); draw(); }});
    draw();
  </script>
</body>
</html>"""

    def _basin_html(self, payload: dict[str, Any]) -> str:
        data = json.dumps(payload, ensure_ascii=True)
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>EDEN Behavioral Attractor Basin</title>
  <style>
    body {{
      margin: 0;
      font-family: Menlo, SFMono-Regular, monospace;
      background: radial-gradient(circle at 25% 25%, rgba(255, 191, 102, 0.18), transparent 30%), linear-gradient(180deg, #060403, #110702);
      color: #ffe2af;
    }}
    header, section {{
      padding: 14px 18px;
    }}
    header {{
      border-bottom: 1px solid rgba(255, 191, 102, 0.22);
      display: flex;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }}
    main {{
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 14px;
      padding: 14px;
    }}
    .panel {{
      background: rgba(27, 15, 4, 0.9);
      border: 1px solid rgba(255, 191, 102, 0.22);
      border-radius: 12px;
    }}
    canvas {{
      width: 100%;
      height: 72vh;
      display: block;
    }}
    .body {{
      padding: 12px 14px;
    }}
    select {{
      width: 100%;
      background: #120b04;
      color: #ffe2af;
      border: 1px solid rgba(255, 191, 102, 0.28);
      border-radius: 10px;
      padding: 8px 10px;
    }}
    .cards {{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
    }}
    .card {{
      background: rgba(255, 191, 102, 0.05);
      border: 1px solid rgba(255, 191, 102, 0.14);
      border-radius: 10px;
      padding: 10px;
    }}
    pre {{
      white-space: pre-wrap;
      margin: 0;
    }}
    @media (max-width: 1050px) {{
      main {{ grid-template-columns: 1fr; }}
      canvas {{ height: 50vh; }}
    }}
  </style>
</head>
<body>
  <script>const payload = {data};</script>
  <header>
    <div>
      <div style="font-size: 28px; letter-spacing: 0.14em; color: #ffbf66;">EDEN / BEHAVIORAL ATTRACTOR BASIN</div>
      <div>Projection method: SVD on real turn features. Explained variance top2: ${{(payload.projection.explained_variance_top2 || 0).toFixed(3)}}</div>
    </div>
    <div class="cards" style="min-width: 340px;">
      <div class="card"><div>turns</div><strong>${{payload.turn_count}}</strong></div>
      <div class="card"><div>sessions</div><strong>${{payload.session_count}}</strong></div>
      <div class="card"><div>phase transitions</div><strong>${{payload.continuity.phase_transition_count}}</strong></div>
    </div>
  </header>
  <main>
    <section class="panel">
      <div class="body"><canvas id="canvas" width="1200" height="760"></canvas></div>
    </section>
    <section class="panel">
      <div class="body">
        <select id="sessionFilter"></select>
        <pre id="inspector">Hover a turn to inspect inference circumstances, budget pressure, recurrence, and membrane markers.</pre>
      </div>
    </section>
  </main>
  <script>
    const turns = payload.turns;
    const sessionFilter = document.getElementById("sessionFilter");
    const sessions = [...new Set(turns.map(turn => turn.session_id))].sort();
    sessionFilter.innerHTML = `<option value="">all sessions</option>` + sessions.map(s => `<option value="${{s}}">${{s}}</option>`).join("");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const inspector = document.getElementById("inspector");
    const state = {{ hover: null }};
    function color(turn) {{
      if (turn.budget_pressure === "HIGH") return "#ff7b72";
      if (turn.phase_transition) return "#7de3ff";
      if ((turn.feedback_verdicts || []).includes("accept")) return "#8effa0";
      return "#ffbf66";
    }}
    function filtered() {{
      return turns.filter(turn => !sessionFilter.value || turn.session_id === sessionFilter.value);
    }}
    function scale(values, key, size, pad) {{
      const min = Math.min(...values.map(item => item[key]));
      const max = Math.max(...values.map(item => item[key]));
      return value => pad + ((value - min) / Math.max(1e-9, max - min)) * (size - pad * 2);
    }}
    function draw() {{
      const visible = filtered();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!visible.length) return;
      const scaleX = scale(visible, "x", canvas.width, 60);
      const scaleY = scale(visible, "y", canvas.height, 60);
      ctx.strokeStyle = "rgba(255, 191, 102, 0.26)";
      visible.forEach((turn, index) => {{
        if (!index) return;
        const prev = visible[index - 1];
        ctx.beginPath();
        ctx.moveTo(scaleX(prev.x), scaleY(prev.y));
        ctx.lineTo(scaleX(turn.x), scaleY(turn.y));
        ctx.stroke();
      }});
      visible.forEach(turn => {{
        turn._screen = {{ x: scaleX(turn.x), y: scaleY(turn.y) }};
        ctx.fillStyle = color(turn);
        ctx.beginPath();
        ctx.arc(turn._screen.x, turn._screen.y, turn.phase_transition ? 8 : 6, 0, Math.PI * 2);
        ctx.fill();
      }});
      if (state.hover) inspector.textContent = JSON.stringify(state.hover, null, 2);
    }}
    function nearest(event) {{
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) * (canvas.width / rect.width);
      const y = (event.clientY - rect.top) * (canvas.height / rect.height);
      let best = null;
      let bestDist = 999999;
      filtered().forEach(turn => {{
        if (!turn._screen) return;
        const dist = Math.hypot(turn._screen.x - x, turn._screen.y - y);
        if (dist < bestDist && dist < 14) {{
          bestDist = dist;
          best = turn;
        }}
      }});
      return best;
    }}
    sessionFilter.addEventListener("input", draw);
    canvas.addEventListener("mousemove", event => {{ state.hover = nearest(event); draw(); }});
    canvas.addEventListener("mouseleave", () => {{ state.hover = null; draw(); }});
    draw();
  </script>
</body>
</html>"""

    def _geometry_html(self, payload: dict[str, Any]) -> str:
        data = json.dumps(payload, ensure_ascii=True)
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>EDEN Geometry Lab</title>
  <style>
    body {{
      margin: 0;
      font-family: Menlo, SFMono-Regular, monospace;
      background: radial-gradient(circle at 20% 20%, rgba(125, 227, 255, 0.12), transparent 24%), radial-gradient(circle at 80% 30%, rgba(255, 191, 102, 0.12), transparent 28%), linear-gradient(180deg, #060403, #100804);
      color: #ffe2af;
    }}
    header, main {{
      padding: 14px 18px;
    }}
    main {{
      display: grid;
      grid-template-columns: 320px 1fr 360px;
      gap: 14px;
    }}
    .panel {{
      background: rgba(27, 15, 4, 0.9);
      border: 1px solid rgba(255, 191, 102, 0.22);
      border-radius: 12px;
      overflow: hidden;
    }}
    .panel h2 {{
      margin: 0;
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255, 191, 102, 0.18);
      font-size: 14px;
      color: #ffbf66;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}
    .body {{
      padding: 12px 14px;
    }}
    select, input[type=range] {{
      width: 100%;
      background: #120b04;
      color: #ffe2af;
      border: 1px solid rgba(255, 191, 102, 0.28);
      border-radius: 10px;
      padding: 8px 10px;
      margin-bottom: 10px;
    }}
    canvas {{
      width: 100%;
      height: 70vh;
      display: block;
    }}
    .metric {{
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 191, 102, 0.12);
    }}
    .obs {{ color: #8effa0; }}
    .drv {{ color: #7de3ff; }}
    .spc {{ color: #ff9ec0; }}
    pre {{
      margin: 0;
      white-space: pre-wrap;
    }}
    @media (max-width: 1100px) {{
      main {{ grid-template-columns: 1fr; }}
      canvas {{ height: 50vh; }}
    }}
  </style>
</head>
<body>
  <script>const payload = {data};</script>
  <header>
    <div style="font-size: 28px; letter-spacing: 0.14em; color: #ffbf66;">EDEN / GEOMETRY LAB</div>
    <div>All geometry labels are evidence-scoped. OBSERVED is direct graph computation. DERIVED is transform-based. SPECULATIVE is not used in any current score.</div>
  </header>
  <main>
    <section class="panel">
      <h2>Controls</h2>
      <div class="body">
        <select id="sliceSelect"></select>
        <select id="coordSelect"></select>
        <label>minimum metric score</label>
        <input id="threshold" type="range" min="0" max="1" step="0.05" value="0" />
        <div id="legend">
          <div><span class="obs">OBSERVED</span> direct graph evidence</div>
          <div><span class="drv">DERIVED</span> projection / symmetry proxy</div>
          <div><span class="spc">SPECULATIVE</span> operator hypothesis only</div>
        </div>
      </div>
    </section>
    <section class="panel">
      <h2>Slice View</h2>
      <div class="body"><canvas id="canvas" width="1200" height="760"></canvas></div>
    </section>
    <section class="panel">
      <h2>Metrics + Ablations</h2>
      <div class="body">
        <div id="metrics"></div>
        <pre id="ablation"></pre>
      </div>
    </section>
  </main>
  <script>
    const nodes = payload.nodes;
    const edges = payload.edges;
    const slices = payload.slices;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const sliceSelect = document.getElementById("sliceSelect");
    const coordSelect = document.getElementById("coordSelect");
    const threshold = document.getElementById("threshold");
    const metricsEl = document.getElementById("metrics");
    const ablationEl = document.getElementById("ablation");
    sliceSelect.innerHTML = Object.keys(slices).map(name => `<option value="${{name}}">${{name}}</option>`).join("");
    coordSelect.innerHTML = Object.keys(payload.coordinate_methods).map(name => `<option value="${{name}}">${{name}}</option>`).join("");
    coordSelect.value = "spectral";

    function sliceNodeIds() {{
      const name = sliceSelect.value;
      if (name === "full_graph") return new Set(nodes.map(node => node.id));
      if (name === "current_session") return new Set(nodes.filter(node => node.session_id === payload.session_id || node.id === payload.session_id).map(node => node.id));
      if (name === "current_active_set") return new Set(nodes.filter(node => (node.source_kind === "feedback" || node.kind === "memode" || node.kind === "meme") && node.session_id === payload.session_id).map(node => node.id));
      if (name.startsWith("verdict_")) {{
        const verdict = name.replace("verdict_", "");
        return new Set(nodes.filter(node => (node.verdicts || []).includes(verdict)).map(node => node.id));
      }}
      return new Set(nodes.map(node => node.id));
    }}

    function coord(node) {{
      const selected = coordSelect.value;
      return (node.derived_coords[selected] || node.render_coords.force || {{ x: 0, y: 0 }});
    }}

    function scale(points) {{
      const xs = points.map(p => p.x);
      const ys = points.map(p => p.y);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      return point => ({{
        x: 60 + ((point.x - minX) / Math.max(1e-9, maxX - minX)) * (canvas.width - 120),
        y: 60 + ((point.y - minY) / Math.max(1e-9, maxY - minY)) * (canvas.height - 120),
      }});
    }}

    function color(node) {{
      if (node.cluster_id === -1) return "#ffbf66";
      const palette = ["#ffbf66", "#7de3ff", "#8effa0", "#ff9ec0", "#fff27d", "#b39dff"];
      return palette[node.cluster_id % palette.length];
    }}

    function draw() {{
      const ids = sliceNodeIds();
      const visible = nodes.filter(node => ids.has(node.id));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!visible.length) return;
      const mapped = visible.map(node => ({{ node, raw: coord(node) }}));
      const transform = scale(mapped.map(item => item.raw));
      mapped.forEach(item => item.screen = transform(item.raw));
      ctx.strokeStyle = "rgba(255, 191, 102, 0.16)";
      edges.forEach(edge => {{
        if (!ids.has(edge.source) || !ids.has(edge.target)) return;
        const left = mapped.find(item => item.node.id === edge.source);
        const right = mapped.find(item => item.node.id === edge.target);
        if (!left || !right) return;
        ctx.lineWidth = Math.max(0.5, Math.min(2.5, edge.weight));
        ctx.beginPath();
        ctx.moveTo(left.screen.x, left.screen.y);
        ctx.lineTo(right.screen.x, right.screen.y);
        ctx.stroke();
      }});
      mapped.forEach(item => {{
        ctx.fillStyle = color(item.node);
        ctx.beginPath();
        ctx.arc(item.screen.x, item.screen.y, item.node.kind === "memode" ? 8 : 6, 0, Math.PI * 2);
        ctx.fill();
      }});
    }}

    function renderMetrics() {{
      const slice = slices[sliceSelect.value];
      const minScore = Number(threshold.value);
      const metrics = Object.entries(slice.metrics).filter(([, value]) => value.score >= minScore);
      metricsEl.innerHTML = metrics.map(([name, value]) => {{
        const cls = value.label === "OBSERVED" ? "obs" : value.label === "DERIVED" ? "drv" : "spc";
        return `<div class="metric"><div class="${{cls}}">${{value.label}}</div><strong>${{name}}</strong>: ${{value.score.toFixed(3)}}<br/><span>${{value.method}}</span></div>`;
      }}).join("");
      ablationEl.textContent = JSON.stringify(payload.full_graph.ablations, null, 2);
    }}

    [sliceSelect, coordSelect, threshold].forEach(el => el.addEventListener("input", () => {{ renderMetrics(); draw(); }}));
    renderMetrics();
    draw();
  </script>
</body>
</html>"""

    def _index_html(self, payload: dict[str, Any]) -> str:
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>EDEN Observatory Index</title>
  <style>
    body {{
      margin: 0;
      font-family: Menlo, SFMono-Regular, monospace;
      background: linear-gradient(180deg, #050403, #0f0703);
      color: #ffe2af;
      padding: 18px;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 18px;
    }}
    .card {{
      background: rgba(27, 15, 4, 0.9);
      border: 1px solid rgba(255, 191, 102, 0.22);
      border-radius: 14px;
      padding: 16px;
    }}
    a {{ color: #7de3ff; }}
    @media (max-width: 900px) {{ .grid {{ grid-template-columns: 1fr; }} }}
  </style>
</head>
<body>
  <div style="font-size: 28px; letter-spacing: 0.14em; color: #ffbf66;">EDEN / OBSERVATORY INDEX</div>
  <div>experiment={payload["experiment_id"]} generated_at={payload["generated_at"]}</div>
  <div class="grid">
    <div class="card">
      <h3>Graph Knowledge Base</h3>
      <div>nodes={payload["summary"]["nodes"]} edges={payload["summary"]["edges"]}</div>
      <a href="{Path(payload["artifacts"]["graph"]["graph_html"]).name}">open graph html</a>
    </div>
    <div class="card">
      <h3>Behavioral Basin</h3>
      <div>turns={payload["summary"]["turns"]} sessions={payload["summary"]["sessions"]}</div>
      <a href="{Path(payload["artifacts"]["basin"]["basin_html"]).name}">open basin html</a>
    </div>
    <div class="card">
      <h3>Geometry Lab</h3>
      <div>full graph metrics + ablations + slice inspector</div>
      <a href="{Path(payload["artifacts"]["geometry"]["geometry_html"]).name}">open geometry lab</a>
    </div>
  </div>
</body>
</html>"""
