"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INTRO_HOLD_MS as HOLD_MS, INTRO_EXIT_MS as EXIT_MS, INTRO_SESSION_KEY } from "@/lib/introTiming";

const WORD = "MAPDOMINATE";
const SPLIT_INDEX = 3; // "MAP" in white, "DOMINATE" in the brand accent

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem(INTRO_SESSION_KEY);
    if (reduced || alreadySeen) return;

    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    setShow(true);
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setExiting(true), HOLD_MS);
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, HOLD_MS + EXIT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="presentation"
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: exiting ? "-100%" : 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#06110d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 9vw, 6rem)",
              letterSpacing: "0.02em",
              display: "flex",
              margin: 0,
            }}
          >
            {WORD.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  color: i < SPLIT_INDEX ? "#edf2f0" : "#21e6a8",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
