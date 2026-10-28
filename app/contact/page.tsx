import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact | MapDominate",
  description: "How to reach MapDominate.",
  alternates: { canonical: `${BUSINESS.site}/contact` },
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact Us">
      <p>
        Questions about a preview site, a purchase, a refund or anything else: email us and we&apos;ll reply within
        2 business days.
      </p>
      <h2>Email</h2>
      <p>
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
      </p>
      <h2>Business</h2>
      <p>
        {BUSINESS.name}, operated by {BUSINESS.operator}
        <br />
        {BUSINESS.address && (
          <>
            {BUSINESS.address}
            <br />
          </>
        )}
        {BUSINESS.country}
      </p>
      <p>
        We work online with businesses in the United States; there is no walk-in office.
      </p>
    </LegalPage>
  );
}
