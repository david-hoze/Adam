from __future__ import annotations

import pytest

from textual.widgets import Select, TextArea

from eden.tui.app import ChatScreen, EdenTuiApp


@pytest.mark.asyncio
async def test_tui_boots_blank_mode_and_uses_multiline_composer(runtime, sample_files) -> None:
    app = EdenTuiApp(runtime)
    async with app.run_test() as pilot:
        assert isinstance(app.screen, ChatScreen)
        await pilot.pause(1.0)
        assert app.ui_state.session_id is not None
        menu = app.screen.query_one("#runtime_action_menu", Select)
        assert str(menu.value) == "review"
        await pilot.press("tab")
        await pilot.pause(0.2)
        assert getattr(app.focused, "id", None) == "runtime_action_menu"
        await pilot.press("h", "i")
        await pilot.pause(0.2)
        composer = app.screen.query_one("#composer_input", TextArea)
        assert composer.text == "hi"
        await app.action_toggle_aperture()
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
        assert app.screen.query_one("#active_aperture_panel")
        assert app.screen.query_one("#thinking_panel")
        assert app.screen.query_one("#feedback_panel")
        assert app.screen.query_one("#conversation_loop_panel")
        assert app.screen.query_one("#chat_exchange_panel")
        assert app.screen.query_one("#feedback_loop_panel")
        assert app.screen.query_one("#signal_field")
        assert app.screen.query_one("#ritual_panel")
        assert app.screen.query_one("#forensic_log")
        await app.screen.submit_feedback("skip", explanation="", corrected="")
        await pilot.pause(0.2)
        assert "SKIP recorded" in app.ui_state.last_feedback
