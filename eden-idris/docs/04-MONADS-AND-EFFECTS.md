# Monads, Effects, and IO

This chapter covers how Idris2 handles effects: Functor, Applicative, Monad, do-notation, IO, IORef, and how this compares to Haskell. The Haskell idiom guide's advice about "use the weakest sufficient abstraction" applies equally here.

---

## The Functor-Applicative-Monad Hierarchy

### Functor: Mapping Over a Container

A `Functor` lets you apply a function to values inside a container without unwrapping it:

```idris
interface Functor f where
  map : (a -> b) -> f a -> f b

-- Examples:
map (+1) (Just 5)       -- Just 6
map (+1) Nothing        -- Nothing
map (*2) [1, 2, 3]      -- [2, 4, 6]
```

Idris2 uses `map` where Haskell uses `fmap`. The `<$>` operator is also available as an infix alias:

```idris
(+1) <$> Just 5  -- Just 6
```

### Applicative: Independent Effects

An `Applicative` lets you apply a function that is itself inside a container:

```idris
interface Functor f => Applicative f where
  pure  : a -> f a
  (<*>) : f (a -> b) -> f a -> f b
```

Use `Applicative` when effects are independent -- when the second computation does not depend on the result of the first:

```idris
-- Combining two independent Maybe values:
pure (+) <*> Just 3 <*> Just 5  -- Just 8
pure (+) <*> Just 3 <*> Nothing -- Nothing

-- Or equivalently:
(+) <$> Just 3 <*> Just 5
```

The Haskell guide emphasizes: prefer `Applicative` over `Monad` when effects are independent, because it enables more optimization (e.g., error accumulation, parallel execution).

### Monad: Sequential, Dependent Effects

A `Monad` lets you chain computations where later steps depend on earlier results:

```idris
interface Applicative m => Monad m where
  (>>=) : m a -> (a -> m b) -> m b
  join  : m (m a) -> m a
```

`(>>=)` ("bind") passes the result of the first computation to a function that produces the second computation:

```idris
-- Look up a key, then use the result:
lookup "user" env >>= \user => lookup user permissions
```

Use `Monad` when the second step genuinely depends on the first result:

```idris
-- Monadic: session creation depends on experiment lookup
do exp <- getExperiment store eid
   case exp of
     Nothing => putStrLn "not found"
     Just e  => createSession store e.id agentId title ts
```

---

## Do-Notation

Do-notation is syntactic sugar for monadic bind chains. It looks imperative but desugars to `(>>=)`:

```idris
-- Do-notation:
main : IO ()
main = do
  putStr "Name: "
  name <- getLine
  putStrLn ("Hello, " ++ name)

-- Desugars to:
main = putStr "Name: " >>= \_ =>
       getLine >>= \name =>
       putStrLn ("Hello, " ++ name)
```

### Do-notation idioms

**`let` for pure bindings inside do:**

```idris
do allMemes <- readIORef store.memes
   let expMemes = filter (\m => m.experimentId == eid) allMemes
   let sw = defaultSelectionWeights
   ...
```

**`pure` to wrap a pure value (use `pure` not `return`):**

Idris2 has both `pure` and `return`, but `pure` is preferred because it requires only `Applicative`, not `Monad`. This matches the modern Haskell convention.

```idris
getExperiment st eid = do
  exps <- readIORef st.experiments
  pure (find (\e => e.id == eid) exps)
```

**`!` notation (bang notation) -- an Idris2 exclusive:**

Idris2 has a unique feature: the `!` prefix unwraps a monadic value inline, without needing `<-`:

```idris
-- With bang notation:
case !(getExperiment store eid) of
  Nothing => putStrLn "not found"
  Just e  => process e

-- Equivalent without bang:
do result <- getExperiment store eid
   case result of
     Nothing => putStrLn "not found"
     Just e  => process e
```

The `!` inserts a bind at the point of use. This makes code more concise when you only need the unwrapped value in one place.

**When to drop do-notation** (from the Haskell guide):

Single-statement do blocks are always redundant:

```idris
-- BAD: unnecessary do
greet name = do putStrLn ("Hello " ++ name)

-- GOOD: just drop it
greet name = putStrLn ("Hello " ++ name)
```

Simple chains work well with `(>>=)`:

```idris
getLine >>= putStrLn
```

---

## IO and IORef

### IO

`IO` is the monad for input/output effects. A value of type `IO a` is a description of an I/O action that, when executed, produces a value of type `a`:

```idris
main : IO ()
main = do
  putStrLn "Hello, world!"
  name <- getLine
  putStrLn ("You said: " ++ name)
```

Key IO operations:

```idris
putStr   : String -> IO ()       -- print without newline
putStrLn : String -> IO ()       -- print with newline
getLine  : IO String             -- read a line
pure     : a -> IO a             -- wrap a pure value
```

### IORef: Mutable References

`IORef` provides mutable references inside `IO`. This is the Idris2 equivalent of Haskell's `Data.IORef`:

```idris
import Data.IORef

-- Create a new mutable reference:
counter <- newIORef (the Nat 0)

-- Read the current value:
n <- readIORef counter

-- Write a new value:
writeIORef counter (n + 1)

-- Modify in place:
modifyIORef counter (+ 1)
```

The EDEN in-memory store uses `IORef` extensively:

```idris
record StoreState where
  constructor MkStoreState
  experiments : IORef (List Experiment)
  sessions    : IORef (List Session)
  turns       : IORef (List Turn)
  memes       : IORef (List Meme)
  nextId      : IORef Nat
```

Each field is a mutable reference to a list. Operations read the current list, modify it, and write it back:

```idris
upsertMeme st eid label text domain sk scope now = do
  allMemes <- readIORef st.memes
  let existing = find (\m => m.canonicalLabel == toLower label) allMemes
  case existing of
    Just m => do
      let updated = { usageCount := m.usageCount + 1 } m
      let others = filter (\x => x.id /= m.id) allMemes
      writeIORef st.memes (updated :: others)
      pure updated
    Nothing => do
      mid <- genId st "meme"
      let meme = MkMeme (MkId mid) ...
      modifyIORef st.memes (meme ::)
      pure meme
```

### The purity boundary

The architecture follows the same principle recommended in the Haskell guide: push IO to the edges, keep the core pure.

In the EDEN codebase:
- **Pure core:** `Eden.Regard`, `Eden.Retrieval`, `Eden.Budget`, `Eden.Inference`, `Eden.Membrane`, `Eden.Hum`, `Eden.Ingest` -- all pure computation, no `IO`.
- **IO shell:** `Eden.Store.InMemory`, `Eden.Loop`, `Main` -- these perform I/O, calling into the pure core for computation.

This means the regard breakdown, selection scoring, membrane pipeline, budget estimation, and inference profile resolution can all be tested without any I/O setup.

---

## Traverse and Friends

From the Haskell guide: `traverse_` is the idiomatic way to perform an action on each element of a collection:

```idris
-- Apply a side-effecting function to each element:
traverse_ : (a -> IO ()) -> List a -> IO ()

-- Example from the EDEN codebase:
traverse_ (\m => do
  let (rw', rk', ed') = applyFeedback m.rewardEma m.riskEma m.editEma sig scale
  updateMemeChannels store m.id rw' rk' ed') affected
```

Other traversal functions:

```idris
traverse  : (a -> IO b)  -> List a -> IO (List b)  -- collect results
traverse_ : (a -> IO ()) -> List a -> IO ()          -- discard results
for_      : List a -> (a -> IO ()) -> IO ()           -- flipped traverse_
```

Use `traverse_` when you do not need the results (side effects only). Use `traverse` when you need to collect results.

---

## Maybe and Either as Monads

`Maybe` and `Either` are monads, which means you can chain operations that might fail:

```idris
-- Maybe monad: short-circuits on Nothing
lookup : String -> List (String, a) -> Maybe a

do name  <- lookup "user" env
   perms <- lookup name permissions
   pure perms
-- If any lookup returns Nothing, the whole chain returns Nothing.

-- Either monad: short-circuits on Left
parseConfig : String -> Either ConfigError Config
validateConfig : Config -> Either ConfigError Config

do cfg <- parseConfig raw
   validated <- validateConfig cfg
   pure validated
-- If any step returns Left, the whole chain returns Left with the error.
```

This is the "railway-oriented programming" pattern: success flows forward, failure short-circuits.

---

## Mutual Recursion

When two functions call each other, Idris2 requires a `mutual` block:

```idris
mutual
  replLoop : StoreState -> ExperimentId -> SessionId
          -> IORef Nat -> Timestamp -> IO ()
  replLoop store eid sid turnIdx ts = do
    putStr "\n[you] > "
    input <- getLine
    dispatch store eid sid turnIdx ts (parseCmd input)

  dispatch : StoreState -> ExperimentId -> SessionId
          -> IORef Nat -> Timestamp -> ReplCmd -> IO ()
  dispatch store eid sid turnIdx ts CmdQuit = putStrLn "Goodbye."
  dispatch store eid sid turnIdx ts (CmdChat msg) = do
    handleChat store eid sid turnIdx msg ts
    replLoop store eid sid turnIdx ts
  ...
```

In Haskell, mutual recursion works without any special syntax because all bindings in a module are mutually recursive by default. Idris2 requires the explicit `mutual` block for the totality checker to handle the recursion correctly.

---

## Comparison: Haskell vs Idris2 Conventions

| Concept | Haskell | Idris2 |
|---------|---------|--------|
| Functor map | `fmap` or `<$>` | `map` or `<$>` |
| Return pure value | `return` or `pure` | `pure` (preferred) |
| Semigroup append | `(<>)` | `(<+>)` |
| Monoid identity | `mempty` | `neutral` |
| Void action result | `void action` | `ignore action` or `_ <- action` |
| Conditional action | `when cond action` | `when cond action` |
| Unwrap in expression | not available | `!expr` (bang notation) |
| Strict fold | `foldl'` | `foldl` (Idris2 is strict by default) |
| Type annotation | `expr :: Type` | `the Type expr` or `expr : Type` in let |
| Lambda syntax | `\x -> body` | `\x => body` |
| Case arrows | `case x of { A -> ...; B -> ... }` | `case x of { A => ...; B => ... }` |
