from __future__ import annotations


def test_ingest_supported_formats(runtime, sample_files) -> None:
    experiment = runtime.initialize_experiment("blank")
    for path in sample_files.values():
        result = runtime.ingest_document(experiment_id=experiment["id"], path=str(path))
        assert result["status"] == "ingested"
        assert result["chunk_count"] >= 1
    counts = runtime.store.graph_counts(experiment["id"])
    assert counts["documents"] == 4
    assert counts["memes"] > 6
    assert counts["memodes"] >= 1
