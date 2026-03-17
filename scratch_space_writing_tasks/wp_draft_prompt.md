# ADAM V1 — WHITEPAPER GENERATION PROMPT

You are Codex.

Generate or revise the Adam v1 whitepaper as a repo-grounded scientific/technical artifact. Treat prose as executable specification. Treat revision as refactoring. Treat the current Adam repo as the truth condition for any implementation-strength claim.

This is Step 3 of 3:
1. Intelligence brief
2. Codex pre-writing memo
3. Whitepaper generation

There is no Claude memo step.

ROLE
Your job is not to produce marketing prose or a vibes-based conceptual essay. Your job is to compile the current Adam repository, its current evidence surfaces, and its current drift-controlled artifact lineage into a coherent whitepaper that remains scientifically legible without laundering speculative or historical claims into present-tense implementation.

Treat this pass as the final integrator:
- it must absorb the intelligence brief and pre-writing memo without being captured by them
- it must remain subordinate to current repo truth
- it must preserve continuity with prior drafts where continuity is still evidence-compatible
- it must explicitly surface discontinuity where prior language outruns current proof

NAME DISCIPLINE
- This whitepaper is about Adam.
- Use “Adam” as the project/runtime name throughout new prose.
- Legacy `EDEN` / `eden/` strings in current repo artifacts are historical/internal anchors. They may be cited in code paths, legacy manifests, or historical framing, but they are not the default public name for the current paper.
- If the shell/runtime distinction is genuinely needed, explain it once, precisely, and then keep the paper centered on Adam v1.

REPO ROOT RESOLUTION
- Prefer `.` if already at repo root.
- Otherwise resolve `/Users/brianray/Adam`.

WHITE PAPER PIPELINE ROOT
The canonical output root for white-paper pipeline artifacts is:

`/Users/brianray/Adam/assets/white_paper_pipeline`

Canonical subdirectories:
- intelligence briefs: `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs`
- writing memos: `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos`
- whitepaper drafts: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts`

Hard rules:
- Treat these as the primary pipeline artifact locations.
- Create them if missing and the environment allows writing.
- If writing is blocked, record `WRITE_BLOCKED` with exact attempted absolute path(s).
- Repo root resolution and pipeline output resolution are distinct.
- Even if the current working directory is repo root, pipeline artifacts still write under `/Users/brianray/Adam/assets/white_paper_pipeline/...`
- Do not confuse pipeline artifact directories with implementation-truth surfaces under `./docs/`, `./eden/`, `./tests/`, `./logs/`, or `./exports/`.

Fallback rule:
- Legacy root-level directories such as `./intelligence_briefs/`, `./whitepaper_prewriting_memo/`, and `./whitepaper_drafts/` may still be searched as archaeology or fallback inputs if present, but they are no longer the canonical output targets.

GOVERNANCE
- If `./AGENTS.md` exists, follow it.
- Do not depend on `AGENTS_CODEX-WRITER.md` or any writer-specialized agent file.
- If `./codex_notes_garden.md` exists and is writable, you may append concise PRE/POST notes for continuity. This is recommended, not mandatory.

UNIVERSALIZATION RULE
This prompt is designed for repeated use across the remaining Adam project lifecycle.

Do not treat any file path, patch label, UI limitation, or present-tense repo condition named in this prompt as permanently canonical unless it is re-confirmed by currently opened evidence.

Prefer current repo truth over prompt inertia.

Treat prompt assumptions as auditable scaffolding, not self-justifying fact.

RECURSIVE NATURAL LANGUAGE PROGRAMMING / SELF-SIMILARITY CONTRACT
This drafting process is not merely “documentation around a codebase.” It is part of the codebase’s second implementation surface: controlled English constrained by evidence.

In this workflow:
- prose is allowed to function as executable specification
- the compilation target is code, tests, logs, traces, figures, and auditable claims
- drift artifacts are regression tests for the prose surface
- the whitepaper must remain an isomorphic projection of the repository’s strongest evidence-backed commitments

Self-similarity is correctness, not style. The paper should recur to the same canonical primitives the repo actually supports, with stable denotation across:
- docs
- code
- tests
- runtime artifacts
- briefs
- memos
- draft lineage

If a strong claim in the paper cannot be pointed back to an actual file path, symbol, test, trace, export, or reproducible evidence excerpt, it must not appear in implementation-strength language.

If the repo visibly implements a mechanism but the paper cannot name it cleanly and place it in the causal story, that is under-specification and must be repaired.

BASELINE DRAFT RESOLUTION
Resolve the baseline in this order:

1. If the operator explicitly provides `BASELINE_DRAFT_PATH`, use it.
2. Else if `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/` already contains prior Adam draft artifacts, choose the latest deterministic candidate:
   - prefer highest explicit `vNN` suffix if present
   - otherwise newest modified timestamp
3. Else if legacy `./whitepaper_drafts/` already contains prior Adam draft artifacts, choose the latest deterministic candidate there as a fallback archaeology surface only:
   - prefer highest explicit `vNN` suffix if present
   - otherwise newest modified timestamp
4. Else if `./assets/seed_canon/eden_whitepaper_v14.pdf` exists, treat it as a historical conceptual reference only, not as the current canonical Adam draft
5. Else start fresh from the current repo truth surfaces

Record which case fired.
Record file hash for any baseline artifact actually used.

RUN VERSION
Set:
- `THIS_RUN_VERSION = YYYYMMDD_HHMMSS` in `America/New_York`

Write all run outputs under:
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/`

Required subpaths:
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/latex/`
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/pdf/`
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/audit/`
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/figure_bundle/`
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/data/`

CANONIZATION
After successful compilation, copy the compiled PDF to:
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/LATEST_ADAM_WHITEPAPER.pdf`

Also write a small provenance file:
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/LATEST_ADAM_WHITEPAPER.json`

with:
- source run directory
- timestamp
- hash
- baseline artifact used

SURFACE RESOLUTION RULE
Treat explicitly listed files as preferred high-value entry points, not as a permanent exhaustive file contract.

If a listed file is missing, search nearby current-repo equivalents before concluding `MISSING`.

Search order:
1. exact listed path
2. same filename elsewhere under `./docs/`
3. close semantic equivalents under:
   - `./docs/`
   - `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/`
   - `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos/`
   - `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/`
   - `./exports/context/`
4. if no equivalent exists, record `MISSING`

Hard rule:
- prefer opened current equivalents over stale filename loyalty
- do not hallucinate equivalence
- record the resolved substitute path explicitly

SOURCE OF TRUTH
1) Current implementation truth comes from:
- opened code under `./eden/`
- tests under `./tests/`
- current docs truth surfaces under `./docs/`
- runtime-visible artifacts under `./logs/` and `./exports/`

2) Historical conceptual context comes from:
- prior briefs in `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/`
- prior memos in `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos/`
- prior drafts in `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/`
- legacy fallback only:
  - `./intelligence_briefs/`
  - `./whitepaper_prewriting_memo/`
  - `./whitepaper_drafts/`
- patch manifests and migration notes
- `./assets/seed_canon/eden_whitepaper_v14.pdf`

Hard rule:
- pipeline artifact directories are lineage / staging / drift surfaces
- they do not outrank opened current code, tests, logs, or exports as implementation truth

3) Canonical secondary definition/method surfaces come from:
- `./assets/seed_canon/cannonical_secondary_sources/`
- or `./assets/seed_canon/canonical_secondary_sources/`
whichever exists

4) Missingness rule:
- record `MISSING` or `EMPTY`
- proceed without fabrication

CANONICAL SECONDARY DISCIPLINE
Canonical secondary sources are allowed only as discipline surfaces. They may stabilize:
- definition boundaries
- admissibility rules
- evidence obligations
- non-collapse distinctions

They may not prove implementation.

Use them in this constrained way:
- Foucault: archaeology / archive / discontinuity discipline
- Blackmore and Dennett: replication, selection pressure, persistence, but not metaphor-as-proof
- Austin and Butler: governance phrases require felicity conditions and observed enforcement paths
- Barad: apparatus matters; traces, measurements, and boundary-making practices determine accountability

Compile-or-omit rule:
If a theoretical reference cannot be compiled into:
- a definition boundary
- an admissibility rule
- or a concrete evidence obligation

omit it.

PRIMARY REGISTERS (STRICT)
Use exactly one primary register internally for every non-trivial claim:
- IMPLEMENTED
- INSTRUMENTED
- CONCEPTUAL
- UNKNOWN

Allowed modifiers:
- BOUNDED_FALLBACK
- SERVER_SIDE_ONLY
- EXPLICIT_BROWSER_CONTRACT_GAP
- DEFERRED_BY_DESIGN
- HISTORICAL_REFERENCE_ONLY

PUBLIC-CLAIM RULE
When writing the public-facing whitepaper body, never upgrade beyond what the internal register allows.
- If the internal audit says `IMPLEMENTED + SERVER_SIDE_ONLY + EXPLICIT_BROWSER_CONTRACT_GAP`, the paper may not phrase the mechanism as a current browser-UI affordance.
- If the internal audit says `CONCEPTUAL` or `UNKNOWN`, the paper must phrase the mechanism as proposal, open problem, or future work.

DEFAULT CURRENT EXPECTATIONS TO VERIFY (NOT SELF-JUSTIFYING)
Unless contradicted by newer opened evidence, the writer should test for the following conditions and report them explicitly as:

`CONFIRMED | SUPERSEDED | NOT LOCATED | PARTIALLY TRUE`

Candidate expectations:
- no governor in v1
- no hidden planner
- no weight training, fine-tuning, or LoRA
- MLX is the active local runtime backend
- TUI is the primary runtime surface
- browser observatory functions as an observability / measurement instrument rather than the main dialogue loop
- `adam_auto` on the MLX path falls back to `runtime_auto`
- embedding-based semantic retrieval is deferred
- observatory edit / preview / revert and causal-runtime browser exposure may be partial and must be verified rather than assumed

Hard rule:
- Never treat these expectations as proof.
- They are drift-detection probes only.

BROWSER EXPOSURE DISCIPLINE
For any server-side observatory capability, determine whether it is:
- fully browser-exposed
- partially browser-exposed
- server-side only
- documented but not currently evidenced

Use the modifier:
- `EXPLICIT_BROWSER_CONTRACT_GAP`

whenever the server-side mechanism exists but current browser exposure is incomplete.

Do not bake a specific gap list into the reusable base prompt unless the current run artifacts prove it.

NON-NEGOTIABLE ADAM V1 SPINE
The paper must remain self-similar to the current repo on these points:
- Adam is a local-first graph-conditioned runtime.
- Persistent identity is externalized into graph state, explicit feedback, and retrieval assembly rather than learned into model weights.
- The base model is an inference surface, not the persistence substrate.
- Memes are first-class persistent units.
- Memodes are derived second-order assemblies with an admissibility floor, not free-floating labels.
- Regard is durable selection over memes and memodes, distinct from prompt-time salience.
- Active-set assembly is a bounded retrieval and prompt-compilation process, not hidden governance.
- The membrane is an operator-visible post-generation control surface with logged effects.
- The TUI is the main runtime instrument; the observatory is a secondary measurement instrument.

ARCHAEOLOGY SURFACES
Treat the repo’s current archaeology surfaces as drift-control input:
- `./docs/PATCH_MANIFEST_V1_1.md`
- `./docs/PATCH_MANIFEST_V1_2.md`
- `./docs/MIGRATION_NOTES_V1_1.md`
- prior intelligence briefs in `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/` if present
- prior memos in `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos/` if present
- prior drafts in `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/` if present
- legacy fallback only:
  - `./intelligence_briefs/` if present
  - `./whitepaper_prewriting_memo/` if present
  - `./whitepaper_drafts/` if present
- `./exports/context/*.md` if present
- historical conceptual reference `./assets/seed_canon/eden_whitepaper_v14.pdf`

Archaeology rule:
- enumerate versions when multiple versions exist
- read in order
- record what changed
- record what stayed invariant
- record what silently vanished
- do not smooth discontinuities into a fake clean lineage

VANISHED CLAIMS + DEFINITIONS LEDGER
If multiple prior briefs, memos, drafts, or legacy conceptual anchors exist, you must produce a vanished ledger.

For each vanished item:
- item
- last source/version where it appeared
- keywords searched
- authoritative corpus files searched
- anchor strength `{strong | weak | none}`
- disposition `{RESTORED | COMPRESSED | TOMBSTONED}`
- justification

If no relevant prior-version family exists, emit a short `NO_PRIOR_DRAFT_FAMILY` note instead of inventing archaeology.

CLAIM MAP REQUIREMENT
You must construct and preserve an internal claim map for the baseline draft and the revised draft.

For each major claim record:
- claim text
- draft location
- evidence anchor(s)
- current internal register
- modifiers if any
- whether the claim was preserved, downgraded, rephrased, removed, or newly introduced

Hard rule:
- every implementation-sounding sentence in the revised paper must be traceable through the claim map to evidence you actually opened

STATEMENT / DEFINITION LINEAGE INTEGRATION
If prior drafts, briefs, or memos contain stable definitional or statement-style formulations, do not silently discard them.

For each such recurring statement:
- determine whether it remains admissible under current evidence
- preserve its denotation if still valid
- downgrade it if evidence weakened
- tombstone it if it no longer survives current repo truth

Do not let definitions drift merely because the rhetorical surface changed.

ANCHOR VERIFICATION PROTOCOL (MANDATORY BEFORE REMOVING PRIOR-VERSION CONTENT)
When content appears in a prior draft family but not in the baseline draft you are revising, you must verify before deleting, compressing, or silently omitting it.

Step 1: extract anchor keywords
- choose 3–5 substantive terms that characterize the missing concept
- prefer technical nouns, canonical primitives, symbols, tests, or mechanism names

Step 2: search authoritative corpus files in order
Search these surfaces systematically:
1. `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/` and fallback `./intelligence_briefs/`
2. `./docs/`
3. `./tests/`
4. `./exports/context/`
5. `./logs/runtime.jsonl`
6. `./exports/conversations/**/*.md`
7. `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos/` and fallback `./whitepaper_prewriting_memo/`
8. `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/` and fallback `./whitepaper_drafts/`
9. current code under `./eden/`
10. relevant scripts under `./scripts/`

Step 3: tag anchor strength
- `strong_anchor`: explicit implementation or direct evidence path exists
- `weak_anchor`: conceptual or partial reference exists without current execution proof
- `no_anchor`: no meaningful evidence located

Step 4: disposition
- `strong_anchor` → RESTORE or preserve, with the correct register
- `weak_anchor` → COMPRESS or downgrade, with explicit wording change
- `no_anchor` → TOMBSTONE in the vanished ledger with search record

Step 5: record the search
For every evaluated section or concept, record:
- section id or concept label
- keywords searched
- files searched
- matches found
- anchor strength
- disposition
- justification

Hard rule:
- do not remove content just because it disappeared from a later draft
- that is precisely the drift event you are supposed to audit

EVIDENCE TYPES TAXONOMY
Use this taxonomy to keep the paper honest.

1. EMPIRICAL CLAIMS
Assertions about runtime behavior, outputs, or observable system properties.
They require:
- code path
- and/or direct test
- and/or runtime log / transcript / export evidence
- and locator-quality citation

2. DEFINITIONAL OPERATORS
Terms that establish distinctions or interfaces.
They require:
- a crisp definition
- operational correspondence
- measurement or falsification boundary
- optional current evidence showing the distinction matters in practice

3. CONSTITUTIONAL INVARIANTS
Non-negotiable system constraints.
They require:
- explicit statement in current docs or tests
- and preferably evidence that violating them matters or is checked

4. ARCHITECTURAL PROPOSALS
Planned or partially sketched mechanisms.
They must be labeled as:
- proposed
- open problem
- future work
- or bounded closure item

Hard rule:
Ask, for every claim:
- what file would I open?
- what test would I run?
- what trace would prove it?
If you cannot answer concretely, the claim is not implementation-strength.

EVIDENCE SUBSTRATE FOR OBSERVED RESULTS
Do not assume `CURRENT_ADAM_LOG.md` exists.

Resolve operational evidence from the current repo in this order:
1. operator-supplied or attached current run log if present
2. `./logs/runtime.jsonl`
3. `./exports/conversations/**/*.md`
4. selected `./exports/<experiment_id>/*.json`, manifests, and HTML artifacts
5. tests that directly exercise runtime behavior

If no usable runtime evidence surface exists:
- record `RUN_LOG_MISSING`
- do not fabricate observed results
- proceed with a clearly bounded protocol/future-work section plus synthetic pipeline checks

RUNTIME LOGS / TRANSCRIPTS AS FIRST-CLASS EVIDENCE
Runtime logs, conversation transcripts, export manifests, and direct runtime tests are not optional ornamentation. They are the highest-frequency behavioral evidence stream available inside the repo.

Operationally:
- mine them exhaustively within admissible current surfaces
- prefer failures and edge cases as much as success cases
- do not cherry-pick only the flattering examples
- every observed-result claim must be reproducibly locatable

When evidence supports it, the paper must include an explicit “Observed Operational Evidence” layer rather than hiding behind future-work language.

RUNTIME LOGS / TRANSCRIPTS AS EXPERIMENTAL RECORD
A substantial portion of Adam’s empirical program may appear as executed conversational or runtime episodes rather than formal benchmark harnesses.

Therefore:
- treat explicit tests, probes, constrained prompts, retries, parameter changes, and comparison runs as candidate experiment episodes
- treat repeated prompts under changed constraints as incidental experiments when the outcome is measurable
- report completed episodes as DONE when the evidence genuinely supports that status
- do not claim generalization beyond the observed evidence span

Minimum expectation when evidence is present:
- identify at least three distinct observed experiment episodes, or
- explicitly report the shortage and explain what evidence was missing

For each observed episode include:
- episode_id
- hypothesis (explicit or carefully inferred)
- manipulation
- measured observable
- outcome
- confounds
- locator-quality evidence citation

SYNTHETIC DATA MANDATE
Synthetic data is required whenever it materially strengthens the measurement pipeline or keeps the figure / metric workflow runnable despite incomplete observed evidence.

Synthetic here means:
- deterministic
- explicitly labeled
- tied to a generator path and seed
- never represented as actual Adam runtime performance

At minimum:
- observed figures/tables and synthetic figures/tables must be kept visibly distinct
- captions must carry provenance
- synthetic artifacts should mirror the schema of the real pipeline whenever possible so the pipeline can be swapped from synthetic to observed data without conceptual rewrite

RUNTIME EVIDENCE MINING PROTOCOL
When usable runtime evidence exists, treat it as first-class empirical substrate.

At minimum extract when possible:
- run or session identifiers
- turn or event boundaries
- timestamps or best-available temporal anchors
- input prompt / user request summaries or hashes
- model / profile / budget fields if present
- membrane or post-processing indicators if present
- retrieval or active-set indicators if present
- feedback indicators if present
- observed errors, fallbacks, refusals, retries, or guard activations
- output locators usable for reproducible citation

You must also try to extract experiment episodes where the evidence supports them.

An experiment episode minimally requires:
- a manipulation or constrained condition
- a measurable or inspectable outcome
- a bounded evidence span

For each extracted episode, record:
- `episode_id`
- inferred or explicit hypothesis
- manipulation
- measured observable
- outcome
- confounds
- evidence locator(s)

If runtime evidence exists and supports episodes, the paper must report completed observed episodes rather than pretending everything remains future work.

EMPIRICAL PROGRAM
The empirical section must separate three layers whenever evidence allows:

1. Protocol
   - what the experiment is meant to test
   - manipulation
   - measured outputs
   - metrics
   - pass/fail criteria

2. Observed repo-grounded evidence
   - what already happened in current logs, transcripts, exports, or tests
   - cited with reproducible locators

3. Synthetic demonstrator
   - deterministic, labeled synthetic data that validates the metric pipeline
   - never presented as real system performance

SYNTHETIC DATA DISCIPLINE
Synthetic artifacts are allowed and often necessary, but they may only do three things:
- validate the measurement pipeline
- stress-test metrics or visualizations
- demonstrate the shape of a future harness

Synthetic artifacts may not be written as observed repo performance.

Every synthetic figure or table must include:
- provenance tag `SYNTHETIC`
- seed
- generator path
- dataset path under the run output root

MEMETICS DISCIPLINE
When the paper uses words like persistence, selection pressure, imitation, or memode survival, cash them out.

At minimum specify:
- object representation
- update rule or current absence thereof
- what selects
- where the audit trail lives

Do not let memetic language float as metaphor. If the repo cannot yet support a strong causal claim, downgrade the language accordingly.

ARCHAEOLOGY DISCIPLINE
At least one analysis must treat the repo’s own document field as data when the corpus supports it.

Examples:
- patch-level claim drift
- definition survival or vanishing across docs, briefs, memos, and drafts
- browser contract drift between server implementation and UI exposure

This is not decorative meta-writing. It is drift-control instrumentation.

COMPARATIVE CLAIMS — OPT-IN ONLY
- Do not generate a GraphRAG or “not just X” posture by default.
- Comparative claims are allowed only if explicitly enabled by the operator or required by a current attached source.
- If enabled, define the comparator class first and compare only implemented or instrumented mechanisms.

CITATION DISCIPLINE
- Public bibliography entries must resolve cleanly. No missing keys. No placeholder citations.
- Canonical secondary sources may be cited as normal public references when used for definition or method discipline.
- Local repo artifacts used as evidence (logs, transcripts, exports, manifests, internal briefs, memos) should normally be cited in footnotes or appendix-local evidence notes rather than laundered into the public bibliography.
- Every local evidence citation must include enough locator detail to be reproduced: file path, run/session identifier when available, and line range, turn range, event span, or short excerpt hash.
- If no stable locator can be produced, downgrade the claim rather than pretending the citation is reproducible.

WORD COUNT FLOOR
Target main-body length: 5,000–6,500 words
Absolute floor: 4,500 words

Hard rule:
- the floor applies to the main body, excluding bibliography and audit artifacts
- appendices may extend the work, but they may not substitute for missing main-body argument load

ELABORATION LAYER REQUIREMENT
For each canonical term that bears load in the paper, include:
1. one-sentence crisp definition
2. controlled elaboration
3. operational correspondence
4. positive example + near-miss
5. failure mode or adversarial boundary case

Canonical terms for Adam v1 normally include:
- Adam
- meme
- memode
- regard
- active set
- membrane
- measurement event
- observatory
- semantic map / assemblies / runtime / active set planes
- inference profile
- budget mode
- local-first
- browser contract gap

LAYOUT REQUIREMENT
- Produce a two-column paper body.
- Keep top matter (title / author / date / abstract) in a one-column block.
- Verify the compiled PDF actually matches this layout.

FIGURE BUNDLE CONTRACT
Produce a figure bundle under:
- `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/figure_bundle/`

Required structure:
- `registry/FIGURE_REGISTRY.json`
- `data/`
- `static/`
- `interactive/`
- `latex/figures_generated.tex`

Minimums for this Adam v1 run:
- at least 4 OBSERVED figures or tables from real repo artifacts (logs, conversation transcripts, exports, tests, manifests)
- at least 4 SYNTHETIC figures or tables from deterministic generators
- at least 1 archaeology / drift figure when archaeology surfaces exist
- at least 1 memetic visualization

Every figure included in the paper must have:
- provenance tag `[OBSERVED | SYNTHETIC | PROPOSED]`
- artifact pointer under `figure_bundle/`
- source hash / seed / locator details as appropriate

If evidence is missing, classify the run as `PARTIAL` and emit labeled placeholders instead of pretending the figures exist.

FIGURE REGISTRY
`FIGURE_REGISTRY.json` must include, for each figure:
- `figure_id`
- `title`
- `provenance`
- `inputs`
- `outputs`
- `caption_tex`
- `latex`
- `build`
- `paper.include`
- `paper.section`
- `paper.order`

LaTeX integration must happen through:
- `figure_bundle/latex/figures_generated.tex`

Do not hand-write ad hoc figure blocks if the figure is in the registry.

FIGURE REGISTRY SEMANTICS
The registry is allowed to contain more figures than the paper finally includes.

Hard rules:
- only figures with `paper.include=true` are emitted into `figures_generated.tex`
- included figures must have section placement and order fields
- missing static assets require explicit placeholder handling, never silent omission
- partial figure generation must be recorded as `PARTIAL` with failure reason and reproduction hint in the audit artifact

FIGURE BUNDLE ACCEPTANCE TEST
A run is not fully successful unless:
- the figure bundle directory exists
- `FIGURE_REGISTRY.json` is valid and non-empty
- every in-paper figure has provenance and locator details
- observed and synthetic figures are visibly separated in captions and audit records
- archaeology/drift visualization appears when archaeology evidence exists
- at least one memetic visualization exists when memetic claims are used in the paper

RUN OUTCOME STATES
Classify the run at the end as one of:
- `PASS` = all required outputs exist and hard evidence / build tests pass
- `PARTIAL` = the run is structurally complete but one or more evidence surfaces are missing, incomplete, or placeholder-backed
- `FAIL` = the run breaks core protocol (fabricated evidence, broken build without honest record, missing required output families, or silent omission of required audit artifacts)

WHITEPAPER INPUT SURFACES TO READ
At minimum consider these:
- `./AGENTS.md`
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
- current code under `./eden/`
- relevant tests under `./tests/`
- latest intelligence brief from `/Users/brianray/Adam/assets/white_paper_pipeline/intel_briefs/` if present
- latest Codex memo from `/Users/brianray/Adam/assets/white_paper_pipeline/writing_memos/` if present
- legacy fallback only:
  - latest intelligence brief under `./intelligence_briefs/` if present
  - latest Codex memo under `./whitepaper_prewriting_memo/` if present

PROBES AND EXECUTION PROOF
Prefer existing tests and scripts when generating probes:
- `pytest -q tests/test_tui_smoke.py`
- `pytest -q tests/test_runtime_e2e.py`
- `pytest -q tests/test_regard.py`
- `pytest -q tests/test_geometry.py`
- `pytest -q tests/test_observatory_server.py`
- `pytest -q tests/test_observatory_measurements.py`
- `pytest -q tests/test_tanakh_tools.py`
- `python scripts/check_observatory_build_meta.py`
- `python scripts/run_tanakh_render_validation.py`
- `.venv/bin/python -m eden`
- `python3 app.py`

Do not claim a mechanism is implemented merely because a doc names it. Use code + test/log/export proof.

PHASES
PHASE 1 — inventory and baseline resolution
- resolve repo root, pipeline root, baseline draft, and current input surfaces
- record missingness honestly

PHASE 2 — archaeology and claim map
- enumerate prior artifact lineage
- build a claim map for the baseline
- identify vanished or drifted content

PHASE 3 — empirical program and evidence extraction
- mine runtime evidence
- extract observed episodes where justified
- separate observed from synthetic

PHASE 4 — figure / data generation
- generate figure bundle assets and registries
- produce placeholders honestly when evidence is insufficient

PHASE 5 — rewrite / refactor
- revise the whitepaper under register discipline
- preserve warranted continuity
- downgrade overclaims aggressively

PHASE 6 — citation + bibliography integrity
- verify every citation
- verify locator quality for local evidence
- remove or downgrade weakly anchored claims

PHASE 7 — LaTeX build and verification
- verify layout
- verify figure inclusion
- verify bibliography and cross-reference integrity

PHASE 8 — audit artifact and canonization copy
- write audit artifacts
- copy the canonical PDF and provenance manifest
- record write proof

AUDIT ARTIFACTS
Write under `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/audit/`:
- claim map
- vanished claims + definitions ledger (or `NO_PRIOR_DRAFT_FAMILY` note)
- evidence registry for observed claims
- figure provenance registry
- experiment episode registry if runtime evidence supports one
- change log: what changed and why
- build log and write proof
- prompt-assumption self-check

REQUIRED OUTPUTS
Under `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/<THIS_RUN_VERSION>/` write:
1. `latex/` updated LaTeX project
2. `pdf/` compiled PDF
3. `figure_bundle/` registry + assets
4. `audit/` internal audit artifacts
5. `data/` extracted datasets used for figures/tables

ACCEPTANCE TESTS
A successful run should satisfy:
- main body meets the word-count floor
- two-column body / one-column top matter verified in the PDF
- no missing citations or broken bibliography keys
- no public overclaims past current Adam v1 evidence
- explicit handling of browser contract gaps where relevant
- figure bundle present with valid registry
- vanished ledger present when prior draft family exists
- audit artifact explains what changed and why
- observed evidence is clearly separated from synthetic evidence
- prompt assumptions that were superseded are explicitly reported rather than silently retained

REPO-DRIFT SELF-CHECK (MANDATORY)
Before finalizing the run, explicitly report:
- assumptions in this prompt that were confirmed
- assumptions in this prompt that were superseded
- assumptions in this prompt that could not be evaluated
- any current repo surfaces that materially replace the prompt’s older expectations

If a prompt assumption is superseded by stronger current evidence, follow the repo evidence, not the prompt’s historical wording.

BEGIN NOW
- Do not ask permission.
- Do not assume old Eden beta directories exist.
- Do not mention Claude.
- Do not treat historical wording as current proof.
- Produce an Adam v1 whitepaper that isomorphically reflects the repo that currently exists.
