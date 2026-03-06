# Migration Notes v1.1

This patch uses additive persistence changes only.

## SQLite

Added via additive migration on startup:

- `turns.metadata_json`

Used for:

- resolved per-turn inference profile
- budget circumstances
- model-result metadata
- prompt-context provenance fragments

Existing rows are preserved and receive the default empty JSON object.

## Filesystem

New observatory lifecycle file:

- `exports/.eden_observatory.json`

Used for:

- same-root observatory reuse detection
- actual host/port reporting
- local server provenance

No destructive ontology or schema rewrite was performed in this patch.
