"use client";

import { useEffect, useRef } from "react";

export function LiveStats() {
  const fpsRef = useRef<HTMLSpanElement>(null);
  const dimsRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const tzRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // FPS counter
    const frameTimes: number[] = [];
    let rafId: number;
    let last = performance.now();

    function tick(now: number) {
      const delta = now - last;
      last = now;
      frameTimes.push(delta);
      if (frameTimes.length > 60) frameTimes.shift();
      const avgDelta = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
      const fps = Math.round(1000 / avgDelta);
      if (fpsRef.current) fpsRef.current.textContent = String(fps);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    // Viewport dims
    function updateDims() {
      if (dimsRef.current) {
        dimsRef.current.textContent = `${window.innerWidth} × ${window.innerHeight} px`;
      }
    }
    updateDims();
    window.addEventListener("resize", updateDims);

    // Clock — Manila time
    const manilaFmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tzFmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      timeZoneName: "short",
    });

    function updateClock() {
      const now = new Date();
      if (timeRef.current) timeRef.current.textContent = manilaFmt.format(now);
      if (tzRef.current) {
        const parts = tzFmt.formatToParts(now);
        const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "UTC+8";
        tzRef.current.textContent = tz;
      }
    }
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateDims);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      {/* Top-left: clock */}
      <div
        className="absolute top-8 left-8"
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        <div style={{ marginBottom: "0.15rem", opacity: 0.5 }}>Manila, PH · UTC+8</div>
        <div>
          <span ref={timeRef}>00:00:00</span>
          {" "}
          <span ref={tzRef} style={{ opacity: 0.5 }} />
        </div>
      </div>

      {/* Bottom-left: fps + dims */}
      <div
        className="absolute bottom-8 left-8"
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--muted)",
          lineHeight: 1.8,
        }}
      >
        <div>
          Page running at <span ref={fpsRef}>--</span> fps
        </div>
        <div>
          <span ref={dimsRef}>---- × ---- px</span>
        </div>
        <div style={{ opacity: 0.5 }}>Manila, PH → Philippines</div>
      </div>
    </>
  );
}
