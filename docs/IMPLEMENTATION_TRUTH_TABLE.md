# Implementation Truth Table

| Capability | Status | Notes / evidence |
| --- | --- | --- |
| Blank Eden bootstrap | Implemented | Runtime + TUI path; validated in demo and tests |
| Seeded Eden bootstrap code path | Implemented | Ingests `assets/seed_canon/`; heavy-path validation was started on real canon files |
| Full canon ingest completion in this build session | Instrumented | Real seeded run progressed through multiple canonical PDFs but was intentionally stopped because of heavy runtime cost |
| Fixed-pane TUI | Implemented | Live PTY launch validated |
| Chat with ADAM | Implemented | mock blank demo executed end to end |
| MLX adapter | Implemented | `mlx-lm` installed and import-validated |
| Full selected Qwen/Qwen3.5-35B-A3B model load on this machine | Instrumented / blocked by missing local model path | no local model path was present during build |
| Explicit feedback persistence | Implemented | accept/edit/reject/skip logic in runtime and tests |
| Edit stores rationale and corrected answer separately | Implemented | persisted in `feedback_events` and validated in tests |
| Persistent memes and memodes | Implemented | SQLite tables + edges + retrieval |
| Regard math in code | Implemented | `eden/regard.py` |
| Active set and decision trace in UI | Implemented | TUI panes and export data |
| PDF ingest | Implemented | validated on `eden_whitepaper_v14.pdf` |
| CSV/TXT/Markdown ingest | Implemented | validated in tests |
| Graph knowledge-base export | Implemented | generated and browser-opened |
| Behavioral attractor basin export | Implemented | generated and browser-opened |
| Lightweight live observatory server | Implemented | local HTTP server + TUI toggle |
| Weight training / fine-tuning / LoRA | Deferred by design | explicitly out of scope |
| Governor / hidden planner | Deferred by design | explicitly removed in v1 |
| Embedding-based semantic retrieval | Deferred | lexical/graph retrieval only in v1 |
