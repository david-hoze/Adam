||| Document ingestion pipeline.
|||
||| Ingests PDF, Markdown, TXT, and CSV into the memgraph.
||| Memodes are materialized if 2+ behavior-domain memes share
||| qualifying support edges.
module Eden.Ingest

import Data.List
import Data.Vect
import Eden.Types
import Eden.Config

%default total

------------------------------------------------------------------------
-- Quality assessment
------------------------------------------------------------------------

public export
data QualityState = Clean | Degraded | QualityFailed

public export
Show QualityState where
  show Clean         = "clean"
  show Degraded      = "degraded"
  show QualityFailed = "failed"

public export
data QualityFlag
  = ShortChunks | HighDuplication | LowExtraction
  | ParseErrors | EmptyChunks

public export
Show QualityFlag where
  show ShortChunks     = "short_chunks"
  show HighDuplication = "high_duplication"
  show LowExtraction   = "low_extraction"
  show ParseErrors     = "parse_errors"
  show EmptyChunks     = "empty_chunks"

------------------------------------------------------------------------
-- Ingest result
------------------------------------------------------------------------

public export
record IngestResult where
  constructor MkIngestResult
  irDocumentId   : DocumentId
  irChunkCount   : Nat
  irMemeCount    : Nat
  irMemodeCount  : Nat
  irStatus       : DocStatus
  irNotes        : List String
  irParser       : String
  irQualityScore : Double
  irQualityState : QualityState
  irQualityFlags : List QualityFlag

------------------------------------------------------------------------
-- Chunking
------------------------------------------------------------------------

public export
MinChunkLength : Nat
MinChunkLength = 50

public export
MaxChunkLength : Nat
MaxChunkLength = 2000

public export
record RawChunk where
  constructor MkRawChunk
  rcText       : String
  rcPageNumber : Maybe Nat
  rcIndex      : Nat

------------------------------------------------------------------------
-- Quality scoring
------------------------------------------------------------------------

public export
assessQuality : Nat -> Nat -> List QualityFlag -> (Double, QualityState)
assessQuality chunks memes flags =
  let baseScore  = if chunks == 0 then 0.0
                   else cast memes / cast chunks
      penalty    = cast (length flags) * 0.15
      finalScore = if (baseScore - penalty) < 0.0 then 0.0
                   else if (baseScore - penalty) > 1.0 then 1.0
                   else baseScore - penalty
      state      = if finalScore >= 0.7 then Clean
                   else if finalScore >= 0.3 then Degraded
                   else QualityFailed
  in (finalScore, state)

------------------------------------------------------------------------
-- Memode materialization check (type-level)
------------------------------------------------------------------------

||| Proof that a list of meme IDs can form an admissible memode
||| (requires at least 2 members).
public export
data CanMaterialize : List MemeId -> Type where
  YesMaterialize : (a : MemeId) -> (b : MemeId) -> (rest : List MemeId)
                -> CanMaterialize (a :: b :: rest)

||| Decision procedure for materialization eligibility.
public export
canMaterialize : (ids : List MemeId) -> Dec (CanMaterialize ids)
canMaterialize []             = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize [_]            = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize (a :: b :: rs) = Yes (YesMaterialize a b rs)
