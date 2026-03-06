# TUI Spec

The TUI remains the primary EDEN runtime surface in v1.1.

## Startup flow

Startup screen:

- startup summary
- backend input
- MLX model path input
- `Blank Eden`, `Seeded Eden`, `Resume Latest`
- startup log
- launch-contract panel

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

- control surface
- export / observatory / new-session controls
- motion / debug / help controls
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

- aperture / active set
- cogitation / decision trace
- forensic structured log

## Design contract

- fixed panes, no primary scrolling transcript
- amber-on-dark operator grammar preserved
- backend/model-path information removed from prime live-chat real estate
- multiline composition is first-class
- active-set and trace panes can show preview state while the operator types
- budget changes are visible rather than implicit

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
