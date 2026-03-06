# TUI Spec

The TUI remains the primary EDEN runtime surface in v1.2.

## Startup flow

Startup screen:

- startup summary
- runtime surface panel
- MLX model status panel
- backend select with `Adam / Local MLX` as the default choice
- `Prepare Qwen`
- `Refresh Model`
- `Blank Eden`, `Seeded Eden`, `Resume Latest`
- `Open Observatory`, `Export Latest`, `Help`
- startup log
- launch-contract panel
- remembered local runtime choice pulled from the repo-local `.venv` workflow
- default MLX model stored under `models/` in the repo root

Session-start modal:

- session title
- inference mode:
  - `manual`
  - `runtime_auto`
  - `adam_auto`
- budget mode:
  - `tight`
  - `balanced`
  - `wide`
- manual bounded fields:
  - `temperature`
  - `max_output_tokens`
  - `top_p`
  - `repetition_penalty`
  - `retrieval_depth`
  - `max_context_items`
  - `response_char_cap`
  - `low_motion`
  - `debug`

## Chat screen

Left column:

- surface menu
- `Enter Adam`, `Profile`, `Help`
- `New Session`, `Blank Eden`, `Seeded Eden`
- `Resume Latest`, `Observatory`, `Export`
- motion / debug toggles
- ingest path input and ingest button
- telemetry / graph stats
- bounded history

Center column:

- Adam core sigil
- dedicated response panel
- dedicated `Inference Circumstances / Budget` panel
- multiline `TextArea` composer
- send button
- dedicated feedback panel and status

Right column:

- dedicated Qwen thinking / reasoning panel for model-emitted reasoning text
- aperture / active set
- cogitation / decision trace
- forensic structured log

## Design contract

- fixed panes, no primary scrolling transcript
- amber-on-dark operator grammar preserved
- backend/model-path entry removed from the launcher and from prime live-chat real estate
- normal entry path is `.venv/bin/python -m eden` or `.venv/bin/python -m eden app`
- launcher settings are remembered locally so flags become overrides, not the default control path
- MLX is the default runtime path; mock remains a fallback path
- the launcher reports model readiness, shard progress, and repo-local storage instead of asking for a manual MLX path
- multiline composition is first-class
- MLX/Qwen model-emitted thinking is surfaced in its own panel instead of leaking into the main Adam response
- active-set and trace panes can show preview state while the operator types
- budget changes are visible rather than implicit
- latest-session resume restores the latest persisted session surface instead of forcing a new session flow

## Budget panel contents

- current profile name
- requested mode and effective mode
- retrieval depth
- max context items
- reserved output tokens
- prompt budget estimate
- current user tokens and characters
- remaining estimated user allowance
- count method
- response char cap
- budget pressure
- active-set contribution
- history contribution
- allowance-change reasons

## Key bindings

- `F1`: help
- `Ctrl+S`: send turn
- `F2`: export observability artifacts
- `F3`: ensure/open local observatory
- `F4`: toggle low-motion in the current session request
- `F5`: open the new-session inference-profile flow
