const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Google Business Profile — Fully Optimized",
    description:
      "We audit and rebuild your profile from the ground up. Every field, every category, every service area — dialled in to signal exactly what Google needs to rank you higher.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Citation Authority — 50+ Directories",
    description:
      "Your business name, address, and phone number must appear consistently across dozens of directories. We build and monitor that consistency — one of Google's strongest authority signals.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Review Velocity — More Reviews, Faster",
    description:
      "Reviews are a direct ranking factor. We implement a system that automatically asks your customers for reviews 48 hours after every job — and track your velocity weekly to outpace competitors.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "Weekly Google Posts — Stay Fresh, Stay Ranked",
    description:
      "Google rewards active profiles. We publish consistent posts so Google sees your business as active, relevant, and trustworthy — week after week.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Keyword-Targeted Strategy",
    description:
      "We research exactly what your customers are typing into Google and make sure your profile speaks that language — so you show up for the searches that actually bring in jobs.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Weekly Rank Tracking + Call Attribution",
    description:
      "Every week we check your 3-pack position. Every month we show you how many calls came from it. Rankings tell you where you are. Calls tell you if it's working.",
  },
];

export default function Mechanism() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-dark-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            What We Actually Do
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text max-w-3xl mx-auto">
            We Build Your Google Presence Until Customers{" "}
            <span className="text-accent-green">Can&apos;t Ignore You.</span>
          </h2>
          <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto leading-relaxed">
            You don&apos;t need a website to dominate your local area. Google&apos;s map pack runs entirely on
            your Google Business Profile — and most local businesses have theirs set up wrong,
            incomplete, or completely neglected. We fix that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-dark-surface hover:bg-dark-hover border border-white/7 hover:border-accent-green/20 rounded-xl p-6 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-accent-green/10 text-accent-green border border-accent-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-green group-hover:text-dark-base transition-all">
                {feature.icon}
              </div>
              <h3 className="font-bold text-dark-text mb-2 text-base">{feature.title}</h3>
              <p className="text-sm text-dark-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
