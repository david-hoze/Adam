function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function makeMeasurementEvent(overrides = {}) {
  return {
    id: "evt-baseline-001",
    action_type: "geometry_measurement_run",
    evidence_label: "DERIVED",
    operator_label: "baseline_probe",
    measurement_method: "selection_geometry",
    confidence: 0.82,
    rationale: "Baseline local geometry measurement for the persistence loop.",
    created_at: "2026-03-11T12:00:00Z",
    target_ids: ["meme-persistence", "meme-retrieval"],
    before_state: {},
    proposed_state: { selection: ["meme-persistence", "meme-retrieval"] },
    committed_state: { summary: "Selection geometry captured for persistence/retrieval." },
    ...overrides,
  };
}

function makeNormalGraph(sourceGraphHash = "graph-hash-normal-v1") {
  const measurementHistory = [{ id: "evt-baseline-001", action_type: "geometry_measurement_run" }];
  const semanticNodes = [
    {
      id: "meme-persistence",
      label: "Persistence Loop",
      kind: "meme",
      domain: "behavior",
      source_kind: "operator_seed",
      summary: "Recurrence motif that keeps a claim active across turns.",
      created_at: "2026-03-10T09:00:00Z",
      cluster_signature: "cluster-loop",
      cluster_label: "Persistence Cluster",
      degree: 3,
      memode_membership: ["memode-loop"],
      recent_active_set_presence: 3,
      measurement_history: measurementHistory,
      render_coords: { force: { x: -1.2, y: 0.8 } },
      derived_coords: { spectral: { x: -0.9, y: 0.6 } },
      provenance: { source_document: "docs/OBSERVATORY_SPEC.md", excerpt: "Preview before commit." },
    },
    {
      id: "meme-retrieval",
      label: "Retrieval Bridge",
      kind: "meme",
      domain: "behavior",
      source_kind: "operator_seed",
      summary: "Couples graph recall to the active set.",
      created_at: "2026-03-10T09:01:00Z",
      cluster_signature: "cluster-loop",
      cluster_label: "Persistence Cluster",
      degree: 3,
      memode_membership: ["memode-loop"],
      recent_active_set_presence: 2,
      measurement_history: measurementHistory,
      render_coords: { force: { x: 0.2, y: 1.1 } },
      derived_coords: { spectral: { x: 0.1, y: 0.7 } },
      provenance: { source_document: "docs/TURN_LOOP_AND_MEMBRANE.md", excerpt: "retrieve/assemble" },
    },
    {
      id: "meme-membrane",
      label: "Membrane Check",
      kind: "meme",
      domain: "governance",
      source_kind: "operator_seed",
      summary: "Applies explicit review before graph mutation.",
      created_at: "2026-03-10T09:02:00Z",
      cluster_signature: "cluster-loop",
      cluster_label: "Persistence Cluster",
      degree: 2,
      memode_membership: ["memode-loop"],
      recent_active_set_presence: 2,
      measurement_history: [],
      render_coords: { force: { x: 1.2, y: 0.2 } },
      derived_coords: { spectral: { x: 0.9, y: 0.1 } },
      provenance: { source_document: "docs/OBSERVATORY_INTERACTION_SPEC.md", excerpt: "Inspect is read-only." },
    },
    {
      id: "meme-regard",
      label: "Regard Update",
      kind: "meme",
      domain: "selection",
      source_kind: "operator_seed",
      summary: "Selection pressure update visible in the active set.",
      created_at: "2026-03-10T09:03:00Z",
      cluster_signature: "cluster-regard",
      cluster_label: "Regard Cluster",
      degree: 1,
      memode_membership: [],
      recent_active_set_presence: 1,
      measurement_history: [],
      render_coords: { force: { x: 1.8, y: -1.0 } },
      derived_coords: { spectral: { x: 1.4, y: -0.8 } },
      provenance: { source_document: "docs/REGARD_MECHANISM.md", excerpt: "selection pressure" },
    },
    {
      id: "meme-noise",
      label: "Disconnected Noise",
      kind: "meme",
      domain: "knowledge",
      source_kind: "operator_seed",
      summary: "Intentionally disconnected candidate for admissibility checks.",
      created_at: "2026-03-10T09:04:00Z",
      cluster_signature: "cluster-noise",
      cluster_label: "Noise Cluster",
      degree: 0,
      memode_membership: [],
      recent_active_set_presence: 0,
      measurement_history: [],
      render_coords: { force: { x: -2.0, y: -1.4 } },
      derived_coords: { spectral: { x: -1.6, y: -1.1 } },
      provenance: { source_document: "docs/KNOWN_LIMITATIONS.md", excerpt: "Disconnected selection should fail." },
    },
  ];

  const semanticEdges = [
    {
      id: "edge-support-001",
      source: "meme-persistence",
      target: "meme-retrieval",
      type: "SUPPORTS",
      weight: 1.0,
      created_at: "2026-03-10T10:00:00Z",
      measurement_history: measurementHistory,
      measurement_event_ids: ["evt-baseline-001"],
      reverted: false,
      assertion_origin: "operator_asserted",
      evidence_label: "OPERATOR_ASSERTED",
      operator_label: "Brian the operator",
      confidence: 0.91,
      provenance: {
        assertion_origin: "operator_asserted",
        evidence_label: "OPERATOR_ASSERTED",
        confidence: 0.91,
        rationale: "Persistence requires a retrieval bridge.",
      },
    },
    {
      id: "edge-support-002",
      source: "meme-retrieval",
      target: "meme-membrane",
      type: "SUPPORTS",
      weight: 0.92,
      created_at: "2026-03-10T10:02:00Z",
      measurement_history: [],
      measurement_event_ids: [],
      reverted: false,
      assertion_origin: "operator_refined",
      evidence_label: "OPERATOR_REFINED",
      operator_label: "Brian the operator",
      confidence: 0.87,
      provenance: {
        assertion_origin: "operator_refined",
        evidence_label: "OPERATOR_REFINED",
        confidence: 0.87,
        rationale: "Membrane review gates retrieval changes.",
      },
    },
    {
      id: "edge-derived-001",
      source: "meme-membrane",
      target: "meme-regard",
      type: "DERIVES",
      weight: 0.76,
      created_at: "2026-03-10T10:04:00Z",
      measurement_history: [],
      measurement_event_ids: [],
      reverted: false,
      assertion_origin: "auto_derived",
      evidence_label: "AUTO_DERIVED",
      operator_label: "",
      confidence: 0.73,
      provenance: {
        assertion_origin: "auto_derived",
        evidence_label: "AUTO_DERIVED",
        confidence: 0.73,
        rationale: "Selection pressure derives from membrane activity.",
      },
    },
  ];

  return {
    export_manifest_id: `manifest-${sourceGraphHash}`,
    source_graph_hash: sourceGraphHash,
    graph_modes: ["Semantic Map", "Assemblies", "Runtime", "Active Set", "Compare"],
    assembly_render_modes: ["hulls", "collapsed-meta-node", "hidden"],
    semantic_nodes: semanticNodes,
    semantic_edges: semanticEdges,
    runtime_nodes: semanticNodes.slice(0, 3).map((node, index) => ({
      ...node,
      id: `runtime-${index + 1}`,
      kind: "runtime_trace",
      label: `${node.label} runtime`,
    })),
    runtime_edges: [
      {
        id: "runtime-edge-001",
        source: "runtime-1",
        target: "runtime-2",
        type: "ACTIVATES",
        weight: 1,
      },
    ],
    assemblies: [
      {
        id: "memode-loop",
        label: "Persistence Assembly",
        summary: "Connected memode candidate grounded by SUPPORTS edges.",
        domain: "behavior",
        member_meme_ids: ["meme-persistence", "meme-retrieval", "meme-membrane"],
        supporting_edge_ids: ["edge-support-001", "edge-support-002"],
        member_order: ["meme-persistence", "meme-retrieval", "meme-membrane"],
        invariance_summary: "Persistence survives only when retrieval and membrane review stay connected.",
        evidence_label: "OPERATOR_ASSERTED",
        operator_label: "Brian the operator",
        confidence: 0.88,
        created_at: "2026-03-10T12:00:00Z",
        measurement_history: measurementHistory,
      },
    ],
    cluster_summaries: [
      {
        cluster_signature: "cluster-loop",
        display_label: "Persistence Cluster",
        member_meme_ids: ["meme-persistence", "meme-retrieval", "meme-membrane"],
        top_meme_ids: ["meme-persistence"],
      },
      {
        cluster_signature: "cluster-regard",
        display_label: "Regard Cluster",
        member_meme_ids: ["meme-regard"],
        top_meme_ids: ["meme-regard"],
      },
    ],
    active_set_slices: [
      {
        slice_id: "slice-004",
        turn_id: "turn-004",
        node_ids: ["meme-persistence", "meme-retrieval", "meme-membrane"],
      },
    ],
    counts: {
      sessions: 2,
      turns: 4,
      documents: 1,
      memes: semanticNodes.length,
      memodes: 1,
      edges: semanticEdges.length,
      measurement_events: 1,
    },
  };
}

function makeNormalBasin() {
  return {
    projection_method: "svd_on_turn_features",
    projection_version: "2026.03",
    projection_input_hash: "proj-hash-normal-001",
    filtered_turn_count: 4,
    source_turn_count: 6,
    turns: [
      {
        turn_id: "turn-001",
        turn_index: 1,
        session_id: "session-alpha",
        x: -1.4,
        y: 0.3,
        display_attractor_label: "Persistence Cluster",
        dominant_label: "Persistence Cluster",
        dominant_domain: "behavior",
        dominant_cluster_signature: "cluster-loop",
        active_set_node_ids: ["meme-persistence", "meme-retrieval"],
        active_set_labels: ["Persistence Loop", "Retrieval Bridge"],
        transition_kind: "entry",
        profile_name: "balanced",
        created_at: "2026-03-10T12:00:00Z",
      },
      {
        turn_id: "turn-002",
        turn_index: 2,
        session_id: "session-alpha",
        x: -0.2,
        y: 0.8,
        display_attractor_label: "Persistence Cluster",
        dominant_label: "Persistence Cluster",
        dominant_domain: "behavior",
        dominant_cluster_signature: "cluster-loop",
        active_set_node_ids: ["meme-persistence", "meme-retrieval", "meme-membrane"],
        active_set_labels: ["Persistence Loop", "Retrieval Bridge", "Membrane Check"],
        transition_kind: "continuity",
        profile_name: "balanced",
        created_at: "2026-03-10T12:01:00Z",
      },
      {
        turn_id: "turn-003",
        turn_index: 3,
        session_id: "session-beta",
        x: 0.9,
        y: -0.1,
        display_attractor_label: "Regard Cluster",
        dominant_label: "Regard Cluster",
        dominant_domain: "selection",
        dominant_cluster_signature: "cluster-regard",
        active_set_node_ids: ["meme-retrieval", "meme-regard"],
        active_set_labels: ["Retrieval Bridge", "Regard Update"],
        transition_kind: "shift",
        profile_name: "focused",
        created_at: "2026-03-10T12:02:00Z",
      },
      {
        turn_id: "turn-004",
        turn_index: 4,
        session_id: "session-beta",
        x: 1.8,
        y: -0.4,
        display_attractor_label: "Regard Cluster",
        dominant_label: "Regard Cluster",
        dominant_domain: "selection",
        dominant_cluster_signature: "cluster-regard",
        active_set_node_ids: ["meme-persistence", "meme-retrieval", "meme-membrane"],
        active_set_labels: ["Persistence Loop", "Retrieval Bridge", "Membrane Check"],
        transition_kind: "continuity",
        profile_name: "focused",
        created_at: "2026-03-10T12:03:00Z",
      },
    ],
    attractors: [
      { label: "Persistence Cluster", turn_count: 2 },
      { label: "Regard Cluster", turn_count: 2 },
    ],
    diagnostics: {
      source_turn_count: 6,
      filtered_turn_count: 4,
      skipped_turn_count: 2,
      empty_state: false,
      derived_badge: "DERIVED",
    },
  };
}

function makeTranscriptFromBasin(basin) {
  return {
    turns: basin.turns.map((turn) => ({
      turn_id: turn.turn_id,
      turn_index: turn.turn_index,
      user_text: `Discuss ${turn.display_attractor_label}`,
      active_set_node_ids: turn.active_set_node_ids,
      active_set_labels: turn.active_set_labels,
      profile_name: turn.profile_name,
    })),
  };
}

function makeOverview(graph, basin, measurements) {
  return {
    graph_counts: graph.counts,
    basin: {
      filtered_turn_count: basin.filtered_turn_count,
      source_turn_count: basin.source_turn_count,
      projection_method: basin.projection_method,
    },
    measurements: measurements.counts,
  };
}

function makeGeometry() {
  return {
    generated_at: "2026-03-11T12:05:00Z",
    coordinate_modes: ["force", "spectral"],
    evidence_labels: ["OBSERVED", "DERIVED", "SPECULATIVE"],
    operator_assertion_labels: ["OPERATOR_ASSERTED", "OPERATOR_REFINED"],
    slices: [
      {
        slice_id: "slice-persistence",
        label: "Persistence loop selection",
        evidence_label: "OBSERVED",
        score: 0.84,
      },
    ],
    basin_projection: {
      projection_method: "svd_on_turn_features",
      projection_version: "2026.03",
      derived_badge: "DERIVED",
    },
  };
}

function makeCounts(events) {
  const actionTypes = {};
  const evidenceLabels = {};
  for (const event of events) {
    actionTypes[event.action_type] = (actionTypes[event.action_type] ?? 0) + 1;
    evidenceLabels[event.evidence_label] = (evidenceLabels[event.evidence_label] ?? 0) + 1;
  }
  return {
    events: events.length,
    action_types: actionTypes,
    evidence_labels: evidenceLabels,
  };
}

function makeNormalState(overrides = {}) {
  const graph = makeNormalGraph(overrides.source_graph_hash);
  const basin = makeNormalBasin();
  const events = [makeMeasurementEvent()];
  const measurements = { counts: makeCounts(events), events };
  const transcript = makeTranscriptFromBasin(basin);
  const geometry = makeGeometry();
  const overview = makeOverview(graph, basin, measurements);

  return {
    experiment_id: overrides.experiment_id ?? "exp-observatory-e2e",
    session_id: overrides.session_id ?? "session-alpha",
    status: {
      ok: true,
      status: {
        frontend_build: { warning: Boolean(overrides.staleWarning), reason: overrides.staleReason ?? "" },
        capabilities: { preview: true, commit: true, revert: true, measurement_events: true },
      },
    },
    graph,
    basin,
    measurements,
    transcript,
    geometry,
    overview,
    runtime_status: { available: true, mode: "local_mlx" },
    runtime_model: { available: true, backend: "mlx", profile: "balanced" },
    delays: { graph: 150, transcript: 150, geometry: 900, ...overrides.delays },
    failures: { ...overrides.failures },
  };
}

function makeSparseState() {
  const state = makeNormalState({ experiment_id: "exp-observatory-sparse", source_graph_hash: "graph-hash-sparse-v1" });
  state.basin = {
    ...state.basin,
    filtered_turn_count: 1,
    source_turn_count: 4,
    turns: [state.basin.turns[0]],
    attractors: [],
    diagnostics: {
      source_turn_count: 4,
      filtered_turn_count: 1,
      skipped_turn_count: 3,
      empty_state: true,
      reason: "Filtered trajectory contains fewer than two turns; the basin remains diagnostic only.",
    },
  };
  state.transcript = makeTranscriptFromBasin(state.basin);
  state.overview = makeOverview(state.graph, state.basin, state.measurements);
  return state;
}

function makeUnavailableState() {
  const state = makeNormalState({ experiment_id: "exp-observatory-unavailable", source_graph_hash: "graph-hash-unavailable-v1" });
  state.status = { error: "Live observatory API unavailable." };
  return state;
}

function makePartialFailureState() {
  return makeNormalState({
    experiment_id: "exp-observatory-partial",
    source_graph_hash: "graph-hash-partial-v1",
    failures: {
      transcript: { status: 404, body: { error: "Transcript payload missing for this session." } },
      geometry: { status: 500, body: { error: "Geometry pipeline unavailable." } },
    },
  });
}

function makeHeavyState() {
  const base = makeNormalState({ experiment_id: "exp-observatory-heavy", source_graph_hash: "graph-hash-heavy-v1", delays: { graph: 250 } });
  const nodes = [];
  const edges = [];
  for (let index = 1; index <= 24; index += 1) {
    nodes.push({
      id: `heavy-node-${String(index).padStart(2, "0")}`,
      label: `Heavy Meme ${String(index).padStart(2, "0")}`,
      kind: "meme",
      domain: index % 2 === 0 ? "behavior" : "knowledge",
      source_kind: "heavy_fixture",
      summary: `Synthetic heavy graph node ${index}.`,
      created_at: `2026-03-10T13:${String(index).padStart(2, "0")}:00Z`,
      cluster_signature: `cluster-${Math.ceil(index / 6)}`,
      cluster_label: `Cluster ${Math.ceil(index / 6)}`,
      degree: index < 24 ? 2 : 1,
      memode_membership: index <= 14 ? [`heavy-memode-${Math.ceil(index / 2)}`] : [],
      recent_active_set_presence: index % 5,
      measurement_history: [],
      render_coords: { force: { x: (index % 6) - 3, y: Math.floor(index / 6) - 2 } },
      derived_coords: { spectral: { x: (index % 5) - 2, y: Math.floor(index / 5) - 2 } },
      provenance: { source_document: "heavy_fixture", excerpt: `Synthetic heavy node ${index}` },
    });
    if (index > 1) {
      edges.push({
        id: `heavy-edge-${String(index - 1).padStart(2, "0")}`,
        source: `heavy-node-${String(index - 1).padStart(2, "0")}`,
        target: `heavy-node-${String(index).padStart(2, "0")}`,
        type: "SUPPORTS",
        weight: 0.5 + index / 100,
        measurement_history: [],
        measurement_event_ids: [],
        reverted: false,
        assertion_origin: "auto_derived",
        evidence_label: "AUTO_DERIVED",
        operator_label: "",
        confidence: 0.6,
        provenance: { assertion_origin: "auto_derived", evidence_label: "AUTO_DERIVED", confidence: 0.6 },
      });
    }
  }

  base.graph.semantic_nodes = nodes;
  base.graph.semantic_edges = edges;
  base.graph.cluster_summaries = Array.from({ length: 4 }, (_, index) => ({
    cluster_signature: `cluster-${index + 1}`,
    display_label: `Cluster ${index + 1}`,
    member_meme_ids: nodes.filter((node) => node.cluster_signature === `cluster-${index + 1}`).map((node) => node.id),
    top_meme_ids: [nodes[index * 6]?.id].filter(Boolean),
  }));
  base.graph.assemblies = Array.from({ length: 14 }, (_, index) => ({
    id: `heavy-memode-${index + 1}`,
    label: `Heavy Assembly ${index + 1}`,
    summary: `Synthetic assembly ${index + 1}.`,
    domain: "behavior",
    member_meme_ids: nodes.slice(index, index + 2).map((node) => node.id),
    supporting_edge_ids: edges.slice(index, index + 1).map((edge) => edge.id),
    member_order: nodes.slice(index, index + 2).map((node) => node.id),
    invariance_summary: `Synthetic invariance ${index + 1}.`,
    evidence_label: "AUTO_DERIVED",
    operator_label: "",
    confidence: 0.55,
    created_at: "2026-03-10T14:00:00Z",
    measurement_history: [],
  }));
  base.graph.active_set_slices = [{ slice_id: "heavy-slice", turn_id: "turn-heavy-16", node_ids: nodes.slice(0, 12).map((node) => node.id) }];
  base.graph.counts = {
    sessions: 4,
    turns: 16,
    documents: 4,
    memes: nodes.length,
    memodes: base.graph.assemblies.length,
    edges: edges.length,
    measurement_events: 2,
  };
  base.basin.turns = Array.from({ length: 16 }, (_, index) => ({
    turn_id: `turn-heavy-${String(index + 1).padStart(2, "0")}`,
    turn_index: index + 1,
    session_id: index < 8 ? "session-heavy-a" : "session-heavy-b",
    x: Number(((index % 8) * 0.4 - 1.2).toFixed(2)),
    y: Number((Math.floor(index / 8) * 0.8 - 0.4).toFixed(2)),
    display_attractor_label: `Cluster ${Math.ceil((index + 1) / 4)}`,
    dominant_label: `Cluster ${Math.ceil((index + 1) / 4)}`,
    dominant_domain: index % 2 === 0 ? "behavior" : "knowledge",
    dominant_cluster_signature: `cluster-${Math.ceil((index + 1) / 4)}`,
    active_set_node_ids: nodes.slice(index, index + 3).map((node) => node.id),
    active_set_labels: nodes.slice(index, index + 3).map((node) => node.label),
    transition_kind: index % 3 === 0 ? "shift" : "continuity",
    profile_name: index < 8 ? "balanced" : "focused",
    created_at: `2026-03-10T15:${String(index).padStart(2, "0")}:00Z`,
  }));
  base.basin.filtered_turn_count = 16;
  base.basin.source_turn_count = 20;
  base.transcript = makeTranscriptFromBasin(base.basin);
  base.measurements = {
    counts: makeCounts([
      makeMeasurementEvent(),
      makeMeasurementEvent({ id: "evt-heavy-002", action_type: "edge_add", evidence_label: "OPERATOR_ASSERTED" }),
    ]),
    events: [
      makeMeasurementEvent({ id: "evt-heavy-002", action_type: "edge_add", evidence_label: "OPERATOR_ASSERTED" }),
      makeMeasurementEvent(),
    ],
  };
  base.overview = makeOverview(base.graph, base.basin, base.measurements);
  return base;
}

function makeHashMismatchState() {
  const state = makeNormalState({
    experiment_id: "exp-observatory-e2e",
    source_graph_hash: "graph-hash-normal-v2",
  });
  state.graph.semantic_nodes[0].label = "Persistence Loop v2";
  state.graph.export_manifest_id = "manifest-graph-hash-normal-v2";
  state.overview = makeOverview(state.graph, state.basin, state.measurements);
  return state;
}

export function createScenarioStore() {
  return {
    normal: makeNormalState(),
    stale: makeNormalState({
      experiment_id: "exp-observatory-stale",
      source_graph_hash: "graph-hash-stale-v1",
      staleWarning: true,
      staleReason: "checked-in observatory bundle is stale",
    }),
    sparse: makeSparseState(),
    unavailable: makeUnavailableState(),
    partial: makePartialFailureState(),
    heavy: makeHeavyState(),
    "hash-mismatch": makeHashMismatchState(),
  };
}

export function cloneScenarioState(store, scenarioName) {
  return clone(store[scenarioName]);
}
