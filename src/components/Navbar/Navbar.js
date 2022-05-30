import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../../assets/logo-white.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
      <nav className="navbar">
        <a href="#" className="navbar-logo">
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href="#works"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
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
