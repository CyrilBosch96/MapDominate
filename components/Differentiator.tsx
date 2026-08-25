import { RevealGroup, RevealItem } from "./Reveal";

const whyUs = [
  { title: "We build for calls, not just looks", desc: "Every site we build is structured around getting a customer to pick up the phone or book online — clear number, clear hours, clear reason to choose you." },
  { title: "Website + Google, not website alone", desc: "A great site with a weak Google Business Profile still loses to a mediocre site with a strong one. We build both to work together." },
  { title: "Salons, spas & gyms only", desc: "We work exclusively with local service businesses — hair salons, pet spas, and gyms. That focus means we know your customers, your booking patterns, and what actually gets them through the door." },
  { title: "You can keep posting, no developer needed", desc: "On our SEO tiers, we connect your site to WordPress so you (or we) can keep publishing fresh content without touching code." },
  { title: "Free audit before you pay", desc: "We look at your current site and Google presence and record a 2-minute video — free, no pitch — showing exactly what's holding you back." },
];

export default function Differentiator() {
  return (
    <section id="why-us">
      <div className="whyus-heading-wrap">
        <h2>A website alone isn&apos;t a strategy. Here&apos;s the difference.</h2>
      </div>
      <RevealGroup className="whyus-grid">
        {whyUs.map((w) => (
          <RevealItem key={w.title} kind="scale" className="whyus-card">
            <div className="whyus-icon">
              <span className="whyus-icon-dot"></span>
            </div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
