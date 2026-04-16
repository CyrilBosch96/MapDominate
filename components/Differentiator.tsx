"use client";

interface DifferentiatorProps {
  onContactClick: () => void;
}

const pillars = [
  {
    number: "01",
    title: "We Measure Calls. Not Rankings.",
    body: "Every other agency reports rankings, impressions, and clicks. Those are activity metrics. They don't pay your mortgage. We assign a dedicated tracking number to your Google Business Profile. Every call is logged, timestamped, and attributed directly to Google Maps. Your monthly report leads with one number — how many customers called you from Google this month versus last month. You hired us to get more calls. We show you the calls.",
  },
  {
    number: "02",
    title: "Every Friday. A Real Voice. Not A Dashboard.",
    body: "You will never wonder what is happening with your account. Every Friday morning, before you start your day, you receive a 60-second voice update from us. This week's ranking position. What your top competitor did. What we are doing about it next week. Done in 60 seconds. Delivered every Friday without you ever having to ask. Most agencies go silent for 29 days and reappear with a PDF. We show up every single week.",
  },
  {
    number: "03",
    title: "You See Everything We Do. Every Week.",
    body: "Every Friday update includes a plain-English summary of exactly what was done that week. Three citations built. One Google post published. Two review requests sent. One competitor snapshot pulled. No black boxes. No \"trust the process.\" You always know exactly what is happening, when it happened, and what it is expected to produce. Transparency is not a feature we offer. It is how we operate by default.",
  },
  {
    number: "04",
    title: "We Only Work With Home Service Businesses.",
    body: "We do not work with restaurants, law firms, gyms, or e-commerce stores. We work exclusively with plumbers, HVAC companies, electricians, roofers, and local service businesses. That focus means we know things a generalist agency never will — that a plumber's phone rings 3× more in January than September, that \"emergency plumber\" searches convert at twice the rate of \"plumber near me,\" and that HVAC companies miss their entire season if they are not ranked before temperatures hit either extreme. Your strategy is built around your market. Not a template.",
  },
  {
    number: "05",
    title: "We See Problems Before You Do.",
    body: "When a negative review hits your Google profile on a Tuesday night, we see it by Wednesday morning. A response draft is in your inbox by Wednesday afternoon. You never sit exposed for three days while a bad review quietly costs you customers. When a competitor jumps above you in the rankings, our tracking flags it by Friday and we are already working on the counter. Most agencies run monthly checks. We run weekly ones. In local SEO, a week of inaction can cost you 20 calls.",
  },
  {
    number: "06",
    title: "We Show You The Gap Before We Ask For Anything.",
    body: "We find your business. We look at your Google profile, your review count, your current ranking, and your top 3 competitors. We record a 2-minute personalised video showing you all of it — no fluff, no pitch, just the data. We send it to you for free. You watch it. You see the gap. You decide if it's worth closing. If you want to talk, we book a 15-minute call. If the timing is not right, no problem. The video is yours to keep. No pressure. No mystery. Just the truth about where you stand — before you spend a single dollar.",
  },
];

export default function Differentiator({ onContactClick }: DifferentiatorProps) {
  return (
    <section id="why-mapdominate" className="py-16 lg:py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            Why MapDominate Is Different
          </span>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text leading-tight">
            Every SEO Agency Will Tell You They Get Results.{" "}
            <span className="text-accent-green">Here&apos;s How We Prove It Before You Pay Us A Dollar.</span>
          </h2>
        </div>
        <p className="text-center text-dark-muted max-w-2xl mx-auto mb-16 leading-relaxed">
          Most agencies send you a proposal. We send you a diagnosis. Before you sign anything, we record
          a personalised video showing you exactly where you rank today, exactly where your top 3
          competitors sit, and exactly what is holding you back. You see the gap with your own eyes.
          Then you decide if it&apos;s worth closing.
        </p>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-dark-base rounded-xl border border-white/7 hover:border-accent-green/20 p-6 lg:p-8 transition-colors group"
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl font-black text-accent-green/20 group-hover:text-accent-green/40 transition-colors leading-none flex-shrink-0 font-mono">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-extrabold text-dark-text text-base lg:text-lg mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-dark-muted leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-dark-base border border-accent-green/20 rounded-2xl p-8 lg:p-10 text-center">
          <p className="text-sm font-bold text-accent-green uppercase tracking-widest mb-3">Pillar 6 in action</p>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-dark-text mb-4">
            See Where You Actually Stand — Right Now, For Free.
          </h3>
          <p className="text-dark-muted mb-8 max-w-xl mx-auto">
            We record a 2-minute personalised video showing your current Google ranking, your top
            competitor&apos;s position, and exactly what it would take to move you into the top 3.
            No pitch. Just the truth.
          </p>
          <button
            onClick={onContactClick}
            className="bg-accent-green hover:bg-yellow-300 text-dark-base font-black px-8 py-4 rounded-xl transition-colors text-base"
          >
            Watch How It Works — Get A Sample Diagnosis Video →
          </button>
        </div>
      </div>
    </section>
  );
}
