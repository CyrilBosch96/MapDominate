import WordReveal from "./WordReveal";

interface HeroProps {
  onContactClick: () => void;
}

const heroWords = [
  { text: "Your", target: "#fff" },
  { text: "website", target: "#fff" },
  { text: "is", target: "#fff" },
  { text: "costing", target: "#fff" },
  { text: "you", target: "#fff" },
  { text: "customers.", target: "#fff" },
  { text: "We", target: "#21E6A8" },
  { text: "fix", target: "#21E6A8" },
  { text: "that", target: "#21E6A8" },
  { text: "—", target: "#fff" },
  { text: "and", target: "#fff" },
  { text: "get", target: "#fff" },
  { text: "your", target: "#fff" },
  { text: "phone", target: "#fff" },
  { text: "ringing.", target: "#fff" },
];

const stats = [
  { value: "75%", label: "of people judge a business's credibility by its website" },
  { value: "3–5 sec", label: "how long before a slow site loses a visitor" },
  { value: "2×", label: "more inbound calls with a site built to convert" },
  { value: "1", label: "client per city per trade" },
];

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <>
      <div id="hero" data-reveal-group="load">
        <div data-parallax="0.035" className="hero-glow2" style={{ transform: "translateX(-50%)" }}></div>
        <div data-parallax="0.02" style={{ position: "relative" }}>
          <div data-reveal="fade-up" data-idx="0" className="hero-tag2">
            <span className="hero-tag2-dot"></span>
            GOOGLE MAPS RANKING SPECIALISTS
          </div>
          <div data-reveal="fade-up" data-idx="1">
            <WordReveal id="gsap-hero-heading" as="h1" className="hero-h1-2" words={heroWords} />
          </div>
          <p data-reveal="fade-up" data-idx="2" className="hero-sub2">
            A broken or outdated website doesn&apos;t just look bad — it&apos;s the reason customers scroll
            past you to your competitor. We build fast, mobile-ready websites and Google Business Profiles
            that turn searches into phone calls.
          </p>
          <div data-reveal="fade-up" data-idx="3" className="hero-actions2">
            <button className="btn-pill-solid lg" onClick={onContactClick}>Get Your Free Website Audit →</button>
            <a href="#how-it-works" className="btn-pill-outline">See how it works</a>
          </div>
        </div>
      </div>

      <div className="hero-panel-wrap">
        <div data-reveal-group="load" data-reveal="scale" data-idx="4" className="hero-panel">
          <div data-parallax="0.04" className="hero-panel-glow-a"></div>
          <div data-parallax="-0.03" className="hero-panel-glow-b"></div>
          <div data-parallax="-0.16" className="mockup-card">
            <div className="mockup-caption">&quot;hair salon near me · Google Search&quot;</div>
            <div className="mockup-rows">
              <div className="mockup-row you">
                <div className="mockup-num">1</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Your Business <span className="you-tag">← You</span></div>
                  <div className="mockup-meta">★★★★★ 4.9 · Website · Call</div>
                </div>
                <div className="mockup-call-badge">Call</div>
              </div>
              <div className="mockup-row">
                <div className="mockup-num">2</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Competitor Salon</div>
                  <div className="mockup-meta">★★★★ 4.7 · No website · Call</div>
                </div>
              </div>
              <div className="mockup-row">
                <div className="mockup-num">3</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Another Salon</div>
                  <div className="mockup-meta">★★★★ 4.5 · Broken site · Call</div>
                </div>
              </div>
            </div>
          </div>
          <div data-parallax="-0.26" className="hero-badge-calls">+180% calls in 90 days</div>
        </div>

        <div data-reveal-group="scroll" className="hero-stats-grid">
          {stats.map((s, i) => (
            <div key={s.value} data-reveal="scale" data-idx={i} className="hero-stat-tile">
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
