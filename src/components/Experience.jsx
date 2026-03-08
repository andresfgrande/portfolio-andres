import { EXPERIENCE, EDUCATION, CERTS, SKILLS } from "../data/constants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      <div className="container">
        <div className="section-label">Career</div>
        <h2 className="section-title" style={{ marginBottom: 60 }}>
          Work
          <br />
          <span style={{ color: "#00ff88" }}>Experience</span>
        </h2>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              style={{
                display: "flex",
                gap: 20,
                animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.12}s both`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 6,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: exp.current ? "#00ff88" : exp.accent,
                    boxShadow: exp.current ? "0 0 12px #00ff88" : "none",
                    flexShrink: 0,
                  }}
                />
                {i < EXPERIENCE.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      background: "rgba(255,255,255,0.07)",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>
              <div
                className="card"
                style={{
                  flex: 1,
                  padding: "28px",
                  borderLeft: `2px solid ${exp.accent}30`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#f1f5f9",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        color: exp.accent,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginTop: 2,
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      className="mono"
                      style={{ fontSize: "0.72rem", color: "#64748b" }}
                    >
                      {exp.period}
                    </div>
                    <div
                      className="mono"
                      style={{
                        fontSize: "0.68rem",
                        color: "#475569",
                        marginTop: 2,
                      }}
                    >
                      {exp.location}
                    </div>
                    {exp.current && (
                      <span
                        style={{
                          display: "inline-block",
                          marginTop: 6,
                          background: "rgba(0,255,136,0.12)",
                          border: "1px solid rgba(0,255,136,0.3)",
                          color: "#00ff88",
                          fontSize: "0.62rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          letterSpacing: "0.1em",
                          padding: "2px 8px",
                          borderRadius: 3,
                          textTransform: "uppercase",
                        }}
                      >
                        ● Current
                      </span>
                    )}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748b",
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  {exp.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        background: `${exp.accent}10`,
                        border: `1px solid ${exp.accent}25`,
                        color: exp.accent,
                        padding: "3px 10px",
                        borderRadius: 4,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 64,
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 18 }}>
              Education
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {EDUCATION.map((e) => (
                <div
                  key={e.school}
                  className="card"
                  style={{ padding: "20px 22px" }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      marginBottom: 4,
                    }}
                  >
                    {e.degree}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#00ff88",
                      marginBottom: 4,
                    }}
                  >
                    {e.school}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: "0.68rem", color: "#475569" }}
                  >
                    {e.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: 18 }}>
              Certifications
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {CERTS.map((c) => (
                <div
                  key={c.name}
                  className="card"
                  style={{ padding: "20px 22px" }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      marginBottom: 4,
                    }}
                  >
                    {c.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#a78bfa",
                      marginBottom: 4,
                    }}
                  >
                    {c.issuer}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: "0.68rem", color: "#475569" }}
                  >
                    {c.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginTop: 64 }}>
          <div className="section-label" style={{ marginBottom: 18 }}>
            Skills
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {Object.entries(SKILLS).map(([cat, items], ci) => (
              <div
                key={cat}
                className="card"
                style={{
                  padding: "22px",
                  animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${0.1 + ci * 0.08}s both`,
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: "0.68rem",
                    color: "#00ff88",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  /{cat}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {items.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
