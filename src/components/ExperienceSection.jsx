import { experienceList, certificationsList } from '../data/portfolioData';

export default function ExperienceSection({ inspectMode }) {
  return (
    <section id="experience" className="experience-section section-pad">
      {inspectMode && (
        <div className="spec-badge">
          spec: experience-timeline · certifications-matrix · responsive-columns
        </div>
      )}

      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot"></span> Experience &amp; Certifications</p>
          <h2>Applied work,<br /><em>validated</em> through execution.</h2>
        </div>
        <p className="section-subtitle">
          Hands-on software development and verified certifications that demonstrate continuous curiosity, rigorous discipline, and practical interface problem-solving.
        </p>
      </div>

      <div className="experience-layout-grid">
        {/* Left Column: Work Experience */}
        <div className="experience-col">
          <div className="col-subheading">
            <span className="col-num">01</span>
            <h3>Professional Experience &amp; Internship</h3>
          </div>

          <div className="timeline-items">
            {experienceList.map((exp) => (
              <div key={exp.id} className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="exp-badge">{exp.badge}</span>
                    <h4 className="exp-role">{exp.role}</h4>
                    <p className="exp-company">
                      <strong>{exp.company}</strong> · <span>{exp.location}</span>
                    </p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-deliverables">
                  <h5 className="deliverables-title">Key Contributions &amp; Interface Ergonomics</h5>
                  <ul>
                    {exp.keyDeliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="ux-takeaway-box">
                  <span className="takeaway-badge">💡 UI/UX Relevance</span>
                  <p className="takeaway-text">{exp.uxTakeaway}</p>
                </div>

                <div className="exp-tech-tags">
                  {exp.techStack.map(tech => (
                    <span key={tech} className="exp-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Industry Certifications */}
        <div className="certifications-col">
          <div className="col-subheading">
            <span className="col-num">02</span>
            <h3>Verified Certifications</h3>
          </div>

          <div className="cert-cards-list">
            {certificationsList.map((cert) => (
              <div key={cert.id} className={`cert-card accent-${cert.accent}`}>
                <div className="cert-card-top">
                  <span className="cert-icon">{cert.icon}</span>
                  <span className="cert-year-badge">{cert.year}</span>
                </div>

                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">Issued by <strong>{cert.issuer}</strong></p>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-tag-row">
                  <span className="cert-domain-tag">{cert.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
