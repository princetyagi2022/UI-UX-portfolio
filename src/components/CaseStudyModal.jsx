import { useEffect } from 'react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const { title, subtitle, type, accent, tags, caseStudy } = project;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className={`modal-header ${accent}`}>
          <div className="modal-header-meta">
            <span className="modal-badge">{type}</span>
            <span className="modal-timeline">{caseStudy?.timeline || 'Featured Project'}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close case study">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <p className="modal-eyebrow">Case Study Breakdown</p>
              <h2 className="modal-title">{title}</h2>
              <p className="modal-subtitle">{subtitle}</p>
            </div>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button modal-live-btn"
                title={`Open ${title} live website`}
              >
                <span className="live-dot-pulse"></span>
                <span>Open Live Project</span>
                <span className="arrow-icon">↗</span>
              </a>
            )}
          </div>

          {/* Key Impact Metrics */}
          {caseStudy?.metrics && (
            <div className="modal-metrics-grid">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="metric-box">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="modal-dual-columns">
            <div className="modal-section-card problem-card">
              <div className="section-tag problem-tag">The Problem &amp; Friction</div>
              <p>{caseStudy?.problem}</p>
            </div>

            <div className="modal-section-card solution-card">
              <div className="section-tag solution-tag">The Design Solution</div>
              <p>{caseStudy?.solution}</p>
            </div>
          </div>

          {/* 4-Phase Design Process */}
          {caseStudy?.process && (
            <div className="modal-process-section">
              <h3 className="section-subheading">Design Process &amp; Iteration</h3>
              <div className="modal-process-steps">
                {caseStudy.process.map((step, idx) => (
                  <div key={idx} className="process-step-item">
                    <div className="process-step-header">
                      <span className="step-num-pill">{step.phase}</span>
                    </div>
                    <p className="step-detail-text">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables & Tool Stack */}
          <div className="modal-deliverables-row">
            <div>
              <h4 className="deliverables-heading">Core Deliverables</h4>
              <div className="deliverable-chips">
                {caseStudy?.deliverables?.map((item, idx) => (
                  <span key={idx} className="deliverable-chip">✦ {item}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="deliverables-heading">Stack &amp; Methods</h4>
              <div className="deliverable-chips">
                {tags.map((tag) => (
                  <span key={tag} className="tech-chip">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="modal-footer-cta">
            <div>
              <h4>Experience the Live Interface</h4>
              <p>Explore the live application deployment or discuss the underlying Figma design systems.</p>
            </div>
            <div className="modal-footer-actions">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary-btn"
                >
                  <span className="live-dot-pulse"></span>
                  <span>Visit Live Project on Vercel ↗</span>
                </a>
              )}
              <a 
                href="mailto:princetyagi9997@gmail.com?subject=Regarding%20Case%20Study%20Discussion"
                className="button outline-btn"
              >
                Request Figma Specs ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
