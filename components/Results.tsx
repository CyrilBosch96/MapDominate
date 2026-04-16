const beforeItems = [
  "Buried in Maps or completely invisible",
  "Competitors in the 3-pack taking every inbound call",
  "Relying on word-of-mouth and repeat customers only",
  "Paying for ads just to stay competitive",
  "Getting a monthly PDF from an agency you haven't spoken to in three weeks",
];

const afterItems = [
  "Showing in the top 3 when customers search in your city",
  "Phone ringing with new customers who are ready to hire",
  "Reviews growing automatically without chasing anyone",
  "Google working for you 24/7 — even when you're on the job",
  "Knowing every Friday exactly what happened and what comes next",
];

export default function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            What Happens When You Rank in the Top 3
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text">
            The Phone Doesn&apos;t Stop.
          </h2>
          <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto">
            Businesses that move into the Google 3-pack typically see{" "}
            <strong className="text-accent-green">2× to 4× more inbound calls</strong> than before —
            without spending a single dollar on ads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="bg-dark-base rounded-xl border border-accent-red/20 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent-red/10 rounded-full flex items-center justify-center border border-accent-red/20">
                <svg className="w-4 h-4 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-text text-lg">Before MapDominate</h3>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-dark-muted">
                  <svg className="w-4 h-4 text-accent-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-dark-base rounded-xl border border-accent-teal/20 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent-teal/10 rounded-full flex items-center justify-center border border-accent-teal/20">
                <svg className="w-4 h-4 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-text text-lg">After MapDominate</h3>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-dark-muted">
                  <svg className="w-4 h-4 text-accent-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Proof note */}
        <div className="bg-dark-base rounded-xl p-6 border border-accent-green/10 text-center mb-12">
          <p className="text-dark-muted text-sm leading-relaxed">
            We show you real map pack positions, real ranking movement, and real call volume —{" "}
            <span className="text-dark-text font-medium">not impressions, not clicks, not vanity metrics.</span>{" "}
            Results available on request before you sign anything.
          </p>
        </div>

        {/* Industries strip */}
        <div>
          <p className="text-center text-sm text-dark-muted mb-6 font-medium">Works for any local service business</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Plumbers", "Electricians", "HVAC", "Roofers", "Landscapers",
              "Pest Control", "Dentists", "Chiropractors", "Locksmiths", "Cleaning Companies",
            ].map((industry) => (
              <span
                key={industry}
                className="bg-dark-base border border-white/7 text-dark-muted text-sm font-medium px-4 py-1.5 rounded-full hover:border-accent-green/30 hover:text-dark-text transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
