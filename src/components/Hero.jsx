import { personalInfo } from '../data/portfolioData';
import { Arrow } from './Navbar';

export default function Hero({ jumpTo, inspectMode }) {
  return (
    <section id="home" className="hero section-pad">
      {inspectMode && (
        <div className="spec-badge hero-spec-badge">
          spec: section-pad · 12-col grid · 8pt baseline
        </div>
      )}

      <div className="hero-copy">
        <div className="status-pill">
          <span className="pulsing-dot"></span>
          <span className="status-text">{personalInfo.status}</span>
        </div>

        <h1 className="hero-title">
          Digital experiences<br />
          with a <em>human</em> pulse &amp;<br />
          <span className="hero-accent-text">engineering rigor.</span>
        </h1>

        <p className="hero-lead">
          I’m <strong>Prince Tyagi</strong> — a UI/UX Designer and Junior Product Designer with hands-on Figma expertise in wireframing, prototyping, design systems, and user research. Powered by an <strong>MCA full-stack engineering background</strong>, I bridge the gap between human empathy and seamless design-to-code execution.
        </p>

        <div className="hero-meta-strip">
          <div className="meta-tag">
            <span className="meta-label">Location</span>
            <span className="meta-val">Uttar Pradesh, India</span>
          </div>
          <div className="meta-divider">/</div>
          <div className="meta-tag">
            <span className="meta-label">Education</span>
            <span className="meta-val">MCA · 8.7 CGPA Distinction</span>
          </div>
          <div className="meta-divider">/</div>
          <div className="meta-tag">
            <span className="meta-label">Core Focus</span>
            <span className="meta-val">Figma · Research · React Handoff</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="button primary-btn" onClick={() => jumpTo('work')}>
            <span>Explore Selected Work</span>
            <Arrow />
          </button>
          <button className="button secondary-btn" onClick={() => jumpTo('skills')}>
            <span>View Skills &amp; Stack</span>
            <span className="down-arrow">↓</span>
          </button>
          <a 
            className="button outline-btn" 
            href={personalInfo.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Resume PDF</span>
            <Arrow />
          </a>
        </div>

        <div className="hero-social-strip">
          <span className="social-label">Profiles:</span>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-social-link"
            title="Prince Tyagi on LinkedIn"
          >
            <span className="social-icon">in</span>
            <span>LinkedIn</span>
            <span className="arrow-tiny">↗</span>
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-social-link"
            title="Prince Tyagi on GitHub"
          >
            <span className="social-icon">gh</span>
            <span>GitHub</span>
            <span className="arrow-tiny">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-art-wrapper">
        <div className="hero-art" aria-label="Portrait and designer showcase of Prince Tyagi">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="hero-grid-pattern"></div>
          <p className="vertical-label">UI / UX · PRODUCT DESIGN · DESIGN SYSTEMS</p>
          
          <img 
            src="/assets/prince-portrait.png" 
            alt="Prince Tyagi — UI/UX Designer" 
            className="portrait-img"
            loading="eager"
          />

          {/* Floating Figma Cursor Card */}
          <div className="figma-cursor-pill">
            <svg className="cursor-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L6 14.5L8.5 8.5L14.5 6L0 0Z" fill="#7775f3" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div className="cursor-tag">
              <span className="cursor-name">Prince (UI/UX)</span>
              <span className="cursor-action">Auto-Layout: On</span>
            </div>
          </div>

          {/* <div className="proof-card">
            <span className="proof-star">✦</span>
            <div>
              <p className="proof-title">Designing with</p>
              <p className="proof-sub"><strong>Clarity, Curiosity &amp; Code Feasibility</strong></p>
              <div className="proof-pills">
                <span>MCA Distinction</span>
                <span>Figma Tokens</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="scroll-cue" onClick={() => jumpTo('work')}>
        <span className="scroll-text">Scroll to explore</span>
        <span className="scroll-line"></span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
