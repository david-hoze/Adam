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
