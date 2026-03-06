# Observatory Spec

EDEN v1 ships two observability layers.

## Layer 1: static browser artifacts

Generated per experiment under `exports/<experiment_id>/`:

- `graph_knowledge_base.html`
- `graph_knowledge_base.json`
- `graph_knowledge_base.manifest.json`
- `behavioral_attractor_basin.html`
- `behavioral_attractor_basin.json`
- `behavioral_attractor_basin.manifest.json`

## Graph knowledge base

- browser-viewable network graph
- filterable by search, node kind, and domain
- inspector panel with provenance, reward/risk, and scope
- graph health cards

## Behavioral attractor basin

- turn trajectory visualization
- attractor clusters derived from dominant active-set labels
- per-turn detail panel
- transition table
- autoplay and turn slider

## Layer 2: lightweight live observatory

- `python -m eden observatory`
- serves `exports/` locally over HTTP
- TUI can toggle the server and open the current graph export in the browser

## Validation

Both shipped HTML artifacts were opened successfully in a real browser session via Playwright during this build.
