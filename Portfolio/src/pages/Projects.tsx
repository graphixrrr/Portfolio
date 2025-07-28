import React, { useState } from 'react';

const projects = [
  { 
    title: 'Student PA', 
    desc: 'AI-powered assistant app for students using modern frontend and AI technologies.',
    details: 'Built with React Native, Tailwind CSS, Flask, AI, Machine Learning, Text-to-Speech. Features include smart AI assistance, modern UI, and seamless user experience.',
    tech: ['React Native', 'AI', 'Flask', 'Machine Learning', 'Tailwind CSS'],
    status: 'Live',
    link: '#'
  },
  { 
    title: 'NUUS - We Put the U in News', 
    desc: 'Clean, responsive news app with AI-powered article interactions.',
    details: 'Designed and developed using React Native, JavaScript, Flask, RAG, Tailwind CSS. Features personalized news based on user interests and AI-generated answers.',
    tech: ['React Native', 'JavaScript', 'Flask', 'RAG', 'Tailwind CSS'],
    status: 'Live',
    link: '#'
  },
  { 
    title: 'ANNIE AI - Stock Predictor', 
    desc: 'Keras-based neural network for stock price prediction with news integration.',
    details: 'Developed a Keras-based neural network to predict next-day stock prices using historical market data. Built stock news section that summarizes key news and links related articles.',
    tech: ['Keras', 'Deep Learning', 'Financial APIs', 'News Integration', 'Python'],
    status: 'Live',
    link: '#'
  },
  { 
    title: 'AniketBot - AI Symptom Helper', 
    desc: 'AI chatbot providing multi-option symptom relief suggestions.',
    details: 'Created an AI chatbot that provides multi-option symptom relief suggestions based on user input. Covers home remedies, over-the-counter solutions, and lifestyle adjustments.',
    tech: ['AI', 'Natural Language Processing', 'Health Tools', 'Python'],
    status: 'Live',
    link: '#'
  },
  { 
    title: 'Portfolio Website', 
    desc: 'Modern, responsive portfolio website with stunning black and white design.',
    details: 'Built with React, TypeScript, and modern CSS. Features interactive animations, smooth transitions, and a minimalist design that showcases creativity and technical skills.',
    tech: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
    status: 'Live',
    link: '#'
  },
  { 
    title: 'E-Commerce Platform', 
    desc: 'Full-stack e-commerce solution with modern UI and secure payment integration.',
    details: 'Developed a complete e-commerce platform with user authentication, product management, shopping cart, and secure payment processing using Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    status: 'In Development',
    link: '#'
  }
];

const Projects: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="projects-page">
      <h1 className="page-title">PROJECTS</h1>
      
      <div className="projects-intro">
        <p>Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI integration, and modern web technologies.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`project-card interactive-element ${openIndex === idx ? 'expanded' : ''} ${hoveredIndex === idx ? 'hovered' : ''}`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
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
              <span className="expand-icon">{openIndex === idx ? '−' : '+'}</span>
            </div>
            
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {openIndex === idx && (
              <div className="project-details">
                <p>{project.details}</p>
                <div className="project-actions">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    VIEW PROJECT →
                  </a>
                </div>
              </div>
            )}
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