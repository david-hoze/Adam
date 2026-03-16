from __future__ import annotations

from dataclasses import dataclass
import re
from typing import Any, Callable


THINK_BLOCK_RE = re.compile(r"<think>\s*(.*?)\s*</think>\s*(.*)", re.DOTALL)
GenerationProgressCallback = Callable[[dict[str, Any]], None]


def split_model_output(text: str) -> tuple[str, str]:
    stripped = (text or "").strip()
    if not stripped:
        return "", ""
    think_match = THINK_BLOCK_RE.search(stripped)
    if think_match:
        reasoning = think_match.group(1).strip()
        answer = think_match.group(2).strip()
        return reasoning, answer or stripped
    if stripped.startswith("Thinking Process:"):
        for marker in ("\nFinal Answer:", "\nAnswer:"):
            if marker in stripped:
                reasoning, answer = stripped.split(marker, 1)
                return reasoning.strip(), marker.strip() + answer
        return stripped, stripped
    return "", stripped


def split_model_output_progressive(text: str) -> tuple[str, str]:
    stripped = (text or "").strip()
    if not stripped:
        return "", ""
    if "<think>" in stripped:
        _, tail = stripped.split("<think>", 1)
        if "</think>" in tail:
            reasoning, answer = tail.split("</think>", 1)
            return reasoning.strip(), answer.strip()
        return tail.strip(), ""
    if stripped.startswith("Thinking Process:"):
        for marker in ("\nFinal Answer:", "\nAnswer:"):
            if marker in stripped:
                reasoning, answer = stripped.split(marker, 1)
                return reasoning.strip(), marker.strip() + answer
        return stripped, ""
    return "", stripped


@dataclass(slots=True)
class ModelResult:
    backend: str
    text: str
    tokens_estimate: int
    metadata: dict[str, object]
    answer_text: str = ""
    reasoning_text: str = ""
    raw_text: str = ""

    def __post_init__(self) -> None:
        if not self.raw_text:
            self.raw_text = self.text
        if not self.answer_text:
            self.answer_text = self.text


class BaseModelAdapter:
    backend_name = "base"

    def count_tokens(self, text: str) -> int | None:
        return None

    def generate(
        self,
        *,
        system_prompt: str,
        conversation_prompt: str,
        max_tokens: int = 420,
        temperature: float = 0.0,
        top_p: float = 0.0,
        repetition_penalty: float = 0.0,
        progress_callback: GenerationProgressCallback | None = None,
    ) -> ModelResult:
        raise NotImplementedError
