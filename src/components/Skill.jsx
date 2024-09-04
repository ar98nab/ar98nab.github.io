import React from 'react';
import './css/skill.css';

 const skills = [
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/452/mongodb.png' },
  { name: 'SQL', logo: 'https://img.icons8.com/ios-filled/452/sql.png' },
  { name: 'Mongoose', logo: 'https://img.icons8.com/color/48/mongoose.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/452/javascript.png' },
  { name: 'React.js', logo: 'https://img.icons8.com/color/452/react-native.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/color/452/nodejs.png' },
  { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { name: 'Java', logo: 'https://img.icons8.com/color/452/java-coffee-cup-logo.png' },
  { name: 'HTML', logo: 'https://img.icons8.com/color/452/html-5.png' },
  { name: 'CSS', logo: 'https://img.icons8.com/color/452/css3.png' },
  { name: 'Sass', logo: 'https://img.icons8.com/color/452/sass.png' },
  { name: 'Figma', logo: 'https://img.icons8.com/color/452/figma.png' },
  { name: 'Redux', logo: 'https://img.icons8.com/color/452/redux.png' },
];

export const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


