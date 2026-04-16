"use client";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  return (
    <nav>
      <a href="#" className="nav-logo">Map<span>Dominate</span></a>
      <ul className="nav-links">
        <li><a href="#why">Why Us</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <button className="nav-cta" onClick={onContactClick}>Get Free Diagnosis →</button>
    </nav>
  );
}
