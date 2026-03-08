import { NAV_LINKS } from "../data/constants";

export default function Navbar({ active, scrollTo, scrolled }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "18px 32px",
        background: scrolled ? "rgba(5,10,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span
        className="mono"
        style={{
          fontSize: "0.85rem",
          color: "#00ff88",
          letterSpacing: "0.08em",
        }}
      >
        {"<AG />"}
      </span>
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link${active === l ? " active" : ""}`}
            onClick={() => scrollTo(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}
