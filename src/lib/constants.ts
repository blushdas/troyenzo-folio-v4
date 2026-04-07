export const VIDEO_SRC =
  "https://pub-d213b699eec14b34b97b25a8f935bbf8.r2.dev/videos/troy%20showcase.mp4";

export const ANIMATION = {
  DURATION_FAST: 0.3,
  DURATION_BASE: 0.5,
  DURATION_SLOW: 0.7,
  EASE_OUT: [0.16, 1, 0.3, 1] as const,
  STAGGER: 0.15,
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#brands" },
  { label: "Running", href: "#races" },
  { label: "Connect", href: "#connect" },
] as const;
