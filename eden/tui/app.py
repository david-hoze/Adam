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
from textual.widgets import Button, Footer, Header, Input, RichLog, Static

from ..runtime import EdenRuntime
from ..utils import safe_excerpt


AMBER = "#ffbf66"
TEXT = "#ffe2af"
MUTED = "#b88646"
BG = "#090603"


@dataclass(slots=True)
class UiState:
    experiment_id: str | None = None
    session_id: str | None = None
    last_turn_id: str | None = None
    last_response: str = ""
    last_active_set: list[dict[str, Any]] | None = None
    last_trace: list[dict[str, Any]] | None = None
    last_feedback: str = "No feedback applied yet."
    observatory_url: str | None = None


class HelpModal(ModalScreen[None]):
    def compose(self) -> ComposeResult:
        help_text = Text.from_markup(
            "[bold #ffbf66]EDEN Controls[/]\n\n"
            "[bold]F1[/] help overlay\n"
            "[bold]Ctrl+S[/] send current input\n"
            "[bold]F2[/] export graph + basin\n"
            "[bold]F3[/] toggle observatory server\n"
            "[bold]F4[/] toggle low motion\n"
            "[bold]F5[/] reset with a new session\n"
            "[bold]Esc[/] close this overlay\n\n"
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


class AdamSigil(Static):
    FRAMES = [
        [
            "        .-''''-.",
            "     .-'  ADAM  '-.",
            "    /  aperture:01  \\",
            "   |    regard>mem   |",
            "   |    membrane ok  |",
            "    \\  trace alive  /",
            "     '-._______.-'",
        ],
        [
            "        .-''''-.",
            "     .-'  ADAM  '-.",
            "    /  aperture:02  \\",
            "   |    regard>>me  |",
            "   |   membrane ++  |",
            "    \\  trace alive  /",
            "     '-._______.-'",
        ],
        [
            "        .-''''-.",
            "     .-'  ADAM  '-.",
            "    /  aperture:03  \\",
            "   |    regard>>>m  |",
            "   |  membrane flex |",
            "    \\  trace alive  /",
            "     '-._______.-'",
        ],
    ]

    def on_mount(self) -> None:
        self.border_title = "Adam Core"
        self.set_interval(0.85, self._tick)
        self._frame = 0
        self._tick()

    def _tick(self) -> None:
        app = self.app
        if not isinstance(app, EdenTuiApp):
            return
        if app.runtime.settings.low_motion:
            self._frame = 0
        else:
            self._frame = (self._frame + 1) % len(self.FRAMES)
        frame = self.FRAMES[self._frame]
        active = len(app.ui_state.last_active_set or [])
        response = safe_excerpt(app.ui_state.last_response or "Awaiting first turn.", limit=88)
        lines = "\n".join(frame)
        text = Text.from_markup(
            f"[bold {AMBER}]{lines}[/]\n\n"
            f"[{MUTED}]active-set={active} backend={app.runtime.settings.model_backend}[/]\n"
            f"[{TEXT}]{response}[/]"
        )
        self.update(Panel(text, border_style=AMBER))


class StartupScreen(Screen):
    def __init__(self) -> None:
        super().__init__()
        self._seen_log_count = 0

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with Horizontal(id="startup_shell"):
            with Vertical(classes="column"):
                yield Static(id="startup_summary")
                yield Input(value="mock", id="backend_input", placeholder="backend: mock or mlx")
                yield Input(id="model_path_input", placeholder="MLX model path (required when backend=mlx)")
                with Horizontal():
                    yield Button("Blank Eden", id="blank_btn", variant="primary")
                    yield Button("Seeded Eden", id="seeded_btn")
                    yield Button("Resume Latest", id="resume_btn")
                yield Static(id="startup_hint")
            with Vertical(classes="column"):
                yield RichLog(id="startup_log", wrap=True, auto_scroll=True, highlight=True)
        yield Footer()

    def on_mount(self) -> None:
        self.query_one("#startup_summary", Static).update(self._summary_text())
        self.query_one("#startup_hint", Static).update(
            Panel(
                Text.from_markup(
                    f"[bold {AMBER}]Startup Contract[/]\n"
                    "- choose Blank Eden or Seeded Eden\n"
                    "- MLX uses the supplied model path\n"
                    "- seeded mode ingests the local canonical source bundle\n"
                    "- resume opens the latest experiment and starts a new session"
                ),
                title="Launch Surface",
                border_style=AMBER,
            )
        )
        self.set_interval(0.6, self._poll_logs)

    def _summary_text(self) -> Panel:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        controls = ["model_backend", "model_path", "retrieval_depth", "low_motion", "debug"]
        content = Text.from_markup(
            f"[bold {AMBER}]EDEN / ADAM[/]\n"
            f"repo={app.repo_root}\n"
            f"seed_canon={len(list((app.repo_root / 'assets' / 'seed_canon').rglob('*.pdf')))} pdf files\n"
            f"db={app.repo_root / 'data' / 'eden.db'}\n"
            f"exports={app.repo_root / 'exports'}\n"
            f"controls={', '.join(controls)}"
        )
        return Panel(content, title="Startup Summary", border_style=AMBER)

    def _poll_logs(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        events = app.runtime.runtime_log.recent(200)
        widget = self.query_one("#startup_log", RichLog)
        for event in events[self._seen_log_count :]:
            widget.write(f"[{event.level}] {event.event} :: {event.message} {event.payload}")
        self._seen_log_count = len(events)

    async def _bootstrap(self, mode: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        backend = self.query_one("#backend_input", Input).value.strip().lower() or "mock"
        model_path = self.query_one("#model_path_input", Input).value.strip() or None
        app.runtime.settings.model_backend = backend
        app.runtime.settings.model_path = model_path
        experiment = await asyncio.to_thread(partial(app.runtime.initialize_experiment, mode))
        session = await asyncio.to_thread(partial(app.runtime.start_session, experiment["id"]))
        app.ui_state.experiment_id = experiment["id"]
        app.ui_state.session_id = session["id"]
        await app.push_screen(ChatScreen())

    @on(Button.Pressed, "#blank_btn")
    async def handle_blank(self) -> None:
        await self._bootstrap("blank")

    @on(Button.Pressed, "#seeded_btn")
    async def handle_seeded(self) -> None:
        await self._bootstrap("seeded")

    @on(Button.Pressed, "#resume_btn")
    async def handle_resume(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        latest = app.runtime.store.get_latest_experiment()
        if latest is None:
            self.query_one("#startup_log", RichLog).write("[WARN] No existing experiment. Create one first.")
            return
        session = await asyncio.to_thread(partial(app.runtime.start_session, latest["id"], title="Resumed session"))
        app.ui_state.experiment_id = latest["id"]
        app.ui_state.session_id = session["id"]
        await app.push_screen(ChatScreen())


class ChatScreen(Screen):
    def __init__(self) -> None:
        super().__init__()
        self._seen_log_count = 0

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with Horizontal(id="chat_shell"):
            with Vertical(id="left_column"):
                yield Static(id="control_panel")
                with Horizontal():
                    yield Button("Export", id="export_btn", variant="primary")
                    yield Button("Observatory", id="observatory_btn")
                    yield Button("New Session", id="new_session_btn")
                with Horizontal():
                    yield Button("Low Motion", id="motion_btn")
                    yield Button("Debug", id="debug_btn")
                    yield Button("Help", id="help_btn")
                yield Input(value="12", id="retrieval_depth_input", placeholder="retrieval depth")
                yield Input(id="ingest_path_input", placeholder="document path (.pdf/.csv/.txt/.md)")
                yield Button("Ingest Document", id="ingest_btn")
                yield Static(id="telemetry_panel")
                yield Static(id="history_panel")
            with Vertical(id="center_column"):
                yield AdamSigil(id="sigil_panel")
                yield Static(id="response_panel")
                with Vertical(id="input_panel"):
                    yield Input(id="composer_input", placeholder="Type to Adam and press Ctrl+S or Send")
                    yield Button("Send", id="send_btn", variant="success")
                with Vertical(id="feedback_panel"):
                    yield Input(id="feedback_explanation", placeholder="feedback explanation (required for accept/reject/edit)")
                    yield Input(id="feedback_corrected", placeholder="corrected answer (required for edit)")
                    with Horizontal():
                        yield Button("Accept", id="accept_btn")
                        yield Button("Edit", id="edit_btn")
                        yield Button("Reject", id="reject_btn")
                        yield Button("Skip", id="skip_btn")
                    yield Static(id="feedback_status")
            with Vertical(id="right_column"):
                yield Static(id="active_set_panel")
                yield Static(id="trace_panel")
                yield RichLog(id="forensic_log", wrap=True, auto_scroll=True, highlight=True)
        yield Footer()

    def on_mount(self) -> None:
        self.set_interval(0.6, self._poll_logs)
        self.set_interval(1.0, self.refresh_panels)
        self.refresh_panels()

    def refresh_panels(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id or not app.ui_state.session_id:
            return
        health = app.runtime.graph_health(app.ui_state.experiment_id)
        control_text = Text.from_markup(
            f"[bold {AMBER}]Control Surface[/]\n"
            f"experiment={app.ui_state.experiment_id}\n"
            f"session={app.ui_state.session_id}\n"
            f"backend={app.runtime.settings.model_backend}\n"
            f"observatory={app.ui_state.observatory_url or 'offline'}\n"
            f"last_turn={app.ui_state.last_turn_id or 'none'}"
        )
        self.query_one("#control_panel", Static).update(Panel(control_text, title="Command Surface", border_style=AMBER))
        telemetry_text = Text.from_markup(
            f"[bold {AMBER}]Graph Health[/]\n"
            f"memes={health['memes']} memodes={health['memodes']} edges={health['edges']}\n"
            f"turns={health['turns']} feedback={health['feedback']} docs={health['documents']}\n"
            f"triadic_closure={health['triadic_closure']:.3f}\n"
            f"dyad_ratio={health['dyad_ratio']:.3f}\n"
            f"memode_coverage={health['memode_coverage']:.3f}\n"
            f"isolated_count={health['isolated_count']:.0f}"
        )
        self.query_one("#telemetry_panel", Static).update(Panel(telemetry_text, title="Telemetry / Graph Stats", border_style=AMBER))
        history = app.runtime.store.summarize_history(app.ui_state.session_id, limit=6)
        history_text = Text.from_markup(f"[bold {AMBER}]Recent Turns[/]\n" + ("\n".join(history) if history else "No turns yet."))
        self.query_one("#history_panel", Static).update(Panel(history_text, title="Bounded History", border_style=AMBER))
        response_text = app.ui_state.last_response or "No response yet."
        self.query_one("#response_panel", Static).update(
            Panel(Text(response_text, style=TEXT), title="Adam Response", border_style=AMBER)
        )
        feedback_text = app.ui_state.last_feedback
        self.query_one("#feedback_status", Static).update(
            Panel(Text(feedback_text, style=MUTED), title="Feedback Status", border_style=AMBER)
        )
        active_lines = []
        for item in (app.ui_state.last_active_set or [])[:8]:
            active_lines.append(
                f"{item['label']} [{item['domain']}] sel={item['selection']:.2f} reg={item['regard']:.2f}"
            )
        active_text = Text.from_markup(f"[bold {AMBER}]Active Set[/]\n" + ("\n".join(active_lines) if active_lines else "No active set yet."))
        self.query_one("#active_set_panel", Static).update(Panel(active_text, title="Aperture / Active Set", border_style=AMBER))
        trace_lines = []
        for item in (app.ui_state.last_trace or [])[:10]:
            trace_lines.append(
                f"{item['label']} :: sel={item['selection']:.2f} sim={item['semantic_similarity']:.2f} act={item['activation']:.2f}"
            )
        trace_text = Text.from_markup(
            f"[bold {AMBER}]Decision Trace[/]\n"
            "Operator-visible retrieval and membrane surfaces only.\n\n"
            + ("\n".join(trace_lines) if trace_lines else "No trace yet.")
        )
        self.query_one("#trace_panel", Static).update(Panel(trace_text, title="Cogitation / Decision Trace", border_style=AMBER))

    def _poll_logs(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        events = app.runtime.runtime_log.recent(200)
        widget = self.query_one("#forensic_log", RichLog)
        for event in events[self._seen_log_count :]:
            widget.write(f"[{event.level}] {event.event} :: {event.message} {event.payload}")
        self._seen_log_count = len(events)

    def _sync_settings(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        raw_depth = self.query_one("#retrieval_depth_input", Input).value.strip()
        if raw_depth.isdigit():
            app.runtime.settings.retrieval_depth = max(4, min(40, int(raw_depth)))
            app.runtime.settings.max_context_items = max(4, min(12, int(raw_depth) // 2))

    async def _send_turn(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        self._sync_settings()
        composer = self.query_one("#composer_input", Input)
        text = composer.value.strip()
        if not text or not app.ui_state.session_id:
            return
        outcome = await asyncio.to_thread(partial(app.runtime.chat, session_id=app.ui_state.session_id, user_text=text))
        app.ui_state.last_turn_id = outcome.turn["id"]
        app.ui_state.last_response = outcome.turn["membrane_text"]
        app.ui_state.last_active_set = outcome.active_set
        app.ui_state.last_trace = outcome.trace
        composer.value = ""
        self.refresh_panels()

    async def _apply_feedback(self, verdict: str) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.last_turn_id or not app.ui_state.session_id:
            app.ui_state.last_feedback = "No turn available for feedback."
            self.refresh_panels()
            return
        explanation = self.query_one("#feedback_explanation", Input).value
        corrected = self.query_one("#feedback_corrected", Input).value
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
            self.query_one("#feedback_explanation", Input).value = ""
            self.query_one("#feedback_corrected", Input).value = ""
        self.refresh_panels()

    @on(Button.Pressed, "#send_btn")
    async def handle_send(self) -> None:
        await self._send_turn()

    @on(Button.Pressed, "#accept_btn")
    async def handle_accept(self) -> None:
        await self._apply_feedback("accept")

    @on(Button.Pressed, "#edit_btn")
    async def handle_edit(self) -> None:
        await self._apply_feedback("edit")

    @on(Button.Pressed, "#reject_btn")
    async def handle_reject(self) -> None:
        await self._apply_feedback("reject")

    @on(Button.Pressed, "#skip_btn")
    async def handle_skip(self) -> None:
        await self._apply_feedback("skip")

    @on(Button.Pressed, "#ingest_btn")
    async def handle_ingest(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        path = self.query_one("#ingest_path_input", Input).value.strip()
        if not path:
            return
        await asyncio.to_thread(partial(app.runtime.ingest_document, experiment_id=app.ui_state.experiment_id, path=path))
        self.query_one("#ingest_path_input", Input).value = ""
        self.refresh_panels()

    @on(Button.Pressed, "#export_btn")
    async def handle_export(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        paths = await asyncio.to_thread(
            partial(app.runtime.export_observability, experiment_id=app.ui_state.experiment_id, session_id=app.ui_state.session_id)
        )
        app.ui_state.last_feedback = f"Exports generated: {Path(paths['graph_html']).name}, {Path(paths['basin_html']).name}"
        self.refresh_panels()

    @on(Button.Pressed, "#observatory_btn")
    async def handle_observatory(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if app.runtime.observatory_server.running:
            await asyncio.to_thread(app.runtime.stop_observatory)
            app.ui_state.observatory_url = None
        else:
            url = await asyncio.to_thread(app.runtime.start_observatory)
            app.ui_state.observatory_url = url
            if app.ui_state.experiment_id:
                paths = await asyncio.to_thread(
                    partial(app.runtime.export_observability, experiment_id=app.ui_state.experiment_id, session_id=app.ui_state.session_id)
                )
                webbrowser.open(url + f"{app.ui_state.experiment_id}/{Path(paths['graph_html']).name}")
        self.refresh_panels()

    @on(Button.Pressed, "#new_session_btn")
    async def handle_new_session(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        if not app.ui_state.experiment_id:
            return
        session = await asyncio.to_thread(partial(app.runtime.start_session, app.ui_state.experiment_id, title="New operator session"))
        app.ui_state.session_id = session["id"]
        app.ui_state.last_turn_id = None
        app.ui_state.last_response = ""
        app.ui_state.last_active_set = []
        app.ui_state.last_trace = []
        app.ui_state.last_feedback = "Opened a new session."
        self.refresh_panels()

    @on(Button.Pressed, "#motion_btn")
    def handle_motion(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        app.runtime.settings.low_motion = not app.runtime.settings.low_motion
        app.ui_state.last_feedback = f"low_motion={app.runtime.settings.low_motion}"
        self.refresh_panels()

    @on(Button.Pressed, "#debug_btn")
    def handle_debug(self) -> None:
        app = self.app
        assert isinstance(app, EdenTuiApp)
        app.runtime.settings.debug = not app.runtime.settings.debug
        app.ui_state.last_feedback = f"debug={app.runtime.settings.debug}"
        self.refresh_panels()

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
    .column {{
        width: 1fr;
        margin: 0 1;
    }}
    #left_column {{
        width: 34%;
        padding: 0 1;
    }}
    #center_column {{
        width: 33%;
        padding: 0 1;
    }}
    #right_column {{
        width: 33%;
        padding: 0 1;
    }}
    Static, Input, RichLog {{
        margin-bottom: 1;
    }}
    Input {{
        background: #140d05;
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
    """
    BINDINGS = [
        ("f1", "show_help", "Help"),
        ("ctrl+s", "send_turn", "Send"),
        ("f2", "export_all", "Export"),
        ("f3", "toggle_observatory", "Observatory"),
        ("f4", "toggle_motion", "Motion"),
        ("f5", "new_session", "New Session"),
    ]

    def __init__(self, runtime: EdenRuntime) -> None:
        super().__init__()
        self.runtime = runtime
        self.repo_root = Path(__file__).resolve().parents[2]
        self.ui_state = UiState()

    async def on_mount(self) -> None:
        await self.push_screen(StartupScreen())

    async def action_show_help(self) -> None:
        await self.push_screen(HelpModal())

    async def action_send_turn(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen._send_turn()

    async def action_export_all(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_export()

    async def action_toggle_observatory(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_observatory()

    def action_toggle_motion(self) -> None:
        if isinstance(self.screen, ChatScreen):
            self.screen.handle_motion()

    async def action_new_session(self) -> None:
        if isinstance(self.screen, ChatScreen):
            await self.screen.handle_new_session()


def run_tui(runtime: EdenRuntime) -> None:
    EdenTuiApp(runtime).run()
