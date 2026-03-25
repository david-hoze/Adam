||| Monadic turn pipeline using EdenM.
|||
||| Replaces manual parameter threading with the EdenM reader monad.
||| Each pipeline step reads environment via `ask`/`asks` instead of
||| taking 5+ explicit parameters.
|||
||| Compare with Loop.idr's executeTurn which threads
||| (StoreState, ExperimentId, SessionId, Timestamp) manually.
module Eden.Pipeline

import Data.IORef
import Data.List
import Data.String
import Eden.Types
import Eden.Config
import Eden.Regard
import Eden.Retrieval
import Eden.Budget
import Eden.Inference
import Eden.Membrane
import Eden.Hum
import Eden.Models.Base
import Eden.Models.Mock
import Eden.Store.InMemory
import Eden.Runtime
import Eden.Indexer
import Eden.SemanticRelations
import Eden.OntologyProjection
import Eden.Trace
import Eden.Monad

------------------------------------------------------------------------
-- Monadic turn result
------------------------------------------------------------------------

public export
record MTurnResult where
  constructor MkMTurnResult
  mrResponse    : String
  mrConcepts    : List String
  mrEdges       : Nat
  mrRelations   : List RelationCandidate
  mrProjections : List MemeProjection

------------------------------------------------------------------------
-- Pipeline steps in EdenM
------------------------------------------------------------------------

||| Step 1: Retrieve and score the active set.
export
mRetrieve : EdenM (List CandidateScore)
mRetrieve = do
  sid' <- getSessId
  memes <- eGetMemes
  let sw = defaultSelectionWeights
  pure (assembleActiveSet sw sid' 3600.0 5 memes)

||| Step 2: Assemble the prompt.
export
mAssemble : List CandidateScore -> String -> EdenM AssemblyResult
mAssemble activeSet userText = do
  history <- eGetRecentTurns 3
  pure (assemblePrompt "Adam" "You are a curious, honest thinker."
          activeSet history "" userText)

||| Step 3: Generate a response (mock backend).
export
mGenerate : AssemblyResult -> EdenM ModelResult
mGenerate assembly =
  let params = MkGenerateParams assembly.arSysPrompt assembly.arConvPrompt
                 (cast assembly.arProfile.rpMaxOutput)
                 assembly.arProfile.rpTemp 0.9 1.05
  in pure (mockGenerate params)

||| Step 4: Apply the membrane.
export
mMembrane : Nat -> String -> EdenM MembraneOutcome
mMembrane cap rawText =
  pure (applyMembraneStep cap rawText)

||| Step 5: Record the turn.
export
mRecordTurn : Nat -> String -> String -> String -> String -> EdenM Turn
mRecordTurn idx userText convPrompt rawResp cleaned =
  eRecordTurn idx userText convPrompt rawResp cleaned

||| Step 6: Index concepts from turn text.
export
mIndex : String -> String -> EdenM IndexOutcome
mIndex userText cleanedText = do
  env <- ask
  liftIO (indexTurn env.store env.eid userText cleanedText env.ts)

||| Step 7: Extract semantic relations.
export
mRelations : String -> String -> List String -> EdenM (List RelationCandidate)
mRelations userText cleanedText concepts = do
  let combined = userText ++ " " ++ cleanedText
  pure (extractRelations combined concepts)

||| Step 8: Create edges for detected relations.
export
mCreateRelationEdges : List RelationCandidate -> EdenM ()
mCreateRelationEdges rels =
  traverse_ createOne rels
  where
    createOne : RelationCandidate -> EdenM ()
    createOne rc = do
      _ <- eCreateEdge MemeNode rc.rcSrcLabel MemeNode rc.rcDstLabel
             rc.rcEdgeType (scoreRelation rc)
      pure ()

||| Step 9: Materialize memodes.
export
mMaterialize : EdenM (List Memode)
mMaterialize = eMaterializeMemodes

||| Step 10: Project ontology.
export
mProject : EdenM (List MemeProjection)
mProject = do
  memes <- eGetMemes
  pure (map projectMeme memes)

------------------------------------------------------------------------
-- Full monadic turn pipeline
------------------------------------------------------------------------

||| Execute a complete turn using the EdenM monad.
||| No manual parameter threading — everything comes from the environment.
export
mExecuteTurn : Nat -> String -> EdenM MTurnResult
mExecuteTurn idx userText = do
  -- Retrieve + assemble
  activeSet <- mRetrieve
  assembly  <- mAssemble activeSet userText

  -- Generate + membrane
  genResult <- mGenerate assembly
  mo        <- mMembrane assembly.arProfile.rpRespCap genResult.mrText

  -- Record + index
  _ <- mRecordTurn idx userText assembly.arConvPrompt
         genResult.mrText mo.moCleanedText
  idxResult <- mIndex userText mo.moCleanedText

  -- Semantic relations
  rels <- mRelations userText mo.moCleanedText idxResult.ioConceptNames
  mCreateRelationEdges rels

  -- Materialize + project
  _ <- mMaterialize
  projs <- mProject

  pure (MkMTurnResult mo.moCleanedText idxResult.ioConceptNames
                      idxResult.ioNewEdges rels projs)

------------------------------------------------------------------------
-- Monadic feedback processing
------------------------------------------------------------------------

||| Process feedback in EdenM — no parameter threading needed.
export
mProcessFeedback : TurnId -> Verdict -> String -> EdenM ()
mProcessFeedback tid verdict explanation = do
  let sig = feedbackSignal verdict
  _ <- eRecordFeedback tid verdict explanation "" sig

  -- Propagate to active memes
  memes <- eGetMemes
  let scale = propagateScale verdict
      affected = take 3 memes
  traverse_ (propagateToMeme sig scale) affected

  -- Trace the event
  eTraceFeedback tid ("verdict=" ++ show verdict)
  where
    propagateToMeme : FeedbackSignal -> Double -> Meme -> EdenM ()
    propagateToMeme sig scale m = do
      let (rw', rk', ed') = applyFeedback m.rewardEma m.riskEma m.editEma sig scale
      eUpdateMemeChannels m.id rw' rk' ed'

------------------------------------------------------------------------
-- Monadic hum generation
------------------------------------------------------------------------

||| Build a hum payload in EdenM.
export
mBuildHum : EdenM HumPayload
mBuildHum = do
  env   <- ask
  turns <- eGetSessionTurns
  let sorted = sortBy (\a, b => compare a.turnIndex b.turnIndex) turns
  pure (buildHumPayload env.eid env.sid sorted "" "" env.ts)
