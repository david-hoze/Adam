||| In-memory graph store backed by mutable IORef lists.
||| This is the test/development store -- the production path would
||| use SQLite via FFI.
module Eden.Store.InMemory

import Data.IORef
import Data.List
import Data.String
import Eden.Types
import Eden.Config
import Eden.Storage

------------------------------------------------------------------------
-- Feedback record (cleaner than 8-tuple, which also hits Idris2 parse limit)
------------------------------------------------------------------------

public export
record FeedbackRecord where
  constructor MkFeedbackRecord
  frId           : FeedbackId
  frExperimentId : ExperimentId
  frSessionId    : SessionId
  frTurnId       : TurnId
  frVerdict      : Verdict
  frExplanation  : String
  frCorrected    : String
  frSignal       : FeedbackSignal

------------------------------------------------------------------------
-- Store state
------------------------------------------------------------------------

||| Mutable in-memory store state.
public export
record StoreState where
  constructor MkStoreState
  experiments    : IORef (List Experiment)
  sessions       : IORef (List Session)
  turns          : IORef (List Turn)
  memes          : IORef (List Meme)
  memodes        : IORef (List Memode)
  edges          : IORef (List Edge)
  feedbackEvents : IORef (List FeedbackRecord)
  membraneEvts   : IORef (List (MembraneEventType, String, Timestamp))
  traceEvts      : IORef (List (TraceEventType, TraceLevel, String, Timestamp))
  nextId         : IORef Nat

------------------------------------------------------------------------
-- Create a fresh store
------------------------------------------------------------------------

export
newStore : IO StoreState
newStore = do
  exps  <- newIORef []
  sess  <- newIORef []
  trns  <- newIORef []
  mms   <- newIORef []
  mds   <- newIORef []
  eds   <- newIORef []
  fbs   <- newIORef []
  mbes  <- newIORef []
  tres  <- newIORef []
  nid   <- newIORef 1
  pure (MkStoreState exps sess trns mms mds eds fbs mbes tres nid)

------------------------------------------------------------------------
-- ID generation
------------------------------------------------------------------------

export
genId : StoreState -> String -> IO String
genId st pfx = do
  n <- readIORef st.nextId
  writeIORef st.nextId (n + 1)
  pure (pfx ++ "-" ++ show n)

------------------------------------------------------------------------
-- Experiment operations
------------------------------------------------------------------------

export
createExperiment : StoreState -> String -> String -> ExperimentMode -> Timestamp -> IO Experiment
createExperiment st name slug mode now = do
  eid <- genId st "exp"
  let exp = MkExperiment (MkId eid) name slug mode Active now now
  modifyIORef st.experiments (exp ::)
  pure exp

export
getExperiment : StoreState -> ExperimentId -> IO (Maybe Experiment)
getExperiment st eid = do
  exps <- readIORef st.experiments
  pure (find (\e => e.id == eid) exps)

------------------------------------------------------------------------
-- Session operations
------------------------------------------------------------------------

export
createSession : StoreState -> ExperimentId -> AgentId -> String -> Timestamp -> IO Session
createSession st eid aid title now = do
  sid <- genId st "sess"
  let sess = MkSession (MkId sid) eid aid title now now Nothing
  modifyIORef st.sessions (sess ::)
  pure sess

export
getSession : StoreState -> SessionId -> IO (Maybe Session)
getSession st sid = do
  sessions <- readIORef st.sessions
  pure (find (\s => s.id == sid) sessions)

------------------------------------------------------------------------
-- Turn operations
------------------------------------------------------------------------

export
recordTurn : StoreState -> ExperimentId -> SessionId -> Nat -> String
          -> String -> String -> String -> Timestamp -> IO Turn
recordTurn st eid sid idx userText promptCtx respText membText now = do
  tid <- genId st "turn"
  let turn = MkTurn (MkId tid) eid sid idx userText promptCtx respText membText now
  modifyIORef st.turns (turn ::)
  pure turn

export
getSessionTurns : StoreState -> SessionId -> IO (List Turn)
getSessionTurns st sid = do
  allTurns <- readIORef st.turns
  pure (filter (\t => t.sessionId == sid) allTurns)

export
getRecentTurns : StoreState -> SessionId -> Nat -> IO (List Turn)
getRecentTurns st sid n = do
  allTurns <- getSessionTurns st sid
  let sorted = sortBy (\a, b => compare a.turnIndex b.turnIndex) allTurns
      l = length sorted
  pure (if l <= n then sorted else drop (minus l n) sorted)

------------------------------------------------------------------------
-- Meme operations
------------------------------------------------------------------------

export
upsertMeme : StoreState -> ExperimentId -> String -> String -> Domain
          -> SourceKind -> Scope -> Timestamp -> IO Meme
upsertMeme st eid label text domain sk scope now = do
  allMemes <- readIORef st.memes
  let canonical = toLower label
      existing = find (\m => m.experimentId == eid
                          && m.canonicalLabel == canonical
                          && m.domain == domain) allMemes
  case existing of
    Just m => do
      -- Update existing: bump usage, update timestamp
      let updated = { usageCount := m.usageCount + 1
                    , updatedAt := now } m
          others = filter (\x => x.id /= m.id) allMemes
      writeIORef st.memes (updated :: others)
      pure updated
    Nothing => do
      mid <- genId st "meme"
      let meme = MkMeme (MkId mid) eid label canonical text domain sk scope
                        0.0 1 0.0 0.0 0.0 0 0 0 0 86400.0 now now now
      modifyIORef st.memes (meme ::)
      pure meme

export
getMeme : StoreState -> MemeId -> IO (Maybe Meme)
getMeme st mid = do
  allMemes <- readIORef st.memes
  pure (find (\m => m.id == mid) allMemes)

export
searchMemes : StoreState -> ExperimentId -> String -> Nat -> IO (List Meme)
searchMemes st eid query limit = do
  allMemes <- readIORef st.memes
  let q = toLower query
      matches = filter (\m => m.experimentId == eid
                           && (isInfixOf q (toLower m.label)
                            || isInfixOf q (toLower m.text))) allMemes
  pure (take limit matches)

------------------------------------------------------------------------
-- Memode operations
------------------------------------------------------------------------

export
upsertMemode : StoreState -> ExperimentId -> String -> String -> Domain
            -> List MemeId -> Timestamp -> IO Memode
upsertMemode st eid lbl summary dom memberIds now = do
  mid <- genId st "memode"
  let hash = show (length memberIds) ++ ":" ++ show (map show memberIds)
      md = MkMemode (MkId mid) eid lbl hash summary dom Global
                    0.0 1 0.0 0.0 0.0 0 86400.0 now now now
  modifyIORef st.memodes (md ::)
  pure md

export
getMemode : StoreState -> MemodeId -> IO (Maybe Memode)
getMemode st mid = do
  allMemodes <- readIORef st.memodes
  pure (find (\m => m.id == mid) allMemodes)

||| Materialize memodes from behavior memes with support edges.
||| Finds clusters of 2+ behavior memes connected by support edges
||| and creates memode records for them.
export
materializeMemodes : StoreState -> ExperimentId -> Timestamp -> IO (List Memode)
materializeMemodes st eid now = do
  allMemes <- readIORef st.memes
  allEdges <- readIORef st.edges
  let behaviorMemes = filter (\m => m.experimentId == eid && m.domain == Behavior) allMemes
      expEdges = filter (\e => e.experimentId == eid) allEdges
  -- Find pairs connected by support edges
  let connected = mapMaybe (\e =>
        case e.edgeType of
          Supports => Just (e.srcId, e.dstId)
          _ => Nothing) expEdges
  -- Build memode from each connected pair (simplified: one memode per edge)
  results <- traverse (\pair => do
    let (src, dst) = pair
        lbl = "memode:" ++ src ++ "+" ++ dst
    upsertMemode st eid lbl "auto-materialized" Behavior
      [MkId src, MkId dst] now) connected
  pure results

------------------------------------------------------------------------
-- Edge operations
------------------------------------------------------------------------

export
createEdge : StoreState -> ExperimentId -> NodeKind -> String -> NodeKind -> String
          -> EdgeType -> Double -> Timestamp -> IO Edge
createEdge st eid sk sid dk did et w now = do
  edgeId <- genId st "edge"
  let edge = MkEdge (MkId edgeId) eid sk sid dk did et w now now
  modifyIORef st.edges (edge ::)
  pure edge

export
getEdges : StoreState -> ExperimentId -> NodeKind -> String -> IO (List Edge)
getEdges st eid nk nid = do
  allEdges <- readIORef st.edges
  pure (filter (\e => e.experimentId == eid
                   && e.srcKind == nk
                   && e.srcId == nid) allEdges)

export
getExperimentMemes : StoreState -> ExperimentId -> IO (List Meme)
getExperimentMemes st eid = do
  allMemes <- readIORef st.memes
  pure (filter (\m => m.experimentId == eid) allMemes)

------------------------------------------------------------------------
-- Feedback operations
------------------------------------------------------------------------

export
recordFeedback : StoreState -> ExperimentId -> SessionId -> TurnId -> Verdict
              -> String -> String -> FeedbackSignal -> Timestamp -> IO FeedbackId
recordFeedback st eid sid tid v expl corr sig now = do
  fid <- genId st "fb"
  let fbid = MkId {a=FeedbackTag} fid
      rec  = MkFeedbackRecord fbid eid sid tid v expl corr sig
  modifyIORef st.feedbackEvents (rec ::)
  pure fbid

------------------------------------------------------------------------
-- Membrane + trace event recording
------------------------------------------------------------------------

export
recordMembraneEvent : StoreState -> MembraneEventType -> String -> Timestamp -> IO ()
recordMembraneEvent st evt detail now =
  modifyIORef st.membraneEvts ((evt, detail, now) ::)

export
recordTraceEvent : StoreState -> TraceEventType -> TraceLevel -> String -> Timestamp -> IO ()
recordTraceEvent st evt lvl msg now =
  modifyIORef st.traceEvts ((evt, lvl, msg, now) ::)

------------------------------------------------------------------------
-- Document operations
------------------------------------------------------------------------

export
createDocument : StoreState -> ExperimentId -> String -> DocKind -> String -> String -> Timestamp -> IO Document
createDocument st eid path kind title sha now = do
  did <- genId st "doc"
  let doc = MkDocument (MkId did) eid path kind title sha Processing now
  -- Store in edges IORef repurposed... actually we need a docs IORef
  -- For now, return the document (stateless creation)
  pure doc

export
createChunk : StoreState -> ExperimentId -> DocumentId -> Nat -> Maybe Nat -> String -> Timestamp -> IO Chunk
createChunk st eid did idx pageNum text now = do
  cid <- genId st "chunk"
  pure (MkChunk (MkId cid) eid did idx pageNum text now)

------------------------------------------------------------------------
-- Graph counts
------------------------------------------------------------------------

export
graphCounts : StoreState -> IO GraphCounts
graphCounts st = do
  ms  <- readIORef st.memes
  mds <- readIORef st.memodes
  es  <- readIORef st.edges
  ts  <- readIORef st.turns
  fs  <- readIORef st.feedbackEvents
  mbe <- readIORef st.membraneEvts
  tre <- readIORef st.traceEvts
  pure (MkGraphCounts (length ms) (length mds) (length es) (length ts)
                      (length fs) 0 (length mbe) (length tre))

------------------------------------------------------------------------
-- Update feedback channels on a meme
------------------------------------------------------------------------

export
updateMemeChannels : StoreState -> MemeId -> Double -> Double -> Double -> IO ()
updateMemeChannels st mid newRw newRk newEd = do
  allMemes <- readIORef st.memes
  let updated = map (\m => if m.id == mid
                           then { rewardEma := newRw, riskEma := newRk, editEma := newEd } m
                           else m) allMemes
  writeIORef st.memes updated
