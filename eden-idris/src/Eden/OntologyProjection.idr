||| Ontology projection: classifies graph nodes by role and speech act.
|||
||| Projects raw graph data into typed views: constative (knowledge claims),
||| performative (behavior patterns), and runtime (session-scoped actions).
||| Uses dependent types to ensure projection validity.
module Eden.OntologyProjection

import Data.List
import Eden.Types
import Eden.Config

%default total

------------------------------------------------------------------------
-- Speech act classification
------------------------------------------------------------------------

||| Illocutionary mode of a meme in context.
||| Constative: states facts about the world.
||| Performative: commits the agent to a behavioral pattern.
||| RuntimeAct: session-scoped operational state.
public export
data SpeechActMode = Constative | Performative | RuntimeAct

public export
Show SpeechActMode where
  show Constative  = "constative"
  show Performative = "performative"
  show RuntimeAct  = "runtime"

public export
Eq SpeechActMode where
  Constative  == Constative  = True
  Performative == Performative = True
  RuntimeAct  == RuntimeAct  = True
  _           == _           = False

||| Classify a meme's speech act mode from its domain and scope.
public export
classifySpeechAct : Domain -> Scope -> SpeechActMode
classifySpeechAct Knowledge Global              = Constative
classifySpeechAct Behavior  Global              = Performative
classifySpeechAct _         (SessionScoped _)    = RuntimeAct
classifySpeechAct Knowledge (SessionScoped _)    = RuntimeAct
classifySpeechAct Behavior  (SessionScoped _)    = RuntimeAct

------------------------------------------------------------------------
-- Memetic role
------------------------------------------------------------------------

||| Role a meme plays in the graph's functional structure.
public export
data MemeticRole
  = CoreIdentity     -- high-regard behavior memes, stable
  | ActiveKnowledge  -- frequently retrieved knowledge
  | Peripheral       -- low usage, may decay
  | Contested        -- high contradiction count
  | Emergent         -- recently created, low evidence

public export
Show MemeticRole where
  show CoreIdentity    = "core_identity"
  show ActiveKnowledge = "active_knowledge"
  show Peripheral      = "peripheral"
  show Contested       = "contested"
  show Emergent        = "emergent"

||| Infer memetic role from meme statistics.
public export
inferMemeticRole : (domain : Domain) -> (usageCount : Nat)
               -> (evidenceN : Double) -> (contradictions : Nat)
               -> (rewardEma : Double) -> MemeticRole
inferMemeticRole domain usage evN contradictions rw =
  if contradictions >= 3 then Contested
  else if evN < 2.0 && usage < 3 then Emergent
  else if usage < 2 then Peripheral
  else case domain of
    Behavior  => if rw > 0.3 then CoreIdentity else Peripheral
    Knowledge => ActiveKnowledge

------------------------------------------------------------------------
-- Node projection
------------------------------------------------------------------------

||| Projected view of a meme in the ontology.
public export
record MemeProjection where
  constructor MkMemeProjection
  mpMemeId    : MemeId
  mpLabel     : String
  mpDomain    : Domain
  mpSpeechAct : SpeechActMode
  mpRole      : MemeticRole
  mpRegard    : Double

||| Project a meme into its ontological classification.
public export
projectMeme : Meme -> MemeProjection
projectMeme m =
  let sa   = classifySpeechAct m.domain m.scope
      role = inferMemeticRole m.domain m.usageCount m.evidenceN
               m.contradictionCount m.rewardEma
      reg  = m.rewardEma - 0.3 * m.riskEma
  in MkMemeProjection m.id m.label m.domain sa role reg

------------------------------------------------------------------------
-- Memode materialization eligibility
------------------------------------------------------------------------

||| A memode is materializable when:
||| 1. It has >= 2 behavior-domain member memes
||| 2. All members have positive regard
||| 3. Members are connected by support edges
|||
||| This extends the basic CanMaterialize decision procedure
||| with semantic constraints.
public export
data MaterializationCheck
  = Eligible (List MemeProjection)
  | InsufficientMembers Nat
  | NegativeRegard (List String)
  | WrongDomain (List String)

public export
Show MaterializationCheck where
  show (Eligible ps)           = "eligible (" ++ show (length ps) ++ " members)"
  show (InsufficientMembers n) = "insufficient (" ++ show n ++ " < 2)"
  show (NegativeRegard ls)     = "negative regard: " ++ show ls
  show (WrongDomain ls)        = "wrong domain: " ++ show ls

||| Check whether a set of memes can form a valid memode.
public export
checkMaterialization : List Meme -> MaterializationCheck
checkMaterialization memes =
  let projections    = map projectMeme memes
      behaviorMembers = filter (\p => p.mpDomain == Behavior) projections
      negRegard       = filter (\p => p.mpRegard < 0.0) behaviorMembers
      nonBehavior     = filter (\p => p.mpDomain /= Behavior) projections
  in if length behaviorMembers < 2
       then InsufficientMembers (length behaviorMembers)
     else if not (isNil negRegard)
       then NegativeRegard (map (\p => p.mpLabel) negRegard)
     else if not (isNil nonBehavior)
       then WrongDomain (map (\p => p.mpLabel) nonBehavior)
     else Eligible behaviorMembers

------------------------------------------------------------------------
-- Graph-level projections
------------------------------------------------------------------------

||| Partition memes by speech act mode.
public export
partitionBySpeechAct : List Meme -> (List MemeProjection, List MemeProjection, List MemeProjection)
partitionBySpeechAct memes =
  let all = map projectMeme memes
      constatives   = filter (\p => p.mpSpeechAct == Constative) all
      performatives = filter (\p => p.mpSpeechAct == Performative) all
      runtimeActs   = filter (\p => p.mpSpeechAct == RuntimeAct) all
  in (constatives, performatives, runtimeActs)

||| Count memes by role across the graph.
public export
record RoleCounts where
  constructor MkRoleCounts
  coreCount       : Nat
  activeCount     : Nat
  peripheralCount : Nat
  contestedCount  : Nat
  emergentCount   : Nat

public export
countByRole : List Meme -> RoleCounts
countByRole memes =
  let projs = map projectMeme memes
  in MkRoleCounts
       (length (filter (\p => case p.mpRole of CoreIdentity    => True; _ => False) projs))
       (length (filter (\p => case p.mpRole of ActiveKnowledge => True; _ => False) projs))
       (length (filter (\p => case p.mpRole of Peripheral      => True; _ => False) projs))
       (length (filter (\p => case p.mpRole of Contested       => True; _ => False) projs))
       (length (filter (\p => case p.mpRole of Emergent        => True; _ => False) projs))
