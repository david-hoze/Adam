import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

type Props = {
  scene: any;
};

export default function TanakhScenePanel({ scene }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [renderError, setRenderError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    setRenderError(null);
    let renderer: THREE.WebGLRenderer | null = null;
    let resize: (() => void) | null = null;
    let raf = 0;

    try {
      const threeScene = new THREE.Scene();
      threeScene.background = new THREE.Color("#120d08");
      const camera = new THREE.PerspectiveCamera(45, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 1000);
      camera.position.set(0, 6, 16);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, Math.max(container.clientHeight, 280));
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      const nodeIndex = new Map<string, any>((scene?.nodes ?? []).map((node: any) => [String(node.id), node]));
      const nodePositions = new Float32Array((scene?.nodes ?? []).length * 3);
      const nodeColors = new Float32Array((scene?.nodes ?? []).length * 3);
      const palette = new Map<string, THREE.Color>();
      (scene?.nodes ?? []).forEach((node: any, index: number) => {
        const color = palette.get(node.color) ?? new THREE.Color(node.color ?? "#efb15f");
        palette.set(node.color ?? "#efb15f", color);
        nodePositions[index * 3] = Number(node.position?.x ?? 0);
        nodePositions[index * 3 + 1] = Number(node.position?.y ?? 0);
        nodePositions[index * 3 + 2] = Number(node.position?.z ?? 0);
        nodeColors[index * 3] = color.r;
        nodeColors[index * 3 + 1] = color.g;
        nodeColors[index * 3 + 2] = color.b;
      });

      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
      pointGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
      const points = new THREE.Points(pointGeometry, new THREE.PointsMaterial({ size: 0.28, vertexColors: true }));
      threeScene.add(points);

      for (const edge of scene?.edges ?? []) {
        const source = nodeIndex.get(String(edge.source));
        const target = nodeIndex.get(String(edge.target));
        if (!source || !target) continue;
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(Number(source.position?.x ?? 0), Number(source.position?.y ?? 0), Number(source.position?.z ?? 0)),
          new THREE.Vector3(Number(target.position?.x ?? 0), Number(target.position?.y ?? 0), Number(target.position?.z ?? 0)),
        ]);
        const material = new THREE.LineBasicMaterial({ color: edge.kind === "sequence" ? 0xffd18a : 0xb97b3a, transparent: true, opacity: 0.6 });
        threeScene.add(new THREE.Line(geometry, material));
      }

      threeScene.add(new THREE.AmbientLight(0xffffff, 1.0));

      let frame = 0;
      const animate = () => {
        if (!renderer) return;
        frame += 1;
        threeScene.rotation.y = Math.sin(frame / 240) * 0.2;
        renderer.render(threeScene, camera);
        raf = window.requestAnimationFrame(animate);
      };
      animate();

      resize = () => {
        if (!renderer) return;
        const width = container.clientWidth || 640;
        const height = Math.max(container.clientHeight, 280);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", resize);
    } catch (error) {
      container.innerHTML = "";
      setRenderError(error instanceof Error ? error.message : "Tanakh scene renderer unavailable.");
    }

    return () => {
      if (resize) window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
      renderer?.dispose();
      container.innerHTML = "";
    };
  }, [scene]);

  if (renderError) {
    return (
      <div className="empty-state" data-testid="tanakh-scene-fallback" role="note">
        <h2>Merkavah scene unavailable</h2>
        <p>{renderError}</p>
        <p>The reader and JSON artifact links remain authoritative.</p>
      </div>
    );
  }

  return <div aria-label="Tanakh merkavah scene" className="tanakh-scene-panel" data-testid="tanakh-scene" ref={containerRef} role="region" />;
}
