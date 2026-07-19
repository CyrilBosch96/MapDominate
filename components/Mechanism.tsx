const steps = [
  { num: "01", tag: "FREE · NO PITCH", title: "We show you exactly what's costing you customers", desc: "Before you spend anything, we record a 2-minute personalized video walking through your current website (or lack of one), what's broken, and what it's costing you in lost calls. Free. No pitch. Just the truth." },
  { num: "02", tag: "WEEK 1–2", title: "We build a site that actually converts", desc: "We design and launch a fast, mobile-ready website built around one goal: getting customers to call or book. No templates that look like everyone else's — a site built for your business and your area." },
  { num: "03", tag: "ONGOING (TIER-DEPENDENT)", title: "We keep you visible, not just live", desc: "Depending on your plan, we optimize your Google Business Profile, publish fresh content, and build local SEO signals so you keep showing up when people search — not just the week your site launches." },
  { num: "04", tag: "MONTH 1–3", title: "Your phone starts ringing", desc: "We track calls and site visits from day one. By month 2–3, most clients see a clear jump in inbound calls compared to their old site — or no site at all." },
];

export default function Mechanism() {
  return (
    <div id="how-it-works">
      <div className="how-inner">
        <div className="how-heading-wrap">
          <h2>Simple process. Real results.</h2>
        </div>
        <div data-reveal-group="scroll" className="steps2">
          {steps.map((step, i) => (
            <div key={step.num} data-reveal="fade-up" data-idx={i} className="step-row">
              <div>
                <div className="step-num2">{step.num}</div>
                <div className="step-tag2">{step.tag}</div>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
