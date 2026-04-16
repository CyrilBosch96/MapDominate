"use client";

interface PricingProps {
  onContactClick: () => void;
}

const plans = [
  {
    name: "Basic Pack",
    price: "$500",
    period: "one-time",
    setup: null,
    badge: null,
    tagline: "Best for solo operators and new businesses who want a strong start",
    description: "One-time setup. No monthly fees. You run it.",
    requiresWebsite: false,
    features: [
      "Full Google Business Profile audit and optimisation",
      "Strategic profile setup — all categories, services, service areas",
      "Citation audit — identify where your info is inconsistent",
      "10–15 strategic Q&As seeded into your Google profile",
      "Competitor snapshot — see exactly how you compare to the top 3",
      "1-hour strategy call — walk through exactly what to do",
      "8-week check-in call — review progress and what to do next",
    ],
    note: "Ongoing posting, review management, and citation maintenance — that's on you.",
    cta: "Get the Basic Pack",
    highlighted: false,
  },
  {
    name: "Pro Pack",
    price: "$1,000",
    period: "/month",
    setup: "+ $500 setup",
    badge: "Most Popular",
    tagline: "Set up once. We handle the rest every single month.",
    description: "Everything in Basic, plus done-for-you management every week.",
    requiresWebsite: false,
    features: [
      "Everything in Basic Pack",
      "Dedicated call tracking number — every call from Google is logged",
      "Weekly Google Business Profile posts published for you",
      "Automated review request SMS — sent 48h after every job",
      "Review velocity tracking weekly vs your top competitors",
      "50+ directory citation building and consistency monitoring",
      "Monthly rank tracking report for your most important keywords",
      "Competitor gap analysis — we track what they do and stay ahead",
      "Monthly 30-minute strategy call",
      "Negative review monitoring — response draft within 24 hours",
      "Friday voice update — every week, without fail",
    ],
    note: "No website required. First results typically appear in 6–12 weeks. Most clients are in or near the 3-pack by month 3.",
    cta: "Get the Pro Pack",
    highlighted: true,
  },
  {
    name: "Pro Plus Pack",
    price: "$1,500",
    period: "/month",
    setup: "+ $500 setup",
    badge: "Best Value",
    tagline: "Local SEO and website SEO running simultaneously.",
    description: "Everything in Pro, plus a full website SEO engine.",
    requiresWebsite: true,
    features: [
      "Everything in Pro Pack",
      "2 SEO blog articles published to your website per week",
      "Location pages built for every city and neighbourhood",
      "Google Search Console setup and performance tracking",
      "Backlink outreach from real, relevant websites",
      "Technical SEO audit of your entire website",
      "Keyword research for local and organic search",
      "LinkedIn and Instagram content scheduling",
      "Full combined monthly report — Maps AND website traffic",
    ],
    note: "For businesses with an existing website who want to dominate both Google Maps and organic results simultaneously.",
    cta: "Get the Pro Plus Pack",
    highlighted: false,
  },
];

const tableRows = [
  { feature: "GBP Setup & Optimisation", basic: true, pro: true, plus: true },
  { feature: "Dedicated Call Tracking Number", basic: false, pro: true, plus: true },
  { feature: "Monthly GBP Posts", basic: false, pro: true, plus: true },
  { feature: "Automated Review SMS System", basic: false, pro: true, plus: true },
  { feature: "Citation Building (50+ directories)", basic: false, pro: true, plus: true },
  { feature: "Weekly Rank Tracking", basic: false, pro: true, plus: true },
  { feature: "Friday Voice Update", basic: false, pro: true, plus: true },
  { feature: "Competitor Gap Monitoring", basic: false, pro: true, plus: true },
  { feature: "Website SEO & Blog Content", basic: false, pro: false, plus: true },
  { feature: "Location Pages", basic: false, pro: false, plus: true },
  { feature: "Backlink Building", basic: false, pro: false, plus: true },
  { feature: "Website Required", basic: false, pro: false, plus: true },
];

export default function Pricing({ onContactClick }: PricingProps) {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            Simple, Honest Pricing. No Surprises.
          </span>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text">Pick Your Pack.</h2>
        </div>
        <p className="text-center text-dark-muted mb-6 max-w-xl mx-auto">
          Three plans built for different stages of your business. Every plan is built around one goal
          — getting your phone to ring more.
        </p>

        {/* Exclusivity callout */}
        <div className="bg-dark-base border border-accent-green/20 rounded-xl p-5 max-w-2xl mx-auto mb-12 text-center">
          <p className="text-dark-text text-sm font-semibold mb-1">
            We only take on one client per vertical per city.
          </p>
          <p className="text-dark-muted text-sm leading-relaxed">
            If we already have a plumber in your city, we will not take another. Your market is protected
            the moment you sign — and that exclusivity is why spots fill up faster than most people expect.
          </p>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border-2 p-6 lg:p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? "border-accent-green bg-dark-base shadow-2xl shadow-accent-green/10"
                  : "border-white/7 bg-dark-base hover:border-white/15"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap ${
                    plan.highlighted
                      ? "bg-accent-green text-dark-base"
                      : "bg-dark-hover text-dark-text border border-white/15"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-extrabold text-dark-text mb-1">{plan.name}</h3>
                <p className="text-xs text-dark-muted mb-4">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${plan.highlighted ? "text-accent-green" : "text-dark-text"}`}>
                    {plan.price}
                  </span>
                  <span className="text-dark-muted text-sm pb-1">{plan.period}</span>
                </div>
                {plan.setup && <p className="text-sm text-dark-muted mt-1">{plan.setup}</p>}
                <p className="text-sm text-dark-muted mt-3">{plan.description}</p>
                {plan.requiresWebsite && (
                  <p className="text-xs text-accent-red font-medium mt-2 bg-accent-red/10 border border-accent-red/20 px-2 py-1 rounded">
                    Requires an existing website
                  </p>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-5">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-dark-muted">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs text-dark-muted/70 border-t border-white/7 pt-4 mb-5 leading-relaxed italic">
                  {plan.note}
                </p>
              )}

              <button
                onClick={onContactClick}
                className={`w-full py-3.5 rounded-lg font-bold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-accent-green hover:bg-yellow-300 text-dark-base"
                    : "border border-white/15 hover:border-accent-green/40 text-dark-text hover:text-accent-green"
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div>
          <h3 className="text-center text-lg font-bold text-dark-text mb-6">Comparison at a glance</h3>
          <div className="overflow-x-auto rounded-xl border border-white/7">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-dark-base border-b border-white/7">
                  <th className="text-left px-4 py-3 font-semibold text-dark-muted w-1/2">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold text-dark-muted">Basic</th>
                  <th className="text-center px-4 py-3 font-bold text-accent-green bg-accent-green/5">Pro</th>
                  <th className="text-center px-4 py-3 font-semibold text-dark-muted">Pro Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tableRows.map((row, i) => (
                  <tr key={i} className="hover:bg-dark-hover/30 transition-colors">
                    <td className="px-4 py-3 text-dark-muted">{row.feature}</td>
                    {[row.basic, row.pro, row.plus].map((val, j) => (
                      <td key={j} className={`px-4 py-3 text-center ${j === 1 ? "bg-accent-green/5" : ""}`}>
                        {val ? (
                          <svg className="w-4 h-4 inline text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 inline text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-dark-hover border-t border-white/7">
                  <td className="px-4 py-3 font-bold text-dark-text">Price</td>
                  <td className="px-4 py-3 text-center font-semibold text-dark-muted">$500 once</td>
                  <td className="px-4 py-3 text-center font-black text-accent-green bg-accent-green/5">$1,000/mo</td>
                  <td className="px-4 py-3 text-center font-semibold text-dark-muted">$1,500/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
