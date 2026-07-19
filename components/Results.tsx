const beforeList = [
  "Outdated or no website at all",
  "Customers bounce before they even see your services",
  "Relying on word-of-mouth and repeat customers",
  "Google Business Profile incomplete or ignored",
  "No idea how many customers you're losing to a bad first impression",
];

const afterList = [
  "A fast, professional site built to get calls",
  "Customers land, trust what they see, and book",
  "Steady stream of new customers finding you online",
  "Google Business Profile working around the clock",
  "Clear reporting on calls and visits, month over month",
];

export default function Results() {
  return (
    <section id="results">
      <div className="ba-heading-wrap">
        <h2>Before and after MapDominate.</h2>
      </div>
      <div data-reveal-group="scroll" className="ba-grid2">
        <div data-reveal="fade-up" data-idx="0" className="ba-card">
          <div className="ba-card-label">Before</div>
          {beforeList.map((b) => (
            <div key={b} className="ba-row">
              <span className="ba-row-mark">–</span>
              <span className="ba-row-text">{b}</span>
            </div>
          ))}
        </div>
        <div data-reveal="fade-up" data-idx="1" className="ba-card after">
          <div className="ba-card-label">After</div>
          {afterList.map((a) => (
            <div key={a} className="ba-row">
              <span className="ba-row-mark">✓</span>
              <span className="ba-row-text">{a}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="industries2">
        Works for: <strong>Hair Salons · Pet Spas · Gyms</strong>
      </div>
    </section>
  );
}
