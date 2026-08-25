import WordReveal from "./WordReveal";
import { RevealGroup, RevealItem } from "./Reveal";

const problemWords = [
  { text: "Your", target: "#fff" },
  { text: "website", target: "#fff" },
  { text: "is", target: "#fff" },
  { text: "either", target: "#fff" },
  { text: "working", target: "#21E6A8" },
  { text: "for", target: "#21E6A8" },
  { text: "you", target: "#21E6A8" },
  { text: "—", target: "#fff" },
  { text: "or", target: "#fff" },
  { text: "against", target: "#fff" },
  { text: "you.", target: "#fff" },
];

const cards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#21E6A8" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path>
        <line x1="3" y1="3" x2="21" y2="21"></line>
      </svg>
    ),
    title: "You look closed for business",
    desc: "A site that hasn't been touched in years, doesn't load on mobile, or still has last season's hours tells customers you're not paying attention — even if you are.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#21E6A8" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.37a2 2 0 0 1-.45 2.11L8.09 9.31a16 16 0 0 0 6.6 6.6l1.11-1.11a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.37.54A2 2 0 0 1 22 16.92Z"></path>
        <line x1="17" y1="1" x2="23" y2="7"></line>
        <line x1="23" y1="1" x2="17" y2="7"></line>
      </svg>
    ),
    title: "Your competitor gets the call",
    desc: "Every visitor who bounces off a broken site is a booking you'll never know you lost.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#21E6A8" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    title: "The fix is simple — if it's done right",
    desc: "A fast, mobile-first site paired with a fully optimized Google Business Profile is what turns \"just looking\" into \"let me call them.\"",
  },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="problem-heading-wrap">
        <WordReveal id="gsap-problem-heading" words={problemWords} />
        <p>
          When someone finds your business on Google, your website is the next click. If it&apos;s slow,
          outdated, or broken, that customer is gone in seconds — straight to a competitor who looks
          more legitimate.
        </p>
      </div>
      <RevealGroup className="problem-grid2">
        {cards.map((c) => (
          <RevealItem key={c.title} className="problem-card2">
            {c.icon}
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
