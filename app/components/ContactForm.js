"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", company: "", subject: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      setForm(initialForm);
      setStatus("success");
      setFeedback("Thank you! Your message has been sent to Tina.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  const sending = status === "sending";
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} autoComplete="name" maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" maxLength={254} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">Company <span>(optional)</span></label>
        <input id="company" name="company" value={form.company} onChange={handleChange} autoComplete="organization" maxLength={150} />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" value={form.subject} onChange={handleChange} maxLength={150} required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={7} minLength={10} maxLength={5000} required />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>
      <button className="submit-button" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{feedback}</p>
    </form>
  );
}
