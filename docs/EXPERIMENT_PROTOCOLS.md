# Experiment Protocols

## Blank Eden

Use Blank Eden when you want:

- the constitutional scaffold only
- fast iteration on the chat/feedback loop
- clean graph growth from near-zero prior state

Blank Eden seeds:

- ADAM constitutional behavior memes
- one constitutional memode
- agent/session graph edges as sessions begin

## Seeded Eden

Use Seeded Eden when you want:

- canon-shaped prior material
- document-derived knowledge clusters before chat begins
- a heavier bootstrap closer to the research corpus

Seeded Eden performs:

- Blank Eden bootstrap
- ingest of `assets/seed_canon/`

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

Fast smoke path:

1. Blank Eden
2. one prompt
3. one feedback verdict
4. export graph and basin

Heavy path:

1. Seeded Eden
2. wait for canon ingest
3. start a chat session
4. inspect cluster-heavy retrieval behavior
