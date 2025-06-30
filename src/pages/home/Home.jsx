import React from "react";
import HeroBanner from "./HeroBanner";
import About from "./About";
import Contact from "./Contact";

import Projects from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <HeroBanner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
