    Yes, absolutely. Here's where monads would add real value to the Idris2 EDEN codebase:

    1. A custom Eden monad stack — Right now the Loop and Store modules thread StoreState, ExperimentId, SessionId, Timestamp, and TraceLog through every function call
    manually. A reader+state monad would eliminate that plumbing:

    record EdenEnv where
      constructor MkEdenEnv
      store : StoreState
      eid   : ExperimentId
      sid   : SessionId
      ts    : Timestamp
      trace : TraceLog

    EdenM : Type -> Type
    EdenM = ReaderT EdenEnv IO

    Then executeTurn, processFeedback, indexTurn, etc. would just be EdenM TurnResult instead of taking 6+ explicit parameters.

    2. Either-based error handling — Right now errors are silent. Functions like upsertMeme and createEdge can't fail, but the real pipeline has failure modes (bad
    document, invalid state). An EitherT EdenError EdenM would make errors explicit and composable without nested case matching.

    3. Writer monad for trace events — Instead of passing TraceLog around and calling traceEvent imperatively, a WriterT (List TraceEntry) would let trace events accumulate
     naturally through the pipeline and get flushed at the end. Each pipeline step just tells its events.

    4. State monad for the phase machine — The PhasedTurn type already encodes valid transitions, but the current code constructs each phase manually. A StateT (DPair
    TurnPhase PhasedTurn) could track the current phase and enforce transitions through the monad interface.

    5. Maybe monad for retrieval chains — The getExperiment >>= getSession >>= getMeme lookup chains would read more naturally with monadic bind instead of nested case on
    Maybe.

    The biggest win is #1 — the environment monad. Almost every function in Loop.idr and Store/InMemory.idr carries the same 4-5 parameters. That's exactly what ReaderT
    solves. Idris2 has Control.Monad.Reader and Control.Monad.State in contrib, or you can define a lightweight version directly.

