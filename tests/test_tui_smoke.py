from __future__ import annotations

import pytest

from textual.widgets import Button

from eden.tui.app import ChatScreen, EdenTuiApp


@pytest.mark.asyncio
async def test_tui_boots_and_can_enter_blank_mode(runtime) -> None:
    app = EdenTuiApp(runtime)
    async with app.run_test() as pilot:
        await pilot.pause()
        button = app.screen.query_one("#blank_btn", Button)
        button.press()
        await pilot.pause(1.2)
        assert isinstance(app.screen, ChatScreen)
        assert app.screen.query_one("#response_panel")
