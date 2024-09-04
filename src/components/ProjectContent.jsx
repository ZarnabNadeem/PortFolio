// ProjectContent.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./ProjectContentStyles.css";
const ProjectContent = ({ name, imageUrl, vercelUrl, githubUrl }) => {
  return (
    <div className="card">
      <a href={vercelUrl} target="_blank" rel="noopener noreferrer">
        <img className="card-image" src={imageUrl} alt={name} />
      </a>
      <h6 className="card-title">{name}</h6>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon"
      >
        <p>
          For code <FaGithub />
        </p>
      </a>
    </div>
  );
};

export default ProjectContent;
