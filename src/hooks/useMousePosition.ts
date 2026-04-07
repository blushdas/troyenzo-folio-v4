"use client";

import { useRef, useEffect } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

/**
 * Tracks mouse position in a ref — no re-renders.
 * Values are normalized: -0.5 to 0.5 relative to viewport center.
 */
export function useMousePosition() {
  const position = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = {
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
