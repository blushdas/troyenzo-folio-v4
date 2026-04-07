"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

const ACCENT = "#C8B49A";

function FloatingShape({
  position,
  geometry,
  speed,
  phaseOffset,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "tetrahedron";
  speed: number;
  phaseOffset: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x += speed * 0.7;
    ref.current.rotation.y += speed;
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + phaseOffset) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry === "icosahedron" && <icosahedronGeometry args={[0.8, 0]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[0.7]} />}
      {geometry === "torus" && <torusGeometry args={[0.6, 0.15, 8, 16]} />}
      {geometry === "tetrahedron" && <tetrahedronGeometry args={[0.8]} />}
      <meshBasicMaterial color={ACCENT} wireframe opacity={0.35} transparent />
    </mesh>
  );
}

function ParticleField() {
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  const ref = useRef<Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0003;
  });

  return (
    <mesh ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={ACCENT} size={0.025} opacity={0.25} transparent sizeAttenuation />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ParticleField />
      <FloatingShape position={[-6, 0, -3]} geometry="icosahedron" speed={0.003} phaseOffset={0} />
      <FloatingShape position={[0, -0.5, -4]} geometry="torus" speed={0.004} phaseOffset={2.1} />
      <FloatingShape position={[6, 0.5, -3]} geometry="octahedron" speed={0.0025} phaseOffset={4.2} />
    </>
  );
}

export function PortfolioScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      dpr={[1, 1.5]}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <Scene />
    </Canvas>
  );
}
