# Interfaces, Records, and Deriving

This chapter covers how to structure data and behavior in Idris2. If you know Haskell, the mapping is: Haskell typeclasses -> Idris2 interfaces, Haskell record syntax -> Idris2 record syntax (with significant differences), and Haskell deriving -> manual implementations (Idris2 has limited auto-deriving).

---

## Records

Records in Idris2 are syntactic sugar for data types with a single constructor and named fields. They are the primary way to bundle related data:

```idris
record RegardWeights where
  constructor MkRegardWeights
  wReward   : Double
  wEvidence : Double
  wRisk     : Double
```

This desugars to:

```idris
data RegardWeights : Type where
  MkRegardWeights : (wReward : Double) -> (wEvidence : Double)
                 -> (wRisk : Double) -> RegardWeights
```

### Construction

```idris
-- Named field construction (preferred for clarity):
defaultRegardWeights : RegardWeights
defaultRegardWeights = MkRegardWeights
  { wReward   = 1.25
  , wEvidence = 0.75
  , wRisk     = 1.1
  }

-- Positional construction (fine for small records):
defaultRegardWeights = MkRegardWeights 1.25 0.75 1.1
```

### Field access

Idris2 supports dot syntax for field access, similar to Haskell's `OverloadedRecordDot`:

```idris
-- Dot syntax (preferred):
regardBreakdown w ns gm =
  let act = activationDecay ns.nsDeltaSec ns.nsActivTau
  ...

-- Also works in nested contexts:
profile.rpBudgetMode
result.mrBackend
```

Dot syntax works with any function that takes the record as its first argument. Field accessor functions are automatically generated:

```idris
-- These are equivalent:
ns.nsDeltaSec
nsDeltaSec ns
```

### Record update syntax

Idris2 uses `{ field := newValue }` for record updates:

```idris
-- Update a single field (creates a new record):
let updated = { usageCount := m.usageCount + 1 } m

-- Update multiple fields:
let updated = { rewardEma := newRw
              , riskEma   := newRk
              , editEma   := newEd
              } m

-- With a transformation instead of a value:
let updated = { usageCount $= (+ 1) } m  -- $= applies a function
```

Note the syntax: the record being updated goes *after* the braces, not inside them. This is different from Haskell's `m { usageCount = newValue }`.

### Records vs data types

Use a `record` when:
- There is exactly one constructor
- You want named field access and update syntax
- The type represents a bundle of related data

Use a `data` type when:
- There are multiple constructors (sum type)
- You need pattern matching on constructors
- The type represents a choice between alternatives

---

## Interfaces

Interfaces are Idris2's version of Haskell's typeclasses. They define a set of operations that a type must support:

```idris
-- Defining an interface:
interface Show a where
  show : a -> String

-- Implementing an interface:
Show Verdict where
  show Accept = "accept"
  show Reject = "reject"
  show Edit   = "edit"
  show Skip   = "skip"
```

### Key differences from Haskell typeclasses

**No deriving.** Idris2 has very limited auto-deriving compared to Haskell. You write most instances manually. There is no `GeneralizedNewtypeDeriving`, no `DerivingVia`, no `DeriveGeneric`. You implement `Eq`, `Show`, `Ord`, etc. by hand:

```idris
Eq Domain where
  Knowledge == Knowledge = True
  Behavior  == Behavior  = True
  _         == _         = False

Show Domain where
  show Knowledge = "knowledge"
  show Behavior  = "behavior"
```

This is more verbose than Haskell but also more explicit -- there is no magic.

**Interface constraints use `=>`.** Same as Haskell:

```idris
-- GraphStore is a constraint on m
interface GraphStore m => VerifiedStore (m : Type -> Type) where
  ...
```

**Parameterized interfaces.** Interfaces can take parameters, including type constructors:

```idris
-- The storage interface is parameterized by a type constructor m
interface GraphStore (m : Type -> Type) where
  gsGetMeme : MemeId -> m (Maybe Meme)
  ...
```

This says: for any type constructor `m`, if `m` implements `GraphStore`, then `gsGetMeme` is available. The `m` could be `IO`, or a custom monad, or a test mock.

**Named implementations.** Idris2 allows named implementations, which solves the orphan instance problem:

```idris
[myShow] Show Nat where
  show n = "Natural: " ++ show n

-- Use a specific implementation:
show @{myShow} 42  -- "Natural: 42"
```

Haskell has no equivalent -- each type has at most one instance per typeclass globally.

### Common interfaces and their Haskell equivalents

| Idris2 | Haskell | Methods |
|--------|---------|---------|
| `Eq` | `Eq` | `(==)` |
| `Ord` | `Ord` | `compare`, `(<)`, `(>)`, etc. |
| `Show` | `Show` | `show` |
| `Functor` | `Functor` | `map` |
| `Applicative` | `Applicative` | `pure`, `(<*>)` |
| `Monad` | `Monad` | `(>>=)`, `join` |
| `Foldable` | `Foldable` | `foldl`, `foldr`, `foldMap` |
| `Traversable` | `Traversable` | `traverse` |
| `Semigroup` | `Semigroup` | `(<+>)` |
| `Monoid` | `Monoid` | `neutral` (Haskell: `mempty`) |
| `Cast a b` | no direct equivalent | `cast` |

Note: Idris2 uses `map` instead of `fmap`, `(<+>)` instead of `(<>)` for semigroup append, and `neutral` instead of `mempty` for monoid identity.

---

## Visibility Modifiers

Idris2 has three visibility levels for exports:

| Modifier | Meaning |
|----------|---------|
| `export` | The name is visible, but the definition is not. Callers can use the function but cannot unfold it in proofs. |
| `public export` | Both the name and the definition are visible. Required when the type or function appears in other types, or when the compiler needs to evaluate it for type checking. |
| (none) | Private. Not visible outside the module. |

### When to use which

**`public export`** is needed when:
- A type appears in the signature of an exported function
- A function is used in a type (e.g., `resolveMode` is called in the proof `resolveMode AdamAuto = RuntimeAuto`)
- A data constructor must be pattern-matched by other modules
- A record field must be accessed by other modules

**`export`** is appropriate when:
- A function should be callable but its implementation details are private
- You want to hide internal helpers

In the EDEN codebase, most types and their constructors use `public export`, because other modules need to construct and destructure them. Internal helpers use `export`.

```idris
-- Type and constructor visible everywhere:
public export
data Verdict = Accept | Reject | Edit | Skip

-- Function visible everywhere, definition visible for type-checking:
public export
resolveMode : InferenceMode -> InferenceMode
resolveMode AdamAuto = RuntimeAuto
resolveMode m        = m

-- Function callable but definition opaque:
export
genId : StoreState -> String -> IO String
```

### The `public export` vs `export` distinction for proofs

If a function is `export` (not `public export`), the compiler cannot evaluate it during type checking. This means proofs about the function cannot use `Refl` -- the compiler cannot verify that `resolveMode AdamAuto` reduces to `RuntimeAuto` unless it can see the definition.

This is why `resolveMode` is `public export` in `Eden.Inference` -- the proofs `adamAutoFallback` and `manualPreserved` require the compiler to evaluate the function.

---

## Newtypes and Phantom Types

Idris2 does not have a `newtype` keyword like Haskell. Instead, you use a `data` type with a single constructor:

```idris
-- Haskell: newtype Email = Email Text
-- Idris2:
data Email = MkEmail String
```

In Haskell, `newtype` guarantees zero runtime overhead -- the wrapper is erased. In Idris2, the optimizer may or may not erase the wrapper depending on the backend. For the RefC backend, single-constructor single-field types are typically represented efficiently, but this is not guaranteed at the language level.

### Phantom-tagged IDs (the EDEN pattern)

The EDEN codebase uses a particularly effective pattern: a generic `Id` type parameterized by a phantom tag:

```idris
-- The Id type: phantom parameter 'a' exists only for type safety
data Id : Type -> Type where
  MkId : String -> Id a

-- Phantom tags: types with no constructors, used only as markers
data ExperimentTag : Type where
data SessionTag    : Type where
data TurnTag       : Type where
data MemeTag       : Type where

-- Type aliases for readability:
ExperimentId : Type
ExperimentId = Id ExperimentTag

SessionId : Type
SessionId = Id SessionTag
```

Every ID is stored as a `String` at runtime, but the compiler prevents mixing them:

```idris
-- This compiles:
gsGetMeme : MemeId -> m (Maybe Meme)

-- This would NOT compile:
-- gsGetMeme : SessionId -> m (Maybe Meme)
-- ... because MemeId /= SessionId at the type level
```

This is the Idris2 version of the Haskell newtype-per-concept pattern from the type-safety guide. The advantage over separate newtypes for each ID: one `Eq` implementation, one `Show` implementation, one `Id` data type -- shared across all tag types.

To construct an ID with a specific tag:

```idris
-- Use named implicit to specify the tag:
let sid = MkId {a=SessionTag} "test-session"

-- When the type is inferrable from context, no annotation needed:
let mid : MemeId = MkId "meme-42"
```

---

## Smart Constructors in Idris2

The smart constructor pattern from Haskell works in Idris2 using visibility modifiers:

```idris
-- Don't export MkEmail -- only export the type and the smart constructor
export
data Email = MkEmail String

export
mkEmail : String -> Maybe Email
mkEmail s = if isInfixOf "@" s && isInfixOf "." s
            then Just (MkEmail s)
            else Nothing

export
unEmail : Email -> String
unEmail (MkEmail s) = s
```

Because `MkEmail` is not `public export`, external modules cannot construct arbitrary `Email` values. They must go through `mkEmail`, which validates the input.

The EDEN codebase uses a variant of this: the `CanMaterialize` proof type is a smart constructor for memode admissibility. You cannot claim that a list of memes is admissible without going through the `canMaterialize` decision procedure, which produces or denies the proof.

---

## Module Organization

Idris2 modules map to files: `Eden.Types` lives in `Eden/Types.idr`, `Eden.Store.InMemory` lives in `Eden/Store/InMemory.idr`.

```idris
module Eden.Types

import Data.Vect
import Data.List
import Data.String
```

Imports bring names into scope. Unlike Haskell, there is no `qualified` import syntax. If names collide, use explicit module prefixes:

```idris
import Data.String
-- Use: Data.String.unlines  (if ambiguous)
```

The `.ipkg` file lists all modules in the package:

```ipkg
modules = Eden.Types
        , Eden.Config
        , Eden.Regard
        ...
```

Every module you create must be listed here, or it will not be found during compilation.
