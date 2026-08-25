import { RevealGroup, RevealItem } from "./Reveal";

const faqs = [
  {
    q: "Do I need to already have a website?",
    a: "No. Most clients come to us with no website, an outdated one, or one that's broken on mobile. We build it from scratch as part of the Website Build and Website + SEO tiers — you don't need anything in place to get started.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites go live within 1–2 weeks of kickoff. We start with the free audit video, then move straight into design and build — no lengthy back-and-forth before you see something real.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Hair salons, pet spas, and gyms only. That focus means we know your customers, your booking patterns, and what actually gets them through the door — not a generic template built for every type of local business.",
  },
  {
    q: "I already have a website — can you just fix it instead of rebuilding?",
    a: "In most cases we rebuild rather than patch. Older sites are usually slow, not mobile-optimized, and built on foundations that make ongoing SEO difficult. A clean rebuild gets you a faster, more reliable result than trying to fix what's underneath — and it's covered in every tier.",
  },
  {
    q: "What's the difference between the $600 and $1,000 tier?",
    a: "Website + SEO ($600) is a one-time build with a connected WordPress account so you can publish content yourself — no ongoing local SEO work included. Website + Local SEO ($1,000/mo) adds Google Business Profile optimization, NAP consistency checks, and ongoing monthly fixes as your local rankings shift. If you want us actively working your rankings every month, the $1,000 tier is the one to choose.",
  },
  {
    q: "Why do you only take one client per city per trade?",
    a: "We can't help two salons — or two gyms — in the same city outrank each other. When you sign with us, your market and trade are protected: we won't take a competing business in your city. Spots fill up because of this, so if your city is open, it's worth moving quickly.",
  },
  {
    q: "Do you guarantee results?",
    a: "We don't make guarantees because Google controls the algorithm — and anyone who promises guaranteed rankings isn't being straight with you. What we do guarantee: a fast, professional site, complete transparency, and monthly reporting on calls and visits so you always know what's working.",
  },
  {
    q: "Can I upgrade my tier later?",
    a: "Yes, anytime. Many clients start with a Website Build or Website + SEO and move up to a monthly SEO plan once they're ready to actively grow rankings. We simply pick up from the site we already built for you — no starting over.",
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="faq-heading-wrap">
        <h2>Frequently asked questions</h2>
      </div>
      <RevealGroup className="faq-list2" stagger={0.06}>
        {faqs.map((faq) => (
          <RevealItem key={faq.q}>
            <details className="faq-item2">
              <summary className="faq-q2">
                {faq.q}
                <span className="faq-plus">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
