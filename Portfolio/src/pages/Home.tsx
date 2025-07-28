import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const texts = [
    "FULL-STACK DEVELOPER",
    "UI/UX DESIGNER", 
    "PROBLEM SOLVER",
    "CREATIVE INNOVATOR",
    "TECH ENTHUSIAST"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 4000);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(textInterval);
    };
  }, []);

  const handleButtonClick = () => {
    // Create enhanced ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = mousePosition.x + 'px';
    ripple.style.top = mousePosition.y + 'px';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 70%, transparent 100%)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.6)';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.style.width = '400px';
      ripple.style.height = '400px';
      ripple.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
      if (document.body.contains(ripple)) {
        document.body.removeChild(ripple);
      }
    }, 800);
  };

  return (
    <div className="home-page">
      {/* Enhanced Interactive Background Elements */}
      <div className="floating-elements">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              opacity: 0.2 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Enhanced Interactive Grid */}
      <div className="interactive-grid">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="grid-cell"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
              animationDelay: `${i * 0.05}s`,
              opacity: 0.02 + (Math.random() * 0.03)
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className={`hero-title ${isGlitching ? 'glitch' : ''}`}>
            ANIKET KUMAR
          </h1>
          
          <div className="typing-text">
            <span className="text-prefix">I AM A </span>
            <span className={`dynamic-text ${isTyping ? 'typing' : ''}`}>
              {texts[textIndex]}
            </span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Crafting exceptional digital experiences with clean code, innovative design, and cutting-edge technology. 
            Welcome to my universe where creativity meets functionality.
          </p>

          <div className="hero-buttons">
            <button 
              className="hero-btn primary-btn interactive-element"
              onClick={handleButtonClick}
            >
              EXPLORE MY WORK
            </button>
            
            <Link to="/skills">
              <button className="hero-btn secondary-btn interactive-element">
                VIEW RESUME
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          opacity: 0.8
        }}
      />

      {/* Enhanced Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>SCROLL TO EXPLORE</span>
      </div>

      {/* Parallax Background Elements */}
      <div 
        className="parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 0.1
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="parallax-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 