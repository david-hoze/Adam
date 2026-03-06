# Observatory Spec

EDEN v1.1 ships a static-first browser observability layer plus a lightweight local server.

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
- `observatory_index.html`
- `observatory_index.json`

## Graph knowledge base

- filterable by search, session, kind, domain, source, verdict, and timestamp substring
- multiple coordinate modes:
  - `force`
  - `spectral`
  - `circular_candidate`
  - `temporal`
  - `symmetry` (`pca`)
  - `basin_linked`
- inspector includes provenance, verdicts, session affinity, and turn-linked inference metadata
- coordinate modes are explicitly view modes, not claims that the layout itself is evidence

## Behavioral attractor basin

- turn trajectory computed from real turn features
- explicit projection provenance (`svd_on_turn_features`)
- per-turn overlays for:
  - inference profile
  - requested/effective mode
  - budget pressure
  - remaining input budget
  - membrane-event counts
  - active-set recurrence
  - phase-transition markers
- session filter in the browser artifact

## Geometry lab

- full-graph geometry diagnostics
- slice views:
  - `full_graph`
  - `current_session`
  - `current_active_set`
  - verdict slices when populated
- metric evidence labels:
  - `OBSERVED`
  - `DERIVED`
  - `SPECULATIVE`
- ablation reports:
  - direct `CO_OCCURS_WITH` masking
  - dominant-cluster removal when available

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

TUI behavior:

- `Observatory` ensures the local server is running and opens the current experiment index page
- repeated use is safe and does not create ghost server state

## Validation

Validated in this patch:

- CLI port fallback from an occupied requested port to a nearby free port
- observatory index opened in a real browser session
- geometry lab opened in a real browser session
