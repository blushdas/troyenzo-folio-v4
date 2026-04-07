"use client";

import { useState } from "react";
import { socials } from "@/lib/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const nonEmailSocials = socials.filter((s) => s.label !== "Email");

  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        color: "var(--text)",
        zIndex: 2,
      }}
    >
      {/* Bottom-left content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 10,
          padding: isMobile ? "1.75rem" : "4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 800,
            fontSize: isMobile ? "clamp(2.5rem, 12vw, 4rem)" : "clamp(3.5rem, 7vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: "1.25rem",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          Troy Enzo
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: isMobile ? "0.75rem" : "0.85rem",
              color: "var(--muted)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>—</span>
            AIPreneur, Educator and Athlete
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: isMobile ? "0.75rem" : "0.85rem",
              color: "var(--muted)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>—</span>
            Currently: building an army of AI cyborgs 🤖
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: isMobile ? "0.75rem" : "0.85rem",
              color: "var(--muted)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>—</span>
            Vibe code, curate meetups and grow brands for a living
          </p>
        </div>

        {/* Social pill buttons */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          {nonEmailSocials.map((s) => {
            const isHovered = hoveredId === s.label;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(s.label)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: isHovered ? "var(--bg)" : "var(--accent)",
                  textDecoration: "none",
                  padding: "0.4rem 0.9rem",
                  border: `1px solid ${isHovered ? "var(--accent)" : "rgba(200,180,154,0.35)"}`,
                  borderRadius: "999px",
                  background: isHovered ? "var(--accent)" : "rgba(200,180,154,0.06)",
                  transition:
                    "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  display: "inline-block",
                }}
              >
                {s.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
