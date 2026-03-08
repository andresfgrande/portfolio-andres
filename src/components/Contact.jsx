import { SOCIAL } from "../data/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,255,136,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <div className="section-label">Contact</div>
        <h2 className="section-title" style={{ marginBottom: 20 }}>
          Let&apos;s Build
          <br />
          <span style={{ color: "#00ff88" }}>Something</span>
        </h2>
        <p
          style={{
            color: "#64748b",
            fontSize: "1rem",
            maxWidth: 440,
            margin: "0 auto 48px",
          }}
        >
          Open to interesting roles, collaborations, and conversations around
          fullstack engineering, Web3, and blockchain identity.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                minWidth: 140,
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <span className="mono" style={{ color: "#00ff88" }}>
                [{s.icon}]
              </span>
              {s.label}
            </a>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            className="mono"
            style={{ fontSize: "0.75rem", color: "#334155" }}
          >
            © 2026 Andrés Grande Núñez
          </span>
          <span
            className="mono"
            style={{ fontSize: "0.72rem", color: "#334155" }}
          >
            Barcelona, Spain · Open to opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
