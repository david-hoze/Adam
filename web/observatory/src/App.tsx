import type { ReactNode } from "react";
import { startTransition, useEffect, useMemo, useState } from "react";

import BasinPanel from "./components/BasinPanel";
import GraphPanel from "./components/GraphPanel";

type Surface = "overview" | "graph" | "basin" | "geometry" | "measurements";
type GraphMode = "Semantic Map" | "Assemblies" | "Runtime" | "Active Set" | "Compare";
type AssemblyRenderMode = "hulls" | "collapsed-meta-node" | "hidden";
type LiftMode = "flat" | "time_lift" | "density_lift" | "session_offset";
type InspectorTab = "cards" | "json";

type Bootstrap = {
  mode?: string;
  initial_surface?: Surface;
  experiment_id?: string;
  session_id?: string | null;
  export_manifest_id?: string | null;
  source_graph_hash?: string | null;
  projection_method?: string | null;
  payload_urls?: Record<string, string>;
  live_api?: Record<string, string>;
};

type RuntimeStatusPayload = {
  available?: boolean;
  frontend_build?: {
    warning?: boolean;
    reason?: string;
  };
};

type GraphPayload = {
  export_manifest_id?: string;
  source_graph_hash?: string;
  graph_modes?: GraphMode[];
  assembly_render_modes?: AssemblyRenderMode[];
  semantic_nodes: any[];
  semantic_edges: any[];
  runtime_nodes: any[];
  runtime_edges: any[];
  assemblies: any[];
  cluster_summaries: any[];
  active_set_slices: any[];
  counts?: Record<string, number>;
};

type BasinPayload = {
  turns: any[];
  attractors: any[];
  diagnostics?: Record<string, any>;
  projection_method?: string;
  projection_version?: string;
  filtered_turn_count?: number;
  source_turn_count?: number;
};

type MeasurementsPayload = {
  counts?: Record<string, any>;
  events?: any[];
};

type OverviewPayload = {
  summary?: Record<string, number>;
  graph_counts?: Record<string, number>;
  basin?: Record<string, any>;
  measurements?: Record<string, any>;
};

type TranscriptPayload = {
  turns?: any[];
};

type DataBundle = {
  graph: GraphPayload | null;
  basin: BasinPayload | null;
  overview: OverviewPayload | null;
  measurements: MeasurementsPayload | null;
  geometry: Record<string, any> | null;
  transcript: TranscriptPayload | null;
  runtimeStatus: Record<string, any> | null;
  runtimeModel: Record<string, any> | null;
  liveEnabled: boolean;
  staleBuildWarning: string | null;
};

const SURFACES: Surface[] = ["overview", "graph", "basin", "geometry", "measurements"];
const DEFAULT_GRAPH_MODE: GraphMode = "Semantic Map";
const DEFAULT_ASSEMBLY_RENDER_MODE: AssemblyRenderMode = "hulls";
const DEFAULT_LIFT_MODE: LiftMode = "flat";

const EMPTY_DATA: DataBundle = {
  graph: null,
  basin: null,
  overview: null,
  measurements: null,
  geometry: null,
  transcript: null,
  runtimeStatus: null,
  runtimeModel: null,
  liveEnabled: false,
  staleBuildWarning: null,
};

function labelForSurface(surface: Surface): string {
  if (surface === "overview") return "Overview";
  if (surface === "graph") return "Graph";
  if (surface === "basin") return "Basin";
  if (surface === "geometry") return "Geometry";
  return "Measurements";
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { credentials: "same-origin" });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return (await response.json()) as T;
}

function currentTurnNodeIds(graph: GraphPayload | null, transcript: TranscriptPayload | null, selectedTurnId: string | null): string[] {
  if (!selectedTurnId || !transcript?.turns?.length) return graph?.active_set_slices?.at(-1)?.node_ids ?? [];
  const turn = transcript.turns.find((item: any) => item.turn_id === selectedTurnId);
  return turn?.active_set_node_ids ?? [];
}

function storageKey({
  bootstrap,
  graph,
  surface,
}: {
  bootstrap: Bootstrap;
  graph: GraphPayload | null;
  surface: Surface;
}): string {
  const experimentId = bootstrap.experiment_id ?? "unknown";
  const manifestish =
    bootstrap.export_manifest_id ??
    graph?.export_manifest_id ??
    bootstrap.source_graph_hash ??
    graph?.source_graph_hash ??
    "live";
  return `eden.observatory.view_presets.v1::${experimentId}::${surface}::${manifestish}`;
}

function badgeClass(kind: "observed" | "derived" | "warning"): string {
  return `badge badge-${kind}`;
}

function MetricList({ items }: { items: Array<[string, unknown]> }) {
  return (
    <dl className="metric-list">
      {items.map(([label, value]) => (
        <div key={label} className="metric-row">
          <dt>{label}</dt>
          <dd>{formatValue(value)}</dd>
        </div>
      ))}
    </dl>
  );
}

function formatValue(value: unknown): string {
  if (value == null || value === "") return "—";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="inspector-card">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function App({ bootstrap }: { bootstrap: Bootstrap }) {
  const initialSurface = SURFACES.includes((bootstrap.initial_surface as Surface) ?? "overview")
    ? (bootstrap.initial_surface as Surface)
    : "overview";
  const [surface, setSurface] = useState<Surface>(initialSurface);
  const [graphMode, setGraphMode] = useState<GraphMode>(DEFAULT_GRAPH_MODE);
  const [assemblyRenderMode, setAssemblyRenderMode] = useState<AssemblyRenderMode>(DEFAULT_ASSEMBLY_RENDER_MODE);
  const [liftMode, setLiftMode] = useState<LiftMode>(DEFAULT_LIFT_MODE);
  const [inspectorTab, setInspectorTab] = useState<InspectorTab>("cards");
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedAssemblyId, setSelectedAssemblyId] = useState<string | null>(null);
  const [selectedTurnId, setSelectedTurnId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DataBundle>(EMPTY_DATA);

  const presetStorageKey = useMemo(() => storageKey({ bootstrap, graph: data.graph, surface }), [bootstrap, data.graph, surface]);

  const selectedNodeId = selectedNodeIds[0] ?? null;
  const selectedAssembly = useMemo(
    () => data.graph?.assemblies?.find((assembly: any) => assembly.id === selectedAssemblyId) ?? null,
    [data.graph, selectedAssemblyId],
  );
  const selectedNode = useMemo(() => {
    const pool = [
      ...(data.graph?.semantic_nodes ?? []),
      ...(data.graph?.runtime_nodes ?? []),
      ...(data.graph?.assemblies ?? []),
    ];
    return pool.find((node: any) => node.id === selectedNodeId) ?? null;
  }, [data.graph, selectedNodeId]);
  const selectedTurn = useMemo(() => {
    const basinTurn = data.basin?.turns?.find((turn: any) => turn.turn_id === selectedTurnId);
    if (basinTurn) return basinTurn;
    return data.transcript?.turns?.[0] ?? null;
  }, [data.basin, data.transcript, selectedTurnId]);
  const highlightedNodeIds = useMemo(
    () => currentTurnNodeIds(data.graph, data.transcript, selectedTurn?.turn_id ?? null),
    [data.graph, data.transcript, selectedTurn],
  );

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(presetStorageKey);
      if (!raw) return;
      const preset = JSON.parse(raw) as Partial<{ graphMode: GraphMode; assemblyRenderMode: AssemblyRenderMode; liftMode: LiftMode }>;
      if (preset.graphMode) setGraphMode(preset.graphMode);
      if (preset.assemblyRenderMode) setAssemblyRenderMode(preset.assemblyRenderMode);
      if (preset.liftMode) setLiftMode(preset.liftMode);
    } catch {
      // ignore corrupt local view presets
    }
  }, [presetStorageKey]);

  useEffect(() => {
    const payload = JSON.stringify({ graphMode, assemblyRenderMode, liftMode });
    window.localStorage.setItem(presetStorageKey, payload);
  }, [assemblyRenderMode, graphMode, liftMode, presetStorageKey]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const statusUrl = bootstrap.live_api?.status;
        let liveEnabled = false;
        let staleBuildWarning: string | null = null;
        if (statusUrl) {
          try {
            const statusPayload = await fetchJson<{ status?: RuntimeStatusPayload }>(statusUrl);
            liveEnabled = true;
            if (statusPayload.status?.frontend_build?.warning) {
              staleBuildWarning = statusPayload.status.frontend_build.reason ?? "stale frontend build";
            }
          } catch {
            liveEnabled = false;
          }
        }

        const sources = liveEnabled
          ? {
              graph: bootstrap.live_api?.graph,
              basin: bootstrap.live_api?.basin,
              overview: bootstrap.live_api?.overview,
              measurements: bootstrap.live_api?.measurements,
              geometry: bootstrap.live_api?.geometry,
              transcript: bootstrap.live_api?.session_turns,
              runtimeStatus: bootstrap.live_api?.runtime_status,
              runtimeModel: bootstrap.live_api?.runtime_model,
            }
          : {
              graph: bootstrap.payload_urls?.graph,
              basin: bootstrap.payload_urls?.basin,
              overview: bootstrap.payload_urls?.overview,
              measurements: bootstrap.payload_urls?.measurements,
              geometry: bootstrap.payload_urls?.geometry,
              transcript: undefined,
              runtimeStatus: undefined,
              runtimeModel: undefined,
            };

        const next: DataBundle = {
          graph: sources.graph ? await fetchJson<GraphPayload>(sources.graph) : null,
          basin: sources.basin ? await fetchJson<BasinPayload>(sources.basin) : null,
          overview: sources.overview ? await fetchJson<OverviewPayload>(sources.overview) : null,
          measurements: sources.measurements ? await fetchJson<MeasurementsPayload>(sources.measurements) : null,
          geometry: sources.geometry ? await fetchJson<Record<string, any>>(sources.geometry) : null,
          transcript: sources.transcript ? await fetchJson<TranscriptPayload>(sources.transcript) : null,
          runtimeStatus: sources.runtimeStatus ? await fetchJson<Record<string, any>>(sources.runtimeStatus) : null,
          runtimeModel: sources.runtimeModel ? await fetchJson<Record<string, any>>(sources.runtimeModel) : null,
          liveEnabled,
          staleBuildWarning,
        };

        if (!cancelled) {
          startTransition(() => {
            setData(next);
            if (!selectedTurnId && next.basin?.turns?.length) {
              setSelectedTurnId(next.basin.turns[0].turn_id);
            }
            if (!selectedAssemblyId && next.graph?.assemblies?.length) {
              setSelectedAssemblyId(next.graph.assemblies[0].id);
            }
          });
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load observatory payloads.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [bootstrap]);

  useEffect(() => {
    if (!data.liveEnabled || !bootstrap.live_api?.events) return;
    const url = new URL(bootstrap.live_api.events, window.location.href);
    if (bootstrap.session_id) url.searchParams.set("session_id", bootstrap.session_id);
    const stream = new EventSource(url.toString());
    stream.addEventListener("observatory.invalidate", () => {
      startTransition(() => {
        setData((current) => ({ ...current }));
      });
    });
    stream.addEventListener("observatory.invalidate", async () => {
      try {
        const [graph, basin, overview, measurements, transcript, runtimeStatus, runtimeModel] = await Promise.all([
          bootstrap.live_api?.graph ? fetchJson<GraphPayload>(bootstrap.live_api.graph) : Promise.resolve(null),
          bootstrap.live_api?.basin ? fetchJson<BasinPayload>(bootstrap.live_api.basin) : Promise.resolve(null),
          bootstrap.live_api?.overview ? fetchJson<OverviewPayload>(bootstrap.live_api.overview) : Promise.resolve(null),
          bootstrap.live_api?.measurements ? fetchJson<MeasurementsPayload>(bootstrap.live_api.measurements) : Promise.resolve(null),
          bootstrap.live_api?.session_turns ? fetchJson<TranscriptPayload>(bootstrap.live_api.session_turns) : Promise.resolve(null),
          bootstrap.live_api?.runtime_status ? fetchJson<Record<string, any>>(bootstrap.live_api.runtime_status) : Promise.resolve(null),
          bootstrap.live_api?.runtime_model ? fetchJson<Record<string, any>>(bootstrap.live_api.runtime_model) : Promise.resolve(null),
        ]);
        setData((current) => ({
          ...current,
          graph,
          basin,
          overview,
          measurements,
          transcript,
          runtimeStatus,
          runtimeModel,
        }));
      } catch {
        // keep prior payloads if a live refresh fails
      }
    });
    return () => {
      stream.close();
    };
  }, [bootstrap.live_api, bootstrap.session_id, data.liveEnabled]);

  function handleSelectNode(nodeId: string, additive: boolean) {
    if (!nodeId) {
      setSelectedNodeIds([]);
      return;
    }
    setSelectedNodeIds((current) => {
      if (!additive) return [nodeId];
      return current.includes(nodeId) ? current.filter((item) => item !== nodeId) : [...current, nodeId];
    });
  }

  function renderOverview() {
    return (
      <div className="overview-grid">
        <Card title="Identity">
          <MetricList
            items={[
              ["Experiment", bootstrap.experiment_id],
              ["Session", bootstrap.session_id],
              ["Mode", data.liveEnabled ? "Live API" : "Static export"],
              ["Render", "Layout/render != evidence"],
            ]}
          />
        </Card>
        <Card title="Graph">
          <MetricList items={Object.entries(data.overview?.graph_counts ?? data.graph?.counts ?? {})} />
        </Card>
        <Card title="Basin">
          <MetricList
            items={[
              ["Projection", data.basin?.projection_method ?? bootstrap.projection_method],
              ["Filtered turns", data.basin?.filtered_turn_count],
              ["Source turns", data.basin?.source_turn_count],
              ["Derived", "SVD projection + lift mode"],
            ]}
          />
        </Card>
        <Card title="Measurements">
          <MetricList items={Object.entries(data.measurements?.counts ?? {})} />
        </Card>
      </div>
    );
  }

  function renderGraphControls() {
    const graphModes = data.graph?.graph_modes ?? [DEFAULT_GRAPH_MODE];
    const renderModes = data.graph?.assembly_render_modes ?? [DEFAULT_ASSEMBLY_RENDER_MODE];
    return (
      <div className="toolbar">
        <div className="toolbar-group">
          {graphModes.map((mode) => (
            <button
              key={mode}
              className={mode === graphMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setGraphMode(mode)}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
        <div className="toolbar-group">
          {renderModes.map((mode) => (
            <button
              key={mode}
              className={mode === assemblyRenderMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setAssemblyRenderMode(mode)}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    );
  }

  function renderBasinControls() {
    return (
      <div className="toolbar">
        <div className="toolbar-group">
          {(["flat", "time_lift", "density_lift", "session_offset"] as LiftMode[]).map((mode) => (
            <button
              key={mode}
              className={mode === liftMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setLiftMode(mode)}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
        <div className="toolbar-group toolbar-badges">
          <span className={badgeClass("derived")}>Projection: {data.basin?.projection_method ?? bootstrap.projection_method ?? "unknown"}</span>
          <span className={badgeClass("derived")}>Lift: {liftMode}</span>
          <span className={badgeClass("derived")}>Derived</span>
        </div>
      </div>
    );
  }

  function renderInspector() {
    const rawTarget = selectedAssembly ?? selectedNode ?? selectedTurn ?? data.overview ?? {};
    const measurementHistory = selectedNode?.measurement_history ?? selectedAssembly?.measurement_history ?? [];
    const provenance = selectedNode?.provenance ?? selectedAssembly?.operator_label ?? selectedTurn?.profile_name ?? "";
    return (
      <aside className="inspector">
        <div className="inspector-tabs">
          <button className={inspectorTab === "cards" ? "toolbar-button is-active" : "toolbar-button"} onClick={() => setInspectorTab("cards")} type="button">
            Cards
          </button>
          <button className={inspectorTab === "json" ? "toolbar-button is-active" : "toolbar-button"} onClick={() => setInspectorTab("json")} type="button">
            Raw JSON
          </button>
        </div>
        {inspectorTab === "json" ? (
          <pre className="debug-json">{JSON.stringify(rawTarget, null, 2)}</pre>
        ) : (
          <div className="inspector-cards">
            <Card title="Identity">
              <MetricList
                items={[
                  ["ID", rawTarget?.id ?? rawTarget?.turn_id ?? rawTarget?.cluster_signature],
                  ["Label", rawTarget?.label ?? rawTarget?.display_attractor_label ?? rawTarget?.display_label],
                  ["Created", rawTarget?.created_at],
                ]}
              />
            </Card>
            <Card title="Ontology">
              <MetricList
                items={[
                  ["Kind", rawTarget?.kind ?? (selectedAssembly ? "memode" : selectedTurn ? "turn" : "overview")],
                  ["Domain", rawTarget?.domain ?? rawTarget?.dominant_domain],
                  ["Source", rawTarget?.source_kind ?? "observatory"],
                ]}
              />
            </Card>
            <Card title="Summary/Invariance">
              <MetricList
                items={[
                  ["Summary", rawTarget?.summary ?? rawTarget?.manual_summary ?? rawTarget?.dominant_label],
                  ["Invariance", selectedAssembly?.invariance_summary],
                  ["Recent turns", selectedTurn?.active_set_labels],
                ]}
              />
            </Card>
            <Card title="Provenance">
              <MetricList
                items={[
                  ["Operator/Source", provenance],
                  ["Evidence label", rawTarget?.evidence_label ?? selectedAssembly?.evidence_label],
                  ["Confidence", rawTarget?.confidence ?? selectedAssembly?.confidence],
                ]}
              />
            </Card>
            <Card title="Cluster Membership">
              <MetricList
                items={[
                  ["Cluster", rawTarget?.cluster_signature ?? selectedTurn?.dominant_cluster_signature],
                  ["Display label", rawTarget?.cluster_label ?? rawTarget?.display_label ?? selectedTurn?.display_attractor_label],
                  ["Domain mix", rawTarget?.domain_mix],
                ]}
              />
            </Card>
            <Card title="Memode Membership">
              <MetricList
                items={[
                  ["Assemblies", rawTarget?.memode_membership ?? selectedAssembly?.member_meme_ids],
                  ["Supporting edges", selectedAssembly?.supporting_edge_ids],
                  ["Member order", selectedAssembly?.member_order],
                ]}
              />
            </Card>
            <Card title="Supporting Relations">
              <MetricList
                items={[
                  ["Active set nodes", selectedTurn?.active_set_node_ids],
                  ["Transition", selectedTurn?.transition_kind],
                  ["Attractor", selectedTurn?.display_attractor_label],
                ]}
              />
            </Card>
            <Card title="Measurement History">
              <MetricList
                items={[
                  ["Count", measurementHistory.length],
                  ["Recent event", measurementHistory[0]?.action_type],
                  ["Preview delta", "Use preview/commit API; view-only presets stay out of evidence."],
                ]}
              />
            </Card>
          </div>
        )}
      </aside>
    );
  }

  function renderSidebar() {
    return (
      <aside className="sidebar">
        <Card title="Assemblies">
          <div className="chip-list">
            {(data.graph?.assemblies ?? []).slice(0, 12).map((assembly: any) => (
              <button
                key={assembly.id}
                className={assembly.id === selectedAssemblyId ? "chip is-active" : "chip"}
                onClick={() => setSelectedAssemblyId(assembly.id)}
                type="button"
              >
                {assembly.label}
              </button>
            ))}
          </div>
        </Card>
        <Card title="Semantic Clusters">
          <div className="chip-list">
            {(data.graph?.cluster_summaries ?? []).slice(0, 12).map((cluster: any) => (
              <div key={cluster.cluster_signature} className="cluster-pill">
                <strong>{cluster.display_label}</strong>
                <span>{cluster.member_meme_ids.length} memes</span>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Transcript">
          <div className="transcript-list">
            {(data.transcript?.turns ?? []).slice(0, 10).map((turn: any) => (
              <button
                key={turn.turn_id}
                className={turn.turn_id === selectedTurn?.turn_id ? "transcript-turn is-active" : "transcript-turn"}
                onClick={() => setSelectedTurnId(turn.turn_id)}
                type="button"
              >
                <span>T{turn.turn_index}</span>
                <span>{turn.user_text}</span>
              </button>
            ))}
          </div>
        </Card>
      </aside>
    );
  }

  function renderMainSurface() {
    if (surface === "overview") return renderOverview();
    if (surface === "graph" && data.graph) {
      return (
        <>
          {renderGraphControls()}
          <GraphPanel
            payload={data.graph}
            mode={graphMode}
            currentTurnNodeIds={highlightedNodeIds}
            selectedNodeId={selectedNodeId}
            selectedAssembly={assemblyRenderMode === "hidden" ? null : selectedAssembly}
            onSelectNode={handleSelectNode}
          />
        </>
      );
    }
    if (surface === "basin" && data.basin) {
      if ((data.basin.filtered_turn_count ?? 0) < 2) {
        return (
          <>
            {renderBasinControls()}
            <div className="empty-state">
              <h2>Sparse basin data</h2>
              <p>{data.basin.diagnostics?.reason ?? "Not enough turns with non-empty active sets for basin playback."}</p>
              <MetricList
                items={[
                  ["Source turns", data.basin.source_turn_count],
                  ["Filtered turns", data.basin.filtered_turn_count],
                  ["Skipped turns", data.basin.diagnostics?.skipped_turn_count],
                ]}
              />
            </div>
          </>
        );
      }
      return (
        <>
          {renderBasinControls()}
          <BasinPanel
            payload={data.basin}
            currentTurnId={selectedTurn?.turn_id ?? null}
            liftMode={liftMode}
            onSelectTurn={setSelectedTurnId}
          />
        </>
      );
    }
    if (surface === "geometry") {
      return <pre className="debug-json">{JSON.stringify(data.geometry ?? {}, null, 2)}</pre>;
    }
    return <pre className="debug-json">{JSON.stringify(data.measurements ?? {}, null, 2)}</pre>;
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">EDEN Observatory</p>
          <h1>Live-first semantic graph and basin instrument</h1>
        </div>
        <div className="header-badges">
          <span className={badgeClass("observed")}>{data.liveEnabled ? "Live API" : "Static export"}</span>
          <span className={badgeClass("derived")}>Layout != evidence</span>
          {data.staleBuildWarning ? <span className={badgeClass("warning")}>Build warning: {data.staleBuildWarning}</span> : null}
        </div>
      </header>

      <nav className="surface-tabs">
        {SURFACES.map((item) => (
          <button key={item} className={item === surface ? "toolbar-button is-active" : "toolbar-button"} onClick={() => setSurface(item)} type="button">
            {labelForSurface(item)}
          </button>
        ))}
      </nav>

      {loading ? <div className="status-banner">Loading observatory payloads…</div> : null}
      {error ? <div className="status-banner status-error">{error}</div> : null}

      <main className="layout">
        {renderSidebar()}
        <section className="surface-panel">{renderMainSurface()}</section>
        {renderInspector()}
      </main>
    </div>
  );
}
