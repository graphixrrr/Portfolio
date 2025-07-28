import React, { useState } from 'react';
import { 
  AiOutlineUser, 
  AiOutlineSetting, 
  AiOutlineHeart 
} from 'react-icons/ai';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="about-page page-container">
      <h1 className="page-title">ABOUT ME</h1>
      
      <div className="about-intro">
        <p>Get to know the person behind the code - my journey, approach, and passion for creating amazing digital experiences.</p>
      </div>
      
      <div className="about-cards">
        <div 
          className={`about-card interactive-element ${activeCard === 0 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(0)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <h3><AiOutlineUser /> WHO I AM</h3>
          <p>
            Hi! I'm Aniket Kumar, a passionate full-stack developer with a deep love for creating 
            beautiful and functional web applications. I enjoy learning new technologies, solving complex problems, 
            and turning ideas into reality through clean, efficient code.
          </p>
        </div>
        
        <div 
          className={`about-card interactive-element ${activeCard === 1 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <h3><AiOutlineSetting /> MY APPROACH</h3>
          <p>
            I believe in creating experiences that are not just functional, but also visually stunning 
            and user-friendly. Every project is an opportunity to push boundaries, innovate, and deliver 
            solutions that make a real impact.
          </p>
        </div>
        
        <div 
          className={`about-card interactive-element ${activeCard === 2 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <h3><AiOutlineHeart /> MY PASSION</h3>
          <p>
            From coding to problem-solving, I'm driven by curiosity and the desire to create something 
            meaningful. Technology is my canvas, code is my paintbrush, and innovation is my muse. 
            Every line of code is a step toward building the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 