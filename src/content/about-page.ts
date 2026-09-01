export type AboutTimelineMilestone = {
  id: string;
  stage: string;
  title: string;
  description: string;
  links?: { label: string; href: string }[];
};

export const aboutHero = {
  kicker: "About",
  headline: "I like building spaces where people\ndiscover what they can build next.",
  supporting: [
    "I work at the intersection of developer communities, builder ecosystems, and the programs that connect them — on campuses, in open source, and around the people actually doing the building.",
    "Most of that work has taken shape through community building, developer education, and program design, and more recently through HackUnion, an independent ecosystem I keep building and testing in public.",
  ],
};

export const storySectionMeta = {
  number: "01",
  title: "How I Got Here",
  intro:
    "This isn't a resume. It's the progression of how I moved from learning technology on my own toward building the spaces, programs, and communities that help other people do the same.",
};

export const storyTimeline: AboutTimelineMilestone[] = [
  {
    id: "learning-exploring",
    stage: "Learning & Exploring",
    title: "Learning in isolation, and noticing the gap",
    description:
      "Like most people learning technology, it started with courses, tutorials, and self-study. It also came with a familiar gap: learning alone rarely translates into building, collaborating, or knowing where to go next.",
  },
  {
    id: "students-programs",
    stage: "Working With Students & Programs",
    title: "Designing pathways instead of just content",
    description:
      "That gap became the starting point for program work — structuring how students move from exposure to practice, and from practice to real project work, across institutional programs.",
    links: [{ label: "LSA Labs", href: "/work/lsa-labs" }],
  },
  {
    id: "community-building",
    stage: "Community Building",
    title: "Turning participation into something people return to",
    description:
      "From there, the focus shifted to community — creating reasons for people to connect, return, and contribute, instead of gathering people once and hoping they stay.",
    links: [{ label: "Community Work", href: "/work/community-work" }],
  },
  {
    id: "ecosystem-building",
    stage: "Ecosystem Building",
    title: "Connecting institutions, technology, and opportunity",
    description:
      "Community work kept surfacing the same need: connecting people to institutions, technologies, and opportunities that don't naturally talk to each other, through ecosystem and partnership work.",
    links: [{ label: "Ecosystem Partnerships", href: "/work/community-work/ecosystem-partnerships" }],
  },
  {
    id: "building-hackunion",
    stage: "Building HackUnion",
    title: "Building the ecosystem as an independent initiative",
    description:
      "HackUnion is where community, programs, events, and opportunity pathways came together as one connected build — an independent developer ecosystem I keep shaping in public.",
    links: [{ label: "HackUnion", href: "/work/hackunion" }],
  },
  {
    id: "openbuild-developer-programs",
    stage: "OpenBuild Week & Developer Programs",
    title: "Taking builder experiences to campuses and open source",
    description:
      "That ecosystem work extended into campus builder programming and open-source developer education — helping students move from learning technology to using GitHub, collaborating, and contributing.",
    links: [
      { label: "OpenBuild Week", href: "/work/openbuild-week" },
      { label: "Lords Institute × GitHub", href: "/work/lords-github" },
    ],
  },
  {
    id: "what-comes-next",
    stage: "What Comes Next",
    title: "Continuing to build toward developer relations",
    description:
      "Every stage of this has pointed in the same direction: environments where building relationships with developers matters as much as understanding what they need. That's the work I'm building toward next.",
  },
];

export type CareStatement = {
  id: string;
  term: string;
  statement: string;
};

export const careSectionMeta = {
  number: "02",
  title: "The Work I Keep Coming Back To",
};

export const careStatements: CareStatement[] = [
  {
    id: "builders",
    term: "Builders",
    statement: "Helping people move from curiosity to participation.",
  },
  {
    id: "communities",
    term: "Communities",
    statement: "Creating reasons for people to connect, return, and contribute.",
  },
  {
    id: "programs",
    term: "Programs",
    statement: "Designing experiences that create real pathways rather than one-time interactions.",
  },
  {
    id: "ecosystems",
    term: "Ecosystems",
    statement: "Connecting people, institutions, technology, and opportunities.",
  },
];

export type ApproachStep = {
  id: string;
  step: string;
  description: string;
};

export const approachSectionMeta = {
  number: "03",
  title: "My Approach",
  intro:
    "Not a corporate framework — just the working order that community and program work tends to follow, in practice.",
};

export const approachSteps: ApproachStep[] = [
  { id: "listen", step: "Listen", description: "Start with what builders are actually saying, not what a plan assumes." },
  { id: "understand", step: "Understand", description: "Get underneath the request to the real context and constraints." },
  { id: "connect", step: "Connect", description: "Find the people, institutions, and communities who should be in the room." },
  { id: "design", step: "Design", description: "Shape a program or format that fits the audience, not a template." },
  { id: "activate", step: "Activate", description: "Run it in the real world, with real people and real constraints." },
  { id: "enable", step: "Enable", description: "Hand over the tools and ownership so it can keep running." },
  { id: "learn", step: "Learn", description: "Pay attention to what actually happened, not what was planned." },
  { id: "improve", step: "Improve", description: "Carry what worked into the next build, and drop what didn't." },
];

export const gapsSectionMeta = {
  number: "04",
  title: "I Don't Think Good Work Fits Neatly Into One Box.",
  statement:
    "Most of the work behind HackUnion, OpenBuild Week, the Lords Institute × GitHub program, and LSA Labs hasn't lived in a single lane. It's meant moving across community, programs, operations, content, partnerships, events, developer education, and technology — often in the same week, for the same initiative.",
};

export const gapsAreas = [
  "Community",
  "Programs",
  "Operations",
  "Content",
  "Partnerships",
  "Events",
  "Developer Education",
  "Technology",
];

export const forwardSectionMeta = {
  number: "05",
  title: "Looking Forward",
};

export const forwardStatement =
  "I'm interested in environments where building relationships with developers is as important as understanding what they need — where community, programs, and ecosystems are treated as real product surfaces, not side projects.";

export const forwardFocusAreas = [
  "Developer Relations",
  "Developer Communities",
  "Developer Programs",
  "Open Source Ecosystems",
  "Builder Experiences",
  "Ecosystem Partnerships",
];

export const outsideSectionMeta = {
  number: "06",
  title: "Still Learning. Still Building.",
};

export const outsideStatement =
  "Outside of the case studies, most of this is still the same work in a different mode: exploring developer ecosystems, building HackUnion, experimenting through the Playground, and learning through real-world community work. I'm still building — projects, programs, and the next version of all of it.";

export type ExploreCard = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const exploreCards: ExploreCard[] = [
  {
    id: "hackunion",
    title: "HackUnion",
    description: "Ecosystem & community building",
    href: "/work/hackunion",
  },
  {
    id: "openbuild-week",
    title: "OpenBuild Week",
    description: "Campus builder program",
    href: "/work/openbuild-week",
  },
  {
    id: "lords-github",
    title: "Lords Institute × GitHub",
    description: "Open source & developer education",
    href: "/work/lords-github",
  },
  {
    id: "lsa-labs",
    title: "LSA Labs",
    description: "Program design & operations",
    href: "/work/lsa-labs",
  },
];

export const aboutFinalCta = {
  title: "Let's build something useful.",
  copy:
    "I'm interested in working with teams and ecosystems that care about developers, communities, meaningful programs, and creating better pathways for builders.",
};
