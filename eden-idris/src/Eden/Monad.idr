||| EdenM: a reader+IO monad that threads environment through the pipeline.
|||
||| Eliminates the manual parameter threading of StoreState, ExperimentId,
||| SessionId, and Timestamp through every function call.
|||
||| Usage:
|||   executeTurn : String -> EdenM TurnResult
|||   instead of:
|||   executeTurn : StoreState -> ExperimentId -> SessionId -> Timestamp -> String -> IO TurnResult
module Eden.Monad

import Data.IORef
import Eden.Types
import Eden.Store.InMemory
import Eden.Trace

------------------------------------------------------------------------
-- Environment
------------------------------------------------------------------------

||| Immutable environment threaded through the EDEN pipeline.
public export
record EdenEnv where
  constructor MkEdenEnv
  store : StoreState
  eid   : ExperimentId
  sid   : SessionId
  ts    : Timestamp
  trace : TraceLog

------------------------------------------------------------------------
-- The EdenM monad (ReaderT EdenEnv IO)
------------------------------------------------------------------------

||| Eden computation: a function from environment to IO action.
public export
record EdenM (a : Type) where
  constructor MkEdenM
  runEdenM : EdenEnv -> IO a

||| Execute an Eden computation with a given environment.
public export
runEden : EdenEnv -> EdenM a -> IO a
runEden env act = act.runEdenM env

------------------------------------------------------------------------
-- Functor
------------------------------------------------------------------------

public export
Functor EdenM where
  map f (MkEdenM act) = MkEdenM (\env => map f (act env))

------------------------------------------------------------------------
-- Applicative
------------------------------------------------------------------------

public export
Applicative EdenM where
  pure x = MkEdenM (\_ => pure x)
  (MkEdenM f) <*> (MkEdenM x) = MkEdenM (\env => f env <*> x env)

------------------------------------------------------------------------
-- Monad
------------------------------------------------------------------------

public export
Monad EdenM where
  (MkEdenM act) >>= f = MkEdenM (\env => do
    a <- act env
    (f a).runEdenM env)

------------------------------------------------------------------------
-- HasIO (lift raw IO into EdenM)
------------------------------------------------------------------------

public export
HasIO EdenM where
  liftIO act = MkEdenM (\_ => act)

------------------------------------------------------------------------
-- Environment access
------------------------------------------------------------------------

||| Get the full environment.
public export
ask : EdenM EdenEnv
ask = MkEdenM (\env => pure env)

||| Project a field from the environment.
public export
asks : (EdenEnv -> a) -> EdenM a
asks f = MkEdenM (\env => pure (f env))

||| Get the store.
public export
getStore : EdenM StoreState
getStore = asks store

||| Get the experiment ID.
public export
getExpId : EdenM ExperimentId
getExpId = asks eid

||| Get the session ID.
public export
getSessId : EdenM SessionId
getSessId = asks sid

||| Get the timestamp.
public export
getTimestamp : EdenM Timestamp
getTimestamp = asks ts

||| Get the trace log.
public export
getTraceLog : EdenM TraceLog
getTraceLog = asks trace

------------------------------------------------------------------------
-- Convenience: lifted store operations
------------------------------------------------------------------------

||| Upsert a meme in EdenM.
public export
eUpsertMeme : String -> String -> Domain -> SourceKind -> Scope -> EdenM Meme
eUpsertMeme label text domain sk scope = do
  env <- ask
  liftIO (upsertMeme env.store env.eid label text domain sk scope env.ts)

||| Create an edge in EdenM.
public export
eCreateEdge : NodeKind -> String -> NodeKind -> String
           -> EdgeType -> Double -> EdenM Edge
eCreateEdge sk sid dk did et w = do
  env <- ask
  liftIO (createEdge env.store env.eid sk sid dk did et w env.ts)

||| Get experiment memes in EdenM.
public export
eGetMemes : EdenM (List Meme)
eGetMemes = do
  env <- ask
  liftIO (getExperimentMemes env.store env.eid)

||| Record a turn in EdenM.
public export
eRecordTurn : Nat -> String -> String -> String -> String -> EdenM Turn
eRecordTurn idx userText convPrompt rawResp membraneText = do
  env <- ask
  liftIO (recordTurn env.store env.eid env.sid idx userText convPrompt
            rawResp membraneText env.ts)

||| Get recent turns in EdenM.
public export
eGetRecentTurns : Nat -> EdenM (List Turn)
eGetRecentTurns n = do
  env <- ask
  liftIO (getRecentTurns env.store env.sid n)

||| Record feedback in EdenM.
public export
eRecordFeedback : TurnId -> Verdict -> String -> String
               -> FeedbackSignal -> EdenM FeedbackId
eRecordFeedback tid v expl corr sig = do
  env <- ask
  liftIO (recordFeedback env.store env.eid env.sid tid v expl corr sig env.ts)

||| Get graph counts in EdenM.
public export
eGraphCounts : EdenM GraphCounts
eGraphCounts = do
  st <- getStore
  liftIO (graphCounts st)

||| Materialize memodes in EdenM.
public export
eMaterializeMemodes : EdenM (List Memode)
eMaterializeMemodes = do
  env <- ask
  liftIO (materializeMemodes env.store env.eid env.ts)

||| Update meme channels in EdenM.
public export
eUpdateMemeChannels : MemeId -> Double -> Double -> Double -> EdenM ()
eUpdateMemeChannels mid rw rk ed = do
  st <- getStore
  liftIO (updateMemeChannels st mid rw rk ed)

||| Get session turns in EdenM.
public export
eGetSessionTurns : EdenM (List Turn)
eGetSessionTurns = do
  env <- ask
  liftIO (getSessionTurns env.store env.sid)

------------------------------------------------------------------------
-- Convenience: lifted trace operations
------------------------------------------------------------------------

||| Trace a turn event in EdenM.
public export
eTraceTurn : TurnId -> String -> EdenM ()
eTraceTurn tid msg = do
  env <- ask
  liftIO (traceTurnInfo env.trace env.eid env.sid tid msg env.ts)

||| Trace a feedback event in EdenM.
public export
eTraceFeedback : TurnId -> String -> EdenM ()
eTraceFeedback tid msg = do
  env <- ask
  liftIO (traceFeedbackEvent env.trace env.eid env.sid tid msg env.ts)

------------------------------------------------------------------------
-- Create environment
------------------------------------------------------------------------

||| Create a fresh EdenEnv from a store and session setup.
export
newEdenEnv : StoreState -> ExperimentId -> SessionId -> Timestamp -> IO EdenEnv
newEdenEnv st eid sid ts = do
  tlog <- newTraceLog
  pure (MkEdenEnv st eid sid ts tlog)
