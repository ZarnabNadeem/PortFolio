import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackGroundImg from "../components/BackGroundImg";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <BackGroundImg
        source="./images/bgabout.gif"
        heading="ABOUT"
        subHeading="I'm a React Front-End Developer."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
