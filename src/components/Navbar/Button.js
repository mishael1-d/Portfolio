import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";
function Button() {
  return (
    <button className="btn">
      <a href="../../assets/Resume.pdf" download>
        Resume
      </a>
    </button>
  );
}

export default Button;
