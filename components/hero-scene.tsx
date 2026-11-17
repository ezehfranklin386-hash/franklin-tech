"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#c6ff3d";

function WireCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.z += delta * 0.02;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.9, 1]} />
      <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.16} />
    </mesh>
  );
}

function Particles({ count = 450 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.022}
        color={ACCENT}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Panel({
  position,
  rotation,
  size,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={size} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.32} />
      </mesh>
    </Float>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 opacity-60" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <WireCore />
        <Particles />
        <Panel
          position={[-3.6, 1.1, -1]}
          rotation={[0.3, 0.5, 0]}
          size={[1.5, 2.1, 0.08]}
        />
        <Panel
          position={[3.4, 0.4, -1.5]}
          rotation={[-0.25, -0.45, 0.1]}
          size={[1.3, 1.9, 0.08]}
        />
        <Panel
          position={[2.7, -1.9, -0.5]}
          rotation={[0.2, -0.2, -0.15]}
          size={[1.8, 1.2, 0.08]}
        />
      </Canvas>
    </div>
  );
}
