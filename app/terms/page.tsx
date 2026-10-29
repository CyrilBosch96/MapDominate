import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service | MapDominate",
  description: "The terms for MapDominate's website design, hosting and local SEO services.",
  alternates: { canonical: `${BUSINESS.site}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These terms cover the services {BUSINESS.name} provides. {BUSINESS.name} is operated by{" "}
        {BUSINESS.operator}, {BUSINESS.country}{" "}
        (&quot;we&quot;, &quot;us&quot;). By paying for a service you
        agree to them. Questions: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
      </p>

      <h2>What we sell</h2>
      <p>
        We design, build and host websites for local service businesses, and offer local SEO and Google
        Business Profile work. Each plan, its price and what it includes are listed on our{" "}
        <a href="/#pricing">pricing section</a>, or in the offer we send you.
      </p>
      <ul>
        <li>
          <strong>Website Build ($300)</strong> is a one-time payment. You get the finished site&apos;s files and host
          them yourself on your own domain. Our free <a href="/help">hosting guide</a> walks you through it, and you
          can book a free setup call if you get stuck. There is no monthly fee.
        </li>
        <li><strong>Other builds</strong> (such as Website + SEO) are a one-time fee plus a monthly fee for hosting and maintenance, as listed.</li>
        <li><strong>Monthly plans</strong> are billed every month until you cancel.</li>
      </ul>

      <h2>Free preview sites</h2>
      <p>
        We sometimes build a free preview website for a business before it has asked us to, and email the owner
        a link. A preview is free, there is no obligation to buy it, and it is taken down automatically after 7
        days unless you buy it. Reply &quot;stop&quot; to any of our emails and we won&apos;t contact you again.
      </p>

      <h2>Payment</h2>
      <p>
        Prices are in US dollars. Payments are processed securely by Razorpay; we never see or store your card
        details. A build starts once the one-time fee is paid. Monthly fees are charged in advance for each month.
      </p>

      <h2>Delivery</h2>
      <p>
        This is a digital service; nothing is shipped. For a Website Build, we email you the site&apos;s files and a
        link to the hosting guide after payment (most within 1–2 weeks). Before we send the files you can ask for reasonable changes to the text, photos and contact
        details. For plans we host, we email you when your site is live.
      </p>

      <h2>Ownership</h2>
      <p>
        Once the build fee is paid, the content and design of your site are yours. You supply, or give us
        permission to use, your business name, logo, photos and text, and confirm you have the right to use them.
        Once you host a Website Build yourself, keeping it online (your domain and hosting account) is up to you.
        For plans we host: if you stop paying for hosting, we take the site offline, and on request we&apos;ll send
        you its files so you can host it elsewhere.
      </p>

      <h2>Cancellation and refunds</h2>
      <p>
        You can cancel a monthly fee at any time. Refunds of the build fee are covered by our{" "}
        <a href="/refund-policy">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>What we don&apos;t promise</h2>
      <p>
        We work hard to get you more calls and better visibility, but we can&apos;t guarantee search rankings,
        call volumes or revenue: Google and your customers decide those. Our total liability for any claim is
        limited to the amount you paid us in the 3 months before the claim.
      </p>

      <h2>Changes and law</h2>
      <p>
        We may update these terms; the date at the top shows the latest version. These terms are governed by the
        laws of India.
      </p>
    </LegalPage>
  );
}
