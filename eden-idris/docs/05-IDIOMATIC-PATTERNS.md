# Idiomatic Patterns from Haskell, Adapted for Idris2

This chapter translates the patterns from the Haskell idiom guide into Idris2. Because Haskell and Idris2 share the same FP DNA, most patterns transfer directly with minor syntax changes. Where Idris2 diverges or offers better alternatives, those are noted.

---

## Make Illegal States Unrepresentable

The foundational type-design principle: structure data types so that invalid combinations cannot be constructed.

**Bad:** correlated optionals that can go out of sync:

```idris
-- BAD: shipmentInfo can be Just when status is Outstanding
record Order where
  constructor MkOrder
  status       : OrderStatus
  shipmentInfo : Maybe ShipmentInfo
```

**Good:** separate constructors enforce correlation:

```idris
-- GOOD: paid orders always have shipment info
data Order
  = OutstandingOrder OrderData
  | PaidOrder OrderData ShipmentInfo
```

The EDEN codebase applies this principle throughout:

- `ExplainedVerdict` is indexed by `Verdict`, so `Accept` always carries an explanation, `Edit` always carries corrected text, and `Skip` carries neither.
- `AdmissibleMemode` requires a `Vect (S (S n)) MemeId`, making single-member memodes unconstructable.
- `Scope` is `Global | SessionScoped SessionId`, not a `Maybe SessionId` with an implicit "Nothing means global" convention.

---

## Parse, Don't Validate

From Alexis King's influential blog post: a parser produces structured output from less-structured input. A validator checks a property and throws away the evidence.

```idris
-- VALIDATION: checks but discards information
validateNonEmpty : List a -> IO ()
validateNonEmpty (_ :: _) = pure ()
validateNonEmpty []       = putStrLn "ERROR: empty list"

-- PARSING: checks AND preserves information in the type
parseNonEmpty : List a -> Maybe (a, List a)
parseNonEmpty []        = Nothing
parseNonEmpty (x :: xs) = Just (x, xs)
```

After parsing, downstream code uses the structured result and cannot encounter the invalid case. In Idris2, this principle extends naturally to dependent types:

```idris
-- canMaterialize is a parser that produces a proof or a refutation
canMaterialize : (ids : List MemeId) -> Dec (CanMaterialize ids)
```

The `Dec` return type is the ultimate "parse, don't validate" -- it produces either evidence that the property holds or evidence that it does not.

---

## Prefer Custom Sum Types Over Booleans

The "boolean blindness" problem: `True` from `isAdmin user` looks identical to `True` from `isRed car`. The compiler cannot distinguish them.

```idris
-- BAD: what does True mean?
handleRequest : Bool -> Request -> IO Response

-- GOOD: the type says what it means
data Access = Granted | Denied
handleRequest : Access -> Request -> IO Response
```

The EDEN codebase avoids boolean blindness consistently:

- `Verdict` is `Accept | Reject | Edit | Skip`, not a pair of booleans.
- `PressureLevel` is `Low | Elevated | High`, not a `Double` compared against thresholds at every use site.
- `Domain` is `Knowledge | Behavior`, not a string or boolean.
- `QualityState` is `Clean | Degraded | QualityFailed`, not a numeric range.

Sum types scale: when you add a new variant, the compiler finds every `case` expression that needs updating.

---

## Pattern Match on Sum Types; Do Not Compare with ==

From the Haskell guide: pattern matching gives the compiler structural knowledge for exhaustiveness checking and type refinement:

```idris
-- BAD: treats sum type as boolean
if effective == Manual then req.prTemp else pp.ppTemperature

-- GOOD: pattern match, compiler checks exhaustiveness
case effective of
  Manual      => req.prTemp
  RuntimeAuto => pp.ppTemperature
  AdamAuto    => pp.ppTemperature  -- compiler would warn if missing
```

The EDEN codebase uses `case` throughout for mode dispatch:

```idris
let isManual = case effective of { Manual => True ; _ => False }
```

And for feedback routing:

```idris
case canMaterialize ids of
  Yes (YesMaterialize a b rest) => ...
  No _ => ...
```

---

## Total Functions: Avoid Partial Operations

Haskell's `head`, `tail`, `fromJust`, and `!!` are partial functions that crash on certain inputs. Idris2 has the same issue with some Prelude functions, but the totality checker helps you avoid them.

**The EDEN approach:** use explicit pattern matching or safe alternatives:

```idris
-- BAD: partial, crashes on empty list
processFirst xs = doSomething (head xs)

-- GOOD: pattern match handles both cases
processFirst (x :: _) = doSomething x
processFirst []       = handleEmpty

-- GOOD: return Maybe
processFirst : List a -> Maybe a
processFirst (x :: _) = Just x
processFirst []       = Nothing
```

For list indexing, use `Data.List.index'` (returns `Maybe`) or ensure bounds via types. For `Map` lookups, always handle the `Maybe` result.

---

## Function Composition and Point-Free Style

Idris2 supports the same composition operators as Haskell:

```idris
-- (.) composes right-to-left
totalWordLengths : String -> Nat
totalWordLengths = sum . map length . words

-- ($) is low-precedence application
putStrLn $ show $ 1 + 2
```

Point-free style works well for simple pipelines of named functions. Avoid it when it requires obscure combinator gymnastics:

```idris
-- GOOD: clear pipeline
processText = trim . normalizeNewlines . stripControlChars

-- BAD: too clever, write it pointful instead
-- (uncurry ((.) . (:) . show))
```

---

## Eliminator Functions

From the Haskell guide: use `maybe`, `either`, and `bool` instead of explicit `case` when the function is a simple transform:

```idris
-- Haskell has: maybe defaultValue f maybeValue
-- Idris2 equivalent: fromMaybe, or use maybe from Data.Maybe

-- Instead of:
case mx of
  Nothing => 0
  Just x  => x
-- Write:
fromMaybe 0 mx

-- Instead of:
case result of
  Left e  => handleErr e
  Right v => process v
-- Write:
either handleErr process result
```

Idris2 has `fromMaybe` and `maybe` in `Data.Maybe`, and `either` in `Data.Either`.

---

## Consolidation: Avoid Repetitive Patterns

From the Haskell guide: extract repeated lambdas into named helpers, consolidate repeated operations:

```idris
-- BAD: same formatting logic repeated
putStrLn $ "  reward:      " ++ showDouble rb.reward
putStrLn $ "  evidence:    " ++ showDouble rb.evidence
putStrLn $ "  coherence:   " ++ showDouble rb.coherence

-- BETTER: extract the pattern
let printField name value = putStrLn $ "  " ++ name ++ ": " ++ showDouble value
printField "reward" rb.reward
printField "evidence" rb.evidence
printField "coherence" rb.coherence
```

**`traverse_` replaces explicit loops:**

```idris
-- BAD: manual loop
updateMeme store (head affected)
updateMeme store (head (tail affected))

-- GOOD: traverse_ does the loop
traverse_ (\m => updateMemeChannels store m.id rw' rk' ed') affected
```

---

## Where vs Let

**Use `where`** for function-level helpers that support guards:

```idris
applyMembrane cap raw =
  let (s1, e1) = stripControlChars (trim raw)
      ...
  in MkMembraneResult s6 finalEvents reasoning
  where
    -- where clauses not common in EDEN codebase; let-in preferred
```

**Use `let`** for intermediate bindings, especially in do-blocks:

```idris
executeTurn store eid sid idx userText ts = do
  allMemes <- readIORef store.memes
  let expMemes = filter (\m => m.experimentId == eid) allMemes
  let sw = defaultSelectionWeights
  ...
```

In Idris2, `let ... in ...` is an expression (returns a value). Inside `do` blocks, `let` bindings do not need `in` -- they scope to the rest of the `do` block.

---

## Working with Strings

Idris2 has `String` as a built-in type (not a `[Char]` linked list like Haskell's `String`). Key operations:

```idris
import Data.String

-- Splitting and joining:
lines   : String -> List String
unlines : List String -> String
words   : String -> List String
unwords : List String -> String

-- Searching:
isPrefixOf : String -> String -> Bool
isInfixOf  : String -> String -> Bool

-- Transforming:
toLower : String -> String
toUpper : String -> String
trim    : String -> String
ltrim   : String -> String

-- Substring:
substr : (start : Integer) -> (len : Integer) -> String -> String

-- Conversion:
pack   : List Char -> String
unpack : String -> List Char
```

Unlike Haskell, there is no need to choose between `String`, `Text`, and `ByteString`. Idris2 has one string type. For binary data, use `Buffer` from `Data.Buffer`.

---

## Working with Numbers

Idris2 numeric types and conversions:

```idris
-- Types:
Nat      -- natural numbers (0, 1, 2, ...) -- no negatives
Integer  -- arbitrary precision integers
Int      -- machine integers
Double   -- floating point

-- Cast between types:
cast {to=Integer} myDouble
cast {to=Double} myNat
cast {to=Nat} myInteger    -- careful: negative values become 0

-- Nat-specific subtraction (saturates at 0):
minus : Nat -> Nat -> Nat
minus 3 5  -- 0, not -2
```

The EDEN codebase defines a safe division helper because `Prelude.div` can crash:

```idris
natDiv : Nat -> Nat -> Nat
natDiv n d =
  if d == 0 then 0
  else cast {to=Nat} (the Integer (cast (floor (cast {to=Double} n / cast {to=Double} d))))
```

This pattern -- defensive division through `Double` -- avoids the `div` crash on the RefC backend while remaining correct for the ranges used in budget estimation.

---

## Anti-Pattern Catalogue

Patterns to avoid, adapted from the Haskell guide:

| Anti-pattern | Replacement |
|-------------|-------------|
| Explicit recursion over a list | `map`, `filter`, `foldl`, `traverse_` |
| `if x == True` | `if x` |
| `if x == False` | `if not x` |
| Nested `if-then-else` | `case` expression or multi-clause function |
| `length xs == 0` | `isNil xs` (O(1) vs O(n)) |
| Wildcard `_` when exhaustiveness matters | Explicit pattern for each constructor |
| String comparison for sum types | Pattern match on constructors |
| Partial functions (`head`, `tail`) | Pattern matching or `Maybe`-returning variants |
| Ignoring `Maybe` result | `case` or `fromMaybe` |
| `concat . map f` | `concatMap f` |
| Magic string/number constants | Named constants or sum types |
