from __future__ import annotations

from .base import BaseModelAdapter, ModelResult


class MockModelAdapter(BaseModelAdapter):
    backend_name = "mock"

    def generate(
        self,
        *,
        system_prompt: str,
        conversation_prompt: str,
        max_tokens: int = 420,
    ) -> ModelResult:
        lines = [line.strip() for line in conversation_prompt.splitlines() if line.strip()]
        user_line = next((line for line in reversed(lines) if line.startswith("USER:")), "USER: request unavailable")
        active_lines = [line for line in lines if line.startswith("[")]
        anchors = []
        for line in active_lines[:3]:
            anchors.append(line.split("]", 1)[0].strip("["))
        anchor_text = ", ".join(anchors) if anchors else "no strong prior anchors"
        answer = (
            "Answer:\n"
            f"I am responding through the current aperture rather than pretending to speak from fixed weights. "
            f"Your latest request was: {user_line[5:].strip()}\n\n"
            "Basis:\n"
            f"The highest pressure structures in the active set were {anchor_text}. "
            "I am favoring them because their regard, recency, and feedback surfaces were strongest in this moment.\n\n"
            "Next Step:\n"
            "If you want me to stabilize or revise this behavior, apply explicit feedback so the graph updates instead of the answer merely disappearing."
        )
        return ModelResult(
            backend=self.backend_name,
            text=answer[:max_tokens * 5],
            tokens_estimate=min(max_tokens, max(64, len(answer.split()))),
            metadata={"mode": "deterministic_mock"},
        )
