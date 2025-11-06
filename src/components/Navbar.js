// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "#about-section" },
//   { name: "Services", path: "/services" },
// ];

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToContact = () => {
//     // If we're not on the home page, navigate there first
//     if (location.pathname !== '/') {
//       navigate('/');
//       // Wait for navigation to complete, then scroll
//       setTimeout(() => {
//         const contactSection = document.getElementById('contact-section');
//         if (contactSection) {
//           contactSection.scrollIntoView({ 
//             behavior: 'smooth',
//             block: 'start'
//           });
//         }
//       }, 100);
//     } else {
//       // If we're already on home page, just scroll
//       const contactSection = document.getElementById('contact-section');
//       if (contactSection) {
//         contactSection.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         {/* Company Name Left Side - Before Home */}
//         <div className="nav-logo">
//           <span className="company-name">CHILDCRAFT HALLMARK PUBLISHERS PVT.LTD</span>
//         </div>
//         {/* Desktop Links Centered */}
//         <ul className="nav-links">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;
//             return (
//               <li key={link.path}>
//                 <Link
//                   to={link.path}
//                   className={`nav-item${isActive ? " active" : ""}`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         {/* Contact and Logos */}
//         <div className="nav-contact-wrapper">
//           <button 
//             onClick={scrollToContact}
//             className="nav-item nav-contact-btn"
//             style={{ 
//               background: 'none', 
//               border: 'none', 
//               cursor: 'pointer',
//               padding: '8px 18px',
//               borderRadius: '8px'
//             }}
//           >
//             Contact
//           </button>
//           <img
//             src="/images/rvh.jpg"
//             alt="Vivanta Logo"
//             className="vivanta-logo"
//           />
//           <img
//             src="/images/rch.jpg"
//             alt="RCH Logo"
//             className="rch-logo"
//           />
//         </div>
//         {/* Mobile Toggle */}
//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>
//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <ul className="mobile-menu">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;
//             return (
//               <li key={link.path}>
//                 <Link
//                   to={link.path}
//                   className={`nav-item${isActive ? " active" : ""}`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}
//           <li>
//             <button
//               onClick={() => {
//                 scrollToContact();
//                 setMenuOpen(false);
//               }}
//               className="nav-item"
//               style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 cursor: 'pointer',
//                 width: '100%',
//                 textAlign: 'center'
//               }}
//             >
//               Contact
//             </button>
//           </li>
//           <li>
//             <span className="mobile-company-name">CHILDCRAFT HALLMARKPUBLISHERS PVT.LTD</span>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about-section" },
  { name: "Services", path: "/services" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Scroll to a specific section (About / Contact)
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
        {/* Company Name Left Side */}
        <div className="nav-logo">
          <span className="company-name">
            CHILDCRAFT HALLMARK PUBLISHERS PVT.LTD
          </span>
        </div>

        {/* Desktop Links Centered */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path || location.hash === link.path;

            return (
              <li key={link.name}>
                {link.path.startsWith("#") ? (
                  // 🔹 For "About" (hash link)
                  <button
                    onClick={() => scrollToSection(link.path.replace("#", ""))}
                    className={`nav-item${isActive ? " active" : ""}`}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {link.name}
                  </button>
                ) : (
                  // 🔹 For normal routes (Home, Services)
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
          <button
            onClick={() => scrollToSection("contact-section")}
            className="nav-item nav-contact-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 18px",
              borderRadius: "8px",
            }}
          >
            Contact
          </button>
          <img
            src="/images/rvh.jpg"
            alt="Vivanta Logo"
            className="vivanta-logo"
          />
          <img
            src="/images/rch.jpg"
            alt="RCH Logo"
            className="rch-logo"
          />
        </div>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith("#") ? (
                <button
                  onClick={() => {
                    scrollToSection(link.path.replace("#", ""));
                    setMenuOpen(false);
                  }}
                  className="nav-item"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                  }}
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

          {/* Contact Button in Mobile Menu */}
          <li>
            <button
              onClick={() => {
                scrollToSection("contact-section");
                setMenuOpen(false);
              }}
              className="nav-item"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "100%",
                textAlign: "center",
              }}
            >
              Contact
            </button>
          </li>

          {/* Company Name at Bottom */}
          <li>
            <span className="mobile-company-name">
              CHILDCRAFT HALLMARK PUBLISHERS PVT.LTD
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
