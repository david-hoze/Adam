import type { ReactNode } from "react";
import { startTransition, useEffect, useMemo, useState } from "react";

import BasinPanel from "./components/BasinPanel";
import GraphPanel from "./components/GraphPanel";
import TanakhPanel from "./components/TanakhPanel";

type Surface = "overview" | "graph" | "basin" | "geometry" | "tanakh" | "measurements";
type GraphMode = "Semantic Map" | "Assemblies" | "Runtime" | "Active Set" | "Compare";
type AssemblyRenderMode = "hulls" | "collapsed-meta-node" | "hidden";
type LiftMode = "flat" | "time_lift" | "density_lift" | "session_offset";
type InspectorTab = "cards" | "json";
type ReasoningLens = "reasoning" | "chain_like" | "hum_live";
type PayloadKey = "overview" | "measurements" | "basin" | "graph" | "geometry" | "tanakh" | "transcript" | "runtimeStatus" | "runtimeModel";
type PayloadStatusKind = "idle" | "loading" | "ready" | "error" | "deferred";

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
  tanakh?: Record<string, any>;
  hum?: Record<string, any>;
};

type TranscriptPayload = {
  hum?: Record<string, any>;
  turns?: any[];
};

type TanakhPayload = {
  current_ref?: string;
  bundle_hash?: string;
  artifacts?: Record<string, string>;
  bundle?: Record<string, any>;
  live_query_supported?: boolean;
};

type DataBundle = {
  graph: GraphPayload | null;
  basin: BasinPayload | null;
  overview: OverviewPayload | null;
  measurements: MeasurementsPayload | null;
  geometry: Record<string, any> | null;
  tanakh: TanakhPayload | null;
  transcript: TranscriptPayload | null;
  runtimeStatus: Record<string, any> | null;
  runtimeModel: Record<string, any> | null;
  liveEnabled: boolean;
  staleBuildWarning: string | null;
};

type ResolvedSources = {
  graph?: string;
  basin?: string;
  overview?: string;
  measurements?: string;
  geometry?: string;
  tanakh?: string;
  transcript?: string;
  runtimeStatus?: string;
  runtimeModel?: string;
  liveEnabled: boolean;
  staleBuildWarning: string | null;
};

type PayloadStatus = {
  label: string;
  detail: string;
  status: PayloadStatusKind;
  source: "live_api" | "static_export" | "none";
  error?: string;
};

const SURFACES: Surface[] = ["overview", "graph", "basin", "geometry", "tanakh", "measurements"];
const DEFAULT_GRAPH_MODE: GraphMode = "Semantic Map";
const DEFAULT_ASSEMBLY_RENDER_MODE: AssemblyRenderMode = "hulls";
const DEFAULT_LIFT_MODE: LiftMode = "flat";
const TEXT_ACCESS_LIMIT = 12;
const ESSENTIAL_PAYLOADS: PayloadKey[] = ["overview", "measurements", "basin"];
const PAYLOAD_ORDER: PayloadKey[] = ["overview", "measurements", "basin", "graph", "geometry", "tanakh", "transcript", "runtimeStatus", "runtimeModel"];

const EMPTY_DATA: DataBundle = {
  graph: null,
  basin: null,
  overview: null,
  measurements: null,
  geometry: null,
  tanakh: null,
  transcript: null,
  runtimeStatus: null,
  runtimeModel: null,
  liveEnabled: false,
  staleBuildWarning: null,
};

const EMPTY_STATUS: Record<PayloadKey, PayloadStatus> = {
  overview: { label: "Overview", detail: "Index summary and artifact counts", status: "idle", source: "none" },
  measurements: { label: "Measurements", detail: "Measurement ledger and attribution counts", status: "idle", source: "none" },
  basin: { label: "Basin", detail: "Trajectory summary and attractor metadata", status: "idle", source: "none" },
  graph: { label: "Graph", detail: "Large semantic graph bundle", status: "idle", source: "none" },
  geometry: { label: "Geometry", detail: "Large diagnostics bundle", status: "idle", source: "none" },
  tanakh: { label: "Tanakh", detail: "Canonical text, derived analyzers, and merkavah scene sidecars", status: "idle", source: "none" },
  transcript: { label: "Transcript", detail: "Turn history and active-set cross-links", status: "idle", source: "none" },
  runtimeStatus: { label: "Runtime status", detail: "Live backend status", status: "idle", source: "none" },
  runtimeModel: { label: "Runtime model", detail: "Live model metadata", status: "idle", source: "none" },
};

function labelForSurface(surface: Surface): string {
  if (surface === "overview") return "Overview";
  if (surface === "graph") return "Graph";
  if (surface === "basin") return "Basin";
  if (surface === "geometry") return "Geometry";
  if (surface === "tanakh") return "Tanakh";
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

function cappedItems<T>(items: T[], limit = TEXT_ACCESS_LIMIT): { items: T[]; capped: boolean; total: number } {
  return {
    items: items.slice(0, limit),
    capped: items.length > limit,
    total: items.length,
  };
}

function excerptText(value: unknown, limit = 560): string {
  const text = String(value ?? "").trim();
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}

function chainLikeSteps(value: unknown, limit = 6): string[] {
  const raw = String(value ?? "").replace(/\r/g, "\n").trim();
  if (!raw) return [];
  const segments = raw
    .split(/\n+/)
    .map((segment) => segment.trim())
    .filter(Boolean);
  const source = segments.length ? segments : raw.split(/(?<=[.!?])\s+/).map((segment) => segment.trim()).filter(Boolean);
  return source.slice(0, limit).map((segment, index) => `${index + 1}. ${excerptText(segment, 120)}`);
}

function nodeLabel(node: any): string {
  return String(node?.label ?? node?.id ?? "unknown node");
}

function edgeLabel(edge: any, nodeLookup: Map<string, any>): string {
  const sourceLabel = nodeLabel(nodeLookup.get(edge?.source) ?? { id: edge?.source });
  const targetLabel = nodeLabel(nodeLookup.get(edge?.target) ?? { id: edge?.target });
  return `${String(edge?.type ?? "EDGE")}: ${sourceLabel} -> ${targetLabel}`;
}

function initializePayloadStatuses(sources: Partial<Record<PayloadKey, string>>, liveEnabled: boolean): Record<PayloadKey, PayloadStatus> {
  const next = structuredClone(EMPTY_STATUS);
  for (const key of PAYLOAD_ORDER) {
    if (sources[key]) {
      next[key].source = liveEnabled ? "live_api" : "static_export";
      next[key].status = ESSENTIAL_PAYLOADS.includes(key)
        ? "loading"
        : key === "geometry" || key === "tanakh"
          ? "deferred"
          : "idle";
    }
  }
  return next;
}

function payloadStatusClass(status: PayloadStatusKind): string {
  return `payload-chip payload-${status}`;
}

function sourceLabel(source: PayloadStatus["source"]): string {
  if (source === "live_api") return "live API";
  if (source === "static_export") return "static export";
  return "unavailable";
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
  const [reasoningLens, setReasoningLens] = useState<ReasoningLens>("reasoning");
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);
  const [selectedAssemblyId, setSelectedAssemblyId] = useState<string | null>(null);
  const [selectedTurnId, setSelectedTurnId] = useState<string | null>(null);
  const [loadedPresetKey, setLoadedPresetKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DataBundle>(EMPTY_DATA);
  const [resolvedSources, setResolvedSources] = useState<ResolvedSources | null>(null);
  const [payloadStatuses, setPayloadStatuses] = useState<Record<PayloadKey, PayloadStatus>>(EMPTY_STATUS);
  const [tanakhRunPending, setTanakhRunPending] = useState(false);

  const presetStorageKey = useMemo(() => storageKey({ bootstrap, graph: data.graph, surface }), [bootstrap, data.graph, surface]);

  const selectedNodeId = selectedNodeIds[0] ?? null;
  const nodeLookup = useMemo(
    () =>
      new Map<string, any>([
        ...(data.graph?.semantic_nodes ?? []),
        ...(data.graph?.runtime_nodes ?? []),
      ].map((node: any) => [String(node.id), node])),
    [data.graph],
  );
  const graphNodes = useMemo(
    () => (data.graph?.semantic_nodes?.length ? data.graph.semantic_nodes : data.graph?.runtime_nodes ?? []),
    [data.graph],
  );
  const graphEdges = useMemo(
    () => (data.graph?.semantic_edges?.length ? data.graph.semantic_edges : data.graph?.runtime_edges ?? []),
    [data.graph],
  );
  const selectedEdge = useMemo(
    () => graphEdges.find((edge: any) => edge.id === selectedEdgeId) ?? null,
    [graphEdges, selectedEdgeId],
  );
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
  const selectedEdgeSource = selectedEdge ? nodeLookup.get(String(selectedEdge.source)) ?? null : null;
  const selectedEdgeTarget = selectedEdge ? nodeLookup.get(String(selectedEdge.target)) ?? null : null;
  const visibleGraphNodes = useMemo(() => cappedItems(graphNodes), [graphNodes]);
  const visibleGraphEdges = useMemo(() => cappedItems(graphEdges), [graphEdges]);
  const visibleBasinTurns = useMemo(() => cappedItems(data.basin?.turns ?? []), [data.basin]);
  const visibleAssemblies = useMemo(() => cappedItems(data.graph?.assemblies ?? []), [data.graph]);
  const latestTranscriptTurn = useMemo(() => {
    const turns = data.transcript?.turns ?? [];
    return turns.length ? turns[turns.length - 1] : null;
  }, [data.transcript]);
  const hum = data.overview?.hum ?? data.transcript?.hum ?? null;

  useEffect(() => {
    let nextGraphMode = DEFAULT_GRAPH_MODE;
    let nextAssemblyRenderMode = DEFAULT_ASSEMBLY_RENDER_MODE;
    let nextLiftMode = DEFAULT_LIFT_MODE;
    try {
      const raw = window.localStorage.getItem(presetStorageKey);
      if (raw) {
        const preset = JSON.parse(raw) as Partial<{ graphMode: GraphMode; assemblyRenderMode: AssemblyRenderMode; liftMode: LiftMode }>;
        nextGraphMode = preset.graphMode ?? DEFAULT_GRAPH_MODE;
        nextAssemblyRenderMode = preset.assemblyRenderMode ?? DEFAULT_ASSEMBLY_RENDER_MODE;
        nextLiftMode = preset.liftMode ?? DEFAULT_LIFT_MODE;
      }
    } catch {
      // ignore corrupt local view presets
    }
    setGraphMode(nextGraphMode);
    setAssemblyRenderMode(nextAssemblyRenderMode);
    setLiftMode(nextLiftMode);
    setLoadedPresetKey(presetStorageKey);
  }, [presetStorageKey]);

  useEffect(() => {
    if (loadedPresetKey !== presetStorageKey) return;
    const payload = JSON.stringify({ graphMode, assemblyRenderMode, liftMode });
    window.localStorage.setItem(presetStorageKey, payload);
  }, [assemblyRenderMode, graphMode, liftMode, loadedPresetKey, presetStorageKey]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      setPayloadStatuses(EMPTY_STATUS);
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
              tanakh: bootstrap.live_api?.tanakh,
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
              tanakh: bootstrap.payload_urls?.tanakh,
              transcript: undefined,
              runtimeStatus: undefined,
              runtimeModel: undefined,
            };
        const nextSources: ResolvedSources = {
          ...sources,
          liveEnabled,
          staleBuildWarning,
        };
        if (!cancelled) {
          setResolvedSources(nextSources);
          setPayloadStatuses(initializePayloadStatuses(sources, liveEnabled));
          setData((current) => ({
            ...current,
            liveEnabled,
            staleBuildWarning,
          }));
        }

        const loadPayload = async <T,>(key: PayloadKey, url: string, assign: (payload: T) => void): Promise<T | null> => {
          if (cancelled) return null;
          setPayloadStatuses((current) => ({
            ...current,
            [key]: {
              ...current[key],
              status: "loading",
              error: undefined,
            },
          }));
          try {
            const payload = await fetchJson<T>(url);
            if (cancelled) return null;
            startTransition(() => {
              assign(payload);
            });
            setPayloadStatuses((current) => ({
              ...current,
              [key]: {
                ...current[key],
                status: "ready",
              },
            }));
            return payload;
          } catch (payloadError) {
            if (cancelled) return null;
            const message = payloadError instanceof Error ? payloadError.message : `Failed to load ${key}.`;
            setPayloadStatuses((current) => ({
              ...current,
              [key]: {
                ...current[key],
                status: "error",
                error: message,
              },
            }));
            throw payloadError;
          }
        };

        const essentialTasks: Array<Promise<unknown>> = [];
        if (nextSources.overview) {
          essentialTasks.push(loadPayload("overview", nextSources.overview, (payload) => setData((current) => ({ ...current, overview: payload as OverviewPayload }))));
        }
        if (nextSources.measurements) {
          essentialTasks.push(loadPayload("measurements", nextSources.measurements, (payload) => setData((current) => ({ ...current, measurements: payload as MeasurementsPayload }))));
        }
        if (nextSources.basin) {
          essentialTasks.push(
            loadPayload("basin", nextSources.basin, (payload) => {
              const basin = payload as BasinPayload;
              setData((current) => ({ ...current, basin }));
              if (!selectedTurnId && basin.turns?.length) {
                setSelectedTurnId(basin.turns[0].turn_id);
              }
            }),
          );
        }
        await Promise.allSettled(essentialTasks);
        if (!cancelled) {
          setLoading(false);
        }

        const backgroundTasks: Array<Promise<unknown>> = [];
        if (nextSources.graph) {
          backgroundTasks.push(
            loadPayload("graph", nextSources.graph, (payload) => {
              const graph = payload as GraphPayload;
              setData((current) => ({ ...current, graph }));
              if (!selectedAssemblyId && graph.assemblies?.length) {
                setSelectedAssemblyId(graph.assemblies[0].id);
              }
            }),
          );
        }
        if (nextSources.transcript) {
          backgroundTasks.push(loadPayload("transcript", nextSources.transcript, (payload) => setData((current) => ({ ...current, transcript: payload as TranscriptPayload }))));
        }
        if (nextSources.runtimeStatus) {
          backgroundTasks.push(loadPayload("runtimeStatus", nextSources.runtimeStatus, (payload) => setData((current) => ({ ...current, runtimeStatus: payload as Record<string, any> }))));
        }
        if (nextSources.runtimeModel) {
          backgroundTasks.push(loadPayload("runtimeModel", nextSources.runtimeModel, (payload) => setData((current) => ({ ...current, runtimeModel: payload as Record<string, any> }))));
        }
        void Promise.allSettled(backgroundTasks);
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load observatory payloads.");
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
        const [graph, basin, overview, measurements, transcript, runtimeStatus, runtimeModel, tanakh] = await Promise.all([
          bootstrap.live_api?.graph ? fetchJson<GraphPayload>(bootstrap.live_api.graph) : Promise.resolve(null),
          bootstrap.live_api?.basin ? fetchJson<BasinPayload>(bootstrap.live_api.basin) : Promise.resolve(null),
          bootstrap.live_api?.overview ? fetchJson<OverviewPayload>(bootstrap.live_api.overview) : Promise.resolve(null),
          bootstrap.live_api?.measurements ? fetchJson<MeasurementsPayload>(bootstrap.live_api.measurements) : Promise.resolve(null),
          bootstrap.live_api?.session_turns ? fetchJson<TranscriptPayload>(bootstrap.live_api.session_turns) : Promise.resolve(null),
          bootstrap.live_api?.runtime_status ? fetchJson<Record<string, any>>(bootstrap.live_api.runtime_status) : Promise.resolve(null),
          bootstrap.live_api?.runtime_model ? fetchJson<Record<string, any>>(bootstrap.live_api.runtime_model) : Promise.resolve(null),
          bootstrap.live_api?.tanakh ? fetchJson<TanakhPayload>(bootstrap.live_api.tanakh) : Promise.resolve(null),
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
          tanakh,
        }));
      } catch {
        // keep prior payloads if a live refresh fails
      }
    });
    return () => {
      stream.close();
    };
  }, [bootstrap.live_api, bootstrap.session_id, data.liveEnabled]);

  useEffect(() => {
    if (surface !== "geometry" || data.geometry || !resolvedSources?.geometry) return;
    let cancelled = false;
    const url = resolvedSources.geometry;
    setPayloadStatuses((current) => ({
      ...current,
      geometry: {
        ...current.geometry,
        status: "loading",
        source: resolvedSources.liveEnabled ? "live_api" : "static_export",
        error: undefined,
      },
    }));
    void fetchJson<Record<string, any>>(url)
      .then((geometry) => {
        if (cancelled) return;
        setData((current) => ({ ...current, geometry }));
        setPayloadStatuses((current) => ({
          ...current,
          geometry: {
            ...current.geometry,
            status: "ready",
          },
        }));
      })
      .catch((loadError) => {
        if (cancelled) return;
        const message = loadError instanceof Error ? loadError.message : "Failed to load geometry payload.";
        setPayloadStatuses((current) => ({
          ...current,
          geometry: {
            ...current.geometry,
            status: "error",
            error: message,
          },
        }));
      });
    return () => {
      cancelled = true;
    };
  }, [data.geometry, resolvedSources, surface]);

  useEffect(() => {
    if (surface !== "tanakh" || data.tanakh || !resolvedSources?.tanakh) return;
    let cancelled = false;
    const url = resolvedSources.tanakh;
    setPayloadStatuses((current) => ({
      ...current,
      tanakh: {
        ...current.tanakh,
        status: "loading",
        source: resolvedSources.liveEnabled ? "live_api" : "static_export",
        error: undefined,
      },
    }));
    void fetchJson<TanakhPayload>(url)
      .then((tanakh) => {
        if (cancelled) return;
        setData((current) => ({ ...current, tanakh }));
        setPayloadStatuses((current) => ({
          ...current,
          tanakh: {
            ...current.tanakh,
            status: "ready",
          },
        }));
      })
      .catch((loadError) => {
        if (cancelled) return;
        const message = loadError instanceof Error ? loadError.message : "Failed to load Tanakh payload.";
        setPayloadStatuses((current) => ({
          ...current,
          tanakh: {
            ...current.tanakh,
            status: "error",
            error: message,
          },
        }));
      });
    return () => {
      cancelled = true;
    };
  }, [data.tanakh, resolvedSources, surface]);

  function handleSelectNode(nodeId: string, additive: boolean) {
    setSelectedEdgeId(null);
    if (!nodeId) {
      setSelectedNodeIds([]);
      return;
    }
    setSelectedNodeIds((current) => {
      if (!additive) return [nodeId];
      return current.includes(nodeId) ? current.filter((item) => item !== nodeId) : [...current, nodeId];
    });
  }

  function handleSelectAssembly(assemblyId: string) {
    setSelectedAssemblyId(assemblyId);
    setSelectedEdgeId(null);
    setSelectedNodeIds([]);
  }

  function handleSelectEdge(edgeId: string) {
    setSelectedEdgeId(edgeId);
    setSelectedNodeIds([]);
  }

  function handleSelectTurn(turnId: string) {
    setSelectedTurnId(turnId);
    setSelectedAssemblyId(null);
    setSelectedEdgeId(null);
    setSelectedNodeIds([]);
  }

  function handleFocusNode(nodeId: string) {
    setSelectedNodeIds([nodeId]);
    setSelectedEdgeId(null);
  }

  async function handleRunTanakh(request: any) {
    if (!bootstrap.live_api?.tanakh_run) return;
    setTanakhRunPending(true);
    setPayloadStatuses((current) => ({
      ...current,
      tanakh: {
        ...current.tanakh,
        status: "loading",
        source: "live_api",
        error: undefined,
      },
    }));
    try {
      const response = await fetch(bootstrap.live_api.tanakh_run, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: bootstrap.session_id,
          ref: request.ref,
          params: request.params,
        }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} for ${bootstrap.live_api.tanakh_run}`);
      }
      const tanakh = (await response.json()) as TanakhPayload;
      setData((current) => ({ ...current, tanakh }));
      setPayloadStatuses((current) => ({
        ...current,
        tanakh: {
          ...current.tanakh,
          status: "ready",
          source: "live_api",
        },
      }));
    } catch (runError) {
      const message = runError instanceof Error ? runError.message : "Failed to run Tanakh surface.";
      setPayloadStatuses((current) => ({
        ...current,
        tanakh: {
          ...current.tanakh,
          status: "error",
          source: "live_api",
          error: message,
        },
      }));
    } finally {
      setTanakhRunPending(false);
    }
  }

  function renderOverview() {
    const graphCounts = data.overview?.graph_counts ?? data.graph?.counts ?? {};
    const measurementCounts = data.measurements?.counts ?? {};
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
          <MetricList
            items={[
              ["Payload", payloadStatuses.graph.status],
              ["Source", sourceLabel(payloadStatuses.graph.source)],
              ["Assemblies", data.graph?.assemblies?.length],
              ["Clusters", data.graph?.cluster_summaries?.length],
              ...Object.entries(graphCounts),
            ]}
          />
        </Card>
        <Card title="Basin">
          <MetricList
            items={[
              ["Payload", payloadStatuses.basin.status],
              ["Projection", data.basin?.projection_method ?? bootstrap.projection_method],
              ["Filtered turns", data.basin?.filtered_turn_count],
              ["Source turns", data.basin?.source_turn_count],
              ["Derived", "SVD projection + lift mode"],
            ]}
          />
        </Card>
        <Card title="Measurements">
          <MetricList items={[["Payload", payloadStatuses.measurements.status], ...Object.entries(measurementCounts)]} />
        </Card>
        <Card title="Tanakh">
          <MetricList
            items={[
              ["Payload", payloadStatuses.tanakh.status],
              ["Ref", data.tanakh?.current_ref ?? data.overview?.tanakh?.current_ref],
              ["Bundle", data.tanakh?.bundle_hash ?? data.overview?.tanakh?.bundle_hash],
              ["Mode", data.liveEnabled ? "Live/API + static sidecars" : "Static sidecars"],
            ]}
          />
        </Card>
        <Card title="Hum">
          <MetricList
            items={[
              ["Present", hum?.present ? "yes" : "no"],
              ["Generated", hum?.generated_at],
              ["Window", hum?.turn_window_size],
              ["Recurrence", hum?.cross_turn_recurrence_present ? "yes" : "seed-state / no"],
            ]}
          />
        </Card>
      </div>
    );
  }

  function renderPayloadStatus() {
    const entries = PAYLOAD_ORDER.filter((key) => payloadStatuses[key].source !== "none").map((key) => [key, payloadStatuses[key]] as const);
    if (!entries.length) return null;
    const activeLoads = entries.filter(([, item]) => item.status === "loading").length;
    const deferredLoads = entries.filter(([, item]) => item.status === "deferred").length;
    return (
      <section className="status-panel">
        <div className="status-panel-copy">
          <strong>{loading ? "Loading observatory payloads" : activeLoads ? "Background payload activity" : "Payload status"}</strong>
          <span>
            {data.liveEnabled
              ? "Live mode prefers API payloads and refresh invalidations."
              : "Static export mode reads adjacent JSON artifacts; large graph and geometry bundles can take noticeable time."}
          </span>
          <span>
            {activeLoads
              ? `${activeLoads} payload${activeLoads === 1 ? "" : "s"} still loading.`
              : deferredLoads
                ? `${deferredLoads} payload${deferredLoads === 1 ? "" : "s"} deferred until needed.`
                : "All requested payloads are ready."}
          </span>
        </div>
        <div className="payload-grid">
          {entries.map(([key, item]) => (
            <div key={key} className="payload-card">
              <div className="payload-card-header">
                <strong>{item.label}</strong>
                <span className={payloadStatusClass(item.status)}>{item.status}</span>
              </div>
              <p>{item.detail}</p>
              <small>{sourceLabel(item.source)}</small>
              {item.error ? <small className="payload-error">{item.error}</small> : null}
            </div>
          ))}
        </div>
      </section>
    );
  }

  function renderGraphControls() {
    const graphModes = data.graph?.graph_modes ?? [DEFAULT_GRAPH_MODE];
    const renderModes = data.graph?.assembly_render_modes ?? [DEFAULT_ASSEMBLY_RENDER_MODE];
    return (
      <div className="toolbar">
        <div aria-label="Graph mode" className="toolbar-group" role="radiogroup">
          {graphModes.map((mode) => (
            <button
              aria-checked={mode === graphMode}
              key={mode}
              className={mode === graphMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setGraphMode(mode)}
              role="radio"
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>
        <div aria-label="Assembly render mode" className="toolbar-group" role="radiogroup">
          {renderModes.map((mode) => (
            <button
              aria-checked={mode === assemblyRenderMode}
              key={mode}
              className={mode === assemblyRenderMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setAssemblyRenderMode(mode)}
              role="radio"
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
        <div aria-label="Basin lift mode" className="toolbar-group" role="radiogroup">
          {(["flat", "time_lift", "density_lift", "session_offset"] as LiftMode[]).map((mode) => (
            <button
              aria-checked={mode === liftMode}
              key={mode}
              className={mode === liftMode ? "toolbar-button is-active" : "toolbar-button"}
              onClick={() => setLiftMode(mode)}
              role="radio"
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

  function renderContinuityStrip() {
    const visibleReasoning = latestTranscriptTurn?.reasoning_text ?? "";
    const humSurface = hum?.text_surface ?? "";
    const steps = chainLikeSteps(reasoningLens === "hum_live" ? humSurface : visibleReasoning);
    const reasoningBody =
      reasoningLens === "reasoning"
        ? excerptText(visibleReasoning, 720)
        : reasoningLens === "hum_live"
          ? excerptText(humSurface, 720)
          : "";
    return (
      <section className="continuity-strip">
        <article className="continuity-card">
          <header>
            <p className="eyebrow">Hum</p>
            <h2>Bounded continuity fact</h2>
          </header>
          <div className="continuity-meta">
            <span>present={hum?.present ? "yes" : "no"}</span>
            <span>generated={hum?.generated_at ?? "n/a"}</span>
            <span>window={hum?.turn_window_size ?? 0}</span>
            <span>recurrence={hum?.cross_turn_recurrence_present ? "yes" : "seed-state / no"}</span>
          </div>
          <p className="reasoning-copy">
            {hum?.present
              ? excerptText(humSurface, 360) || "Hum present but the bounded text surface is empty."
              : "No bounded hum artifact is present yet for this session."}
          </p>
        </article>
        <article className="continuity-card">
          <header>
            <p className="eyebrow">Reasoning</p>
            <h2>Operator-visible reasoning lens</h2>
          </header>
          <div className="toolbar">
            <div aria-label="Reasoning lens" className="toolbar-group" role="radiogroup">
              {([
                ["reasoning", "Reasoning"],
                ["chain_like", "Chain-Like"],
                ["hum_live", "Hum Live"],
              ] as Array<[ReasoningLens, string]>).map(([mode, label]) => (
                <button
                  aria-checked={mode === reasoningLens}
                  key={mode}
                  className={mode === reasoningLens ? "toolbar-button is-active" : "toolbar-button"}
                  onClick={() => setReasoningLens(mode)}
                  role="radio"
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <p className="continuity-note">
            {reasoningLens === "hum_live"
              ? "Hum-live mode reformats the bounded hum artifact as chain-like continuity beats. It is not hidden chain-of-thought."
              : "This lens only renders operator-visible reasoning artifacts. Hidden chain-of-thought remains out of scope."}
          </p>
          {reasoningLens === "chain_like" || reasoningLens === "hum_live" ? (
            steps.length ? (
              <ol className="reasoning-steps">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="reasoning-copy">
                {reasoningLens === "hum_live"
                  ? "Hum-live steps appear after the bounded hum artifact has been generated."
                  : "No operator-visible reasoning artifact is loaded yet from the live session transcript."}
              </p>
            )
          ) : (
            <p className="reasoning-copy">
              {reasoningBody || "No operator-visible reasoning artifact is loaded yet from the live session transcript."}
            </p>
          )}
        </article>
      </section>
    );
  }

  function renderInspector() {
    const rawTarget = selectedEdge ?? selectedNode ?? selectedAssembly ?? selectedTurn ?? data.overview ?? {};
    const measurementHistory = selectedEdge?.measurement_history ?? selectedNode?.measurement_history ?? selectedAssembly?.measurement_history ?? [];
    const provenance =
      selectedEdge?.operator_label ??
      selectedEdge?.provenance?.assertion_origin ??
      selectedNode?.provenance ??
      selectedAssembly?.operator_label ??
      selectedTurn?.profile_name ??
      "";
    const identityLabel = selectedEdge
      ? edgeLabel(selectedEdge, nodeLookup)
      : rawTarget?.label ?? rawTarget?.display_attractor_label ?? rawTarget?.display_label;
    const ontologyKind = rawTarget?.kind ?? (selectedEdge ? "edge" : selectedAssembly ? "memode" : selectedTurn ? "turn" : "overview");
    const ontologyDomain = selectedEdge
      ? `${selectedEdgeSource?.domain ?? "unknown"} -> ${selectedEdgeTarget?.domain ?? "unknown"}`
      : rawTarget?.domain ?? rawTarget?.dominant_domain;
    const ontologySource = selectedEdge?.assertion_origin ?? selectedEdge?.provenance?.assertion_origin ?? rawTarget?.source_kind ?? "observatory";
    const clusterDisplay = selectedEdge
      ? `${selectedEdgeSource?.cluster_label ?? selectedEdgeSource?.cluster_signature ?? "unknown"} -> ${selectedEdgeTarget?.cluster_label ?? selectedEdgeTarget?.cluster_signature ?? "unknown"}`
      : rawTarget?.cluster_label ?? rawTarget?.display_label ?? selectedTurn?.display_attractor_label;
    const supportingRelations = selectedEdge
      ? [
          ["Source", nodeLabel(selectedEdgeSource ?? { id: selectedEdge?.source })],
          ["Target", nodeLabel(selectedEdgeTarget ?? { id: selectedEdge?.target })],
          ["Relation type", selectedEdge?.type],
        ]
      : selectedNode
        ? [
            [
              "Connected relations",
              graphEdges
                .filter((edge: any) => edge.source === selectedNode.id || edge.target === selectedNode.id)
                .slice(0, 4)
                .map((edge: any) => edgeLabel(edge, nodeLookup)),
            ],
            ["Current turn", selectedTurn?.turn_id],
            ["Attractor", selectedTurn?.display_attractor_label],
          ]
        : [
            ["Active set nodes", selectedTurn?.active_set_node_ids],
            ["Transition", selectedTurn?.transition_kind],
            ["Attractor", selectedTurn?.display_attractor_label],
          ];
    const activeSetPresence = selectedEdge
      ? [
          ["Source presence", selectedEdgeSource?.recent_active_set_presence],
          ["Target presence", selectedEdgeTarget?.recent_active_set_presence],
          ["Highlighted nodes", highlightedNodeIds.length],
        ]
      : selectedAssembly
        ? [
            [
              "Members in active set",
              (selectedAssembly.member_meme_ids ?? []).filter((id: string) => highlightedNodeIds.includes(id)),
            ],
            ["Highlighted nodes", highlightedNodeIds.length],
            ["Selected turn", selectedTurn?.turn_id],
          ]
        : [
            ["Recent presence", rawTarget?.recent_active_set_presence ?? selectedTurn?.active_set_summary?.size],
            ["Selected turn", selectedTurn?.turn_id],
            ["Highlighted nodes", highlightedNodeIds.length],
          ];
    return (
      <aside className="inspector">
        <div aria-label="Inspector view" className="inspector-tabs" role="tablist">
          <button
            aria-controls="observatory-inspector-panel"
            aria-selected={inspectorTab === "cards"}
            className={inspectorTab === "cards" ? "toolbar-button is-active" : "toolbar-button"}
            id="observatory-inspector-tab-cards"
            onClick={() => setInspectorTab("cards")}
            role="tab"
            type="button"
          >
            Cards
          </button>
          <button
            aria-controls="observatory-inspector-panel"
            aria-selected={inspectorTab === "json"}
            className={inspectorTab === "json" ? "toolbar-button is-active" : "toolbar-button"}
            id="observatory-inspector-tab-json"
            onClick={() => setInspectorTab("json")}
            role="tab"
            type="button"
          >
            Raw JSON
          </button>
        </div>
        <div
          aria-labelledby={inspectorTab === "json" ? "observatory-inspector-tab-json" : "observatory-inspector-tab-cards"}
          id="observatory-inspector-panel"
          role="tabpanel"
        >
          {inspectorTab === "json" ? (
            <pre className="debug-json">{JSON.stringify(rawTarget, null, 2)}</pre>
          ) : (
            <div className="inspector-cards">
              <Card title="Identity">
                <MetricList
                  items={[
                    ["ID", rawTarget?.id ?? rawTarget?.turn_id ?? rawTarget?.cluster_signature],
                    ["Label", identityLabel],
                    ["Created", rawTarget?.created_at],
                  ]}
                />
              </Card>
              <Card title="Ontology">
                <MetricList
                  items={[
                    ["Kind", ontologyKind],
                    ["Domain", ontologyDomain],
                    ["Source", ontologySource],
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
                    ["Evidence label", rawTarget?.evidence_label ?? selectedAssembly?.evidence_label ?? selectedEdge?.evidence_label],
                    ["Confidence", rawTarget?.confidence ?? selectedAssembly?.confidence ?? selectedEdge?.confidence],
                  ]}
                />
              </Card>
              <Card title="Cluster Membership">
                <MetricList
                  items={[
                    ["Cluster", selectedEdge ? `${selectedEdgeSource?.cluster_signature ?? "unknown"} -> ${selectedEdgeTarget?.cluster_signature ?? "unknown"}` : rawTarget?.cluster_signature ?? selectedTurn?.dominant_cluster_signature],
                    ["Display label", clusterDisplay],
                    ["Domain mix", rawTarget?.domain_mix],
                  ]}
                />
              </Card>
              <Card title="Memode Membership">
                <MetricList
                  items={[
                    [
                      "Assemblies",
                      selectedEdge
                        ? [
                            ...(selectedEdgeSource?.memode_membership ?? []),
                            ...(selectedEdgeTarget?.memode_membership ?? []),
                          ]
                        : rawTarget?.memode_membership ?? selectedAssembly?.member_meme_ids,
                    ],
                    ["Supporting edges", selectedAssembly?.supporting_edge_ids],
                    ["Member order", selectedAssembly?.member_order],
                  ]}
                />
              </Card>
              <Card title="Supporting Relations">
                <MetricList items={supportingRelations} />
              </Card>
              <Card title="Active Set Presence">
                <MetricList items={activeSetPresence} />
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
        </div>
      </aside>
    );
  }

  function renderSidebar() {
    return (
      <aside className="sidebar">
        <Card title="Assemblies">
          {data.graph ? (
            <>
              {visibleAssemblies.capped ? (
                <p className="placeholder-copy">Showing first {TEXT_ACCESS_LIMIT} of {visibleAssemblies.total} assemblies. This browser list is capped and not exhaustive.</p>
              ) : null}
              <div className="chip-list">
                {visibleAssemblies.items.map((assembly: any) => (
                  <button
                    aria-label={`Assembly ${assembly.label}`}
                    key={assembly.id}
                    className={assembly.id === selectedAssemblyId ? "chip is-active" : "chip"}
                    data-state={assembly.id === selectedAssemblyId ? "active" : "inactive"}
                    onClick={() => handleSelectAssembly(assembly.id)}
                    type="button"
                  >
                    {assembly.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">Graph payload {payloadStatuses.graph.status}. Assemblies appear after the semantic graph bundle arrives.</p>
          )}
        </Card>
        <Card title="Graph Entities">
          {data.graph ? (
            <>
              {visibleGraphNodes.capped ? (
                <p className="placeholder-copy">Showing first {TEXT_ACCESS_LIMIT} of {visibleGraphNodes.total} graph entities. This browser list is capped and not exhaustive.</p>
              ) : null}
              <div className="chip-list">
                {visibleGraphNodes.items.map((node: any) => (
                  <button
                    aria-label={`Graph entity ${nodeLabel(node)}`}
                    key={node.id}
                    className={node.id === selectedNodeId ? "chip is-active" : "chip"}
                    data-state={node.id === selectedNodeId ? "active" : "inactive"}
                    onClick={() => handleFocusNode(node.id)}
                    type="button"
                  >
                    {nodeLabel(node)}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">Graph payload {payloadStatuses.graph.status}. Text selection becomes available once the graph bundle is ready.</p>
          )}
        </Card>
        <Card title="Relations">
          {data.graph ? (
            <>
              {visibleGraphEdges.capped ? (
                <p className="placeholder-copy">Showing first {TEXT_ACCESS_LIMIT} of {visibleGraphEdges.total} relations. This browser list is capped and not exhaustive.</p>
              ) : null}
              <div className="transcript-list">
                {visibleGraphEdges.items.map((edge: any) => (
                  <button
                    aria-label={`Graph relation ${edgeLabel(edge, nodeLookup)}`}
                    key={edge.id}
                    className={edge.id === selectedEdgeId ? "transcript-turn is-active" : "transcript-turn"}
                    data-state={edge.id === selectedEdgeId ? "active" : "inactive"}
                    onClick={() => handleSelectEdge(edge.id)}
                    type="button"
                  >
                    <span>{edge.type}</span>
                    <span>{edgeLabel(edge, nodeLookup)}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">Relations stay unavailable until the graph payload is ready.</p>
          )}
        </Card>
        <Card title="Semantic Clusters">
          {data.graph ? (
            <div className="chip-list">
              {(data.graph?.cluster_summaries ?? []).slice(0, 12).map((cluster: any) => (
                <div key={cluster.cluster_signature} className="cluster-pill">
                  <strong>{cluster.display_label}</strong>
                  <span>{cluster.member_meme_ids.length} memes</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="placeholder-copy">Cluster summaries depend on the graph payload and are loaded separately from the overview.</p>
          )}
        </Card>
        <Card title="Basin Turns">
          {data.basin?.turns?.length ? (
            <>
              {visibleBasinTurns.capped ? (
                <p className="placeholder-copy">Showing first {TEXT_ACCESS_LIMIT} of {visibleBasinTurns.total} basin turns. This browser list is capped and not exhaustive.</p>
              ) : null}
              <div className="transcript-list">
                {visibleBasinTurns.items.map((turn: any) => (
                  <button
                    aria-label={`Basin turn T${turn.turn_index ?? "?"} ${turn.turn_id} ${turn.display_attractor_label ?? turn.dominant_label ?? turn.turn_id}`}
                    key={turn.turn_id}
                    className={turn.turn_id === selectedTurn?.turn_id ? "transcript-turn is-active" : "transcript-turn"}
                    data-state={turn.turn_id === selectedTurn?.turn_id ? "active" : "inactive"}
                    onClick={() => handleSelectTurn(turn.turn_id)}
                    type="button"
                  >
                    <span>T{turn.turn_index ?? "?"}</span>
                    <span>{turn.display_attractor_label ?? turn.dominant_label ?? turn.turn_id}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">Basin turns become selectable when filtered trajectory data is available.</p>
          )}
        </Card>
        <Card title="Transcript">
          {data.transcript ? (
            <div className="transcript-list">
              {(data.transcript?.turns ?? []).slice(0, 10).map((turn: any) => (
                <button
                  aria-label={`Transcript turn T${turn.turn_index} ${turn.turn_id}`}
                  key={turn.turn_id}
                  className={turn.turn_id === selectedTurn?.turn_id ? "transcript-turn is-active" : "transcript-turn"}
                  data-state={turn.turn_id === selectedTurn?.turn_id ? "active" : "inactive"}
                  onClick={() => handleSelectTurn(turn.turn_id)}
                  type="button"
                >
                  <span>T{turn.turn_index}</span>
                  <span>{turn.user_text}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="placeholder-copy">
              {data.liveEnabled ? `Transcript payload ${payloadStatuses.transcript.status}.` : "Transcript is only available from the live API in v1."}
            </p>
          )}
        </Card>
      </aside>
    );
  }

  function renderMainSurface() {
    if (surface === "overview") return renderOverview();
    if (surface === "graph" && !data.graph) {
      return <div className="empty-state"><h2>Graph payload not ready</h2><p>Current status: {payloadStatuses.graph.status}. This semantic bundle is large and loads separately from the overview.</p></div>;
    }
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
    if (surface === "basin" && !data.basin) {
      return <div className="empty-state"><h2>Basin payload not ready</h2><p>Current status: {payloadStatuses.basin.status}.</p></div>;
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
            onSelectTurn={handleSelectTurn}
          />
        </>
      );
    }
    if (surface === "geometry") {
      if (!data.geometry) {
        return (
          <div className="empty-state">
            <h2>Geometry payload {payloadStatuses.geometry.status}</h2>
            <p>
              {payloadStatuses.geometry.status === "error"
                ? "Geometry diagnostics are unavailable for this surface."
                : "The geometry bundle is intentionally deferred until you open this tab because it can be very large on seeded experiments."}
            </p>
            {payloadStatuses.geometry.error ? <p>{payloadStatuses.geometry.error}</p> : null}
          </div>
        );
      }
      return <pre className="debug-json">{JSON.stringify(data.geometry ?? {}, null, 2)}</pre>;
    }
    if (surface === "tanakh") {
      if (!data.tanakh) {
        return (
          <div className="empty-state">
            <h2>Tanakh payload {payloadStatuses.tanakh.status}</h2>
            <p>
              {payloadStatuses.tanakh.status === "error"
                ? "Tanakh artifacts are unavailable for this surface."
                : "The Tanakh bundle is deferred until you open this tab because it includes canonical text plus derived sidecars."}
            </p>
            {payloadStatuses.tanakh.error ? <p>{payloadStatuses.tanakh.error}</p> : null}
          </div>
        );
      }
      return (
        <TanakhPanel
          payload={data.tanakh}
          liveEnabled={data.liveEnabled}
          canRun={Boolean(data.liveEnabled && bootstrap.live_api?.tanakh_run)}
          running={tanakhRunPending}
          onRun={handleRunTanakh}
        />
      );
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

      <nav aria-label="Observatory surface" className="surface-tabs" role="tablist">
        {SURFACES.map((item) => (
          <button
            aria-controls="observatory-surface-panel"
            aria-selected={item === surface}
            className={item === surface ? "toolbar-button is-active" : "toolbar-button"}
            id={`observatory-surface-tab-${item}`}
            key={item}
            onClick={() => setSurface(item)}
            role="tab"
            type="button"
          >
            {labelForSurface(item)}
          </button>
        ))}
      </nav>

      {renderPayloadStatus()}
      {renderContinuityStrip()}
      {error ? <div className="status-banner status-error">{error}</div> : null}

      <main className="layout">
        {renderSidebar()}
        <section
          aria-labelledby={`observatory-surface-tab-${surface}`}
          className="surface-panel"
          id="observatory-surface-panel"
          role="tabpanel"
        >
          {renderMainSurface()}
        </section>
        {renderInspector()}
      </main>
    </div>
  );
}
