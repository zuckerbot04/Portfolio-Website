// src/components/Portfolio.js
import './Portfolio.css';
import React from 'react';
import portfolioData from './PortfolioData.json';

function Portfolio() {
    const data = portfolioData.portfolio;

    return (
        <div className="container" style={{ padding: '25px 50px' }}>
            <h1>{data.title}</h1>
            <p>{data.introduction}</p>
            
            <ul className="project-list" style={{ paddingleft: '0px' }}>
                {data.projects.map(project => (
                    <li key={project.id} className="project-item">
                        <a href={project.link}> <h2>{project.name}</h2></a>
                        <p>{project.description}</p>
                        <p>{project.description2}</p>
                        {project.image && (
                            <div className="portfolio-img-container">
                                <img src={project.image} alt={`Project ${project.name}`} />
                            </div>
                        )}
                        <p>{project.description3}</p>
                        <div className="portfolio-img-2-container">
                            <img className="portfolio_image_2" src={project.image_2} alt={`Additional view of ${project.name}`} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;



