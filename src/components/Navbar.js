import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about-section" },
  { name: "Products", path: "#portfolio-section" },
  { name: "Contact", path: "#contact-section" },
  
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Company Name */}
        <div className="nav-logo">
          <span className="company-name">
            <span className="company-full">CHILDCRAFT HALLMARK PUBLISHERS PVT.LTD</span>
            <span className="company-split">
              <span>CHILDCRAFT</span>
              <span>HALLMARK PUBLISHERS PVT.LTD</span>
            </span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path || location.hash === link.path;

            return (
              <li key={link.name}>
                {link.path.startsWith("#") ? (
                  <button
                    onClick={() => scrollToSection(link.path.replace("#", ""))}
                    className={`nav-item${isActive ? " active" : ""}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-item${isActive ? " active" : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
          
        </ul>

        {/* Contact + Logos */}
        <div className="nav-contact-wrapper">
         
          <img src="/images/rvh.jpg" alt="Vivanta Logo" className="vivanta-logo" />
          <img src="/images/rch.jpg" alt="RCH Logo" className="rch-logo" />
        </div>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-wrapper">
          <ul className="mobile-menu slide-down">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith("#") ? (
                  <button
                    onClick={() => {
                      scrollToSection(link.path.replace("#", ""));
                      setMenuOpen(false);
                    }}
                    className="nav-item"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`nav-item${
                      location.pathname === link.path ? " active" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;