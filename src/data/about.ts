export const stats = [
  { value: "6+", label: "Years building" },
  { value: "40+", label: "Projects shipped" },
  { value: "20+", label: "Happy clients" },
  { value: "∞", label: "Cups of coffee" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Astro", "Vue", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL", "Redis"],
  },
  {
    group: "Platform",
    items: ["Docker", "AWS", "Vercel", "CI/CD", "Edge Functions", "Playwright"],
  },
  {
    group: "Craft",
    items: ["Design Systems", "Accessibility", "Performance", "Motion", "DX"],
  },
];

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Developer",
    org: "Independent / Freelance",
    detail:
      "Partnering with startups to design and ship production web apps — from architecture and design systems to launch and performance tuning.",
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    org: "Product Studio",
    detail:
      "Led the front-end for a multi-tenant SaaS platform. Built the component library, cut bundle size by 45%, and drove accessibility to WCAG AA.",
  },
  {
    period: "2019 — 2021",
    role: "Web Developer",
    org: "Agency",
    detail:
      "Delivered marketing sites and web apps for a range of clients, focusing on responsive design, SEO, and Core Web Vitals.",
  },
];

export const values = [
  {
    title: "Performance by default",
    body: "Fast is a feature. I budget for it from the first commit — lazy loading, edge rendering, and metrics that stay green.",
  },
  {
    title: "Accessible, always",
    body: "Keyboard navigation, real contrast, and semantic markup aren't extras. They're the baseline for good software.",
  },
  {
    title: "Design meets code",
    body: "I sweat the details — spacing, motion, and micro-interactions — so products feel considered, not assembled.",
  },
];
