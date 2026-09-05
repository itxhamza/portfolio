// Central site config — edit these values to personalize the portfolio.
export const site = {
  name: "Hamza Javed",
  initials: "HJ",
  role: "Full-Stack Developer",
  tagline: "I design and build fast, accessible web products.",
  location: "Available worldwide · Remote",
  email: "itxhamzajaved@gmail.com",
  status: "Open to new projects",
  description:
    "Full-stack developer specializing in modern web apps — clean architecture, delightful UI, and performance that holds up in production.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/itxhamza", handle: "@itxhamza" },
  { label: "LinkedIn", href: "#", handle: "in/hamza-javed" },
  { label: "Email", href: "mailto:itxhamzajaved@gmail.com", handle: "itxhamzajaved@gmail.com" },
] as const;
