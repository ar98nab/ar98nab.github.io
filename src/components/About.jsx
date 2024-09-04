import React from 'react';
import './css/about.css';
import arnab from "../Images/IMG20240817180636.jpg"
import resume from "../Images/ArnabDutta-FullStackWebDeveloper-6n6r.pdf"

export const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={arnab} alt="Arnab Dutta" />
         
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am an Engineering graduate with a passion for technology and a drive to make a difference in the world. 
            I have completed my B.Tech in Electronics and Telecommunication from IIEST, Shibpur. Additionally, I have 
            received training from Masai School in full-time, full-stack web development.
          </p>
          <p>
            I possess a strong foundation in electronic systems and a comprehensive understanding of software development principles. 
            I am equipped with hands-on experience in full-stack web development, including proficiency in front-end technologies 
            such as HTML, CSS, JavaScript, ReactJS and back-end frameworks like Node.js and Express. 
          </p>
          <p>
            I am adept at database management using SQL and NoSQL databases, and skilled in version control with Git. 
            I demonstrate a keen ability to adapt and learn new technologies quickly, coupled with excellent problem-solving skills 
            and a passion for creating efficient, user-friendly web applications. 
            I am eager to contribute to dynamic development teams and grow in the fast-paced tech industry.
          </p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="resume-button">View Resume</button>
          </a>
          <a href="https://github.com/ar98nab" target="_blank" rel="noopener noreferrer">
            <button className="resume-button">View GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/arnab-dutta-roni/" target="_blank" rel="noopener noreferrer">
            <button className="resume-button">View Linkedin</button>
          </a>
        </div>
      </div>
    </section>
  );
};
