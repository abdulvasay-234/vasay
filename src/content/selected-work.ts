export type SelectedWorkMedia = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: string;
  objectPosition?: string;
};

export type SelectedWorkItem = {
  id: "hackunion" | "openbuild-week" | "lords-github-codewave" | "lsa";
  number: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  href: string;
  actionLabel: string;
  mediaLabel: string;
  mediaPendingLabel: string;
  media?: SelectedWorkMedia;
};

export const selectedWorkItems: SelectedWorkItem[] = [
  {
    id: "hackunion",
    number: "01",
    title: "HackUnion",
    category: "Independent developer ecosystem and community building",
    summary:
      "A flagship independent build focused on developers, builder communities, and ecosystem growth.",
    tags: ["Independent build", "Community", "Ecosystem"],
    href: "/work",
    actionLabel: "View case study",
    mediaLabel: "HackUnion / Community",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "openbuild-week",
    number: "02",
    title: "OpenBuild Week",
    category: "Developer program, community, and event execution",
    summary:
      "Program and event work centered on builder sessions, learning experiences, and community collaboration.",
    tags: ["Program", "Events", "Builder sessions"],
    href: "/work",
    actionLabel: "View project",
    mediaLabel: "OpenBuild Week / Campus",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lords-github-codewave",
    number: "03",
    title: "Lords Institute / GitHub / CodeWave Hub",
    category: "Developer platform, education, and community work",
    summary:
      "Foundation work across developer platforms, education, and community initiatives.",
    tags: ["Platform", "Education", "Community"],
    href: "/work",
    actionLabel: "View work",
    mediaLabel: "GitHub / Workshops",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lsa",
    number: "04",
    title: "LSA",
    category: "Technical programs, institutional initiatives, operations, and community",
    summary:
      "Professional program and operations experience connected to technical and community-focused initiatives.",
    tags: ["Programs", "Operations", "Institutional"],
    href: "/work",
    actionLabel: "View work",
    mediaLabel: "LSA / Programs",
    mediaPendingLabel: "Media pending",
  },
];
