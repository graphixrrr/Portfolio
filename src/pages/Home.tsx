import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaFileAlt, FaArrowDown, FaCode, FaUser } from 'react-icons/fa';

const Home: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const texts = useMemo(() => [
    'FULL-STACK DEVELOPER',
    'PROBLEM SOLVER',
    'INNOVATOR',
    'CREATIVE THINKER',
    'TECH ENTHUSIAST'
  ], []);

  // Typewriter effect for the dynamic text
  useEffect(() => {
    if (typewriterIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setTypewriterText(texts[textIndex].substring(0, typewriterIndex + 1));
        setTypewriterIndex(typewriterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTextIndex((textIndex + 1) % texts.length);
        setTypewriterIndex(0);
        setTypewriterText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterText, textIndex, typewriterIndex, texts]);

  const handleButtonClick = (e: React.MouseEvent) => {
    const button = e.currentTarget as HTMLAnchorElement;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleResumeDownload = (e: React.MouseEvent) => {
    // Create ripple effect
    handleButtonClick(e);
    
    // Download resume
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Aniket_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-page page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">
              <FaUser className="icon-greeting" />
              HELLO, I'M{' '}
            </span>
            <span className="hero-name">ANIKET KUMAR</span>
            <div className="typing-text">
              <span className="text-prefix">I AM A </span>
              <span className="dynamic-text">{typewriterText}</span>
              <span className="cursor">|</span>
            </div>
          </h1>
          
          <p className="hero-description">
            <FaCode className="icon-description" />
            Passionate about creating innovative solutions and turning ideas into reality through code.
            Let's build something amazing together.
          </p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn primary-btn" onClick={handleButtonClick}>
              <FaRocket className="btn-icon" />
              EXPLORE MY WORK
            </Link>
            <button className="hero-btn" onClick={handleResumeDownload}>
              <FaFileAlt className="btn-icon" />
              VIEW RESUME
            </button>
          </div>
          
          <div className="scroll-indicator">
            <FaArrowDown className="scroll-icon" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 