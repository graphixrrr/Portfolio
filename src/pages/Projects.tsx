import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  { 
    title: 'High School Tech Club Website', 
    desc: 'Professional website for my high school technology club, showcasing leadership and web development skills.',
    details: 'Founded and led a technology club at my high school, designing and developing a comprehensive website that serves as the club\'s digital hub. Features include member registration, event management, project showcases, and a blog section. The website helped increase club membership by 300% and facilitated better communication between members.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Leadership'],
    status: 'Live'
  },
  { 
    title: 'ANNIE AI - Stock Predictor', 
    desc: 'Keras-based neural network for stock price prediction with news integration.',
    details: 'Developed a Keras-based neural network to predict next-day stock prices using historical market data. Built stock news section that summarizes key news and links related articles. Watch the demo to see the AI in action!',
    tech: ['Keras', 'Deep Learning', 'Financial APIs', 'News Integration', 'Python'],
    status: 'Live',
    demoLink: 'https://www.youtube.com/watch?v=7TvxxN3E_4o'
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
    title: 'Portfolio Website', 
    desc: 'Modern, responsive portfolio website with stunning black and white design.',
    details: 'Built with React, TypeScript, and modern CSS. Features interactive animations, smooth transitions, and a minimalist design that showcases creativity and technical skills.',
    tech: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
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