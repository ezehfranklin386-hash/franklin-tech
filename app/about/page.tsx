import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The developer behind Franklin Tech. Franklin Eze, full-stack web developer.",
};

const values = [
  "Problem-solving",
  "Reliability",
  "Clear communication",
  "Continuous learning",
  "User-focused development",
];

const approach = [
  {
    title: "Understand the problem",
    text: "Every project starts with the problem. I listen first, ask questions and agree on what success looks like.",
  },
  {
    title: "Plan the structure",
    text: "I map out the pages, the application logic and the data model before writing code, so the build has a clear shape.",
  },
  {
    title: "Build the interface",
    text: "I develop the interface users interact with, focusing on clarity, accessibility and performance.",
  },
  {
    title: "Develop the logic and data",
    text: "I build the application logic and connect the data layer, so the product works behind the scenes.",
  },
  {
    title: "Review and improve",
    text: "I test, refine and document, and keep improving after launch through updates and maintenance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="border-b">
          <div className="bg-grid relative">
            <div className="bg-glow absolute inset-0" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
              <p className="font-mono text-sm text-primary">{"//"} About</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                The developer behind{" "}
                <span className="text-primary">Franklin Tech.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Story + portrait */}
        <section className="border-b">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:py-24">
            <div className="relative h-[480px] sm:h-[560px] lg:h-[640px]">
              <Image
                src="/franklin-portrait.jpg"
                alt="Portrait of Franklin Eze"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed lg:text-lg">
              <p>
                I&rsquo;m Franklin Eze, a full-stack web developer with an
                interest in building useful, reliable and well-designed
                digital products. I work across the front end, back end and
                database layer, bringing the different parts of a web
                application together.
              </p>
              <p className="text-muted-foreground">
                My approach starts with understanding the problem. From there,
                I plan the structure, build the interface, develop the
                application logic and connect the data layer. I value clean
                implementation, usability, clear communication and continuous
                improvement.
              </p>
              <p className="text-muted-foreground">
                Through Franklin Tech, I aim to help people and businesses
                turn ideas into digital experiences that serve a real
                purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Values"
              title="What guides the work."
            />
            <ol className="mt-12">
              {values.map((value, i) => (
                <li
                  key={value}
                  className="grid gap-3 border-t py-5 last:border-b sm:grid-cols-[4rem_1fr] sm:items-baseline"
                >
                  <span className="text-muted-foreground font-mono text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium">{value}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Approach */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Approach"
              title="How a project comes together."
              description="A clear path from the first conversation to a working product."
            />
            <ol className="mt-12">
              {approach.map((item, i) => (
                <li
                  key={item.title}
                  className="grid gap-3 border-t py-6 last:border-b sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline"
                >
                  <span className="text-muted-foreground font-mono text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 py-20 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Next step"
              title="See the work, or start a conversation."
            />
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/portfolio">
                  Explore My Work <ArrowRight />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/contact">
                  Get in touch <ArrowUpRight />
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
