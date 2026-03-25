# EDEN Idris2 Developer Reference

Practical documentation for working on the EDEN Idris2 codebase. Covers functional programming foundations, Idris2-specific features, and patterns used in this project.

## Contents

1. [Functional Programming Foundations](01-FUNCTIONAL-FOUNDATIONS.md) -- Pure functions, immutability, algebraic data types, pattern matching, higher-order functions, composition, and the ideas that underpin everything else.

2. [Idris2 Type System and Dependent Types](02-DEPENDENT-TYPES.md) -- Dependent types, totality checking, universe polymorphism, the `Dec` type, proofs as programs, and how Idris2 goes beyond Haskell.

3. [Interfaces, Records, and Deriving](03-INTERFACES-AND-RECORDS.md) -- Idris2 interfaces (Haskell's typeclasses), record syntax, named field access, visibility modifiers, and how to structure data.

4. [Monads, Effects, and IO](04-MONADS-AND-EFFECTS.md) -- Functors, applicatives, monads, do-notation, IORef, and how effects work in Idris2 compared to Haskell.

5. [Idiomatic Patterns from Haskell](05-IDIOMATIC-PATTERNS.md) -- Haskell best practices adapted for Idris2: point-free style, composition, eliminator functions, working with Maybe/Either, and terse coding patterns.

6. [EDEN Codebase Patterns](06-EDEN-PATTERNS.md) -- Phantom-tagged IDs, decision procedures, state machines via indexed types, the storage interface, and other patterns specific to this project.

7. [Gotchas and Platform Notes](07-GOTCHAS.md) -- Reserved words, tuple arity limits, RefC backend considerations, Windows/MSYS2 issues, and other things that will bite you.
