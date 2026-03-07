# Repo Guidance

- Use the repo-local `.venv` and prefer `python3.12`.
- Keep the real runtime on MLX. Do not introduce Ollama, vLLM, llama.cpp, or remote inference as the core path.
- Treat the TUI as the primary runtime interface. Browser work is observability/export work unless the project charter changes.
- Preserve the ontology: memes are first-class; memodes are derived structures built from multiple memes plus relations.
- Preserve the v1 control loop: input -> retrieve/assemble -> Adam response -> membrane -> feedback -> graph update.
- Keep feedback explicit and structured. `accept` and `reject` require explanation; `edit` requires explanation and corrected text.
- Use `apply_patch` for source edits and keep docs updated with code changes.
- Run `./.venv/bin/pytest -q` before handoff when changing behavior.
- Update `docs/IMPLEMENTATION_TRUTH_TABLE.md` and `docs/KNOWN_LIMITATIONS.md` when a feature status changes.

# Repo Guidance — Codex‑Builder

This file provides minimal operational invariants for Codex‑Builder working inside the Adam repository. It should remain short and mechanical. Governance lives here; procedures live in code and scripts.

## Runtime Invariants

- Use the repo‑local `.venv` and prefer `python3.12`.
- Keep the real runtime on MLX. Do not introduce Ollama, vLLM, llama.cpp, or remote inference as the core path.
- Treat the TUI as the primary runtime interface. Browser work is observability/export work unless the project charter changes.
- Preserve the ontology: memes are first‑class; memodes are derived structures built from multiple memes plus relations.
- Preserve the v1 control loop: `input → retrieve/assemble → Adam response → membrane → feedback → graph update`.
- Keep feedback explicit and structured. `accept` and `reject` require explanation; `edit` requires explanation and corrected text.

## Code Discipline

- Use `apply_patch` for source edits.
- Keep documentation synchronized with code changes.
- Run tests before handoff when behavior changes:

```
./.venv/bin/pytest -q
```

- When feature status changes, update:

```
docs/IMPLEMENTATION_TRUTH_TABLE.md
docs/KNOWN_LIMITATIONS.md
```

## Codex Working Notepad

Codex‑Builder must maintain an append‑only operational log:

```
/codex_notes_garden.md
```

This file acts as the working memory bridge between operator prompts and repository changes.

Entries must be appended only. Never rewrite or compress previous entries.

### Pre‑Flight Entry (before editing code)

Codex‑Builder must write a short situational entry before acting:

```
## [TIMESTAMP] PRE‑FLIGHT
Task summary:
Scope of work:
Likely files/modules:
Relevant invariants:
Proof path (how success will be verified):
```

The purpose is to confirm task understanding and constrain the change surface.

Do **not** summarize the entire repo. Only note the components relevant to the task.

### Post‑Flight Entry (after completing work)

After edits and tests, append a completion record:

```
## [TIMESTAMP] POST‑FLIGHT
Files changed:
Behavior implemented or modified:
Evidence (tests / commands run):
Docs updated:
Remaining uncertainties or follow‑ups:
```

This creates an auditable build trail for each task.

## Scope Discipline

The log exists to externalize reasoning, not to create bureaucracy. Keep entries short and factual.

Avoid large narrative explanations. Focus on:

- what is being changed
- where the change occurs
- how correctness will be proven

The notepad is a flight recorder, not a design document.

## Handoff Standard

Before finishing a task:

1. Ensure tests pass.
2. Ensure docs reflect current behavior.
3. Append the POST‑FLIGHT log entry.
4. Provide a short summary to the operator describing the change and how it was verified.

This keeps the repository, documentation, and operational log aligned.