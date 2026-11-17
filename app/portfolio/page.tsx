import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects and practical solutions from Franklin Tech, full-stack web development.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="border-b">
          <div className="bg-grid relative">
            <div className="bg-glow absolute inset-0" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
              <p className="font-mono text-sm text-primary">
                {"//"} Portfolio
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Selected projects and{" "}
                <span className="text-primary">practical solutions.</span>
              </h1>
              <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">
                Every project is an opportunity to solve a problem, learn
                something useful and build a better digital experience.
                Explore the work below.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                total={projects.length}
              />
            ))}
            <article className="border-t py-10 last:border-b">
              <p className="text-muted-foreground font-mono text-xs">
                {String(projects.length + 1).padStart(2, "0")} of{" "}
                {String(projects.length + 1).padStart(2, "0")} · next project ·
                open slot
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Your next project could appear here.
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed">
                Have a website, web application or development challenge in
                mind? Let&rsquo;s build something worth showing.
              </p>
              <Button size="sm" className="mt-6 rounded-full" asChild>
                <Link href="/contact">
                  Get in touch <ArrowRight />
                </Link>
              </Button>
            </article>
          </div>
        </section>

        {/* Standards */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="How work is presented"
              title="Honest case studies, real details."
              description="Every project here states what was actually built, my exact role, the technology used and the verified outcome. Personal and learning projects are labelled as such."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
