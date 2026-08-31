import type { SelectedWorkMedia } from "@/content/selected-work";

export type CaseStudyPreview = {
  id: "hackunion" | "openbuild-week" | "lords-github-codewave" | "lsa";
  number: string;
  title: string;
  category: string;
  context: string;
  role: string;
  href: string;
  actionLabel: string;
  mediaLabel: string;
  mediaPendingLabel: string;
  media?: SelectedWorkMedia;
};

export const caseStudyPreviews: CaseStudyPreview[] = [
  {
    id: "hackunion",
    number: "01",
    title: "HackUnion",
    category: "Independent ecosystem and community building",
    context:
      "An independent initiative spanning developer community building, builder programs, events, content, and opportunity pathways.",
    role: "Independent builder working across ecosystem and community operations",
    href: "/work",
    actionLabel: "Read case study",
    mediaLabel: "HackUnion / Community",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "openbuild-week",
    number: "02",
    title: "OpenBuild Week",
    category: "Developer program and community execution",
    context:
      "A developer program initiative centered on builder sessions, learning formats, events, and campus/community collaboration.",
    role: "Program and community execution across planning and delivery",
    href: "/work",
    actionLabel: "Read case study",
    mediaLabel: "OpenBuild Week / Campus",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lords-github-codewave",
    number: "03",
    title: "Lords Institute / GitHub / CodeWave Hub",
    category: "Developer education, platform, and community work",
    context:
      "Work across developer education workflows, platform/community initiatives, and workshop-led campus activity.",
    role: "Program contributor across education and community tracks",
    href: "/work",
    actionLabel: "Read case study",
    mediaLabel: "GitHub / Workshops",
    mediaPendingLabel: "Media pending",
  },
  {
    id: "lsa",
    number: "04",
    title: "LSA / LSA Labs / Hack-a-Mini",
    category: "Technical programs and institutional/startup execution",
    context:
      "Execution across technical program operations, institutional initiatives, startup-facing tracks, content adaptation, and community formats.",
    role: "Program operations and execution support across institutional and startup contexts",
    href: "/work",
    actionLabel: "Read case study",
    mediaLabel: "LSA / Programs",
    mediaPendingLabel: "Media pending",
  },
];
