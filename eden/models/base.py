from __future__ import annotations

from dataclasses import dataclass


@dataclass(slots=True)
class ModelResult:
    backend: str
    text: str
    tokens_estimate: int
    metadata: dict[str, object]


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
    ) -> ModelResult:
        raise NotImplementedError
