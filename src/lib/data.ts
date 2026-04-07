import type { Social, PortfolioItem } from "@/types";

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
