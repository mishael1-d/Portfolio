import React from "react";
import "./Service.css";
import icon1 from "../../assets/design-icon.png";
import icon2 from "../../assets/dev-icon.png";
import plusSign from "../../assets/plus-sign.png";
function Service() {
  return (
    <div className="service-section">
      <div className="container">
        <h4>SERVICE</h4>
        <p className="service-section-heading">
          What i can help <br /> you with
        </p>
        <div className="cards">
          <div className="card">
            <img src={icon1} alt="design-icon" />
            <span>Design</span>
            <p className="card-text">
              Mishael Dada is a designer you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <img src={plusSign} alt="Open" />
            <span>Learn More</span>
          </div>
          <div className="card">
            <img src={icon2} alt="design-icon" />
            <span>Development</span>
            <p className="card-text">
              Mishael Dada is a developer you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <img src={plusSign} alt="Open" />
            <span>Learn More</span>
          </div>
        </div>
          <span>Want More Services? <span>Explore Now</span></span>
      </div>
    </div>
  );
}

export default Service;
