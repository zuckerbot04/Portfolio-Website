// src/components/Resume.js
import './Resume.css'
import React from 'react';
import resumeData from './ResumeData.json';

const Resume = () => {
  return (
    <div className='container'>
      <section>
        <div className='top-header'><h2>Education</h2></div>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <div className='exp-header'>
                <h3>{edu.institution}</h3>
                <p>{edu.location} : {edu.dates}</p>
            </div>
            <div className='detail-section'>
              {edu.details.map((detail, idx) => <p key={idx}>{detail}</p>)}
            </div>
          </div>
        ))}
      </section>
      <section>
      <div className='top-header'><h2>Experience</h2></div>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <div className='exp-header'>
                <h3>{exp.title} | {exp.company}</h3>
                <p>{exp.location} : {exp.dates}</p>
            </div>
            <div className='detail-section'>
              {exp.responsibilities.map((item, idx) => <p key={idx}>{item}</p>)}
            </div>
          </div>
        ))}
      </section>
      <section>
      <div className='top-header'><h2>Projects</h2></div>
        {resumeData.projects.map((project, index) => (
          <div key={index}>
              <div className='detail-section'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>Technologies Used: {project.technologies.join(", ")}</p>
              </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;


