# Functional Programming Foundations

This chapter covers the core functional programming concepts that underpin both Haskell and Idris2. If you know Haskell, skim this for Idris2 syntax differences. If you are new to FP, read carefully -- every later chapter builds on these ideas.

---

## Pure Functions

A pure function always produces the same output for the same input and has no side effects. No mutation, no I/O, no reading global state.

```idris
-- Pure: same input always yields same output
double : Nat -> Nat
double n = n + n

-- Pure: no side effects, just data transformation
greet : String -> String
greet name = "Hello, " ++ name ++ "."
```

Consequences of purity:

- **Trivially testable.** No mock objects, no setup, no dependency injection. `double 5 == 10` is the whole test.
- **Referential transparency.** Any expression can be replaced by its value without changing program behavior. `double 3` and `6` are interchangeable everywhere.
- **Thread-safe by default.** Pure functions cannot access shared mutable state, so there are no data races.
- **Equational reasoning.** You can substitute equals for equals, just like in algebra: `map f . map g == map (f . g)`.

In both Haskell and Idris2, the type system enforces the boundary between pure and effectful code. A function with type `Nat -> Nat` literally cannot perform I/O -- the type system prevents it. I/O lives in the `IO` monad (covered in chapter 4).

---

## Immutability

Values in Idris2 are immutable by default. There is no assignment operator that overwrites a variable. "Updating" a record means constructing a new record with some fields changed:

```idris
record Point where
  constructor MkPoint
  x : Double
  y : Double

-- This does NOT mutate the original point.
-- It creates a new Point with a different x.
moveRight : Point -> Point
moveRight p = { x := p.x + 1.0 } p
```

Mutable state exists only inside `IO` (via `IORef`) or effect systems. In the EDEN codebase, `StoreState` uses `IORef` for mutable references, but all the core logic (regard computation, selection scoring, membrane pipeline, budget estimation) is pure.

---

## Algebraic Data Types (ADTs)

ADTs are the fundamental way to model data in Idris2. There are two kinds:

### Product types (records / structs)

A product type bundles multiple values together. Every value of the type contains all the fields:

```idris
record RegardWeights where
  constructor MkRegardWeights
  wReward   : Double
  wEvidence : Double
  wRisk     : Double
```

### Sum types (tagged unions / enums)

A sum type is one of several alternatives. Each alternative can carry different data:

```idris
data Verdict = Accept | Reject | Edit | Skip

data Scope = Global | SessionScoped SessionId
```

`Verdict` has four constructors, none carrying data. `Scope` has two: `Global` carries nothing, `SessionScoped` carries a `SessionId`.

### The power: combining sums and products

Real domain modeling uses both together:

```idris
data DocKind = PDF | Markdown | PlainText | CSV

record Document where
  constructor MkDocument
  id     : DocumentId
  path   : String
  kind   : DocKind     -- sum type as a field
  status : DocStatus   -- another sum type
```

This is the "make illegal states unrepresentable" principle from the Haskell type-safety guide. If a document can be in exactly four formats, model it as a four-constructor sum type -- not as a `String` that you hope contains "pdf" or "markdown".

### Recursive ADTs

ADTs can refer to themselves. The standard list is a recursive ADT:

```idris
-- Built into Idris2, but conceptually:
data List a = Nil | (::) a (List a)
```

`Nil` is the empty list. `(::)` (pronounced "cons") prepends an element to an existing list. Every list is either empty or an element followed by a smaller list.

---

## Pattern Matching

Pattern matching is the primary way to destructure ADTs. It replaces `if-else` chains, `switch` statements, and `instanceof` checks:

```idris
feedbackSignal : Verdict -> FeedbackSignal
feedbackSignal Accept = MkFeedbackSignal 1.0    (-0.1)  0.0
feedbackSignal Edit   = MkFeedbackSignal 0.45   0.15    0.9
feedbackSignal Reject = MkFeedbackSignal (-0.4) 1.0     0.0
feedbackSignal Skip   = MkFeedbackSignal 0.0    0.05    0.0
```

Each line handles one constructor. The compiler checks exhaustiveness -- if you add a fifth `Verdict` constructor, every function that pattern-matches on `Verdict` gets a compile error until you handle the new case. This is qualitatively superior to `if-else` chains, which give the compiler no structural knowledge.

### Pattern matching on records

Use named field access or destructuring:

```idris
-- Named access (dot syntax):
regardBreakdown w ns gm =
  let act = activationDecay ns.nsDeltaSec ns.nsActivTau
  ...

-- Constructor pattern:
showId : Id a -> String
showId (MkId s) = s
```

### Nested pattern matching with `case`

```idris
stripAnswerLabel : String -> (String, Bool)
stripAnswerLabel s =
  let ls = lines s
  in case ls of
       [] => (s, False)
       (first :: rest) =>
         if isPrefixOf "Answer:" (ltrim first)
           then (ltrim (substr 7 (cast (length first)) first), True)
           else (s, False)
```

### Avoid wildcard patterns when exhaustiveness matters

From the Haskell guide: wildcard patterns (`_`) defeat exhaustiveness checking:

```idris
-- BAD: adding a new Verdict silently falls through
isPositive : Verdict -> Bool
isPositive Accept = True
isPositive _      = False  -- new constructors silently treated as False

-- GOOD: every constructor handled explicitly
isPositive : Verdict -> Bool
isPositive Accept = True
isPositive Edit   = False
isPositive Reject = False
isPositive Skip   = False
```

Use wildcards only when you genuinely want a catch-all (e.g., `propagateScale Edit = 0.65; propagateScale _ = 0.80` -- all non-edit verdicts share the same scale).

---

## Higher-Order Functions

A higher-order function takes a function as an argument or returns a function as a result. This is the primary abstraction mechanism in FP:

```idris
-- map applies a function to every element of a list
map : (a -> b) -> List a -> List b

-- filter keeps elements that satisfy a predicate
filter : (a -> Bool) -> List a -> List a

-- sortBy takes a comparison function
sortBy : (a -> a -> Ordering) -> List a -> List a
```

In the EDEN codebase:

```idris
-- Sorting candidates by descending score
selectTopK k candidates =
  let sorted = sortBy (\a, b => compare b.selection a.selection) candidates
  in take k sorted

-- Mapping over memes to compute scores
scored = map (\m =>
  let reg = m.rewardEma - 0.3 * m.riskEma
      sc  = scoreCandidate sw sid ...
  in MkCandidateScore ...) expMemes
```

### Lambda expressions

Anonymous functions use `\args => body` syntax (backslash, not lambda symbol):

```idris
-- Single argument
map (\x => x + 1) [1, 2, 3]  -- [2, 3, 4]

-- Multiple arguments
sortBy (\a, b => compare a.label b.label) memes

-- Idris2 also supports pattern-matching lambdas
map (\(MkId s) => s) ids
```

### Partial application and currying

Every function in Idris2 is curried -- a multi-argument function is actually a chain of single-argument functions. This means you can supply fewer arguments than expected and get back a function:

```idris
add : Nat -> Nat -> Nat
add x y = x + y

addFive : Nat -> Nat
addFive = add 5  -- partially applied

map (add 5) [1, 2, 3]  -- [6, 7, 8]
```

---

## Function Composition

The `(.)` operator composes two functions right-to-left: `(f . g) x = f (g x)`.

```idris
-- In Haskell:
-- totalWordLengths = sum . map length . words

-- In Idris2 (same concept, same operator):
totalWordLengths : String -> Nat
totalWordLengths = sum . map length . words
```

Function composition is the FP equivalent of piping. Read `f . g . h` as "first apply h, then g, then f."

The `($)` operator is function application with low precedence, used to avoid parentheses:

```idris
-- These are equivalent:
putStrLn (show (1 + 2))
putStrLn $ show $ 1 + 2
```

---

## Folds: The Universal Loop

Folds replace explicit recursion. Instead of writing a recursive function, describe: what is the initial value, and how do you combine one element with the accumulator?

```idris
-- sum via fold
sum : List Nat -> Nat
sum = foldl (+) 0

-- count via fold
count : List a -> Nat
count = foldl (\acc, _ => acc + 1) 0
```

Key fold variants:

| Function | Direction | Strictness | Use for |
|----------|-----------|------------|---------|
| `foldl` | left | lazy in Haskell, varies in Idris2 | reducing to a value (sums, counts) |
| `foldr` | right | -- | building data structures, short-circuiting |
| `foldMap` | left | -- | mapping elements to a `Monoid` and combining |

In Haskell, you must use `foldl'` (strict) instead of `foldl` (lazy) to avoid space leaks. Idris2 is strict by default, so this is less of a concern, but the principle still applies: prefer explicit folds over manual recursion.

Other essential higher-order functions:

```idris
traverse_ : (a -> IO ()) -> List a -> IO ()    -- "for each" loop
concatMap : (a -> List b) -> List a -> List b   -- flatMap
take : Nat -> List a -> List a
drop : Nat -> List a -> List a
takeWhile : (a -> Bool) -> List a -> List a
any : (a -> Bool) -> List a -> Bool
all : (a -> Bool) -> List a -> Bool
```

---

## The Maybe and Either Types

`Maybe` represents optional values. `Either` represents values that can be one of two types (typically success or failure):

```idris
-- Maybe: presence or absence
data Maybe a = Nothing | Just a

-- Either: success or failure with information
data Either a b = Left a | Right b
```

Pattern match to handle both cases:

```idris
getExperiment : StoreState -> ExperimentId -> IO (Maybe Experiment)
getExperiment st eid = do
  exps <- readIORef st.experiments
  pure (find (\e => e.id == eid) exps)

-- Caller must handle both cases:
case !(getExperiment store eid) of
  Nothing => putStrLn "Experiment not found"
  Just exp => processExperiment exp
```

The "parse, don't validate" principle from the Haskell guide applies equally here: prefer functions that return structured types (`Maybe`, `Either`) over functions that validate and throw away information.

---

## Total vs Partial Functions

A total function produces a result for every possible input. A partial function crashes on some inputs:

```idris
-- PARTIAL: crashes on empty list
head : List a -> a

-- TOTAL: returns Maybe
head' : List a -> Maybe a
head' [] = Nothing
head' (x :: _) = Just x
```

Idris2 has a totality checker (enabled with `%default total` at module level). The EDEN codebase uses `%default total` in most modules, meaning the compiler rejects any function that:
- Is not defined for all input patterns
- Does not provably terminate (for recursive functions)

When you need a non-total function (e.g., an interactive loop), mark it explicitly:

```idris
%default total

-- The compiler accepts this because we declared totality default.
-- But we can opt out for specific functions:
partial
replLoop : StoreState -> IO ()
```

Total functions eliminate entire categories of runtime crashes. They are the Idris2 counterpart to Haskell's advice to avoid `head`, `tail`, `fromJust`, and other partial Prelude functions.
