import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development for real-world needs: front end, back end, databases, full-stack applications and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="border-b">
          <div className="bg-grid relative">
            <div className="bg-glow absolute inset-0" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
              <p className="font-mono text-sm text-primary">{"//"} Services</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Full-stack development for{" "}
                <span className="text-primary">real-world needs.</span>
              </h1>
              <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">
                I build and improve websites and web applications, covering
                the interface users interact with and the systems that power
                it.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <ol>
              {services.map((service, i) => (
                <li key={service.id} className="border-t py-8 last:border-b">
                  <div className="grid gap-6 lg:grid-cols-[4rem_1.2fr_1fr_auto] lg:items-baseline">
                    <span className="text-muted-foreground font-mono text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="text-muted-foreground flex items-start gap-2.5"
                        >
                          <span className="text-primary font-mono text-xs">
                            +
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <service.icon
                      className="text-primary hidden size-5 justify-self-end lg:block"
                      aria-hidden
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Not sure what you need?"
              title="Describe the problem, get a sensible path forward."
              description="Clear communication and practical problem-solving. Every project gets a clear plan and honest estimates."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/contact">
                  Start a conversation <ArrowRight />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/portfolio">
                  See the work <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
