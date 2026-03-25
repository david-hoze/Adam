||| Inference profile system: modes and presets.
|||
||| adam_auto falls back to runtime_auto — no hidden governor exists.
module Eden.Inference

import Eden.Types

%default total

------------------------------------------------------------------------
-- Inference mode
------------------------------------------------------------------------

public export
data InferenceMode = Manual | RuntimeAuto | AdamAuto

public export
Eq InferenceMode where
  Manual      == Manual      = True
  RuntimeAuto == RuntimeAuto = True
  AdamAuto    == AdamAuto    = True
  _           == _           = False

public export
Show InferenceMode where
  show Manual      = "manual"
  show RuntimeAuto = "runtime_auto"
  show AdamAuto    = "adam_auto"

------------------------------------------------------------------------
-- Budget mode (preset)
------------------------------------------------------------------------

public export
data BudgetMode = Tight | Balanced | Wide

public export
Show BudgetMode where
  show Tight    = "tight"
  show Balanced = "balanced"
  show Wide     = "wide"

------------------------------------------------------------------------
-- Preset parameters
------------------------------------------------------------------------

public export
record PresetParams where
  constructor MkPresetParams
  ppBudgetTokens  : Nat
  ppTemperature   : Double
  ppMaxOutput     : Nat
  ppRetrDepth     : Nat
  ppMaxCtxItems   : Nat
  ppResponseCap   : Nat

public export
presetParams : BudgetMode -> PresetParams
presetParams Tight = MkPresetParams 3072 0.25 512  8  6  2200
presetParams Balanced = MkPresetParams 5120 0.4  1200 12 8  5200
presetParams Wide = MkPresetParams 7168 0.55 1600 16 10 6800

------------------------------------------------------------------------
-- Profile request
------------------------------------------------------------------------

public export
record ProfileRequest where
  constructor MkProfileRequest
  prMode      : InferenceMode
  prTemp      : Double
  prMaxOutput : Nat
  prTopP      : Double
  prRepPen    : Double
  prRetrDepth : Nat
  prMaxCtx    : Nat
  prHistTurns : Nat
  prRespCap   : Nat
  prLowMotion : Bool
  prDebug     : Bool
  prBudget    : BudgetMode
  prTitle     : String

public export
defaultProfileRequest : ProfileRequest
defaultProfileRequest = MkProfileRequest
  Manual 0.4 1200 0.9 1.05 12 8 3 5200 False True Balanced "Operator Session"

------------------------------------------------------------------------
-- Mode resolution
------------------------------------------------------------------------

||| adam_auto falls back to runtime_auto. No hidden governor.
public export
resolveMode : InferenceMode -> InferenceMode
resolveMode AdamAuto = RuntimeAuto
resolveMode m        = m

------------------------------------------------------------------------
-- Resolved profile
------------------------------------------------------------------------

public export
record ResolvedProfile where
  constructor MkResolvedProfile
  rpRequested    : InferenceMode
  rpEffective    : InferenceMode
  rpBudgetMode   : BudgetMode
  rpBudgetTokens : Nat
  rpTemp         : Double
  rpMaxOutput    : Nat
  rpTopP         : Double
  rpRepPen       : Double
  rpRetrDepth    : Nat
  rpMaxCtx       : Nat
  rpHistTurns    : Nat
  rpRespCap      : Nat
  rpLowMotion    : Bool
  rpDebug        : Bool
  rpRationale    : List String
  rpGeneratedAt  : Timestamp

public export
resolveProfile : ProfileRequest -> Timestamp -> ResolvedProfile
resolveProfile req now =
  let effective = resolveMode req.prMode
      pp        = presetParams req.prBudget
      isManual  = case effective of { Manual => True ; _ => False }
      temp = if isManual then req.prTemp      else pp.ppTemperature
      mo   = if isManual then req.prMaxOutput else pp.ppMaxOutput
      rd   = if isManual then req.prRetrDepth else pp.ppRetrDepth
      mc   = if isManual then req.prMaxCtx    else pp.ppMaxCtxItems
      rc   = if isManual then req.prRespCap   else pp.ppResponseCap
      bt   = pp.ppBudgetTokens
      rat  = case effective of
        Manual      => ["Operator chose manual mode; parameters preserved."]
        RuntimeAuto => ["Runtime auto; preset applied."]
        AdamAuto    => ["adam_auto fell back to runtime_auto; no hidden governor."]
  in MkResolvedProfile
       { rpRequested    = req.prMode
       , rpEffective    = effective
       , rpBudgetMode   = req.prBudget
       , rpBudgetTokens = bt
       , rpTemp         = temp
       , rpMaxOutput    = mo
       , rpTopP         = req.prTopP
       , rpRepPen       = req.prRepPen
       , rpRetrDepth    = rd
       , rpMaxCtx       = mc
       , rpHistTurns    = req.prHistTurns
       , rpRespCap      = rc
       , rpLowMotion    = req.prLowMotion
       , rpDebug        = req.prDebug
       , rpRationale    = rat
       , rpGeneratedAt  = now
       }

------------------------------------------------------------------------
-- Proofs
------------------------------------------------------------------------

||| adam_auto always resolves to runtime_auto in v1.
public export
adamAutoFallback : resolveMode AdamAuto = RuntimeAuto
adamAutoFallback = Refl

||| manual mode is preserved.
public export
manualPreserved : resolveMode Manual = Manual
manualPreserved = Refl
