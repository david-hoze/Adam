||| Runtime configuration: weights, settings, and profile defaults.
module Eden.Config

import Eden.Types

%default total

------------------------------------------------------------------------
-- Regard weights
------------------------------------------------------------------------

public export
record RegardWeights where
  constructor MkRegardWeights
  wReward      : Double
  wEvidence    : Double
  wCoherence   : Double
  wPersistence : Double
  wDecay       : Double
  wIsolation   : Double
  wRisk        : Double

public export
defaultRegardWeights : RegardWeights
defaultRegardWeights = MkRegardWeights
  { wReward      = 1.25
  , wEvidence    = 0.75
  , wCoherence   = 0.95
  , wPersistence = 0.8
  , wDecay       = 0.65
  , wIsolation   = 0.7
  , wRisk        = 1.1
  }

------------------------------------------------------------------------
-- Selection weights
------------------------------------------------------------------------

public export
record SelectionWeights where
  constructor MkSelectionWeights
  wSemantic     : Double
  wActivation   : Double
  wRegard       : Double
  wSessionBias  : Double
  wFeedback     : Double
  wScopePenalty : Double
  wMembrane     : Double

public export
defaultSelectionWeights : SelectionWeights
defaultSelectionWeights = MkSelectionWeights
  { wSemantic     = 1.2
  , wActivation   = 0.7
  , wRegard       = 0.95
  , wSessionBias  = 0.35
  , wFeedback     = 0.5
  , wScopePenalty = 0.4
  , wMembrane     = 0.75
  }

------------------------------------------------------------------------
-- Runtime settings
------------------------------------------------------------------------

public export
data Backend = MLX | Mock | Claude

public export
Show Backend where
  show MLX    = "mlx"
  show Mock   = "mock"
  show Claude = "claude"

public export
record RuntimeSettings where
  constructor MkRuntimeSettings
  modelBackend        : Backend
  modelPath           : Maybe String
  maxContextItems     : Nat
  retrievalDepth      : Nat
  historyTurns        : Nat
  debug               : Bool
  observatoryHost     : String
  observatoryPort     : Nat
  observatoryPortSpan : Nat
  regardWeights       : RegardWeights
  selectionWeights    : SelectionWeights

public export
defaultSettings : RuntimeSettings
defaultSettings = MkRuntimeSettings
  { modelBackend        = MLX
  , modelPath           = Nothing
  , maxContextItems     = 8
  , retrievalDepth      = 12
  , historyTurns        = 3
  , debug               = True
  , observatoryHost     = "127.0.0.1"
  , observatoryPort     = 8741
  , observatoryPortSpan = 24
  , regardWeights       = defaultRegardWeights
  , selectionWeights    = defaultSelectionWeights
  }
