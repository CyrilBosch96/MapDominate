"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WordReveal from "./WordReveal";
import { RevealGroup, RevealItem } from "./Reveal";
import { INTRO_TOTAL_MS, willIntroPlay } from "@/lib/introTiming";

interface HeroProps {
  onContactClick: () => void;
}

const heroWords = [
  { text: "Your", target: "#fff" },
  { text: "website", target: "#fff" },
  { text: "is", target: "#fff" },
  { text: "costing", target: "#fff" },
  { text: "you", target: "#fff" },
  { text: "customers.", target: "#fff" },
  { text: "We", target: "#21E6A8" },
  { text: "fix", target: "#21E6A8" },
  { text: "that", target: "#21E6A8" },
  { text: "—", target: "#fff" },
  { text: "and", target: "#fff" },
  { text: "get", target: "#fff" },
  { text: "your", target: "#fff" },
  { text: "phone", target: "#fff" },
  { text: "ringing.", target: "#fff" },
];

const stats = [
  { value: "75%", label: "of people judge a business's credibility by its website" },
  { value: "3–5 sec", label: "how long before a slow site loses a visitor" },
  { value: "2×", label: "more inbound calls with a site built to convert" },
  { value: "1", label: "client per city per trade" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

// custom = the base delay (seconds) before this group starts — 0 on a
// repeat page view this session, or the intro overlay's total runtime if
// it's about to play, so the reveal is timed to start right as the
// curtain lifts instead of playing invisibly underneath it.
const textGroupVariants = {
  hidden: {},
  visible: (delaySec: number) => ({
    transition: { staggerChildren: 0.12, delayChildren: delaySec },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delaySec: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay: delaySec + 0.3 },
  }),
};

export default function Hero({ onContactClick }: HeroProps) {
  const [delaySec] = useState(() => (willIntroPlay() ? INTRO_TOTAL_MS / 1000 : 0));

  return (
    <>
      <div id="hero">
        <div data-parallax="0.035" className="hero-glow2" style={{ transform: "translateX(-50%)" }}></div>
        <div data-parallax="0.02" style={{ position: "relative" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={delaySec}
            variants={textGroupVariants}
          >
            <motion.div variants={fadeUpVariants} className="hero-tag2">
              <span className="hero-tag2-dot"></span>
              GOOGLE MAPS RANKING SPECIALISTS
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <WordReveal id="gsap-hero-heading" as="h1" className="hero-h1-2" words={heroWords} />
            </motion.div>
            <motion.p variants={fadeUpVariants} className="hero-sub2">
              A broken or outdated website doesn&apos;t just look bad — it&apos;s the reason customers scroll
              past you to your competitor. We build fast, mobile-ready websites and Google Business Profiles
              that turn searches into phone calls.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="hero-actions2">
              <button className="btn-pill-solid lg" onClick={onContactClick}>Get Your Free Website Audit →</button>
              <a href="#how-it-works" className="btn-pill-outline">See how it works</a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hero-panel-wrap">
        <motion.div
          className="hero-panel"
          initial="hidden"
          animate="visible"
          custom={delaySec}
          variants={panelVariants}
        >
          <div data-parallax="0.04" className="hero-panel-glow-a"></div>
          <div data-parallax="-0.03" className="hero-panel-glow-b"></div>
          <div data-parallax="-0.16" className="mockup-card">
            <div className="mockup-caption">&quot;hair salon near me · Google Search&quot;</div>
            <div className="mockup-rows">
              <div className="mockup-row you">
                <div className="mockup-num">1</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Your Business <span className="you-tag">← You</span></div>
                  <div className="mockup-meta">★★★★★ 4.9 · Website · Call</div>
                </div>
                <div className="mockup-call-badge">Call</div>
              </div>
              <div className="mockup-row">
                <div className="mockup-num">2</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Competitor Salon</div>
                  <div className="mockup-meta">★★★★ 4.7 · No website · Call</div>
                </div>
              </div>
              <div className="mockup-row">
                <div className="mockup-num">3</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mockup-name">Another Salon</div>
                  <div className="mockup-meta">★★★★ 4.5 · Broken site · Call</div>
                </div>
              </div>
            </div>
          </div>
          <div data-parallax="-0.26" className="hero-badge-calls">+180% calls in 90 days</div>
        </motion.div>

        <RevealGroup className="hero-stats-grid">
          {stats.map((s) => (
            <RevealItem key={s.value} kind="scale" className="hero-stat-tile">
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </>
  );
}
