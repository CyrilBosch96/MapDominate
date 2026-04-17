"use client";

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps) {
  return (
    <section id="pricing">
      <div className="container">
        <span className="eyebrow">Founding Client Pricing</span>
        <h2>First 4 Clients Only.<br />Price Goes Up After That.</h2>
        <p style={{ maxWidth: '560px', fontSize: '17px' }}>
          We&apos;re taking on our first 4 clients at a founding rate. Once those spots are filled,
          prices return to normal — no exceptions.
        </p>

        {/* Founding badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          background: 'rgba(232,255,71,0.08)', border: '1px solid rgba(232,255,71,0.25)',
          borderRadius: '6px', padding: '12px 20px', marginBottom: '48px',
          marginTop: '8px',
        }}>
          <span style={{ fontSize: '20px' }}>🔒</span>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--white)' }}>
            <strong style={{ color: 'var(--accent)' }}>4 founding spots available.</strong>{' '}
            When they&apos;re gone, the discounts are gone permanently.
          </p>
        </div>

        <div className="pricing-grid">

          {/* GBP SETUP */}
          <div className="pricing-card">
            <div className="pricing-plan">GBP Done-For-You</div>
            <div className="pricing-price"><sup>$</sup>500</div>
            <div className="pricing-cadence">one-time · no monthly fee</div>
            <div className="pricing-setup">Same price — already a strong offer</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Full GBP audit and optimisation</li>
              <li>All categories, services, and service areas set up</li>
              <li>Citation audit — find inconsistencies</li>
              <li>10–15 strategic Q&As seeded into your profile</li>
              <li>Competitor snapshot — see how you compare</li>
              <li>1-hour strategy call</li>
              <li>8-week check-in call</li>
              <li className="dim">Call tracking number</li>
              <li className="dim">Weekly management</li>
              <li className="dim">Review automation</li>
            </ul>
            <button className="btn-outline" onClick={onContactClick}>Claim Your Spot →</button>
          </div>

          {/* LOCAL SEO MONTHLY */}
          <div className="pricing-card featured">
            <div className="featured-tag">Most Popular</div>
            <div className="pricing-plan">Local SEO Monthly</div>

            {/* Founding price */}
            <div style={{ marginBottom: '4px' }}>
              <div className="pricing-price"><sup>$</sup>600</div>
              <div className="pricing-cadence">first month · then $1,000/mo</div>
            </div>

            {/* Savings callout */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.2)',
              borderRadius: '4px', padding: '4px 10px', marginBottom: '12px',
            }}>
              <span style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--teal)', letterSpacing: '.08em' }}>
                SAVE $400 — founding rate
              </span>
            </div>

            {/* Normal price strikethrough */}
            <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--off)', marginBottom: '20px', textDecoration: 'line-through' }}>
              Normal price: $1,000 first month
            </div>

            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Everything in GBP Done-For-You</li>
              <li>Dedicated call tracking number</li>
              <li>Weekly GBP posts published for you</li>
              <li>Automated review SMS — sent 48h after every job</li>
              <li>50+ directory citation building</li>
              <li>Weekly rank tracking report</li>
              <li>Competitor gap analysis</li>
              <li>Monthly 30-minute strategy call</li>
              <li>Negative review monitoring + response draft in 24h</li>
              <li>Friday voice update — every week, without fail</li>
            </ul>
            <button className="btn-primary" onClick={onContactClick}>Claim Your Founding Spot →</button>
          </div>

          {/* LOCAL SEO PREPAID */}
          <div className="pricing-card">
            <div className="pricing-plan">Local SEO Prepaid</div>

            <div style={{ marginBottom: '4px' }}>
              <div className="pricing-price"><sup>$</sup>2,400</div>
              <div className="pricing-cadence">4 months upfront · best value</div>
            </div>

            {/* Savings callout */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(232,255,71,0.08)', border: '1px solid rgba(232,255,71,0.2)',
              borderRadius: '4px', padding: '4px 10px', marginBottom: '12px',
            }}>
              <span style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '.08em' }}>
                SAVE $1,600 — founding rate
              </span>
            </div>

            {/* Normal price strikethrough */}
            <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--off)', marginBottom: '20px', textDecoration: 'line-through' }}>
              Normal price: $4,000 for 4 months
            </div>

            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Everything in Local SEO Monthly</li>
              <li>4 months locked in at founding rate</li>
              <li>Priority onboarding — we start within 48h</li>
              <li>$600/mo effective rate vs $1,000/mo after</li>
              <li>Results documented from day one</li>
              <li>After 4 months, continue at $1,000/mo or cancel</li>
            </ul>
            <button className="btn-outline" onClick={onContactClick}>Claim Your Founding Spot →</button>
          </div>

        </div>

        {/* Comparison table */}
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>GBP Setup</th>
              <th className="col-featured">SEO Monthly</th>
              <th>SEO Prepaid</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>GBP Setup &amp; Optimisation</td><td><span className="col-check">✓</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Dedicated Call Tracking Number</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Weekly GBP Posts</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Automated Review SMS System</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Citation Building (50+ directories)</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Weekly Rank Tracking</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Friday Voice Update</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Competitor Gap Monitoring</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-check">✓</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Priority Onboarding (48h start)</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-cross">–</span></td><td><span className="col-check">✓</span></td></tr>
            <tr>
              <td style={{ fontWeight: 600, color: 'var(--white)' }}>Founding Price</td>
              <td>$500 once</td>
              <td className="col-featured" style={{ fontWeight: 600, color: 'var(--accent)' }}>$600 mo 1<br /><span style={{ fontSize: '11px', fontWeight: 400 }}>then $1,000/mo</span></td>
              <td style={{ fontWeight: 600, color: 'var(--accent)' }}>$2,400 total<br /><span style={{ fontSize: '11px', fontWeight: 400, color: 'var(--off)' }}>($600/mo × 4)</span></td>
            </tr>
            <tr style={{ opacity: 0.4 }}>
              <td style={{ fontSize: '12px' }}>Normal Price (after 4 clients)</td>
              <td style={{ fontSize: '12px', textDecoration: 'line-through' }}>$500</td>
              <td className="col-featured" style={{ fontSize: '12px', textDecoration: 'line-through' }}>$1,000 mo 1</td>
              <td style={{ fontSize: '12px', textDecoration: 'line-through' }}>$4,000 total</td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  );
}
