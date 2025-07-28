import React, { useState } from 'react';

const skillsData = [
  {
    title: 'EDUCATION',
    icon: '🎓',
    content: (
      <div>
        <div className="resume-item">
          <h4>Ardrey Kell High School, Charlotte, North Carolina</h4>
          <p className="resume-date">Expected Graduation: May 2028</p>
          <p>Currently pursuing advanced studies in Computer Science and Mathematics, including college-level coursework.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TECHNICAL SKILLS',
    icon: '⚡',
    content: (
      <div>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Swift</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">Mediapipe</span>
              <span className="skill-tag">Expo</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Platforms & Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">OpenAI</span>
              <span className="skill-tag">OAuth2</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Concepts</h4>
            <div className="skill-tags">
              <span className="skill-tag">Front-end Development</span>
              <span className="skill-tag">Artificial Intelligence</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">Agentic Frameworks</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'EXPERIENCES',
    icon: '🏆',
    content: (
      <div>
        <div className="resume-item">
          <h4>Top 10 State Finalist – Introduction to Programming, FBLA North Carolina 2025</h4>
          <p className="resume-date">FBLA State Leadership Conference</p>
          <p>Placed in the top 10 statewide for programming and problem-solving skills, demonstrating exceptional technical aptitude.</p>
        </div>
        
        <div className="resume-item">
          <h4>Odyssey of the Mind – National Top 25 Finalist</h4>
          <p className="resume-date">Second place in regionals</p>
          <p>Developed teamwork, creativity, and leadership by solving interdisciplinary challenges in a competitive environment.</p>
        </div>
        
        <div className="resume-item">
          <h4>First place in the State Debate Team – JV (Varsity Next Year)</h4>
          <p className="resume-date">State Championship</p>
          <p>Strengthened public speaking and communication skills through competitive debate.</p>
        </div>
        
        <div className="resume-item">
          <h4>STEM & Math Involvement</h4>
          <p className="resume-date">Active participation</p>
          <p>Active in Science Olympiad and Math Club. Taking a college-level math course as a freshman.</p>
        </div>
        
        <div className="resume-item">
          <h4>Current Internships</h4>
          <div className="internship-list">
            <div className="internship-item">
              <span className="internship-company">Young Scholars</span>
              <span className="internship-duration">Jan 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">GlobalSVF</span>
              <span className="internship-duration">June 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">BetterMindLabs</span>
              <span className="internship-duration">June 2025 - Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">BYCIG (Frontend/Backend)</span>
              <span className="internship-duration">June 2025-Present</span>
            </div>
          </div>
        </div>
        
        <div className="resume-item">
          <h4>Content Creator & Research Writer</h4>
          <p>Wrote multiple technical blogs, including one on Microsoft's Quantum Computing Chip, and Detecting and Preventing Adversarial Attacks Against Image Classification Models.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'PROJECTS',
    icon: '🚀',
    content: (
      <div>
        <div className="project-item">
          <h4>Student PA</h4>
          <p className="project-tech-stack">React Native, Tailwind CSS, Flask, AI, Machine Learning, Text-to-Speech</p>
          <p className="project-date">August 2024</p>
          <p>Built a smart AI-powered assistant app for students using modern frontend and AI technologies.</p>
        </div>
        
        <div className="project-item">
          <h4>NUUS – We Put the 'U' in News</h4>
          <p className="project-tech-stack">React Native, JavaScript, Flask, RAG, Tailwind CSS</p>
          <p className="project-date">January 2025</p>
          <p>Designed and developed a clean, responsive UI using React Native and Tailwind. Integrated AI for article-based interactions using Retrieval-Augmented Generation (RAG). Features include personalized news based on user-selected interests and AI-generated answers to article questions.</p>
        </div>
        
        <div className="project-item">
          <h4>ANNIE AI – Stock Predictor and News Tracker</h4>
          <p className="project-tech-stack">Keras, Deep Learning, Financial APIs, News Integration</p>
          <p>Developed a Keras-based neural network to predict next-day stock prices using historical market data. Built a stock news section that summarizes key news and links related articles for each stock. Helps users stay informed with both technical insights and contextual news.</p>
        </div>
        
        <div className="project-item">
          <h4>AniketBot – AI Symptom Helper for Health Support</h4>
          <p className="project-tech-stack">AI, Natural Language Processing, Health Tools</p>
          <p>Created an AI chatbot that provides multi-option symptom relief suggestions based on user input. Covers home remedies, over-the-counter solutions, and lifestyle adjustments. Designed for quick, informative responses in a simple and user-friendly interface.</p>
        </div>
      </div>
    ),
  }
];

const Skills: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="skills-page">
      <h1 className="page-title">MY SKILLS & RESUME</h1>
      
      <div className="skills-intro">
        <p>A comprehensive overview of my technical skills, experiences, and achievements in the world of technology and innovation.</p>
      </div>
      
      <div className="skills-resume-list">
        {skillsData.map((section, idx) => (
          <div key={section.title} className="resume-section">
            <button 
              className="resume-section-btn interactive-element"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className="section-icon">{section.icon}</span>
              <span className="section-title">{section.title}</span>
              <span className="section-arrow">{open === idx ? '▲' : '▼'}</span>
            </button>
            {open === idx && (
              <div className="resume-section-content">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 