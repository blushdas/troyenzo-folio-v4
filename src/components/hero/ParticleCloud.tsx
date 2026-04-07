"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SCENE } from "@/lib/constants";

export function ParticleCloud() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, count } = useMemo(() => {
    const count = SCENE.PARTICLE_COUNT;
    const positions = new Float32Array(count * 3);
    const spread = SCENE.PARTICLE_SPREAD;

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }

    return { positions, count };
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.03;
    meshRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={SCENE.PARTICLE_SIZE}
        color="#C8FF00"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}
