from __future__ import annotations

import json
from collections import Counter, defaultdict
from copy import deepcopy
from typing import Any

from .clustering import build_cluster_summaries
from .contracts import ASSEMBLY_RENDER_MODES, MEMODE_SUPPORT_EDGE_ALLOWLIST


def build_graph_planes(
    *,
    snapshot: dict[str, Any],
    nodes: list[dict[str, Any]],
    edges: list[dict[str, Any]],
    measurement_events: list[dict[str, Any]],
    semantic_coord_lookup: dict[str, dict[str, float]],
) -> dict[str, Any]:
    node_lookup = {node["id"]: node for node in nodes}
    semantic_nodes = []
    assemblies = []
    runtime_nodes = []
    for node in nodes:
        if node.get("kind") == "meme":
            semantic = deepcopy(node)
            semantic["render_coords"] = {"force": semantic_coord_lookup.get(node["id"], {"x": 0.0, "y": 0.0})}
            semantic_nodes.append(semantic)
        elif node.get("kind") == "memode":
            metadata = json.loads(node.get("metadata_json") or "{}") if node.get("metadata_json") else {}
            assemblies.append(
                {
                    "id": node["id"],
                    "label": node.get("label", ""),
                    "summary": node.get("summary", ""),
                    "domain": node.get("domain", ""),
                    "member_meme_ids": list(node.get("member_ids") or metadata.get("member_ids") or []),
                    "supporting_edge_ids": list(node.get("supporting_edge_ids") or metadata.get("supporting_edge_ids") or []),
                    "member_order": list(node.get("member_order") or metadata.get("member_order") or []),
                    "invariance_summary": str(node.get("invariance_summary") or metadata.get("invariance_summary") or node.get("summary", "")),
                    "occurrence_examples": list(node.get("occurrence_examples") or metadata.get("occurrence_examples") or []),
                    "evidence_label": str(node.get("evidence_label") or metadata.get("evidence_label") or "AUTO_DERIVED"),
                    "operator_label": str(node.get("operator_label") or metadata.get("operator_label") or ""),
                    "confidence": float(node.get("confidence", metadata.get("confidence", 0.0)) or 0.0),
                    "created_at": node.get("created_at"),
                    "updated_at": node.get("updated_at", node.get("created_at")),
                    "render_mode_default": ASSEMBLY_RENDER_MODES[0],
                    "measurement_history": deepcopy(node.get("measurement_history") or []),
                }
            )
        else:
            runtime_nodes.append(deepcopy(node))

    semantic_edges = []
    runtime_edges = []
    semantic_edge_ids: set[str] = set()
    for edge in edges:
        source = node_lookup.get(edge["source"])
        target = node_lookup.get(edge["target"])
        if source and target and source.get("kind") == "meme" and target.get("kind") == "meme" and edge.get("type") in MEMODE_SUPPORT_EDGE_ALLOWLIST:
            semantic_edges.append(deepcopy(edge))
            if edge.get("id"):
                semantic_edge_ids.add(str(edge["id"]))
        elif edge.get("type") != "MATERIALIZES_AS_MEMODE":
            runtime_edges.append(deepcopy(edge))

    cluster_summaries, cluster_lookup = build_cluster_summaries(
        semantic_nodes=semantic_nodes,
        semantic_edges=semantic_edges,
        coord_lookup=semantic_coord_lookup,
        measurement_events=measurement_events,
    )
    for node in semantic_nodes:
        cluster = cluster_lookup.get(node["id"], {})
        node["cluster_signature"] = cluster.get("cluster_signature", "")
        node["cluster_label"] = cluster.get("display_label", "")
    active_set_slices = []
    latest_by_session: dict[str, dict[str, Any]] = {}
    for turn in sorted(snapshot.get("turns", []), key=lambda item: (item.get("session_id", ""), item.get("turn_index", 0))):
        active_items = json.loads(turn.get("active_set_json") or "[]")
        slice_payload = {
            "turn_id": turn["id"],
            "session_id": turn["session_id"],
            "turn_index": int(turn.get("turn_index", 0) or 0),
            "created_at": turn.get("created_at"),
            "node_ids": [item.get("node_id") for item in active_items if item.get("node_id")],
            "meme_ids": [item.get("node_id") for item in active_items if item.get("node_kind") == "meme" and item.get("node_id")],
            "memode_ids": [item.get("node_id") for item in active_items if item.get("node_kind") == "memode" and item.get("node_id")],
            "domain_mix": dict(sorted(Counter(str(item.get("domain", "unknown")) for item in active_items).items())),
            "size": len(active_items),
        }
        active_set_slices.append(slice_payload)
        latest_by_session[turn["session_id"]] = slice_payload
    return {
        "semantic_nodes": sorted(semantic_nodes, key=lambda item: item["id"]),
        "semantic_edges": sorted(semantic_edges, key=lambda item: (item["source"], item["target"], item.get("type", ""), item.get("id", ""))),
        "runtime_nodes": sorted(runtime_nodes, key=lambda item: (item.get("kind", ""), item["id"])),
        "runtime_edges": sorted(runtime_edges, key=lambda item: (item["source"], item["target"], item.get("type", ""), item.get("id", ""))),
        "assemblies": sorted(assemblies, key=lambda item: item["id"]),
        "cluster_summaries": cluster_summaries,
        "cluster_lookup": cluster_lookup,
        "active_set_slices": active_set_slices,
        "latest_active_by_session": latest_by_session,
        "semantic_edge_ids": semantic_edge_ids,
    }
