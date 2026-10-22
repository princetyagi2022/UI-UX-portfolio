import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Arrow = () => <span aria-hidden="true" className="arrow-icon">↗</span>;

export default function Navbar({ inspectMode, setInspectMode, jumpTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['home', 'work', 'skills', 'education', 'process', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    jumpTo(id);
    setMenuOpen(false);
  };

  return (
    <header className={`nav-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav section-pad">
        <button 
          className="monogram" 
          onClick={() => handleNavClick('home')} 
          aria-label="Go to Prince Tyagi home"
        >
          <span className="mono-badge">PT</span>
          <span className="mono-text">Prince Tyagi</span>
          <span className="mono-dot" title="Available for hire"></span>
        </button>

        <div className={`navlinks ${menuOpen ? 'is-open' : ''}`}>
          <button 
            className={activeSection === 'work' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('work')}
          >
            Work
          </button>
          <button 
            className={activeSection === 'skills' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'education' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'process' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('process')}
          >
            Process
          </button>
          <button 
            className={activeSection === 'experience' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </button>
          <button 
            className={activeSection === 'contact' ? 'nav-active' : ''} 
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>

        <div className="nav-actions">
          {/* Interactive Spec Mode Toggle */}
          <button
            type="button"
            className={`spec-toggle ${inspectMode ? 'spec-active' : ''}`}
            onClick={() => setInspectMode(!inspectMode)}
            title="Toggle Figma-style UI/UX Spec & Tokens Inspection Mode"
            aria-pressed={inspectMode}
          >
            <span className="spec-icon">📐</span>
            <span className="spec-text">Spec Mode</span>
            <span className="spec-indicator">{inspectMode ? 'ON' : 'OFF'}</span>
          </button>

          <a 
            className="nav-cta" 
            href={personalInfo.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            title="Open Resume PDF in new tab"
          >
            <span>Resume</span>
            <Arrow />
          </a>

          <button 
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
