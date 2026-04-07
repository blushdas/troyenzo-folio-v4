"use client";

import { useState } from "react";

const VIDEO_SRC = "https://pub-d213b699eec14b34b97b25a8f935bbf8.r2.dev/videos/troy%20showcase.mp4";

export function HomePage() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
        background: "#060606",
        color: "var(--text)",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: videoReady ? 1 : 0,
          transition: "opacity 0.8s ease-in",
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(6,6,6,0.3) 0%, rgba(6,6,6,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom-left content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 10,
          padding: "4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: "1rem",
            color: "#F0F0F0",
            textTransform: "uppercase",
          }}
        >
          Troy Enzo
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "0.9rem",
            color: "var(--muted)",
            margin: 0,
            marginBottom: "0.35rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>—</span>
          AIPreneur, Educator and Athlete
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "0.9rem",
            color: "var(--muted)",
            margin: 0,
            marginBottom: "0.35rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>—</span>
          Currently: building an army of AI cyborgs 🤖
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "0.9rem",
            color: "var(--muted)",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>—</span>
          Vibe code, curate meetups and grow brands for a living
        </p>
      </div>
    </div>
  );
}
