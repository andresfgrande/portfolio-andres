import useTypingEffect from "../hooks/useTypingEffect";
import Cursor from "./Cursor";
import HeroParticles from "./HeroParticles";

export default function Hero({ scrollTo }) {
  const typed = useTypingEffect([
    "Senior Full Stack Developer",
    "Blockchain Engineer",
    "Node & NestJS & React Developer",
  ]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="grid-bg"
    >
      <HeroParticles />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,255,136,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingTop: 100 }}
      >
        <div className="fade-up fade-up-1">
          <span
            className="mono"
            style={{
              fontSize: "0.78rem",
              color: "#00ff88",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            &gt; Based in Barcelona, Spain
          </span>
        </div>
        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            marginTop: 16,
            marginBottom: 8,
            letterSpacing: "-0.03em",
          }}
        >
          Andrés
          <br />
          <span style={{ color: "#00ff88" }}>Grande</span>
        </h1>
        <div
          className="fade-up fade-up-3"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "#64748b",
            marginBottom: 36,
            minHeight: "2rem",
          }}
        >
          <span className="mono">
            {typed}
            <Cursor />
          </span>
        </div>
        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: "1.05rem",
            color: "#94a3b8",
            maxWidth: 560,
            lineHeight: 1.8,
            marginBottom: 44,
          }}
        >
          Fullstack engineer with{" "}
          <span style={{ color: "#e2e8f0" }}>7+ years</span> building production
          systems. Specialized in{" "}
          <span style={{ color: "#e2e8f0" }}>Node.js & React</span>,{" "}
          <span style={{ color: "#e2e8f0" }}>Blockchain & Web3</span>, and
          decentralized identity — currently driving fullstack at{" "}
          <span style={{ color: "#00ff88" }}>Business Insights</span>.
        </p>
        <div
          className="fade-up fade-up-4"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollTo("Experience")}
          >
            View Experience →
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo("Contact")}
          >
            Get in Touch
          </button>
        </div>
        <div
          className="fade-up fade-up-4"
          style={{
            display: "flex",
            gap: 40,
            marginTop: 56,
            paddingTop: 56,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
          }}
        >
          {[
            { n: "7+", label: "Years Experience" },
            { n: "3", label: "Companies" },
            { n: "MSc", label: "Blockchain · UPC" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#00ff88",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: "0.68rem",
                  color: "#64748b",
                  marginTop: 4,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
