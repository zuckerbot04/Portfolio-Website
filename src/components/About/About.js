// src/components/About.js
import './About.css'

import React from 'react';

const personalInfo = {
    "[Name]": "Brandon Kohler",
    "[Job]": "Software Developer",
    "[Company]": "TEST",
    "[Hobbie]": "Statistics, Financial Technology, Economics, and building the future of Finance",
    "[About]": " In my career, I have excelled at tackling complex challenges, thriving in ever-evolving environments, and delivering innovative solutions that perfectly blend technical prowess with financial insights. My approach combines rigorous analytical methods with practical implementation strategies to transform theoretical financial models into accessible, effective technological applications.",
    "[Close]": " I am eager to connect with professionals and pioneers at the nexus of finance and technology. Let's join forces to create groundbreaking financial technologies that not only drive business success but also improve user experiences across the board."
  };

function About() {
    const generateContent = (template) => {
        return template.replace(/\[Name\]|\[Job\]|\[Company\]|\[Hobbie\]|\[About\]|\[Close\]/g, match => personalInfo[match]);
    };

    const introduction = generateContent(
        "Hello! I'm [Name], currently working as a [Job] at [Company]. I have a passion for [Hobbie].[About][Close]"
        );
        
    return (
        <div className="container" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', paddingBottom: '25px' }}>
            <h1>About Me</h1>
            <p>{introduction}</p>
            <ContentWrapper />
        </div>

    );
}

function ContentWrapper() {
    return (
        <div className='content-wrapper'>
            <ImageContainer />
            <Achievements />
        </div>
    );
}

function ImageContainer() {
    return (
        <div className='Img-Container'>
            <img src="/Images/about.jpg" alt="Brandon Kohler" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
    );
}

function Achievements() {
    return (
        <div className='table'>
            <h3>Things I've Achieved</h3>
            <ul className='About-list'>
                <li>Spoke in front of a group of 50 students on upcoming topics in Financial Technology and advised how the West Chester Investment Group can stay ahead of the curve and use this technology to strengthen investment strategies and operations of the fund.</li>
                <li>Played a critical role in managing the Information and Technology sector of the West Chester Investment Group by implementing advanced quantitative and data-oriented strategies to develop more advanced investment strategies.</li>
                <li>Led several teams of students to apply critical thinking and problem-solving skills in real-life investment scenarios.</li>
                <li>Led a team to develop a Full-Stack Application that led to the creation of a FinTech application that implemented financial data to buy/sell stocks and the use of person-to-person payments between users.</li>
            </ul>
        </div>
    );
}

export default About;


