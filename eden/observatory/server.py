from __future__ import annotations

import http.server
import socketserver
import threading
from pathlib import Path


class ObservatoryServer:
    def __init__(self, root: Path, port: int) -> None:
        self.root = root
        self.port = port
        self._thread: threading.Thread | None = None
        self._httpd: socketserver.TCPServer | None = None

    @property
    def running(self) -> bool:
        return self._thread is not None and self._thread.is_alive()

    def start(self) -> str:
        if self.running:
            return f"http://127.0.0.1:{self.port}/"
        self.root.mkdir(parents=True, exist_ok=True)
        handler = lambda *args, **kwargs: http.server.SimpleHTTPRequestHandler(*args, directory=str(self.root), **kwargs)
        self._httpd = socketserver.TCPServer(("127.0.0.1", self.port), handler)
        self._thread = threading.Thread(target=self._httpd.serve_forever, daemon=True)
        self._thread.start()
        return f"http://127.0.0.1:{self.port}/"

    def stop(self) -> None:
        if self._httpd is not None:
            self._httpd.shutdown()
            self._httpd.server_close()
            self._httpd = None
        self._thread = None
