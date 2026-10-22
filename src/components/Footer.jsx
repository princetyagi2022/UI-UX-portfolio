export default function Footer({ jumpTo }) {
  return (
    <footer className="footer-strip">
      <div className="footer-left">
        <span className="footer-logo">PT®</span>
        <span>© 2026 Prince Tyagi · Designed with intent &amp; engineered in React.</span>
      </div>

      <div className="footer-right">
        <span>Figma Tokens · WCAG 2.1 AA Compliant</span>
        <button 
          type="button" 
          className="back-to-top-btn" 
          onClick={() => jumpTo('home')}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
