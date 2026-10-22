import { useState } from 'react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function SkillsSection({ inspectMode }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Interactive Design Token Playground State
  const [tokenColor, setTokenColor] = useState('#7775f3');
  const [tokenRadius, setTokenRadius] = useState('12px');
  const [tokenFont, setTokenFont] = useState('sans');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const colors = [
    { name: 'Indigo Aura', hex: '#7775f3' },
    { name: 'Acid Lime', hex: '#d9fb62' },
    { name: 'Neon Coral', hex: '#ff7043' },
    { name: 'Pure Ink', hex: '#171815' }
  ];

  const radii = [
    { label: '4px', value: '4px' },
    { label: '12px', value: '12px' },
    { label: '24px', value: '24px' },
    { label: 'Pill', value: '100px' }
  ];

  const fonts = [
    { label: 'DM Sans', value: 'sans', family: "'DM Sans', sans-serif" },
    { label: 'Playfair Serif', value: 'serif', family: "'Playfair Display', serif" },
    { label: 'DM Mono', value: 'mono', family: "'DM Mono', monospace" }
  ];

  return (
    <section id="skills" className="skills-section section-pad">
      {inspectMode && (
        <div className="spec-badge">
          spec: skills-matrix · token-playground · auto-layout flex-wrap
        </div>
      )}

      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot"></span> Competencies &amp; Toolkit</p>
          <h2>Crafted across <em>design systems</em><br />&amp; production code.</h2>
        </div>
        <p className="section-subtitle">
          From ethnographic user research to Figma auto-layout tokens, down to React components and Spring Boot services — a multidisciplinary toolkit built for the entire product lifecycle.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skills-category-tabs">
        {skillCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
            <span className="skill-cat-count">
              {cat.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={idx} 
            className={`skill-card ${skill.highlight ? 'skill-featured' : ''}`}
          >
            <div className="skill-card-top">
              <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
              <span className="skill-cat-label">{skill.category.toUpperCase()}</span>
            </div>

            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.description}</p>

            <div className="skill-tags-list">
              {skill.tags.map(tag => (
                <span key={tag} className="skill-pill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive UI Token Playground */}
      <div className="token-playground-box">
        <div className="playground-header">
          <div>
            <span className="playground-eyebrow">Interactive UI/UX Feature</span>
            <h3 className="playground-title">Live Design Token Playground</h3>
            <p className="playground-sub">
              Test how design tokens propagate across components in real-time. This interactive module demonstrates the atomic token structure I apply when architecting design systems in Figma and React.
            </p>
          </div>
          <div className="token-figma-badge">
            <span>Figma Tokens ↔ CSS Variables</span>
          </div>
        </div>

        <div className="playground-body">
          {/* Controls */}
          <div className="playground-controls">
            {/* Color Tokens */}
            <div className="control-group">
              <label className="control-label">--color-accent token:</label>
              <div className="color-swatches">
                {colors.map(c => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setTokenColor(c.hex)}
                    className={`color-swatch-btn ${tokenColor === c.hex ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {tokenColor === c.hex && <span className="swatch-check">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Radius Tokens */}
            <div className="control-group">
              <label className="control-label">--radius-scale token:</label>
              <div className="radius-options">
                {radii.map(r => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setTokenRadius(r.value)}
                    className={`pill-option-btn ${tokenRadius === r.value ? 'active' : ''}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="control-group">
              <label className="control-label">--font-family token:</label>
              <div className="font-options">
                {fonts.map(f => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setTokenFont(f.value)}
                    className={`pill-option-btn ${tokenFont === f.value ? 'active' : ''}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="playground-preview">
            <div 
              className="preview-component-card"
              style={{
                borderRadius: tokenRadius,
                borderTop: `4px solid ${tokenColor}`,
                fontFamily: fonts.find(f => f.value === tokenFont)?.family
              }}
            >
              <div className="preview-card-header">
                <span 
                  className="preview-badge" 
                  style={{ 
                    backgroundColor: tokenColor,
                    color: tokenColor === '#d9fb62' ? '#171815' : '#ffffff',
                    borderRadius: tokenRadius 
                  }}
                >
                  Active Component
                </span>
                <span className="preview-version">v2.4.0 Tokens</span>
              </div>

              <h4 className="preview-title">
                {tokenFont === 'serif' ? <em>Intentional, Human Interfaces</em> : 'Intentional, Human Interfaces'}
              </h4>

              <p className="preview-text">
                Every component variant in my Figma design systems corresponds directly to tokenized props in production code, guaranteeing zero layout shifts and predictable developer implementation.
              </p>

              <div className="preview-actions">
                <button 
                  className="preview-primary-btn"
                  style={{ 
                    backgroundColor: tokenColor,
                    color: tokenColor === '#d9fb62' ? '#171815' : '#ffffff',
                    borderRadius: tokenRadius 
                  }}
                >
                  Interactive State
                </button>
                <button 
                  className="preview-ghost-btn"
                  style={{ borderRadius: tokenRadius }}
                >
                  Secondary Action
                </button>
              </div>

              <div className="preview-code-output">
                <code>
                  {`// Generated Token Output\n:root {\n  --accent: ${tokenColor};\n  --radius: ${tokenRadius};\n  --font: ${fonts.find(f => f.value === tokenFont)?.label};\n}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
