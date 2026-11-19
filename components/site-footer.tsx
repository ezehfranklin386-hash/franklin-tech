"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div className="space-y-5">
          <p className="text-2xl font-semibold tracking-tight">
            Full-stack web developer.
          </p>
          {site.email ? (
            <p className="space-y-1">
              <span className="text-muted-foreground text-sm">Write to me</span>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">
              Business email is added before launch.
            </p>
          )}
          <p className="text-muted-foreground flex items-center gap-2.5 text-sm">
            <span className="bg-primary size-2 rounded-full" aria-hidden />
            Available for new projects
          </p>
          <p className="text-sm">
            <a
              href={`${site.whatsapp.link}?text=${encodeURIComponent(
                "Hi Franklin, I'd like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              WhatsApp: {site.whatsapp.display}
            </a>
          </p>
        </div>

        <div>
          <p className="text-muted-foreground mb-4 text-xs uppercase tracking-[0.2em]">
            Site
          </p>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-muted-foreground mb-4 text-xs uppercase tracking-[0.2em]">
            Services
          </p>
          <ul className="space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-muted-foreground mb-4 text-xs uppercase tracking-[0.2em]">
            Projects
          </p>
          <ul className="space-y-2.5 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href="/portfolio"
                  className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  {project.title} <ArrowUpRight className="size-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year ?? 2026} Franklin Tech. All rights reserved.</p>
          <p>Built with Next.js, React and Three.js</p>
        </div>
      </div>

      <div className="overflow-hidden border-t px-4 sm:px-6" aria-hidden>
        <p className="mx-auto max-w-6xl py-2 text-[clamp(3rem,14vw,11rem)] leading-none font-bold tracking-tighter whitespace-nowrap text-foreground/10 select-none">
          FRANKLIN TECH
        </p>
      </div>
    </footer>
  );
}
