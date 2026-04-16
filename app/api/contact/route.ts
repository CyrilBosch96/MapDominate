import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, business, message } = body;

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Log the lead (replace with your email/CRM integration)
  console.log("New lead from MapDominate website:", {
    name,
    email,
    phone,
    business,
    message,
    timestamp: new Date().toISOString(),
  });

  // TODO: Connect your email service here.
  // Option A — Resend (https://resend.com):
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "leads@mapdominate.com",
  //     to: "your@email.com",
  //     subject: `New lead: ${name} — ${business}`,
  //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nMessage: ${message}`,
  //   });
  //
  // Option B — Nodemailer with SMTP:
  //   const transporter = nodemailer.createTransport({ ... });
  //   await transporter.sendMail({ ... });

  return Response.json({ success: true }, { status: 200 });
}
