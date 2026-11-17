export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  outcome: string;
  status: "live" | "in-progress" | "personal";
  liveUrl?: string;
  repoUrl?: string;
  /** Screenshot in /public. Omit while a project has no visuals yet. */
  image?: string;
  /**
   * Set to true while details are still being confirmed.
   * The card is shown with an honest "details coming soon" state.
   */
  unconfirmed?: boolean;
};

/**
 * Portfolio projects.
 *
 * Only real work belongs here. Every entry should state what was actually
 * built and what role Franklin played. To add a project, copy the template
 * below and fill in the fields with verified details.
 *
 * Template:
 * {
 *   slug: "project-slug",
 *   title: "Project name",
 *   summary: "One sentence about the project and who it serves.",
 *   problem: "The need or challenge.",
 *   solution: "What was designed or developed.",
 *   role: "Your exact contribution.",
 *   tech: ["Next.js", "TypeScript"],
 *   outcome: "Verified result or current project status.",
 *   status: "live",
 *   liveUrl: "https://...",
 *   repoUrl: "https://github.com/...",
 * },
 */
export const projects: Project[] = [
  {
    slug: "franklin-tech",
    title: "Franklin Tech",
    summary:
      "This portfolio website: a dark, Three.js-powered site built with Next.js, Tailwind CSS and shadcn/ui.",
    problem:
      "A professional online home for the Franklin Tech brand, showing services, work and a working contact flow.",
    solution:
      "A custom Next.js app with a 3D hero scene, responsive layouts, accessible components and a server-side contact form.",
    role: "Design and full-stack development: pages, components, 3D scene, styling and form handling.",
    tech: ["Next.js", "React", "TypeScript", "Three.js", "Tailwind CSS", "shadcn/ui"],
    outcome: "Live and actively maintained.",
    status: "personal",
    image: "/screenshots/franklin-tech-v2.png",
  },
  {
    slug: "ginterior",
    title: "G Interior",
    summary:
      "Website for G Interior, a Lagos-based property sales, lettings and interior design business serving clients in Nigeria and the diaspora.",
    problem:
      "The business needed a professional web presence to showcase properties, services and contact options in one place.",
    solution:
      "A responsive marketing site with property search, featured listings, service information and clear contact routes.",
    role: "Design and development of the website.",
    tech: [],
    outcome: "Live and serving the business at ginterior.com.ng.",
    status: "live",
    liveUrl: "https://ginterior.com.ng",
    image: "/screenshots/ginterior.jpg",
  },
];
