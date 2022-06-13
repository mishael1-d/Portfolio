import React from "react";
import image from "../../assets/banner-image.png";
import "./About.css";

function About() {
  return (
    <div className="about-section" id="About">
      <div className="container">
        <div className="about-image__container">
          <img src={image} alt="About Me" className="about-image-img" />
        </div>
        <div className="about-text__container">
          <div className="section-text__header">
            <h3 className="section-text__title">About Me</h3>
            <div className="divider" />
          </div>
          <div className="about-text__text">
            My name is <strong>MISHAEL DADA</strong>, I'm from Nigeria and i am
            a <strong>Frontend Web Developer.</strong>
            <br />I have a years working experince as a frontend developer and i
            have a good understanding of my frontend technologies (HTML,CSS,
            Javascript, Typescript, ReactJs, NextJs, Redux, Tailwind Css) among
            others.
            <br />
            I'm a graduate of Biochemistry from one of the most prestigious
            University in the country i transitioned into the tech industry
            right after graduating from the University. I'm very passionate
            about the tech industry, i'm always eager to engage in talks or
            discussions that has to do with the tech industry because of my
            unwavering passion for the field. I also like to get my hands dirty
            by writing codes and this is one of the factors that have brought me
            thus far, i'm dedicated, foused and consistent when it comes to
            learning or picking up new technologies.
          </div>
          <a href="#Projects">
            <button className="primary">See my Works</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
