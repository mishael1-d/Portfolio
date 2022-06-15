import React, { useEffect } from "react";
import "./Banner.css";

function Banner() {
  useEffect(()=>{
    var i = 0,
        text;
      text = "Frontend Software Engineer";
      function typing() {
        if (i < text.length) {
          document.getElementById("animate").innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, 100);
        }
      }
      typing();
      return()=>{
        document.getElementById("animate").innerHTML = ''
      }
  },[])
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-text">
          <p className="banner-title">Hi, my name is</p>
          <h3>Mishael <span>Dada.</span></h3>
          <h1 id="animate">{" "}</h1>
          <p>
            I am a Frontend Software Engineer, with holistic knowledge of frontend development technologies used to plan, build and delopy A<sup>+</sup> grade website and web applications.
          </p><a href="#Projects">
          <button className="primary">
            See My Work
          </button></a>
        </div>
        {/* <div className="banner-image">
          <img src={image} alt="Mishael Dada" />
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
