import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackGroundImg from "../components/BackGroundImg";
import ProjectContent from "../components/ProjectContent";
import ProjectDetails from "../components/ProjectDetails";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <BackGroundImg
        source="/images/projects.gif"
        heading="Projects"
        subHeading="Some of the projects I made."
      />
      <ProjectDetails />
      <Footer />
    </div>
  );
};

export default Projects;
