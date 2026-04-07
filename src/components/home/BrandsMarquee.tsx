"use client";

import { brands } from "@/lib/data";

export function BrandsMarquee() {
  const items = [...brands, ...brands];

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "5rem 2rem 4rem",
      }}
    >
      <p
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          color: "var(--muted)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
        }}
      >
        Brands I&apos;ve Worked With
      </p>

      <div
        style={{
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            width: "max-content",
            animation: "marquee 40s linear infinite",
            willChange: "transform",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "running";
          }}
        >
          {items.map((brand, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--text)",
                  whiteSpace: "nowrap",
                }}
              >
                {brand.name}
              </span>
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: 1,
                }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
