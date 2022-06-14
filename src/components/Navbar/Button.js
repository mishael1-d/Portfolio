import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";
function Button() {
  return (
    <a href="../../assets/Resume.pdf" download>
      <button className="btn">Resume</button>{" "}
    </a>
  );
}

export default Button;