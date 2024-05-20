import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';  // Ensure your CSS file is linked

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

    // Function to toggle the state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbarContainer'>
            <nav className="navbar">
                <div className='navbar-header'>
                    <NavLink className="navbar-brand" to="/">
                        <img src='/Images/PS.png' alt="Logo" style={{ height: '50px' }}/>
                    </NavLink>
                    <div className="hamburger" onClick={toggleMenu}>☰</div>
                </div>
                <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                    <li className="nav-item"><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
                    <li className="nav-item"><NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink></li>
                    <li className="nav-item"><NavLink to="/resume" onClick={toggleMenu}>Resume</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
