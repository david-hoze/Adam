from __future__ import annotations

import json


def test_session_start_persists_manual_profile(runtime) -> None:
    experiment = runtime.initialize_experiment("blank")
    session = runtime.start_session(
        experiment["id"],
        title="Manual profile",
        profile_request={
            "mode": "manual",
            "budget_mode": "wide",
            "temperature": 0.65,
            "max_output_tokens": 720,
            "top_p": 0.88,
            "repetition_penalty": 1.11,
            "retrieval_depth": 18,
            "max_context_items": 9,
            "response_char_cap": 2100,
            "low_motion": True,
            "debug": False,
        },
    )
    metadata = json.loads(runtime.store.get_session(session["id"])["metadata_json"])
    profile = metadata["requested_inference_profile"]
    assert metadata["requested_mode"] == "manual"
    assert profile["budget_mode"] == "wide"
    assert profile["retrieval_depth"] == 18
    assert profile["low_motion"] is True


def test_runtime_auto_profile_generation_is_visible(runtime) -> None:
    experiment = runtime.initialize_experiment("blank")
    session = runtime.start_session(
        experiment["id"],
        profile_request={"mode": "runtime_auto", "budget_mode": "balanced"},
    )
    preview = runtime.preview_turn(session_id=session["id"], user_text="Give a concise explanation of graph-conditioned identity.")
    assert preview.profile["requested_mode"] == "runtime_auto"
    assert preview.profile["effective_mode"] == "runtime_auto"
    assert preview.profile["selection_source"] == "runtime_auto_policy"
    assert preview.profile["prompt_budget_tokens"] > 0


def test_adam_auto_falls_back_to_runtime_auto_for_mlx(runtime) -> None:
    runtime.settings.model_backend = "mlx"
    experiment = runtime.initialize_experiment("blank")
    session = runtime.start_session(
        experiment["id"],
        profile_request={"mode": "adam_auto", "budget_mode": "balanced"},
    )
    preview = runtime.preview_turn(session_id=session["id"], user_text="Analyze the geometry of recurrence under ablation.")
    assert preview.profile["requested_mode"] == "adam_auto"
    assert preview.profile["effective_mode"] == "runtime_auto"
    assert preview.profile["selection_source"] == "adam_auto_fallback_runtime_auto"
