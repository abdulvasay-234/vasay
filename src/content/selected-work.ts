export type SelectedWorkMedia = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: string;
  objectPosition?: string;
};

export type SelectedWorkItem = {
  id: "hackunion" | "openbuild-week" | "lords-github" | "lsa-labs";
  number: string;
  title: string;
  category: string;
  context: string;
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
    category: "Ecosystem & Community Building",
    context: "An independent build, still running.",
    summary:
      "Community building, builder programs, events, and opportunity pathways run as one independent ecosystem initiative.",
    tags: ["Independent build", "Community", "Ecosystem"],
    href: "/work/hackunion",
    actionLabel: "View case study",
    mediaLabel: "HackUnion / Community",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "openbuild-week",
    number: "02",
    title: "OpenBuild Week",
    category: "Campus Builder Program",
    context: "A week designed to get students building.",
    summary:
      "A campus builder program combining sessions, open source learning, and hands-on formats into one connected week.",
    tags: ["Program", "Events", "Builder sessions"],
    href: "/work/openbuild-week",
    actionLabel: "View case study",
    mediaLabel: "OpenBuild Week / Campus",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lords-github",
    number: "03",
    title: "Lords Institute \u00d7 GitHub",
    category: "Open Source & Developer Education",
    context: "Bringing public workflows onto campus.",
    summary:
      "Introducing students to GitHub, collaboration, and open source practice as a normal part of how they build.",
    tags: ["Open source", "Education", "Platform"],
    href: "/work/lords-github",
    actionLabel: "View case study",
    mediaLabel: "GitHub / Workshops",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lsa-labs",
    number: "04",
    title: "LSA Labs",
    category: "Program Design & Education",
    context: "Structure behind the learning experience.",
    summary:
      "Program design, student learning experiences, institutional collaboration, and the operations that keep them running.",
    tags: ["Program design", "Education", "Operations"],
    href: "/work/lsa-labs",
    actionLabel: "View case study",
    mediaLabel: "LSA Labs / Programs",
    mediaPendingLabel: "Media pending",
  },
];
