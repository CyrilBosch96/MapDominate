export default function Results() {
  const industries = [
    'Plumbers', 'Electricians', 'HVAC', 'Roofers', 'Landscapers',
    'Pest Control', 'Dentists', 'Chiropractors', 'Locksmiths', 'Cleaning Companies',
  ];

  return (
    <section id="results">
      <div className="container">
        <span className="eyebrow">The Difference</span>
        <h2>Before and After<br />MapDominate.</h2>
        <div className="ba-grid">
          <div className="ba-col before">
            <div className="ba-label">Before</div>
            <ul className="ba-list">
              <li>Buried in Maps or completely invisible</li>
              <li>Competitors in the 3-pack taking every call</li>
              <li>Relying on word-of-mouth and repeat customers</li>
              <li>Paying for ads just to stay competitive</li>
              <li>Monthly PDF from an agency you haven&apos;t spoken to in weeks</li>
            </ul>
          </div>
          <div className="ba-col after">
            <div className="ba-label">After</div>
            <ul className="ba-list">
              <li>Showing in the top 3 when customers search in your city</li>
              <li>Phone ringing with new customers ready to hire</li>
              <li>Reviews growing automatically without chasing anyone</li>
              <li>Google working for you 24/7 — even when you&apos;re on the job</li>
              <li>A real voice every Friday telling you exactly what happened</li>
            </ul>
          </div>
        </div>
        <div className="industries" style={{ justifyContent: 'flex-start' }}>
          <span style={{ fontSize: '13px', color: 'var(--off)', marginRight: '8px', lineHeight: '32px' }}>
            Works for:
          </span>
          {industries.map((i) => (
            <span key={i} className="industry-tag">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
