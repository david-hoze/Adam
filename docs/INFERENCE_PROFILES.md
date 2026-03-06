# Inference Profiles

EDEN v1.1 adds explicit session-start inference profiles. The request is stored in session metadata, and the resolved per-turn profile is stored in each turn record.

## Modes

### `manual`

- operator supplies bounded values directly
- EDEN clamps them to safe local ranges
- resolved mode remains `manual`

### `runtime_auto`

- deterministic runtime policy chooses a bounded preset per turn
- inputs include:
  - query length
  - graph density proxies
  - memode coverage
  - recent membrane-event count
  - recent feedback balance
- no hidden governor is introduced

### `adam_auto`

- mock backend: bounded preset chooser tied to operator-approved ranges
- MLX backend: currently falls back to `runtime_auto`
- fallback is persisted and visible as:
  - `requested_mode=adam_auto`
  - `effective_mode=runtime_auto`
  - `selection_source=adam_auto_fallback_runtime_auto`

## Persisted fields

Session metadata stores the requested profile:

- `mode`
- `budget_mode`
- `temperature`
- `max_output_tokens`
- `top_p`
- `repetition_penalty`
- `retrieval_depth`
- `max_context_items`
- `response_char_cap`
- `low_motion`
- `debug`

Turn metadata stores the resolved profile plus budget circumstances:

- `requested_mode`
- `effective_mode`
- `profile_name`
- `selection_source`
- heuristic inputs used by the chooser
- prompt budget and remaining allowance
- count method
- budget pressure

## MLX pass-through

On the real MLX path, v1.1 passes through:

- `temperature`
- `top_p`
- `repetition_penalty`
- `max_output_tokens`

using the installed local `mlx-lm` sampler/logits processor utilities.

## What the profile does not mean

- It is not a hidden planner.
- It is not a weight update.
- It is not a claim about the model’s absolute maximum context window.
- `adam_auto` is not a secret second model pass on the current MLX path.
