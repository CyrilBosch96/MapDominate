"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const itemVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
  },
} as const;

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  id?: string;
}

// Wrap a section's grid/list in this — its RevealItem children stagger in
// together once the group scrolls into view. `once: true` so it never
// replays on scroll back up (same one-shot spirit as the intro overlay).
export function RevealGroup({ children, className, stagger = 0.1, id }: RevealGroupProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  kind?: keyof typeof itemVariants;
}

export function RevealItem({ children, className, kind = "fade-up" }: RevealItemProps) {
  return (
    <motion.div className={className} variants={itemVariants[kind]}>
      {children}
    </motion.div>
  );
}

interface RevealSoloProps extends RevealItemProps {
  delay?: number;
}

// For a single element that isn't part of a repeated grid/list — no
// RevealGroup parent needed (avoids adding an extra wrapping div around
// content whose layout CSS might assume a specific child structure, e.g.
// an element that already carries its own data-parallax transform).
export function RevealSolo({ children, className, kind = "fade-up", delay = 0 }: RevealSoloProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants[kind]}
      transition={{ ...itemVariants[kind].visible.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
