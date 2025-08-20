import React from "react";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project1 from "./Project1";
import Project4 from "./Project4";

const Projects = () => {
  return (
    <div id="projects" className="space-y-3">
      <Project4 />
      <Project2 />
      <Project1 />
      <Project3 />
    </div>
  );
};

export default Projects;
