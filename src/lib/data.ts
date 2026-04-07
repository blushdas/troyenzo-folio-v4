import type { Social, PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "z21",
    title: "Z21 Launchpad",
    description: "Leverage AI to 10x your workflows. Ship a full-stack AI product and build in public with accountability.",
    link: "https://z21hq.xyz",
    accent: "var(--accent)",
  },
  {
    id: "frc",
    title: "FRC Manila",
    role: "Co-Founder",
    description: "Where Manila's most ambitious founders, investors, and operators lace up together. Community first, every Saturday at 6AM.",
    link: "https://frc-manila.vercel.app",
    accent: "var(--accent2)",
  },
  {
    id: "locked-in",
    title: "Locked In Residency",
    description: "A curated community for builders who ship. No spectators — just people who lock in and build.",
    link: "https://lockedinresidency.com",
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
