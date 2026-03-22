# Implementation Work Order

Generated: 2026-03-20 11:01:31 EDT  
Source brief: `../adam_intelligence_20260320_110131_core_audit.md`

## Immediate Closures

1. Add a browser-level mutation proof.
   - Target: drive `preview -> commit -> revert` through the React observatory in live mode.
   - Why: current repo proves the HTTP contract and browser exposure separately, but not the full browser-path mutation chain in this run.
   - Evidence target: one Playwright or equivalent live-browser test plus a resulting `measurement_events` diff.

2. Add export reconciliation for the measurement ledger.
   - Target: prove that a fresh export for a chosen experiment carries the same event count as `measurement_events` in `data/eden.db`.
   - Why: current exports show both zero-event and two-event bundles across experiments; the mechanism exists, but export freshness can mislead.
   - Evidence target: one deterministic test comparing DB counts and `measurement_events.json`.

3. Remove the TUI coroutine warning.
   - Target: `tests/test_tui_smoke.py::test_tui_conversation_atlas_saves_taxonomy_and_resumes_session`
   - Why: the suite passes, but the warning weakens the cleanliness of the TUI evidence surface.
   - Evidence target: `./.venv/bin/pytest -q` with zero warnings or a narrowly justified retained warning.

## Near-Term Drift Repairs

1. Normalize operator-facing naming.
   - Target: audit `README.md`, browser header copy, and selected doc fronts for Adam-centered wording.
   - Why: EDEN residue is still useful historically but dangerous in current present-tense descriptions.

2. Mark `adam_auto` more explicitly as fallback.
   - Target: the selection surface where operators choose inference profiles.
   - Why: the implementation is bounded fallback, but the name still invites hidden-planner interpretations.

3. Add one negative-scope enforcement surface.
   - Target: a dedicated test or manifest assertion for "no embeddings" and "no hidden governor path."
   - Why: those claims are currently well documented but only partly enforced by direct negative evidence.

## Deferred Unless Scope Changes

1. General-purpose graph IDE behavior in the browser observatory.
2. Embedding-based retrieval.
3. Training, fine-tuning, or LoRA adaptation.
4. Governor or recursive planner shell.

## Proof Commands

```bash
./.venv/bin/pytest -q
npm --prefix web/observatory run test
./.venv/bin/python scripts/check_observatory_build_meta.py
```
