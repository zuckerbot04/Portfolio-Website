// src/App.js

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <footer className='footer'>
        <ul className="footer-list" style={{ paddingLeft: 0 }}>
          <li><img src='/Images/footer1.png' alt="Footer 1" /></li>
          <li><img src='/Images/footer2.png' alt="Footer 2" /></li>
          <li><img src='/Images/footer3.png' alt="Footer 3" /></li>
          <li><img src='/Images/footer4.png' alt="Footer 4" /></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;



