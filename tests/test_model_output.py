from __future__ import annotations

from eden.models.base import ModelResult, split_model_output, split_model_output_progressive


def test_split_model_output_with_think_block() -> None:
    reasoning, answer = split_model_output("<think>\nstep 1\nstep 2\n</think>\n\nAnswer:\nReady.")
    assert reasoning == "step 1\nstep 2"
    assert answer == "Answer:\nReady."


def test_split_model_output_with_reasoning_only_fallback_shape() -> None:
    text = "Thinking Process:\n\n1. Analyze the request.\n2. Plan the answer."
    reasoning, answer = split_model_output(text)
    assert reasoning == text
    assert answer == text


def test_model_result_defaults_answer_and_raw_to_text() -> None:
    result = ModelResult(
        backend="mock",
        text="Answer:\nReady.",
        tokens_estimate=12,
        metadata={},
    )
    assert result.answer_text == "Answer:\nReady."
    assert result.raw_text == "Answer:\nReady."


def test_split_model_output_progressive_handles_open_think_block() -> None:
    reasoning, answer = split_model_output_progressive("<think>\n1. Inspect the active set.\n2. Weigh the feedback channel.")
    assert reasoning == "1. Inspect the active set.\n2. Weigh the feedback channel."
    assert answer == ""


def test_split_model_output_progressive_handles_closed_think_block_with_answer() -> None:
    reasoning, answer = split_model_output_progressive("<think>\n1. Inspect.\n</think>\nAnswer:\nReady.")
    assert reasoning == "1. Inspect."
    assert answer == "Answer:\nReady."
