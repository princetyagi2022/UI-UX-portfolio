export default function Marquee() {
  const items = [
    "USER-CENTERED DESIGN",
    "FIGMA AUTO LAYOUT & VARIANTS",
    "8.7 CGPA MCA DISTINCTION",
    "DESIGN SYSTEMS & TOKENS",
    "REACT & CODE-LITERATE HANDOFF",
    "INFORMATION ARCHITECTURE",
    "USABILITY TESTING & HEURISTICS",
    "WCAG 2.1 AA ACCESSIBILITY",
    "HIGH-FIDELITY PROTOTYPING",
    "SPRING BOOT & REST APIS"
  ];

  return (
    <section className="marquee-strip" aria-label="Key competencies marquee">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((item, idx) => (
            <span key={`m1-${idx}`} className="marquee-item">
              {item} <strong className="marquee-sparkle">✦</strong>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`m2-${idx}`} className="marquee-item">
              {item} <strong className="marquee-sparkle">✦</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
