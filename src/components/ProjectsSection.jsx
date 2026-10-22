import { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import { Arrow } from './Navbar';

export default function ProjectsSection({ onSelectProject, inspectMode }) {
  const [filter, setFilter] = useState('All work');

  const filteredProjects = filter === 'All work' 
    ? projectsList 
    : projectsList.filter(p => p.filterType === filter);

  return (
    <section id="work" className="work section-pad">
      {inspectMode && (
        <div className="spec-badge">
          spec: projects-grid · 2-col auto-responsive · card-gap: 36px
        </div>
      )}

      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot"></span> Selected work</p>
          <h2>Ideas, made <em>tangible</em><br/>&amp; testable.</h2>
        </div>
        <p className="section-subtitle">
          Every project is an opportunity to eliminate ambiguity, organize complex data, and craft experiences that feel effortless for users and maintainable for developers.
        </p>
      </div>

      <div className="filters-bar">
        {['All work', 'Product design', 'Web experience'].map(item => (
          <button 
            key={item} 
            onClick={() => setFilter(item)} 
            className={`filter-btn ${filter === item ? 'active' : ''}`}
          >
            {item}
            <span className="filter-count">
              {item === 'All work' ? projectsList.length : projectsList.filter(p => p.filterType === item).length}
            </span>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, i) => (
          <article 
            className={`project-card ${project.accent}`} 
            key={project.id}
            onClick={() => onSelectProject(project)}
          >
            {inspectMode && (
              <div className="card-spec-tag">
                frame: {project.id} · radius: 12px · flex-col
              </div>
            )}

            {/* Visual Canvas Area */}
            <div className={`project-visual ${project.visual}`}>
              <div className="visual-overlay-action">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visual-live-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="live-dot-pulse"></span>
                    <span>Visit Live Site</span>
                    <Arrow />
                  </a>
                )}
                <button 
                  type="button" 
                  className="visual-pill"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                >
                  ✦ View Case Study
                </button>
              </div>

              {project.visual === 'analytics' && (
                <div className="analytics-preview">
                  <div className="mini-sidebar">
                    <b>◫</b>
                    <i></i><i></i><i></i>
                  </div>
                  <div className="chart-content">
                    <small>Good morning, Prince • Multi-Agent Control</small>
                    <div className="stat-row">
                      <b>₹84,263</b>
                      <span className="stat-badge">+12.5%</span>
                    </div>
                    <div className="bars">
                      <i style={{ height: '42%' }}></i>
                      <i style={{ height: '68%' }}></i>
                      <i style={{ height: '55%' }}></i>
                      <i style={{ height: '84%' }}></i>
                      <i style={{ height: '62%' }}></i>
                      <i style={{ height: '96%' }}></i>
                      <i style={{ height: '78%' }}></i>
                    </div>
                  </div>
                  <div className="chat-bubble">
                    <span>✦ Agent active: "Sales projection model reached 92% confidence."</span>
                  </div>
                </div>
              )}

              {project.visual === 'portfolio' && (
                <div className="browser-preview">
                  <div className="browser-mockup">
                    <div className="browser-topbar">
                      <div className="dots">● ● ●</div>
                      <a 
                        href="https://narrative-ui-ux-design-website.vercel.app/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="browser-url-link"
                        onClick={(e) => e.stopPropagation()}
                        title="Click to visit live website"
                      >
                        narrative-ui-ux-design-website.vercel.app ↗
                      </a>
                    </div>
                    <div className="browser-hero-text">
                      <b>Designing stories<br />that <em>stick.</em></b>
                    </div>
                    <div className="browser-card one">
                      <span>01 IA</span>
                    </div>
                    <div className="browser-card two">
                      <span>02 UX</span>
                    </div>
                    <div className="browser-card three">
                      <span>8 Work Categories</span>
                    </div>
                  </div>
                </div>
              )}

              {project.visual === 'forecast' && (
                <div className="forecast-preview">
                  <div className="forecast-title">
                    INVENTORY<br /><em>INTELLIGENCE</em>
                  </div>
                  <div className="line-chart">
                    <svg viewBox="0 0 340 120" preserveAspectRatio="none">
                      <path 
                        d="M0 90 C40 58, 64 85, 96 62 S140 50, 164 70 S215 23, 246 45 S292 16, 340 28" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <circle cx="246" cy="45" r="5" fill="currentColor" />
                      <circle cx="340" cy="28" r="5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="forecast-pill">
                    <span>Forecast Confidence</span>
                    <b>92% High</b>
                  </div>
                </div>
              )}
            </div>

            {/* Project Information */}
            <div className="project-info">
              <div>
                <div className="project-meta-line">
                  <span className="project-index">{project.num}</span>
                  <span className="project-type-tag">{project.type}</span>
                </div>
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-subtitle-line">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>
              </div>

              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="round-link-btn has-live" 
                  aria-label={`Open live project for ${project.title}`}
                  title="Click to redirect to live project"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Arrow />
                </a>
              ) : (
                <button 
                  type="button"
                  className="round-link-btn" 
                  aria-label={`Open case study for ${project.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                >
                  <Arrow />
                </button>
              )}
            </div>

            <div className="card-footer-strip">
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
              <div className="card-actions-group">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-redirect-btn"
                    onClick={(e) => e.stopPropagation()}
                    title={`Open ${project.title} live on Vercel`}
                  >
                    <span className="live-dot-pulse"></span>
                    <span>Live Project</span>
                    <Arrow />
                  </a>
                )}
                <button 
                  className="read-casestudy-text"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                >
                  <span>Case Study</span>
                  <span className="arrow-small">↗</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
