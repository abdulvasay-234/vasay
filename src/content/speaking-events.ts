import type { SelectedWorkMedia } from "@/content/selected-work";

export type EventParticipationRole =
  | "ORGANIZED"
  | "SPEAKER"
  | "WORKSHOP"
  | "FACILITATOR"
  | "COMMUNITY"
  | "PROGRAM";

export type SpeakingEvidence = {
  label: string;
  href?: string;
  isExternal?: boolean;
};

export type SpeakingEventEntry = {
  id: string;
  featured?: boolean;
  eventName?: string;
  eventType?: string;
  date?: string;
  location?: string;
  topic?: string;
  role?: EventParticipationRole;
  audience?: string;
  organization?: string;
  shortDescription?: string;
  href?: string;
  isExternal?: boolean;
  media?: SelectedWorkMedia;
  evidence?: SpeakingEvidence[];
  mediaLabel: string;
  mediaPendingLabel: string;
};

export const featuredSpeakingEvent: SpeakingEventEntry = {
  id: "featured-archive-frame",
  featured: true,
  shortDescription:
    "This space captures formats and places where I work directly with developers and communities, with records added only after verification.",
  mediaLabel: "SPEAKING & EVENTS / FIELD RECORD",
  mediaPendingLabel: "Evidence archive frame",
};

export const speakingEventArchive: SpeakingEventEntry[] = [];

export const speakingParticipationModes: EventParticipationRole[] = [
  "ORGANIZED",
  "SPEAKER",
  "WORKSHOP",
  "FACILITATOR",
  "COMMUNITY",
  "PROGRAM",
];

export const speakingFieldSignals = [
  "Events",
  "Workshops",
  "Builder Sessions",
  "Community",
  "Programs",
];
