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
    document.body.style.overflow = isOpen ? "hidden" : "";
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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0A0D0C',
    border: '1px solid #1B211F',
    borderRadius: '10px',
    padding: '10px 14px',
    fontSize: '14px',
    color: '#EDF2F0',
    outline: 'none',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11.5px',
    fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 600,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: '#66716D',
    marginBottom: '6px',
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(6,8,7,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <div style={{
        position: 'relative', background: '#101513', border: '1px solid #1B211F',
        borderRadius: '20px', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto',
      }}>
        {/* Header */}
        <div style={{
          position: 'sticky', top: 0, background: '#101513', borderBottom: '1px solid #1B211F',
          padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: 700, fontSize: '20px', color: '#fff', lineHeight: 1.2, marginBottom: '6px' }}>
              Get Your Free Website Audit
            </div>
            <p style={{ fontSize: '13px', color: '#A9B4B0', margin: 0 }}>
              We&apos;ll record a 2-min video showing exactly what your site is costing you.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#A9B4B0', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '4px' }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          {status === "success" ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px', color: '#21E6A8' }}>✓</div>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: 700, fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
                We Got It!
              </div>
              <p style={{ marginBottom: '24px', color: '#A9B4B0' }}>
                We&apos;ll be in touch within 24 hours with your personalized audit video.
              </p>
              <button className="btn-pill-solid" onClick={onClose}>Close →</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input type="text" required value={form.name} placeholder="John Smith"
                    onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Business Name</label>
                  <input type="text" value={form.business} placeholder="Serenity Hair Salon"
                    onChange={(e) => setForm({ ...form, business: e.target.value })} style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" required value={form.email} placeholder="john@serenityhairsalon.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" value={form.phone} placeholder="+1 (555) 000-0000"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Your Business &amp; City</label>
                <textarea rows={3} value={form.message}
                  placeholder="e.g. Hair salon in Austin, TX..."
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }} />
              </div>

              {status === "error" && (
                <p style={{ fontSize: '13px', color: '#ff6b35', background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: '10px', padding: '10px 12px', margin: 0 }}>
                  Something went wrong. Please try again or email hello@mapdominate.com
                </p>
              )}

              <button type="submit" disabled={status === "loading"} className="btn-pill-solid"
                style={{ opacity: status === "loading" ? 0.6 : 1, width: '100%', textAlign: 'center', fontSize: '15px', padding: '14px' }}>
                {status === "loading" ? "Sending..." : "Send My Audit Request →"}
              </button>

              <p style={{ fontSize: '12px', color: '#66716D', textAlign: 'center', margin: 0 }}>
                No spam. We&apos;ll only use your details to send your free audit video.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
