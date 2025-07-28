import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [showFact, setShowFact] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const funFacts = [
    "🌏 I love traveling and exploring new cultures! Every journey teaches me something new about design, user experience, and the world around us.",
    "🎨 I'm passionate about minimalist design and believe that less is more when it comes to creating impactful user experiences.",
    "☕ I can't start my day without a perfect cup of coffee and some good music - it's my creative ritual!",
    "📚 I'm constantly learning new technologies and frameworks to stay ahead of the curve in this ever-evolving tech landscape.",
    "🎯 I believe in writing clean, maintainable code that not only works but also tells a story."
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="page-title">ABOUT ME</h1>
        
        <div className="about-grid">
          <div 
            className={`about-card interactive-element ${activeCard === 0 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <h3>WHO I AM</h3>
            <p>
              Hi! I'm Aniket Kumar, a passionate full-stack developer with a deep love for creating 
              beautiful and functional web applications. I enjoy learning new technologies, solving complex problems, 
              and turning innovative ideas into reality through clean, efficient code.
            </p>
          </div>

          <div 
            className={`about-card interactive-element ${activeCard === 1 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <h3>MY APPROACH</h3>
            <p>
              I believe in creating experiences that are not just functional, but also visually stunning 
              and user-friendly. Every project is an opportunity to push boundaries, innovate, and deliver 
              solutions that exceed expectations while maintaining clean, scalable architecture.
            </p>
          </div>

          <div 
            className={`about-card interactive-element ${activeCard === 2 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <h3>MY PASSION</h3>
            <p>
              From coding to problem-solving, I'm driven by curiosity and the desire to create something 
              meaningful. Technology is my canvas, code is my paintbrush, and innovation is my muse. 
              I thrive on challenges that push me to think creatively and technically.
            </p>
          </div>
        </div>

        <div className="fun-fact-section">
          <button 
            className="fun-fact-btn interactive-element"
            onClick={() => setShowFact(!showFact)}
          >
            {showFact ? 'HIDE' : 'SHOW'} FUN FACTS
          </button>
          
          {showFact && (
            <div className="fun-fact-content">
              <div className="fun-fact-header">
                <h4>DID YOU KNOW?</h4>
                <button className="next-fact-btn" onClick={nextFact}>
                  NEXT →
                </button>
              </div>
              <p className="fun-fact-text">
                {funFacts[currentFactIndex]}
              </p>
              <div className="fact-indicator">
                {funFacts.map((_, index) => (
                  <span 
                    key={index} 
                    className={`fact-dot ${index === currentFactIndex ? 'active' : ''}`}
                    onClick={() => setCurrentFactIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Interactive Background Elements */}
        <div className="about-particles">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="about-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                opacity: 0.1 + Math.random() * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 