export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  featured: boolean;
  link?: string;
  repo?: string;
  accent: string; // gradient used on the card cover
};

// Sample projects — replace with your real work.
export const projects: Project[] = [
  {
    slug: "nebula-analytics",
    title: "Nebula Analytics",
    summary: "Real-time product analytics dashboard with sub-second queries.",
    description:
      "A streaming analytics platform that ingests millions of events per day and renders live dashboards. Built a virtualized chart grid, a query cache layer, and an accessible design system used across the app.",
    year: "2025",
    role: "Lead Frontend",
    tags: ["Next.js", "TypeScript", "WebSockets", "D3"],
    featured: true,
    link: "#",
    repo: "https://github.com/itxhamza",
    accent: "linear-gradient(135deg,#22c55e,#0ea5e9)",
  },
  {
    slug: "orbit-commerce",
    title: "Orbit Commerce",
    summary: "Headless storefront with a 98/100 Lighthouse score.",
    description:
      "Headless e-commerce built for speed — edge-rendered product pages, optimistic cart, and a checkout flow tuned for conversion. Cut Largest Contentful Paint by 62%.",
    year: "2024",
    role: "Full-Stack",
    tags: ["Astro", "Stripe", "Tailwind", "Edge"],
    featured: true,
    link: "#",
    repo: "https://github.com/itxhamza",
    accent: "linear-gradient(135deg,#a855f7,#22c55e)",
  },
  {
    slug: "lumen-ui",
    title: "Lumen UI Kit",
    summary: "Open-source component library with 40+ accessible primitives.",
    description:
      "A design-token-driven component library shipped as an npm package. Fully keyboard navigable, dark-mode native, and documented with live examples.",
    year: "2024",
    role: "Creator",
    tags: ["React", "Radix", "Storybook", "a11y"],
    featured: true,
    repo: "https://github.com/itxhamza",
    accent: "linear-gradient(135deg,#f59e0b,#ef4444)",
  },
  {
    slug: "atlas-maps",
    title: "Atlas Maps",
    summary: "Interactive geospatial explorer for climate datasets.",
    description:
      "A WebGL map that visualizes decades of climate data with smooth pan/zoom and layered overlays. Optimized tile loading and a reduced-motion friendly playback timeline.",
    year: "2023",
    role: "Frontend",
    tags: ["MapLibre", "WebGL", "Vite"],
    featured: false,
    link: "#",
    accent: "linear-gradient(135deg,#0ea5e9,#6366f1)",
  },
  {
    slug: "cadence-cli",
    title: "Cadence CLI",
    summary: "Developer tooling for scaffolding production-ready services.",
    description:
      "A CLI that scaffolds typed API services with tests, CI, and observability baked in. Adopted internally to cut new-service setup from a day to minutes.",
    year: "2023",
    role: "Maintainer",
    tags: ["Node", "TypeScript", "DX"],
    featured: false,
    repo: "https://github.com/itxhamza",
    accent: "linear-gradient(135deg,#14b8a6,#22c55e)",
  },
  {
    slug: "verse-blog",
    title: "Verse",
    summary: "A minimalist writing platform with instant publishing.",
    description:
      "A content platform focused on typography and reading experience. Markdown-first authoring, RSS, and a themeable reader with excellent Core Web Vitals.",
    year: "2022",
    role: "Full-Stack",
    tags: ["Astro", "MDX", "Tailwind"],
    featured: false,
    link: "#",
    accent: "linear-gradient(135deg,#f472b6,#a855f7)",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
