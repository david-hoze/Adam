# Implementation Truth Table

| Capability | Status | Notes / evidence |
| --- | --- | --- |
| Blank Eden bootstrap | Implemented | runtime + TUI path; validated in tests and demo |
| Seeded Eden bootstrap code path | Implemented | ingests `assets/seed_canon/`; heavy-path validation started on real canon files |
| Fixed-pane amber TUI | Implemented | preserved and refined in v1.1 |
| Multiline composer | Implemented | `TextArea`-based; covered by TUI smoke test |
| Backend clutter removed from prime chat pane | Implemented | backend/model path now live on startup/config surfaces instead |
| Session-start inference profile flow | Implemented | startup/new-session modal |
| Manual inference mode | Implemented | persisted in session metadata and surfaced per turn |
| Runtime auto inference mode | Implemented | deterministic bounded heuristics; tested |
| Adam auto inference mode | Implemented with bounded fallback | mock path chooses bounded presets; MLX path falls back to `runtime_auto` and logs it |
| Live budget / allowance panel | Implemented | updates from preview/chat state and persists per turn |
| Per-turn inference circumstance persistence | Implemented | stored in `turns.metadata_json` |
| Explicit feedback persistence | Implemented | accept/edit/reject/skip remain graph-backed |
| Edit stores rationale and corrected answer separately | Implemented | persisted in `feedback_events` |
| Persistent memes and memodes | Implemented | SQLite tables + edges + retrieval |
| Regard math in code | Implemented | `eden/regard.py` |
| PDF ingest | Implemented | validated on `eden_whitepaper_v14.pdf` |
| CSV/TXT/Markdown ingest | Implemented | validated in tests |
| Graph knowledge-base export | Implemented | generated and browser-opened |
| Behavioral attractor basin export | Implemented | upgraded with inference-circumstance overlays |
| Geometry lab export | Implemented | `geometry_lab.html` + `geometry_diagnostics.json` |
| Observatory index page | Implemented | `observatory_index.html` |
| Robust observatory server lifecycle | Implemented | host/port args, reuse, free-port fallback, tests |
| Geometry diagnostics | Implemented | ringness, radiality, linearity, communities, triadic closure, spectral summaries, mirror/chirality/translation proxies |
| Geometry ablation probes | Implemented | `CO_OCCURS_WITH` masking and dominant-cluster removal |
| Browser observatory filtering | Implemented | graph and basin filters / geometry slice selection |
| Full selected Qwen/Qwen3.5-35B-A3B model load on this machine | Instrumented / blocked by missing local model path | adapter ready, model path absent during patch |
| Weight training / fine-tuning / LoRA | Deferred by design | explicitly out of scope |
| Governor / hidden planner | Deferred by design | explicitly absent |
| Embedding-based semantic retrieval | Deferred | lexical/graph retrieval only |

Validated in this patch:

- `.venv/bin/pytest -q` -> `19 passed`
- CLI observatory fallback from occupied requested port to actual port `8877`
- mock demo export wrote graph, basin, geometry, and index artifacts
- observatory index and geometry lab opened in a real browser session
