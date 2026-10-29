"use client";

import { RevealGroup, RevealItem } from "./Reveal";

interface PricingProps {
  onContactClick: () => void;
}

const pricingTiers = [
  {
    name: "Website Build", price: "$300", sub: "One-time · you own it and host it on your own domain", featured: false,
    features: [
      "Yours to keep — no monthly fee",
      "Custom-designed website (home, about, services, contact)",
      "Mobile-optimized, fast-loading",
      "SEO-friendly foundation (robots.txt, sitemap, on-page basics)",
      "Click-to-call info and appointment scheduler",
      "Free step-by-step hosting guide + setup call if you need it",
    ],
  },
  {
    name: "Website + SEO", price: "$600", sub: "One-time build · $50/mo maintenance & hosting", featured: false,
    features: [
      "Everything in Website Build",
      "SEO-friendly website with connected WordPress account",
      "You (or we) can publish blog posts and updates",
      "On-page SEO structure built in from day one",
    ],
  },
  {
    name: "Website + Local SEO", price: "$1,000/mo", sub: "Ongoing monthly plan", featured: true,
    features: [
      "SEO-friendly website (same foundation as above)",
      "Google Business Profile optimization",
      "NAP consistency check across the web",
      "Ongoing monthly local SEO fixes as rankings shift",
      "Includes hosting and maintenance",
    ],
  },
  {
    name: "Full Package", price: "$2,000/mo", sub: "Ongoing monthly plan", featured: false,
    features: [
      "Everything in Website + Local SEO",
      "WordPress blog enabled",
      "Monthly local-service blog posts published",
      "Google Business Profile optimization + NAP check",
      "Built for businesses that want to keep climbing rankings",
    ],
  },
];

export default function Pricing({ onContactClick }: PricingProps) {
  return (
    <div id="pricing">
      <div className="pricing-inner">
        <div className="pricing-heading-wrap">
          <h2>Four tiers, one goal: more calls.</h2>
          <p>
            Website Build is a one-time purchase: the site is yours, and we show you how to put it on
            your own domain. Website + SEO is a one-time build with a low monthly maintenance fee.
            Website + Local SEO and the Full Package are monthly plans — because local rankings need
            ongoing work, not a one-time fix.
          </p>
        </div>
        <RevealGroup className="pricing-grid2">
          {pricingTiers.map((tier) => (
            <RevealItem
              key={tier.name}
              kind="scale"
              className={`pricing-card2${tier.featured ? " featured" : ""}`}
            >
              {tier.featured && <div className="pricing-featured-tag">MOST POPULAR</div>}
              <h3>{tier.name}</h3>
              <div className="pricing-price2">{tier.price}</div>
              <div className="pricing-sub2">{tier.sub}</div>
              <ul className="pricing-features2">
                {tier.features.map((f) => (
                  <li key={f}><span className="check">✓</span>{f}</li>
                ))}
              </ul>
              <button
                className="btn-pill-small"
                style={tier.featured ? { background: "#21E6A8", color: "#06110D" } : { background: "#1B211F", color: "#EDF2F0" }}
                onClick={onContactClick}
              >
                Get Started →
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
