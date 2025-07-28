import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Interactive Background */}
        <div className="background-grid"></div>
        <div className="mouse-trail" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
        
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <span className="logo-text">AK</span>
            </div>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">HOME</Link></li>
              <li><Link to="/about" className="nav-link">ABOUT</Link></li>
              <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
              <li><Link to="/skills" className="nav-link">SKILLS</Link></li>
              <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Interactive Particles */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App; 