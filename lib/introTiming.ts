// Shared between IntroAnimation.tsx and Hero.tsx: the intro overlay plays
// once per session, so the Hero's own entrance needs to know whether it's
// about to be covered by that overlay (delay until it lifts) or not (a
// repeat page view this session — animate in immediately). Single source
// of truth for the timing so the two components can't drift out of sync.

export const INTRO_HOLD_MS = 1300;
export const INTRO_EXIT_MS = 650;
export const INTRO_TOTAL_MS = INTRO_HOLD_MS + INTRO_EXIT_MS;
export const INTRO_SESSION_KEY = "md-intro-seen";

// Must be called during render (e.g. a lazy useState initializer), not in
// an effect — effects fire after render, and IntroAnimation's own effect
// writes the session flag, so checking it inside an effect would always
// see it as "already seen" regardless of load order.
export function willIntroPlay(): boolean {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !reduced && !sessionStorage.getItem(INTRO_SESSION_KEY);
}
