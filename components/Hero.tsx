"use client";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-dark-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide border border-accent-green/20">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full"></span>
              The #1 Result Local Businesses Are Missing
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-text leading-tight mb-6">
              Your Next 10 Customers Are Already Searching Google.{" "}
              <span className="text-accent-green">They&apos;re Just Not Calling You.</span>
            </h1>

            <p className="text-lg text-dark-muted leading-relaxed mb-4">
              We get your business ranked in Google&apos;s top 3 local results — the map pack — so when
              someone nearby searches for your service, your phone rings. Not your competitor&apos;s.
            </p>
            <p className="text-base text-dark-muted leading-relaxed mb-8">
              And every Friday, a real person tells you exactly what happened that week.{" "}
              <span className="text-dark-text font-medium">Not a dashboard. Not a PDF. A voice. Every single week.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={onContactClick}
                className="bg-accent-green hover:bg-yellow-300 text-dark-base font-bold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Get More Calls — See How It Works
              </button>
              <a
                href="#pricing"
                className="border border-white/15 hover:border-accent-green/50 hover:text-accent-green text-dark-muted font-semibold px-7 py-3.5 rounded-lg transition-colors text-base text-center"
              >
                View Pricing
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                "No website required",
                "Results in 6–12 weeks",
                "Any local service business",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-dark-muted">
                  <svg className="w-4 h-4 text-accent-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Mock Google 3-Pack */}
          <div className="relative">
            <div className="bg-dark-surface rounded-2xl border border-white/7 overflow-hidden shadow-2xl shadow-black/50">
              {/* Search bar mock */}
              <div className="bg-dark-hover border-b border-white/7 px-4 py-3">
                <div className="flex items-center gap-3 bg-dark-base rounded-full border border-white/10 px-4 py-2.5">
                  <svg className="w-4 h-4 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  <span className="text-dark-text text-sm">plumber near me</span>
                  <svg className="w-4 h-4 text-dark-muted ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Map area */}
              <div className="h-28 bg-dark-hover relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 400 120" className="w-full h-full">
                    <path d="M0 60 Q100 20 200 60 T400 60" fill="none" stroke="#C8FF00" strokeWidth="1" opacity="0.4" />
                    <path d="M0 80 Q100 40 200 80 T400 80" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.2" />
                    <rect x="50" y="30" width="60" height="40" rx="4" fill="#1A2330" opacity="0.8" />
                    <rect x="150" y="20" width="80" height="55" rx="4" fill="#1A2330" opacity="0.8" />
                    <rect x="280" y="35" width="70" height="45" rx="4" fill="#1A2330" opacity="0.8" />
                  </svg>
                </div>
                {/* Map pins */}
                <div className="absolute top-4 left-1/4 w-7 h-7 bg-accent-green rounded-full flex items-center justify-center shadow-lg shadow-accent-green/30">
                  <span className="text-dark-base text-xs font-black">1</span>
                </div>
                <div className="absolute top-8 left-1/2 w-6 h-6 bg-dark-muted rounded-full flex items-center justify-center shadow-md">
                  <span className="text-dark-base text-xs font-bold">2</span>
                </div>
                <div className="absolute top-5 right-1/4 w-6 h-6 bg-dark-muted rounded-full flex items-center justify-center shadow-md">
                  <span className="text-dark-base text-xs font-bold">3</span>
                </div>
              </div>

              {/* 3-pack listings */}
              <div className="divide-y divide-white/5">
                {[
                  { name: "Your Business Here", rating: "4.9", reviews: 127, badge: "You", highlight: true },
                  { name: "City Plumbing Co.", rating: "4.7", reviews: 89, badge: null, highlight: false },
                  { name: "Quick Fix Plumbers", rating: "4.5", reviews: 64, badge: null, highlight: false },
                ].map((biz, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 flex items-start gap-3 ${biz.highlight ? "bg-accent-green/5" : "bg-dark-surface"}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black ${biz.highlight ? "bg-accent-green text-dark-base" : "bg-dark-hover text-dark-muted"}`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${biz.highlight ? "text-accent-green" : "text-dark-text"}`}>
                          {biz.name}
                        </span>
                        {biz.badge && (
                          <span className="bg-accent-green text-dark-base text-xs px-1.5 py-0.5 rounded font-black">
                            You
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-xs text-accent-green font-semibold">{biz.rating}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-dark-muted">({biz.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`text-xs px-2 py-1 rounded font-bold ${biz.highlight ? "bg-accent-green text-dark-base" : "bg-dark-hover text-dark-muted"}`}>
                        Call
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-dark-surface rounded-xl shadow-xl border border-white/7 px-4 py-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-teal/15 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-black text-accent-green">+240% calls</div>
                <div className="text-xs text-dark-muted">in 90 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
