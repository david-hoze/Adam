# Observatory Spec

EDEN v1.2 keeps Python authoritative for exports, clustering, basin projection, and measurement provenance while replacing the inline canvas artifacts with one checked-in React + TypeScript + Vite observatory bundle. The browser layer is a live-first measurement instrument with static export retained as an HTTP-served artifact path.

## Artifact families

Generated per experiment under `exports/<experiment_id>/`:

- `graph_knowledge_base.html`
- `graph_knowledge_base.json`
- `graph_knowledge_base.manifest.json`
- `behavioral_attractor_basin.html`
- `behavioral_attractor_basin.json`
- `behavioral_attractor_basin.manifest.json`
- `geometry_lab.html`
- `geometry_diagnostics.json`
- `geometry_manifest.json`
- `measurement_ledger.html`
- `measurement_events.json`
- `measurement_events.manifest.json`
- `tanakh_manifest.json`
- `tanakh_index.json`
- `tanakh_surface.json`
- `tanakh_measurements.json`
- `tanakh_render_validation.json`
- `tanakh_render_validation.html`
- `tanakh_passage_cache/<ref>.json`
- `tanakh_scene_<id>.json`
- `observatory_index.html`
- `observatory_index.json`
- `_observatory_app/` checked-in frontend bundle copied from `eden/observatory/static/observatory_app/`

## Observatory modes

- `INSPECT`
  - hover, pin, inspect provenance, regard, local neighborhood, and measurement history
- `MEASURE`
  - compute local motif metrics or geometry deltas without mutating topology
- `EDIT`
  - add/update/remove edges with provenance
  - assert known memodes
  - refine memode membership
- `ABLATE`
  - preview masked-edge comparisons and relation-class perturbations
- `COMPARE`
  - compare slices, coordinate methods, or baseline vs modified states

## Continuity strip

- the browser shell keeps a continuity strip visible above the main three-column layout
- the strip contains:
  - a persistent hum fact card grounded in the bounded hum artifact summary
  - an operator-visible reasoning card with a radio-group lens switcher:
    - `Reasoning`
    - `Chain-Like`
    - `Hum Live`
- `Hum Live` reformats the bounded hum text surface as chain-like continuity beats; it does not claim hidden chain-of-thought
- operator-visible reasoning in the browser is sourced from live session transcript payloads when available; static export alone may not provide a current reasoning artifact

## Graph knowledge base

- authoritative graph payload planes:
  - `semantic_nodes`
  - `semantic_edges`
  - `runtime_nodes`
  - `runtime_edges`
  - `assemblies`
  - `cluster_summaries`
  - `active_set_slices`
- legacy `nodes` / `edges` remain for one compatibility release only
- semantic clustering is computed only on the meme-only semantic subgraph with deterministic Louvain settings, canonical node ordering, and versioned tokenization/labeling inputs
- graph UI grammar is explicit:
  - `Semantic Map`
  - `Assemblies`
  - `Runtime`
  - `Active Set`
  - `Compare`
- `Semantic Map` shows memes as first-class visible nodes, semantic edges, cluster hull/label summaries, and memode overlays
- memodes render as second-order assemblies with `hulls`, `collapsed-meta-node`, or `hidden` overlay modes; they are not default peer dots
- label disclosure is progressive and non-hover-dependent:
  - cluster labels first
  - selected / pinned / high-centrality meme labels next
  - edge labels only on focus or selection
- inspector surfaces structured cards for identity, ontology, domain, provenance, evidence/confidence, cluster membership, memode membership, supporting relations, active-set presence, measurement history, and preview delta
- raw JSON survives only as a debug tab
- coordinate modes remain explicit view modes, not evidence claims

## Measurement-first contract

1. Select nodes or an edge.
2. Propose an action in the precision drawer.
3. Preview before/after metric deltas.
4. Commit only if the change is warranted.
5. Persist the event with provenance.
6. Refresh graph, geometry, and measurement ledger views.
7. Revert explicitly if needed.

Observation does not silently mutate the graph. Mutation is a separate, attributable step.

## Behavioral attractor basin

- turn trajectory computed from real turn features
- explicit projection provenance (`svd_on_turn_features`)
- projection metadata includes:
  - `projection_method`
  - `projection_version`
  - `projection_input_hash`
  - `source_turn_count`
  - `filtered_turn_count`
- per-turn overlays for:
  - inference profile
  - requested/effective mode
  - budget pressure
  - remaining input budget
  - membrane-event counts
  - active-set recurrence
  - phase-transition markers
- stable per-turn and per-attractor identity fields include dominant node, dominant memode, dominant cluster signature, and display attractor label
- basin lift modes are explicit derived rendering choices:
  - `flat`
  - `time_lift`
  - `density_lift`
  - `session_offset`
- the UI surfaces projection method, lift mode, and derived-status badges directly in the controls and inspector
- sparse basin payloads are honest: if fewer than two turns survive filtering, the browser shows a diagnostic empty state instead of a fake basin

## Geometry lab

- global geometry diagnostics
- slice views:
  - `full_graph`
  - `current_session`
  - `current_active_set`
  - `latest_active_set`
  - verdict slices when populated
  - memode-local slices when populated
- local selection measurement over the live API when available
- metric evidence labels:
  - `OBSERVED`
  - `DERIVED`
  - `SPECULATIVE`
  - operator assertion labels surfaced separately from geometry evidence labels

## Tanakh tool-surface

- the Tanakh surface is an additive observatory instrument, not a replacement runtime
- canonical Tanakh reading stays DOM/CSS-based unless a separate render-validation proof upgrades that claim
- derived analyzers are exposed as explicit sidecars:
  - `get_passage`
  - `gematria`
  - `notarikon`
  - `temurah`
  - `compile_merkavah_scene`
- every Tanakh payload carries provenance for:
  - canonical citation or raw source
  - dataset id / text version / build / archive hash
  - preprocessing choices
  - operator version
  - parameterization
  - creation timestamp
  - output kind (`canonical_text`, `derived_transformation`, or `derived_visualization`)
- the first merkavah slice is explicitly derived:
  - canonical entry ref defaults to `Ezek 1`
  - same ref + params produce hash-stable scene JSON
  - `sceneNodeId -> citation span` linkage is exported in the scene payload
- Tanakh runs are surfaced in observatory sidecar artifacts and overview badges; they are not silently promoted to first-class measurement events

## Local observatory server

CLI:

```bash
.venv/bin/python -m eden observatory --host 127.0.0.1 --port 8741 --open
```

Behavior:

- if the requested port is free, EDEN uses it
- if the requested port is already serving the same exports root, EDEN reuses it
- if the requested port is occupied by something else, EDEN walks to the next free port in a bounded range
- the actual URL is printed as JSON
- server info is persisted at `exports/.eden_observatory.json`

Live API:

- `GET /api/status`
- `GET /api/experiments`
- `GET /api/experiments/<experiment_id>/payload`
- `GET /api/experiments/<experiment_id>/overview`
- `GET /api/experiments/<experiment_id>/graph`
- `GET /api/experiments/<experiment_id>/basin`
- `GET /api/experiments/<experiment_id>/geometry`
- `GET /api/experiments/<experiment_id>/measurement-events`
- `GET /api/experiments/<experiment_id>/tanakh`
- `GET /api/experiments/<experiment_id>/sessions`
- `GET /api/sessions/<session_id>/turns`
- `GET /api/sessions/<session_id>/active-set`
- `GET /api/runtime/status`
- `GET /api/runtime/model`
- `GET /api/experiments/<experiment_id>/events` (SSE invalidation stream)
- `POST /api/experiments/<experiment_id>/preview`
- `POST /api/experiments/<experiment_id>/commit`
- `POST /api/experiments/<experiment_id>/revert`
- `POST /api/experiments/<experiment_id>/tanakh-run`

SSE emits small invalidation payloads only. It does not push full graph or basin payloads.

TUI behavior:

- `Observatory` ensures the local server is running and opens the current experiment index page
- repeated use is safe and does not create ghost server state
- observatory-originated edits are logged back into the runtime trace surfaces
- static exports must be HTTP-served, either by the EDEN observatory server or another static file server; direct `file://` opening is not a supported runtime path for the v1 bundle
- runtime status exposes frontend build freshness so stale checked-in assets can warn at runtime and fail CI/release checks

## Validation

Validated in this patch:

- CLI port fallback from an occupied requested port to a nearby free port
- live API preview / commit / revert plus graph / basin / transcript read endpoints against a real experiment
- SSE invalidation stream emits compact refresh messages after observatory commits
- the checked-in React observatory bundle builds and emits `build-meta.json`
- Tanakh surface export writes canonical/derived sidecars plus a manual-review render-validation harness
