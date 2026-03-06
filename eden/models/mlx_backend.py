from __future__ import annotations

from inspect import signature

from .base import BaseModelAdapter, ModelResult, split_model_output


class MLXModelAdapter(BaseModelAdapter):
    backend_name = "mlx"

    def __init__(self, model_path: str) -> None:
        self.model_path = model_path
        try:
            import mlx_lm  # type: ignore
        except ImportError as exc:  # pragma: no cover - depends on local install
            raise RuntimeError(
                "mlx-lm is not installed. Install the project with the mlx extra: `uv pip install -e .[mlx]`."
            ) from exc
        try:
            from mlx_lm.sample_utils import make_logits_processors, make_sampler  # type: ignore
        except ImportError as exc:  # pragma: no cover - depends on local install
            raise RuntimeError("mlx-lm sample utilities are unavailable in this installation.") from exc
        self._mlx_lm = mlx_lm
        self._make_sampler = make_sampler
        self._make_logits_processors = make_logits_processors
        self.model, self.tokenizer = self._load_model()

    def _load_model(self):  # pragma: no cover - depends on local install
        if hasattr(self._mlx_lm, "load"):
            return self._mlx_lm.load(self.model_path)
        from mlx_lm import load  # type: ignore

        return load(self.model_path)

    def count_tokens(self, text: str) -> int | None:
        if not text.strip():
            return 0
        if hasattr(self.tokenizer, "encode"):
            try:
                return int(len(self.tokenizer.encode(text)))
            except Exception:  # pragma: no cover - tokenizer-specific failures
                return None
        return None

    def _build_prompt(self, system_prompt: str, conversation_prompt: str, *, enable_thinking: bool) -> str:
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": conversation_prompt},
        ]
        if hasattr(self.tokenizer, "apply_chat_template"):
            try:
                return self.tokenizer.apply_chat_template(
                    messages,
                    tokenize=False,
                    add_generation_prompt=True,
                    enable_thinking=enable_thinking,
                )
            except TypeError:
                return self.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        return f"{system_prompt}\n\n{conversation_prompt}\n\nAssistant:"

    def _generate_text(
        self,
        *,
        prompt: str,
        max_tokens: int,
        temperature: float,
        top_p: float,
        repetition_penalty: float,
    ) -> str:
        if hasattr(self._mlx_lm, "generate"):
            generate_fn = self._mlx_lm.generate
        else:
            from mlx_lm import generate as generate_fn  # type: ignore

        kwargs = {"max_tokens": max_tokens, "verbose": False}
        kwargs["sampler"] = self._make_sampler(temp=temperature, top_p=top_p)
        kwargs["logits_processors"] = self._make_logits_processors(repetition_penalty=repetition_penalty)
        try:
            sig = signature(generate_fn)
            if "prompt" in sig.parameters:
                result = generate_fn(self.model, self.tokenizer, prompt=prompt, **kwargs)
            else:
                result = generate_fn(self.model, self.tokenizer, prompt, **kwargs)
        except TypeError:
            result = generate_fn(self.model, self.tokenizer, prompt, max_tokens=max_tokens)

        if isinstance(result, str):
            return result
        if hasattr(result, "text"):
            return str(result.text)
        return str(result)

    def generate(
        self,
        *,
        system_prompt: str,
        conversation_prompt: str,
        max_tokens: int = 420,
        temperature: float = 0.0,
        top_p: float = 0.0,
        repetition_penalty: float = 0.0,
    ) -> ModelResult:  # pragma: no cover - depends on local install
        prompt = self._build_prompt(system_prompt, conversation_prompt, enable_thinking=True)
        text = self._generate_text(
            prompt=prompt,
            max_tokens=max_tokens,
            temperature=temperature,
            top_p=top_p,
            repetition_penalty=repetition_penalty,
        )
        reasoning_text, answer_text = split_model_output(text)
        used_answer_fallback = False
        if reasoning_text and answer_text.strip() == text.strip():
            answer_prompt = self._build_prompt(
                system_prompt
                + "\nThis is the final answer pass. Do not emit reasoning. Return one clean operator-facing response using the requested sections exactly once.",
                conversation_prompt,
                enable_thinking=False,
            )
            answer_text = self._generate_text(
                prompt=answer_prompt,
                max_tokens=max_tokens,
                temperature=temperature,
                top_p=top_p,
                repetition_penalty=repetition_penalty,
            ).strip()
            used_answer_fallback = True
        return ModelResult(
            backend=self.backend_name,
            text=text.strip(),
            tokens_estimate=min(max_tokens, max(64, len(text.split()))),
            metadata={
                "model_path": self.model_path,
                "temperature": temperature,
                "top_p": top_p,
                "repetition_penalty": repetition_penalty,
                "answer_completion_fallback": used_answer_fallback,
            },
            answer_text=answer_text.strip() or text.strip(),
            reasoning_text=reasoning_text.strip(),
            raw_text=text.strip(),
        )
