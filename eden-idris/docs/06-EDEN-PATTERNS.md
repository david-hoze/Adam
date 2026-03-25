# EDEN Codebase Patterns

This chapter documents patterns specific to the EDEN Idris2 codebase. These are the idioms you will encounter and should follow when working on this project.

---

## Architecture Overview

The codebase is organized as a pure core with an IO shell:

```
Eden.Types          -- Core ontology: all types, no logic
Eden.Config         -- Configuration records and defaults
Eden.Regard         -- Regard computation (pure)
Eden.Retrieval      -- Selection scoring (pure)
Eden.Budget         -- Token budgeting (pure)
Eden.Inference      -- Inference profiles and mode resolution (pure)
Eden.Membrane       -- Post-generation text pipeline (pure)
Eden.Hum            -- Continuity artifact generation (pure)
Eden.Ingest         -- Document ingestion types and quality assessment (pure)
Eden.Storage        -- Storage interface (interface definition only)
Eden.Models.Base    -- Model adapter types (pure)
Eden.Models.Mock    -- Mock model (pure)
Eden.Store.InMemory -- In-memory store implementation (IO)
Eden.Runtime        -- Turn-loop state machine and prompts (mostly pure)
Eden.Loop           -- Interactive REPL (IO)
Main                -- Entry point (IO)
```

The pure modules have no `IO` in their type signatures. They take data in, produce data out. All state management is in `Eden.Store.InMemory` and `Eden.Loop`.

---

## Phantom-Tagged IDs

The most pervasive pattern in the codebase. A single `Id` type is parameterized by an empty phantom type that exists only for compile-time safety:

```idris
-- One generic ID type:
data Id : Type -> Type where
  MkId : String -> Id a

-- Phantom tags (types with no constructors):
data ExperimentTag : Type where
data SessionTag    : Type where
data MemeTag       : Type where
-- ... 7 more tags

-- Type aliases for readability:
ExperimentId : Type
ExperimentId = Id ExperimentTag

MemeId : Type
MemeId = Id MemeTag
```

### Why this works

At runtime, every ID is just a `String`. At compile time, the phantom tag prevents mixing:

```idris
-- You cannot accidentally pass a MemeId where an ExperimentId is expected:
gsGetExperiment : ExperimentId -> m (Maybe Experiment)
-- Calling gsGetExperiment with a MemeId is a type error.
```

### Creating tagged IDs

```idris
-- When context determines the type (common case):
let mid : MemeId = MkId "meme-42"

-- When context is ambiguous, use named implicit:
let sid = MkId {a=SessionTag} "test-session"

-- In pattern matching:
unwrapId : Id a -> String
unwrapId (MkId s) = s
```

### Shared instances

Because all ID types are `Id a`, a single `Eq` and `Show` implementation covers all of them:

```idris
Eq (Id a) where
  (MkId x) == (MkId y) = x == y

Show (Id a) where
  show (MkId s) = s
```

This avoids the boilerplate of writing `Eq MemeId`, `Eq SessionId`, `Eq ExperimentId`, etc.

---

## Decision Procedures with Dec

The `canMaterialize` function is the canonical example of a decision procedure in this codebase:

```idris
-- The proposition: can these IDs form an admissible memode?
data CanMaterialize : List MemeId -> Type where
  YesMaterialize : (a : MemeId) -> (b : MemeId) -> (rest : List MemeId)
                -> CanMaterialize (a :: b :: rest)

-- The decision procedure:
canMaterialize : (ids : List MemeId) -> Dec (CanMaterialize ids)
canMaterialize []             = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize [_]            = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize (a :: b :: rs) = Yes (YesMaterialize a b rs)
```

### The pattern

1. **Define a proposition type** indexed by the input. `CanMaterialize ids` is a type that can only be inhabited when `ids` has 2+ elements.

2. **Define constructors** that encode the conditions under which the proposition holds. `YesMaterialize` requires two elements plus a rest list.

3. **Write a decision function** that returns `Dec`. For each possible input shape:
   - If the proposition holds: return `Yes` with the proof (the constructor applied to the relevant values).
   - If it does not hold: return `No` with a refutation -- a function that takes a hypothetical proof and derives `Void` (via `impossible`).

4. **Use at runtime** with pattern matching on `Yes`/`No`.

### When to use this pattern

Use `Dec` when:
- A property depends on runtime data (not known at compile time)
- You want to track whether a check has been performed in the type system
- The property needs to be passed as evidence to downstream functions

Use simple `Bool` or `Maybe` when:
- You just need to branch on a condition
- No downstream function needs evidence that the check was performed

---

## State Machines via Indexed Types

The turn-loop state machine and the observatory measurement protocol both use indexed types to encode valid transitions:

### Turn-loop state machine

```idris
data TurnPhase
  = Idle | Assembling | Generating | MembraneApplied
  | AwaitingFeedback | FeedbackIntegrated

data ValidTransition : TurnPhase -> TurnPhase -> Type where
  IdleToAssemble      : ValidTransition Idle Assembling
  AssembleToGenerate  : ValidTransition Assembling Generating
  GenerateToMembrane  : ValidTransition Generating MembraneApplied
  MembraneToFeedback  : ValidTransition MembraneApplied AwaitingFeedback
  FeedbackToIntegrate : ValidTransition AwaitingFeedback FeedbackIntegrated
  IntegrateToIdle     : ValidTransition FeedbackIntegrated Idle
  MembraneToIdle      : ValidTransition MembraneApplied Idle
```

Each constructor of `ValidTransition` encodes one legal edge in the state graph. A function that transitions state can require a `ValidTransition` proof:

```idris
transition : ValidTransition from to -> RuntimeState from -> RuntimeState to
```

This makes invalid transitions (e.g., jumping from `Idle` to `FeedbackIntegrated`) into type errors, not runtime errors.

### Observatory measurement protocol

```idris
-- Proof tokens for measurement state:
data HasPreview : String -> Type where
  MkHasPreview : HasPreview eventId

data HasCommit : String -> Type where
  MkHasCommit : HasCommit eventId

-- The interface enforces the protocol:
interface GraphStore m => ObservatoryOps (m : Type -> Type) where
  obsPreview : ... -> m (eid : String ** HasPreview eid)
  obsCommit  : (eventId : String) -> HasPreview eventId -> m (HasCommit eventId)
  obsRevert  : (eventId : String) -> HasCommit eventId -> m ()
```

`obsCommit` requires a `HasPreview` proof -- you cannot commit without previewing first. `obsRevert` requires a `HasCommit` proof -- you cannot revert without committing first.

The dependent pair `(eid : String ** HasPreview eid)` returned by `obsPreview` bundles the event ID with its proof. The caller destructures it to get both.

---

## The Storage Interface Pattern

The codebase separates the storage *contract* from its *implementation*:

**Contract** (`Eden.Storage`): defines the `GraphStore` interface with all the operations a store must support. No implementation details, no IO.

**Implementation** (`Eden.Store.InMemory`): implements the interface using `IORef`-backed lists. This is the test/development backend.

**Verified layer** (`Eden.Storage`): the `VerifiedStore` interface extends `GraphStore` with dependent-type preconditions. A verified store requires proofs that experiments exist, sessions belong to experiments, etc.

```idris
-- Basic store: just does the operation
gsCreateSession : ExperimentId -> AgentId -> String -> m Session

-- Verified store: requires proof that the experiment exists
vsCreateSession : (eid : ExperimentId)
               -> ExperimentExists eid
               -> AgentId -> String -> m Session
```

This layered design means:
- Core logic codes against the interface, not the implementation
- The in-memory store is swappable for a SQLite store via FFI
- The verified layer is opt-in -- you can use the basic interface for rapid prototyping and add proofs incrementally

---

## Record-Heavy Design

The codebase uses records extensively for structured data. Conventions:

### Constructor naming

All record constructors are prefixed with `Mk`:

```idris
record Meme where
  constructor MkMeme
  id    : MemeId
  label : String
  ...
```

### Field naming for disambiguation

When field names might clash across records, the codebase uses prefixes:

```idris
record NodeState where
  constructor MkNodeState
  nsRewardEma  : Double   -- ns prefix
  nsRiskEma    : Double
  nsActivTau   : Double

record HumMetrics where
  constructor MkHumMetrics
  turnsCovered   : Nat    -- no prefix (unique enough)
  hmFeedbackEvts : Nat    -- hm prefix where needed
```

This avoids the ambiguity that would arise if multiple records had a field named `rewardEma`.

### Record update in IO

The pattern for updating records stored in `IORef`:

```idris
updateMemeChannels st mid newRw newRk newEd = do
  allMemes <- readIORef st.memes
  let updated = map (\m => if m.id == mid
                           then { rewardEma := newRw
                                , riskEma   := newRk
                                , editEma   := newEd } m
                           else m) allMemes
  writeIORef st.memes updated
```

Read the list, `map` over it to update the target record, write the list back.

---

## Pure Computation Pattern

Most domain logic follows this pattern: take configuration + input records, produce output records. No IO, no mutation:

```idris
-- Takes weights + node state + graph metrics, produces a breakdown
regardBreakdown : RegardWeights -> NodeState -> GraphMetrics -> RegardBreakdown
regardBreakdown w ns gm =
  let act  = activationDecay ns.nsDeltaSec ns.nsActivTau
      rw   = rewardScore ns.nsRewardEma ns.nsRiskEma
      ...
      tot  = w.wReward * rw + w.wEvidence * ev + ...
  in MkRegardBreakdown
       { reward      = rw
       , evidence    = ev
       , totalRegard = bounded (-8.0) 8.0 tot
       , ...
       }
```

Benefits:
- Trivially testable (no setup, no mocks)
- Deterministic (same inputs always produce same outputs)
- Composable (pure functions compose cleanly)
- The type signature tells you everything the function needs and produces

---

## The Membrane Pipeline

The membrane is a sequence of pure text transformations, each producing a `(result, didSomething)` pair:

```idris
applyMembrane cap raw =
  let (s1, e1) = stripControlChars (trim raw)
      ev1 = if e1 then [ControlCharStripped] else []
      (reasoning, s2, e2) = splitReasoning s1
      ev2 = if e2 then [ReasoningSplit] else []
      ...
      allEvents = ev1 ++ ev2 ++ ev3 ++ ev4 ++ ev6
      finalEvents = if isNil allEvents then [Passthrough] else allEvents
  in MkMembraneResult s6 finalEvents reasoning
```

Each pass is a pure function. The pipeline threads the text through them sequentially, collecting events that describe what was done. The result is a `MembraneResult` containing the cleaned text, the event log, and any extracted reasoning.

This is a clean FP pattern: instead of mutating state and logging side effects, each transformation returns a pair of (new state, description of change).

---

## Bounded Arithmetic

The codebase uses a `bounded` function to clamp values to a range:

```idris
bounded : Double -> Double -> Double -> Double
bounded lo hi x = if x < lo then lo else if x > hi then hi else x
```

All computed scores are bounded to prevent runaway values:

```idris
rewardScore rw rk = bounded (-2.0) 2.0 (rw - 0.3 * rk)
evidenceScore n   = bounded 0.0 2.0 (log (n + 1.0) / log 10.0)
-- Total regard: bounded (-8.0) 8.0 tot
-- Selection score: bounded (-12.0) 12.0 score
```

This is a defensive programming pattern that prevents edge cases (extreme feedback, pathological graph metrics) from producing unbounded scores that dominate all other signals.

---

## Compile-Time Invariant Proofs

The codebase encodes domain invariants as compile-time proofs:

```idris
-- "adam_auto always resolves to runtime_auto"
adamAutoFallback : resolveMode AdamAuto = RuntimeAuto
adamAutoFallback = Refl

-- "manual mode is never overridden"
manualPreserved : resolveMode Manual = Manual
manualPreserved = Refl
```

These proofs are checked every time the project compiles. If someone modifies `resolveMode` in a way that violates these invariants, the proofs fail to type-check and the project does not compile.

In `Main.idr`, the proofs are also exercised at runtime for demonstration:

```idris
let _ = the (resolveMode AdamAuto = RuntimeAuto) Refl
putStrLn "  resolveMode AdamAuto = RuntimeAuto   [Refl] QED"
```

The `the` call verifies the proposition at compile time. The `putStrLn` is just for human-readable output.

---

## Timestamps as Opaque Records

Timestamps are wrapped in a record to prevent raw string manipulation:

```idris
record Timestamp where
  constructor MkTimestamp
  isoString : String
```

This is a lightweight version of the smart constructor pattern. The `isoString` field name documents the expected format. A future improvement could add validation in the constructor.

---

## Module-Level Totality

Most modules declare `%default total`:

```idris
module Eden.Regard

import Eden.Types
import Eden.Config

%default total
```

This means every function in the module must be total (defined for all inputs and provably terminating) unless explicitly marked otherwise. This catches:

- Missing pattern match arms
- Infinite recursion without a decreasing argument
- Use of partial Prelude functions

Modules with interactive loops (`Eden.Loop`) omit `%default total` and mark individual functions as `partial` where needed.
