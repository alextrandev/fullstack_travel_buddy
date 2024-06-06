import { Link } from "react-router-dom";
import "./Navbar.css";
import { debounce } from "../../functions/functions";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  const debouncedHandleScroll = debounce(handleScroll, 10);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  const scrollTo = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="logo">
              <img src={logo} alt="logo-icon" />
            </div>
            <p>ForeMap</p>
          </Link>
          <ul className="nav-menu full">
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
          </ul>
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
