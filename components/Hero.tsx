interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-layout">
        <div className="hero-inner">
          <div className="hero-tag">Google Maps Ranking Specialists</div>
          <h1 className="hero-h1">
            Your Next 10<br />
            Customers Are<br />
            Already <span className="accent">Searching.</span>
          </h1>
          <p className="hero-sub">
            Dominate Google Maps and get <strong>3× the phone calls</strong> from customers.
            We rank you in the top 3 local results — so your phone rings, not your competitor&apos;s.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onContactClick}>
              Get Your Free Ranking Diagnosis
            </button>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <span className="proof-num">70%</span>
              <span className="proof-label">of clicks go to the top 3</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">6–12</span>
              <span className="proof-label">weeks to first results</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">3×</span>
              <span className="proof-label">more inbound calls</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">1</span>
              <span className="proof-label">client per city per trade</span>
            </div>
          </div>
        </div>

        <div>
          <div className="mappack">
            <div className="mappack-header">plumber near me · Google Maps</div>
            <div className="mappack-row you">
              <div className="mappack-num you-num">1</div>
              <div className="mappack-info">
                <div className="mappack-name you-name">Your Business ← You</div>
                <div className="mappack-meta">
                  <span className="stars">★★★★★</span> 4.9 · 127 reviews
                </div>
              </div>
              <div className="mappack-call">Call</div>
            </div>
            <div className="mappack-row">
              <div className="mappack-num other">2</div>
              <div className="mappack-info">
                <div className="mappack-name">City Plumbing Co.</div>
                <div className="mappack-meta">
                  <span className="stars">★★★★</span> 4.7 · 89 reviews
                </div>
              </div>
              <div className="mappack-call dim">Call</div>
            </div>
            <div className="mappack-row">
              <div className="mappack-num other">3</div>
              <div className="mappack-info">
                <div className="mappack-name">Quick Fix Plumbers</div>
                <div className="mappack-meta">
                  <span className="stars">★★★★</span> 4.5 · 64 reviews
                </div>
              </div>
              <div className="mappack-call dim">Call</div>
            </div>
            <div className="badge-calls">
              <strong>+240%</strong>&nbsp;calls in 90 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
