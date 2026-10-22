import { educationList, hybridAdvantage } from '../data/portfolioData';

export default function EducationSection({ inspectMode }) {
  return (
    <section id="education" className="education-section section-pad">
      {inspectMode && (
        <div className="spec-badge">
          spec: education-container · 2-col cards + hybrid-advantage spotlight banner
        </div>
      )}

      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot"></span> Academic Background</p>
          <h2>Formal education,<br /><em>engineered</em> for digital craft.</h2>
        </div>
        <p className="section-subtitle">
          A rigorous academic foundation in computer science and human-computer systems that grounds visual creativity in technical feasibility and engineering empathy.
        </p>
      </div>

      {/* Degrees Grid */}
      <div className="education-grid">
        {educationList.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="edu-card-top">
              <span className="edu-period-badge">{edu.period}</span>
              <span className="edu-status-pill">{edu.statusBadge}</span>
            </div>

            <div className="edu-main-info">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">
                <strong>{edu.institution}</strong> · <span>{edu.location}</span>
              </p>
            </div>

            <div className="edu-score-highlight">
              <div className="score-val">{edu.grade}</div>
              <div className="score-badge">✦ {edu.badge}</div>
            </div>

            <p className="edu-summary-text">{edu.summary}</p>

            <div className="edu-highlights-list">
              <h4 className="edu-list-title">Academic &amp; Project Highlights</h4>
              <ul>
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="edu-coursework-tags">
              <span className="coursework-label">Key Subjects:</span>
              <div className="course-pills">
                {edu.skills.map(s => (
                  <span key={s} className="course-pill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Hybrid Advantage Spotlight */}
      <div className="hybrid-advantage-banner">
        <div className="hybrid-banner-header">
          <div className="hybrid-icon-tag">✦ The Dual-Perspective Edge</div>
          <h3 className="hybrid-title">{hybridAdvantage.title}</h3>
          <p className="hybrid-desc">{hybridAdvantage.description}</p>
        </div>

        <div className="hybrid-pillars-grid">
          {hybridAdvantage.pillars.map((pillar, idx) => (
            <div key={idx} className="hybrid-pillar-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
