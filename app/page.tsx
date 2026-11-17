import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroSceneWrapper from "@/components/hero-scene-wrapper";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ideas into digital experiences.",
  description:
    "Franklin Tech is the professional brand of Franklin Eze, a full-stack web developer building modern websites and web applications.",
};

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div className="bg-glow absolute inset-0" />
          <HeroSceneWrapper />
          {/* Portrait: full-bleed across the top on mobile, left half of the
              hero on desktop. Frameless, fading into the background like the
              Soren Hale design. */}
          <div className="relative h-[440px] w-full sm:h-[520px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[46%] lg:max-w-none">
            <Image
              src="/franklin-portrait.jpg"
              alt="Portrait of Franklin Eze"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-contain object-center"
            />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[46%_1fr] lg:items-center lg:pt-28 lg:pb-28">
            <div className="hidden lg:block" aria-hidden />
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm text-primary">
                {"//"} Full-stack developer · React, TypeScript, Three.js
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Ideas into digital{" "}
                <span className="text-primary">experiences.</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                I&rsquo;m Franklin Eze, a full-stack web developer building
                modern websites and web applications. I work across front-end
                interfaces, back-end systems and databases to turn ideas into
                practical digital solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
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
                  <Link href="/contact">Let&apos;s Talk</Link>
                </Button>
              </div>
              <div className="mt-10 w-full max-w-2xl border-t pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-muted-foreground text-xs">01</p>
                    <p className="mt-1.5 text-sm font-medium">Front end</p>
                  </div>
                  <div>
                    <p className="font-mono text-muted-foreground text-xs">02</p>
                    <p className="mt-1.5 text-sm font-medium">Back end</p>
                  </div>
                  <div>
                    <p className="font-mono text-muted-foreground text-xs">03</p>
                    <p className="mt-1.5 text-sm font-medium">Databases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status row */}
        <section className="border-b">
          <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 font-mono text-xs sm:flex-row sm:items-center sm:px-6">
            <span className="sm:w-1/3">
              status:{" "}
              <span className="text-primary">available for new projects</span>
            </span>
            <span className="sm:w-1/3">focus: full-stack web development</span>
            <span className="sm:w-1/3">
              reply: I review every message and get back to you
            </span>
          </div>
        </section>

        {/* Services */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Services"
                title="Web solutions, built from front to back."
              />
              <Link
                href="/services"
                className="text-primary text-sm hover:underline"
              >
                All services &rarr;
              </Link>
            </div>
            <ol className="mt-12">
              {services.map((service, i) => (
                <li
                  key={service.id}
                  className="group border-t py-6 last:border-b"
                >
                  <Link
                    href="/services"
                    className="grid gap-3 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline"
                  >
                    <span className="text-muted-foreground font-mono text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mt-1.5 max-w-2xl text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="text-muted-foreground size-4 justify-self-end sm:self-center" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Selected work */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Selected work"
                title="A look at what I&rsquo;ve built."
                description="Explore selected projects, the problems they address and the technologies used to bring them to life."
              />
              <Link
                href="/portfolio"
                className="text-primary text-sm hover:underline"
              >
                All projects &rarr;
              </Link>
            </div>
            <div className="mt-12">
              {featuredProjects.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                  total={featuredProjects.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="border-b">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-24">
            <div className="relative h-96 sm:h-[480px] lg:h-[560px]">
              <Image
                src="/franklin-portrait.jpg"
                alt="Portrait of Franklin Eze"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="About"
                title="The developer behind Franklin Tech."
                description="A full-stack web developer focused on useful, reliable and well-designed digital products — from understanding the problem to connecting the data layer."
              />
              <Button
                variant="outline"
                className="mt-8 rounded-full"
                asChild
              >
                <Link href="/about">
                  More about me <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <p className="font-mono text-sm text-primary">{"//"} Contact</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Tell me what you are{" "}
              <span className="text-primary">building.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Have an idea or project in mind? Let&rsquo;s discuss what you
              want to build and how I can help.
            </p>
            <Button size="lg" className="mt-8 rounded-full" asChild>
              <Link href="/contact">
                Get in touch <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
