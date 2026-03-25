||| Document ingestion pipeline.
|||
||| Reads file content, chunks it, indexes concepts from each chunk,
||| and materializes memodes. This is the Idris2 equivalent of
||| eden/ingest/pipeline.py.
module Eden.Ingest.Pipeline

import Data.IORef
import Data.List
import Data.List1
import Data.String
import Eden.Types
import Eden.Config
import Eden.Ingest
import Eden.Indexer
import Eden.Store.InMemory

------------------------------------------------------------------------
-- Chunking
------------------------------------------------------------------------

||| Split text into chunks of approximately `maxLen` characters,
||| breaking at paragraph boundaries where possible.
export
chunkText : String -> Nat -> List RawChunk
chunkText text maxLen =
  let paragraphs = split (\c => c == '\n') text
      chunks = buildChunks (toList paragraphs) 0 "" 0
  in chunks
  where
    buildChunks : List String -> Nat -> String -> Nat -> List RawChunk
    buildChunks [] idx acc _ =
      let trimmed = trim acc
      in if trimmed == "" then []
         else [MkRawChunk trimmed Nothing idx]
    buildChunks (p :: ps) idx acc accLen =
      let pLen = length p
          newLen = accLen + pLen + 1
      in if newLen > maxLen && accLen > 0
           then MkRawChunk (trim acc) Nothing idx
                :: buildChunks (p :: ps) (idx + 1) "" 0
           else buildChunks ps idx (acc ++ p ++ "\n") newLen

------------------------------------------------------------------------
-- Quality flags
------------------------------------------------------------------------

||| Assess quality flags for a set of chunks.
export
assessFlags : List RawChunk -> List QualityFlag
assessFlags chunks =
  let cnt = length chunks
      shortCount = length (filter (\c => length c.rcText < MinChunkLength) chunks)
      emptyCount = length (filter (\c => trim c.rcText == "") chunks)
  in (if shortCount * 2 > cnt then [ShortChunks] else [])
  ++ (if emptyCount > 0 then [EmptyChunks] else [])

------------------------------------------------------------------------
-- Ingest pipeline
------------------------------------------------------------------------

||| Ingest a text document into the graph.
||| Chunks the text, indexes concepts from each chunk,
||| creates document and chunk records, materializes memodes.
export
ingestText : StoreState -> ExperimentId
          -> String -> String -> String -> Timestamp
          -> IO IngestResult
ingestText store eid docPath title content ts = do
  -- 1. Create document record
  doc <- createDocument store eid docPath PlainText title "" ts

  -- 2. Chunk the content
  let chunks = chunkText content MaxChunkLength
      flags  = assessFlags chunks
      (qScore, qState) = assessQuality (length chunks) 0 flags

  -- 3. Index concepts from each chunk
  allConcepts <- traverse indexChunkConcepts chunks

  let totalConcepts = concat allConcepts
      uniqueLabels = nub (map ecLabel totalConcepts)
      memeCount = length uniqueLabels

  -- 4. Create co-occurrence edges within each chunk
  traverse_ createChunkEdges chunks

  -- 5. Materialize memodes
  memodes <- materializeMemodes store eid ts

  -- 6. Build result
  let (finalScore, finalState) = assessQuality (length chunks) memeCount flags
  pure (MkIngestResult
    doc.id
    (length chunks)
    memeCount
    (length memodes)
    Ingested
    ["ingested " ++ show (length chunks) ++ " chunks"]
    "text"
    finalScore
    finalState
    flags)

  where
    ignore : IO a -> IO ()
    ignore act = do _ <- act; pure ()

    allPairs : List a -> List (a, a)
    allPairs [] = []
    allPairs (x :: xs) = map (\y => (x, y)) xs ++ allPairs xs

    upsertConceptMeme : ExtractedConcept -> IO ()
    upsertConceptMeme ec =
      ignore (upsertMeme store eid ec.ecLabel ec.ecLabel ec.ecDomain IngestSource Global ts)

    indexChunkConcepts : RawChunk -> IO (List ExtractedConcept)
    indexChunkConcepts c = do
      let concepts = extractConcepts c.rcText IngestSource
      traverse_ upsertConceptMeme concepts
      pure concepts

    createPairEdge : (ExtractedConcept, ExtractedConcept) -> IO ()
    createPairEdge (a, b) =
      ignore (createEdge store eid MemeNode a.ecLabel MemeNode b.ecLabel CoOccursWith 0.3 ts)

    createChunkEdges : RawChunk -> IO ()
    createChunkEdges c = do
      let concepts = extractConcepts c.rcText IngestSource
      traverse_ createPairEdge (allPairs concepts)
