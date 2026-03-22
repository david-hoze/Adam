# Prompt-Assumption Self-Check

## Confirmed

- no governor in v1
- no hidden planner
- no weight training, fine-tuning, or LoRA
- MLX is the active local runtime backend
- TUI is the primary runtime surface
- browser observatory functions as an observability / measurement instrument rather than the main dialogue loop
- `adam_auto` on the MLX path falls back to `runtime_auto`
- embedding-based semantic retrieval is deferred
- observatory edit / preview / revert exists but remains mode-bounded and therefore must not be overclaimed
- whitepaper pipeline directories under `assets/white_paper_pipeline/` are the active artifact lineage surfaces

## Superseded

- the old baseline's governor / recursive-planner language is superseded by the current direct v1 loop in code and normative docs
- older Eden-first framing is superseded by Adam-first public naming, even though legacy `EDEN` strings remain in README headers and code paths
- the baseline's looser meme/memode substrate is superseded by the current first-class meme / derived memode distinction with admissibility gating

## Could Not Be Fully Evaluated

- no fresh Step 3 Playwright rerun was performed for the browser ladder; browser claims therefore stay bounded to checked-in E2E audit surfaces plus refreshed server-side tests
- no qualifying public-discourse packet was located, so public dissemination drift could not be evaluated beyond current internal artifact families
- `scratch_space_writing_tasks/*.md` did not exist, so that prompt-adjacent family could not be evaluated

## Current Repo Surfaces That Materially Replace Older Expectations

- `docs/CANONICAL_ONTOLOGY.md` replaces older loose substrate language with stricter object boundaries
- `docs/TURN_LOOP_AND_MEMBRANE.md` replaces older governor-era control stories with the current direct loop
- `docs/MEASUREMENT_EVENT_MODEL.md` and current observatory docs replace generic observability rhetoric with a concrete preview/commit/revert ledger contract
- `logs/runtime.jsonl` and scoped `exports/` replace older log/path assumptions as the main behavioral evidence substrate

## Baseline / Continuity Notes

- baseline override active: no explicit Step 3 override flag was supplied; deterministic baseline resolution selected the same canonical manuscript (`eden_whitepaper_v14.pdf`) used upstream
- designated baseline draft opened: yes
- continuity / downgrade advice anchored to that draft: yes
