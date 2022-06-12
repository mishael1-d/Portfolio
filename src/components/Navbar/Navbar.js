import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../../assets/logo-white.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="MISH" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li
            className="nav-item"
          >
            <a
              href="#works"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
              </a>
          </li>
          <li
            className="nav-item"
          >
            <a
              href="#blogs"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blog
              </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact{" "}
            </a>
          </li>
        </ul>
        <Button />
      </nav>
  );
}

export default Navbar;
