from __future__ import annotations

import socket

from eden.observatory.server import ObservatoryServer


def test_observatory_server_starts_on_requested_free_port(tmp_path) -> None:
    root = tmp_path / "exports"
    server = ObservatoryServer(root, 8861)
    status = server.start()
    try:
        assert status.port == 8861
        assert status.owned_by_process is True
        assert status.reused_existing is False
    finally:
        server.stop()


def test_observatory_server_chooses_next_free_port_when_requested_port_is_busy(tmp_path) -> None:
    blocker = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    blocker.bind(("127.0.0.1", 8862))
    blocker.listen(1)
    root = tmp_path / "exports"
    server = ObservatoryServer(root, 8862)
    try:
        status = server.start()
        assert status.port != 8862
        assert status.port >= 8863
    finally:
        server.stop()
        blocker.close()


def test_observatory_server_reuses_existing_same_root(tmp_path) -> None:
    root = tmp_path / "exports"
    server1 = ObservatoryServer(root, 8864)
    status1 = server1.start()
    server2 = ObservatoryServer(root, 8864)
    try:
        status2 = server2.start()
        assert status1.port == status2.port
        assert status2.reused_existing is True
        assert status2.owned_by_process is False
    finally:
        server2.stop()
        server1.stop()


def test_observatory_server_start_is_idempotent(tmp_path) -> None:
    root = tmp_path / "exports"
    server = ObservatoryServer(root, 8865)
    try:
        status1 = server.start()
        status2 = server.start()
        assert status1.port == status2.port
        assert status2.owned_by_process is True
    finally:
        server.stop()
