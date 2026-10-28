// Who MapDominate is, in one place: the policy pages, the contact page and
// the footer all read from here. The address must match the Razorpay KYC
// (Razorpay checks it on the Contact page before enabling payments).
export const BUSINESS = {
  name: "MapDominate",
  operator: "Cyril Savari",
  email: "cyril@mapdominate.com",
  // Empty = the Contact page shows no address line. Fill in before the
  // Razorpay international-payments review.
  address: "",
  country: "India",
  site: "https://www.mapdominate.com",
  policiesUpdated: "October 29, 2026",
};
