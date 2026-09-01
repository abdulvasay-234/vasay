export type LordsGithubStage = {
  title: string;
  description: string;
};

export type LordsGithubWorkArea = {
  title: string;
  description: string;
  status?: string;
};

export type LordsGithubJourneyStep = {
  title: string;
  copy: string;
};

export type LordsGithubProof = {
  title: string;
  context: string;
  description: string;
  evidence: string;
  linkLabel: string;
  href: string;
};

export const lordsGithubMetadata = {
  label: "Open Source & Developer Education",
  title: "BUILDING PATHWAYS INTO OPEN SOURCE",
  headline:
    "Helping students move beyond learning technology and toward building, collaboration and contribution.",
  shortDescription:
    "This work focused on helping students understand practical developer workflows in a GitHub ecosystem context, from learning technologies and building projects to collaborating and contributing with more confidence.",
  focus: "Open Source • Developer Education • Student Communities",
  ecosystem: "GitHub",
  context: "Lords Institute of Engineering & Technology",
  status: "Ongoing",
  links: [
    { label: "View GitHub", href: "https://github.com", external: true },
    { label: "View community work", href: "/work/community-work", external: false },
  ],
};

export const startingPointSection = {
  number: "01",
  title: "The Starting Point",
  narrative:
    "Students often gain technical foundations through coursework, tutorials and project building, but the gap between learning code and participating in real developer workflows can remain wide.",
  question: "How do we help students move from learning programming toward using GitHub, collaborating, and understanding how open-source ecosystems actually work?",
  context: [
    "Learning programming",
    "Building projects",
    "Using GitHub",
    "Collaborating",
    "Contributing",
  ],
};

export const approachSection = {
  number: "02",
  title: "From Learning to Contribution",
  stages: [
    {
      title: "Learn",
      description: "Students develop technical foundations and gain comfort with core tools.",
    },
    {
      title: "Build",
      description: "Students apply learning through projects and hands-on practice.",
    },
    {
      title: "Version",
      description: "Students learn practical Git and GitHub workflows for tracking and sharing work.",
    },
    {
      title: "Collaborate",
      description: "Students begin to understand shared development and working with others in public workflows.",
    },
    {
      title: "Contribute",
      description: "Students explore contribution, public work, and the wider open-source ecosystem.",
    },
  ] as LordsGithubStage[],
};

export const workAreas: LordsGithubWorkArea[] = [
  {
    title: "GitHub Education",
    description: "Introducing students to practical GitHub workflows and the role of version control in modern development.",
  },
  {
    title: "Project Collaboration",
    description: "Helping students understand how work can be shared, reviewed, and built collaboratively.",
  },
  {
    title: "Open Source Awareness",
    description: "Creating better awareness of contribution, collaboration, and public developer ecosystems.",
  },
  {
    title: "Developer Portfolios",
    description: "Placeholder: future work to help students make project work more visible and publicly understandable.",
    status: "Placeholder",
  },
  {
    title: "Community Participation",
    description: "Connecting students with developer communities and broader opportunities beyond coursework.",
  },
];

export const builderJourney = [
  {
    title: "Curious",
    copy: "I want to learn development.",
  },
  {
    title: "Learning",
    copy: "Learning languages, tools, and workflows.",
  },
  {
    title: "Building",
    copy: "Creating projects and turning ideas into working code.",
  },
  {
    title: "Sharing",
    copy: "Publishing and documenting work in a way others can understand.",
  },
  {
    title: "Collaborating",
    copy: "Working with peers and understanding shared development processes.",
  },
  {
    title: "Contributing",
    copy: "Exploring open source and public developer participation.",
  },
];

export const proofBlocks: LordsGithubProof[] = [
  {
    title: "GitHub Workflow Session",
    context: "Workshop / educational context",
    description: "Practical exposure to GitHub workflows, project awareness, and collaborative development habits.",
    evidence: "Evidence placeholder",
    linkLabel: "View evidence",
    href: "/work/community-work/open-source-github-programs",
  },
  {
    title: "Student Project Work",
    context: "Project-based learning",
    description: "Examples of students building and presenting software work in a public, learnable format.",
    evidence: "Evidence placeholder",
    linkLabel: "View project context",
    href: "/work/community-work",
  },
  {
    title: "Community-Based Learning",
    context: "Campus ecosystem context",
    description: "Developer education connected to wider participation, peer learning, and community context.",
    evidence: "Evidence placeholder",
    linkLabel: "View community context",
    href: "/work/community-work",
  },
];

export const impactAreas = [
  {
    title: "Public Projects",
    description: "Encouraging builders to share work publicly so it becomes visible, reviewable and more discoverable.",
  },
  {
    title: "Collaboration",
    description: "Helping students understand collaborative development and the value of shared project workflows.",
  },
  {
    title: "Open Source Awareness",
    description: "Introducing clearer pathways into contribution, ecosystem participation, and community learning.",
  },
  {
    title: "Developer Identity",
    description: "Helping students see themselves as builders with practical capabilities, not only as learners.",
  },
];

export const learnings = [
  {
    number: "01",
    text: "Students often need clearer pathways from coursework to real-world development practices.",
  },
  {
    number: "02",
    text: "GitHub becomes more meaningful when it is connected to actual projects and collaborative activity.",
  },
  {
    number: "03",
    text: "Open source feels more approachable when builders see practical entry points and examples.",
  },
  {
    number: "04",
    text: "Public work can help students build confidence and a stronger sense of developer identity.",
  },
];

export const exploreTheWork = {
  title: "Explore More Work",
  items: [
    {
      label: "HackUnion",
      title: "HackUnion",
      description: "Explore the ecosystem case study",
      href: "/work/hackunion",
    },
    {
      label: "OpenBuild Week",
      title: "OpenBuild Week",
      description: "View the builder program case study",
      href: "/work/openbuild-week",
    },
    {
      label: "Community Work",
      title: "Community Work",
      description: "Explore community and ecosystem building",
      href: "/work/community-work",
    },
  ],
};
