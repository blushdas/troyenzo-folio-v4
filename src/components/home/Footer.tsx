"use client";

import { useState } from "react";
import { socials } from "@/lib/data";

export function Footer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const nonEmailSocials = socials.filter((s) => s.label !== "Email");

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Branding */}
        <p
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Troy Enzo 2026™
        </p>

        {/* Social links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem", flexWrap: "wrap" }}>
          {nonEmailSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(s.label)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "0.65rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: hoveredId === s.label ? "var(--text)" : "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Email */}
        <a
          href="mailto:hello@troyenzo.xyz"
          onMouseEnter={() => setHoveredId("email")}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--accent)",
          opacity: hoveredId === "email" ? 1 : 0.8,
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
        >
          hello@troyenzo.xyz
        </a>
      </div>
    </footer>
  );
}
