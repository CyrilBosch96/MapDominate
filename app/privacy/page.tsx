import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy | MapDominate",
  description: "What information MapDominate collects, why, and how to have it removed.",
  alternates: { canonical: `${BUSINESS.site}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {BUSINESS.name} is operated by {BUSINESS.operator}, {BUSINESS.country}. This page explains what we
        collect and what we do with it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Public business information:</strong> a business&apos;s name, address, phone, website, public
          email and Google reviews summary, taken from public listings such as Google Maps. We use it to decide
          whether we can help and to build a free preview site.
        </li>
        <li>
          <strong>What you send us:</strong> your name, email, phone and messages when you reply, fill in a form or
          buy a service.
        </li>
        <li>
          <strong>Email and preview activity:</strong> our emails contain tracked links, and our preview sites
          record visits (time, approximate location by network, browser and device, and which buttons were used),
          so we know whether a preview was seen.
        </li>
        <li>
          <strong>Payments:</strong> handled by Razorpay. We receive confirmation that you paid and your billing
          details; we never see or store card numbers.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        To contact businesses about our services, build and run the sites we sell, provide support, take payment
        and keep business records. We don&apos;t sell or rent your information to anyone.
      </p>

      <h2>Who else handles it</h2>
      <p>
        Only the services we use to run the business: email hosting, website hosting (Cloudflare, Vercel), our
        customer records (Notion), Google (business listings) and Razorpay (payments). Each handles it under its
        own privacy policy.
      </p>

      <h2>How long we keep it</h2>
      <p>
        For as long as we&apos;re in contact or you&apos;re a customer, and afterwards only as long as needed for
        accounting and legal records.
      </p>

      <h2>Your choices</h2>
      <p>
        Reply &quot;stop&quot; to any email and we won&apos;t email you again. To see, correct or delete what we
        hold about you or your business, email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> and
        we&apos;ll do it within 30 days.
      </p>
    </LegalPage>
  );
}
