"use server";

import { promises as fs } from "fs";
import path from "path";

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

  // TODO: hook up email delivery (Resend, Nodemailer + SMTP, or a database).
  // Until then, submissions are stored in /data/messages so nothing is lost.
  // Note: this folder is local only; on a serverless host it will not persist.
  try {
    const dir = path.join(process.cwd(), "data", "messages");
    await fs.mkdir(dir, { recursive: true });
    const safe = name.replace(/[^a-z0-9]/gi, "-").slice(0, 30);
    const file = path.join(dir, `${Date.now()}-${safe}.json`);
    await fs.writeFile(
      file,
      JSON.stringify(
        {
          name,
          email,
          company,
          topic,
          budget,
          message,
          receivedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      "utf-8"
    );
  } catch (err) {
    console.error("Failed to store contact message:", err);
  }

  return {
    ok: true,
    message:
      "Thank you for reaching out. Your message has been received. I'll be in touch as soon as possible.",
  };
}
