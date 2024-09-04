import React from "react";
import { ProjectCard } from "./Project";
import "./css/Project.css";
import spotify from "../Images/Screenshot 2024-08-18 002919.png"
import pixel from "../Images/Screenshot 2024-08-18 003004.png"
import dmart from "../Images/Screenshot 2024-08-18 003045.png"
import viatour from "../Images/Screenshot 2024-08-18 003119.png"


const projects = [
  {
    image:spotify,
    name: "Clone of Spotify - Melodify",
    details:
      "Melodify is a clone of Spotify. I created this project with my four teammates in a span of five days.As a team leader, the whole project was created under my vision. I managed GitHub and handled the project's deployment. Additionally, I created the authentication parts such as login, logout, and password reset.",
    githubLink: "https://github.com/ar98nab/Uber-Unicorns_073/",
    deployLink: "https://uber-unicorns073-melodify.netlify.app/",
  },
  {
    image: pixel,
    name: "Pixel, an application for freelancers",
    details:
      "It was a collaboratory project of three people.Because of absence of our team lead i had led the team and we had completed the project within three days. we had created pixel which  is an online platform that allows creative professionals to showcase their work and connect with others in the industry. ",
    githubLink: "https://github.com/ar98nab/Federalism_Functions_036",
    deployLink: "https://pixelmasai.netlify.app/",
  },

  {
    image: dmart,
    name: "Clone of DMart's Landing Page",
    details: "It is a clone of DMart's Landing Page. I have created this page along with my three teammates in a span of two days to get practical exposure of my learning during Masai journey. I have used HTML5,CSS, Bootstrap to create this page.",
    githubLink: "https://github.com/arnabBaruah009/Yamuna-Variable-002/tree/main/Bootstrap",
    deployLink: "https://dmart-cw.netlify.app/",
  },
  {
    image: viatour,
    name: "Clone of landing page of Viatours",
    details: "It is a clone of landing Page of Viatours. I have created this page along with my three teammates in a span of two days to get practical exposure of my learning during Masai journey. I have used HTML5,CSS, Figma to create this page.",
    githubLink: "https://github.com/arnabBaruah009/Yamuna-Variable-002/tree/main/Figma",
    deployLink: "https://viatours-cw.netlify.app/",
  },
];

export const Project = () => {
  return (
    <div id="project" className="projects-page">
    <h2 className="projects-title">Projects</h2> 
     <div className="projects-pagecard">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      </div>
    </div>
  );
};
