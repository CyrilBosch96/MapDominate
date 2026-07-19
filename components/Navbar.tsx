"use client";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <a href="#" className="nav-logo2">
          <span className="nav-logo-dot"></span>
          MapDominate
        </a>
        <ul className="nav-links2">
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className="btn-pill-solid" onClick={onContactClick}>Get Free Website Audit →</button>
      </div>
    </div>
  );
}
