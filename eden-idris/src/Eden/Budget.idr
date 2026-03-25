||| Token budgeting and prompt-size estimation.
module Eden.Budget

import Eden.Types

%default total

------------------------------------------------------------------------
-- Pressure levels
------------------------------------------------------------------------

public export
data PressureLevel = Low | Elevated | High

public export
Show PressureLevel where
  show Low      = "LOW"
  show Elevated = "ELEVATED"
  show High     = "HIGH"

public export
pressureLevel : (ratio : Double) -> PressureLevel
pressureLevel r =
  if r >= 0.9 then High
  else if r >= 0.7 then Elevated
  else Low

------------------------------------------------------------------------
-- Budget estimate
------------------------------------------------------------------------

public export
record BudgetEstimate where
  constructor MkBudgetEstimate
  contextWindowTokens  : Nat
  promptBudgetTokens   : Nat
  reservedOutputTokens : Nat
  systemTokens         : Nat
  activeSetTokens      : Nat
  historyTokens        : Nat
  feedbackTokens       : Nat
  userTokens           : Nat
  usedPromptTokens     : Nat
  remainingInputTokens : Nat
  userChars            : Nat
  remainingInputChars  : Nat
  exact                : Bool
  responseCharCap      : Nat
  pressureRatio        : Double
  pressure             : PressureLevel
  activeSetItems       : Nat
  historyTurnCount     : Nat

------------------------------------------------------------------------
-- Nat division helper
------------------------------------------------------------------------

||| Integer division for Nat via Double cast (avoids Prelude.div crash).
export
natDiv : Nat -> Nat -> Nat
natDiv n d =
  if d == 0 then 0
  else cast {to=Nat} (the Integer (cast (floor (cast {to=Double} n / cast {to=Double} d))))

------------------------------------------------------------------------
-- Token estimation (~4 chars/token)
------------------------------------------------------------------------

public export
estimateTokens : Nat -> Nat
estimateTokens chars = natDiv (chars + 3) 4

public export
estimateChars : Nat -> Nat
estimateChars tokens = tokens * 4

------------------------------------------------------------------------
-- Budget computation
------------------------------------------------------------------------

public export
estimateBudget : (ctxWin : Nat) -> (pb : Nat) -> (ro : Nat)
              -> (sc : Nat) -> (asc : Nat) -> (hc : Nat)
              -> (fc : Nat) -> (uc : Nat) -> (rcc : Nat)
              -> (asi : Nat) -> (htc : Nat) -> (isExact : Bool)
              -> BudgetEstimate
estimateBudget ctxWin pb ro sc asc hc fc uc rcc asi htc isExact =
  let sysTok  = estimateTokens sc
      asTok   = estimateTokens asc
      hisTok  = estimateTokens hc
      fbTok   = estimateTokens fc
      usrTok  = estimateTokens uc
      usedTok = sysTok + asTok + hisTok + fbTok + usrTok
      remTok  = if usedTok >= pb then 0 else minus pb usedTok
      remChr  = estimateChars remTok
      ratio   = if pb == 0 then 1.0
                else cast usedTok / cast pb
  in MkBudgetEstimate
       { contextWindowTokens  = ctxWin
       , promptBudgetTokens   = pb
       , reservedOutputTokens = ro
       , systemTokens         = sysTok
       , activeSetTokens      = asTok
       , historyTokens        = hisTok
       , feedbackTokens       = fbTok
       , userTokens           = usrTok
       , usedPromptTokens     = usedTok
       , remainingInputTokens = remTok
       , userChars            = uc
       , remainingInputChars  = remChr
       , exact                = isExact
       , responseCharCap      = rcc
       , pressureRatio        = ratio
       , pressure             = pressureLevel ratio
       , activeSetItems       = asi
       , historyTurnCount     = htc
       }

------------------------------------------------------------------------
-- Adaptive response cap
------------------------------------------------------------------------

public export
adaptiveResponseCap : Nat -> PressureLevel -> Nat
adaptiveResponseCap base Low      = base
adaptiveResponseCap base Elevated = natDiv (base * 3) 4
adaptiveResponseCap base High     = natDiv base 2
