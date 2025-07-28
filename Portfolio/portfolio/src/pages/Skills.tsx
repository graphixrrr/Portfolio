import React, { useState } from 'react';

const skillsData = [
  {
    title: 'EDUCATION',
    content: (
      <div>
        <div className="resume-item">
          <h4>Ardrey Kell High School</h4>
          <p className="resume-date">2024 - 2028</p>
          <p>Currently pursuing my high school education with a strong focus on STEM subjects, particularly mathematics, computer science, and physics. Maintaining excellent academic performance while actively participating in various extracurricular activities and internships.</p>
        </div>
        
        <div className="resume-item">
          <h4>STEM & Math Involvement</h4>
          <p className="resume-date">Active participation</p>
          <p>Engaged in various STEM activities and mathematical competitions, fostering analytical thinking and problem-solving abilities. Participating in coding competitions and hackathons to enhance technical skills.</p>
        </div>
        
        <div className="resume-item">
          <h4>Current Internships</h4>
          <div className="internship-list">
            <div className="internship-item">
              <span className="internship-company">Cactus (YC S25) - Mobile App Developer</span>
              <span className="internship-duration">July 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">Ember Learning - Software Engineer Intern</span>
              <span className="internship-duration">July 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">MathVoyagers - Software Engineer/Researcher</span>
              <span className="internship-duration">July 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">BYCIG - Fullstack Engineer Intern</span>
              <span className="internship-duration">July 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">BetterMindLabs - AI Internship</span>
              <span className="internship-duration">June 2025 - July 2025</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">Young Scholars</span>
              <span className="internship-duration">Jan 2025 – Present</span>
            </div>
            <div className="internship-item">
              <span className="internship-company">GlobalSVF</span>
              <span className="internship-duration">June 2025 – Present</span>
            </div>
          </div>
        </div>
        
        <div className="resume-item">
          <h4>Content Creator & Research Writer</h4>
          <p>Wrote multiple technical blogs, including one on Microsoft's Quantum Computing Chip, and Detecting and Preventing Adversarial Attacks Against Image Classification Models. Contributing to the tech community through educational content.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TECHNICAL SKILLS',
    content: (
      <div>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Swift</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">React-Native</span>
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Backend Development</h4>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Database Design</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>AI & Machine Learning</h4>
            <div className="skill-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">Neural Networks</span>
              <span className="skill-tag">Deep Learning</span>
              <span className="skill-tag">Natural Language Processing</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">Mediapipe</span>
              <span className="skill-tag">Agentic Frameworks</span>
              <span className="skill-tag">RAG</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">OpenAI</span>
              <span className="skill-tag">OAuth2</span>
              <span className="skill-tag">Expo</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'EXPERIENCES',
    content: (
      <div>
        <div className="resume-item">
          <h4>Mobile App Developer, Cactus (YC S25)</h4>
          <p className="resume-date">July 2025 - Present</p>
          <p>Cactus is an open-source inference engine designed to run AI models directly on mobile and edge devices, supporting frameworks like React Native and Flutter while ensuring offline-first privacy and low latency. As part of Y Combinator's Summer 2025 batch, it helps developers and small businesses build fast, cost-efficient, and private AI-powered applications without relying on cloud servers.</p>
        </div>
        
        <div className="resume-item">
          <h4>Software Engineer Intern, Ember Learning</h4>
          <p className="resume-date">July 2025 - Present</p>
          <p>Ember Learning is an education technology company that builds AI-powered teaching assistants to provide instant feedback, personalized learning paths, and automated grading. Their mission is to support educators by reducing administrative workload and enhancing student engagement through adaptive, interactive tools.</p>
        </div>
        
        <div className="resume-item">
          <h4>Software Engineer/Researcher Internship, MathVoyagers</h4>
          <p className="resume-date">July 2025 - Present</p>
          <p>MathVoyagers is an adaptive learning platform designed to help students prepare for AMC 8/10 competitions by guiding them through practice problems, explanations, and strategic feedback in a clear, structured format inspired by platforms like Khan Academy. It frames competition math in a student-friendly, gamified context to make mastering AMC-style content accessible and engaging.</p>
        </div>
        
        <div className="resume-item">
          <h4>Fullstack Engineer Internship, BYCIG</h4>
          <p className="resume-date">July 2025 - Present</p>
          <p>Working on full-stack development projects, contributing to both frontend and backend systems. Collaborating with teams to deliver high-quality software solutions and maintain code quality.</p>
        </div>
        
        <div className="resume-item">
          <h4>AI Internship, BetterMindLabs</h4>
          <p className="resume-date">June 2025 - July 2025</p>
          <p>This immersive and intensive program is designed to offer hands-on experience and deepen understanding of Artificial Intelligence and Machine Learning. Throughout the internship, enhanced technical skills and worked on real-world projects that translate theory into impactful solutions.</p>
        </div>
        
        <div className="resume-item">
          <h4>Full-Stack Developer</h4>
          <p className="resume-date">2024 - Present</p>
          <p>Developed multiple web applications using modern technologies including React, Node.js, and TypeScript. Created responsive, user-friendly interfaces and robust backend systems. Collaborated with teams to deliver high-quality software solutions and maintain code quality.</p>
        </div>
        
        <div className="resume-item">
          <h4>AI/ML Project Developer</h4>
          <p className="resume-date">2024 - Present</p>
          <p>Built several AI-powered applications including stock prediction models, health chatbots, and image classification systems. Implemented machine learning algorithms and neural networks for real-world problem solving. Working on cutting-edge AI technologies and contributing to open-source projects.</p>
        </div>
        
        <div className="resume-item">
          <h4>Content Creator & Technical Writer</h4>
          <p className="resume-date">2024 - Present</p>
          <p>Authored technical blog posts and documentation on emerging technologies. Created educational content on quantum computing, AI, and machine learning topics. Demonstrated ability to explain complex concepts clearly and engage with the developer community.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'ACCOMPLISHMENTS',
    content: (
      <div>
        <div className="resume-item">
          <h4>Top 10 State Finalist - Introduction to Programming</h4>
          <p className="resume-date">FBLA North Carolina 2025</p>
          <p>FBLA State Leadership - Placed in the top 10 statewide for programming and problem-solving skills.</p>
        </div>
        
        <div className="resume-item">
          <h4>Odyssey of the Mind - National Top 25 Finalist</h4>
          <p className="resume-date">2025</p>
          <p>Developed teamwork, creativity, and leadership by solving interdisciplinary challenges.</p>
        </div>
        
        <div className="resume-item">
          <h4>Debate Team - JV (Varsity Next Year)</h4>
          <p className="resume-date">2024 - Present</p>
          <p>Strengthened public speaking and communication skills through competitive debate.</p>
        </div>
        
        <div className="resume-item">
          <h4>STEM & Math Involvement</h4>
          <p className="resume-date">Active participation</p>
          <p>Engaged in various STEM activities and mathematical competitions, fostering analytical thinking and problem-solving abilities. Participating in coding competitions and hackathons to enhance technical skills.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'PROJECTS',
    content: (
      <div>
        <div className="project-item">
          <h4>ANNIE AI – Stock Predictor and News Tracker</h4>
          <p className="project-tech-stack">Keras, Deep Learning, Financial APIs, News Integration, Python</p>
          <p className="project-date">January 2025 - Present</p>
          <p>Developed a Keras-based neural network to predict next-day stock prices using historical market data. Built a stock news section that summarizes key news and links related articles for each stock. Helps users stay informed with both technical insights and contextual news. Currently working on improving prediction accuracy and adding more features.</p>
        </div>
        
        <div className="project-item">
          <h4>AniketBot – AI Symptom Helper for Health Support</h4>
          <p className="project-tech-stack">AI, Natural Language Processing, Health Tools, Python</p>
          <p className="project-date">March 2025 - Present</p>
          <p>Created an AI chatbot that provides multi-option symptom relief suggestions based on user input. Covers home remedies, over-the-counter solutions, and lifestyle adjustments. Designed for quick, informative responses in a simple and user-friendly interface. Planning to integrate with health APIs for more accurate recommendations.</p>
        </div>
        
        <div className="project-item">
          <h4>High School Tech Club Website</h4>
          <p className="project-tech-stack">HTML5, CSS3, JavaScript, React.js, TypeScript, Leadership</p>
          <p className="project-date">September 2024 - June 2025</p>
          <p>Founded and led a technology club at my high school, designing and developing a comprehensive website that serves as the club's digital hub. Features include member registration, event management, project showcases, and a blog section. The website helped increase club membership by 300% and facilitated better communication between members. This project demonstrates early leadership skills and web development capabilities.</p>
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