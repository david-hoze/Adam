# TUI Spec

The TUI remains the primary EDEN runtime surface in v1.2.

## Boot flow

Live cockpit boot:

- EDEN opens directly into a chat session surface
- if a previous session exists, EDEN resumes the latest persisted session automatically
- if no session exists yet, EDEN creates a blank experiment/session automatically
- the top action menu remains available for:
  - `Toggle Aperture`
  - `Ingest PDF / Doc`
  - `Review Feedback`
  - `Adjust Profile`
  - `New Session`
  - `Resume Latest`
  - `Blank Eden`
  - `Seeded Eden`
  - `Prepare Qwen`
  - `Open Observatory`
  - `Export Latest`
  - `Open Deck`
  - `Help`
- default MLX model storage remains under `models/` in the repo root

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

Primary split:

- left cockpit bay:
  - compact aperture snapshot
  - visible thinking / reasoning artifact panel
  - feedback / session-state panel
- right cockpit bay:
  - upper stack:
    - full-width animated signal field / memgraph bus with orthographic glyph rendering and live update explanation
    - lower instrumentation row:
      - animated amber cockpit instrumentation
      - forensic structured log
  - lower chat deck:
    - conversation lifecycle strip with explicit start / review / continue / end guidance
    - latest persisted Brian / Adam transcript boxes
    - feedback-loop strip for pending/reviewed turn state
    - live Brian draft box when the composer is loaded
    - multiline `TextArea` composer for Brian the operator with strong focus styling
    - transmit hint surface; `Ctrl+S` sends

Wide aperture drawer:

- toggled from the action menu or `F8`
- occupies the top band of the screen when open
- renders a wider natural-language scan of the active set, persistent anchors, and live heat
- collapses back to the compact cockpit aperture when closed

Secondary surfaces:

- `Deck` modal:
  - `Inference Circumstances / Budget`
  - graph telemetry
  - bounded history
  - Qwen thinking / reasoning
  - aperture / active set
  - cogitation / decision trace
  - corpus-intake guidance and status
  - `Blank Eden`, `Seeded Eden`, `Resume Latest`
  - `New Session`, low-motion toggle, debug toggle
- `Ingest` modal:
  - absolute document path
  - operator framing prompt that is indexed prior to later retrieval
  - keyboard-first submit / cancel flow
- `Review` modal:
  - explicit accept / edit / reject / skip feedback surface
  - explanation and corrected-answer fields
  - last-response summary

## Design contract

- fixed panes, no primary scrolling transcript
- amber-on-dark operator grammar preserved
- cockpit-first primary chat surface: aperture/thinking/feedback left, animated telemetry upper-right, chat deck lower-right
- live-session boot is the default path; the app no longer lands on a launcher before chat opens
- session and utility actions now live in the keyboard-executable top menu instead of left-column buttons
- normal entry path is `.venv/bin/python -m eden` or `.venv/bin/python -m eden app`
- shell flags remain optional overrides; the normal runtime contract is repo-local MLX
- the action bar reports model readiness, active session, and focus/keyboard hints
- multiline composition is first-class
- `Esc` returns focus to the composer, and printable keys pressed outside editable widgets are routed back into the composer automatically
- operator turns are persisted and graph-ingested as `Brian the operator: ...`
- MLX/Qwen model-emitted thinking is surfaced as a dedicated panel instead of leaking into the main Adam response
- the signal field is explicitly explanatory: it renders a live orthographic memgraph slice using active-set nodes, recall anchors, recent trace events, and ingest roots while remaining separate from any claim about hidden activations
- the aperture is rendered as both a compact animated snapshot and a full-width pull-down readable scan with natural-language summaries plus a ranked queue
- the prime surface keeps aperture, thinking, feedback, and transcript visible while the operator types; Deck still carries the detailed trace and budget surfaces
- feedback is integrated into the lower-right chat loop through a dedicated review-status strip in the chat deck
- conversation boundaries are explicit: start by asking or ingesting, review when Adam answers, and end by opening a new session
- budget changes remain visible, but now live in Deck instead of the prime chat pane
- latest-session resume restores the latest persisted session surface without forcing a new session flow first
- keyboard-only navigation is supported through top-menu focus, `Enter` execution, `Tab` / `Shift+Tab` focus cycling, and the function-key bindings
- corpus ingest supports a framing prompt whose phrases are graph-indexed as persistent document-conditioning material

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
- `F6`: open the operator deck
- `F7`: open the review feedback modal
- `F8`: toggle the full-width aperture drawer
- `F9`: open document ingest with framing prompt
- `Esc`: return focus to the composer on the main chat screen
