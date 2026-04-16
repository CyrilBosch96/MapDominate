"use client";

import { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-surface border border-white/10 rounded-2xl shadow-2xl shadow-black/50 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-dark-surface border-b border-white/7 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-dark-text">Book a Free Strategy Call</h2>
            <p className="text-sm text-dark-muted">
              15 minutes. We&apos;ll show you where you rank and how to reach the top 3.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-dark-muted hover:text-dark-text transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-teal/20">
                <svg className="w-8 h-8 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">Message Received!</h3>
              <p className="text-dark-muted mb-6">
                We&apos;ll be in touch within 24 hours to schedule your free strategy call.
              </p>
              <button
                onClick={onClose}
                className="bg-accent-green text-dark-base px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-1">
                    Your Name <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-dark-base border border-white/10 rounded-lg px-3 py-2.5 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-dark-base border border-white/10 rounded-lg px-3 py-2.5 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green/50 transition-colors"
                    placeholder="Smith Plumbing Co."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">
                  Email Address <span className="text-accent-red">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-dark-base border border-white/10 rounded-lg px-3 py-2.5 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green/50 transition-colors"
                  placeholder="john@smithplumbing.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-dark-base border border-white/10 rounded-lg px-3 py-2.5 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green/50 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">
                  What service do you offer? Tell us about your business.
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-dark-base border border-white/10 rounded-lg px-3 py-2.5 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green/50 transition-colors resize-none"
                  placeholder="e.g. I'm a plumber in Manchester serving residential customers..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-accent-red bg-accent-red/10 border border-accent-red/20 px-3 py-2 rounded-lg">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent-green hover:bg-yellow-300 disabled:opacity-50 text-dark-base font-black py-3.5 rounded-lg transition-colors text-base"
              >
                {status === "loading" ? "Sending..." : "Book My Free Strategy Call →"}
              </button>

              <p className="text-xs text-dark-muted text-center">
                No spam. We&apos;ll only use your details to get in touch about your free call.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
