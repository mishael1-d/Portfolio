import React from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Work from "../components/Work/Work";
// import Service from "../components/Services/Service";

function Home() {
  return (
      <div>
        <Banner/>
        <About />
        <Work />
      </div>
  );
}

export default Home;
