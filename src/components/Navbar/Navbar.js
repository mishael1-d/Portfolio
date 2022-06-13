import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../../assets/logo-white.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const links = ["Home", "About", "Projects", "Blogs", "Contact"];
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="MISH" />
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {links.map((link) => {
          return (
            <li className="nav-item">
              <a href={`#${link}`} className="nav-links" onClick={closeMobileMenu}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
