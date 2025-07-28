import React, { useState } from 'react';
import { 
  AiOutlineBook, 
  AiOutlineThunderbolt, 
  AiOutlineTrophy,
  AiOutlineRocket
} from 'react-icons/ai';

const skillsData = [
  {
    title: 'EDUCATION',
    icon: AiOutlineBook,
    content: (
      <div>
        <div className="resume-item">
          <h4>High School Diploma</h4>
          <p className="resume-date">2020 - 2024</p>
          <p>Currently pursuing my high school education with a strong focus on STEM subjects, particularly mathematics, computer science, and physics. Maintaining excellent academic performance while actively participating in various extracurricular activities.</p>
        </div>
        
        <div className="resume-item">
          <h4>STEM & Math Involvement</h4>
          <p className="resume-date">Active participation</p>
          <p>Engaged in various STEM activities and mathematical competitions, fostering analytical thinking and problem-solving abilities.</p>
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
    title: 'TECHNICAL SKILLS',
    icon: AiOutlineThunderbolt,
    content: (
      <div>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <div className="skill-items">
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React.js</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">Responsive Design</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Backend Development</h4>
            <div className="skill-items">
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Express.js</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">RESTful APIs</span>
              <span className="skill-item">Database Design</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>AI & Machine Learning</h4>
            <div className="skill-items">
              <span className="skill-item">TensorFlow</span>
              <span className="skill-item">Keras</span>
              <span className="skill-item">Neural Networks</span>
              <span className="skill-item">Deep Learning</span>
              <span className="skill-item">Natural Language Processing</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <div className="skill-items">
              <span className="skill-item">Git & GitHub</span>
              <span className="skill-item">VS Code</span>
              <span className="skill-item">Postman</span>
              <span className="skill-item">Figma</span>
              <span className="skill-item">Docker</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'EXPERIENCES',
    icon: AiOutlineTrophy,
    content: (
      <div>
        <div className="resume-item">
          <h4>Full-Stack Developer</h4>
          <p className="resume-date">2023 - Present</p>
          <p>Developed multiple web applications using modern technologies. Created responsive, user-friendly interfaces and robust backend systems. Collaborated with teams to deliver high-quality software solutions.</p>
        </div>
        
        <div className="resume-item">
          <h4>AI/ML Project Developer</h4>
          <p className="resume-date">2023 - Present</p>
          <p>Built several AI-powered applications including stock prediction models, health chatbots, and image classification systems. Implemented machine learning algorithms and neural networks for real-world problem solving.</p>
        </div>
        
        <div className="resume-item">
          <h4>Content Creator & Technical Writer</h4>
          <p className="resume-date">2023 - Present</p>
          <p>Authored technical blog posts and documentation on emerging technologies. Created educational content on quantum computing, AI, and machine learning topics. Demonstrated ability to explain complex concepts clearly.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'PROJECTS',
    icon: AiOutlineRocket,
    content: (
      <div>
        <div className="project-item">
          <h4>High School Tech Club Website</h4>
          <p className="project-tech-stack">HTML5, CSS3, JavaScript, Responsive Design, Leadership</p>
          <p className="project-date">September 2023 - June 2024</p>
          <p>Founded and led a technology club at my high school, designing and developing a comprehensive website that serves as the club's digital hub. Features include member registration, event management, project showcases, and a blog section. The website helped increase club membership by 300% and facilitated better communication between members. This project demonstrates early leadership skills and web development capabilities.</p>
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
    <div className="skills-page page-container">
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
              <span className="section-icon"><section.icon /></span>
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