export type PositioningPillar = {
  id: string;
  label: string;
  description: string;
};

export const positioningPillars: PositioningPillar[] = [
  {
    id: "communities",
    label: "Communities",
    description: "Creating spaces where builders connect, participate, and keep showing up.",
  },
  {
    id: "programs",
    label: "Programs",
    description: "Designing experiences that help people move from learning to building.",
  },
  {
    id: "ecosystems",
    label: "Ecosystems",
    description: "Connecting communities, institutions, and opportunities into working pathways.",
  },
  {
    id: "developer-experiences",
    label: "Developer Experiences",
    description: "Helping people discover practical routes into technology and contribution.",
  },
];

export type ProcessStage = {
  id: string;
  stage: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    id: "understand",
    stage: "Understand",
    description: "Start with the people, the context, and the gap that actually exists.",
  },
  {
    id: "connect",
    stage: "Connect",
    description: "Find the builders, institutions, and communities who should be in the room.",
  },
  {
    id: "design",
    stage: "Design",
    description: "Shape a format that fits the audience instead of copying a template.",
  },
  {
    id: "activate",
    stage: "Activate",
    description: "Run it in the real world, with real constraints and real participation.",
  },
  {
    id: "enable",
    stage: "Enable",
    description: "Hand over tools, documentation, and ownership so it can run without me.",
  },
  {
    id: "grow",
    stage: "Grow",
    description: "Keep what worked, drop what did not, and build the next loop on top.",
  },
];

export type RealWorldArea = {
  id: string;
  label: string;
  description: string;
  href: string;
};

export const realWorldAreas: RealWorldArea[] = [
  {
    id: "campus-programs",
    label: "Campus Programs",
    description: "Multi-day builder programming designed and delivered on campus.",
    href: "/work/openbuild-week",
  },
  {
    id: "community-activations",
    label: "Community Activations",
    description: "Sessions and activations that turn interest into participation.",
    href: "/work/community-work/developer-events-activations",
  },
  {
    id: "builder-events",
    label: "Builder Events",
    description: "Hands-on formats where people build rather than only watch.",
    href: "/work/community-work/builder-programs",
  },
  {
    id: "open-source",
    label: "Open Source Initiatives",
    description: "Introducing students to GitHub, collaboration, and public workflows.",
    href: "/work/lords-github",
  },
  {
    id: "program-design",
    label: "Program Design",
    description: "Structuring learning experiences and the operations behind them.",
    href: "/work/lsa-labs",
  },
  {
    id: "ecosystem-collaboration",
    label: "Ecosystem Collaboration",
    description: "Partnership work connecting institutions, communities, and opportunities.",
    href: "/work/community-work/ecosystem-partnerships",
  },
];

export type PlaygroundPreview = {
  id: string;
  kicker: string;
  title: string;
  description: string;
};

export const playgroundPreviews: PlaygroundPreview[] = [
  {
    id: "build-connect-ship",
    kicker: "Game 01",
    title: "Build / Connect / Ship",
    description:
      "Move through an ecosystem grid, pick up what you need, and get the thing shipped.",
  },
  {
    id: "build-the-network",
    kicker: "Game 02",
    title: "Build the Network",
    description:
      "Connect builders, communities, programs, and opportunities until the ecosystem comes online.",
  },
];

export type DirectionFocus = {
  id: string;
  label: string;
  description: string;
};

export const directionFocus: DirectionFocus[] = [
  {
    id: "devrel",
    label: "Developer Relations",
    description: "Work that sits close to developers and the products they use.",
  },
  {
    id: "communities",
    label: "Developer Communities",
    description: "Communities built with developers rather than around them.",
  },
  {
    id: "open-source",
    label: "Open Source",
    description: "Lowering the distance between a first commit and real contribution.",
  },
  {
    id: "builder-programs",
    label: "Builder Programs",
    description: "Programs that reward making things, not just attending things.",
  },
  {
    id: "ecosystems",
    label: "Developer Ecosystems",
    description: "Pathways between learning, building, and opportunity.",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    description: "Collaboration across institutions, platforms, and communities.",
  },
];
