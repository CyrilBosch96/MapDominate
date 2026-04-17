"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a website?",
    a: "No. Google's map pack runs entirely on your Google Business Profile — not your website. The Basic and Pro plans work without one. The Pro Plus plan requires a website because it adds full website SEO on top of map pack work.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see ranking movement within 6–12 weeks. The majority are in or near the 3-pack by month 3. We document your starting position on day one so you have a clear before-and-after.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Plumbers and HVAC companies only. We don't work with electricians, roofers, restaurants, gyms, or anyone else. That focus is exactly what makes us good at this — we know your seasonality, your search patterns, and your customers better than any generalist agency ever could.",
  },
  {
    q: "I already have a Google Business Profile. Does that matter?",
    a: "Yes — it means we can start immediately. Most businesses have a profile that's incomplete, miscategorised, or poorly optimised. We audit it and rebuild it correctly. If you don't have one, we set it up as part of onboarding.",
  },
  {
    q: "What is the Friday voice update?",
    a: "Every Friday morning, before you start your day, you receive a 60-second voice message: your current ranking position, what your top competitor did that week, and what we're doing about it next week. No dashboards, no PDFs — a real voice, every week, without exception.",
  },
  {
    q: "Why do you only take one client per city per trade?",
    a: "We can't help two plumbers in the same city rank above each other — that's a conflict of interest. When you sign with us, your market is protected. We will not take a competitor in your city for the same service. Spots fill up because of this, so if your vertical is open, it's worth moving quickly.",
  },
  {
    q: "Do you guarantee results?",
    a: "We don't make guarantees because Google controls the algorithm — and anyone who promises guaranteed rankings is not being straight with you. What we do guarantee: complete transparency, weekly updates, documented tracking from day one, and a proof-first approach where you see exactly where you stand before spending anything.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. We require a 6-month minimum commitment because that's how long real SEO results take to build. After 6 months, you can cancel anytime with 30 days' notice. We've never had a client cancel who reached month 3 and saw their phone starting to ring.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <span className="eyebrow">Questions</span>
        <h2>Frequently Asked.</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
