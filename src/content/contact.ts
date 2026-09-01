export type ContactChannelId = "email" | "linkedin" | "github" | "hackunion";

export type ContactChannel = {
  id: ContactChannelId;
  label: "Email" | "LinkedIn" | "GitHub" | "HackUnion";
  description: string;
  href?: string;
  isExternal?: boolean;
  primary?: boolean;
  isPlaceholder?: boolean;
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const contactLinkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const contactGitHub = process.env.NEXT_PUBLIC_GITHUB_URL;

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    description: "The most direct way to reach me about roles, ideas, or collaborations.",
    href: contactEmail ? `mailto:${contactEmail}` : undefined,
    primary: true,
    isPlaceholder: !contactEmail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Professional background, experience, and updates.",
    href: contactLinkedIn,
    isExternal: true,
    isPlaceholder: !contactLinkedIn,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Code, experiments, and open-source contributions.",
    href: contactGitHub,
    isExternal: true,
    isPlaceholder: !contactGitHub,
  },
  {
    id: "hackunion",
    label: "HackUnion",
    description: "The developer ecosystem I'm currently building.",
    href: "https://hackunion.dev",
    isExternal: true,
  },
];


export const collaborationTopics = [
  "Developer Relations",
  "Community Building",
  "Developer Programs",
  "Ecosystem Building",
  "Open Source",
  "Builder Experiences",
  "Partnerships",
];
