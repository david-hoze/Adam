from __future__ import annotations

from pathlib import Path

import pytest

from textual.widgets import Button, Input, Select, TextArea

from eden.tui.app import ChatScreen, EdenTuiApp


@pytest.mark.asyncio
async def test_tui_boots_blank_mode_and_uses_multiline_composer(runtime, sample_files) -> None:
    app = EdenTuiApp(runtime)
    async with app.run_test() as pilot:
        assert isinstance(app.screen, ChatScreen)
        await pilot.pause(1.0)
        assert app.ui_state.session_id is not None
        chat_primary = app.screen.query_one("#chat_primary")
        chat_secondary = app.screen.query_one("#chat_secondary")
        assert app.screen.query_one("#chat_deck").parent is chat_primary
        assert app.screen.query_one("#signal_field").parent is chat_secondary
        assert app.screen.query_one("#action_bus_panel")
        assert app.screen.query_one("#header_ingest_btn", Button)
        aperture_button = app.screen.query_one("#header_aperture_btn", Button)
        menu = app.screen.query_one("#runtime_action_menu", Select)
        assert str(menu.value) == "review"
        await pilot.press("tab")
        await pilot.pause(0.2)
        assert getattr(app.focused, "id", None) == "runtime_action_menu"
        await pilot.press("h", "i")
        await pilot.pause(0.2)
        composer = app.screen.query_one("#composer_input", TextArea)
        assert composer.text == "hi"
        aperture_button.press()
        await pilot.pause(0.2)
        assert app.ui_state.aperture_drawer_open is True
        assert app.screen.query_one("#aperture_drawer_panel")
        await app.screen.ingest_path(
            str(sample_files["pdf"]),
            briefing="Treat this PDF as a durable source on EDEN memory and retrieve it aggressively in later turns.",
        )
        await pilot.pause(0.4)
        assert app.ui_state.last_ingest_result is not None
        assert app.ui_state.last_ingest_result["title"] == sample_files["pdf"].name
        assert app.ui_state.last_ingest_result["briefing_indexed"] is True
        composer.load_text("line one\nline two")
        await pilot.pause()
        assert "\n" in composer.text
        await app.screen._send_turn()
        await pilot.pause(0.4)
        assert app.ui_state.last_turn_id is not None
        assert app.ui_state.last_response
        assert "Answer:" not in app.ui_state.last_response
        assert "Basis:" not in app.ui_state.last_response
        assert app.screen.query_one("#active_aperture_panel")
        assert app.screen.query_one("#thinking_panel")
        assert app.screen.query_one("#chat_tape")
        assert app.screen.query_one("#chat_exchange_panel")
        assert app.screen.query_one("#feedback_loop_panel")
        assert app.screen.query_one("#signal_field")
        assert app.screen.query_one("#runtime_chyron_panel")
        assert app.ui_state.conversation_log_path is not None
        transcript_path = Path(app.ui_state.conversation_log_path)
        assert transcript_path.exists()
        assert "line one" in transcript_path.read_text(encoding="utf-8")
        assert "Answer:" not in transcript_path.read_text(encoding="utf-8")
        await app.action_show_review()
        await pilot.pause(0.2)
        assert getattr(app.focused, "id", None) == "inline_feedback_verdict_input"
        verdict = app.screen.query_one("#inline_feedback_verdict_input", Input)
        verdict.value = "A"
        await pilot.pause(0.2)
        explanation = app.screen.query_one("#inline_feedback_explanation_input", TextArea)
        explanation.load_text("Accepting because the reply matches the session frame.")
        confirm = app.screen.query_one("#inline_feedback_confirm_input", Input)
        confirm.value = "Y"
        await app.screen._submit_inline_feedback_from_fields()
        await pilot.pause(0.4)
        assert "ACCEPT recorded" in app.ui_state.last_feedback
        assert runtime.graph_health(app.ui_state.experiment_id)["feedback"] == 1
        transcript_text = transcript_path.read_text(encoding="utf-8")
        assert "ACCEPT" in transcript_text
