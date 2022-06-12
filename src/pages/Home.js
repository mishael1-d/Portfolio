import React from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Work from "../components/Work/Work";
import Blog from "../components/Blog/Blog";

function Home() {
  return (
      <div>
        <Banner/>
        <About />
        <Work />
        <Blog />
      </div>
  );
}

export default Home;
