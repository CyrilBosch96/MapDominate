"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Why MapDominate", href: "#why-mapdominate" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Results", href: "#results" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-dark-base border-b border-white/7 shadow-lg shadow-black/30"
          : "bg-dark-base/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-green rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-dark-base" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-dark-text tracking-tight">
              Map<span className="text-accent-green">Dominate</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-dark-muted hover:text-dark-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="bg-accent-green hover:bg-yellow-300 text-dark-base text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get More Calls →
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-dark-muted hover:text-dark-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/7 py-3 pb-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-2 py-2 text-sm font-medium text-dark-muted hover:text-dark-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onContactClick(); }}
              className="mt-3 w-full bg-accent-green text-dark-base text-sm font-bold px-5 py-2.5 rounded-lg"
            >
              Get More Calls →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
