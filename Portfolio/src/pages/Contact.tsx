import React, { useState } from 'react';

const Contact: React.FC = () => {
  const email = 'aniket.kumar@email.com';
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactInfo = [
    {
      title: 'EMAIL',
      icon: '✉️',
      content: email,
      action: 'COPY',
      onClick: handleCopy,
      isEmail: true
    },
    {
      title: 'LINKEDIN',
      icon: '💼',
      content: 'linkedin.com/in/aniketkumar',
      action: 'VISIT',
      link: 'https://linkedin.com/in/aniketkumar',
      isLink: true
    },
    {
      title: 'GITHUB',
      icon: '🐙',
      content: 'github.com/aniketkumar',
      action: 'VISIT',
      link: 'https://github.com/aniketkumar',
      isLink: true
    },
    {
      title: 'AVAILABILITY',
      icon: '✅',
      content: 'Open to new opportunities and collaborations',
      action: 'STATUS',
      isStatus: true
    }
  ];

  return (
    <div className="contact-page">
      <h1 className="page-title">CONTACT</h1>
      
      <div className="contact-intro">
        <p>Ready to collaborate on something amazing? Let's connect and bring your ideas to life.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-card interactive-element">
          <h3>GET IN TOUCH</h3>
          <p>I'm always excited to work on new projects, discuss opportunities, or just have a great conversation about technology and innovation.</p>
        </div>

        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <div key={item.title} className="contact-item interactive-element">
              <div className="contact-item-header">
                <span className="contact-icon">{item.icon}</span>
                <h4>{item.title}</h4>
              </div>
              
              <div className="contact-item-content">
                {item.isEmail ? (
                  <div className="email-container">
                    <a href={`mailto:${item.content}`} className="email-link">{item.content}</a>
                    <button 
                      className={`copy-btn ${copied ? 'copied' : ''}`} 
                      onClick={item.onClick}
                    >
                      {copied ? 'COPIED!' : item.action}
                    </button>
                  </div>
                ) : item.isLink ? (
                  <div className="link-container">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {item.content}
                    </a>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="visit-btn"
                    >
                      {item.action} →
                    </a>
                  </div>
                ) : (
                  <div className="status-container">
                    <p className="status-text">{item.content}</p>
                    <span className="status-indicator">Available</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-footer">
          <div className="contact-message">
            <h4>Let's Work Together</h4>
            <p>Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you!</p>
          </div>
          
          <div className="contact-cta">
            <a href={`mailto:${email}`} className="cta-button">
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 