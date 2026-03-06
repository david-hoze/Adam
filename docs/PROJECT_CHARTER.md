# Project Charter

## Mission

Build the first runnable EDEN iteration as a local-first instrument for testing whether persona persistence can be externalized into a persistent memetic graph instead of learned into model weights.

## V1 thesis

- EDEN is the shell.
- ADAM is the first runtime persona inside it.
- Persistent identity lives in graph state, explicit feedback, and retrieval assembly.
- The base model remains an inference surface, not the persistence substrate.

## Hard boundaries

- No governor in v1.
- No weight training, fine-tuning, LoRA, or hidden parameter updates.
- Real runtime backend is MLX only.
- TUI is the primary runtime instrument.
- Browser observability is export and inspection, not the main interaction loop.

## Success conditions

- Boot locally on Apple Silicon.
- Initialize Blank Eden or Seeded Eden.
- Chat with ADAM in a fixed-pane amber TUI.
- Persist turns, feedback, memes, memodes, trace events, and membrane events.
- Retrieve graph-conditioned material on later turns.
- Export graph and basin browser artifacts from real runtime data.

## Non-goals for this round

- Autonomous tool use beyond explicit operator actions
- distributed agent lineages
- semantic embedding infrastructure
- hidden chain-of-thought exposure
- weight adaptation of the base model
