"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { portfolioItems } from "@/lib/data";
import type { PortfolioItem } from "@/types";

const PortfolioScene = dynamic(
  () => import("./PortfolioScene").then((m) => m.PortfolioScene),
  { ssr: false }
);

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(200,180,154,0.04)" : "var(--surface)",
        border: "1px solid var(--border)",
        borderLeft: `3px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "2px",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        transition: "border-left-color 0.25s ease, background 0.25s ease",
        cursor: item.link ? "pointer" : "default",
        textDecoration: "none",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left: role badge + title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
            borderRadius: "999px",
            padding: "0.2rem 0.6rem",
            whiteSpace: "nowrap",
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.25s ease",
          }}
        >
          {item.role}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
            color: hovered ? "var(--text)" : "rgba(240,240,240,0.85)",
            margin: 0,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            transition: "color 0.25s ease",
          }}
        >
          {item.title}
        </h3>
      </div>

      {/* Right: description + arrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1, justifyContent: "flex-end" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--muted)",
            margin: 0,
            textAlign: "right",
            maxWidth: "380px",
            letterSpacing: "0.02em",
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </p>

        {item.link && (
          <span
            style={{
              color: "var(--accent)",
              fontSize: "1.1rem",
              opacity: hovered ? 1 : 0.35,
              transition: "opacity 0.25s ease, transform 0.25s ease",
              transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
              flexShrink: 0,
            }}
          >
            ↗
          </span>
        )}
      </div>
    </div>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}

export function Portfolio() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D background — loaded client-side only */}
      <PortfolioScene />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--muted)",
            margin: 0,
            marginBottom: "2.5rem",
          }}
        >
          What I&apos;m Building
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
