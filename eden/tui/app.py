from __future__ import annotations

import asyncio
import webbrowser
from dataclasses import dataclass
from functools import partial
from pathlib import Path
from typing import Any

from rich.panel import Panel
from rich.text import Text
from textual import on
from textual.app import App, ComposeResult
from textual.containers import Horizontal, Vertical
from textual.screen import ModalScreen, Screen
from textual.widgets import Button, Footer, Header, Input, RichLog, Select, Static, TextArea

from ..runtime import EdenRuntime
from ..utils import safe_excerpt


AMBER = "#ffbf66"
TEXT = "#ffe2af"
MUTED = "#b88646"
BG = "#090603"
PANEL = "#140d05"


def _observatory_target_url(runtime: EdenRuntime, status: dict[str, Any], experiment_id: str | None) -> str:
    if not experiment_id:
        return status["url"]
    out_dir = runtime.export_dir_for_experiment(experiment_id)
    for name in ("observatory_index.html", "geometry_lab.html", "graph_knowledge_base.html"):
        if (out_dir / name).exists():
            return status["url"] + f"{experiment_id}/{name}"
    return status["url"]


@dataclass(slots=True)
class UiState:
    experiment_id: str | None = None
    experiment_name: str | None = None
    session_id: str | None = None
    session_title: str | None = None
    model_status: dict[str, Any] | None = None
    last_turn_id: str | None = None
    last_response: str = ""
    last_reasoning: str = ""
    last_active_set: list[dict[str, Any]] | None = None
    last_trace: list[dict[str, Any]] | None = None
    preview_active_set: list[dict[str, Any]] | None = None
    preview_trace: list[dict[str, Any]] | None = None
    last_feedback: str = "No feedback applied yet."
    observatory_status: dict[str, Any] | None = None
    current_budget: dict[str, Any] | None = None
    current_profile: dict[str, Any] | None = None


class HelpModal(ModalScreen[None]):
    def compose(self) -> ComposeResult:
        help_text = Text.from_markup(
            "[bold #ffbf66]EDEN Controls[/]\n\n"
            "Use the left operator bay to address Brian the operator input into Adam.\n"
            "The right side is the ritual animation surface and Adam membrane output.\n"
            "The bottom console is the live runtime trace.\n"
            "Open Deck for hidden graph/status surfaces and launch utilities.\n"
            "Open Review for explicit accept / edit / reject feedback.\n\n"
            "[bold]F1[/] help overlay\n"
            "[bold]Ctrl+S[/] send current input\n"
            "[bold]F2[/] export graph, basin, and geometry artifacts\n"
            "[bold]F3[/] ensure observatory is running and open the current export surface\n"
            "[bold]F4[/] toggle low motion for the current session request\n"
            "[bold]F5[/] open the new-session inference-profile flow\n"
            "[bold]F6[/] open the operator deck\n"
            "[bold]Esc[/] close this overlay\n\n"
            "When the backend emits explicit reasoning, EDEN surfaces it in Deck > Thinking.\n"
            "That panel shows model-emitted text, not claimed hidden chain-of-thought.\n\n"
            "Inference modes:\n"
            "- MANUAL: operator-specified bounded parameters\n"
            "- RUNTIME_AUTO: deterministic transparent runtime policy\n"
            "- ADAM_AUTO: bounded preset choice; MLX currently falls back to runtime_auto and logs that fact\n\n"
            "Feedback rules:\n"
            "- Accept requires explanation\n"
            "- Reject requires explanation\n"
            "- Edit requires explanation and corrected response\n"
            "- Skip records a lightweight no-op verdict"
        )
        yield Static(Panel(help_text, title="Help", border_style=AMBER), id="help_panel")

    def on_key(self, event) -> None:
        if event.key in {"escape", "f1"}:
            self.dismiss(None)


class SessionConfigModal(ModalScreen[dict[str, Any] | None]):
    def __init__(
        self,
        defaults: dict[str, Any],
        *,
        title_text: str,
        action_label: str,
        show_title_input: bool = True,
    ) -> None:
        super().__init__()
        self.defaults = defaults
        self.title_text = title_text
        self.action_label = action_label
        self.show_title_input = show_title_input

    def compose(self) -> ComposeResult:
        summary = Text.from_markup(
            f"[bold {AMBER}]{self.title_text}[/]\n"
            "Choose the inference-profile mode for this session. EDEN will persist the request at session creation and surface the resolved circumstances on later turns."
        )
        yield Static(Panel(summary, title="Session Start", border_style=AMBER), id="session_config_header")
        with Horizontal(id="session_config_shell"):
            with Vertical(classes="session_config_column"):
                if self.show_title_input:
                    yield Input(value=self.defaults.get("title", "Operator Session"), id="session_title_input", placeholder="session title")
                yield Select(
                    [("MANUAL", "manual"), ("RUNTIME_AUTO", "runtime_auto"), ("ADAM_AUTO", "adam_auto")],
                    value=self.defaults.get("mode", "manual"),
                    allow_blank=False,
                    id="mode_select",
                    prompt="Inference mode",
                )
                yield Select(
                    [("Tight", "tight"), ("Balanced", "balanced"), ("Wide", "wide")],
                    value=self.defaults.get("budget_mode", "balanced"),
                    allow_blank=False,
                    id="budget_mode_select",
                    prompt="Budget mode",
                )
                yield Select(
                    [("Off", "false"), ("On", "true")],
                    value="true" if self.defaults.get("low_motion") else "false",
                    allow_blank=False,
                    id="low_motion_select",
                    prompt="Low motion",
                )
                yield Select(
                    [("Off", "false"), ("On", "true")],
                    value="true" if self.defaults.get("debug", True) else "false",
                    allow_blank=False,
                    id="debug_select",
                    prompt="Debug verbosity",
                )
                yield Static(id="session_config_summary")
            with Vertical(classes="session_config_column"):
                yield Input(value=str(self.defaults.get("temperature", 0.4)), id="temperature_input", placeholder="temperature")
                yield Input(value=str(self.defaults.get("max_output_tokens", 480)), id="max_tokens_input", placeholder="max output tokens")
                yield Input(value=str(self.defaults.get("top_p", 0.9)), id="top_p_input", placeholder="top_p")
                yield Input(value=str(self.defaults.get("repetition_penalty", 1.05)), id="repetition_penalty_input", placeholder="repetition penalty")
                yield Input(value=str(self.defaults.get("retrieval_depth", 12)), id="retrieval_depth_input", placeholder="retrieval depth")
                yield Input(value=str(self.defaults.get("max_context_items", 8)), id="max_context_items_input", placeholder="max context items")
                yield Input(value=str(self.defaults.get("response_char_cap", 1600)), id="response_char_cap_input", placeholder="response char cap")
                with Horizontal():
                    yield Button(self.action_label, id="session_confirm_btn", variant="primary")
                    yield Button("Cancel", id="session_cancel_btn")

    def on_mount(self) -> None:
        self._refresh_summary()

    @on(Button.Pressed, "#session_confirm_btn")
    def handle_confirm(self) -> None:
        self.dismiss(self._payload())

    @on(Button.Pressed, "#session_cancel_btn")
    def handle_cancel(self) -> None:
        self.dismiss(None)

    @on(Select.Changed)
    @on(Input.Changed)
    def handle_field_change(self, _event) -> None:
        self._refresh_summary()

    def on_key(self, event) -> None:
        if event.key == "escape":
            self.dismiss(None)

    def _payload(self) -> dict[str, Any]:
        return {
            "title": (
                self.query_one("#session_title_input", Input).value.strip()
                if self.show_title_input
                else self.defaults.get("title", "Operator Session")
            )
            or "Operator Session",
            "mode": str(self.query_one("#mode_select", Select).value),
            "budget_mode": str(self.query_one("#budget_mode_select", Select).value),
            "low_motion": str(self.query_one("#low_motion_select", Select).value) == "true",
            "debug": str(self.query_one("#debug_select", Select).value) == "true",
            "temperature": self._float_value("#temperature_input", 0.4),
            "max_output_tokens": self._int_value("#max_tokens_input", 480),
            "top_p": self._float_value("#top_p_input", 0.9),
            "repetition_penalty": self._float_value("#repetition_penalty_input", 1.05),
            "retrieval_depth": self._int_value("#retrieval_depth_input", 12),
            "max_context_items": self._int_value("#max_context_items_input", 8),
            "response_char_cap": self._int_value("#response_char_cap_input", 1600),
        }

    def _refresh_summary(self) -> None:
        payload = self._payload()
        mode = payload["mode"]
        if mode == "manual":
            mode_summary = "Operator-specified values will be clamped and used directly."
        elif mode == "runtime_auto":
            mode_summary = "EDEN will choose a bounded preset each turn from transparent heuristics."
        else:
            mode_summary = "Mock sessions use a bounded Adam-guided preset picker; MLX sessions fall back to runtime_auto and log that."
        text = Text.from_markup(
            f"[bold {AMBER}]Mode[/] {mode.upper()}\n"
            f"{mode_summary}\n\n"
            f"[bold {AMBER}]Budget preset[/] {payload['budget_mode']}\n"
            f"retrieval_depth={payload['retrieval_depth']} max_context_items={payload['max_context_items']}\n"
            f"max_output_tokens={payload['max_output_tokens']} response_char_cap={payload['response_char_cap']}\n"
            f"temperature={payload['temperature']:.2f} top_p={payload['top_p']:.2f} repetition_penalty={payload['repetition_penalty']:.2f}"
        )
        self.query_one("#session_config_summary", Static).update(Panel(text, title="Profile Summary", border_style=AMBER))

    def _float_value(self, selector: str, default: float) -> float:
        raw = self.query_one(selector, Input).value.strip()
        try:
            return float(raw)
        except ValueError:
            return default

    def _int_value(self, selector: str, default: int) -> int:
        raw = self.query_one(selector, Input).value.strip()
        try:
            return int(raw)
        except ValueError:
            return default


class FeedbackModal(ModalScreen[None]):
    def __init__(self, chat_screen: "ChatScreen") -> None:
        super().__init__()
        self.chat_screen = chat_screen

    def compose(self) -> ComposeResult:
        yield Static(id="review_summary")
        yield TextArea(
            id="review_explanation_input",
            soft_wrap=True,
            show_line_numbers=False,
            placeholder="feedback explanation (required for accept / reject / edit)",
        )
        yield TextArea(
            id="review_corrected_input",
            soft_wrap=True,
            show_line_numbers=False,
            placeholder="corrected answer (required for edit)",
        )
        with Horizontal():
            yield Button("Accept", id="review_accept_btn")
            yield Button("Edit", id="review_edit_btn")
            yield Button("Reject", id="review_reject_btn")
            yield Button("Skip", id="review_skip_btn")
            yield Button("Close", id="review_close_btn")
        yield Static(id="review_status")

    def on_mount(self) -> None:
        self._refresh()
        self.query_one("#review_explanation_input", TextArea).focus()

    def _refresh(self) -> None:
        app = self.app
        summary = Text.from_markup(
            f"[bold {AMBER}]Review Last Turn[/]\n"
            f"turn={app.ui_state.last_turn_id or 'none'}\n\n"
            f"[bold {AMBER}]Adam membrane[/]\n"
            f"{safe_excerpt(app.ui_state.last_response or 'No response yet.', limit=900)}"
        )
        self.query_one("#review_summary", Static).update(Panel(summary, title="Feedback Surface", border_style=AMBER))
        self.query_one("#review_status", Static).update(
            Panel(Text(app.ui_state.last_feedback, style=MUTED), title="Feedback Status", border_style=AMBER)
        )

    async def _submit(self, verdict: str) -> None:
        explanation = self.query_one("#review_explanation_input", TextArea).text
        corrected = self.query_one("#review_corrected_input", TextArea).text
        await self.chat_screen.submit_feedback(verdict, explanation=explanation, corrected=corrected)
        self.dismiss(None)

    @on(Button.Pressed, "#review_accept_btn")
    async def handle_accept(self) -> None:
        await self._submit("accept")

    @on(Button.Pressed, "#review_edit_btn")
    async def handle_edit(self) -> None:
        await self._submit("edit")

    @on(Button.Pressed, "#review_reject_btn")
    async def handle_reject(self) -> None:
        await self._submit("reject")

    @on(Button.Pressed, "#review_skip_btn")
    async def handle_skip(self) -> None:
        await self._submit("skip")

    @on(Button.Pressed, "#review_close_btn")
    def handle_close(self) -> None:
        self.dismiss(None)

    def on_key(self, event) -> None:
        if event.key == "escape":
            self.dismiss(None)


class DeckModal(ModalScreen[None]):
    def __init__(self, chat_screen: "ChatScreen") -> None:
        super().__init__()
        self.chat_screen = chat_screen

    def compose(self) -> ComposeResult:
        yield Static(id="deck_summary")
        with Horizontal(id="deck_shell"):
            with Vertical(classes="deck_column"):
                yield Static(id="deck_budget_panel")
                yield Static(id="deck_telemetry_panel")
                yield Static(id="deck_history_panel")
            with Vertical(classes="deck_column"):
                yield Static(id="deck_thinking_panel")
                yield Static(id="deck_active_set_panel")
                yield Static(id="deck_trace_panel")
            with Vertical(classes="deck_column"):
                yield Input(id="deck_ingest_path_input", placeholder="document path (.pdf/.csv/.txt/.md)")
                with Horizontal():
                    yield Button("Ingest", id="deck_ingest_btn", variant="primary")
                    yield Button("Blank Eden", id="deck_blank_btn")
                    yield Button("Seeded Eden", id="deck_seeded_btn")
                with Horizontal():
                    yield Button("Resume Latest", id="deck_resume_btn")
                    yield Button("New Session", id="deck_new_session_btn")
                with Horizontal():
                    yield Button("Low Motion", id="deck_motion_btn")
                    yield Button("Debug", id="deck_debug_btn")
                    yield Button("Close", id="deck_close_btn")
                yield Static(id="deck_status_panel")

    def on_mount(self) -> None:
        self._refresh()
        self.set_interval(1.0, self._refresh)

    def _refresh(self) -> None:
        self.query_one("#deck_summary", Static).update(self.chat_screen.deck_summary_panel())
        self.query_one("#deck_budget_panel", Static).update(self.chat_screen.deck_budget_panel())
        self.query_one("#deck_telemetry_panel", Static).update(self.chat_screen.deck_telemetry_panel())
        self.query_one("#deck_history_panel", Static).update(self.chat_screen.deck_history_panel())
        self.query_one("#deck_thinking_panel", Static).update(self.chat_screen.deck_thinking_panel())
        self.query_one("#deck_active_set_panel", Static).update(self.chat_screen.deck_active_set_panel())
        self.query_one("#deck_trace_panel", Static).update(self.chat_screen.deck_trace_panel())
        self.query_one("#deck_status_panel", Static).update(self.chat_screen.deck_status_panel())

    @on(Button.Pressed, "#deck_ingest_btn")
    async def handle_ingest(self) -> None:
        path = self.query_one("#deck_ingest_path_input", Input).value.strip()
        if not path:
            return
        await self.chat_screen.ingest_path(path)
        self.query_one("#deck_ingest_path_input", Input).value = ""
        self._refresh()

    @on(Button.Pressed, "#deck_blank_btn")
    def handle_blank(self) -> None:
        self.dismiss(None)
        self.chat_screen.begin_surface_launch("blank")

    @on(Button.Pressed, "#deck_seeded_btn")
    def handle_seeded(self) -> None:
        self.dismiss(None)
        self.chat_screen.begin_surface_launch("seeded")

    @on(Button.Pressed, "#deck_resume_btn")
    def handle_resume(self) -> None:
        self.dismiss(None)
        self.chat_screen.begin_surface_launch("resume")

    @on(Button.Pressed, "#deck_new_session_btn")
    def handle_new_session(self) -> None:
        self.dismiss(None)
        self.chat_screen.begin_new_session_flow()

    @on(Button.Pressed, "#deck_motion_btn")
    async def handle_motion(self) -> None:
        await self.chat_screen.toggle_motion()
        self._refresh()

    @on(Button.Pressed, "#deck_debug_btn")
    async def handle_debug(self) -> None:
        await self.chat_screen.toggle_debug()
        self._refresh()

    @on(Button.Pressed, "#deck_close_btn")
    def handle_close(self) -> None:
        self.dismiss(None)

    def on_key(self, event) -> None:
        if event.key == "escape":
            self.dismiss(None)


class AdamSigil(Static):
    FRAMES = [
        [
            "      .-=-=-=-=-=-=-=-=-.",
            "    .'  amber ritual  '.",
            "   /  inhale / align    \\",
            "  |   aperture:::001    |",
            "  |   membrane:sealed   |",
            "   \\__operator__alive__/",
        ],
        [
            "      .-=-=-=-=-=-=-=-=-.",
            "    .'  amber ritual  '.",
            "   /  phase / saturate \\",
            "  |   aperture:::010    |",
            "  |   membrane:glow++   |",
            "   \\__operator__alive__/",
        ],
        [
            "      .-=-=-=-=-=-=-=-=-.",
            "    .'  amber ritual  '.",
            "   /  phase / release  \\",
            "  |   aperture:::111    |",
            "  |   membrane:flex     |",
            "   \\__operator__alive__/",
        ],
        [
            "      .-=-=-=-=-=-=-=-=-.",
            "    .'  amber ritual  '.",
            "   /  phase / recurse  \\",
            "  |   aperture:::101    |",
            "  |   membrane:braid    |",
            "   \\__operator__alive__/",
        ],
        [
            "      .-=-=-=-=-=-=-=-=-.",
            "    .'  amber ritual  '.",
            "   /  phase / refract  \\",
            "  |   aperture:::011    |",
            "  |   membrane:steady   |",
            "   \\__operator__alive__/",
        ],
    ]
    PHASES = ("inhale", "align", "saturate", "release", "refract")

    def on_mount(self) -> None:
        self.border_title = "Ritual Engine"
        self.set_interval(0.48, self._tick)
        self._frame = 0
        self._tick()

    def _gauge(self, value: float, *, width: int = 12, fill: str = "|", empty: str = ".") -> str:
        clamped = max(0.0, min(1.0, value))
        lit = int(round(clamped * width))
        return (fill * lit) + (empty * max(0, width - lit))

    def _tick(self) -> None:
        app = self.app
        if not isinstance(app, EdenTuiApp):
            return
        if app.runtime.settings.low_motion:
            self._frame = 0
        else:
            self._frame = (self._frame + 1) % len(self.FRAMES)
        frame = self.FRAMES[self._frame]
        active = len((app.ui_state.preview_active_set or app.ui_state.last_active_set or []))
        pressure = (app.ui_state.current_budget or {}).get("pressure_level", "LOW")
        response_chars = len(app.ui_state.last_response or "")
        reasoning = "present" if app.ui_state.last_reasoning else "quiet"
        model_status = app.runtime.mlx_model_status() if app.runtime.settings.model_backend == "mlx" else {"stage": "mock"}
        latest = app.runtime.runtime_log.recent(1)
        latest_event = latest[-1].event if latest else "awaiting_signal"
        pressure_value = {"LOW": 0.28, "MEDIUM": 0.56, "HIGH": 0.84}.get(str(pressure).upper(), 0.4)
        text = Text.from_markup(
            f"[bold {AMBER}]{chr(10).join(frame)}[/]\n\n"
            f"[{MUTED}]phase={self.PHASES[self._frame]} event={latest_event} model={model_status.get('stage', 'n/a')}[/]\n"
            f"[{TEXT}]aperture  {self._gauge(active / 12 if active else 0.08)}[/]\n"
            f"[{TEXT}]membrane  {self._gauge(response_chars / 1600 if response_chars else 0.1, fill='=')}[/]\n"
            f"[{TEXT}]pressure  {self._gauge(pressure_value, fill=':')}[/]\n"
            f"[{TEXT}]reasoning {reasoning}[/]"
        )
        self.update(Panel(text, title="Amber Cybernetic Field", border_style=AMBER))


class StartupScreen(Screen):
    def __init__(self) -> None:
        super().__init__()
        self._seen_log_count = 0

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with Horizontal(id="startup_shell"):
            with Vertical(classes="column"):
                yield Static(id="startup_summary")
                yield Static(id="runtime_path_panel")
                yield Static(id="model_status_panel")
                yield Select(
                    [("Adam / Local MLX", "mlx"), ("Mock Fallback", "mock")],
                    value="mlx",
                    allow_blank=False,
                    id="backend_select",
                    prompt="Runtime surface",
                )
                with Horizontal():
                    yield Button("Blank Eden", id="blank_btn", variant="primary")
                    yield Button("Seeded Eden", id="seeded_btn")
                    yield Button("Resume Latest", id="resume_btn")
                with Horizontal():
                    yield Button("Prepare Qwen", id="prepare_mlx_btn")
                    yield Button("Refresh Model", id="refresh_model_btn")
                with Horizontal():
                    yield Button("Open Observatory", id="startup_observatory_btn")
                    yield Button("Export Latest", id="startup_export_btn")
                    yield Button("Help", id="startup_help_btn")
                yield Static(id="startup_hint")
            with Vertical(classes="column"):
                yield RichLog(id="startup_log", wrap=True, auto_scroll=True, highlight=True)
        yield Footer()

    def on_mount(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        launch = app.runtime.runtime_launch_profile()
        self.query_one("#backend_select", Select).value = launch["backend"]
        app.ui_state.model_status = app.runtime.mlx_model_status()
        self.query_one("#startup_summary", Static).update(self._summary_text())
        self._refresh_runtime_path_panel()
        self._refresh_model_status_panel()
        self.query_one("#startup_hint", Static).update(
            Panel(
                Text.from_markup(
                    f"[bold {AMBER}]Launch Contract[/]\n"
                    "- launch from the repo-local interpreter: .venv/bin/python -m eden\n"
                    "- default runtime is Adam on local MLX with Qwen 3.5 35B A3B\n"
                    "- model storage stays inside this repo under models/\n"
                    "- choose Blank Eden, Seeded Eden, or Resume Latest here instead of juggling startup flags\n"
                    "- the launcher shows MLX readiness and can prepare the local model directly\n"
                    "- observatory/export utilities stay available from this startup panel and from the running chat surface"
                ),
                title="Startup Surface",
                border_style=AMBER,
            )
        )
        self.set_interval(0.6, self._poll_logs)

    def _summary_text(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        controls = ["profile_mode", "budget_mode", "retrieval_depth", "max_context_items", "response_char_cap"]
        content = Text.from_markup(
            f"[bold {AMBER}]EDEN / ADAM[/]\n"
            f"repo=Adam\n"
            f"python=.venv/bin/python\n"
            f"seed_canon={len(list((app.repo_root / 'assets' / 'seed_canon').rglob('*.pdf')))} pdf files\n"
            f"db=data/eden.db\n"
            f"models=models/\n"
            f"exports=exports/\n"
            f"controls={', '.join(controls)}"
        )
        return Panel(content, title="Startup Summary", border_style=AMBER)

    def _runtime_launch_profile(self) -> dict[str, Any]:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        backend = str(self.query_one("#backend_select", Select).value or "mock")
        return app.runtime.update_runtime_launch_profile(backend=backend, model_path=None)

    def _refresh_runtime_path_panel(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        profile = self._runtime_launch_profile()
        model_status = app.ui_state.model_status or app.runtime.mlx_model_status()
        default_runtime = f"Adam / {model_status['label']}" if profile["backend"] == "mlx" else "Mock Adam fallback"
        model_stage = str(model_status.get("stage", "missing")).replace("_", " ")
        text = Text.from_markup(
            f"[bold {AMBER}]Runtime Surface[/]\n"
            f"backend={profile['backend']}\n"
            f"default={default_runtime}\n\n"
            f"model_state={model_stage}\n"
            f"storage=models/{Path(model_status['local_dir']).name}\n\n"
            "Use `.venv/bin/python -m eden` or `.venv/bin/python -m eden app`.\n"
            "The launcher remembers the runtime choice, and MLX is the default local path."
        )
        self.query_one("#runtime_path_panel", Static).update(Panel(text, title="Runtime Surface", border_style=AMBER))

    def _refresh_model_status_panel(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        status = app.runtime.mlx_model_status()
        app.ui_state.model_status = status
        readiness = "READY" if status["ready"] else "PREPARING" if status.get("safetensor_count") else "NOT CACHED"
        storage = f"models/{Path(status['local_dir']).name}"
        expected = status.get("weight_files_expected")
        shard_progress = (
            f"{status['weight_files_present']}/{expected}"
            if expected
            else str(status["weight_files_present"])
        )
        text = Text.from_markup(
            f"[bold {AMBER}]Default MLX Model[/]\n"
            f"label={status['label']}\n"
            f"base={status['base_model']}\n"
            f"source={status['repo_id']}\n"
            f"cache={readiness} stage={status.get('stage', 'missing')}\n"
            f"weights={shard_progress} size={status.get('gib_on_disk', 0)} GiB\n"
            f"storage={storage}"
        )
        self.query_one("#model_status_panel", Static).update(Panel(text, title="MLX Model Status", border_style=AMBER))

    def _poll_logs(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        events = app.runtime.runtime_log.recent(200)
        widget = self.query_one("#startup_log", RichLog)
        for event in events[self._seen_log_count :]:
            widget.write(f"[{event.level}] {event.event} :: {event.message} {event.payload}")
        self._seen_log_count = len(events)

    async def _launch_session_worker(self, action: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        launch = self._runtime_launch_profile()
        if launch["backend"] == "mlx":
            status = await self._ensure_local_mlx_model()
            if status is None:
                return
            app.ui_state.model_status = status
            self._refresh_model_status_panel()
        if action == "resume":
            latest = app.runtime.store.get_latest_experiment()
            if latest is None:
                self.query_one("#startup_log", RichLog).write("[WARN] No existing experiment. Create one first.")
                return
            latest_session = app.runtime.store.get_latest_session(latest["id"])
            if latest_session is None:
                self.query_one("#startup_log", RichLog).write("[WARN] Latest experiment has no sessions yet.")
                return
            snapshot = await asyncio.to_thread(partial(app.runtime.session_state_snapshot, latest_session["id"]))
            app.apply_session_snapshot(snapshot)
            await app.push_screen(ChatScreen())
            return
        defaults = app.runtime.default_session_profile_request().to_dict()
        payload = await app.push_screen_wait(
            SessionConfigModal(
                defaults,
                title_text="Session Inference Profile",
                action_label="Start Session",
            )
        )
        if payload is None:
            return
        experiment = await asyncio.to_thread(partial(app.runtime.initialize_experiment, action))
        session = await asyncio.to_thread(
            partial(
                app.runtime.start_session,
                experiment["id"],
                title=payload["title"],
                profile_request=payload,
            )
        )
        app.apply_session_snapshot(
            {
                "experiment_id": experiment["id"],
                "experiment_name": experiment["name"],
                "session_id": session["id"],
                "session_title": session["title"],
                "last_turn_id": None,
                "last_response": "",
                "last_reasoning": "",
                "last_active_set": [],
                "last_trace": [],
                "current_profile": None,
                "current_budget": None,
            }
        )
        await app.push_screen(ChatScreen())

    def begin_launch_session(self, action: str) -> None:
        self.run_worker(self._launch_session_worker(action), exclusive=True, group="launch")

    @on(Button.Pressed, "#blank_btn")
    def handle_blank(self) -> None:
        self.begin_launch_session("blank")

    @on(Button.Pressed, "#seeded_btn")
    def handle_seeded(self) -> None:
        self.begin_launch_session("seeded")

    @on(Button.Pressed, "#resume_btn")
    def handle_resume(self) -> None:
        self.begin_launch_session("resume")

    @on(Select.Changed, "#backend_select")
    def handle_runtime_path_change(self, _event) -> None:
        self._refresh_runtime_path_panel()
        self._refresh_model_status_panel()

    async def _ensure_local_mlx_model(self) -> dict[str, Any] | None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        status = await asyncio.to_thread(app.runtime.mlx_model_status)
        if status["ready"]:
            return status
        self.query_one("#startup_log", RichLog).write(
            f"[INFO] Preparing local MLX model :: {status['label']} -> models/{Path(status['local_dir']).name}"
        )
        try:
            status = await asyncio.to_thread(app.runtime.prepare_default_mlx_model)
        except Exception as exc:
            self.query_one("#startup_log", RichLog).write(f"[ERROR] MLX prepare failed :: {exc}")
            return None
        self.query_one("#startup_log", RichLog).write(
            f"[INFO] MLX model ready :: models/{Path(status['local_dir']).name} ({status.get('gib_on_disk', 0)} GiB)"
        )
        return status

    async def _prepare_mlx_worker(self) -> None:
        status = await self._ensure_local_mlx_model()
        if status is not None:
            self.app.ui_state.model_status = status
            self._refresh_model_status_panel()

    @on(Button.Pressed, "#prepare_mlx_btn")
    def handle_prepare_mlx(self) -> None:
        self.run_worker(self._prepare_mlx_worker(), exclusive=True, group="prepare_mlx")

    @on(Button.Pressed, "#refresh_model_btn")
    def handle_refresh_model(self) -> None:
        self._refresh_model_status_panel()
        self._refresh_runtime_path_panel()

    async def _startup_export_worker(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        latest = app.runtime.store.get_latest_experiment()
        if latest is None:
            self.query_one("#startup_log", RichLog).write("[WARN] No experiment available to export.")
            return
        latest_session = app.runtime.store.get_latest_session(latest["id"])
        paths = await asyncio.to_thread(
            partial(
                app.runtime.export_observability,
                experiment_id=latest["id"],
                session_id=latest_session["id"] if latest_session else None,
            )
        )
        names = [Path(paths[key]).name for key in ("graph_html", "basin_html", "geometry_html") if key in paths]
        self.query_one("#startup_log", RichLog).write(f"[INFO] Exported latest surfaces :: {', '.join(names)}")

    async def _startup_observatory_worker(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        status = await asyncio.to_thread(partial(app.runtime.start_observatory, reuse_existing=True))
        app.ui_state.observatory_status = status
        latest = app.runtime.store.get_latest_experiment()
        target_url = _observatory_target_url(app.runtime, status, latest["id"] if latest is not None else None)
        webbrowser.open(target_url)
        self.query_one("#startup_log", RichLog).write(
            f"[INFO] Observatory {'reused' if status['reused_existing'] else 'started'} :: {target_url}"
        )

    @on(Button.Pressed, "#startup_export_btn")
    def handle_startup_export(self) -> None:
        self.run_worker(self._startup_export_worker(), exclusive=True, group="startup_export")

    @on(Button.Pressed, "#startup_observatory_btn")
    def handle_startup_observatory(self) -> None:
        self.run_worker(self._startup_observatory_worker(), exclusive=True, group="startup_observatory")

    @on(Button.Pressed, "#startup_help_btn")
    async def handle_startup_help(self) -> None:
        await self.app.push_screen(HelpModal())


class ChatScreen(Screen):
    def __init__(self) -> None:
        super().__init__()
        self._seen_log_count = 0
        self._preview_task: asyncio.Task[None] | None = None
        self._preview_generation = 0

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with Vertical(id="chat_shell"):
            with Horizontal(id="chat_top"):
                with Vertical(id="operator_column"):
                    yield Static(id="session_ribbon")
                    yield Static(id="operator_status_panel")
                    yield TextArea(
                        id="composer_input",
                        soft_wrap=True,
                        show_line_numbers=False,
                        placeholder="Brian the operator: direct, question, or correct. Ctrl+S sends.",
                    )
                    with Horizontal(id="primary_actions"):
                        yield Button("Send", id="send_btn", variant="success")
                        yield Button("Review", id="review_btn")
                        yield Button("Deck", id="deck_btn")
                        yield Button("Profile", id="profile_btn")
                    with Horizontal(id="secondary_actions"):
                        yield Button("New Session", id="new_session_btn")
                        yield Button("Observatory", id="observatory_btn")
                        yield Button("Export", id="export_btn")
                        yield Button("Help", id="help_btn")
                with Vertical(id="ritual_column"):
                    yield AdamSigil(id="ritual_panel")
                    yield Static(id="response_panel")
                    yield Static(id="ritual_status_panel")
            yield RichLog(id="forensic_log", wrap=True, auto_scroll=True, highlight=True)
        yield Footer()

    def on_mount(self) -> None:
        self.set_interval(0.6, self._poll_logs)
        self.set_interval(1.0, self.refresh_panels)
        self._schedule_preview_refresh()
        self.refresh_panels()
        self.call_after_refresh(lambda: self.query_one("#composer_input", TextArea).focus())

    def refresh_panels(self) -> None:
        self.query_one("#session_ribbon", Static).update(self.main_session_panel())
        self.query_one("#operator_status_panel", Static).update(self.main_operator_status_panel())
        self.query_one("#response_panel", Static).update(self.main_response_panel())
        self.query_one("#ritual_status_panel", Static).update(self.main_ritual_status_panel())

    def _model_status(self) -> dict[str, Any]:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if app.runtime.settings.model_backend == "mlx":
            return app.runtime.mlx_model_status()
        return {"stage": "mock", "label": "Mock Adam fallback"}

    def _health(self) -> dict[str, Any]:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return {
                "memes": 0,
                "memodes": 0,
                "edges": 0,
                "turns": 0,
                "feedback": 0,
                "documents": 0,
                "triadic_closure": 0.0,
                "dyad_ratio": 0.0,
                "memode_coverage": 0.0,
                "isolated_count": 0.0,
            }
        return app.runtime.graph_health(app.ui_state.experiment_id)

    def _active_items(self) -> list[dict[str, Any]]:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        return list((app.ui_state.preview_active_set if self._composer_text().strip() else app.ui_state.last_active_set) or [])

    def _trace_items(self) -> list[dict[str, Any]]:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        return list((app.ui_state.preview_trace if self._composer_text().strip() else app.ui_state.last_trace) or [])

    def main_session_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        model_status = self._model_status()
        current_profile = app.ui_state.current_profile or {}
        observatory = (app.ui_state.observatory_status or {}).get("url", "offline")
        text = Text.from_markup(
            f"[bold {AMBER}]Session Ribbon[/]\n"
            f"experiment={app.ui_state.experiment_name or app.ui_state.experiment_id or 'none'}\n"
            f"session={app.ui_state.session_title or app.ui_state.session_id or 'none'}\n"
            f"runtime={app.runtime.settings.model_backend} model_cache={model_status.get('stage', 'n/a')}\n"
            f"mode={current_profile.get('requested_mode', 'pending')} -> {current_profile.get('effective_mode', 'pending')}\n"
            f"observatory={observatory}\n"
            f"last_turn={app.ui_state.last_turn_id or 'none'}"
        )
        return Panel(text, title="Session Ribbon", border_style=AMBER)

    def main_operator_status_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        previewing = "armed" if self._composer_text().strip() else "idle"
        active_count = len(self._active_items())
        text = Text.from_markup(
            f"[bold {AMBER}]Brian the Operator[/]\n"
            "autosave=armed graph_ingest=punctuated as Brian the operator\n"
            f"preview={previewing} active_set={active_count}\n"
            f"status={safe_excerpt(app.ui_state.last_feedback, limit=140)}"
        )
        return Panel(text, title="Operator Bay", border_style=AMBER)

    def main_response_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        response_text = app.ui_state.last_response or "Awaiting the first membrane response."
        reasoning_note = "reasoning buffered in Deck" if app.ui_state.last_reasoning else "reasoning quiet"
        body = Text.from_markup(
            f"[{MUTED}]{reasoning_note}[/]\n\n"
        )
        body.append(response_text, style=TEXT)
        return Panel(body, title="Adam / Membrane", border_style=AMBER)

    def main_ritual_status_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        profile = app.ui_state.current_profile or {}
        budget = app.ui_state.current_budget or {}
        active_labels = ", ".join(item["label"] for item in self._active_items()[:3]) or "awaiting aperture"
        text = Text.from_markup(
            f"[bold {AMBER}]Ritual Status[/]\n"
            f"profile={profile.get('profile_name', 'pending')}\n"
            f"pressure={budget.get('pressure_level', 'n/a')} remaining_input={budget.get('remaining_input_tokens', 'n/a')}\n"
            f"response_cap={profile.get('response_char_cap', 'n/a')} reasoning={'present' if app.ui_state.last_reasoning else 'quiet'}\n"
            f"anchor={safe_excerpt(active_labels, limit=120)}"
        )
        return Panel(text, title="Live Status", border_style=AMBER)

    def deck_summary_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        model_status = self._model_status()
        text = Text.from_markup(
            f"[bold {AMBER}]Deck / Hidden Surfaces[/]\n"
            "Budget, thinking, active set, trace, telemetry, ingest, and launch controls live here.\n\n"
            f"runtime={app.runtime.settings.model_backend}\n"
            f"model={model_status.get('label', 'n/a')}\n"
            f"cache={model_status.get('stage', 'n/a')}\n"
            f"session={app.ui_state.session_title or app.ui_state.session_id or 'none'}"
        )
        return Panel(text, title="Operator Deck", border_style=AMBER)

    def deck_budget_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        return Panel(
            self._budget_text(app.ui_state.current_profile or {}, app.ui_state.current_budget or {}),
            title="Inference Circumstances / Budget",
            border_style=AMBER,
        )

    def deck_telemetry_panel(self) -> Panel:
        health = self._health()
        text = Text.from_markup(
            f"[bold {AMBER}]Graph Health[/]\n"
            f"memes={health['memes']} memodes={health['memodes']} edges={health['edges']}\n"
            f"turns={health['turns']} feedback={health['feedback']} docs={health['documents']}\n"
            f"triadic_closure={health['triadic_closure']:.3f}\n"
            f"dyad_ratio={health['dyad_ratio']:.3f}\n"
            f"memode_coverage={health['memode_coverage']:.3f}\n"
            f"isolated_count={health['isolated_count']:.0f}"
        )
        return Panel(text, title="Telemetry / Graph Stats", border_style=AMBER)

    def deck_history_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        history = app.runtime.store.summarize_history(app.ui_state.session_id, limit=6) if app.ui_state.session_id else []
        text = Text.from_markup(f"[bold {AMBER}]Recent Turns[/]\n" + ("\n".join(history) if history else "No turns yet."))
        return Panel(text, title="Bounded History", border_style=AMBER)

    def deck_thinking_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        reasoning_text = safe_excerpt(app.ui_state.last_reasoning, limit=1200) if app.ui_state.last_reasoning else "No model-emitted thinking yet."
        reasoning_style = TEXT if app.ui_state.last_reasoning else MUTED
        return Panel(Text(reasoning_text, style=reasoning_style), title="Qwen Thinking / Reasoning", border_style=AMBER)

    def deck_active_set_panel(self) -> Panel:
        active_lines = []
        for item in self._active_items()[:10]:
            active_lines.append(
                f"{item['label']} [{item['domain']}] sel={item['selection']:.2f} reg={item['regard']:.2f}"
            )
        active_label = "Aperture / Active Set (Preview)" if self._composer_text().strip() else "Aperture / Active Set"
        text = Text.from_markup(f"[bold {AMBER}]Active Set[/]\n" + ("\n".join(active_lines) if active_lines else "No active set yet."))
        return Panel(text, title=active_label, border_style=AMBER)

    def deck_trace_panel(self) -> Panel:
        trace_lines = []
        for item in self._trace_items()[:12]:
            trace_lines.append(
                f"{item['label']} :: sel={item['selection']:.2f} sim={item['semantic_similarity']:.2f} act={item['activation']:.2f}"
            )
        trace_text = Text.from_markup(
            f"[bold {AMBER}]Decision Trace[/]\n"
            "Operator-visible retrieval, regard, budget, and membrane surfaces only.\n\n"
            + ("\n".join(trace_lines) if trace_lines else "No trace yet.")
        )
        return Panel(trace_text, title="Cogitation / Decision Trace", border_style=AMBER)

    def deck_status_panel(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        text = Text.from_markup(
            f"[bold {AMBER}]Deck Status[/]\n"
            f"observatory={(app.ui_state.observatory_status or {}).get('url', 'offline')}\n"
            f"low_motion={app.runtime.settings.low_motion} debug={app.runtime.settings.debug}\n"
            f"feedback={safe_excerpt(app.ui_state.last_feedback, limit=180)}"
        )
        return Panel(text, title="Status", border_style=AMBER)

    def _budget_text(self, profile: dict[str, Any], budget: dict[str, Any]) -> Text:
        if not profile or not budget:
            return Text.from_markup(
                f"[bold {AMBER}]Awaiting budget preview[/]\n"
                "Type in the composer or start a turn preview to see live prompt-budget conditions."
            )
        reasons = budget.get("change_reasons", [])[:4]
        reason_text = "\n".join(f"- {item}" for item in reasons) if reasons else "- No recent change."
        return Text.from_markup(
            f"[bold {AMBER}]profile[/] {profile.get('profile_name', 'n/a')}\n"
            f"mode={profile.get('requested_mode', 'n/a')} -> {profile.get('effective_mode', 'n/a')}\n"
            f"retrieval_depth={profile.get('retrieval_depth', 'n/a')} max_context_items={profile.get('max_context_items', 'n/a')}\n"
            f"reserved_output={budget.get('reserved_output_tokens', 'n/a')} tok response_char_cap={profile.get('response_char_cap', 'n/a')}\n"
            f"prompt_budget={budget.get('prompt_budget_tokens', 'n/a')} tok context_window={budget.get('context_window_tokens', 'n/a')} tok\n"
            f"user={budget.get('user_tokens', 'n/a')} tok / {budget.get('user_chars', 'n/a')} chars\n"
            f"remaining_input={budget.get('remaining_input_tokens', 'n/a')} tok / {budget.get('remaining_input_chars', 'n/a')} chars\n"
            f"count_method={budget.get('count_method', 'n/a')}\n"
            f"active_set={budget.get('active_set_tokens', 'n/a')} tok history={budget.get('history_tokens', 'n/a')} tok feedback={budget.get('feedback_tokens', 'n/a')} tok\n"
            f"pressure={budget.get('pressure_level', 'n/a')} ratio={budget.get('pressure_ratio', 'n/a')}\n\n"
            f"[bold {AMBER}]Allowance changes[/]\n{reason_text}"
        )

    def _poll_logs(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        events = app.runtime.runtime_log.recent(200)
        widget = self.query_one("#forensic_log", RichLog)
        for event in events[self._seen_log_count :]:
            widget.write(f"[{event.level}] {event.event} :: {event.message} {event.payload}")
        self._seen_log_count = len(events)

    def _composer_text(self) -> str:
        return self.query_one("#composer_input", TextArea).text

    def _set_text_area(self, selector: str, value: str) -> None:
        self.query_one(selector, TextArea).load_text(value)

    def _schedule_preview_refresh(self) -> None:
        if not self.app.ui_state.session_id:
            return
        self._preview_generation += 1
        generation = self._preview_generation
        if self._preview_task is not None and not self._preview_task.done():
            self._preview_task.cancel()
        self._preview_task = asyncio.create_task(self._refresh_preview(generation))

    async def _refresh_preview(self, generation: int) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        await asyncio.sleep(0.22)
        if generation != self._preview_generation or not app.ui_state.session_id:
            return
        user_text = self._composer_text().strip()
        preview = await asyncio.to_thread(
            partial(
                app.runtime.preview_turn,
                session_id=app.ui_state.session_id,
                user_text=user_text,
                previous_budget=app.ui_state.current_budget,
            )
        )
        if generation != self._preview_generation:
            return
        app.ui_state.current_profile = preview.profile
        app.ui_state.current_budget = preview.budget
        if user_text:
            app.ui_state.preview_active_set = preview.active_set
            app.ui_state.preview_trace = preview.trace
        else:
            app.ui_state.preview_active_set = app.ui_state.last_active_set
            app.ui_state.preview_trace = app.ui_state.last_trace
        self.refresh_panels()

    @on(TextArea.Changed, "#composer_input")
    def handle_composer_changed(self, _event) -> None:
        self._schedule_preview_refresh()

    async def _send_turn(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        text = self._composer_text().strip()
        if not text or not app.ui_state.session_id:
            return
        outcome = await asyncio.to_thread(partial(app.runtime.chat, session_id=app.ui_state.session_id, user_text=text))
        app.ui_state.last_turn_id = outcome.turn["id"]
        app.ui_state.last_response = outcome.turn["membrane_text"]
        app.ui_state.last_reasoning = outcome.reasoning_text
        app.ui_state.last_active_set = outcome.active_set
        app.ui_state.last_trace = outcome.trace
        app.ui_state.preview_active_set = outcome.active_set
        app.ui_state.preview_trace = outcome.trace
        app.ui_state.current_budget = outcome.budget
        app.ui_state.current_profile = outcome.profile
        app.ui_state.last_feedback = f"Saved turn T{outcome.turn['turn_index']} from Brian the operator."
        self._set_text_area("#composer_input", "")
        self.refresh_panels()
        self._schedule_preview_refresh()

    async def submit_feedback(self, verdict: str, *, explanation: str, corrected: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.last_turn_id or not app.ui_state.session_id:
            app.ui_state.last_feedback = "No turn available for feedback."
            self.refresh_panels()
            return
        try:
            feedback = await asyncio.to_thread(
                partial(
                    app.runtime.apply_feedback,
                    session_id=app.ui_state.session_id,
                    turn_id=app.ui_state.last_turn_id,
                    verdict=verdict,
                    explanation=explanation,
                    corrected_text=corrected,
                )
            )
        except Exception as exc:
            app.ui_state.last_feedback = f"{verdict.upper()} failed: {exc}"
        else:
            app.ui_state.last_feedback = f"{feedback['verdict'].upper()} recorded at {feedback['created_at']}."
            self._schedule_preview_refresh()
        self.refresh_panels()

    @on(Button.Pressed, "#send_btn")
    async def handle_send(self) -> None:
        await self._send_turn()

    async def ingest_path(self, path: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        if not path:
            return
        await asyncio.to_thread(partial(app.runtime.ingest_document, experiment_id=app.ui_state.experiment_id, path=path))
        app.ui_state.last_feedback = f"Ingested document path: {path}"
        self.refresh_panels()
        self._schedule_preview_refresh()

    @on(Button.Pressed, "#export_btn")
    async def handle_export(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        paths = await asyncio.to_thread(
            partial(app.runtime.export_observability, experiment_id=app.ui_state.experiment_id, session_id=app.ui_state.session_id)
        )
        names = [Path(paths[key]).name for key in ("graph_html", "basin_html", "geometry_html") if key in paths]
        app.ui_state.last_feedback = f"Exports generated: {', '.join(names)}"
        self.refresh_panels()

    @on(Button.Pressed, "#observatory_btn")
    async def handle_observatory(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        status = await asyncio.to_thread(partial(app.runtime.start_observatory, reuse_existing=True))
        app.ui_state.observatory_status = status
        target_url = _observatory_target_url(app.runtime, status, app.ui_state.experiment_id)
        webbrowser.open(target_url)
        app.ui_state.last_feedback = (
            f"Observatory {'reused' if status['reused_existing'] else 'started'} at {target_url}"
        )
        self.refresh_panels()

    @on(Button.Pressed, "#review_btn")
    async def handle_review(self) -> None:
        await self.app.push_screen(FeedbackModal(self))

    @on(Button.Pressed, "#deck_btn")
    async def handle_deck(self) -> None:
        await self.app.push_screen(DeckModal(self))

    async def _new_session_worker(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        defaults = app.runtime.default_session_profile_request().to_dict()
        if app.ui_state.session_id:
            defaults.update(await asyncio.to_thread(partial(app.runtime.session_profile_request, app.ui_state.session_id)))
        payload = await app.push_screen_wait(
            SessionConfigModal(
                defaults,
                title_text="New Session Inference Profile",
                action_label="Open Session",
            )
        )
        if payload is None:
            return
        session = await asyncio.to_thread(
            partial(
                app.runtime.start_session,
                app.ui_state.experiment_id,
                title=payload["title"],
                profile_request=payload,
            )
        )
        app.apply_session_snapshot(
            {
                "experiment_id": app.ui_state.experiment_id,
                "experiment_name": app.ui_state.experiment_name,
                "session_id": session["id"],
                "session_title": session["title"],
                "last_turn_id": None,
                "last_response": "",
                "last_reasoning": "",
                "last_active_set": [],
                "last_trace": [],
                "current_budget": None,
                "current_profile": None,
            }
        )
        app.ui_state.last_feedback = "Opened a new session."
        self._set_text_area("#composer_input", "")
        self.refresh_panels()
        self._schedule_preview_refresh()

    def begin_new_session_flow(self) -> None:
        self.run_worker(self._new_session_worker(), exclusive=True, group="session")

    @on(Button.Pressed, "#new_session_btn")
    def handle_new_session(self) -> None:
        self.begin_new_session_flow()

    async def _edit_profile_worker(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.session_id:
            return
        defaults = await asyncio.to_thread(partial(app.runtime.session_profile_request, app.ui_state.session_id))
        defaults["title"] = app.ui_state.session_title or defaults.get("title", "Current Session")
        payload = await app.push_screen_wait(
            SessionConfigModal(
                defaults,
                title_text="Adjust Session Profile",
                action_label="Apply Profile",
                show_title_input=False,
            )
        )
        if payload is None:
            return
        updated = await asyncio.to_thread(
            partial(
                app.runtime.update_session_profile_request,
                app.ui_state.session_id,
                mode=payload["mode"],
                budget_mode=payload["budget_mode"],
                low_motion=payload["low_motion"],
                debug=payload["debug"],
                temperature=payload["temperature"],
                max_output_tokens=payload["max_output_tokens"],
                top_p=payload["top_p"],
                repetition_penalty=payload["repetition_penalty"],
                retrieval_depth=payload["retrieval_depth"],
                max_context_items=payload["max_context_items"],
                response_char_cap=payload["response_char_cap"],
            )
        )
        app.ui_state.last_feedback = (
            f"Updated session profile: {updated['mode']} / {updated['budget_mode']} / low_motion={updated['low_motion']}"
        )
        self.refresh_panels()
        self._schedule_preview_refresh()

    def begin_edit_profile_flow(self) -> None:
        self.run_worker(self._edit_profile_worker(), exclusive=True, group="profile")

    @on(Button.Pressed, "#profile_btn")
    def handle_profile(self) -> None:
        self.begin_edit_profile_flow()

    async def _launch_surface_worker(self, action: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if action == "resume":
            latest = app.runtime.store.get_latest_experiment()
            if latest is None:
                app.ui_state.last_feedback = "No experiment available to resume."
                self.refresh_panels()
                return
            latest_session = app.runtime.store.get_latest_session(latest["id"])
            if latest_session is None:
                app.ui_state.last_feedback = "Latest experiment has no saved session yet."
                self.refresh_panels()
                return
            snapshot = await asyncio.to_thread(partial(app.runtime.session_state_snapshot, latest_session["id"]))
            app.apply_session_snapshot(snapshot)
            app.ui_state.last_feedback = f"Resumed {snapshot['session_title']}."
            self._set_text_area("#composer_input", "")
            self.refresh_panels()
            self._schedule_preview_refresh()
            return
        defaults = app.runtime.default_session_profile_request().to_dict()
        payload = await app.push_screen_wait(
            SessionConfigModal(
                defaults,
                title_text=f"{action.title()} Experiment Session",
                action_label="Open Session",
            )
        )
        if payload is None:
            return
        experiment = await asyncio.to_thread(partial(app.runtime.initialize_experiment, action))
        session = await asyncio.to_thread(
            partial(
                app.runtime.start_session,
                experiment["id"],
                title=payload["title"],
                profile_request=payload,
            )
        )
        app.apply_session_snapshot(
            {
                "experiment_id": experiment["id"],
                "experiment_name": experiment["name"],
                "session_id": session["id"],
                "session_title": session["title"],
                "last_turn_id": None,
                "last_response": "",
                "last_reasoning": "",
                "last_active_set": [],
                "last_trace": [],
                "current_profile": None,
                "current_budget": None,
            }
        )
        app.ui_state.last_feedback = f"Opened a new {action} experiment session."
        self._set_text_area("#composer_input", "")
        self.refresh_panels()
        self._schedule_preview_refresh()

    def begin_surface_launch(self, action: str) -> None:
        self.run_worker(self._launch_surface_worker(action), exclusive=True, group=f"surface_{action}")

    async def toggle_motion(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.session_id:
            return
        current = await asyncio.to_thread(partial(app.runtime.session_profile_request, app.ui_state.session_id))
        updated = await asyncio.to_thread(
            partial(app.runtime.update_session_profile_request, app.ui_state.session_id, low_motion=not current.get("low_motion", False))
        )
        app.ui_state.last_feedback = f"low_motion={updated['low_motion']}"
        self._schedule_preview_refresh()
        self.refresh_panels()

    async def toggle_debug(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.session_id:
            return
        current = await asyncio.to_thread(partial(app.runtime.session_profile_request, app.ui_state.session_id))
        updated = await asyncio.to_thread(
            partial(app.runtime.update_session_profile_request, app.ui_state.session_id, debug=not current.get("debug", True))
        )
        app.ui_state.last_feedback = f"debug={updated['debug']}"
        self._schedule_preview_refresh()
        self.refresh_panels()

    async def handle_motion(self) -> None:
        await self.toggle_motion()

    async def handle_debug(self) -> None:
        await self.toggle_debug()

    @on(Button.Pressed, "#help_btn")
    async def handle_help(self) -> None:
        await self.app.push_screen(HelpModal())


class EdenTuiApp(App):
    CSS = f"""
    Screen {{
        background: {BG};
        color: {TEXT};
    }}
    #startup_shell, #chat_shell {{
        height: 1fr;
        padding: 1 1;
    }}
    #startup_shell {{
        layout: horizontal;
    }}
    #chat_shell {{
        layout: vertical;
    }}
    #chat_top {{
        layout: horizontal;
    }}
    .column {{
        width: 1fr;
        margin: 0 1;
    }}
    #operator_column {{
        width: 42%;
        padding: 0 1;
    }}
    #ritual_column {{
        width: 58%;
        padding: 0 1;
    }}
    #session_ribbon {{
        height: 6;
    }}
    #operator_status_panel {{
        height: 5;
    }}
    #ritual_panel {{
        height: 12;
    }}
    #response_panel {{
        height: 12;
    }}
    #ritual_status_panel {{
        height: 6;
    }}
    #composer_input {{
        height: 12;
        background: #060403;
        border: tall {AMBER};
        color: {TEXT};
    }}
    #review_explanation_input, #review_corrected_input {{
        height: 6;
        background: #060403;
        border: tall {AMBER};
        color: {TEXT};
    }}
    #forensic_log {{
        height: 1fr;
    }}
    Static, Input, RichLog, Select, TextArea {{
        margin-bottom: 1;
    }}
    Input, Select {{
        background: {PANEL};
        border: tall {AMBER};
        color: {TEXT};
    }}
    Button {{
        margin-right: 1;
        background: #201208;
        color: {TEXT};
    }}
    RichLog {{
        background: #060403;
        border: tall {AMBER};
        color: {TEXT};
    }}
    #deck_shell, #session_config_shell {{
        padding: 1 1;
    }}
    .deck_column, .session_config_column {{
        width: 1fr;
        padding: 0 1;
    }}
    #deck_summary, #review_summary, #session_config_header, #session_config_summary {{
        margin: 1 2;
    }}
    #deck_status_panel {{
        height: 1fr;
    }}
    #session_config_shell {{
        padding: 1 1;
    }}
    """
    BINDINGS = [
        ("f1", "show_help", "Help"),
        ("ctrl+s", "send_turn", "Send"),
        ("f2", "export_all", "Export"),
        ("f3", "toggle_observatory", "Observatory"),
        ("f4", "toggle_motion", "Motion"),
        ("f5", "new_session", "New Session"),
        ("f6", "show_deck", "Deck"),
    ]

    def __init__(self, runtime: EdenRuntime) -> None:
        super().__init__()
        self.runtime = runtime
        self.repo_root = Path(__file__).resolve().parents[2]
        self.ui_state = UiState()

    def apply_session_snapshot(self, snapshot: dict[str, Any]) -> None:
        self.ui_state.experiment_id = snapshot["experiment_id"]
        self.ui_state.experiment_name = snapshot.get("experiment_name")
        self.ui_state.session_id = snapshot["session_id"]
        self.ui_state.session_title = snapshot.get("session_title")
        self.ui_state.last_turn_id = snapshot.get("last_turn_id")
        self.ui_state.last_response = snapshot.get("last_response", "")
        self.ui_state.last_reasoning = snapshot.get("last_reasoning", "")
        self.ui_state.last_active_set = list(snapshot.get("last_active_set") or [])
        self.ui_state.last_trace = list(snapshot.get("last_trace") or [])
        self.ui_state.preview_active_set = list(snapshot.get("last_active_set") or [])
        self.ui_state.preview_trace = list(snapshot.get("last_trace") or [])
        self.ui_state.current_profile = snapshot.get("current_profile")
        self.ui_state.current_budget = snapshot.get("current_budget")

    async def on_mount(self) -> None:
        await self.push_screen(StartupScreen())

    async def action_show_help(self) -> None:
        await self.push_screen(HelpModal())

    async def action_show_deck(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_deck()

    async def action_send_turn(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen._send_turn()

    async def action_export_all(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_export()

    async def action_toggle_observatory(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_observatory()

    async def action_toggle_motion(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_motion()

    async def action_new_session(self) -> None:
        if isinstance(self.screen, ChatScreen):
            self.screen.begin_new_session_flow()


def run_tui(runtime: EdenRuntime) -> None:
    EdenTuiApp(runtime).run()
