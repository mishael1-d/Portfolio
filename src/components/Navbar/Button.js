import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
function Button() {
  return (
    <Link to="resume">
      <button className="btn">Resume</button>
    </Link>
  );
}

export default Button;
