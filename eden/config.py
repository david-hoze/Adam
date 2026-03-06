from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = REPO_ROOT / "data"
LOG_DIR = REPO_ROOT / "logs"
EXPORT_DIR = REPO_ROOT / "exports"
DOCS_DIR = REPO_ROOT / "docs"
ASSETS_DIR = REPO_ROOT / "assets"
SEED_CANON_DIR = ASSETS_DIR / "seed_canon"
DB_PATH = DATA_DIR / "eden.db"
RUNTIME_LOG_PATH = LOG_DIR / "runtime.jsonl"


@dataclass(slots=True)
class RegardWeights:
    reward: float = 1.25
    evidence: float = 0.75
    coherence: float = 0.95
    persistence: float = 0.8
    decay: float = 0.65
    isolation: float = 0.7
    risk: float = 1.1


@dataclass(slots=True)
class SelectionWeights:
    semantic_similarity: float = 1.2
    activation: float = 0.7
    regard: float = 0.95
    session_bias: float = 0.35
    explicit_feedback: float = 0.5
    scope_penalty: float = 0.4
    membrane_penalty: float = 0.75


@dataclass(slots=True)
class RuntimeSettings:
    model_backend: str = "mock"
    model_path: str | None = None
    max_context_items: int = 8
    retrieval_depth: int = 12
    low_motion: bool = False
    debug: bool = True
    observatory_host: str = "127.0.0.1"
    observatory_port: int = 8741
    observatory_port_span: int = 24
    regard_weights: RegardWeights = field(default_factory=RegardWeights)
    selection_weights: SelectionWeights = field(default_factory=SelectionWeights)


DEFAULT_SETTINGS = RuntimeSettings()
