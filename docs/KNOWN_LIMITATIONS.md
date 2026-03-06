# Known Limitations

- The real MLX backend is wired and import-validated, but this patch did not execute a full run with the specific Qwen/Qwen3.5-35B-A3B 4-bit model because no local model path was available on this machine.
- `adam_auto` on the MLX path currently falls back to `runtime_auto`. This fallback is visible and persisted; there is no hidden Adam prepass in v1.1.
- The prompt-budget ticker is an EDEN-side working estimate. It does not guarantee the true maximum usable context of every future model build.
- Exact token counting is only available when a tokenizer-backed counter is available. MLX preview mode before model/tokenizer load can still be heuristic.
- Geometry diagnostics are computed from graph topology, co-occurrence structure, active-set recurrence, and temporal traces. They do not inspect internal latent activations from the model itself.
- Mirror, chirality, and translation-symmetry outputs are derived proxies. They are evidence-bearing diagnostics, but they are not proof of metaphysical “sacred geometry.”
- The browser observatory remains a lightweight static HTML/JS layer. Very large graphs can still become visually dense or slower to render.
- `current_active_set` geometry export is based on the latest persisted active set for the selected session, not the unsent live composer preview.
- Seeded Eden remains materially heavier than Blank Eden. The seeded path is real, but full canon ingest can still take substantial time and graph space.
- Retrieval remains lexical/graph-heuristic rather than embedding-based.
