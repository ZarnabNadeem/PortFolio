import "./BackGroundImgStyles.css";
import React from "react";

const BackGroundImg = ({
  source = "/images/heroimg.png",
  heading = "HEADING",
  subHeading = "TEXT",
}) => {
  return (
    <div className="background-img">
      <img className="bg-img" src={source} alt="Back Ground Image" />
      <div className="heading">
        <h1>{heading}</h1>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default BackGroundImg;
