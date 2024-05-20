// src/components/Home.js
import React from 'react';
import './Home.css';

// Define the data object
const arr = { "[Name]": "Brandon Kohler", "[Profession]": "Software Developer" };

function Home() {
    // Function to replace placeholders with actual data
    function fillContent(content) {
        return content.replace(/\[Name\]|\[Profession\]/g, match => arr[match]);
    }

    // Use the function to prepare content
    const content = fillContent("I'm [Name], a [Profession]. Here you'll find details about my projects, skills, and professional journey.");

    return (
        <div className="home-container">
            <div className='home-Image'>
                <h1>Welcome to My Portfolio</h1>
                    <p>{content}</p>
            </div>                
        </div>
    );
}

export default Home;

