export type CommunityApproachCard = {
  title: string;
  description: string;
};

export type CommunityProjectCard = {
  category: string;
  title: string;
  description: string;
  href: string;
};

export type CommunityImpactCard = {
  label: string;
  description: string;
};

export type CommunityValueCard = {
  quote: string;
};

export const communityWorkMetadata = {
  label: "Community / Ecosystem Work",
  title: "COMMUNITY WORK",
  headline:
    "Building communities is not about gathering people.\nIt is about creating reasons for people to stay, participate, build, and grow.",
  shortDescription:
    "My work focuses on developer communities, builder ecosystems, campus engagement, open source participation, and creating meaningful pathways for people to move from learning to contributing.",
  focus: "Community • Ecosystem • Developer Programs",
  approach: "Build → Connect → Enable → Grow",
  status: "Ongoing",
  links: [{ label: "Explore the work", href: "/work/community-work#work" }],
};

export const communityApproachCards: CommunityApproachCard[] = [
  {
    title: "Understand",
    description: "Listen to what builders actually need.",
  },
  {
    title: "Connect",
    description: "Create meaningful connections between people and opportunities.",
  },
  {
    title: "Enable",
    description: "Give people spaces, resources, and opportunities to participate.",
  },
  {
    title: "Grow",
    description: "Build systems that allow communities to continue beyond individual events.",
  },
];

export const communityProjects: CommunityProjectCard[] = [
  {
    category: "Builder Program",
    title: "OpenBuild Week",
    description: "Bringing builder experiences, ecosystem conversations, and community participation directly to campuses.",
    href: "/work/community-work/openbuild-week",
  },
  {
    category: "Campus Strategy",
    title: "Campus Community Building",
    description: "Helping students move from learning in isolation into active, repeatable community participation.",
    href: "/work/community-work/campus-community-building",
  },
  {
    category: "Open Source",
    title: "Open Source & GitHub Programs",
    description: "Creating learning pathways and participation opportunities around contribution, collaboration, and open ecosystems.",
    href: "/work/community-work/open-source-github-programs",
  },
  {
    category: "Events",
    title: "Developer Events & Activations",
    description: "Designing and delivering events that create momentum, connection, and follow-up participation.",
    href: "/work/community-work/developer-events-activations",
  },
  {
    category: "Programs",
    title: "Builder Programs",
    description: "Structuring experiences that help people build confidence, skills, and long-term engagement.",
    href: "/work/community-work/builder-programs",
  },
  {
    category: "Partnerships",
    title: "Ecosystem Partnerships",
    description: "Building relationships across communities, institutions, and technology ecosystems to widen participation.",
    href: "/work/community-work/ecosystem-partnerships",
  },
];

export const communityImpactCards: CommunityImpactCard[] = [
  { label: "Builders Reached", description: "Students and builders connected to new communities and pathways." },
  { label: "Campuses Activated", description: "Campus programs designed to bring ecosystem experiences closer to students." },
  { label: "Communities Connected", description: "Relationships formed across participants, builders, institutions, and communities." },
  { label: "Programs Designed", description: "Structured experiences created to support learning, participation, and growth." },
  { label: "Partnerships Built", description: "Collaborations that strengthen access to communities and opportunities." },
  { label: "Opportunities Created", description: "Clearer entry points into contribution, community involvement, and ecosystem participation." },
];

export const communityFlow = [
  "Research",
  "Community Insights",
  "Program Design",
  "Partnerships",
  "Activation",
  "Builder Participation",
  "Follow-up Opportunities",
  "Long-term Community Growth",
];

export const communityValues = [
  "Communities should create participation, not just attendance.",
  "Events should lead somewhere.",
  "Builders need pathways, not just information.",
  "The best ecosystems make opportunities easier to discover.",
  "Growth happens when people have a reason to return.",
];

export const communityFocusTags = [
  "Developer Communities",
  "Open Source",
  "Campus Ecosystems",
  "Builder Programs",
  "Developer Relations",
  "Partnerships",
  "Community Strategy",
];

export const communityExploreItems = [
  {
    label: "HackUnion",
    title: "HackUnion",
    description: "Explore the case study",
    href: "/work/hackunion",
  },
  {
    label: "Playground",
    title: "Playground",
    description: "Interactive ideas and experiments",
    href: "/playground",
  },
  {
    label: "About My Work",
    title: "About",
    description: "Learn about my approach",
    href: "/about",
  },
];
