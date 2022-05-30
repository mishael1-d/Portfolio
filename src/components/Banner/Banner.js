import React from "react";
import "./Banner.css";
import image from "../../assets/banner-image.png";

function Banner() {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-text">
          <h3>MISHAEL DADA</h3>
          <h1>Frontend Web Developer</h1>
          <p>
            I am a Front-End Developer, i can provide you with services such as
            Website or Web application Design and Development.
          </p><a href="#works">
          <button className="primary">
            See My Work
          </button></a>
        </div>
        <div className="banner-image">
          <img src={image} alt="Mishael Dada" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
