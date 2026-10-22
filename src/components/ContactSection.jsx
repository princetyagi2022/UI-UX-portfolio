import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Arrow } from './Navbar';

export default function ContactSection({ inspectMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      {inspectMode && (
        <div className="spec-badge contact-spec-badge">
          spec: contact-sheet · orange-bg · clamp(52px, 7vw, 100px)
        </div>
      )}

      <div className="contact-inner section-pad">
        <p className="eyebrow"><span className="eyebrow-dot"></span> Start a conversation</p>
        
        <h2 className="contact-heading">
          Have an idea<br />
          or role worth <em>making?</em>
        </h2>

        <p className="contact-lead">
          Currently seeking an entry-level UI/UX Designer or Junior Product Designer role. Whether you want to discuss full-time positions, design systems, or review Figma case studies, my inbox is always open.
        </p>

        <div className="contact-cta-cluster">
          <a href={`mailto:${personalInfo.email}`} className="email-link">
            <span>{personalInfo.email}</span>
            <Arrow />
          </a>

          <div className="contact-quick-buttons">
            <button 
              type="button" 
              className={`copy-email-btn ${copied ? 'is-copied' : ''}`}
              onClick={handleCopyEmail}
            >
              <span>{copied ? '✓ Email Copied to Clipboard!' : '📋 Copy Email Address'}</span>
            </button>

            <a href={`tel:${personalInfo.phone}`} className="phone-btn">
              <span>📞 {personalInfo.phone}</span>
            </a>
          </div>
        </div>

        {copied && (
          <div className="copy-toast">
            <span>✓ Email address copied to clipboard!</span>
          </div>
        )}

        <div className="contact-bottom">
          <div className="contact-meta">
            <p>
              <strong>Based in Uttar Pradesh, India</strong><br />
              Open to relocation, on-site, hybrid, and remote opportunities worldwide.
            </p>
          </div>

          <div className="contact-social-links">
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">Resume PDF ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
