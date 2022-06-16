import React from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Work from "../components/Work/Work";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <div id="Home" style={{position :"relative"}}>
      <Banner />
      <About />
      <Work />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
