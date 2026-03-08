import { PROJECTS } from "../data/constants";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">Work</div>
        <h2 className="section-title" style={{ marginBottom: 60 }}>
          Featured
          <br />
          <span style={{ color: "#00ff88" }}>Projects</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="card"
              style={{
                padding: "32px",
                position: "relative",
                overflow: "hidden",
                animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.12}s both`,
                borderTop: `2px solid ${p.accent}50`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${p.accent}18`,
                    border: `1px solid ${p.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: p.accent,
                    }}
                  />
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: "0.62rem",
                    background: `${p.accent}12`,
                    border: `1px solid ${p.accent}25`,
                    color: p.accent,
                    padding: "3px 8px",
                    borderRadius: 3,
                  }}
                >
                  {p.badge}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: 4,
                }}
              >
                {p.title}
              </h3>
              <div
                className="mono"
                style={{
                  fontSize: "0.73rem",
                  color: p.accent,
                  marginBottom: 12,
                }}
              >
                {p.subtitle}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      background: `${p.accent}10`,
                      border: `1px solid ${p.accent}25`,
                      color: p.accent,
                      padding: "3px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
