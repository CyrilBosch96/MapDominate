"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a website?",
    a: "No. The Basic and Pro plans work entirely through your Google Business Profile. You don't need a single web page to rank in the Google 3-pack. Many of our strongest results have come from businesses with no website at all. The map pack operates independently of your website — it runs on your Google profile, your reviews, and your citation authority.",
  },
  {
    q: "How long before I see results?",
    a: "The map pack takes 6–12 weeks to move meaningfully. This is not ads — it's a permanent ranking that compounds over time. The businesses that commit to this process see results that grow month after month. And unlike ads, when you stop paying for ads your phone stops ringing. When you stop paying for SEO, your ranking doesn't disappear overnight — you keep the position you built.",
  },
  {
    q: "What kind of businesses does this work for?",
    a: "Any local service business where customers search Google to find help — plumbers, electricians, HVAC, roofers, landscapers, pest control, dentists, chiropractors, locksmiths, cleaning companies. If customers Google for it in your city, we can rank you for it.",
  },
  {
    q: "What if I already have a Google Business Profile?",
    a: "Most profiles we audit are missing 40–60% of the optimisations that drive rankings. Having a profile is step one. Having an optimised, active, citation-backed, review-rich profile with consistent weekly posts is what actually gets you into the 3-pack. The gap between \"has a profile\" and \"dominates the map pack\" is exactly what we close.",
  },
  {
    q: "What is the Friday voice update?",
    a: "Every Friday morning you receive a 60-second voice note from us. Your ranking position this week. What your top competitor did. What we are doing about it next week. It takes 60 seconds to listen to while you're driving to a job. No login. No dashboard. No decoding a report. Just straight information, every Friday, from a real person who is actively watching your market.",
  },
  {
    q: "Why do you only take one client per city per vertical?",
    a: "Because we would be ranking you against each other otherwise. If we took two plumbers in the same city, every improvement we made for one would hurt the other. We do not do that. Your market is exclusively yours for as long as you are a client. That exclusivity is one of the most valuable things we offer — and it is also why spots fill up faster than most people expect.",
  },
  {
    q: "Do you guarantee results?",
    a: "We do not guarantee a specific ranking position — no honest agency can, and anyone who does is lying to you. What we guarantee is this: every tactical lever Google uses to determine map pack rankings will be pulled in your favour, every single week. We document your starting position before we touch anything. We show you the movement every month. If we are not making progress by month 3, we will tell you why and what we are changing — not hide behind a PDF.",
  },
  {
    q: "Can I cancel?",
    a: "Pro and Pro Plus are month-to-month. No contracts, no lock-ins. If you are not seeing progress after 3 months, cancel. We would rather earn your business every month by delivering results than lock you into a contract that protects us instead of you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-dark-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            Questions We Get Every Time
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-dark-text text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-colors ${
                open === i
                  ? "border-accent-green/30 bg-dark-surface"
                  : "border-white/7 bg-dark-surface hover:border-white/15"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-base ${open === i ? "text-accent-green" : "text-dark-text"}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-200 ${open === i ? "rotate-180 text-accent-green" : "text-dark-muted"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-dark-muted leading-relaxed border-t border-white/7 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
