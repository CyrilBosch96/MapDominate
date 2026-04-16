"use client";

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps) {
  return (
    <section id="pricing">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h2>Simple, Honest Pricing.<br />No Surprises.</h2>
        <p style={{ maxWidth: '520px', fontSize: '17px' }}>
          Three plans built around one goal — getting your phone to ring more.
        </p>

        <div className="pricing-grid">

          {/* BASIC */}
          <div className="pricing-card">
            <div className="pricing-plan">Basic Pack</div>
            <div className="pricing-price"><sup>$</sup>500</div>
            <div className="pricing-cadence">one-time setup · you run it</div>
            <div className="pricing-setup">+ $0/month</div>
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
            <button className="btn-outline" onClick={onContactClick}>Get Started →</button>
          </div>

          {/* PRO */}
          <div className="pricing-card featured">
            <div className="featured-tag">Most Popular</div>
            <div className="pricing-plan">Pro Pack</div>
            <div className="pricing-price"><sup>$</sup>1,000</div>
            <div className="pricing-cadence">per month · done for you</div>
            <div className="pricing-setup">+ $500 one-time setup</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Everything in Basic</li>
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
            <button className="btn-primary" onClick={onContactClick}>Get the Pro Pack →</button>
          </div>

          {/* PRO PLUS */}
          <div className="pricing-card">
            <div className="pricing-plan">Pro Plus Pack</div>
            <div className="pricing-price"><sup>$</sup>1,500</div>
            <div className="pricing-cadence">per month · Maps + website</div>
            <div className="pricing-setup">+ $500 one-time setup</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Everything in Pro</li>
              <li>2 SEO blog articles published per week</li>
              <li>Location pages for every city and neighbourhood</li>
              <li>Google Search Console setup and tracking</li>
              <li>Backlink outreach from relevant websites</li>
              <li>Technical SEO audit</li>
              <li>LinkedIn and Instagram content scheduling</li>
              <li>Full combined monthly report — Maps + website</li>
              <li style={{ color: 'var(--off)', fontSize: '13px' }}>Requires an existing website</li>
            </ul>
            <button className="btn-outline" onClick={onContactClick}>Get Started →</button>
          </div>

        </div>

        <div className="exclusivity-bar">
          <div className="exclusivity-icon">🔒</div>
          <p>
            <strong>One client per trade per city.</strong> If we already have a plumber in your city,
            we won&apos;t take another. Your market is protected the moment you sign — and that&apos;s why
            spots fill up faster than most people expect.
          </p>
        </div>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th className="col-featured">Pro</th>
              <th>Pro Plus</th>
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
            <tr><td>Website SEO &amp; Blog Content</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-cross">–</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Location Pages</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-cross">–</span></td><td><span className="col-check">✓</span></td></tr>
            <tr><td>Backlink Building</td><td><span className="col-cross">–</span></td><td className="col-featured"><span className="col-cross">–</span></td><td><span className="col-check">✓</span></td></tr>
            <tr>
              <td style={{ fontWeight: 600, color: 'var(--white)' }}>Price</td>
              <td>$500 once</td>
              <td className="col-featured" style={{ fontWeight: 600, color: 'var(--accent)' }}>$1,000/mo</td>
              <td>$1,500/mo</td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  );
}
