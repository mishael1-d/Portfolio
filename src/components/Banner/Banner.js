import React, { useEffect } from "react";
import "./Banner.css";
import image from "../../assets/banner-image.png";

function Banner() {
  useEffect(()=>{
    var i = 0,
        text;
      text = "Frontend Web Developer";
      function typing() {
        if (i < text.length) {
          document.getElementById("animate").innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, 100);
        }
      }
      typing();
  },[])
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-text">
          <p>Hi, my name is</p>
          <h3>MISHAEL DADA</h3>
          <h1 id="animate">{" "}</h1>
          <p>
            I am a Front-End Developer, i can provide you with services such as
            Website or Web application Design and Development.
          </p><a href="#Projects">
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
