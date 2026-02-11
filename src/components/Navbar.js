import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src="./logo/logo.png" alt="Logo" className="logo" style={{ width: '85px', height: '80px' }} />
        </Link>

        <div className="navbar-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToSection("certificates")}>Certificates</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Icon icon="fa7-solid:navicon" width="28" height="28" />
        </button>
      </div>

      {isMobileOpen && (
        <div className="mobile-menu-dropdown">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToSection("certificates")}>Certificates</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
}
