import React from "react";
import HeroBanner from "./HeroBanner";
import About from "./About";
import Contact from "./Contact";

import Projects from "./Projects";
import TechnicalSkills from "./TechnicalSkills";
import Education from "./Education";

const Home = () => {
  return (
    <div id="home">
      <HeroBanner />
      <About />
      <Education />
      <Projects />
      <TechnicalSkills />
      <Contact />
    </div>
  );
};

export default Home;
