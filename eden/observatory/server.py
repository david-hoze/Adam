from __future__ import annotations

import http.server
import json
import socket
import threading
import urllib.error
import urllib.request
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from ..utils import now_utc


SERVER_INFO_FILENAME = ".eden_observatory.json"


class _ThreadingHTTPServer(http.server.ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True


class _QuietStaticHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: Any) -> None:  # pragma: no cover - noisy stdio suppression
        return


@dataclass(slots=True)
class ObservatoryStatus:
    host: str
    port: int
    root: str
    url: str
    info_url: str
    server_type: str
    started_at: str
    reused_existing: bool
    owned_by_process: bool
    pid: int


class ObservatoryServer:
    def __init__(self, root: Path, port: int, *, host: str = "127.0.0.1", port_span: int = 24) -> None:
        self.root = root.resolve()
        self.host = host
        self.port = port
        self.port_span = port_span
        self._thread: threading.Thread | None = None
        self._httpd: _ThreadingHTTPServer | None = None
        self._status: ObservatoryStatus | None = None

    @property
    def info_path(self) -> Path:
        return self.root / SERVER_INFO_FILENAME

    @property
    def running(self) -> bool:
        return self._thread is not None and self._thread.is_alive() and self._httpd is not None

    def start(
        self,
        *,
        host: str | None = None,
        port: int | None = None,
        reuse_existing: bool = True,
    ) -> ObservatoryStatus:
        target_host = host or self.host
        target_port = port or self.port
        if self.running and self._status is not None:
            return self._status

        self.root.mkdir(parents=True, exist_ok=True)

        if reuse_existing:
            reused = self._probe_same_root(host=target_host, port=target_port)
            if reused is None:
                reused = self._probe_from_info_file(expected_root=self.root)
            if reused is not None:
                self._status = reused
                return reused

        actual_port = self._discover_port(target_host, target_port)
        handler = self._make_handler(self.root)
        self._httpd = _ThreadingHTTPServer((target_host, actual_port), handler)
        self._thread = threading.Thread(target=self._httpd.serve_forever, daemon=True)
        self._thread.start()
        self._status = ObservatoryStatus(
            host=target_host,
            port=actual_port,
            root=str(self.root),
            url=f"http://{target_host}:{actual_port}/",
            info_url=f"http://{target_host}:{actual_port}/{SERVER_INFO_FILENAME}",
            server_type="eden_observatory",
            started_at=now_utc(),
            reused_existing=False,
            owned_by_process=True,
            pid=self._process_id(),
        )
        self._write_info_file(self._status)
        return self._status

    def stop(self) -> bool:
        was_owned = self.running and self._httpd is not None
        if self._httpd is not None:
            self._httpd.shutdown()
            self._httpd.server_close()
            self._httpd = None
        if self._thread is not None:
            self._thread.join(timeout=2.0)
            self._thread = None
        if was_owned and self.info_path.exists():
            try:
                self.info_path.unlink()
            except OSError:
                pass
        self._status = None
        return was_owned

    def status(self) -> ObservatoryStatus | None:
        if self.running and self._status is not None:
            return self._status
        return self._probe_from_info_file(expected_root=self.root)

    def _process_id(self) -> int:
        import os

        return os.getpid()

    def _make_handler(self, root: Path):
        def factory(*args: Any, **kwargs: Any):
            return _QuietStaticHandler(*args, directory=str(root), **kwargs)

        return factory

    def _is_port_available(self, host: str, port: int) -> bool:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind((host, port))
            except OSError:
                return False
        return True

    def _discover_port(self, host: str, preferred_port: int) -> int:
        for candidate in range(preferred_port, preferred_port + self.port_span + 1):
            if self._is_port_available(host, candidate):
                return candidate
        raise RuntimeError(
            f"No free observatory port found in {host}:{preferred_port}-{preferred_port + self.port_span}."
        )

    def _probe_same_root(self, *, host: str, port: int) -> ObservatoryStatus | None:
        return self._probe_remote_info(host=host, port=port, expected_root=self.root)

    def _probe_from_info_file(self, *, expected_root: Path) -> ObservatoryStatus | None:
        if not self.info_path.exists():
            return None
        try:
            payload = json.loads(self.info_path.read_text(encoding="utf-8"))
            host = str(payload["host"])
            port = int(payload["port"])
        except (OSError, ValueError, KeyError, json.JSONDecodeError):
            return None
        return self._probe_remote_info(host=host, port=port, expected_root=expected_root)

    def _probe_remote_info(self, *, host: str, port: int, expected_root: Path) -> ObservatoryStatus | None:
        url = f"http://{host}:{port}/{SERVER_INFO_FILENAME}"
        try:
            with urllib.request.urlopen(url, timeout=0.35) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except (OSError, urllib.error.URLError, json.JSONDecodeError):
            return None
        root = Path(str(payload.get("root", ""))).resolve()
        if payload.get("server_type") != "eden_observatory" or root != expected_root.resolve():
            return None
        return ObservatoryStatus(
            host=str(payload["host"]),
            port=int(payload["port"]),
            root=str(root),
            url=str(payload["url"]),
            info_url=str(payload["info_url"]),
            server_type=str(payload["server_type"]),
            started_at=str(payload["started_at"]),
            reused_existing=True,
            owned_by_process=False,
            pid=int(payload.get("pid", 0) or 0),
        )

    def _write_info_file(self, status: ObservatoryStatus) -> None:
        self.info_path.write_text(json.dumps(asdict(status), indent=2), encoding="utf-8")
