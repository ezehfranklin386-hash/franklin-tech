"use server";

import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot field hidden from real visitors.
  const website = String(formData.get("website") ?? "").trim();

  // Bots fill the honeypot; pretend success and drop the message.
  if (website) {
    return {
      ok: true,
      message:
        "Thank you for reaching out. Your message has been received. I'll be in touch as soon as possible.",
    };
  }

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!topic) fieldErrors.topic = "Please choose what you need help with.";
  if (!message || message.trim().length < 10) {
    fieldErrors.message = "Please describe your project in a few sentences.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  const payload = {
    name,
    email,
    company,
    topic,
    budget,
    message,
    receivedAt: new Date().toISOString(),
  };

  // Email delivery via SMTP when credentials are configured in .env.
  // Without them, submissions are still stored locally so nothing is lost.
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: site.email || process.env.SMTP_USER,
        replyTo: email,
        subject: `New enquiry from ${name} — ${topic || "website project"}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "—"}`,
          `Topic: ${topic || "—"}`,
          `Budget: ${budget || "—"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });
      return {
        ok: true,
        message:
          "Thank you for reaching out. Your message has been received. I'll be in touch as soon as possible.",
      };
    } catch (err) {
      console.error("Failed to send contact email:", err);
    }
  }

  // Fallback: store locally. Note: local only; not for serverless hosts.
  try {
    const dir = path.join(process.cwd(), "data", "messages");
    await fs.mkdir(dir, { recursive: true });
    const safe = name.replace(/[^a-z0-9]/gi, "-").slice(0, 30);
    const file = path.join(dir, `${Date.now()}-${safe}.json`);
    await fs.writeFile(file, JSON.stringify(payload, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to store contact message:", err);
  }

  return {
    ok: true,
    message:
      "Thank you for reaching out. Your message has been received. I'll be in touch as soon as possible.",
  };
}
