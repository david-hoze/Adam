# Adam Intelligence Brief

Generated: 2026-03-20 11:01:31 EDT  
Run slug: `core_audit`  
Classification: `PASS`  
Verbosity profile: `THICK`  
Audience: technically literate internal-audit readers and downstream whitepaper-support readers  
Baseline override: `ACTIVE`  
Baseline draft: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf`  
Baseline hash: `0ac4ed914143db71d9035d92f9091327800e8380988fd9bc0fc3b445d1129107`

## 1. Run Envelope

### Governance Resolution Log

| Attempt | Absolute path / query | Exists | Opened | Accepted | Reason |
|---|---|---:|---:|---:|---|
| 1 | `/Users/brianray/Adam/AGENTS.md` | yes | yes | yes | `./AGENTS.md` exists at repo root and governs by hard rule. |
| 2 | `/Users/brianray/Adam/AGENTS.md` | yes | no | rejected | `<REPO_ROOT>/AGENTS.md` resolves to the same file already accepted in attempt 1. |
| 3 | `AGENTS*.md` at repo root | same match only | no | rejected | Current-repo scan resolves only `/Users/brianray/Adam/AGENTS.md`; no writer-specialized alias is currently reactivated. |

Governance verdict: `RESOLVED`

### Notes Surface Resolution

- Resolved canonical notes surface: `./codex_notes_garden.md`
- PRE note status: `EXECUTED`
- POST note status: `PENDING` at draft time, completed before finalization

### Canonical Pipeline Root Resolution

- Canonical root: `/Users/brianray/Adam/assets/white_paper_pipeline`
- Intelligence briefs: `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs`
- Writing memos: `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos`
- Whitepaper drafts: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts`
- `_support` directory for this run: `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/_support`

### Minimal RUN_CONFIG Audit

| Field | Status | Value used |
|---|---|---|
| `BASELINE_DRAFT_PATH` | `PROVIDED` | `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf` |
| `WHY_NOW` | `UNSET` | current-repo drift control and capability/evidence refresh |
| `AUDIENCE` | `UNSET` | technically literate internal-audit readers and downstream whitepaper-support readers |
| `RED_LINES` | `UNSET` | no fabricated implementation claims; no browser overclaim; no Eden-only path regression; no silent omission |
| `COMPARATORS_ENABLED` | `UNSET` | disabled |
| `PDF_BUILD_REQUIRED` | `UNSET` | Step 1 does not require PDF generation |
| operator attachments beyond repo | `UNSET` | none located |

Step-specific defaults used:

- `run_slug=core_audit`
- `runtime_patch_level=v1.2`
- `questions=none`
- `verbosity_profile=THICK`
- `require_write_proof=true`

### Research Library Resolution

Resolved path: `./assets/cannonical_secondary_sources/`

Other admissible paths checked:

- `./assets/canonical_secondary_sources/` -> `MISSING`
- `./assets/seed_canon/cannonical_secondary_sources/` -> `MISSING`
- `./assets/seed_canon/canonical_secondary_sources/` -> `MISSING`

Literature status in this run: used only as discipline surfaces, not implementation proof.

## 2. Surfaces Read And Missingness

### Opened Core Surfaces

- `./README.md`
- `./codex_notes_garden.md`
- `./docs/PROJECT_CHARTER.md`
- `./docs/CANONICAL_ONTOLOGY.md`
- `./docs/IMPLEMENTATION_TRUTH_TABLE.md`
- `./docs/KNOWN_LIMITATIONS.md`
- `./docs/REGARD_MECHANISM.md`
- `./docs/TURN_LOOP_AND_MEMBRANE.md`
- `./docs/GRAPH_SCHEMA.md`
- `./docs/TUI_SPEC.md`
- `./docs/OBSERVATORY_SPEC.md`
- `./docs/OBSERVATORY_INTERACTION_SPEC.md`
- `./docs/OBSERVATORY_GEOMETRY_SPEC.md`
- `./docs/OBSERVATORY_E2E_AUDIT.md`
- `./docs/MEASUREMENT_EVENT_MODEL.md`
- `./docs/EXPERIMENT_PROTOCOLS.md`
- `./docs/SOURCE_MANIFEST.md`
- `./docs/MIGRATION_NOTES_V1_1.md`
- `./docs/PATCH_MANIFEST_V1_1.md`
- `./docs/PATCH_MANIFEST_V1_2.md`
- `./docs/INFERENCE_PROFILES.md`
- `./docs/DOCUMENT_INGEST.md`

### Opened Implementation / Evidence Surfaces

- `./app.py`
- `./eden/app.py`
- `./eden/runtime.py`
- `./eden/retrieval.py`
- `./eden/regard.py`
- `./eden/inference.py`
- `./eden/models/catalog.py`
- `./eden/models/mlx_backend.py`
- `./eden/storage/schema.py`
- `./eden/storage/graph_store.py`
- `./eden/ontology_projection.py`
- `./eden/hum.py`
- `./eden/observatory/server.py`
- `./eden/observatory/service.py`
- `./eden/observatory/geometry.py`
- `./eden/tanakh/service.py`
- `./eden/tui/app.py`
- `./web/observatory/src/App.tsx`
- `./web/observatory/src/App.test.tsx`
- `./tests/test_runtime_e2e.py`
- `./tests/test_regard.py`
- `./tests/test_inference_profiles.py`
- `./tests/test_hum_runtime.py`
- `./tests/test_observatory_server.py`
- `./tests/test_observatory_measurements.py`
- `./tests/test_tanakh_tools.py`
- `./tests/test_tui_smoke.py`
- `./logs/runtime.jsonl`
- `./exports/context/latest.md`
- `./exports/b178bed2-731e-4f8b-b5f8-a93d1300b2f7/measurement_events.json`
- `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/graph_knowledge_base.json`
- `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json`
- `./data/eden.db`

### Readable Drift / Archaeology Surfaces

- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf`
- `./assets/white_paper_pipeline/intel_briefs/adam_intelligence_20260320_101111_core_audit.md`

### Missing High-Value Surface

- `./assets/seed_canon/eden_whitepaper_v14.pdf` -> `MISSING`

This missingness does not block the run because the operator-designated baseline override exists under the canonical pipeline root and was opened as the drift surface.

## 3. Forensic Summary

Adam currently implements a direct local-first graph-conditioned dialogue loop on top of a persistent SQLite graph, with MLX as the real runtime backend, the Textual TUI as the primary operator surface, explicit structured feedback as durable selection pressure, and a browser observatory that is now materially browser-exposed for read, measure, preview, commit, and revert workflows. The repo does not support the older whitepaper's governor-first turn plan or recursive planner shell. Those are now drift surfaces, not live implementation truth.

The strongest evidence in this run is execution evidence, not prose alone:

- `./.venv/bin/pytest -q` -> `119 passed, 1 warning`
- `npm --prefix web/observatory run test` -> `12 passed`
- `./.venv/bin/python scripts/check_observatory_build_meta.py` -> `"ok": true`
- `./logs/runtime.jsonl` contains `generation_start` and `generation_complete` events with `"backend": "mlx"`
- `./data/eden.db` contains `measurement_events=2`
- `./exports/b178bed2-731e-4f8b-b5f8-a93d1300b2f7/measurement_events.json` exports the two-event ledger with an `edge_add` plus `revert`

The main downgrade pressure in this repo is not missing code so much as drift between current implementation and older public-facing prose. Legacy `EDEN` naming remains widespread in filenames, docs, export strings, and browser chrome. That is historical implementation residue, not permission to describe the current runtime as Eden-first.

## 4. Candidate Expectation Verdicts

| Expectation | Verdict | Evidence |
|---|---|---|
| no governor in v1 | `CONFIRMED` | `./eden/runtime.py`, `./docs/PROJECT_CHARTER.md`, `./eden/agents/adam/profile.json`, baseline drift check |
| no hidden planner | `CONFIRMED` | direct `preview_turn -> model.generate -> membrane -> persist` path in `./eden/runtime.py`; `./docs/INFERENCE_PROFILES.md` |
| no weight training, fine-tuning, or LoRA | `CONFIRMED` | `./docs/PROJECT_CHARTER.md`, `./docs/IMPLEMENTATION_TRUTH_TABLE.md`, no contrary code path opened |
| MLX is the active local runtime backend | `CONFIRMED` | `./eden/app.py`, `./eden/models/mlx_backend.py`, `./logs/runtime.jsonl`, pytest run |
| TUI is the primary runtime surface | `CONFIRMED` | `./docs/TUI_SPEC.md`, `./eden/tui/app.py`, `./README.md` |
| browser observatory is observability / measurement instrument rather than main dialogue loop | `CONFIRMED` | `./docs/OBSERVATORY_SPEC.md`, `./README.md`, `./eden/runtime.py`, `./web/observatory/src/App.tsx` |
| `adam_auto` on MLX falls back to `runtime_auto` | `CONFIRMED` | `./eden/inference.py`, `./tests/test_inference_profiles.py`, `./README.md` |
| embedding-based semantic retrieval is deferred | `CONFIRMED` | `./docs/KNOWN_LIMITATIONS.md`, lexical/graph retrieval in `./eden/retrieval.py` |
| observatory edit / preview / revert and causal-runtime browser exposure may be partial | `PARTIALLY TRUE` | browser exposure exists and is tested, but only through bounded observatory APIs and export/trace channels; not a general graph IDE or hidden runtime controller |

## 5. Patch Gate Verdict

### Runtime Patch Level Inference

Inferred patch level: `v1.2`

Evidence anchors:

- `./README.md` title `EDEN / ADAM v1.2`
- `./README.md` v1.2 additions list
- `./docs/PATCH_MANIFEST_V1_2.md`
- `./docs/PATCH_MANIFEST_V1_1.md`
- `./docs/MIGRATION_NOTES_V1_1.md`

### Gate Table

| Required capability for inferred level | Verdict | Evidence |
|---|---|---|
| live observatory API layered onto export server | `PASS` | `./eden/observatory/server.py`, `./tests/test_observatory_server.py`, `./README.md` |
| preview / commit / revert measurement editing | `PASS` | `./eden/observatory/service.py`, `./web/observatory/src/App.tsx`, `./tests/test_observatory_measurements.py`, `./tests/test_observatory_server.py` |
| persistent `measurement_events` ledger | `PASS` | `./eden/storage/schema.py`, `./eden/storage/graph_store.py`, `./data/eden.db`, `./exports/b178bed2-731e-4f8b-b5f8-a93d1300b2f7/measurement_events.json` |
| memode assertion and membership refinement workflows | `PASS` | `./eden/observatory/service.py`, `./tests/test_observatory_measurements.py` |
| local geometry diagnostics and before/after deltas | `PASS` | `./eden/observatory/geometry.py`, `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json`, tests |
| browser observatory workbench exposure | `PASS` | `./web/observatory/src/App.tsx`, `./web/observatory/src/App.test.tsx`, `npm --prefix web/observatory run test` |
| `adam_auto` MLX fallback remains bounded rather than hidden Adam prepass | `PASS` | `./eden/inference.py`, `./tests/test_inference_profiles.py`, `./docs/PATCH_MANIFEST_V1_2.md` |

Patch Gate Verdict: `PASS`

### Next Minimal Closure Steps

1. Add one browser-level mutation test that drives `preview -> commit -> revert` through the React UI instead of the HTTP surface alone.
2. Add one export reconciliation test that proves a freshly exported observatory bundle includes the same measurement-event counts as the source experiment in `data/eden.db`.
3. Resolve the `tests/test_tui_smoke.py` coroutine warning so the TUI evidence path returns fully clean.

## 6. Basin Analysis

### A. Naming, Ontology, And Legacy-Shell Drift

Definition snapshot:

- Adam is the current runtime name in operator-facing prose for this brief.
- `EDEN` strings remain active in code paths, docs, model directories, browser copy, and patch manifests as implementation-history anchors.
- The shell/runtime distinction matters only once: EDEN remains the broader shell/history container in some artifacts, while Adam is the current dialogue runtime/persona.

Mechanism / data model:

- Naming discipline is enforced socially and through docs, not by a runtime alias registry.
- Public-facing drift risk is concentrated in `./README.md`, old manifests, export shell labels, and the baseline draft.

Evidence map:

- `./README.md`
- `./docs/PROJECT_CHARTER.md`
- `./docs/PATCH_MANIFEST_V1_1.md`
- `./docs/PATCH_MANIFEST_V1_2.md`
- `./web/observatory/src/App.tsx`
- baseline `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf`

Failure modes:

- Legacy `EDEN` strings can cause present-tense overclaim that the project is still framed as Eden-first rather than Adam-centered.
- The baseline whitepaper can be mistaken for current implementation truth, especially where it still describes a governor-first loop.

Probes:

- `rg -n "EDEN|Adam" README.md docs eden web/observatory/src -g '!web/observatory/node_modules/**'`
- `pdftotext /Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf - | rg -n "governor|Adam|Eden"`

Claim tuples:

- CLAIM: The repo still contains substantial EDEN-era naming residue.
  EVIDENCE: `./README.md`, `./docs/PATCH_MANIFEST_V1_2.md`, `./web/observatory/src/App.tsx`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `HISTORICAL_REFERENCE_ONLY`
  GAPS / RISKS: naming residue can leak into public claims
  PROBE: run the `rg` command above and review operator-facing labels

- CLAIM: The current direct runtime should still be described as Adam, not as an Eden-only system.
  EVIDENCE: `./docs/PROJECT_CHARTER.md`, `./eden/agents/adam/profile.json`, this run's governance prompt
  PRIMARY REGISTER: `CONCEPTUAL`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: not mechanically enforced by code
  PROBE: audit operator-visible strings in `./README.md`, `./web/observatory/src/App.tsx`, `./eden/tui/app.py`

Evidence excerpt / command:

```bash
rg -n "EDEN / ADAM v1.2|EDEN Observatory|You are Adam" README.md web/observatory/src/App.tsx eden/runtime.py
```

Synthetic clay patch:

`PROPOSED`: "Operator-facing prose must say Adam unless the exact shell/history distinction is necessary for provenance."

### B. Meme / Memode Object Model

Definition snapshot:

- `Meme` is first-class.
- `Information` is projected from knowledge rows in the same `memes` table.
- `Memode` is derived/materialized second-order behavioral structure, not a free-floating summary label.
- Cluster summaries are not memodes.

Mechanism / data model:

- `./eden/ontology_projection.py` gates memode materialization by domain.
- `./eden/storage/schema.py` persists `memes`, `memodes`, edges, and FTS tables separately.
- `./eden/observatory/service.py` validates memode assertions using support relations and behavior-domain membership constraints.

Evidence map:

- `./docs/CANONICAL_ONTOLOGY.md`
- `./eden/ontology_projection.py`
- `./eden/storage/schema.py`
- `./tests/test_runtime_e2e.py`
- `./tests/test_observatory_measurements.py`
- `./web/observatory/src/workbench/graphUtils.test.ts`

Failure modes:

- Knowledge-domain material can be mislabeled as memode content if ontology projection rules drift.
- Cluster summaries can be mistaken for durable memodes when export or UI summaries collapse categories.

Probes:

- `./.venv/bin/pytest -q tests/test_observatory_measurements.py -k memode`
- `./.venv/bin/pytest -q tests/test_runtime_e2e.py -k memode`

Claim tuples:

- CLAIM: Memodes are materially separate persisted objects with their own table and browser-visible audit plane.
  EVIDENCE: `./eden/storage/schema.py`, `./web/observatory/src/App.tsx`, `./tests/test_observatory_server.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: browser summaries can still tempt category collapse
  PROBE: inspect `memode_audit` in graph payload and observatory UI

- CLAIM: Knowledge memodes are intentionally blocked by ontology rules.
  EVIDENCE: `./eden/ontology_projection.py`, `./tests/test_runtime_e2e.py` (`test_index_text_into_graph_derives_authorship_without_materializing_knowledge_memodes`)
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `DEFERRED_BY_DESIGN`
  GAPS / RISKS: stale prose may still describe a broader meme/memode substrate than current code allows
  PROBE: run the targeted runtime e2e test

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_observatory_measurements.py -k "memode_assert or memode_audit"
```

Synthetic clay patch:

`PROPOSED`: "A memode assertion is admissible only if every member is behavioral and support edges are materially present."

### C. Active Set, Retrieval Salience, And Prompt Assembly

Definition snapshot:

- Retrieval is bounded, explicit, and operator-visible.
- Salience selects an active set for prompt assembly; it is not durable identity.
- The active set includes behavior, knowledge, documents, and memode material with trace scores.

Mechanism / data model:

- `./eden/retrieval.py` scores candidates using semantic-ish term overlap, graph metrics, regard, activation, session bias, explicit feedback, and membrane penalties.
- `./eden/runtime.py` assembles system prompt, conversation prompt, recent feedback, and history windows into the turn preview.
- TUI budget panels and trace surfaces expose the selected active set and token conditions before send.

Evidence map:

- `./eden/retrieval.py`
- `./eden/runtime.py`
- `./eden/tui/app.py`
- `./tests/test_inference_profiles.py`
- `./tests/test_tui_smoke.py`
- `./tests/test_runtime_e2e.py`

Failure modes:

- Lexical/graph heuristics can miss semantically close material because embeddings are deferred.
- Operators can overread active-set recurrence as durable selfhood rather than bounded turn-time selection.

Probes:

- `./.venv/bin/pytest -q tests/test_inference_profiles.py`
- `./.venv/bin/pytest -q tests/test_tui_smoke.py -k "budget or preview or active_set"`

Claim tuples:

- CLAIM: Active-set composition is visible to the operator before and after generation.
  EVIDENCE: `./eden/runtime.py` preview path, `./eden/tui/app.py`, `./tests/test_tui_smoke.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: visibility does not equal perfect retrieval adequacy
  PROBE: run a preview-focused TUI smoke subset

- CLAIM: Retrieval remains lexical/graph-heuristic rather than embedding-based.
  EVIDENCE: `./docs/KNOWN_LIMITATIONS.md`, opened `./eden/retrieval.py` implementation, absence of embedding infrastructure in opened runtime path
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `DEFERRED_BY_DESIGN`
  GAPS / RISKS: near-neighbor semantic misses remain plausible
  PROBE: compare retrieval on paraphrase-heavy queries after ingest

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_inference_profiles.py -k "runtime_auto or history_turns"
```

Synthetic clay patch:

`PROPOSED`: "Selection may affect a turn without becoming identity; identity claims require durable graph evidence, not active-set recurrence alone."

### D. Regard, Feedback, And Durable Selection

Definition snapshot:

- Regard is durable selection pressure, not prompt-time salience.
- Feedback must be explicit and structured.
- `accept` and `reject` require explanation; `edit` requires explanation plus corrected text.

Mechanism / data model:

- `./eden/regard.py` computes reward, evidence, coherence, persistence, decay, isolation penalty, risk, activation, and selection score components.
- `./eden/runtime.py` applies feedback via `feedback_signal()` and `ema()` into both memes and memodes, indexes corrective text back into the graph, and records trace / hum refreshes.
- `feedback_events` persist verdict, explanation, corrected text, and timestamps in SQLite.

Evidence map:

- `./docs/REGARD_MECHANISM.md`
- `./eden/regard.py`
- `./eden/runtime.py`
- `./tests/test_regard.py`
- `./tests/test_runtime_e2e.py`
- `./data/eden.db`

Failure modes:

- Heuristic regard weights can overweight certain graph topologies relative to operator intent.
- Weak or low-specificity feedback explanations can enter the graph and later bias retrieval in noisy ways.

Probes:

- `./.venv/bin/pytest -q tests/test_regard.py`
- `./.venv/bin/pytest -q tests/test_runtime_e2e.py -k feedback`

Claim tuples:

- CLAIM: Feedback produces durable retrieval pressure rather than ephemeral prompt notes only.
  EVIDENCE: `./eden/runtime.py`, `./eden/regard.py`, `./tests/test_runtime_e2e.py`, `./data/eden.db`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: correctness of weighting remains heuristic rather than learned
  PROBE: run the feedback subset in runtime e2e and inspect subsequent retrieval results

- CLAIM: Regard is explicitly computed, decomposed, and test-covered.
  EVIDENCE: `./eden/regard.py`, `./tests/test_regard.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: parameter choices remain a design decision, not a theorem
  PROBE: execute `tests/test_regard.py`

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_regard.py
```

Synthetic clay patch:

`PROPOSED`: "Feedback that lacks a causal explanation should not update durable regard, even if it records a verdict."

### E. Turn Loop, Membrane, And Traceability

Definition snapshot:

- The v1 loop is `input -> retrieve/assemble -> Adam response -> membrane -> feedback -> graph update`.
- The membrane is visible and records what was selected, trimmed, or rejected.
- The membrane is not a governor product and not a hidden planner residue.

Mechanism / data model:

- `./eden/runtime.py` runs `preview_turn`, then generation, then `sanitize_operator_response`, then persistence of turns, membrane events, active-set JSON, trace events, and graph indexing.
- `./eden/storage/schema.py` persists `turns`, `membrane_events`, and `trace_events`.
- `./logs/runtime.jsonl` records runtime events around generation, exports, observatory startup, and hum refresh.

Evidence map:

- `./docs/TURN_LOOP_AND_MEMBRANE.md`
- `./eden/runtime.py`
- `./eden/storage/schema.py`
- `./tests/test_runtime_e2e.py`
- `./logs/runtime.jsonl`

Failure modes:

- Overaggressive membrane stripping can remove operator-useful structure.
- Traceability can look more complete than it is if an operator confuses export traces with hidden model internals.

Probes:

- `./.venv/bin/pytest -q tests/test_runtime_e2e.py -k membrane`
- `./.venv/bin/python - <<'PY' ... read logs/runtime.jsonl for generation_* and hum_refreshed events ... PY`

Claim tuples:

- CLAIM: The runtime loop is direct and does not route through a governor plan object.
  EVIDENCE: `./eden/runtime.py`, `./eden/agents/adam/profile.json`, `./docs/TURN_LOOP_AND_MEMBRANE.md`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: older whitepaper prose still says otherwise
  PROBE: trace the `Runtime.chat()` call path and compare it to baseline PDF text

- CLAIM: Membrane artifacts and trace artifacts are persisted and queryable.
  EVIDENCE: `./eden/storage/schema.py`, `./data/eden.db`, `./tests/test_runtime_e2e.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: persisted traces are still runtime-side summaries, not access to hidden model state
  PROBE: query `membrane_events` and `trace_events` counts in `data/eden.db`

Evidence excerpt / command:

```bash
./.venv/bin/python - <<'PY'
import sqlite3
conn = sqlite3.connect('data/eden.db')
cur = conn.cursor()
for table in ['turns', 'membrane_events', 'trace_events']:
    cur.execute(f'SELECT COUNT(*) FROM {table}')
    print(table, cur.fetchone()[0])
conn.close()
PY
```

Synthetic clay patch:

`PROPOSED`: "Every membrane mutation should remain legible as an operator-auditable event, never as an invisible planner correction."

### F. TUI Runtime Surface

Definition snapshot:

- The TUI is the primary runtime surface.
- It is dialogue-first, review-aware, budget-visible, and session-persistent.
- Browser work is observability/export work unless the project charter changes.

Mechanism / data model:

- `./eden/tui/app.py` manages the multiline composer, preview refresh, inline feedback workflow, hum live reasoning pane, session atlas/resume flows, budget panels, and browser observatory launch actions.
- `./eden/app.py` exposes `python -m eden app` as the main operator launch path.

Evidence map:

- `./docs/TUI_SPEC.md`
- `./eden/tui/app.py`
- `./tests/test_tui_smoke.py`
- `./tests/test_hum_runtime.py`

Failure modes:

- The current test run still emits one coroutine warning in `tests/test_tui_smoke.py`.
- Terminal rendering remains constrained by Textual/Rich; the surface is not a pixel-true graphical system.

Probes:

- `./.venv/bin/pytest -q tests/test_tui_smoke.py`
- `python -m eden app`

Claim tuples:

- CLAIM: The TUI remains the primary operator runtime, not the browser observatory.
  EVIDENCE: `./docs/TUI_SPEC.md`, `./eden/tui/app.py`, `./README.md`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: README and browser UI still carry EDEN naming residue
  PROBE: boot `python -m eden app` and inspect the first-action grammar

- CLAIM: Inline review, budget visibility, hum-live reasoning, and observatory launch hooks are all test-covered.
  EVIDENCE: `./tests/test_tui_smoke.py`, `./tests/test_hum_runtime.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: one test warning remains unresolved
  PROBE: run the two test files together and inspect warnings

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_tui_smoke.py tests/test_hum_runtime.py
```

Synthetic clay patch:

`PROPOSED`: "The TUI boot surface should state the current runtime condition before any style or lore surface."

### G. Observatory Read Surfaces

Definition snapshot:

- The observatory exposes graph, basin, geometry, measurements, Tanakh, transcript, trace, and runtime status/model surfaces.
- It exists in both static-export and live-API modes.
- SSE invalidation is present for lightweight live refresh.

Mechanism / data model:

- `./eden/observatory/server.py` serves JSON endpoints, SSE invalidation, and static exports.
- `./eden/observatory/exporters.py` writes graph, basin, geometry, measurement, Tanakh, and index artifact families.
- `./web/observatory/src/App.tsx` resolves payload sources from export or live API and renders workspaces plus docked panels.

Evidence map:

- `./docs/OBSERVATORY_SPEC.md`
- `./eden/observatory/server.py`
- `./eden/observatory/exporters.py`
- `./web/observatory/src/App.tsx`
- `./tests/test_observatory_server.py`
- `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/graph_knowledge_base.json`
- `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json`

Failure modes:

- Static exports can lag live DB state and therefore under-report current measurement counts.
- Operators can mistake availability of an export shell for live API availability.

Probes:

- `./.venv/bin/pytest -q tests/test_observatory_server.py`
- `./.venv/bin/python scripts/check_observatory_build_meta.py`

Claim tuples:

- CLAIM: The observatory now has real live read APIs, not just static HTML exports.
  EVIDENCE: `./eden/observatory/server.py`, `./tests/test_observatory_server.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: live availability still depends on local server start
  PROBE: run observatory server tests or `python -m eden observatory`

- CLAIM: Export and live read surfaces coexist, and the UI distinguishes them.
  EVIDENCE: `./web/observatory/src/App.tsx`, `./web/observatory/src/App.test.tsx`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `BOUNDED_FALLBACK`
  GAPS / RISKS: stale-export interpretation risk remains
  PROBE: inspect payload status badges in the React app

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_observatory_server.py
```

Synthetic clay patch:

`PROPOSED`: "Static-export mode must always badge itself as non-live and must never imply commit authority."

### H. Observatory Mutation / Measurement Contract

Definition snapshot:

- Preview, commit, and revert exist as bounded measurement-oriented mutations.
- Measurement events are persistent, revertible, and provenance-labeled.
- Browser mutation availability is real but bounded to observatory APIs rather than arbitrary graph IDE behaviors.

Mechanism / data model:

- `./eden/observatory/service.py` builds preview deltas, commit payloads, revert payloads, and trace records.
- `./eden/storage/schema.py` stores `measurement_events` with before/proposed/committed state, operator/evidence labels, and revert linkage.
- `./web/observatory/src/App.tsx` exposes `INSPECT`, `MEASURE`, `EDIT`, `ABLATE`, and `COMPARE`, with live-only mutation enablement and static disabled states.

Evidence map:

- `./docs/OBSERVATORY_INTERACTION_SPEC.md`
- `./docs/MEASUREMENT_EVENT_MODEL.md`
- `./eden/observatory/service.py`
- `./eden/storage/schema.py`
- `./web/observatory/src/App.tsx`
- `./tests/test_observatory_measurements.py`
- `./tests/test_observatory_server.py`
- `./data/eden.db`
- `./exports/b178bed2-731e-4f8b-b5f8-a93d1300b2f7/measurement_events.json`

Failure modes:

- Exported measurement ledgers can drift from the live experiment if the export is stale.
- Browser mutation coverage is bounded; server-side capability exists beyond what a static export can execute.

Probes:

- `./.venv/bin/pytest -q tests/test_observatory_measurements.py`
- `./.venv/bin/pytest -q tests/test_observatory_server.py -k "preview or commit or sse"`

Claim tuples:

- CLAIM: Preview / commit / revert semantics are implemented server-side and browser-exposed in live mode.
  EVIDENCE: `./eden/observatory/service.py`, `./web/observatory/src/App.tsx`, `./tests/test_observatory_server.py`, `./tests/test_observatory_measurements.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: static exports show the controls but cannot execute mutations
  PROBE: run the targeted observatory test subset and inspect `canMutate` gating in the React app

- CLAIM: Mutation authority remains bounded to the observatory measurement contract rather than arbitrary browser graph editing.
  EVIDENCE: `./README.md`, `./docs/OBSERVATORY_INTERACTION_SPEC.md`, `./web/observatory/src/App.tsx`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `BOUNDED_FALLBACK`
  GAPS / RISKS: operators may still overread browser edit affordances as unconstrained IDE control
  PROBE: audit available action types in `./eden/observatory/service.py`

- CLAIM: There is still an explicit browser contract gap between full server capability and static-export availability.
  EVIDENCE: live-only mutation gating in `./web/observatory/src/App.tsx`
  PRIMARY REGISTER: `INSTRUMENTED`
  OPTIONAL MODIFIERS: `EXPLICIT_BROWSER_CONTRACT_GAP`
  GAPS / RISKS: no single test in this run drove a real browser commit through the React UI
  PROBE: add one Playwright mutation test on top of the live API

Evidence excerpt / command:

```bash
./.venv/bin/python - <<'PY'
import sqlite3, json
conn = sqlite3.connect('data/eden.db')
cur = conn.cursor()
cur.execute("""
SELECT action_type, evidence_label, measurement_method, reverted_from_event_id, created_at
FROM measurement_events
ORDER BY created_at DESC
LIMIT 5
""")
for row in cur.fetchall():
    print(json.dumps(row))
conn.close()
PY
```

Synthetic clay patch:

`PROPOSED`: "Every browser mutation control must declare whether it is live-authoritative, preview-only, or static-display-only."

### I. Geometry And Basin Evidence

Definition snapshot:

- Geometry claims are labeled as observed, derived, or speculative; the opened code/export evidence shows observed and derived labels.
- Basin views summarize attractor/trajectory structure over graph/runtime artifacts, not internal activations.
- Interpretation boundaries matter: graph geometry is not model-state geometry.

Mechanism / data model:

- `./eden/observatory/geometry.py` computes whole-graph and local metrics, sparse-safe approximations, and local ablation/compare reports.
- `./eden/observatory/exporters.py` writes `geometry_diagnostics.json`, `geometry_lab.html`, and basin payloads.
- Exports include slices such as `full_graph`, `current_session`, `current_active_set`, and verdict-conditioned slices.

Evidence map:

- `./docs/OBSERVATORY_GEOMETRY_SPEC.md`
- `./docs/GEOMETRY_EVIDENCE_POLICY.md`
- `./eden/observatory/geometry.py`
- `./tests/test_observatory_measurements.py`
- `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json`

Failure modes:

- Operators may confuse derived symmetry-style metrics with directly observed model-state phenomena.
- Basin overlays can be overinterpreted as causal controllers rather than read surfaces over graph/runtime traces.

Probes:

- `./.venv/bin/pytest -q tests/test_observatory_measurements.py -k "geometry or basin or ablation"`
- `./.venv/bin/python - <<'PY' ... inspect geometry_diagnostics.json slices and metric labels ... PY`

Claim tuples:

- CLAIM: Geometry payloads explicitly distinguish observed metrics from derived metrics.
  EVIDENCE: `./eden/observatory/geometry.py`, `./exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: interpretation risk remains if labels are ignored
  PROBE: inspect metric labels in the export JSON

- CLAIM: Ablation and compare workflows are persisted as measurement-style events rather than silent graph rewrites.
  EVIDENCE: `./tests/test_observatory_measurements.py`, `./docs/MEASUREMENT_EVENT_MODEL.md`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: full browser-path exercise was not repeated in this run
  PROBE: run ablation-focused observatory measurement tests

Evidence excerpt / command:

```bash
./.venv/bin/python - <<'PY'
import json
from pathlib import Path
payload = json.loads(Path('exports/bb298723-5fbf-4554-bf6b-ec5f4d336fbd/geometry_diagnostics.json').read_text())
metrics = payload['full_graph']['metrics']['metrics']
for key in ['circularity','radiality','mirror_symmetry','chirality']:
    print(key, metrics[key]['evidence_class'])
PY
```

Synthetic clay patch:

`PROPOSED`: "Any geometry metric lacking an explicit evidence class should be omitted from operator-facing interpretation."

### J. Local-First Runtime And Model Constraints

Definition snapshot:

- Real runtime path is local-first and MLX-backed.
- No governor, no hidden planner, no training, no LoRA, no embeddings.
- `adam_auto` remains a bounded profile fallback on MLX rather than a separate planning intelligence.

Mechanism / data model:

- `./eden/app.py` defaults backend selection to MLX.
- `./eden/models/catalog.py` manages repo-local MLX model status.
- `./eden/models/mlx_backend.py` uses `mlx_lm` and handles reasoning/answer split with a bounded answer-only fallback.
- `./eden/inference.py` resolves profiles and explicitly downgrades `adam_auto` to `runtime_auto` on MLX.

Evidence map:

- `./docs/PROJECT_CHARTER.md`
- `./docs/INFERENCE_PROFILES.md`
- `./eden/app.py`
- `./eden/models/catalog.py`
- `./eden/models/mlx_backend.py`
- `./eden/inference.py`
- `./tests/test_inference_profiles.py`
- `./tests/test_model_catalog.py`
- `./logs/runtime.jsonl`

Failure modes:

- Missing local MLX model artifacts block real runtime even if mock/tests pass.
- Operators can misread `adam_auto` as a hidden Adam prepass rather than the documented bounded fallback.

Probes:

- `./.venv/bin/pytest -q tests/test_inference_profiles.py tests/test_model_catalog.py`
- `./.venv/bin/python scripts/check_observatory_build_meta.py`

Claim tuples:

- CLAIM: MLX is the current real backend, and runtime logs show MLX generations in this repo.
  EVIDENCE: `./eden/app.py`, `./eden/models/mlx_backend.py`, `./logs/runtime.jsonl`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: current log excerpts do not carry timestamps in the selected rows
  PROBE: tail `logs/runtime.jsonl` for `generation_start` and `generation_complete`

- CLAIM: `adam_auto` is not a separate hidden planner on MLX; it falls back to `runtime_auto`.
  EVIDENCE: `./eden/inference.py`, `./tests/test_inference_profiles.py`, `./README.md`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `BOUNDED_FALLBACK`
  GAPS / RISKS: the name still invites overreading
  PROBE: run `tests/test_inference_profiles.py -k adam_auto`

- CLAIM: Weight training, fine-tuning, LoRA, and embedding retrieval remain out of scope.
  EVIDENCE: `./docs/PROJECT_CHARTER.md`, `./docs/KNOWN_LIMITATIONS.md`, absence of contrary implementation in opened runtime path
  PRIMARY REGISTER: `CONCEPTUAL`
  OPTIONAL MODIFIERS: `DEFERRED_BY_DESIGN`
  GAPS / RISKS: absence-of-code evidence is weaker than a dedicated negative test
  PROBE: maintain explicit negative-scope statements in docs and release manifests

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_inference_profiles.py -k adam_auto
```

Synthetic clay patch:

`PROPOSED`: "If `adam_auto` is a fallback alias rather than a distinct reasoning stage, the UI must say so at the point of selection."

### K. Tanakh Sidecar Surface

Definition snapshot:

- Tanakh is present.
- It is an additive sidecar surface with canonical text plus derived analyzers and scene sidecars.
- It is not a proof surface for Adam's core dialogue loop.

Mechanism / data model:

- `./eden/tanakh/service.py` builds substrate, analyzers, scene bundle, passage cache, validation outputs, and surface bundle.
- `./eden/observatory/exporters.py` integrates Tanakh exports into the observatory artifact family.
- `./web/observatory/src/App.tsx` defers Tanakh payload loading until needed and exposes a live `tanakh_run` action when available.

Evidence map:

- `./eden/tanakh/service.py`
- `./eden/observatory/exporters.py`
- `./web/observatory/src/App.tsx`
- `./tests/test_tanakh_tools.py`
- `./web/observatory/src/App.test.tsx`

Failure modes:

- Tanakh rendering validation still includes a manual-check instruction, so the evidentiary chain is not fully automated.
- Operators can conflate derived analyzer output with canonical text if provenance is not preserved.

Probes:

- `./.venv/bin/pytest -q tests/test_tanakh_tools.py`
- inspect generated `tanakh_render_validation.html` and `tanakh_measurements.json` in an export bundle

Claim tuples:

- CLAIM: The Tanakh sidecar is implemented, exported, and test-covered.
  EVIDENCE: `./eden/tanakh/service.py`, `./tests/test_tanakh_tools.py`, `./eden/observatory/exporters.py`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: none
  GAPS / RISKS: manual render validation remains part of the package
  PROBE: run `tests/test_tanakh_tools.py`

- CLAIM: Tanakh browser exposure exists but is deferred and bounded.
  EVIDENCE: `./web/observatory/src/App.tsx`, `./web/observatory/src/App.test.tsx`
  PRIMARY REGISTER: `IMPLEMENTED`
  OPTIONAL MODIFIERS: `BOUNDED_FALLBACK`
  GAPS / RISKS: this run did not execute a live browser `tanakh_run`
  PROBE: add or run a browser-level live Tanakh interaction test

Evidence excerpt / command:

```bash
./.venv/bin/pytest -q tests/test_tanakh_tools.py
```

Synthetic clay patch:

`PROPOSED`: "Tanakh payloads must mark canonical text, derived analyzer output, and scene render sidecars as separate provenance classes."

## 7. Baseline Drift Check

### Baseline Override Status

- `BASELINE_OVERRIDE_ACTIVE=true`
- Opened: yes
- Readable: yes
- Hash recorded: yes

### Overclaims / Drift Relative To The Designated Baseline Draft

The designated baseline draft remains useful as archaeology and continuity control, but it materially overstates or misstates current repo truth in at least four ways:

1. It still describes a governor-first turn plan with JSON control output before Adam speaks.
2. It still leans on recursive language model / planner-shell framing not proven in the current repo.
3. It uses a broader meme/memode substrate language than the current ontology permits; current code keeps memodes behavioral and derived.
4. It frames Adam inside a larger lineage trajectory that is not implemented as a current runtime capability.

What the baseline still gets roughly right:

- local-first posture
- explicit feedback importance
- distinction between durable regard and momentary selection
- graph-conditioned memory ambitions

## 8. Repo-Drift Self-Check

### Prompt Assumptions Confirmed

- governance had to be resolved before the audit
- the pipeline-root artifact directories are the canonical output targets
- the TUI remains primary
- MLX remains the active local backend
- no governor in v1
- no embeddings/training/LoRA path was found in the active runtime implementation

### Prompt Assumptions Superseded

- "observatory edit / preview / revert and causal-runtime browser exposure may be partial" is too weak for the current repo state
  - current repo evidence shows real browser-visible workbench surfaces plus live API preview/commit/revert contracts
  - what remains partial is not existence but coverage: bounded mutation authority, static/live divergence, and missing browser-path mutation proof in this run
- the historical root-level `assets/seed_canon/eden_whitepaper_v14.pdf` is no longer the operative baseline surface for this run
  - the current baseline came from the canonical pipeline root override and the historical root path is `MISSING`

### Prompt Assumptions Not Fully Evaluated

- no exhaustive audit was performed of every legacy root-level archaeology directory because current pipeline-root artifacts were sufficient
- no comparator section was evaluated because `COMPARATORS_ENABLED` was unset
- no PDF rebuild was attempted because `PDF_BUILD_REQUIRED` was unset

### Current Repo Surfaces That Materially Replace Older Expectations

- `./README.md` plus `./docs/PATCH_MANIFEST_V1_2.md` replace older v1.1-only observatory assumptions
- `./web/observatory/src/App.tsx` materially replaces any assumption that the browser is still read-mostly only
- `./tests/test_observatory_measurements.py` materially replaces prose-only mutation claims with execution proof
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf` replaces the missing root-level whitepaper path as the active drift surface for this run

## 9. Execution / Build Status Log

| Status | Command / action | Outcome | Affected output family | Consequence |
|---|---|---|---|---|
| `EXECUTED` | governance resolution via `./AGENTS.md` | governance resolved | audit gating | run allowed |
| `EXECUTED` | PRE note append to `./codex_notes_garden.md` | note appended | audit trace | compliant |
| `EXECUTED` | baseline hash/read on `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/eden_whitepaper_v14.pdf` | readable, hash captured | drift control | baseline override satisfied |
| `EXECUTED` | `./.venv/bin/pytest -q` | `119 passed, 1 warning` | repo evidence | strong execution proof; one TUI warning remains |
| `EXECUTED` | `npm --prefix web/observatory run test` | `12 passed` | browser observatory evidence | browser workbench proof strengthened |
| `EXECUTED` | `./.venv/bin/python scripts/check_observatory_build_meta.py` | `"ok": true` | browser build metadata | static bundle provenance checked |
| `EXECUTED` | SQLite inspection of `data/eden.db` | counts found; `measurement_events=2` | persistence / measurement ledger | confirms live ledger state |
| `EXECUTED` | runtime log probe of `logs/runtime.jsonl` | `generation_start` / `generation_complete` with backend `mlx` | MLX runtime proof | confirms active local backend |
| `EXECUTED` | export inspection under `./exports/` | graph/geometry/measurement families present | observatory evidence | confirms export families |
| `SKIPPED` | PDF build | not required by run config | PDF output family | none |
| `SKIPPED` | comparator section | disabled by run config | comparative framing | none |

## 10. Bottom Line

Adam v1 currently implements a direct MLX-backed, graph-conditioned, feedback-bearing local runtime with a first-class TUI and a materially browser-exposed observatory measurement workbench. The strongest present risk is not missing core mechanism but stale prose drift, especially where old EDEN / governor / recursive-planner language survives in manuscripts and historical shells.

The shortest proof path for the next audit ratchet is not more prose. It is one browser-path mutation test, one export-vs-DB reconciliation test for measurement counts, and one cleanup of the remaining TUI test warning.
