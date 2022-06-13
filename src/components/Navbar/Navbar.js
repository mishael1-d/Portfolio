import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../../assets/logo-white.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState('');
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const links = ["Home", "About", "Projects", "Blogs", "Contact"];

  const handleActiveLink = (name) => {
    closeMobileMenu()
    setActive(name)
  }
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
            <li className="nav-item" key={link}>
              <a
                href={`#${link}`}
                className={active === link ? "nav-links active-link":"nav-links"}
                onClick={()=>handleActiveLink(link)}
              >
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
