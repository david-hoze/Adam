# Known Limitations

- The real MLX backend is wired and import-validated, but this build did not execute a full run with the specific Qwen/Qwen3.5-35B-A3B 4-bit model because no local model path was available on this machine.
- Seeded Eden is materially heavier than Blank Eden. The code path works and a real heavy-path ingest was started on canonical PDFs, but the full canon bundle was not allowed to complete during this build session.
- Retrieval is lexical/graph-heuristic rather than embedding-based. It is real retrieval, but it will miss some semantic matches that an embedding index would catch.
- The graph export uses a deterministic static layout fallback rather than a full physics simulation to avoid adding SciPy as a dependency.
- The browser observatory is intentionally lightweight. It is useful and real, but not a full reactive frontend application.
- TUI text-entry is single-line `Input` based in v1 rather than full multiline editing.
- The graph can grow large quickly during seeded ingest because phrase extraction is intentionally aggressive.
