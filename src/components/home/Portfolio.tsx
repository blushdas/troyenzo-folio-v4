"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { PortfolioItem } from "@/types";

function PortfolioCard({ item, isMobile }: { item: PortfolioItem; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(200,180,154,0.08)"
          : "rgba(6,6,6,0.45)",
        border: "1px solid",
        borderColor: hovered ? "rgba(200,180,154,0.3)" : "rgba(255,255,255,0.06)",
        borderLeft: `3px solid ${hovered ? "var(--accent)" : "rgba(200,180,154,0.2)"}`,
        borderRadius: "3px",
        padding: isMobile ? "1.25rem" : "2rem 2.5rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? "1rem" : "2rem",
        transition: "background 0.25s ease, border-color 0.25s ease",
        cursor: item.link ? "pointer" : "default",
        textDecoration: "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Left: role badge + title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }}>
        {item.role && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.55rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: hovered ? "var(--accent2)" : "var(--accent)",
              border: `1px solid ${hovered ? "rgba(232,213,183,0.5)" : "rgba(200,180,154,0.3)"}`,
              borderRadius: "999px",
              padding: "0.2rem 0.65rem",
              whiteSpace: "nowrap",
              transition: "color 0.25s ease, border-color 0.25s ease",
            }}
          >
            {item.role}
          </span>
        )}

        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 800,
            fontSize: isMobile ? "1.1rem" : "clamp(1.1rem, 2.2vw, 1.6rem)",
            color: hovered ? "var(--text)" : "rgba(240,240,240,0.8)",
            margin: 0,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            transition: "color 0.25s ease",
          }}
        >
          {item.title}
        </h3>
      </div>

      {/* Right: description + arrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          flex: isMobile ? undefined : 1,
          justifyContent: isMobile ? "flex-start" : "flex-end",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: hovered ? "rgba(240,240,240,0.65)" : "var(--muted)",
            margin: 0,
            textAlign: isMobile ? "left" : "right",
            maxWidth: isMobile ? "100%" : "360px",
            letterSpacing: "0.02em",
            lineHeight: 1.65,
            transition: "color 0.25s ease",
          }}
        >
          {item.description}
        </p>

        {item.link && (
          <span
            style={{
              color: "var(--accent)",
              fontSize: "1rem",
              opacity: hovered ? 1 : 0.3,
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
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}

export function Portfolio() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      style={{
        background: "transparent",
        padding: isMobile ? "3rem 1rem" : "6rem 2rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--accent)",
            margin: 0,
            marginBottom: "2rem",
            opacity: 0.7,
          }}
        >
          Currently Building
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
