import WordReveal from "./WordReveal";

interface FinalCTAProps {
  onContactClick: () => void;
}

const ctaWords = [
  { text: "Every", target: "#fff" },
  { text: "day", target: "#21E6A8" },
  { text: "without", target: "#fff" },
  { text: "a", target: "#fff" },
  { text: "working", target: "#fff" },
  { text: "website", target: "#fff" },
  { text: "is", target: "#fff" },
  { text: "a", target: "#fff" },
  { text: "customer", target: "#21E6A8" },
  { text: "choosing", target: "#21E6A8" },
  { text: "someone", target: "#fff" },
  { text: "else.", target: "#fff" },
];

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <div id="audit">
      <div data-parallax="0.03" className="audit-glow" style={{ transform: "translateX(-50%)" }}></div>
      <div data-parallax="-0.09" className="audit-inner">
        <WordReveal id="gsap-audit-heading" words={ctaWords} className="audit-h2" />
        <p>
          Before you spend a dollar, we&apos;ll show you exactly what your current site (or lack of one)
          is costing you.
        </p>
        <button className="btn-pill-solid lg" onClick={onContactClick}>Get Your Free Website Audit →</button>
        <div className="audit-note">2 minutes · Personalized video · No pitch · Free</div>
      </div>
    </div>
  );
}
