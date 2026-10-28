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
      <h2>Website build fee</h2>
      <ul>
        <li>
          <strong>Before your site goes live:</strong>{" "}you can cancel and get a full refund of the build fee. Just
          email us.
        </li>
        <li>
          <strong>After your site goes live:</strong>{" "}the build fee is not refundable, because the work has been
          delivered. We&apos;ll still fix anything that doesn&apos;t work as described.
        </li>
      </ul>

      <h2>Monthly fees</h2>
      <p>
        You can cancel any monthly fee (hosting and maintenance, or a monthly SEO plan) at any time. It stops at
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
