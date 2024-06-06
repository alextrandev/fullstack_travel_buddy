import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = id => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={logo} alt="hamburger-icon" />
      </div>
      {menuOpen && <ul onClick={() => setMenuOpen(false)} className="nav-menu mobile">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#map" onClick={() => scrollTo("map")} className="nav-links">
            Map
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={() => scrollTo("about")} className="nav-links">
            About
          </Link>
        </li>
      </ul>}
    </div>
  )
}