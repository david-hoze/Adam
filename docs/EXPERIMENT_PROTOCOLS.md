# Session Protocols

## Persistent graph contract

EDEN now operates against one persistent Adam graph.

- behavior and knowledge live in the same graph
- starting a new session does not create a fresh graph
- resuming an older session reconnects to the same graph
- document ingest adds new knowledge material into that same graph

The historical `Blank Eden` / `Seeded Eden` split is no longer the operator contract.
Legacy bootstrap calls collapse into the single primary graph, and canon ingest is now operator-driven through normal document upload rather than automatic startup seeding.

## Session flow

Use `Start New Session` when you want:

- a fresh conversation thread
- a different title or inference profile
- continued work against the same persistent Adam graph

Use `Continue Latest` when you want:

- the newest persisted session
- the same graph plus the same transcript thread
- quick return to the most recent live context

## Feedback protocol

- `Accept`: explanation required
- `Reject`: explanation required
- `Edit`: explanation and corrected response required
- `Skip`: records a lightweight verdict

Feedback is not cosmetic. It:

- creates a persistent `feedback_events` row
- updates reward/risk/edit channels
- creates new feedback-derived graph material
- changes later retrieval pressure

## Demo protocol

Default smoke path:

1. Start a new session on the persistent graph
2. send one prompt
3. record one feedback verdict
4. export graph and basin
