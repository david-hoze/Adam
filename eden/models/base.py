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

    def generate(
        self,
        *,
        system_prompt: str,
        conversation_prompt: str,
        max_tokens: int = 420,
    ) -> ModelResult:
        raise NotImplementedError
