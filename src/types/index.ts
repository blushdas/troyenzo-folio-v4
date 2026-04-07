export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  status: "live" | "building" | "stealth";
};

export type Brand = {
  name: string;
  category: string;
};

export type Race = {
  id: string;
  name: string;
  distance: string;
  location: string;
  date: string;
  time?: string;
  placement?: string;
  status: "completed" | "upcoming";
};

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  role: string;
  description: string;
  link?: string;
  accent: string;
};
