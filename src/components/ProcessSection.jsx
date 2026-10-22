import { designPrinciples } from '../data/portfolioData';

export default function ProcessSection({ inspectMode }) {
  return (
    <section id="process" className="about section-pad">
      {inspectMode && (
        <div className="spec-badge dark-spec-badge">
          spec: process-methodology · 4-stage iterative pipeline
        </div>
      )}

      <div className="about-number">01 / METHOD</div>
      
      <div className="about-content">
        <p className="eyebrow"><span className="eyebrow-dot"></span> Design Process &amp; Mindset</p>
        
        <h2>A blend of <em>empathy,</em><br />logic and craft.</h2>
        
        <p className="large-copy">
          I believe good design earns attention quietly. My process starts with understanding human motivations and ends with experiences that feel obvious, effortless, and structurally sound in production code.
        </p>

        <div className="principles-grid">
          {designPrinciples.map((p) => (
            <div key={p.step} className="principle-card">
              <span className="principle-step">{p.step}</span>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-desc">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="process-quote-box">
          <span className="quote-sparkle">✦</span>
          <p className="quote-text">
            "Design isn't just how it looks and feels. Design is how it works — and how gracefully it communicates with the systems and people that build it."
          </p>
        </div>
      </div>
    </section>
  );
}
