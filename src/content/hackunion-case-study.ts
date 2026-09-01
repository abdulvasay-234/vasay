export type HackUnionSection = {
  id: string;
  number: string;
  title: string;
  content?: string;
};

export type HackUnionPillar = {
  title: string;
  description: string;
};

export type HackUnionTimeline = {
  stage: string;
  description: string;
};

export type HackUnionWorkingArea = {
  title: string;
  description: string;
};

export type HackUnionInsight = {
  number: string;
  text: string;
};

export type HackUnionFeaturedWork = {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  href?: string;
  actionLabel: string;
};

export const hackunionMetadata = {
  number: "01",
  label: "FLAGSHIP WORK",
  title: "HackUnion",
  headline:
    "Building spaces where builders connect, learn and turn ideas into action.",
  shortDescription:
    "An independent initiative spanning developer community building, builder programs, events, content, and opportunity pathways.",
  category: "Developer Community / Ecosystem",
  focus: "Community • Builders • Programs • Events",
  role: "Founder / Community & Ecosystem Building",
  status: "Active",
  links: [
    { label: "Visit HackUnion", href: "https://hackunion.dev", external: true },
    { label: "View GitHub", href: "https://github.com/hackunion", external: true },
  ],
};

export const startingPointSection = {
  number: "01",
  title: "The Starting Point",
  narrative:
    "Students often learn technology in isolation—acquiring knowledge through courses, tutorials, and self-study. But learning alone is incomplete.",
  question: "How do you create more meaningful paths from learning to building?",
  context: [
    "Students often lack spaces to meet other builders and collaborate.",
    "Real projects and applied learning remain distant from formal education.",
    "Discovery of opportunities, open source, and developer ecosystems happens by chance, not by design.",
    "The gap between learning and active participation in developer communities remains wide.",
  ],
};

export const whatWeBuiltPillars: HackUnionPillar[] = [
  {
    title: "Community",
    description: "Connecting builders and creating spaces for people to learn and collaborate.",
  },
  {
    title: "Events",
    description: "Bringing people together through workshops, sessions and builder experiences.",
  },
  {
    title: "Programs",
    description:
      "Creating structured opportunities that help people move from participation to active building.",
  },
  {
    title: "Projects",
    description: "Encouraging builders to create, share and work on real ideas.",
  },
  {
    title: "Opportunities",
    description: "Connecting people with ecosystems, organizations and opportunities.",
  },
];

export const timelineStages: HackUnionTimeline[] = [
  {
    stage: "Start",
    description: "The beginning of the community and the initial focus on bringing builders together.",
  },
  {
    stage: "Connect",
    description: "Building relationships with students, communities and developer ecosystems.",
  },
  {
    stage: "Create",
    description: "Expanding into events, builder activities, projects and programs.",
  },
  {
    stage: "Grow",
    description: "Creating more structured opportunities and ecosystem collaborations.",
  },
];

export const workingAreas: HackUnionWorkingArea[] = [
  {
    title: "Program Design",
    description: "Designing experiences and initiatives around what builders actually need.",
  },
  {
    title: "Community Building",
    description: "Creating spaces for people to connect, participate and contribute.",
  },
  {
    title: "Ecosystem Development",
    description: "Building relationships between builders, communities, institutions and partners.",
  },
  {
    title: "Execution",
    description: "Turning ideas into real events, programs and builder experiences.",
  },
];

export const featuredWork: HackUnionFeaturedWork[] = [
  {
    id: "openbuild-week",
    category: "Builder Program",
    title: "OpenBuild Week",
    description: "A structured program bringing builders together for sessions, learning and collaboration.",
    status: "Active",
    actionLabel: "View case study",
    href: "/work/openbuild-week",
  },
  {
    id: "builder-programs",
    category: "Community Program",
    title: "Builder Programs",
    description:
      "Structured initiatives helping developers move from learning to building and contributing.",
    status: "Active",
    actionLabel: "View details",
  },
  {
    id: "community-events",
    category: "Events",
    title: "Community Events",
    description: "Regular builder gatherings, workshops and collaborative working sessions.",
    status: "Active",
    actionLabel: "View details",
  },
  {
    id: "campus-activations",
    category: "Education",
    title: "Campus Activations",
    description: "Bringing builder community experiences to educational institutions.",
    status: "Active",
    actionLabel: "View details",
  },
];

export const impactOutcomes = {
  title: "Impact & Outcomes",
  description:
    "The value of the work was not only in event attendance or program activity, but in creating more accessible paths for people to connect, participate, and keep moving forward together.",
  outcomes: [
    {
      title: "Clearer entry points",
      description:
        "People had a more direct way into the ecosystem, without needing to know the right people or stumble across the right opportunity by chance.",
    },
    {
      title: "Community momentum",
      description:
        "One-off interactions began to feel connected, creating a more coherent sense of community rather than isolated moments of participation.",
    },
    {
      title: "Better participation patterns",
      description:
        "Builders had more repeatable ways to learn, contribute, and stay engaged, which made the ecosystem feel more sustainable over time.",
    },
    {
      title: "Stronger opportunity flow",
      description:
        "Programs, events, and community touchpoints became easier to connect to real opportunities, helping people move from exploration into action.",
    },
  ],
};

export const ecosystemModel = {
  title: "The Ecosystem Model",
  description: "A connected flow showing how builders move through learning, connection, building, sharing, and growth.",
  stages: ["Learn", "Connect", "Build", "Share", "Grow"],
};

export const learnings: HackUnionInsight[] = [
  {
    number: "01",
    text: "Community activity and community growth are not the same thing.",
  },
  {
    number: "02",
    text: "The best programs start by understanding what builders actually need.",
  },
  {
    number: "03",
    text: "Events create momentum, but systems create continuity.",
  },
  {
    number: "04",
    text: "Opportunities become more valuable when communities are prepared to use them.",
  },
];

export const currentDirection = {
  title: "Current Direction",
  description:
    "The work continues to explore how communities, programs and ecosystem partnerships can create more meaningful opportunities for builders.",
  areas: [
    "Builder programs",
    "Open source participation",
    "Campus ecosystems",
    "Developer communities",
    "Partnerships",
    "Opportunities for builders",
  ],
};

export const exploreTheWork = {
  title: "Explore the Work",
  sections: [
    {
      label: "Builder Program",
      title: "OpenBuild Week",
      description: "View the program",
      href: "/work/openbuild-week",
    },
    {
      label: "Community Building",
      title: "Community Work",
      description: "View events",
      href: "/work/community-work",
    },
    {
      label: "Ecosystem Thinking",
      title: "Playground",
      description: "Explore how I think about ecosystems",
      href: "/playground",
    },
  ],
};
