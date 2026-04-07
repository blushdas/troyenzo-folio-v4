"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isTouch = useMediaQuery("(hover: none)");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 100 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 100 });

  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const isHovering = useRef(false);
  const ringScale = useMotionValue(1);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleEnter = () => {
      isHovering.current = true;
      ringScale.set(1.5);
    };

    const handleLeave = () => {
      isHovering.current = false;
      ringScale.set(1);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    const interactables = document.querySelectorAll("a, button, [role='button']");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY, ringScale]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: "var(--accent)",
            mixBlendMode: "difference",
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border"
          style={{
            borderColor: "rgba(240,240,240,0.4)",
            mixBlendMode: "difference",
          }}
        />
      </motion.div>
    </>
  );
}
