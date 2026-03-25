||| Storage interface: type-safe contracts for graph persistence.
|||
||| Defines the interface that any storage backend must satisfy.
||| Uses dependent types to enforce preconditions.
module Eden.Storage

import Data.List
import Eden.Types
import Eden.Config

------------------------------------------------------------------------
-- Store interface
------------------------------------------------------------------------

||| The storage contract. All persistent graph operations go through here.
public export
interface GraphStore (m : Type -> Type) where
  gsCreateExperiment : String -> String -> ExperimentMode -> m Experiment
  gsGetExperiment    : ExperimentId -> m (Maybe Experiment)

  gsCreateSession    : ExperimentId -> AgentId -> String -> m Session
  gsGetSession       : SessionId -> m (Maybe Session)
  gsEndSession       : SessionId -> Timestamp -> m ()

  gsRecordTurn       : ExperimentId -> SessionId -> Nat -> String -> String
                    -> String -> String -> m Turn
  gsGetTurn          : TurnId -> m (Maybe Turn)
  gsGetSessionTurns  : SessionId -> m (List Turn)

  gsUpsertMeme       : ExperimentId -> String -> String -> Domain -> SourceKind -> Scope -> m Meme
  gsGetMeme          : MemeId -> m (Maybe Meme)
  gsSearchMemes      : ExperimentId -> String -> Nat -> m (List Meme)

  gsUpsertMemode     : ExperimentId -> String -> String -> Domain -> List MemeId -> m Memode
  gsGetMemode        : MemodeId -> m (Maybe Memode)

  gsCreateEdge       : ExperimentId -> NodeKind -> String -> NodeKind -> String
                    -> EdgeType -> Double -> m Edge
  gsGetEdges         : ExperimentId -> NodeKind -> String -> m (List Edge)

  gsRecordFeedback   : ExperimentId -> SessionId -> TurnId -> Verdict
                    -> String -> String -> FeedbackSignal -> m FeedbackId

  gsTouchNodes       : NodeKind -> List String -> m ()

  gsUpdateFeedbackChannels : NodeKind -> String -> Double -> Double -> Double -> m ()

  gsRecordMembraneEvent : Maybe ExperimentId -> Maybe SessionId -> Maybe TurnId
                       -> MembraneEventType -> String -> m ()

  gsRecordTraceEvent : Maybe ExperimentId -> Maybe SessionId -> Maybe TurnId
                    -> TraceEventType -> TraceLevel -> String -> m ()

  gsRecordMeasurement : ExperimentId -> SessionId -> MeasurementAction
                     -> MeasurementState -> String -> String -> m ()

  gsCreateDocument   : ExperimentId -> String -> DocKind -> String -> String -> m Document
  gsUpdateDocStatus  : DocumentId -> DocStatus -> m ()
  gsCreateChunk      : ExperimentId -> DocumentId -> Nat -> Maybe Nat -> String -> m Chunk

  gsGraphCounts      : ExperimentId -> m GraphCounts

------------------------------------------------------------------------
-- Invariant witnesses
------------------------------------------------------------------------

||| Proof that an experiment exists in the store.
public export
data ExperimentExists : ExperimentId -> Type where
  MkExperimentExists : ExperimentExists eid

||| Proof that a session belongs to a given experiment.
public export
data SessionInExperiment : SessionId -> ExperimentId -> Type where
  MkSessionInExperiment : SessionInExperiment sid eid

||| Proof that a turn belongs to a given session.
public export
data TurnInSession : TurnId -> SessionId -> Type where
  MkTurnInSession : TurnInSession tid sid

------------------------------------------------------------------------
-- Verified store operations
------------------------------------------------------------------------

||| A verified store enforces dependent-type preconditions.
public export
interface GraphStore m => VerifiedStore (m : Type -> Type) where

  ||| Create a session only if the experiment exists.
  vsCreateSession : (eid : ExperimentId)
                 -> ExperimentExists eid
                 -> AgentId -> String -> m Session

  ||| Record a turn only in a valid session within a valid experiment.
  vsRecordTurn : (eid : ExperimentId) -> (sid : SessionId)
              -> ExperimentExists eid
              -> SessionInExperiment sid eid
              -> Nat -> String -> String -> String -> String
              -> m Turn

  ||| Record feedback only for a turn in a valid session.
  ||| The ExplainedVerdict witness enforces felicity conditions.
  vsRecordFeedback : (sid : SessionId) -> (tid : TurnId)
                  -> TurnInSession tid sid
                  -> (v : Verdict)
                  -> ExplainedVerdict v
                  -> FeedbackSignal -> m FeedbackId
