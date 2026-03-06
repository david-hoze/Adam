from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

import networkx as nx
import numpy as np

from ..utils import now_utc, safe_excerpt


class ObservatoryExporter:
    def __init__(self, store, retrieval_service, runtime_log) -> None:
        self.store = store
        self.retrieval_service = retrieval_service
        self.runtime_log = runtime_log

    def export_all(self, *, experiment_id: str, session_id: str | None, out_dir: Path) -> dict[str, str]:
        out_dir.mkdir(parents=True, exist_ok=True)
        graph_paths = self.export_graph_knowledge_base(experiment_id=experiment_id, session_id=session_id, out_dir=out_dir)
        basin_paths = self.export_behavioral_basin(experiment_id=experiment_id, session_id=session_id, out_dir=out_dir)
        return {**graph_paths, **basin_paths}

    def export_graph_knowledge_base(self, *, experiment_id: str, session_id: str | None, out_dir: Path) -> dict[str, str]:
        snapshot = self.store.graph_snapshot(experiment_id)
        _, health_metrics = self.retrieval_service.build_graph_metrics(experiment_id)
        graph = nx.Graph()
        nodes: list[dict[str, Any]] = []
        edges: list[dict[str, Any]] = []

        def add_node(node_id: str, label: str, kind: str, **extra: Any) -> None:
            node = {"id": node_id, "label": label, "kind": kind, **extra}
            nodes.append(node)
            graph.add_node(node_id)

        for agent in snapshot["agents"]:
            add_node(agent["id"], agent["name"], "agent", domain="behavior", source_kind="agent", summary=agent["name"])
        for session in snapshot["sessions"]:
            add_node(session["id"], session["title"], "session", domain="behavior", source_kind="session", summary=session["title"])
            graph.add_edge(session["agent_id"], session["id"])
            edges.append({"source": session["agent_id"], "target": session["id"], "type": "BELONGS_TO_AGENT", "weight": 1.0})
        for document in snapshot["documents"]:
            add_node(document["id"], document["title"], "document", domain="knowledge", source_kind=document["kind"], summary=document["path"])
        for turn in snapshot["turns"]:
            add_node(turn["id"], f"T{turn['turn_index']}", "turn", domain="behavior", source_kind="turn", summary=safe_excerpt(turn["user_text"], limit=140))
            graph.add_edge(turn["session_id"], turn["id"])
            edges.append({"source": turn["session_id"], "target": turn["id"], "type": "BELONGS_TO_SESSION", "weight": 1.0})
        for feedback in snapshot["feedback"]:
            add_node(
                feedback["id"],
                feedback["verdict"].upper(),
                "feedback",
                domain="behavior",
                source_kind="feedback",
                summary=safe_excerpt(feedback["explanation"], limit=140),
            )
            graph.add_edge(feedback["turn_id"], feedback["id"])
            edges.append({"source": feedback["turn_id"], "target": feedback["id"], "type": "FED_BACK_BY", "weight": 1.0})
        for meme in snapshot["memes"]:
            metadata = json.loads(meme["metadata_json"] or "{}")
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
            )
        for memode in snapshot["memodes"]:
            metadata = json.loads(memode["metadata_json"] or "{}")
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
            )
        for edge in snapshot["edges"]:
            if edge["src_id"] not in graph or edge["dst_id"] not in graph:
                continue
            graph.add_edge(edge["src_id"], edge["dst_id"], weight=float(edge["weight"]))
            edges.append(
                {
                    "source": edge["src_id"],
                    "target": edge["dst_id"],
                    "type": edge["edge_type"],
                    "weight": float(edge["weight"]),
                }
            )

        if graph.number_of_nodes() > 0:
            try:
                positions = nx.spring_layout(graph, seed=42, k=None, iterations=60)
            except ModuleNotFoundError:
                positions = nx.circular_layout(graph)
        else:
            positions = {}
        for node in nodes:
            pos = positions.get(node["id"], np.array([0.0, 0.0]))
            node["x"] = float(pos[0])
            node["y"] = float(pos[1])

        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "health_metrics": health_metrics,
            "counts": self.store.graph_counts(experiment_id),
            "nodes": nodes,
            "edges": edges,
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
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        html_path.write_text(self._graph_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="graph_knowledge_base_html", path=html_path)
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="graph_knowledge_base_json", path=json_path)
        self.runtime_log.emit("INFO", "export_graph", "Generated graph knowledge-base export.", experiment_id=experiment_id, path=str(html_path))
        return {
            "graph_html": str(html_path),
            "graph_json": str(json_path),
            "graph_manifest": str(manifest_path),
        }

    def export_behavioral_basin(self, *, experiment_id: str, session_id: str | None, out_dir: Path) -> dict[str, str]:
        snapshot = self.store.graph_snapshot(experiment_id)
        turns = sorted(snapshot["turns"], key=lambda item: (item["session_id"], item["turn_index"]))
        feedback_by_turn: dict[str, list[dict[str, Any]]] = defaultdict(list)
        for feedback in snapshot["feedback"]:
            feedback_by_turn[feedback["turn_id"]].append(feedback)

        features: list[list[float]] = []
        rendered_turns: list[dict[str, Any]] = []
        for turn in turns:
            active_set = json.loads(turn["active_set_json"] or "[]")
            if not active_set:
                continue
            knowledge_mass = sum(max(0.0, item["selection"]) for item in active_set if item["domain"] != "behavior")
            behavior_mass = sum(max(0.0, item["selection"]) for item in active_set if item["domain"] == "behavior")
            avg_regard = float(np.mean([item["regard"] for item in active_set])) if active_set else 0.0
            avg_activation = float(np.mean([item["activation"] for item in active_set])) if active_set else 0.0
            memode_fraction = (sum(1 for item in active_set if item["node_kind"] == "memode") / max(1, len(active_set)))
            feedback_balance = 0.0
            feedback_verdicts = [entry["verdict"] for entry in feedback_by_turn.get(turn["id"], [])]
            if feedback_verdicts:
                score_map = {"accept": 1.0, "edit": 0.4, "reject": -1.0, "skip": 0.0}
                feedback_balance = sum(score_map.get(verdict, 0.0) for verdict in feedback_verdicts) / len(feedback_verdicts)
            dominant = max(active_set, key=lambda item: item["selection"])
            dominant_label = dominant["label"]
            dominant_domain = dominant["domain"]
            features.append([knowledge_mass, behavior_mass, avg_regard, avg_activation, memode_fraction, feedback_balance])
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
                    "dominant_label": dominant_label,
                    "dominant_domain": dominant_domain,
                    "feedback_verdicts": feedback_verdicts,
                    "active_set_labels": [item["label"] for item in active_set[:6]],
                }
            )

        if features:
            matrix = np.array(features, dtype=float)
            centered = matrix - matrix.mean(axis=0)
            if len(rendered_turns) >= 2:
                _, _, vt = np.linalg.svd(centered, full_matrices=False)
                components = vt[:2]
                coords = centered @ components.T
            else:
                coords = np.column_stack((centered[:, 0], np.zeros(len(centered))))
            for turn, coord in zip(rendered_turns, coords, strict=True):
                turn["x"] = float(coord[0])
                turn["y"] = float(coord[1])
        else:
            coords = np.empty((0, 2))

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
                }
            )
        transitions: Counter[tuple[str, str]] = Counter()
        for left, right in zip(rendered_turns, rendered_turns[1:], strict=False):
            transitions[(left["dominant_label"], right["dominant_label"])] += 1
        transition_rows = [
            {"from": left, "to": right, "count": count}
            for (left, right), count in transitions.items()
        ]
        payload = {
            "generated_at": now_utc(),
            "experiment_id": experiment_id,
            "session_id": session_id,
            "turn_count": len(rendered_turns),
            "session_count": len({turn["session_id"] for turn in rendered_turns}),
            "turns": rendered_turns,
            "attractors": sorted(attractors, key=lambda item: item["count"], reverse=True),
            "transitions": sorted(transition_rows, key=lambda item: item["count"], reverse=True),
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
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        html_path.write_text(self._basin_html(payload), encoding="utf-8")
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="behavioral_attractor_basin_html", path=html_path)
        self.store.record_export_artifact(experiment_id=experiment_id, session_id=session_id, artifact_type="behavioral_attractor_basin_json", path=json_path)
        self.runtime_log.emit("INFO", "export_basin", "Generated behavioral attractor basin export.", experiment_id=experiment_id, path=str(html_path))
        return {
            "basin_html": str(html_path),
            "basin_json": str(json_path),
            "basin_manifest": str(manifest_path),
        }

    def _graph_html(self, payload: dict[str, Any]) -> str:
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
      --edge: rgba(255, 191, 102, 0.24);
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Menlo", "SFMono-Regular", monospace;
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
      align-items: flex-end;
    }}
    h1 {{
      margin: 0;
      font-size: 20px;
      letter-spacing: 0.04em;
      color: var(--amber);
    }}
    .sub {{
      color: var(--muted);
      font-size: 12px;
      margin-top: 4px;
    }}
    .shell {{
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 16px;
      padding: 16px;
    }}
    .panel {{
      background: var(--panel);
      border: 1px solid rgba(255, 191, 102, 0.22);
      box-shadow: 0 0 28px rgba(255, 150, 40, 0.08) inset;
      border-radius: 14px;
      padding: 14px;
    }}
    .controls {{
      display: grid;
      gap: 12px;
      align-self: start;
      position: sticky;
      top: 16px;
    }}
    .stats {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }}
    .stat {{
      padding: 8px;
      border: 1px solid rgba(255, 191, 102, 0.16);
      border-radius: 8px;
      background: rgba(255, 191, 102, 0.04);
    }}
    .stat strong {{
      display: block;
      font-size: 18px;
      color: var(--amber);
    }}
    label, select, input {{
      width: 100%;
      font: inherit;
      color: var(--text);
    }}
    input, select {{
      background: rgba(0, 0, 0, 0.22);
      border: 1px solid rgba(255, 191, 102, 0.18);
      border-radius: 8px;
      padding: 8px 10px;
    }}
    .graph-wrap {{
      min-height: 78vh;
      position: relative;
      overflow: hidden;
    }}
    svg {{
      width: 100%;
      height: 78vh;
      display: block;
      background:
        linear-gradient(rgba(255,191,102,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,191,102,0.05) 1px, transparent 1px);
      background-size: 28px 28px;
      border-radius: 12px;
    }}
    .inspector {{
      position: absolute;
      right: 12px;
      top: 12px;
      width: 280px;
      max-height: calc(78vh - 24px);
      overflow: auto;
      background: rgba(16, 10, 4, 0.92);
      border: 1px solid rgba(255, 191, 102, 0.22);
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 0 24px rgba(255, 150, 40, 0.14);
    }}
    .legend {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
    }}
    .pill {{
      padding: 4px 8px;
      border-radius: 999px;
      border: 1px solid rgba(255, 191, 102, 0.18);
      background: rgba(255, 191, 102, 0.07);
    }}
    .hidden {{ display: none; }}
    .muted {{ color: var(--muted); }}
  </style>
</head>
<body>
  <header>
    <div>
      <h1>EDEN // Graph Knowledge Base</h1>
      <div class="sub">Experiment {payload["experiment_id"]} · generated {payload["generated_at"]}</div>
    </div>
    <div class="legend">
      <span class="pill">meme</span>
      <span class="pill">memode</span>
      <span class="pill">turn</span>
      <span class="pill">feedback</span>
      <span class="pill">document</span>
    </div>
  </header>
  <div class="shell">
    <aside class="controls">
      <div class="panel">
        <strong>Filters</strong>
        <div class="sub">Search, type filters, and domain filters mutate the rendered subset in place.</div>
        <div style="margin-top:10px;">
          <label for="search">Search</label>
          <input id="search" type="search" placeholder="meme, session, document..." />
        </div>
        <div style="margin-top:10px;">
          <label for="kind">Node kind</label>
          <select id="kind">
            <option value="all">All kinds</option>
            <option value="meme">Memes</option>
            <option value="memode">Memodes</option>
            <option value="turn">Turns</option>
            <option value="feedback">Feedback</option>
            <option value="document">Documents</option>
            <option value="session">Sessions</option>
          </select>
        </div>
        <div style="margin-top:10px;">
          <label for="domain">Domain</label>
          <select id="domain">
            <option value="all">All domains</option>
            <option value="behavior">Behavior</option>
            <option value="knowledge">Knowledge</option>
          </select>
        </div>
      </div>
      <div class="panel">
        <strong>Graph Health</strong>
        <div class="stats">
          <div class="stat"><span class="muted">Nodes</span><strong>{len(payload["nodes"])}</strong></div>
          <div class="stat"><span class="muted">Edges</span><strong>{len(payload["edges"])}</strong></div>
          <div class="stat"><span class="muted">Triadic</span><strong>{payload["health_metrics"]["triadic_closure"]:.2f}</strong></div>
          <div class="stat"><span class="muted">Memode cov.</span><strong>{payload["health_metrics"]["memode_coverage"]:.2f}</strong></div>
        </div>
      </div>
    </aside>
    <section class="panel graph-wrap">
      <svg id="graph"></svg>
      <div class="inspector" id="inspector">
        <strong>Inspector</strong>
        <div class="sub">Hover a node to inspect provenance, reward/risk, and source path.</div>
      </div>
    </section>
  </div>
  <script id="eden-data" type="application/json">{json.dumps(payload)}</script>
  <script>
    const data = JSON.parse(document.getElementById("eden-data").textContent);
    const svg = document.getElementById("graph");
    const inspector = document.getElementById("inspector");
    const searchInput = document.getElementById("search");
    const kindSelect = document.getElementById("kind");
    const domainSelect = document.getElementById("domain");

    const palette = {{
      agent: "#ffe4b2",
      session: "#ffcf7a",
      document: "#88e0c4",
      turn: "#ffd166",
      feedback: "#ff7f50",
      meme: "#ffbf66",
      memode: "#fff0b3",
    }};

    function normalizePositions(nodes) {{
      const xs = nodes.map(node => node.x);
      const ys = nodes.map(node => node.y);
      const minX = Math.min(...xs, -1);
      const maxX = Math.max(...xs, 1);
      const minY = Math.min(...ys, -1);
      const maxY = Math.max(...ys, 1);
      return nodes.map(node => {{
        const x = 80 + ((node.x - minX) / Math.max(0.001, maxX - minX)) * (svg.clientWidth - 160);
        const y = 80 + ((node.y - minY) / Math.max(0.001, maxY - minY)) * (svg.clientHeight - 160);
        return {{...node, sx: x, sy: y}};
      }});
    }}

    function render() {{
      const term = searchInput.value.trim().toLowerCase();
      const kind = kindSelect.value;
      const domain = domainSelect.value;
      const nodes = normalizePositions(data.nodes).filter(node => {{
        const searchHit = !term || `${{node.label}} ${{node.summary || ""}} ${{node.provenance || ""}}`.toLowerCase().includes(term);
        const kindHit = kind === "all" || node.kind === kind;
        const domainHit = domain === "all" || node.domain === domain;
        return searchHit && kindHit && domainHit;
      }});
      const visibleIds = new Set(nodes.map(node => node.id));
      const edges = data.edges.filter(edge => visibleIds.has(edge.source) && visibleIds.has(edge.target));
      svg.innerHTML = "";
      for (const edge of edges) {{
        const source = nodes.find(node => node.id === edge.source);
        const target = nodes.find(node => node.id === edge.target);
        if (!source || !target) continue;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", source.sx);
        line.setAttribute("y1", source.sy);
        line.setAttribute("x2", target.sx);
        line.setAttribute("y2", target.sy);
        line.setAttribute("stroke", "rgba(255,191,102,0.18)");
        line.setAttribute("stroke-width", Math.min(3.5, 0.5 + edge.weight * 0.4));
        svg.appendChild(line);
      }}
      for (const node of nodes) {{
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        circle.setAttribute("cx", node.sx);
        circle.setAttribute("cy", node.sy);
        circle.setAttribute("r", node.kind === "memode" ? 8 : 5.5);
        circle.setAttribute("fill", palette[node.kind] || "#ffbf66");
        circle.setAttribute("stroke", "rgba(255,255,255,0.28)");
        circle.setAttribute("stroke-width", "1");
        circle.style.cursor = "pointer";
        label.setAttribute("x", node.sx + 8);
        label.setAttribute("y", node.sy - 8);
        label.setAttribute("fill", "#ffe2af");
        label.setAttribute("font-size", "11");
        label.textContent = node.label;
        group.appendChild(circle);
        group.appendChild(label);
        group.addEventListener("mouseenter", () => {{
          inspector.innerHTML = `
            <strong>${{node.label}}</strong>
            <div class="sub">${{node.kind}} · ${{node.domain || "n/a"}}</div>
            <p>${{node.summary || "No summary available."}}</p>
            <p><span class="muted">Provenance</span><br/>${{node.provenance || "n/a"}}</p>
            <p><span class="muted">Reward / Risk</span><br/>${{(node.reward || 0).toFixed(2)}} / ${{(node.risk || 0).toFixed(2)}}</p>
            <p><span class="muted">Scope</span><br/>${{node.scope || "global"}}</p>
          `;
        }});
        svg.appendChild(group);
      }}
    }}

    searchInput.addEventListener("input", render);
    kindSelect.addEventListener("change", render);
    domainSelect.addEventListener("change", render);
    window.addEventListener("resize", render);
    render();
  </script>
</body>
</html>
"""

    def _basin_html(self, payload: dict[str, Any]) -> str:
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>EDEN Behavioral Attractor Basin</title>
  <style>
    :root {{
      --bg: #06060c;
      --panel: rgba(16, 16, 28, 0.88);
      --amber: #ffbf66;
      --cyan: #82d8ff;
      --muted: #b8a37b;
      --text: #fff0d0;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Menlo", "SFMono-Regular", monospace;
      color: var(--text);
      background:
        radial-gradient(circle at 25% 20%, rgba(255, 180, 70, 0.12), transparent 26%),
        radial-gradient(circle at 78% 30%, rgba(120, 200, 255, 0.14), transparent 24%),
        linear-gradient(180deg, #05060a 0%, #090814 100%);
      min-height: 100vh;
    }}
    header {{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;
      padding: 18px 22px;
      border-bottom: 1px solid rgba(255, 191, 102, 0.18);
    }}
    h1 {{ margin: 0; color: var(--amber); font-size: 20px; }}
    .shell {{
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 16px;
      padding: 16px;
    }}
    .panel {{
      background: var(--panel);
      border: 1px solid rgba(255, 191, 102, 0.16);
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 0 28px rgba(255, 160, 60, 0.08) inset;
    }}
    canvas {{
      width: 100%;
      height: 78vh;
      display: block;
      border-radius: 12px;
      background: linear-gradient(180deg, rgba(4,8,18,0.96), rgba(9,8,22,0.94));
    }}
    .controls {{
      display: grid;
      gap: 12px;
      align-self: start;
      position: sticky;
      top: 16px;
    }}
    button, input[type=range] {{
      width: 100%;
    }}
    button {{
      background: rgba(255, 191, 102, 0.12);
      color: var(--text);
      border: 1px solid rgba(255, 191, 102, 0.18);
      border-radius: 9px;
      padding: 10px 12px;
      font: inherit;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }}
    td, th {{
      padding: 6px 4px;
      border-bottom: 1px solid rgba(255, 191, 102, 0.12);
      text-align: left;
    }}
    .sub {{ color: var(--muted); font-size: 12px; }}
    .metric {{ font-size: 12px; line-height: 1.5; }}
  </style>
</head>
<body>
  <header>
    <div>
      <h1>EDEN // Behavioral Attractor Basin</h1>
      <div class="sub">Experiment {payload["experiment_id"]} · turns {payload["turn_count"]} · sessions {payload["session_count"]}</div>
    </div>
    <div class="sub">Generated {payload["generated_at"]}</div>
  </header>
  <div class="shell">
    <section class="panel">
      <canvas id="basinCanvas" width="1200" height="820"></canvas>
    </section>
    <aside class="controls">
      <div class="panel">
        <button id="playBtn">Play</button>
        <div class="sub" id="turnLabel">Turn 0</div>
        <input id="turnSlider" type="range" min="0" max="{max(0, payload['turn_count'] - 1)}" value="0" step="1" />
      </div>
      <div class="panel metric" id="detailPanel">
        <strong>Turn Detail</strong>
        <div class="sub">Use the slider or autoplay to scrub the state trajectory.</div>
      </div>
      <div class="panel">
        <strong>Transitions</strong>
        <table id="transitionTable"></table>
      </div>
    </aside>
  </div>
  <script id="eden-data" type="application/json">{json.dumps(payload)}</script>
  <script>
    const data = JSON.parse(document.getElementById("eden-data").textContent);
    const canvas = document.getElementById("basinCanvas");
    const ctx = canvas.getContext("2d");
    const playBtn = document.getElementById("playBtn");
    const turnSlider = document.getElementById("turnSlider");
    const turnLabel = document.getElementById("turnLabel");
    const detailPanel = document.getElementById("detailPanel");
    const transitionTable = document.getElementById("transitionTable");
    let currentTurn = 0;
    let timer = null;

    function extent(values, fallback = [-1, 1]) {{
      if (!values.length) return fallback;
      return [Math.min(...values), Math.max(...values)];
    }}

    function scale(value, [min, max], size) {{
      return 80 + ((value - min) / Math.max(0.001, max - min)) * (size - 160);
    }}

    function renderTransitions() {{
      transitionTable.innerHTML = "<tr><th>From</th><th>To</th><th>Count</th></tr>";
      for (const row of data.transitions.slice(0, 10)) {{
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${{row.from}}</td><td>${{row.to}}</td><td>${{row.count}}</td>`;
        transitionTable.appendChild(tr);
      }}
    }}

    function render(turnIndex) {{
      currentTurn = Number(turnIndex);
      const turns = data.turns || [];
      const xs = turns.map(turn => turn.x || 0);
      const ys = turns.map(turn => turn.y || 0);
      const xExtent = extent(xs);
      const yExtent = extent(ys);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let gx = 0; gx < canvas.width; gx += 28) {{
        for (let gy = 0; gy < canvas.height; gy += 28) {{
          ctx.fillStyle = "rgba(255,191,102,0.03)";
          ctx.fillRect(gx, gy, 1, 1);
        }}
      }}

      for (const attractor of data.attractors) {{
        const ax = scale(attractor.x || 0, xExtent, canvas.width);
        const ay = scale(attractor.y || 0, yExtent, canvas.height);
        const radius = 60 + attractor.count * 16;
        const gradient = ctx.createRadialGradient(ax, ay, 0, ax, ay, radius);
        gradient.addColorStop(0, "rgba(255,191,102,0.26)");
        gradient.addColorStop(1, "rgba(255,191,102,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ax, ay, radius, 0, Math.PI * 2);
        ctx.fill();
      }}

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(130,216,255,0.55)";
      ctx.beginPath();
      turns.forEach((turn, index) => {{
        const x = scale(turn.x || 0, xExtent, canvas.width);
        const y = scale(turn.y || 0, yExtent, canvas.height);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }});
      ctx.stroke();

      turns.forEach((turn, index) => {{
        const x = scale(turn.x || 0, xExtent, canvas.width);
        const y = scale(turn.y || 0, yExtent, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = index === currentTurn ? "#ffbf66" : "rgba(255,240,208,0.72)";
        ctx.arc(x, y, index === currentTurn ? 8 : 5, 0, Math.PI * 2);
        ctx.fill();
        if (index === currentTurn) {{
          ctx.strokeStyle = "rgba(255,191,102,0.35)";
          ctx.beginPath();
          ctx.arc(x, y, 20, 0, Math.PI * 2);
          ctx.stroke();
        }}
      }});

      const turn = turns[currentTurn];
      if (turn) {{
        turnLabel.textContent = `Turn ${{turn.turn_index}} · ${{turn.dominant_label}}`;
        detailPanel.innerHTML = `
          <strong>Turn Detail</strong>
          <div class="sub">${{turn.created_at}}</div>
          <p><strong>Dominant attractor:</strong> ${{turn.dominant_label}}</p>
          <p><strong>Knowledge mass:</strong> ${{turn.knowledge_mass.toFixed(2)}}</p>
          <p><strong>Behavior mass:</strong> ${{turn.behavior_mass.toFixed(2)}}</p>
          <p><strong>Avg regard:</strong> ${{turn.avg_regard.toFixed(2)}}</p>
          <p><strong>Feedback balance:</strong> ${{turn.feedback_balance.toFixed(2)}}</p>
          <p><strong>Active set:</strong> ${{turn.active_set_labels.join(", ")}}</p>
        `;
      }}
    }}

    playBtn.addEventListener("click", () => {{
      if (timer) {{
        window.clearInterval(timer);
        timer = null;
        playBtn.textContent = "Play";
      }} else {{
        timer = window.setInterval(() => {{
          const next = (currentTurn + 1) % Math.max(1, data.turns.length);
          turnSlider.value = String(next);
          render(next);
        }}, 900);
        playBtn.textContent = "Pause";
      }}
    }});
    turnSlider.addEventListener("input", event => render(event.target.value));
    renderTransitions();
    render(0);
  </script>
</body>
</html>
"""
