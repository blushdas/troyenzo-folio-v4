export const ANIMATION = {
  DURATION_FAST: 0.3,
  DURATION_BASE: 0.5,
  DURATION_SLOW: 0.7,
  EASE_OUT: [0.16, 1, 0.3, 1] as const,
  STAGGER: 0.15,
} as const;

export const SCENE = {
  PARTICLE_COUNT: 1200,
  PARTICLE_SPREAD: 12,
  PARTICLE_SIZE: 0.015,
  CAMERA_LERP: 0.05,
  ROTATION_SPEED: 0.003,
  DPR: [1, 1.5] as [number, number],
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#brands" },
  { label: "Running", href: "#races" },
  { label: "Connect", href: "#connect" },
] as const;
