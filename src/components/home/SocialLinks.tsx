"use client";

import { socials } from "@/lib/data";

export function SocialLinks() {
  return (
    <div
      className="absolute bottom-8 right-8 flex flex-col gap-2 items-end"
      style={{ zIndex: 10 }}
    >
      {socials.map((s, i) => (
        <a
          key={s.href}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          style={
            {
              "--i": i,
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              color: "var(--muted)",
              padding: "0.35rem 0.75rem",
              border: "1px dashed var(--border)",
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.03)",
              transition: "border-color 500ms, color 500ms, background 500ms",
              textDecoration: "none",
              display: "inline-block",
              animationFillMode: "both",
              animationDelay: "calc(var(--i) * 80ms)",
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderStyle = "solid";
            el.style.borderColor = "rgba(255,255,255,0.25)";
            el.style.color = "var(--text)";
            el.style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderStyle = "dashed";
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--muted)";
            el.style.background = "rgba(255,255,255,0.03)";
          }}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
