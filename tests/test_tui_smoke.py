from __future__ import annotations

import pytest

from textual.widgets import Button, TextArea

from eden.tui.app import ChatScreen, EdenTuiApp


@pytest.mark.asyncio
async def test_tui_boots_blank_mode_and_uses_multiline_composer(runtime) -> None:
    app = EdenTuiApp(runtime)
    async with app.run_test() as pilot:
        await pilot.pause()
        app.screen.query_one("#blank_btn", Button).press()
        await pilot.pause(0.6)
        app.screen.query_one("#session_confirm_btn", Button).press()
        await pilot.pause(1.4)
        assert isinstance(app.screen, ChatScreen)
        composer = app.screen.query_one("#composer_input", TextArea)
        composer.load_text("line one\nline two")
        await pilot.pause()
        assert "\n" in composer.text
        assert app.screen.query_one("#ritual_panel")
        assert app.screen.query_one("#forensic_log")
        app.screen.query_one("#deck_btn", Button).press()
        await pilot.pause()
        assert app.screen.query_one("#deck_budget_panel")
