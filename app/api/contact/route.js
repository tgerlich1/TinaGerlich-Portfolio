import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value) => (typeof value === "string" ? value.trim() : "");
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const email = clean(body.email);
    const company = clean(body.company);
    const subject = clean(body.subject);
    const message = clean(body.message);

    if (clean(body.website)) return NextResponse.json({ ok: true });
    if (!name || !email || !subject || !message) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    if (!EMAIL_PATTERN.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (name.length > 100 || email.length > 254 || company.length > 150 || subject.length > 150 || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please check the field lengths and try again." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Contact form email environment variables are not configured.");
      return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
    }

    const safe = {
      name: escapeHtml(name), email: escapeHtml(email), company: escapeHtml(company || "Not provided"),
      subject: escapeHtml(subject), message: escapeHtml(message).replaceAll("\n", "<br />"),
    };
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail, to: [toEmail], reply_to: email, subject: `Portfolio contact: ${subject}`,
        html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company}</p><p><strong>Subject:</strong> ${safe.subject}</p><p><strong>Message:</strong><br />${safe.message}</p>`,
      }),
    });
    if (!resendResponse.ok) {
      console.error("Resend rejected contact form email:", resendResponse.status, await resendResponse.text());
      return NextResponse.json({ error: "Your message could not be sent. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
