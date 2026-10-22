export default function Footer({ jumpTo }) {
  return (
    <footer className="footer-strip">
      <div className="footer-left">
        <span className="footer-logo">PT®</span>
        <span>© 2026 Prince Tyagi · UI/UX Designer</span>
      </div>

      <div className="footer-center">
        <a 
          href="https://www.linkedin.com/in/prince-tyagi-3248a9225" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a 
          href="https://github.com/princetyagi2022/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      <div className="footer-right">
        <span>Figma Tokens · WCAG 2.1 AA</span>
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
