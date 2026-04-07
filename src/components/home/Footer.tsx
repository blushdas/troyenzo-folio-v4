"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,6,6,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: isMobile ? "2rem 1.75rem" : "2.25rem 4rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Branding */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(240,240,240,0.25)",
            margin: 0,
          }}
        >
          Troy Enzo 2026™
        </p>

        {/* Email CTA */}
        <a
          href="mailto:hello@troyenzo.xyz"
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: emailHovered ? "var(--bg)" : "var(--accent)",
            textDecoration: "none",
            padding: "0.4rem 1rem",
            border: `1px solid ${emailHovered ? "var(--accent)" : "rgba(200,180,154,0.35)"}`,
            borderRadius: "999px",
            background: emailHovered ? "var(--accent)" : "rgba(200,180,154,0.06)",
            transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          hello@troyenzo.xyz
        </a>
      </div>
    </footer>
  );
}
