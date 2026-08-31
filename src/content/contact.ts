export type ContactChannelId = "email" | "linkedin" | "github" | "hackunion";

export type ContactChannel = {
  id: ContactChannelId;
  label: "Email" | "LinkedIn" | "GitHub" | "HackUnion";
  href?: string;
  isExternal?: boolean;
  primary?: boolean;
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const contactLinkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const contactGitHub = process.env.NEXT_PUBLIC_GITHUB_URL;

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    href: contactEmail ? `mailto:${contactEmail}` : undefined,
    primary: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contactLinkedIn,
    isExternal: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: contactGitHub,
    isExternal: true,
  },
  {
    id: "hackunion",
    label: "HackUnion",
    href: "/work",
  },
];

export const collaborationTopics = [
  "Developer Relations",
  "Community",
  "Developer Education",
  "Programs",
  "Ecosystems",
  "Independent Building",
];
