// ProjectDetails.jsx
import React from "react";
import "./ProjectContentStyles.css"; // Import the CSS file for styling
import ProjectContent from "./ProjectContent"; // Import the card component

const projects = [
  {
    name: "React Cart App",
    imageUrl: "/images/projects/zarokitchen.png",
    vercelUrl: "https://zero-kitchen-webcart.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/ZeroKitchenWebsite",
  },
  {
    name: "My Portfolio",
    imageUrl: "/images/projects/portfolio.png",
    vercelUrl: "https://your-vercel-link.com/project2",
    githubUrl: "https://github.com/your-repo/project2",
  },
  {
    name: "To-Do List",
    imageUrl: "/images/projects/todolist.png",
    vercelUrl: "https://to-do-list-zeta-smoky.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/to-do-list",
  },
  {
    name: "Digital Clock",
    imageUrl: "/images/projects/digitalclock.png",
    vercelUrl: "https://digital-clock-green-five.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/Digital-Clock",
  },
  {
    name: "CarsWithZeroHaters Website",
    imageUrl: "/images/projects/cars.png",
    vercelUrl: "https://carswithzerohatersdark.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/carswithzerohatersdark",
  },
  {
    name: "CarsWithZeroHaters Website",
    imageUrl: "/images/projects/carslight.png",
    vercelUrl: "https://carswithzerohaters.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/carswithzerohaters",
  },
  {
    name: "Power-Movers Website",
    imageUrl: "/images/projects/powermovers.png",
    vercelUrl: "https://power-movers.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/power_movers",
  },
  {
    name: "Color Picker App",
    imageUrl: "/images/projects/colorpicker.png",
    vercelUrl: "https://color-picker-app-xi.vercel.app/",
    githubUrl: "https://github.com/ZarnabNadeem/color-picker-app",
  },
];

const ProjectDetails = () => {
  return (
    <div className="project-details">
      {projects.map((project, index) => (
        <ProjectContent
          key={index}
          name={project.name}
          imageUrl={project.imageUrl}
          vercelUrl={project.vercelUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectDetails;
