# Adam Mechanism Matrix

Generated: 2026-03-20 11:01:31 EDT  
Source brief: `../adam_intelligence_20260320_110131_core_audit.md`

| Basin | Mechanism | Primary register | Modifiers | Strongest evidence |
|---|---|---|---|---|
| A | Adam naming discipline exists, but EDEN residue remains widespread | `IMPLEMENTED` for residue, `CONCEPTUAL` for naming discipline enforcement | `HISTORICAL_REFERENCE_ONLY` | `README.md`, `docs/PROJECT_CHARTER.md`, baseline PDF |
| B | Memes are first-class; memodes are derived behavioral objects with audit surfaces | `IMPLEMENTED` | none | `docs/CANONICAL_ONTOLOGY.md`, `eden/ontology_projection.py`, `tests/test_observatory_measurements.py` |
| C | Active-set retrieval and prompt assembly are bounded and operator-visible | `IMPLEMENTED` | `DEFERRED_BY_DESIGN` for embeddings | `eden/retrieval.py`, `eden/runtime.py`, `tests/test_inference_profiles.py` |
| D | Regard and structured feedback create durable retrieval pressure | `IMPLEMENTED` | none | `eden/regard.py`, `eden/runtime.py`, `tests/test_regard.py` |
| E | Direct v1 turn loop with membrane and persisted trace surfaces | `IMPLEMENTED` | none | `eden/runtime.py`, `eden/storage/schema.py`, `tests/test_runtime_e2e.py` |
| F | TUI remains the primary runtime interface | `IMPLEMENTED` | none | `docs/TUI_SPEC.md`, `eden/tui/app.py`, `tests/test_tui_smoke.py` |
| G | Observatory read surfaces exist in both live and static modes | `IMPLEMENTED` | `BOUNDED_FALLBACK` | `eden/observatory/server.py`, `web/observatory/src/App.tsx`, server tests |
| H | Preview / commit / revert measurement contract is real and persisted | `IMPLEMENTED` | `EXPLICIT_BROWSER_CONTRACT_GAP` for static mode and missing browser-path mutation proof in this run | `eden/observatory/service.py`, `tests/test_observatory_measurements.py`, `data/eden.db` |
| I | Geometry and basin evidence is labeled and export-backed | `IMPLEMENTED` | none | `eden/observatory/geometry.py`, `geometry_diagnostics.json`, geometry tests |
| J | MLX local runtime is active; `adam_auto` is bounded fallback; no governor/training/embeddings path located | `IMPLEMENTED` for MLX and fallback, `CONCEPTUAL` for negative-scope statements | `BOUNDED_FALLBACK`, `DEFERRED_BY_DESIGN` | `eden/models/mlx_backend.py`, `eden/inference.py`, runtime logs, inference tests |
| K | Tanakh sidecar is additive, exported, and test-covered | `IMPLEMENTED` | `BOUNDED_FALLBACK` | `eden/tanakh/service.py`, `tests/test_tanakh_tools.py`, observatory app |

## Cross-Cutting Drift Risks

1. Legacy `EDEN` strings are still present in repo-visible surfaces and can poison present-tense public framing.
2. The designated baseline draft overstates current architecture by describing a governor-first loop and recursive planner trajectory.
3. Static export availability can be mistaken for live mutation authority unless badges and capability states are respected.
4. Negative-scope claims such as "no training" and "no embeddings" remain mostly constitution-backed rather than enforced by dedicated negative tests.

## Minimal Ratchets

1. Add a browser-path preview/commit/revert test.
2. Add an export-vs-DB measurement count reconciliation test.
3. Remove the remaining TUI smoke warning.
