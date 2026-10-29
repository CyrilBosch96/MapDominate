import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Put Your Website Online | MapDominate",
  description: "Step-by-step: host the website MapDominate built for you, free, on your own domain.",
  alternates: { canonical: `${BUSINESS.site}/help` },
};

export default function HelpPage() {
  return (
    <LegalPage title="Put Your Website Online">
      <p>
        Your website is a small folder of files. Putting it online takes about 20 minutes and costs nothing beyond
        your domain name. Follow the steps below, or{" "}
        {BUSINESS.setupCallUrl ? (
          <a href={BUSINESS.setupCallUrl}>book a free setup call</a>
        ) : (
          <a href={`mailto:${BUSINESS.email}?subject=Setup%20call`}>ask us for a free setup call</a>
        )}{" "}
        and we&apos;ll do it with you.
      </p>

      {BUSINESS.hostingVideoUrl && (
        <div style={{ position: "relative", paddingTop: "56.25%", margin: "32px 0" }}>
          <iframe
            src={BUSINESS.hostingVideoUrl}
            title="How to put your website online"
            allow="fullscreen; picture-in-picture"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
          />
        </div>
      )}

      <h2>What you need</h2>
      <ul>
        <li><strong>Your site files:</strong> the .zip we emailed you when your website was ready.</li>
        <li>
          <strong>A domain name</strong>{" "}(like yourbusiness.com). If you don&apos;t have one, buy it from any
          domain company, such as GoDaddy, Namecheap, Squarespace or Cloudflare. It&apos;s usually $10–20 a year.
        </li>
        <li><strong>A free Netlify account</strong> to host the site. Sign up at netlify.com.</li>
      </ul>

      <h2>Step 1: Put the site on Netlify</h2>
      <ol>
        <li>Unzip the file we sent you. You&apos;ll get a folder with an <em>index.html</em> file inside.</li>
        <li>Log in to Netlify and choose <strong>Add new project</strong> (on some accounts: <strong>Add new site</strong>), then <strong>Deploy manually</strong>.</li>
        <li>Drag the whole folder onto the page. After a few seconds Netlify shows your site at an address ending in <em>.netlify.app</em>.</li>
        <li>Open that address and check everything looks right.</li>
      </ol>

      <h2>Step 2: Connect your domain</h2>
      <ol>
        <li>In Netlify, open your project, go to <strong>Domain management</strong> and choose <strong>Add a domain</strong>. Type your domain.</li>
        <li>
          Netlify then shows the DNS records to add, usually an <strong>A</strong> record for yourbusiness.com and a{" "}
          <strong>CNAME</strong> record for www.yourbusiness.com. Keep that page open.
        </li>
        <li>Log in where you bought your domain, open its DNS settings (see below) and add exactly the records Netlify showed you.</li>
        <li>
          <strong>Don&apos;t delete your other records</strong>, especially <strong>MX</strong> records: those run
          your business email.
        </li>
      </ol>

      <h3>Where the DNS settings are</h3>
      <ul>
        <li><strong>GoDaddy:</strong> My Products → your domain → DNS.</li>
        <li><strong>Namecheap:</strong> Domain List → Manage → Advanced DNS.</li>
        <li><strong>Squarespace</strong> (including former Google Domains): Domains → your domain → DNS.</li>
        <li><strong>Cloudflare:</strong> your domain → DNS → Records. Set the new records to &quot;DNS only&quot; (grey cloud).</li>
      </ul>
      <p>Menus move around now and then. If you can&apos;t find it, look for &quot;DNS&quot; or &quot;Manage DNS&quot;.</p>

      <h2>Step 3: Wait, then check</h2>
      <p>
        DNS changes usually work within an hour, and occasionally take up to 48 hours. Netlify then turns on the
        secure padlock (https) by itself. Visit yourbusiness.com: your new site should be there.
      </p>

      <h2>Stuck?</h2>
      <p>
        {BUSINESS.setupCallUrl ? (
          <a href={BUSINESS.setupCallUrl}>Book a free setup call</a>
        ) : (
          <a href={`mailto:${BUSINESS.email}?subject=Setup%20call`}>Email us for a free setup call</a>
        )}{" "}
        and we&apos;ll get it online with you, or email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
      </p>
    </LegalPage>
  );
}
