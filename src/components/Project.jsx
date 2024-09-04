import React from 'react';
import './css/Project.css'

export const ProjectCard = ({ image, name, details, githubLink, deployLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${name} screenshot`} className="project-image" />
      <h3>{name}</h3>
      <p>{details}</p>
      <div className="project-buttons">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="github-button">GitHub</button>
          </a>
        )}
        {deployLink && (
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            <button className="deploy-button">Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

