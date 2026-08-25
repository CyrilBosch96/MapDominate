import { RevealGroup, RevealItem } from "./Reveal";

const services = [
  { title: "Custom Website Build", desc: "Fast, mobile-first, built to convert visitors into calls and bookings." },
  { title: "Headless WordPress Setup", desc: "A modern, fast front-end connected to WordPress on the back end, so you can keep publishing without a developer." },
  { title: "Local SEO", desc: "On-page and technical SEO so your site shows up when people search in your area." },
  { title: "Google Business Profile Optimization", desc: "Every field, category, and service area dialed in the way Google rewards." },
  { title: "Service-Area Post Scheduling", desc: "Recurring, location-targeted posts that keep your profile active and locally relevant." },
  { title: "Headless CRM Access", desc: "Manage leads and content from one place, without needing your own tech team." },
];

export default function Services() {
  return (
    <div id="services">
      <div className="services-inner">
        <div className="services-heading-wrap">
          <h2>Everything your business needs to get found — and get called.</h2>
        </div>
        <RevealGroup className="services-grid2">
          {services.map((svc) => (
            <RevealItem key={svc.title} className="service-card2">
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
