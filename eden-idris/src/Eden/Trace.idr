||| Structured event tracing for the EDEN runtime.
|||
||| Records typed events with level, context, and payload.
||| Each event carries its experiment/session/turn context so
||| downstream consumers can filter and correlate.
module Eden.Trace

import Data.IORef
import Data.List
import Data.String
import Eden.Types

------------------------------------------------------------------------
-- Trace entry
------------------------------------------------------------------------

public export
record TraceEntry where
  constructor MkTraceEntry
  teEventType    : TraceEventType
  teLevel        : TraceLevel
  teMessage      : String
  teExperimentId : Maybe ExperimentId
  teSessionId    : Maybe SessionId
  teTurnId       : Maybe TurnId
  teTimestamp     : Timestamp

------------------------------------------------------------------------
-- Trace log (append-only)
------------------------------------------------------------------------

||| Mutable trace log backed by IORef.
public export
record TraceLog where
  constructor MkTraceLog
  entries : IORef (List TraceEntry)

||| Create a fresh trace log.
export
newTraceLog : IO TraceLog
newTraceLog = do
  ref <- newIORef []
  pure (MkTraceLog ref)

------------------------------------------------------------------------
-- Recording events
------------------------------------------------------------------------

||| Append a trace event to the log.
export
traceEvent : TraceLog -> TraceEventType -> TraceLevel -> String
          -> Maybe ExperimentId -> Maybe SessionId -> Maybe TurnId
          -> Timestamp -> IO ()
traceEvent log evt lvl msg eid sid tid ts = do
  let entry = MkTraceEntry evt lvl msg eid sid tid ts
  modifyIORef log.entries (entry ::)

||| Convenience: trace an info-level turn event.
export
traceTurnInfo : TraceLog -> ExperimentId -> SessionId -> TurnId
             -> String -> Timestamp -> IO ()
traceTurnInfo log eid sid tid msg ts =
  traceEvent log TraceTurn Info msg (Just eid) (Just sid) (Just tid) ts

||| Convenience: trace a feedback event.
export
traceFeedbackEvent : TraceLog -> ExperimentId -> SessionId -> TurnId
                  -> String -> Timestamp -> IO ()
traceFeedbackEvent log eid sid tid msg ts =
  traceEvent log TraceFeedback Info msg (Just eid) (Just sid) (Just tid) ts

||| Convenience: trace an ingest event.
export
traceIngestEvent : TraceLog -> ExperimentId -> String -> Timestamp -> IO ()
traceIngestEvent log eid msg ts =
  traceEvent log TraceIngest Info msg (Just eid) Nothing Nothing ts

||| Convenience: trace an error.
export
traceError : TraceLog -> TraceEventType -> String
          -> Maybe ExperimentId -> Timestamp -> IO ()
traceError log evt msg eid ts =
  traceEvent log evt Error msg eid Nothing Nothing ts

------------------------------------------------------------------------
-- Querying the log
------------------------------------------------------------------------

||| Get all entries for a given experiment.
export
getExperimentTrace : TraceLog -> ExperimentId -> IO (List TraceEntry)
getExperimentTrace log eid = do
  all <- readIORef log.entries
  pure (filter matchesExp all)
  where
    matchesExp : TraceEntry -> Bool
    matchesExp e = case e.teExperimentId of
      Just x  => x == eid
      Nothing => False

||| Get all error-level entries.
export
getErrors : TraceLog -> IO (List TraceEntry)
getErrors log = do
  all <- readIORef log.entries
  pure (filter (\e => case e.teLevel of Error => True; _ => False) all)

||| Count entries by event type.
export
countByType : TraceLog -> TraceEventType -> IO Nat
countByType log evt = do
  all <- readIORef log.entries
  pure (length (filter (\e => show e.teEventType == show evt) all))

||| Get total entry count.
export
traceCount : TraceLog -> IO Nat
traceCount log = do
  all <- readIORef log.entries
  pure (length all)

------------------------------------------------------------------------
-- Formatting
------------------------------------------------------------------------

||| Format a single trace entry for display.
export
formatEntry : TraceEntry -> String
formatEntry e =
  "[" ++ show e.teTimestamp ++ "] "
  ++ show e.teLevel ++ " "
  ++ show e.teEventType ++ ": "
  ++ e.teMessage
