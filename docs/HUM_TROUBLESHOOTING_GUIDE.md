# Hum Troubleshooting Guide

This guide is for determining what `the hum` currently is in this checkout, where it is absent, and which artifacts prove each conclusion. It is not a guide for "using the hum." It is a guide for auditing hum claims before manual exploration.

Current truth anchor:

- `Implemented:` The current build generates a bounded persisted hum artifact per session as `current_hum.md` plus `current_hum.json`, derived after turn or feedback persistence and surfaced read-only through runtime and observatory reference blocks.
- `Instrumented:` Historical hum artifact evidence still exists in `/Users/brianray/Desktop/adam_hum_ALL.md`, and the current build now meters hum provenance and continuity summaries in machine-readable form.
- `Conceptual:` Anything richer than the current bounded read-only artifact remains conceptual, including prompt injection, membrane consumption, generation-input reuse, and a more expressive historical-style hum channel.
- `Unknown:` Whether the hum should later grow beyond the current bounded observability surface, and how much higher-order recurrence the present derivation can truthfully support across broader workloads.

The audit keeps that status unless a current run fails to reproduce it or proves a narrower result. Absence is still a valid result if the artifact path does not materialize in the audited run.

## What The Hum Is Not

- The hum is not the active set.
- The hum is not full turn history.
- The hum is not the full graph.
- The hum is not a basin summary.
- The hum is not a cluster or motif summary.
- The hum is not an observatory payload.
- Recurrent strings such as `glmmr`, `mrmr`, `hush`, `pulse`, `thread`, and `bloom` are historical compression signatures when present. They are not token-level units of regard, encryption, or semantic hashes.

## Run The Audit

1. Run the default scratch audit:

```bash
./.venv/bin/python scripts/run_hum_user_journey_audit.py --out exports/hum_audit/latest
```

2. Add the historical artifact only when you want the structural comparison:

```bash
./.venv/bin/python scripts/run_hum_user_journey_audit.py \
  --out exports/hum_audit/latest \
  --historical-hum /Users/brianray/Desktop/adam_hum_ALL.md
```

What the run writes:

- `hum_audit_report.json`
- `hum_audit_report.md`
- `hum_claim_inventory.json`
- `hum_artifact_scan.json`
- `journey_results.json`
- `next_shortest_proof_paths.md`

The script defaults to scratch scope, mock backend, no browser launch, and no live store targeting. A clean `NOT_PRESENT` or `DOCS_ONLY` outcome is still a successful audit run.

## Failure Interpretation

- `PASS` means the journey proved what it set out to prove in the current run.
- `NOT_PRESENT` means the journey looked for a hum-specific surface and did not find one.
- `HISTORICAL_ONLY` means the relevant surface exists only in the historical artifact or historical references.
- `DOCS_ONLY` means the current repo contains wording without runtime support.
- `STALE_RESIDUE` means the wording is leftover or misleading and does not prove a live path.
- `MANUAL_REQUIRED` means the surface is not safely automatable from the current contract.
- `UNKNOWN` means the automation could not decide from available evidence.

## HJ01 - contract and claim scan

Purpose:

- Map every current hum claim in docs, code, tests, scripts, and notes.

Automated check:

- Scan `docs/`, `eden/`, `tests/`, `scripts/`, and `codex_notes_garden.md` for hum-specific wording, historical markers, and continuity-artifact phrases.
- Classify each hit as:
  - runtime code path
  - docs/spec wording
  - tests only
  - stale/dead residue
  - historical artifact reference

Expected result:

- A clean claim inventory that tells you whether the current checkout exposes hum as code, surface, artifact, or only language.

What this means for the hum:

- This is the first split between a live mechanism and a ghost in the prose attic.

If this fails:

- Treat it as an audit problem, not as proof that hum is absent or present.

Manual follow-up only if needed:

- Read `docs/HUM_SPEC.md`, `docs/IMPLEMENTATION_TRUTH_TABLE.md`, `docs/KNOWN_LIMITATIONS.md`, and `codex_notes_garden.md` directly.

## HJ02 - safe scratch boot and baseline continuity surfaces

Purpose:

- Verify the current runtime's ordinary continuity surfaces before any hum-specific interpretation.

Automated check:

- Build a scratch runtime only after probing that the current runtime anchors and methods exist.
- Create a blank experiment and scratch session.
- Render a scratch conversation-log artifact.
- Probe preview/active-set and feedback-capable surfaces without touching repo-global state.

Expected result:

- Session creation, transcript-capable path, active-set-capable path, and feedback-capable path all work in scratch scope.

What this means for the hum:

- These are the continuity surfaces operators are most likely to mistake for hum. The audit proves them first so they do not cosplay as something else later.

If this fails:

- Interface drift or runtime bootstrap failure can make hum absence look stronger than it really is.

Manual follow-up only if needed:

- Inspect `EdenRuntime`, `GraphStore`, `RuntimeLog`, and `RuntimeSettings` directly and rerun.

## HJ03 - first turn persistence journey

Purpose:

- Run one bounded turn and verify what actually gets persisted.

Automated check:

- Probe `preview_turn()` first when it exists.
- Inspect `system_prompt`, `conversation_prompt`, `history_context`, and `feedback_context` for hum-specific text.
- Run one scratch turn.
- Validate the hum markdown/json artifacts, required provenance fields, and the matching hum reference blocks in `session_state_snapshot()`, `experiment_overview()`, or `session_turns()`.

Expected result:

- The first persisted turn emits a bounded hum artifact with provenance and matching runtime/observatory references, or it emits no hum artifact and is classified accordingly.

What this means for the hum:

- This is the first real proof point for the current hum. If the artifact probe fails here, current live hum is not proved by the ordinary turn loop.

If this fails:

- A failed turn path is basic runtime failure, not hum evidence.

Manual follow-up only if needed:

- Inspect the persisted turn record and prompt context directly in scratch scope.

## HJ04 - feedback and regard-adjacent continuity journey

Purpose:

- Test the current explicit-feedback path and keep it separate from hum claims.

Automated check:

- Apply one structured feedback event only if the runtime exposes `apply_feedback()`.
- Prove persistence first through stored feedback events.
- Check downstream retrieval influence only if the runtime exposes it deterministically in the current bounded run.

Expected result:

- Feedback persists through the current explicit-feedback path.

What this means for the hum:

- Present-tense continuity pressure is real even when hum is absent. Regard and feedback can matter without becoming a hum surface.

If this fails:

- Do not convert broken feedback persistence into hum mythology.

Manual follow-up only if needed:

- Inspect `feedback_events` and retrieval surfaces directly after a scratch feedback event.

## HJ05 - resume and recurrence journey

Purpose:

- Check whether cross-turn recurrence yields a hum artifact or only normal persistence.

Automated check:

- Run a second bounded turn in the same scratch session.
- Re-render the scratch conversation log.
- Compare history continuity, active-set overlap, and feedback carry-forward.
- Re-read the current hum JSON and check whether it still reports seed-state only or now records cross-turn recurrence.

Expected result:

- Continuity is classified as:
  - ordinary persisted history only
  - active-set recurrence only
  - hum artifact present
  - unknown

What this means for the hum:

- This is where the current hum stops being a first-turn seed-state and either records cross-turn recurrence honestly or stays explicit about its limits.

If this fails:

- The audit loses one of its main recurrence proofs and has to stay more conservative.

Manual follow-up only if needed:

- Inspect the second turn and the scratch session history directly.

## HJ06 - export and observatory scan

Purpose:

- Check whether the export and observatory layer currently knows about hum.

Automated check:

- Do not open a browser and do not start the HTTP server by default.
- Probe `export_observability()` first.
- Probe observatory service payload methods second.
- Inspect `observatory_index.json`, `experiment_overview()`, and `session_turns()` for the compact hum reference block, then fall back to other payloads only if needed.

Expected result:

- The same hum reference block that the runtime exposes is visible in static export metadata and observatory-adjacent payloads, or it is absent there.

What this means for the hum:

- This distinguishes a real implemented hum surface from a file that exists but never reaches current operator-facing truth surfaces.

If this fails:

- Treat payload-method drift separately from hum absence.

Manual follow-up only if needed:

- Open the browser observatory or HTTP API only if the scratch export path or direct payload methods are unavailable.

## HJ07 - historical hum artifact comparison

Purpose:

- Use the historical artifact honestly without letting it masquerade as current proof.

Automated check:

- Only when `--historical-hum` is provided:
  - parse timestamps
  - detect `[HUM_STATS]`, `[HUM_METRICS]`, and `[HUM_TABLE]`
  - collect recurrent motif/compression patterns
  - compare them structurally against current runtime artifacts

Expected result:

- Historical hum artifact present, with current analog either present or absent and no semantic overreach.

What this means for the hum:

- The historical artifact can show what a hum looked like. It cannot, by itself, prove that the current build still emits one.

If this fails:

- The audit still classifies the current build, but loses the historical comparison.

Manual follow-up only if needed:

- Read the historical hum file directly or rerun the audit with the correct path.

## HJ08 - dead-path versus live-path audit

Purpose:

- Determine whether hum is live code, dormant code, docs-only, historical-only, or missing entirely.

Automated check:

- Collapse static claim inventory plus current runtime/export evidence.
- Classify discovered hum-relevant paths under the strict register:
  - implemented
  - instrumented
  - conceptual
  - unknown
  - stale residue

Expected result:

- A spine-level classification that says whether the hum is implemented as a bounded runtime artifact, only instrumented historically, only conceptual in docs, or stale residue.

What this means for the hum:

- No vibes. No incense. Just artifact paths, reference blocks, and receipts.

If this fails:

- The repo needs a cleaner claim surface before hum can be troubleshot honestly.

Manual follow-up only if needed:

- Inspect the exact paths the audit classified if you need to verify why a surface landed where it did.

## HJ09 - final status register

Purpose:

- Produce the hum-specific truth register from current evidence.

Automated check:

- Collapse all journey results into:
  - `Implemented`
  - `Instrumented`
  - `Conceptual`
  - `Unknown`

Expected result:

- One conservative hum-specific status register for the current build, with the bounded runtime artifact promoted only when the artifact probe and reference surfaces both pass.

What this means for the hum:

- This is the single compact register you should trust before doing any manual hum troubleshooting.

If this fails:

- The audit loses its operator-facing summary contract.

Manual follow-up only if needed:

- Compare the report's status register against `docs/HUM_SPEC.md`.

## HJ10 - next shortest proof paths

Purpose:

- For every unresolved unknown, name the exact artifact or code path needed next.

Automated check:

- Generate a short follow-up list where each entry names:
  - one exact artifact or code path
  - one reason it is the shortest next path
  - whether it is automatable or manual

Expected result:

- A bounded queue for follow-up proof rather than a cloud of vague curiosity.

What this means for the hum:

- Every remaining unknown gets one shortest route out of the fog.

If this fails:

- The audit is incomplete because it cannot tell the operator what to inspect next.

Manual follow-up only if needed:

- Use the generated proof-path list and do not expand scope until one of those items lands.
