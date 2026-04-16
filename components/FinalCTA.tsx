interface FinalCTAProps {
  onContactClick: () => void;
}

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section id="cta">
      <div className="cta-glow"></div>
      <div className="container">
        <span className="eyebrow" style={{ textAlign: 'center', marginBottom: '16px' }}>
          No risk. No pitch.
        </span>
        <h2>
          Every Week You&apos;re Not<br />
          in the Top 3 Is a Week<br />
          Your Competitor <span style={{ color: 'var(--accent)' }}>Gets the Call.</span>
        </h2>
        <p>
          Before you pay us a single dollar, we show you exactly where you stand — your ranking,
          your competitors, and what it would take to move up.
        </p>
        <button
          className="btn-primary"
          style={{ fontSize: '16px', padding: '18px 40px' }}
          onClick={onContactClick}
        >
          Get Your Free Ranking Diagnosis →
        </button>
        <p className="cta-note">2 minutes · Personalised video · No pitch · Free</p>
      </div>
    </section>
  );
}
