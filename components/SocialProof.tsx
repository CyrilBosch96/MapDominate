const trackingItems = [
  { label: "Review count baseline", icon: "★" },
  { label: "Current 3-pack ranking position", icon: "📍" },
  { label: "Top 3 competitor snapshot", icon: "🔍" },
  { label: "Call volume baseline", icon: "📞" },
  { label: "Weekly rank movement tracking", icon: "📈" },
  { label: "Monthly before/after call report", icon: "📊" },
];

export default function SocialProof() {
  return (
    <section className="py-16 lg:py-24 bg-dark-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            Real Businesses. Real Rankings. Real Calls.
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text text-center mb-4">
          The Results Speak for Themselves.
        </h2>
        <p className="text-center text-dark-muted mb-12 max-w-xl mx-auto">
          Case studies available on request — we show you real data before you sign anything.
        </p>

        {/* Placeholder case study cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-dark-surface rounded-xl border border-white/7 border-dashed p-6 flex flex-col items-center justify-center text-center min-h-48"
            >
              <div className="w-10 h-10 bg-accent-green/10 rounded-full flex items-center justify-center mb-3 border border-accent-green/20">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-dark-muted text-sm font-medium">Client Case Study</p>
              <p className="text-xs text-dark-muted/60 mt-1">Coming soon</p>
            </div>
          ))}
        </div>

        {/* Interim trust section */}
        <div className="bg-dark-surface rounded-2xl border border-white/7 p-8 lg:p-10">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-extrabold text-dark-text mb-3">
              Here&apos;s What We Track For Every Client From Day One.
            </h3>
            <p className="text-dark-muted max-w-2xl mx-auto text-sm leading-relaxed">
              Before we touch anything, we document your starting position. Then every single week we
              track the movement. When results come, you will have the before and after data to prove
              exactly what changed and when. We do not report on effort. We report on outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trackingItems.map((item, i) => (
              <div
                key={i}
                className="bg-dark-base rounded-lg px-4 py-3 flex items-center gap-3 border border-white/5"
              >
                <svg className="w-4 h-4 text-accent-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-dark-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
