import type { SelectedWorkMedia } from "@/content/selected-work";

export type AboutNarrativeColumn = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type WorkingPrinciple = {
  id: string;
  title: "BUILD" | "CONNECT" | "DOCUMENT" | "EXPERIMENT" | "ADAPT";
  description: string;
};

export const aboutNarrativeColumns: AboutNarrativeColumn[] = [
  {
    id: "who-how",
    heading: "Who I am / how I work",
    paragraphs: [
      "I work across technology and community, designing programs and experiences where developers can learn, build, and connect through practical execution.",
      "Most of my learning comes from shipping, listening, and iterating in real environments instead of treating community work as messaging alone.",
    ],
  },
  {
    id: "care-heading",
    heading: "What I care about / where I am heading",
    paragraphs: [
      "I care about building communities with developers, not just around them, and creating better pathways between institutions, technologies, and opportunities.",
      "HackUnion reflects that direction as an independent build where I keep testing formats, workflows, and community-driven ways of building.",
    ],
  },
];

export const aboutPrinciples: WorkingPrinciple[] = [
  {
    id: "build",
    title: "BUILD",
    description: "Learn by making and shipping.",
  },
  {
    id: "connect",
    title: "CONNECT",
    description: "Bring developers, communities, and opportunities together.",
  },
  {
    id: "document",
    title: "DOCUMENT",
    description: "Turn execution into useful knowledge and content.",
  },
  {
    id: "experiment",
    title: "EXPERIMENT",
    description: "Test programs, formats, and ideas instead of assuming what works.",
  },
  {
    id: "adapt",
    title: "ADAPT",
    description: "Work across different environments, audiences, and constraints.",
  },
];

export const aboutPracticeAreas = [
  "Developer Relations",
  "Community Building",
  "Developer Education",
  "Program Design",
  "Events",
  "Content",
  "Ecosystem Building",
  "Technical Programs",
];

export const aboutForwardFocus =
  "I want to keep building at the intersection of technology, developers, and community through stronger ecosystems, developer education, and independent projects.";

export const aboutPortraitFrame: {
  media?: SelectedWorkMedia;
  label: string;
  pendingLabel: string;
} = {
  label: "PORTRAIT / FIELD NOTE",
  pendingLabel: "Image archive frame",
};
