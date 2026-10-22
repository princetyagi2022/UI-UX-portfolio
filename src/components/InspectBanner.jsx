export default function InspectBanner({ inspectMode, setInspectMode }) {
  if (!inspectMode) return null;

  return (
    <aside className="inspect-floating-banner" aria-live="polite">
      <div className="inspect-banner-content">
        <span className="inspect-indicator-dot"></span>
        <div className="inspect-banner-text">
          <strong>📐 Figma Spec &amp; Token Mode Active</strong>
          <span>Visualizing component frames, 8pt spacing rhythm, and layout metadata.</span>
        </div>
      </div>
      <button 
        type="button" 
        className="inspect-dismiss-btn"
        onClick={() => setInspectMode(false)}
        aria-label="Exit Spec Mode"
      >
        Exit Spec Mode ✕
      </button>
    </aside>
  );
}
