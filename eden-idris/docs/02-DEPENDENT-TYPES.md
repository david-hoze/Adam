# Idris2 Type System and Dependent Types

This is where Idris2 diverges most significantly from Haskell. In Haskell, types and values live in separate worlds -- you need extensions like `DataKinds`, `GADTs`, `TypeFamilies`, and `Singletons` to approximate what Idris2 gives you natively. In Idris2, types are first-class values. You can compute types, pass them as arguments, and use values in type signatures.

---

## Dependent Types: Types That Depend on Values

A dependent type is a type that can refer to a value. The canonical example is a vector with a length encoded in its type:

```idris
-- Vect n a: a vector of exactly n elements of type a
data Vect : Nat -> Type -> Type where
  Nil  : Vect 0 a
  (::) : a -> Vect n a -> Vect (S n) a
```

The type `Vect 3 String` means "a vector of exactly 3 strings." The compiler enforces this statically:

```idris
-- This type-checks:
names : Vect 3 String
names = ["Alice", "Bob", "Charlie"]

-- This is a compile error -- wrong length:
-- names : Vect 3 String
-- names = ["Alice", "Bob"]  -- ERROR: Vect 2 String /= Vect 3 String
```

A total `head` function on `Vect` requires at least one element:

```idris
head : Vect (S n) a -> a
head (x :: _) = x
-- No case for Nil needed -- Vect 0 a does not match Vect (S n) a
```

This is the dependent-type version of what Haskell achieves with GADTs and DataKinds, but without the extension overhead.

### How the EDEN codebase uses dependent types

**Memode admissibility.** A memode requires at least 2 behavior-domain member memes. This is enforced at the type level:

```idris
-- In Eden.Types:
data AdmissibleMemode : Type where
  MkAdmissible : (memode : Memode)
              -> (members : Vect (S (S n)) MemeId)
              -> AdmissibleMemode
```

The `Vect (S (S n))` type guarantees at least 2 members. You cannot construct an `AdmissibleMemode` with 0 or 1 members -- the compiler rejects it.

**Explained verdicts.** Different verdicts require different evidence. `Accept` and `Reject` require an explanation. `Edit` requires an explanation plus corrected text. `Skip` requires nothing:

```idris
data ExplainedVerdict : Verdict -> Type where
  ExplainAccept : (explanation : String) -> ExplainedVerdict Accept
  ExplainReject : (explanation : String) -> ExplainedVerdict Reject
  ExplainEdit   : (explanation : String) -> (correctedText : String)
               -> ExplainedVerdict Edit
  ExplainSkip   : ExplainedVerdict Skip
```

The verdict value appears *in the type*. `ExplainedVerdict Accept` and `ExplainedVerdict Edit` are different types with different constructors. The verified store interface uses this:

```idris
vsRecordFeedback : (sid : SessionId) -> (tid : TurnId)
                -> TurnInSession tid sid
                -> (v : Verdict)
                -> ExplainedVerdict v  -- type depends on v
                -> FeedbackSignal -> m FeedbackId
```

---

## Proofs as Programs

In Idris2, a proof is a program that inhabits a type representing a proposition. If you can construct a value of type `P`, then `P` is true (it is provable).

### Propositional equality

The `(=)` type represents equality between two values:

```idris
-- Built-in:
data (=) : a -> b -> Type where
  Refl : x = x
```

`Refl` is the only constructor -- it says "x equals itself." If the compiler can verify that two expressions are definitionally equal, `Refl` type-checks:

```idris
-- In Eden.Inference:
adamAutoFallback : resolveMode AdamAuto = RuntimeAuto
adamAutoFallback = Refl
```

The compiler evaluates `resolveMode AdamAuto`, gets `RuntimeAuto`, and confirms `RuntimeAuto = RuntimeAuto`. The proof is `Refl`. If `resolveMode` were changed to map `AdamAuto` to something other than `RuntimeAuto`, this line would fail to compile.

This is used in the EDEN codebase to enforce the "no hidden governor" invariant: `adam_auto` must always fall back to `runtime_auto`, and the proof is checked at compile time, not at runtime.

### The `the` function

`the` provides a type annotation inline. It is often used to assert that a proof holds:

```idris
-- From Main.idr:
let _ = the (resolveMode AdamAuto = RuntimeAuto) Refl
```

This says: "I claim `resolveMode AdamAuto = RuntimeAuto` is true, and `Refl` is the proof." If the claim is wrong, the program does not compile.

---

## The Dec Type: Decidable Propositions

Not every proposition can be proved at compile time. Some depend on runtime values. The `Dec` type represents a decidable proposition -- one that can be proved or disproved:

```idris
data Dec : Type -> Type where
  Yes : p -> Dec p           -- proof that p holds
  No  : (p -> Void) -> Dec p -- proof that p does NOT hold
```

`Yes` carries a proof. `No` carries a *refutation* -- a function that takes a hypothetical proof and derives a contradiction (`Void`, the type with no constructors).

### Decision procedures in the EDEN codebase

The memode materialization check is a decision procedure:

```idris
-- The proposition: can these meme IDs form a memode?
data CanMaterialize : List MemeId -> Type where
  YesMaterialize : (a : MemeId) -> (b : MemeId) -> (rest : List MemeId)
                -> CanMaterialize (a :: b :: rest)

-- The decision procedure:
canMaterialize : (ids : List MemeId) -> Dec (CanMaterialize ids)
canMaterialize []             = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize [_]            = No (\case (YesMaterialize _ _ _) impossible)
canMaterialize (a :: b :: rs) = Yes (YesMaterialize a b rs)
```

The first two cases prove that an empty list or a singleton list *cannot* materialize -- if someone claims a proof exists, the `impossible` keyword shows that no constructor matches. The third case proves that a list of 2+ elements *can* materialize, by constructing the witness.

Usage at runtime:

```idris
case canMaterialize ids of
  Yes (YesMaterialize a b rest) =>
    putStrLn "admissible"
  No _ =>
    putStrLn "not admissible"
```

This is the dependent-type version of Haskell's runtime check + smart constructor pattern. The difference: the type system tracks whether the check has been performed, and what the result was.

---

## Totality Checking

Idris2 has a built-in totality checker that verifies two properties:

1. **Covering:** the function handles all possible input patterns.
2. **Terminating:** recursive calls are on structurally smaller arguments (or use a well-founded measure).

Enable it per-module:

```idris
%default total
```

Or per-function:

```idris
total
myFunction : Nat -> Nat
myFunction Z = Z
myFunction (S n) = S (myFunction n)  -- recursive call on smaller argument
```

When the checker cannot prove termination, you have options:

```idris
-- Option 1: mark as partial (admits it might not terminate)
partial
replLoop : IO ()

-- Option 2: use assert_total (you promise it terminates)
myFunc : Nat -> Nat
myFunc n = assert_total (someComplexRecursion n)

-- Option 3: provide a decreasing argument via a Nat index
```

In the EDEN codebase, most modules use `%default total`. The interactive loop (`Eden.Loop`) uses `mutual` blocks with explicitly partial functions for the REPL loop, which genuinely does not terminate (it runs until the user quits).

### Why totality matters

A total function is a proof that the computation it represents always produces a result. Combined with dependent types, this means proofs are guaranteed to be valid -- not just "I think this works for the cases I tested."

---

## Universe Polymorphism

In Idris2, types have types. The type of `Nat` is `Type`. What is the type of `Type`? It is `Type 1`. The type of `Type 1` is `Type 2`, and so on. This hierarchy prevents Russell's paradox (the type-theoretic equivalent of "the set of all sets that don't contain themselves").

In practice, you rarely need to think about this. `Type` is shorthand for `Type 0`, and most code lives at this level. You might encounter universe levels when writing very generic code:

```idris
-- id works at any universe level
id : {0 a : Type} -> a -> a
id x = x
```

The `0` in `{0 a : Type}` is a quantity annotation (related to linear types), not a universe level. Universe levels are inferred automatically in almost all cases.

---

## Implicit Arguments

Idris2 heavily uses implicit arguments -- arguments the compiler infers from context:

```idris
-- Explicit: caller must provide the type
id_explicit : (a : Type) -> a -> a
id_explicit _ x = x

-- Implicit: compiler infers the type from usage
id : {a : Type} -> a -> a
id x = x

-- Usage: no need to specify the type
id 42       -- compiler infers a = Integer
id "hello"  -- compiler infers a = String
```

Curly braces `{...}` denote implicit arguments. You can supply them explicitly when needed:

```idris
-- Force a specific type with named implicit
id {a = Nat} 42

-- In the EDEN codebase, phantom-tagged IDs use this:
MkId {a=SessionTag} "test-session"
```

### Auto-implicit arguments

`auto` arguments are implicit arguments that Idris2 tries to find via proof search:

```idris
myFunc : {auto prf : HasPreview eid} -> String -> IO ()
```

The compiler will search the local scope for a value of type `HasPreview eid`. If found, it is supplied automatically.

---

## Quantities and Erasure

Idris2 supports quantitative type theory. Each variable binding has a quantity:

| Quantity | Meaning | Syntax |
|----------|---------|--------|
| unrestricted | can be used any number of times | default |
| `0` | erased at runtime (compile-time only) | `0 x : a` |
| `1` | used exactly once (linear) | `1 x : a` |

Erased arguments (`0`) exist only for type checking and carry no runtime cost:

```idris
-- The type parameter 'a' is erased at runtime (phantom type)
data Id : Type -> Type where
  MkId : String -> Id a
```

The phantom tag `a` has zero runtime representation. It exists solely for compile-time safety -- you cannot mix up a `MemeId` and a `SessionId` even though both contain strings.

Linear types (`1`) enforce that a resource is used exactly once, which is useful for file handles, network connections, and protocol state machines. The EDEN codebase does not currently use linear types, but they are available in Idris2 for future use.

---

## Interfaces with Dependent Types

Idris2 interfaces (Haskell's typeclasses) can use dependent types in their methods:

```idris
-- From Eden.Storage:
interface GraphStore (m : Type -> Type) where
  gsUpsertMeme : ExperimentId -> String -> String -> Domain
              -> SourceKind -> Scope -> m Meme

-- The verified store adds dependent-type preconditions:
interface GraphStore m => VerifiedStore (m : Type -> Type) where
  vsCreateSession : (eid : ExperimentId)
                 -> ExperimentExists eid  -- proof that experiment exists
                 -> AgentId -> String -> m Session
```

The `ExperimentExists eid` argument is a proof that the experiment with ID `eid` exists in the store. This cannot be expressed in Haskell without significant ceremony (GADTs + singletons + type families). In Idris2, it is a natural part of the interface definition.

---

## Comparison: Haskell Extensions vs Idris2 Native Features

| Haskell Extension(s) | Purpose | Idris2 Equivalent |
|----------------------|---------|-------------------|
| `DataKinds` | Promote values to type level | Native: values are types |
| `GADTs` | Constructors with refined return types | Native: all data types work this way |
| `TypeFamilies` | Type-level functions | Just write a function on types |
| `KindSignatures` | Annotate kinds | Use `: Type`, `: Nat -> Type`, etc. |
| `ScopedTypeVariables` | Type variables scope into where | Always in scope |
| `RankNTypes` | Higher-rank polymorphism | Native |
| `TypeOperators` | Operators in types | Native |
| `ConstraintKinds` | Reify constraints | Use interface constraints directly |
| Singletons library | Bridge types and values | Not needed -- types ARE values |

The fundamental difference: Haskell has a strict phase separation between types and terms, then uses extensions to poke holes in it. Idris2 has no phase separation -- the same language works at both levels.
