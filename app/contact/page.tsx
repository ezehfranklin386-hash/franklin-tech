import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you are building. Share a few details and Franklin Tech will get back to you.",
};

const steps = [
  {
    title: "What do you need?",
    text: "A new website, a web application, back-end work, or improvements to an existing site. A few sentences is plenty.",
  },
  {
    title: "Rough budget",
    text: "A range is fine. It helps me suggest the most sensible path, not the most expensive one.",
  },
  {
    title: "Your details",
    text: "Name and email so the reply reaches you. Your details are only used to respond to your enquiry.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="border-b">
          <div className="bg-grid relative">
            <div className="bg-glow absolute inset-0" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
              <p className="font-mono text-sm text-primary">{"//"} Contact</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Tell me what you are{" "}
                <span className="text-primary">building.</span>
              </h1>
              <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">
                Have a website, web application or development challenge in
                mind? Share a few details about what you need. I&rsquo;ll
                review your message and get back to you.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-24">
            {/* Steps */}
            <div>
              <ol>
                {steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="grid gap-3 border-t py-6 last:border-b sm:grid-cols-[4rem_1fr] sm:items-baseline"
                  >
                    <span className="text-muted-foreground font-mono text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">{step.title}</h2>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 border-t pt-6">
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                  Prefer email?
                </p>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary mt-2 inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <Mail className="size-4" /> {site.email}
                  </a>
                ) : null}
              </div>
              <div className="mt-8 border-t pt-6">
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                  Prefer WhatsApp?
                </p>
                <Button
                  size="lg"
                  className="mt-3 w-full rounded-full sm:w-auto"
                  asChild
                >
                  <a
                    href={`${site.whatsapp.link}?text=${encodeURIComponent(
                      "Hi Franklin, I'd like to discuss a project."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> Chat on WhatsApp
                  </a>
                </Button>
                <p className="text-muted-foreground mt-2 text-xs">
                  {site.whatsapp.display}
                </p>
              </div>
            </div>

            {/* Brief form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
