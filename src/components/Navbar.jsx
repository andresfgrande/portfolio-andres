import { useState } from "react";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ active, scrollTo, scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (l) => {
    scrollTo(l);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="navbar-logo mono">{"<AG />"}</span>

      {/* Desktop Menu */}
      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link${active === l ? " active" : ""}`}
            onClick={() => handleNavClick(l)}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger Toggle */}
      <button 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link${active === l ? " active" : ""}`}
            onClick={() => handleNavClick(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}
