import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid2">
        <div>
          <div className="footer-brand">
            <span className="footer-brand-dot"></span>
            MapDominate
          </div>
          <p className="footer-tagline">Websites and Google Maps visibility for local service businesses.</p>
        </div>
        <div className="footer-col2">
          <div className="footer-col-label">SITE</div>
          <a href="/#why-us">Why Us</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div className="footer-col2">
          <div className="footer-col-label">CONTACT</div>
          <a href="/#audit">Get a Free Audit</a>
          <a href="/contact">Contact</a>
          <a href="/help">Hosting help</a>
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </div>
        <div className="footer-col2">
          <div className="footer-col-label">POLICIES</div>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/refund-policy">Refund &amp; Cancellation</a>
        </div>
      </div>
      <div className="footer-bottom2">
        <span>© 2026 MapDominate, operated by Cyril Savari, India. All rights reserved.</span>
        <nav className="footer-legal" aria-label="Policies">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="/contact">Contact</a>
          <a href="/help">Hosting Help</a>
        </nav>
      </div>
    </footer>
  );
}
