export default function Footer() {
  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why MapDominate", href: "#why-mapdominate" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-dark-surface border-t border-white/7 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-accent-green rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-dark-base" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-dark-text">
                Map<span className="text-accent-green">Dominate</span>
              </span>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed">
              Local customer acquisition for home service businesses. We help plumbers, electricians,
              HVAC companies, roofers, and local service businesses get more calls through Google Maps
              dominance. We only work with home service businesses. We only take one client per city per
              vertical. And we show you results before we ask for your money.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-dark-muted hover:text-accent-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/7 mt-8 pt-8 text-center text-sm text-dark-muted">
          © {new Date().getFullYear()} MapDominate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
