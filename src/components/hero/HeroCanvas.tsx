"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { ParticleCloud } from "./ParticleCloud";
import { SceneObjects } from "./SceneObjects";
import { useMousePosition } from "@/hooks/useMousePosition";
import { SCENE } from "@/lib/constants";
import * as THREE from "three";

function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();
  const target = new THREE.Vector3();

  useFrame(() => {
    target.set(mouse.current.x * 1.5, -mouse.current.y * 1.5, camera.position.z);
    camera.position.lerp(
      new THREE.Vector3(target.x, target.y, 5),
      SCENE.CAMERA_LERP
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <CameraRig />
      <ParticleCloud />
      <SceneObjects />
    </>
  );
}

export function HeroCanvas() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!ctx) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={SCENE.DPR}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
