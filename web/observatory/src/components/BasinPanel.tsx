import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";

type LiftMode = "flat" | "time_lift" | "density_lift" | "session_offset";

type Props = {
  payload: any;
  currentTurnId: string | null;
  liftMode: LiftMode;
  onSelectTurn: (turnId: string) => void;
};

function sessionOrder(turns: any[]): Map<string, number> {
  const unique = [...new Set(turns.map(turn => String(turn.session_id)))].sort();
  return new Map(unique.map((sessionId, index) => [sessionId, index]));
}

export default function BasinPanel({ payload, currentTurnId, liftMode, onSelectTurn }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const turnOrder = useMemo(() => sessionOrder(payload.turns ?? []), [payload.turns]);
  const [renderError, setRenderError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    setRenderError(null);
    let renderer: THREE.WebGLRenderer | null = null;
    let pointsGeometry: THREE.BufferGeometry | null = null;
    let lineMaterial: THREE.LineBasicMaterial | null = null;
    let handleClick: ((event: MouseEvent) => void) | null = null;
    let raf = 0;
    let resize: (() => void) | null = null;

    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#120d08");
      const camera = new THREE.PerspectiveCamera(45, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 1000);
      camera.position.set(0, 0, 28);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, Math.max(container.clientHeight, 240));
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      const turns = payload.turns ?? [];
      lineMaterial = new THREE.LineBasicMaterial({ color: 0xb97b3a, transparent: true, opacity: 0.5 });
      pointsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(turns.length * 3);
      const colors = new Float32Array(turns.length * 3);
      const attractorCounts = new Map<string, number>();
      for (const turn of turns) {
        const label = String(turn.display_attractor_label ?? turn.dominant_label ?? "");
        attractorCounts.set(label, (attractorCounts.get(label) ?? 0) + 1);
      }
      turns.forEach((turn: any, index: number) => {
        const density = attractorCounts.get(String(turn.display_attractor_label ?? turn.dominant_label ?? "")) ?? 1;
        const sessionOffset = turnOrder.get(String(turn.session_id)) ?? 0;
        const z = liftMode === "flat"
          ? 0
          : liftMode === "time_lift"
            ? index * 0.7
            : liftMode === "density_lift"
              ? density * 1.2
              : sessionOffset * 2.4;
        positions[index * 3] = Number(turn.x ?? 0);
        positions[index * 3 + 1] = Number(turn.y ?? 0);
        positions[index * 3 + 2] = z;
        const highlighted = currentTurnId === turn.turn_id;
        colors[index * 3] = highlighted ? 1 : 0.91;
        colors[index * 3 + 1] = highlighted ? 0.95 : 0.66;
        colors[index * 3 + 2] = highlighted ? 0.67 : 0.34;
        turn.sequence_z = z;
      });
      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const points = new THREE.Points(pointsGeometry, new THREE.PointsMaterial({ size: 0.6, vertexColors: true }));
      scene.add(points);

      if (turns.length > 1) {
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        scene.add(new THREE.Line(lineGeometry, lineMaterial));
      }

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      handleClick = (event: MouseEvent) => {
        if (!renderer) return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.params.Points = { threshold: 1.2 };
        raycaster.setFromCamera(mouse, camera);
        const intersections = raycaster.intersectObject(points);
        const hit = intersections[0];
        if (!hit || hit.index == null) return;
        const turn = turns[hit.index];
        if (turn?.turn_id) onSelectTurn(String(turn.turn_id));
      };
      renderer.domElement.addEventListener("click", handleClick);

      const ambient = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambient);

      let frame = 0;
      const animate = () => {
        if (!renderer) return;
        frame += 1;
        if (!currentTurnId) scene.rotation.y = Math.sin(frame / 180) * 0.08;
        renderer.render(scene, camera);
        raf = window.requestAnimationFrame(animate);
      };
      animate();

      resize = () => {
        if (!renderer) return;
        const width = container.clientWidth || 640;
        const height = Math.max(container.clientHeight, 240);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", resize);
    } catch (error) {
      container.innerHTML = "";
      setRenderError(error instanceof Error ? error.message : "Basin renderer unavailable.");
    }

    return () => {
      if (resize) window.removeEventListener("resize", resize);
      if (renderer?.domElement && handleClick) renderer.domElement.removeEventListener("click", handleClick);
      window.cancelAnimationFrame(raf);
      renderer?.dispose();
      pointsGeometry?.dispose();
      lineMaterial?.dispose();
      container.innerHTML = "";
    };
  }, [payload, currentTurnId, liftMode, onSelectTurn, turnOrder]);

  if (renderError) {
    return (
      <div key="basin-fallback" className="empty-state" data-testid="basin-plot-fallback" role="note">
        <h2>Basin renderer unavailable</h2>
        <p>{renderError}</p>
        <p>Use Basin Turns, transcript buttons, and projection metadata to keep the trajectory view truthful.</p>
      </div>
    );
  }

  return <div key="basin-canvas" aria-label="Basin plot" className="basin-panel" data-testid="basin-plot" ref={containerRef} role="region" />;
}
