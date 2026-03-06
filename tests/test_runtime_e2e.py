from __future__ import annotations

import json

from eden.config import DEFAULT_MLX_MODEL_DIR


def test_blank_bootstrap_chat_feedback_and_exports(runtime, tmp_path) -> None:
    experiment = runtime.initialize_experiment("blank")
    session = runtime.start_session(experiment["id"], title="E2E")
    counts_before = runtime.store.graph_counts(experiment["id"])

    outcome = runtime.chat(session_id=session["id"], user_text="How does Adam remain the same persona over time?")
    counts_after = runtime.store.graph_counts(experiment["id"])

    assert outcome.turn["turn_index"] == 0
    assert counts_after["turns"] == counts_before["turns"] + 1
    assert counts_after["memes"] > counts_before["memes"]
    assert len(outcome.active_set) > 0
    assert outcome.profile["requested_mode"] == "manual"
    assert outcome.budget["prompt_budget_tokens"] > 0
    assert outcome.turn["user_text"].startswith("Brian the operator:")

    turn_metadata = json.loads(outcome.turn["metadata_json"])
    assert turn_metadata["budget"]["remaining_input_tokens"] >= 0
    assert turn_metadata["inference_profile"]["profile_name"].startswith("manual:")
    assert turn_metadata["operator_input_raw"] == "How does Adam remain the same persona over time?"

    feedback = runtime.apply_feedback(
        session_id=session["id"],
        turn_id=outcome.turn["id"],
        verdict="edit",
        explanation="Mention the persistent graph explicitly.",
        corrected_text="Adam persists through graph state, regard updates, and retrieval selection.",
    )
    assert feedback["corrected_text"].startswith("Adam persists through graph state")

    retrieval = runtime.retrieval_service.retrieve(
        experiment_id=experiment["id"],
        session_id=session["id"],
        query="persistent graph state regard retrieval selection",
        settings=runtime.settings,
    )
    assert any(item["source_kind"] == "feedback" or "graph state" in item["text"].lower() for item in retrieval["items"])

    export_paths = runtime.exporter.export_all(
        experiment_id=experiment["id"],
        session_id=session["id"],
        out_dir=tmp_path / "exports",
    )
    assert (tmp_path / "exports" / "graph_knowledge_base.html").exists()
    assert (tmp_path / "exports" / "behavioral_attractor_basin.html").exists()
    assert (tmp_path / "exports" / "geometry_lab.html").exists()
    assert (tmp_path / "exports" / "measurement_ledger.html").exists()
    assert (tmp_path / "exports" / "observatory_index.html").exists()
    assert export_paths["graph_html"].endswith(".html")
    geometry_payload = json.loads((tmp_path / "exports" / "geometry_diagnostics.json").read_text())
    assert "local_reports" in geometry_payload


def test_runtime_launch_profile_and_session_snapshot(runtime) -> None:
    updated = runtime.update_runtime_launch_profile(backend="mlx", model_path=None)
    assert updated["backend"] == "mlx"
    assert updated["model_path"] == str(DEFAULT_MLX_MODEL_DIR)
    assert runtime.runtime_launch_profile()["backend"] == "mlx"
    model_status = runtime.mlx_model_status()
    assert model_status["local_dir"] == str(DEFAULT_MLX_MODEL_DIR)
    assert model_status["repo_id"].endswith("Qwen3.5-35B-A3B-mlx-lm-mxfp4")
    runtime.update_runtime_launch_profile(backend="mock", model_path=None)

    experiment = runtime.initialize_experiment("blank")
    session = runtime.start_session(experiment["id"], title="Resume Me")
    outcome = runtime.chat(session_id=session["id"], user_text="Summarize the current persistent persona state.")

    snapshot = runtime.session_state_snapshot(session["id"])

    assert snapshot["experiment_id"] == experiment["id"]
    assert snapshot["experiment_name"] == experiment["name"]
    assert snapshot["session_id"] == session["id"]
    assert snapshot["session_title"] == "Resume Me"
    assert snapshot["last_turn_id"] == outcome.turn["id"]
    assert snapshot["last_response"] == outcome.turn["membrane_text"]
    assert snapshot["last_active_set"]
    assert snapshot["last_trace"]
    assert snapshot["current_budget"]["prompt_budget_tokens"] > 0
    assert snapshot["current_profile"]["profile_name"].startswith("manual:")
