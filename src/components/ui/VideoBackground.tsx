"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { VIDEO_SRC } from "@/lib/constants";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reducedMotion = useReducedMotion();

  const scrollProgress = useMotionValue(0);
  const parallaxY = useTransform(scrollProgress, [0, 1], ["0%", "-12%"]);

  useEffect(() => {
    function onScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      scrollProgress.set(window.scrollY / docHeight);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollProgress]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.muted = true;

    const play = () => video.play().catch(() => {});

    // Try immediately once metadata is ready
    if (video.readyState >= 1) {
      play();
    } else {
      video.addEventListener("loadedmetadata", play, { once: true });
    }

    // Fallback: on first user interaction (handles strict autoplay policies)
    const onInteract = () => {
      play();
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("scroll", onInteract);
    };
    document.addEventListener("click", onInteract, { passive: true });
    document.addEventListener("touchstart", onInteract, { passive: true });
    document.addEventListener("scroll", onInteract, { passive: true });

    return () => {
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("scroll", onInteract);
    };
  }, []);

  const shouldParallax = !isMobile && !reducedMotion;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          y: shouldParallax ? parallaxY : "0%",
        }}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "110%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(6,6,6,0.25) 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.82) 100%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
