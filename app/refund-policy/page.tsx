import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | MapDominate",
  description: "When MapDominate refunds a payment, and how to cancel a monthly plan.",
  alternates: { canonical: `${BUSINESS.site}/refund-policy` },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <h2>$300 Website Build: 7-day money-back</h2>
      <p>
        Not happy with your website? Ask within <strong>7 days of paying</strong> and you get a{" "}
        <strong>full refund</strong>, no questions asked. Just reply to the email your files came in, or email us.
      </p>

      <h2>Other build fees</h2>
      <ul>
        <li>
          <strong>Before we deliver your site</strong> (put it live for plans we host):{" "}you can cancel and get a
          full refund.
        </li>
        <li>
          <strong>After delivery:</strong>{" "}the build fee is not refundable, because the work has been
          delivered. We&apos;ll still fix anything that doesn&apos;t work as described.
        </li>
      </ul>

      <h2>Monthly fees</h2>
      <p>
        The $300 Website Build has no monthly fee. On plans that have one (hosting and maintenance, or a
        monthly SEO plan) you can cancel it at any time. It stops at
        the end of the month you&apos;ve already paid for. Months already paid are not refunded.
      </p>

      <h2>How to cancel or ask for a refund</h2>
      <p>
        Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> from the address you paid with, with your
        business name. We reply within 2 business days.
      </p>

      <h2>When you get your money</h2>
      <p>
        Approved refunds go back to the card or account you paid with, through Razorpay, within 5–7 business days.
        Your bank may take a few more days to show it.
      </p>
    </LegalPage>
  );
}
