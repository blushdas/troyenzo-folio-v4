"use client";

import { projects } from "@/lib/data";

export function ProjectsScroll() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <p
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          color: "var(--muted)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
          paddingLeft: "2rem",
        }}
      >
        Projects
      </p>

      <div
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            padding: "0 2rem",
            width: "max-content",
          }}
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "300px",
                maxWidth: "300px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "1.5rem",
                textDecoration: "none",
                cursor: "pointer",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(200,255,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--border)";
              }}
            >
              {/* Top row: URL + status */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: "0.6rem",
                    color: "var(--muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "160px",
                  }}
                >
                  {project.link?.replace("https://", "")}
                </span>
                {project.status === "live" && (
                  <span
                    style={{
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "var(--accent)",
                      color: "#060606",
                      padding: "2px 6px",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  >
                    Live
                  </span>
                )}
              </div>

              {/* Title */}
              <p
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.5,
                  marginBottom: "1.25rem",
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.25rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: "0.55rem",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year */}
              <p
                style={{
                  fontFamily: '"Courier New", Courier, monospace',
                  fontSize: "0.6rem",
                  color: "var(--muted)",
                  marginTop: "auto",
                }}
              >
                {project.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
