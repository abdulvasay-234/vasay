export type WritingFormat =
  | "ARTICLE"
  | "POST"
  | "GUIDE"
  | "REFLECTION"
  | "ANNOUNCEMENT"
  | "DOCUMENTATION";

export type WritingEntry = {
  id: string;
  featured?: boolean;
  date?: string;
  format?: WritingFormat;
  title: string;
  description: string;
  topic: string;
  platform?: string;
  href?: string;
  isExternal?: boolean;
};

export const writingEntries: WritingEntry[] = [
  {
    id: "featured-writing-pending",
    featured: true,
    title: "Featured writing entry pending",
    description:
      "Reserved for a future long-form piece on developer communication, education, and ecosystem building in practice.",
    topic: "Developer Relations",
  },
  {
    id: "writing-pending-1",
    title: "Writing entry pending",
    description:
      "Reserved for a future note on community-led developer education and practical field execution.",
    topic: "Developer Education",
  },
  {
    id: "writing-pending-2",
    title: "Writing entry pending",
    description:
      "Reserved for a future post on programs, collaboration patterns, and ecosystem workflows.",
    topic: "Programs",
  },
  {
    id: "writing-pending-3",
    title: "Writing entry pending",
    description:
      "Reserved for a future reflection on building experiences across technology and communities.",
    topic: "Ecosystems",
  },
];
