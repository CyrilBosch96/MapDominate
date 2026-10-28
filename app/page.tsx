"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Mechanism from "@/components/Mechanism";
import Differentiator from "@/components/Differentiator";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MapDominate",
  url: "https://www.mapdominate.com",
  description:
    "Website design and local SEO agency specializing in fast, conversion-ready websites and Google Business Profile optimization for local service businesses such as landscapers, salons and gyms.",
  areaServed: "United States",
  serviceType: "Website Design & Local SEO",
  priceRange: "$$",
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const glows = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]")).map((el) => ({
      el,
      base: el.style.transform || "",
      speed: parseFloat(el.getAttribute("data-parallax") || "") || 0.1,
    }));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        glows.forEach(({ el, base, speed }) => {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const offset = (viewportCenter - elementCenter) * speed;
          el.style.transform = `${base} translate3d(0, ${offset}px, 0)`;
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    gsap.registerPlugin(ScrollTrigger);
    const triggers: ScrollTrigger[] = [];
    ["gsap-hero-heading", "gsap-problem-heading", "gsap-audit-heading"].forEach((id) => {
      const heading = root.querySelector("#" + id);
      if (!heading) return;
      const words = heading.querySelectorAll("[data-word]");
      if (!words.length) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      }).to(words, {
        color: (i, el) => el.getAttribute("data-word-target"),
        stagger: 0.06,
        ease: "none",
      });
      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={rootRef}>
      <IntroAnimation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar onContactClick={() => setModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setModalOpen(true)} />
        <Problem />
        <Mechanism />
        <Differentiator />
        <Services />
        <Results />
        <Pricing onContactClick={() => setModalOpen(true)} />
        <FAQ />
        <FinalCTA onContactClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
