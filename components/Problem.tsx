export default function Problem() {
  return (
    <section className="py-16 lg:py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            Why You&apos;re Losing Customers Right Now
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text mb-6">
            The Top 3 Google Results Get{" "}
            <span className="text-accent-green">70% of All Clicks.</span>
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            When someone types &quot;plumber near me&quot; or &quot;HVAC repair [city],&quot; Google shows a map
            with 3 businesses at the very top — before any websites, before any ads. Those three spots
            receive{" "}
            <strong className="text-dark-text">70% of every click and every call</strong>.
          </p>
        </div>

        {/* 3-column split */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-dark-base rounded-xl p-6 border border-white/7">
            <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center mb-4 border border-accent-red/20">
              <svg className="w-5 h-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </div>
            <h3 className="font-bold text-dark-text mb-2">You&apos;re Invisible</h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              If you&apos;re not in the top 3, you don&apos;t exist to most customers. They never scroll past
              the map pack.
            </p>
          </div>

          <div className="bg-dark-base rounded-xl p-6 border border-white/7">
            <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center mb-4 border border-accent-red/20">
              <svg className="w-5 h-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-dark-text mb-2">
              Your <span className="text-accent-red">Competitor</span> Gets the Job
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Every search you miss is a booking going to someone else. You don&apos;t even know you lost it.
            </p>
          </div>

          <div className="bg-dark-base rounded-xl p-6 border border-white/7">
            <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center mb-4 border border-accent-teal/20">
              <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-dark-text mb-2">The Fix Is Available to You</h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Those 3 spots go to businesses with the strongest Google presence — not the biggest.
              That&apos;s exactly what we build.
            </p>
          </div>
        </div>

        {/* Big stat bar */}
        <div className="bg-dark-base rounded-2xl p-8 lg:p-10 border border-accent-green/20">
          <p className="text-accent-green text-sm font-bold uppercase tracking-widest text-center mb-6">
            The Opportunity
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl font-black text-accent-green mb-1">70%</div>
              <div className="text-dark-muted text-sm">of clicks go to the top 3</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/7"></div>
            <div className="text-center">
              <div className="text-5xl font-black text-accent-green mb-1">6–12</div>
              <div className="text-dark-muted text-sm">weeks to first results</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/7"></div>
            <div className="text-center">
              <div className="text-5xl font-black text-accent-green mb-1">2–4×</div>
              <div className="text-dark-muted text-sm">more inbound calls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
