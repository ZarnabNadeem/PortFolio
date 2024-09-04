import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src="/images/heroimg.png"
          alt="Intro Hero Image"
        />
      </div>
      <div className="content">
        <p>Hi,I'm Zarnab Nadeem.</p>
        <h1>A Front-End Developer.</h1>
        <div>
          <Link to="/projects">
            {" "}
            <button className="button">Projects</button>{" "}
          </Link>
          <a href="/Resume.pdf" download>
            <button className="button">
              {" "}
              Resume <MdOutlineFileDownload size={"25px"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
