import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineCode, 
  AiOutlineBarChart, 
  AiOutlineMail 
} from 'react-icons/ai';
import './App.css';

function AppContent() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollCount, setScrollCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize the pages array to prevent unnecessary re-renders
  const pages = useMemo(() => ['/', '/about', '/projects', '/skills', '/contact'], []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let scrollThreshold = 3; // Reduced threshold for better responsiveness

    const handleScroll = (e: WheelEvent) => {
      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 'down' : 'up';
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Only count scrolls in the same direction
      if (direction === scrollDirection) {
        setScrollCount(prev => prev + 1);
      } else {
        setScrollDirection(direction);
        setScrollCount(1);
      }

      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to reset scroll count if no more scrolling
      scrollTimeout = setTimeout(() => {
        setScrollCount(0);
        setScrollDirection(null);
      }, 1500);

      // Check if user is at the bottom (for down scroll) or top (for up scroll)
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 10;
      const isAtTop = scrollTop <= 10;

      // Navigate when scroll threshold is reached AND user is at page boundaries
      if (scrollCount >= scrollThreshold) {
        const currentIndex = pages.indexOf(location.pathname);
        let nextIndex: number;

        if (direction === 'down' && isAtBottom) {
          // Only navigate down if at bottom of page
          nextIndex = Math.min(pages.length - 1, currentIndex + 1);
        } else if (direction === 'up' && isAtTop) {
          // Only navigate up if at top of page
          nextIndex = Math.max(0, currentIndex - 1);
        } else {
          // Don't navigate, just reset count
          setScrollCount(0);
          return;
        }

        if (nextIndex !== currentIndex) {
          setIsTransitioning(true);
          navigate(pages[nextIndex]);
          
          // Reset scroll count
          setScrollCount(0);
          setScrollDirection(null);
          
          setTimeout(() => setIsTransitioning(false), 800);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isTransitioning, location.pathname, navigate, pages, scrollDirection, scrollCount]);

  return (
    <div className="app">
      {/* Cool Animated Background */}
      <div className="background-grid">
        {/* Matrix Digital Rain Effect */}
        <div className="matrix-rain">
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
          <div className="matrix-column"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <div className="shape square"></div>
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
          <div className="shape circle"></div>
        </div>
        
        {/* Animated Grid Lines */}
        <div className="grid-lines">
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AK</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">{React.createElement(AiOutlineHome as any)} HOME</Link></li>
            <li><Link to="/about" className="nav-link">{React.createElement(AiOutlineUser as any)} ABOUT</Link></li>
            <li><Link to="/projects" className="nav-link">{React.createElement(AiOutlineCode as any)} PROJECTS</Link></li>
            <li><Link to="/skills" className="nav-link">{React.createElement(AiOutlineBarChart as any)} SKILLS</Link></li>
            <li><Link to="/contact" className="nav-link">{React.createElement(AiOutlineMail as any)} CONTACT</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
