import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  personal: "Personal project",
};

export function ProjectCard({
  project,
  index = 0,
  total = 1,
}: {
  project: Project;
  index?: number;
  total?: number;
}) {
  return (
    <article className="grid gap-8 border-t py-10 last:border-b lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        <p className="text-muted-foreground font-mono text-xs">
          {String(index + 1).padStart(2, "0")} of{" "}
          {String(total).padStart(2, "0")} · {project.title} ·{" "}
          {statusLabel[project.status]}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {project.summary}
        </p>
        <div className="mt-5 space-y-1.5 text-sm leading-relaxed">
          <p>
            <span className="text-muted-foreground">Problem — </span>
            {project.problem}
          </p>
          <p>
            <span className="text-muted-foreground">Solution — </span>
            {project.solution}
          </p>
          <p>
            <span className="text-muted-foreground">Outcome — </span>
            {project.outcome}
          </p>
        </div>
        {project.tech.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border-primary/30 bg-primary/5 text-primary font-mono rounded-full border px-2.5 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {project.unconfirmed ? (
          <p className="text-primary/80 mt-4 font-mono text-xs">
            {"//"} case study coming once details are confirmed
          </p>
        ) : null}
        {project.liveUrl || project.repoUrl ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button size="sm" className="rounded-full" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site <ArrowUpRight />
                </a>
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source <ArrowUpRight />
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="overflow-hidden rounded-xl border">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover object-top"
          />
        ) : (
          <div className="bg-card flex aspect-[4/3] w-full items-center justify-center">
            <p className="text-muted-foreground font-mono text-xs">
              {"//"} screenshot coming soon
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
