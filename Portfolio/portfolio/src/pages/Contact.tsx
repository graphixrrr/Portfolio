import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'aniket.kumar2009@icloud.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactInfo = [
    {
      title: 'EMAIL',
      content: email,
      action: 'COPY',
      onClick: handleCopy,
      isEmail: true
    },
    {
      title: 'LINKEDIN',
      content: 'linkedin.com/in/aniketkumar',
      action: 'VISIT',
      link: 'https://linkedin.com/in/aniketkumar',
      isLink: true
    },
    {
      title: 'GITHUB',
      content: 'github.com/graphixrrr',
      action: 'VISIT',
      link: 'https://github.com/graphixrrr',
      isLink: true
    },
    {
      title: 'AVAILABILITY',
      content: 'Open to new opportunities and collaborations',
      action: 'STATUS',
      isStatus: true
    }
  ];

  return (
    <div className="contact-page page-container">
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
                ) : item.isStatus ? (
                  <div className="status-container">
                    <span className="status-text">{item.content}</span>
                    <span className="status-indicator">AVAILABLE</span>
                  </div>
                ) : (
                  <span>{item.content}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="contact-footer">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Ready to start a conversation? I'm here to help bring your vision to life.</p>
        <a href={`mailto:${email}`} className="contact-cta-btn">
          START A CONVERSATION
        </a>
      </div>
    </div>
  );
};

export default Contact; 