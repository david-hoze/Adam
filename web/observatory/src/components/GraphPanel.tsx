import Graph from "graphology";
import Sigma from "sigma";
import { useEffect, useMemo, useRef } from "react";

type GraphMode = "Semantic Map" | "Assemblies" | "Runtime" | "Active Set" | "Compare";

type ClusterSummary = {
  cluster_signature: string;
  display_label: string;
  top_meme_ids: string[];
};

type GraphPayload = {
  semantic_nodes: any[];
  semantic_edges: any[];
  runtime_nodes: any[];
  runtime_edges: any[];
  assemblies: any[];
  cluster_summaries: ClusterSummary[];
};

type Props = {
  payload: GraphPayload;
  mode: GraphMode;
  currentTurnNodeIds: string[];
  selectedNodeId: string | null;
  selectedAssembly: any | null;
  onSelectNode: (nodeId: string, additive: boolean) => void;
};

const PALETTE = ["#e8aa55", "#c96f32", "#a4d06f", "#5da271", "#4a7ea8", "#b7678f", "#d7c35f"];

function colorFor(value: string): string {
  let hash = 0;
  for (const char of value) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  return PALETTE[hash % PALETTE.length];
}

export default function GraphPanel({ payload, mode, currentTurnNodeIds, selectedNodeId, selectedAssembly, onSelectNode }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaRef = useRef<Sigma | null>(null);

  const clusterAnchors = useMemo(() => {
    const anchors = new Map<string, string>();
    for (const cluster of payload.cluster_summaries ?? []) {
      const topId = cluster.top_meme_ids?.[0];
      if (topId) anchors.set(topId, cluster.display_label);
    }
    return anchors;
  }, [payload.cluster_summaries]);

  useEffect(() => {
    if (!containerRef.current) return;
    const graph = new Graph();
    const activeSet = new Set(currentTurnNodeIds);
    const assemblyMembers = new Set(selectedAssembly?.member_meme_ids ?? []);
    const assemblyEdges = new Set(selectedAssembly?.supporting_edge_ids ?? []);
    const semanticMode = mode === "Semantic Map" || mode === "Assemblies" || mode === "Active Set" || mode === "Compare";
    const nodes = semanticMode ? payload.semantic_nodes : payload.runtime_nodes;
    const edges = semanticMode ? payload.semantic_edges : payload.runtime_edges;

    for (const node of nodes) {
      const coords = node.render_coords?.force ?? node.derived_coords?.spectral ?? { x: 0, y: 0 };
      const highlighted = activeSet.has(node.id) || selectedNodeId === node.id || assemblyMembers.has(node.id);
      const isClusterAnchor = clusterAnchors.has(node.id);
      const centralityLabel = Number(node.degree ?? 0) >= 3;
      let label = "";
      if (mode === "Semantic Map" && isClusterAnchor) label = clusterAnchors.get(node.id) ?? "";
      if (!label && (highlighted || centralityLabel)) label = String(node.label ?? node.id);
      graph.addNode(node.id, {
        x: Number(coords.x ?? 0),
        y: Number(coords.y ?? 0),
        size: highlighted ? 10 : 6,
        label,
        color: assemblyMembers.has(node.id)
          ? "#fff0a8"
          : activeSet.has(node.id)
            ? "#ffcb73"
            : colorFor(String(node.cluster_signature ?? node.kind ?? node.id)),
      });
    }

    for (const edge of edges) {
      if (!graph.hasNode(edge.source) || !graph.hasNode(edge.target)) continue;
      graph.addEdge(edge.source, edge.target, {
        size: assemblyEdges.has(edge.id) ? 2.5 : 1.1,
        color: assemblyEdges.has(edge.id) ? "#fff0a8" : "rgba(233, 177, 90, 0.38)",
        label: selectedAssembly && assemblyEdges.has(edge.id) ? String(edge.type ?? "") : "",
      });
    }

    const renderer = new Sigma(graph, containerRef.current, {
      renderEdgeLabels: Boolean(selectedAssembly),
      labelRenderedSizeThreshold: 7,
      labelDensity: 0.08,
      allowInvalidContainer: true,
    });
    sigmaRef.current = renderer;
    renderer.on("clickNode", ({ node, event }) => {
      const additive = Boolean((event.original as MouseEvent | undefined)?.shiftKey);
      onSelectNode(String(node), additive);
    });
    renderer.on("clickStage", () => onSelectNode("", false));
    renderer.getCamera().animatedReset({ duration: 250 });

    return () => {
      renderer.kill();
      sigmaRef.current = null;
    };
  }, [payload, mode, currentTurnNodeIds, selectedNodeId, selectedAssembly, onSelectNode, clusterAnchors]);

  return <div className="graph-panel" ref={containerRef} />;
}
