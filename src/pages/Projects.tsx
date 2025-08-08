import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  { 
    title: 'ANNIE AI - Stock Predictor', 
    desc: 'Keras-based neural network for stock price prediction with news integration.',
    details: 'Developed a Keras-based neural network to predict next-day stock prices using historical market data. Built stock news section that summarizes key news and links related articles. Watch the demo to see the AI in action!',
    tech: ['Keras', 'Deep Learning', 'Financial APIs', 'News Integration', 'Python'],
    status: 'Live',
    demoLink: 'https://www.youtube.com/watch?v=7TvxxN3E_4o'
  },
  { 
    title: 'NewsAI - Personalized News Platform', 
    desc: 'AI-powered personalized news aggregator with adaptive learning algorithms and comprehensive reading analytics.',
    details: 'Developed an intelligent news platform that learns user preferences through active algorithms based on reading patterns. Features multiple news sections (Technology, Science, Business, Politics, Sports, Entertainment) with real-time content curation. Advanced analytics track articles read, reading time, engagement metrics, and reading patterns. The AI continuously adapts recommendations based on user behavior, creating a truly personalized news experience.',
    tech: ['React', 'Node.js', 'Machine Learning', 'News APIs', 'Analytics', 'MongoDB'],
    status: 'Live',
    demoLink: 'https://www.youtube.com/watch?v=2EYHWlAq8fU'
  },
  { 
    title: 'QuizMath AI - Intelligent Math Solver', 
    desc: 'AI-powered math problem solver with step-by-step solutions and personalized learning support.',
    details: 'Created an advanced math problem solver that allows users to input any mathematical question from final exams or coursework. The AI provides detailed step-by-step solutions with explanations, helping students understand the problem-solving process. Features include a comprehensive progress tracker, personalized learning recommendations, and AI tutoring support for complex problems. Supports various math topics including algebra, calculus, geometry, and statistics.',
    tech: ['Python', 'AI/ML', 'Natural Language Processing', 'React', 'Mathematics APIs'],
    status: 'Live',
    demoLink: 'https://www.youtube.com/watch?v=NOGtOjYryqQ'
  },
  { 
    title: 'AniketBot - AI Symptom Helper', 
    desc: 'AI chatbot providing multi-option symptom relief suggestions.',
    details: 'Created an AI chatbot that provides multi-option symptom relief suggestions based on user input. Covers home remedies, over-the-counter solutions, and lifestyle adjustments. Watch the demo to see the AI chatbot in action!',
    tech: ['AI', 'Natural Language Processing', 'Health Tools', 'Python'],
    status: 'Live',
    demoLink: 'https://www.youtube.com/watch?v=9pH9489faCY'
  },
  { 
    title: 'Mark AI - Voice Assistant', 
    desc: 'Personal AI assistant with voice control: answers questions, opens websites, and supports multiple voices.',
    details: 'Built a voice-first personal assistant that listens to commands like "Hey Mark, go on Amazon" and redirects to requested sites (e.g., amazon.com). Supports general Q&A with AI, website navigation, and customizable voices using text-to-speech. Includes continuous listening, wake word detection, and command parsing for smooth hands-free browsing.',
    tech: ['React', 'Node.js', 'Speech Recognition', 'Text-to-Speech', 'OpenAI'],
    status: 'Live'
  },
  { 
    title: 'High School Tech Club Website', 
    desc: 'Professional website for my high school technology club, showcasing leadership and web development skills.',
    details: 'Founded and led a technology club at my high school, designing and developing a comprehensive website that serves as the club\'s digital hub. Features include member registration, event management, project showcases, and a blog section. The website helped increase club membership by 300% and facilitated better communication between members.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Leadership'],
    status: 'Live'
  },
  { 
    title: 'E-Commerce Platform', 
    desc: 'Full-stack e-commerce solution with modern UI and secure payment integration.',
    details: 'Developed a complete e-commerce platform with user authentication, product management, shopping cart, and secure payment processing using Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    status: 'In Development'
  }
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="projects-page page-container">
      <h1 className="page-title">PROJECTS</h1>
      
      <div className="projects-intro">
        <p>Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI integration, and modern web technologies.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`project-card interactive-element ${hoveredIndex === idx ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="project-header">
              <div className="project-title-section">
                <h3>{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-details">
              <p>{project.details}</p>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <FaArrowRight className="demo-icon" />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <p>Interested in working together? Let's create something amazing!</p>
        <a href="/contact" className="contact-link">GET IN TOUCH</a>
      </div>
    </div>
  );
};

export default Projects; 