export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <span className="eyebrow">The Problem</span>
        <h2>The Top 3 Get<br />70% of All Calls.</h2>
        <p style={{ maxWidth: '520px', fontSize: '17px' }}>
          When someone types &quot;plumber near me,&quot; Google shows 3 businesses at the top — above every
          website and ad. Those 3 spots take everything.
        </p>
        <div className="problem-cards">
          <div className="problem-card">
            <div className="problem-icon">👻</div>
            <h3>You&apos;re Invisible</h3>
            <p>If you&apos;re not in the top 3, most customers never see you. They don&apos;t scroll past the map pack.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">📞</div>
            <h3>Your Competitor Gets the Call</h3>
            <p>Every search you miss is a booking going to someone else — and you&apos;ll never know you lost it.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🎯</div>
            <h3>The Fix Is Available to You</h3>
            <p>Those 3 spots go to businesses with the strongest Google presence — not the biggest. That&apos;s exactly what we build.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
