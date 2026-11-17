import {
  LayoutTemplate,
  Server,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "front-end",
    title: "Front-end development",
    description:
      "Responsive, accessible and intuitive interfaces that help visitors and users complete tasks with clarity.",
    points: [
      "Page layouts and reusable components",
      "Interactions and motion",
      "Performance-focused implementation",
    ],
    icon: LayoutTemplate,
  },
  {
    id: "back-end",
    title: "Back-end development",
    description:
      "Server-side functionality that supports application workflows, business rules, authentication and integrations.",
    points: [
      "Application logic and APIs",
      "Authentication and authorisation",
      "Third-party integrations",
    ],
    icon: Server,
  },
  {
    id: "database",
    title: "Database design and integration",
    description:
      "Structured data storage and database integration designed around the application's requirements.",
    points: [
      "Schema and data modelling",
      "Consistency and security",
      "Maintainable data access",
    ],
    icon: Database,
  },
  {
    id: "full-stack",
    title: "Full-stack web applications",
    description:
      "End-to-end development that connects the user interface, application logic, APIs and database into one working solution.",
    points: [
      "One team for the whole stack",
      "Connected front end, APIs and data",
      "Built to ship and to maintain",
    ],
    icon: Layers,
  },
  {
    id: "maintenance",
    title: "Website maintenance and improvement",
    description:
      "Updates, bug fixes, refinements and improvements to existing websites and web applications.",
    points: [
      "Bug fixes and updates",
      "Refinements and new features",
      "Performance and accessibility",
    ],
    icon: Wrench,
  },
];
