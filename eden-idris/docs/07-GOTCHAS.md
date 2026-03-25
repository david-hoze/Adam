# Gotchas and Platform Notes

Known issues, sharp edges, and platform-specific considerations for developing the EDEN Idris2 codebase. Read this before you waste an hour debugging something that is already documented here.

---

## Language Gotchas

### `prefix` is a reserved word

In Idris2, `prefix` is a reserved keyword used for fixity declarations. You **cannot** use it as a variable name, function name, or field name:

```idris
-- WILL NOT COMPILE:
record Config where
  constructor MkConfig
  prefix : String    -- ERROR: unexpected reserved word 'prefix'

-- FIX: choose a different name
record Config where
  constructor MkConfig
  namePrefix : String
```

This also applies to `infixl`, `infixr`, `infix`, `postfix`, and other fixity-related keywords.

### Other reserved words that surprise Haskell programmers

Words that are valid identifiers in Haskell but reserved in Idris2:

| Word | Idris2 meaning | Suggested alternative name |
|------|---------------|---------------------------|
| `prefix` | fixity declaration | `namePrefix`, `pfx` |
| `record` | record declaration | `entry`, `row` |
| `data` | data declaration | `payload`, `content` |
| `where` | clause block | `ctx`, `env` |
| `with` | with-views pattern matching | `using`, `via` |
| `rewrite` | rewriting in proofs | `transform` |
| `impossible` | proof tactic | -- |
| `auto` | implicit resolution | -- |
| `default` | default method | -- |
| `total`, `partial`, `covering` | totality annotations | -- |
| `namespace` | nested namespace | -- |

When in doubt, try a different name. The Idris2 error message for reserved word conflicts is usually clear.

---

### Tuple arity limits

Idris2 tuples are syntactic sugar for nested pairs. Large tuples can cause problems:

```idris
-- This is fine:
(Int, String, Double)  -- desugars to (Int, (String, Double))

-- This works but gets unwieldy:
(Int, String, Double, Bool, Nat, String, Char, Double)
```

**Practical limit:** tuples of arity 8+ can hit parse issues or confusing type errors on some backends. The Idris2 parser handles them, but error messages become unhelpful.

**The EDEN solution:** use records instead of large tuples. The `FeedbackRecord` in `Eden.Store.InMemory` exists specifically because an 8-field tuple hit parse limitations:

```idris
-- This was originally an 8-tuple, which caused parse issues:
-- IORef (List (FeedbackId, ExperimentId, SessionId, TurnId,
--              Verdict, String, String, FeedbackSignal))

-- Fix: use a record
record FeedbackRecord where
  constructor MkFeedbackRecord
  frId           : FeedbackId
  frExperimentId : ExperimentId
  frSessionId    : SessionId
  frTurnId       : TurnId
  frVerdict      : Verdict
  frExplanation  : String
  frCorrected    : String
  frSignal       : FeedbackSignal
```

**Rule of thumb:** if you need more than 3-4 fields, use a record. Records are self-documenting, support named access, and never hit arity limits.

### Triple return values

Returning triples is fine and used in the codebase:

```idris
splitReasoning : String -> (String, String, Bool)
applyFeedback : ... -> (Double, Double, Double)
```

But for 4+ return values, prefer a record.

---

### Integer division crashes (RefC backend)

`Prelude.div` and `Prelude.mod` can crash on the RefC backend with a division-by-zero error, even for `Nat`:

```idris
-- CRASHES at runtime on RefC:
let result = div 10 0

-- Also crashes: integer division of Nat
let result = the Nat (div 10 0)
```

**The EDEN solution:** the codebase defines a safe division helper in `Eden.Budget`:

```idris
natDiv : Nat -> Nat -> Nat
natDiv n d =
  if d == 0 then 0
  else cast {to=Nat}
    (the Integer (cast (floor (cast {to=Double} n / cast {to=Double} d))))
```

This routes through `Double` division, which returns `Infinity` on divide-by-zero (caught by the `d == 0` guard). Use `natDiv` instead of `div` throughout the codebase.

---

### `cast` semantics can surprise

`cast` between numeric types has edge cases:

```idris
-- Negative Double to Nat: truncates to 0
cast {to=Nat} (-5.0 : Double)  -- 0

-- Large Double to Nat: may overflow or behave unexpectedly
cast {to=Nat} (1e18 : Double)  -- backend-dependent

-- Nat subtraction saturates at 0
minus 3 5  -- 0, not -2
```

Always consider the domain of values when casting. The `bounded` function is used throughout the codebase to clamp values to safe ranges before casting:

```idris
-- Safe pattern:
let ratio = bounded 0.0 1.0 (cast used / cast total)
```

---

### Show instance for Double

Idris2's built-in `Show Double` may produce different formatting than expected:

```idris
show 0.1  -- might print "0.1" or "1e-1" depending on backend
```

The EDEN codebase defines a `showDouble` helper in `Main.idr` for consistent display:

```idris
showDouble : Double -> String
showDouble d =
  let i = cast {to=Integer} (d * 1000.0)
  in show (cast {to=Double} i / 1000.0)
```

This truncates to 3 decimal places. Use it for display purposes; do not use it in computations.

---

### String operations: `substr` takes Integer, not Nat

The `substr` function takes `Integer` arguments for start position and length, not `Nat`:

```idris
substr : (start : Integer) -> (len : Integer) -> String -> String

-- You must cast Nat to Integer:
substr 0 (cast (length s)) s
```

This is a common source of type errors when you have a `Nat` from `length` and try to pass it to `substr`.

---

### No `where` clause in `case` branches

Unlike Haskell, Idris2 does not support `where` clauses inside `case` branches:

```idris
-- DOES NOT WORK in Idris2:
case x of
  Foo => result
    where result = compute something

-- FIX: use let-in instead:
case x of
  Foo => let result = compute something in result
```

---

## RefC Backend Considerations

The RefC backend compiles Idris2 to C, then uses a C compiler. This is the primary backend for the EDEN project on Windows/MSYS2.

### Building

```bash
# In MSYS2:
idris2 --build eden.ipkg

# Or for a single-file test:
idris2 --cg refc -o test TestMath.idr
```

### Runtime characteristics

- **Garbage collection:** RefC uses reference counting, not a tracing GC. Circular references will leak. The EDEN codebase does not create circular data structures, so this is not an issue.
- **Performance:** RefC-compiled code is slower than native Haskell (GHC). The codebase is designed for correctness, not performance. For performance-critical paths, the Python EDEN runtime uses MLX/GPU inference.
- **Strictness:** Idris2 is strict by default (unlike Haskell). There are no space leaks from lazy thunk accumulation.

### Known RefC issues

- **Large case expressions** can generate very large C functions that some C compilers struggle with. If compilation is slow or fails, try splitting large case expressions into helper functions.
- **String operations** are O(n) for most things (length, indexing, substr). This is acceptable for the EDEN codebase where strings are short (labels, prompts, IDs).
- **No FFI for complex C libraries** without manual binding work. The in-memory store exists because SQLite FFI bindings are non-trivial.

---

## Windows / MSYS2 Considerations

The EDEN Idris2 codebase is developed on Windows using MSYS2 (MINGW64).

### Path separators

MSYS2 uses forward slashes internally but the Windows filesystem uses backslashes. Idris2 string operations work with whatever you give them, but be consistent:

```idris
-- Prefer forward slashes in string paths:
let path = "data/eden.db"
-- Not: "data\\eden.db"
```

### Line endings

MSYS2 git may convert line endings. The `.idr` files should use Unix line endings (LF, not CRLF). If you see `\r` in string comparisons or pattern matches, check your git config:

```bash
git config core.autocrlf input
```

### Building Idris2 itself

If you need to build Idris2 from source on MSYS2:

```bash
pacman -S mingw-w64-x86_64-gcc make
```

The RefC backend requires a C compiler. MSYS2's `mingw-w64-x86_64-gcc` works. The Chez Scheme backend (`--cg chez`) is faster for development but requires Chez Scheme installed.

### Running compiled binaries

RefC-compiled binaries are native Windows executables. They can be run from MSYS2 or from `cmd.exe`:

```bash
# From MSYS2:
./build/exec/eden

# From cmd.exe:
build\exec\eden.exe
```

---

## Common Type Errors and Their Fixes

### "Can't find an implementation for ..."

You are using an interface method on a type that does not have an implementation. Either:
1. Write the implementation
2. Check that the correct module is imported
3. Check that the type is what you think it is (print it with a typed hole `?foo`)

### "Mismatch between ... and ..."

Type mismatch. Common causes:
- Passing an `Id ExperimentTag` where `Id SessionTag` is expected (phantom tags doing their job)
- Using `Nat` where `Integer` is expected or vice versa (use `cast`)
- Returning `IO a` where `a` is expected (forgot `pure` or `<-`)

### "... is not strictly positive"

A data type refers to itself in a negative position (e.g., as a function argument). This is rejected because it could enable non-termination. Restructure the type to avoid this.

### "... is possibly not total"

The totality checker cannot prove your function terminates. Options:
1. Restructure to use a structurally smaller argument in recursive calls
2. Use `assert_total` if you know it terminates but cannot prove it
3. Mark the function as `partial`

### "... is a reserved word"

You used a keyword as an identifier. See the reserved words table above.

---

## Tips for Productive Development

### Use typed holes for exploration

Insert `?holeName` anywhere in your code. The compiler will tell you the expected type and the variables in scope:

```idris
myFunc : List Meme -> MemeId -> Maybe Meme
myFunc memes mid = ?whatGoesHere
-- Compiler reports: whatGoesHere : Maybe Meme
-- Available: memes : List Meme, mid : MemeId
```

This is the Idris2 equivalent of Haskell's typed holes (`_`). Use it when you are unsure what expression to write -- the compiler will tell you what type it needs.

### Build incrementally

Type-check a single file without building the whole project:

```bash
idris2 --check src/Eden/Types.idr
```

Or build the whole project:

```bash
idris2 --build eden.ipkg
```

### Read the Idris2 REPL output

The Idris2 REPL is useful for exploring types:

```bash
idris2
> :t map
> :t the
> :doc Maybe
```

### Keep modules small

Each module should do one thing. The current module structure -- one module per subsystem -- is a good size. If a module grows past ~300 lines, consider splitting it.
