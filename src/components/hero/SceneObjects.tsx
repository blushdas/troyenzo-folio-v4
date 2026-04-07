"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SCENE } from "@/lib/constants";

type WireframeObjectProps = {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  color?: string;
};

function WireframeObject({ geometry, position, rotationSpeed, color = "#ffffff" }: WireframeObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * rotationSpeed[0];
    meshRef.current.rotation.y += delta * rotationSpeed[1];
    meshRef.current.rotation.z += delta * rotationSpeed[2];
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export function SceneObjects() {
  const speed = SCENE.ROTATION_SPEED * 30;

  return (
    <>
      <WireframeObject
        geometry={new THREE.IcosahedronGeometry(1.2, 1)}
        position={[-3.5, 1.5, -2]}
        rotationSpeed={[speed * 0.7, speed, speed * 0.3]}
        color="#C8FF00"
      />
      <WireframeObject
        geometry={new THREE.OctahedronGeometry(0.9)}
        position={[3.5, -1, -3]}
        rotationSpeed={[speed * 0.4, speed * 0.8, speed * 0.6]}
        color="#00FFB2"
      />
      <WireframeObject
        geometry={new THREE.TorusGeometry(0.8, 0.2, 6, 12)}
        position={[2, 2.5, -4]}
        rotationSpeed={[speed, speed * 0.3, speed * 0.5]}
        color="rgba(240,240,240,0.6)"
      />
      <WireframeObject
        geometry={new THREE.TetrahedronGeometry(1)}
        position={[-2.5, -2, -2.5]}
        rotationSpeed={[speed * 0.5, speed * 0.6, speed]}
        color="#C8FF00"
      />
    </>
  );
}
