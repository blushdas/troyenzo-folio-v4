import type { Brand, Project, Social, PortfolioItem } from "@/types";

export const brands: Brand[] = [
  { name: "Saucony", category: "Footwear" },
  { name: "RVCA", category: "Apparel" },
  { name: "Allbirds", category: "Footwear" },
  { name: "Suunto", category: "Outdoor Tech" },
];

export const projects: Project[] = [
  { id: "playdex", title: "Playdex", description: "Gaming discovery & matchmaking platform for SEA", tags: ["Next.js", "PostgreSQL", "Node"], year: "2022", link: "https://playdex.io", status: "live" },
  { id: "playwinpremio", title: "PlayWinPremio", description: "Rewards & gaming promotions platform", tags: ["React", "Firebase"], year: "2023", link: "https://playwinpremio.com", status: "live" },
  { id: "challenz", title: "Challenz", description: "Community challenge & accountability platform", tags: ["React Native", "Supabase"], year: "2023", link: "https://challenz.com", status: "live" },
  { id: "kulay", title: "Kulay", description: "AI-powered color palette & design tool", tags: ["Next.js", "AI"], year: "2024", link: "https://kulay.io", status: "live" },
  { id: "doden", title: "Doden.ai", description: "AI productivity layer for operators", tags: ["Claude API", "Next.js"], year: "2024", link: "https://doden.ai", status: "live" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "z21",
    title: "Z21 Launchpad",
    role: "Team",
    description: "Help founders and teams build 10x AI workflows",
    accent: "var(--accent)",
  },
  {
    id: "frc",
    title: "FRC Manila",
    role: "Co-Founder",
    description: "Connecting founders, entrepreneurs and builders through weekly meetups",
    link: "https://instagram.com/frcmanila",
    accent: "var(--accent2)",
  },
  {
    id: "locked-in",
    title: "Locked in Residency",
    role: "Host",
    description: "AI, co work, lock in, build stuff.",
    accent: "var(--accent)",
  },
];

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/blushdas",
    handle: "@blushdas",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/troyenzo",
    handle: "@troyenzo",
  },
  {
    label: "X",
    href: "https://twitter.com/blushdas",
    handle: "@blushdas",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/troyenzo",
    handle: "@troyenzo",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@troyenzoo",
    handle: "@troyenzoo",
  },
  {
    label: "Email",
    href: "mailto:hello@troyenzo.xyz",
    handle: "hello@troyenzo.xyz",
  },
];
