# EDEN v1.1 Patch Manifest

Generated during the March 6, 2026 in-place patch cycle for `/Users/brianray/Adam`.

## Scope

- Patch target: existing EDEN repository in place
- Intent: additive reliability and observability upgrade
- Priority order:
  1. observatory server lifecycle
  2. TUI composer / inference-profile / budget visibility
  3. geometry-aware observability exports
  4. tests, docs, and truthful handoff

## Files inspected

Core runtime and UI:

- `AGENTS.md`
- `eden/app.py`
- `eden/config.py`
- `eden/runtime.py`
- `eden/retrieval.py`
- `eden/storage/schema.py`
- `eden/storage/graph_store.py`
- `eden/tui/app.py`
- `eden/models/base.py`
- `eden/models/mock.py`
- `eden/models/mlx_backend.py`
- `eden/observatory/server.py`
- `eden/observatory/exporters.py`
- `eden/logging.py`
- `eden/utils.py`

Tests:

- `tests/conftest.py`
- `tests/test_ingest.py`
- `tests/test_regard.py`
- `tests/test_runtime_e2e.py`
- `tests/test_tui_smoke.py`

Docs:

- `README.md`
- `docs/OBSERVATORY_SPEC.md`
- `docs/TUI_SPEC.md`
- `docs/KNOWN_LIMITATIONS.md`
- `docs/IMPLEMENTATION_TRUTH_TABLE.md`

Patch-cycle conceptual sources:

- `assets/seed_canon/eden_whitepaper_v14.pdf`
  - Read successfully from the repo-local seed canon.
  - Used as constitutional context for local-first graph-conditioned identity, budget visibility, and evidence boundaries.
- `/Users/brianray/Desktop/02-25-26, Symmetry in language statistics sheaps the geometry of model representations  Karkada et al..pdf`
  - Read successfully from the operator Desktop attachment.
  - Filename contains a typo (`sheaps`).
  - Used as a secondary canonical source for geometry diagnostics, symmetry interpretation, and ablation robustness policy.
  - Not treated as proof of graph-based persona persistence.

## Current wins preserved

- Amber / cybernetic fixed-pane TUI grammar
- Structured turn feedback (`accept`, `edit`, `reject`, `skip`)
- Graph mutation on chat and feedback
- Local-first SQLite-backed memgraph
- Existing graph and basin export pipeline as the base layer
- Mock model path and current smoke-testability
- MLX-only real-runtime intent

## Defects confirmed before patching

- `python -m eden observatory` still uses brittle fixed-port `TCPServer` behavior and can fail with raw `OSError: [Errno 48] Address already in use`.
- The chat composer is still single-line and too small for longer operator turns.
- Backend information still consumes prime chat-panel real estate.
- There is no formal session-start inference-profile flow.
- Budget conditions are not yet computed live, persisted per turn, or surfaced as first-class observability data.
- The graph export still conflates derived graph geometry with render layout more than this patch allows.

## New observability surfaces requested for this patch

- Robust observatory lifecycle with reuse / auto-port behavior
- Session-start inference-profile instrumentation
- Live inference-circumstances / budget panel in the TUI
- Per-turn inference-circumstance persistence
- `geometry_diagnostics.json`
- `geometry_lab.html`
- geometry / symmetry / ablation manifests with provenance and evidence labels

## Deferred until implementation pass completes

- `adam_auto` remains a bounded fallback on the MLX path rather than a true separate Adam prepass
- geometry metrics are graph-/trace-derived; there is still no direct inspection of internal model activations

## Files modified

- `README.md`
- `docs/SOURCE_MANIFEST.md`
- `docs/OBSERVATORY_SPEC.md`
- `docs/TUI_SPEC.md`
- `docs/KNOWN_LIMITATIONS.md`
- `docs/IMPLEMENTATION_TRUTH_TABLE.md`
- `docs/PATCH_MANIFEST_V1_1.md`
- `docs/INFERENCE_PROFILES.md`
- `docs/OBSERVATORY_GEOMETRY_SPEC.md`
- `docs/GEOMETRY_EVIDENCE_POLICY.md`
- `docs/MIGRATION_NOTES_V1_1.md`
- `eden/app.py`
- `eden/budget.py`
- `eden/config.py`
- `eden/inference.py`
- `eden/models/base.py`
- `eden/models/mock.py`
- `eden/models/mlx_backend.py`
- `eden/observatory/exporters.py`
- `eden/observatory/geometry.py`
- `eden/observatory/server.py`
- `eden/runtime.py`
- `eden/storage/graph_store.py`
- `eden/storage/schema.py`
- `eden/tui/app.py`
- `tests/test_runtime_e2e.py`
- `tests/test_tui_smoke.py`
- `tests/test_budget.py`
- `tests/test_geometry.py`
- `tests/test_inference_profiles.py`
- `tests/test_observatory_server.py`

## Defects fixed

- Raw `Errno 48` observatory crash path replaced with bounded free-port discovery and same-root reuse.
- Observatory startup now reports the actual URL and port.
- Repeated observatory starts are idempotent in-process and reusable cross-process.
- The live chat surface no longer wastes prime space on backend display.
- The single-line composer was replaced with a multiline editor.
- Session-start inference profile selection now exists.
- Prompt-budget conditions are now visible in the TUI and persisted per turn.
- Geometry export now exists as a first-class artifact family.

## New observability / geometry surfaces added

- `Inference Circumstances / Budget` live panel in the TUI
- `geometry_diagnostics.json`
- `geometry_lab.html`
- `geometry_manifest.json`
- `observatory_index.html`
- graph coordinate-mode switching with filter controls
- evidence-labeled geometry metrics
- ablation persistence reports
