from __future__ import annotations

from pathlib import Path

import pytest

from eden.config import RuntimeSettings
from eden.logging import RuntimeLog
from eden.runtime import EdenRuntime
from eden.storage.graph_store import GraphStore


def _write_minimal_text_pdf(path: Path, text: str) -> None:
    stream = f"BT /F1 24 Tf 72 720 Td ({text}) Tj ET".encode("ascii")
    objects: list[bytes] = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
        b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream),
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]
    body = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, obj in enumerate(objects, start=1):
        offsets.append(len(body))
        body.extend(f"{index} 0 obj\n".encode("ascii"))
        body.extend(obj)
        body.extend(b"\nendobj\n")
    xref_start = len(body)
    body.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    body.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        body.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    body.extend(
        (
            f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
            f"startxref\n{xref_start}\n%%EOF\n"
        ).encode("ascii")
    )
    path.write_bytes(bytes(body))


@pytest.fixture()
def runtime(tmp_path: Path) -> EdenRuntime:
    store = GraphStore(tmp_path / "eden.db")
    log = RuntimeLog(tmp_path / "runtime.jsonl")
    settings = RuntimeSettings(model_backend="mock")
    return EdenRuntime(store=store, settings=settings, runtime_log=log)


@pytest.fixture()
def sample_files(tmp_path: Path) -> dict[str, Path]:
    txt_path = tmp_path / "sample.txt"
    txt_path.write_text("EDEN remembers by external graph state rather than by weight updates.", encoding="utf-8")

    md_path = tmp_path / "sample.md"
    md_path.write_text("# Adam\n\nFeedback changes regard and retrieval pressure.\n", encoding="utf-8")

    csv_path = tmp_path / "sample.csv"
    csv_path.write_text("term,weight\nregard,0.9\nmembrane,0.7\n", encoding="utf-8")

    pdf_path = tmp_path / "sample.pdf"
    _write_minimal_text_pdf(pdf_path, "EDEN PDF memory graph")

    return {"txt": txt_path, "md": md_path, "csv": csv_path, "pdf": pdf_path}
