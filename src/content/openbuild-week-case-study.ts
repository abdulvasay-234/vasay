export type OpenBuildWeekStage = {
  title: string;
  description: string;
};

export type OpenBuildWeekExperience = {
  title: string;
  description: string;
};

export type OpenBuildWeekCampus = {
  name: string;
  location: string;
  date: string;
  description: string;
  galleryLabel: string;
  href?: string;
};

export type OpenBuildWeekPartner = {
  name: string;
  description: string;
};

export type OpenBuildWeekRole = {
  title: string;
  description: string;
};

export type OpenBuildWeekOutcome = {
  label: string;
  value: string;
  description: string;
};

export type OpenBuildWeekGalleryItem = {
  label: string;
  title: string;
  tone: string;
};

export const openBuildWeekMetadata = {
  number: "01",
  label: "Builder Program",
  title: "OpenBuild Week",
  headline:
    "Taking builder experiences, communities and opportunities directly to campuses.",
  shortDescription:
    "OpenBuild Week is a campus-focused builder initiative designed to help students move beyond learning in isolation and start connecting with communities, technology ecosystems, opportunities and other builders.",
  category: "Campus Builder Initiative",
  focus: "Community • Open Source • Builders • Opportunities",
  initiative: "HackUnion",
  status: "Active",
  links: [
    { label: "View HackUnion", href: "https://hackunion.dev", external: true },
    { label: "Community Work", href: "/work/community-work", external: false },
  ],
};

export const opportunitySection = {
  number: "01",
  title: "The Opportunity",
  narrative:
    "Students often learn technologies through courses, tutorials and online resources, but many do not know how to enter real developer ecosystems.",
  question: "How do we bring meaningful builder experiences and ecosystem opportunities directly to students?",
  context: [
    "Learning technology",
    "Building projects",
    "Joining communities",
    "Contributing",
    "Discovering opportunities",
  ],
};

export const challengeSection = {
  number: "02",
  title: "The Challenge",
  points: [
    "Students often learn in isolation.",
    "Real-world developer communities can feel difficult to discover.",
    "Open source and ecosystem opportunities are often discovered by chance.",
    "Many students do not have direct access to experienced builders and communities.",
    "Events can become one-time experiences without clear pathways for continued participation.",
  ],
};

export const approachSection = {
  number: "03",
  title: "The OpenBuild Week Approach",
  intro:
    "Rather than waiting for students to discover the ecosystem themselves, OpenBuild Week takes the ecosystem directly to campuses.",
  stages: [
    {
      title: "Connect",
      description: "Students meet builders, communities and ecosystem partners.",
    },
    {
      title: "Learn",
      description: "Students explore technology, open source and real-world developer experiences.",
    },
    {
      title: "Build",
      description: "Students are encouraged to move from learning into creating projects and experimenting.",
    },
    {
      title: "Collaborate",
      description: "Builders connect with peers and discover opportunities to work together.",
    },
    {
      title: "Explore",
      description: "Students discover communities, programs, open source and future opportunities.",
    },
  ] as OpenBuildWeekStage[],
};

export const experienceSection = {
  number: "04",
  title: "Inside OpenBuild Week",
  intro:
    "Each campus activation is designed as a builder experience rather than just a series of talks.",
  cards: [
    {
      title: "Builder Sessions",
      description: "Conversations around building, technology and developer ecosystems.",
    },
    {
      title: "Open Source",
      description: "Introducing students to contribution, collaboration and open source communities.",
    },
    {
      title: "Open Payments",
      description: "Exploring modern payment ecosystems and technology.",
    },
    {
      title: "Digital Forensics",
      description: "Introducing students to real-world technology and security conversations.",
    },
    {
      title: "Networking",
      description: "Helping students meet other builders, speakers and community members.",
    },
    {
      title: "Projects",
      description: "Encouraging participants to turn ideas and learning into things they can build.",
    },
  ] as OpenBuildWeekExperience[],
};

export const campusActivations: OpenBuildWeekCampus[] = [
  {
    name: "Campus Activation",
    location: "[Location]",
    date: "[Event Date]",
    description: "Bringing builders, communities and ecosystem conversations directly to students.",
    galleryLabel: "Photo gallery",
    href: "/work/openbuild-week#gallery",
  },
  {
    name: "Campus Activation",
    location: "[Location]",
    date: "[Event Date]",
    description: "Creating a more direct path from campus learning into builder communities and opportunities.",
    galleryLabel: "Event recap",
    href: "/work/openbuild-week#gallery",
  },
];

export const collaborationSection = {
  title: "Built Through Collaboration",
  description:
    "OpenBuild Week is strengthened through collaboration between communities, institutions and ecosystem partners.",
  partners: [
    {
      name: "HackUnion",
      description: "Community and program ecosystem.",
    },
    {
      name: "GitHub",
      description: "Supporting developer communities and open source learning where applicable.",
    },
    {
      name: "Interledger Foundation",
      description: "Supporting conversations around open payments and the future of interoperable digital payments where applicable.",
    },
  ] as OpenBuildWeekPartner[],
};

export const howIWorkedSection = {
  number: "07",
  title: "Behind the Build",
  cards: [
    {
      title: "Program Design",
      description: "Designing the overall campus experience and builder journey.",
    },
    {
      title: "Campus Outreach",
      description: "Connecting with colleges and institutions to bring the initiative to students.",
    },
    {
      title: "Ecosystem Building",
      description: "Creating relationships with communities, partners and builders.",
    },
    {
      title: "Event Execution",
      description: "Turning program ideas into real campus experiences.",
    },
    {
      title: "Community Engagement",
      description: "Creating opportunities for students to participate, connect and continue beyond the event.",
    },
    {
      title: "Content & Storytelling",
      description: "Capturing and communicating the work, people and experiences around OpenBuild Week.",
    },
  ] as OpenBuildWeekRole[],
};

export const impactSection = {
  number: "08",
  title: "Impact Beyond the Event",
  description:
    "The goal is not simply to organise an event. The goal is to create connections and pathways that continue after the event ends.",
  outcomes: [
    {
      label: "Builders Engaged",
      value: "Growing",
      description: "A growing number of students encounter builder communities and programs through campus activations.",
    },
    {
      label: "Campus Activations",
      value: "Active",
      description: "Activation work remains focused on taking ecosystem experiences directly to students.",
    },
    {
      label: "Communities Connected",
      value: "Across campuses",
      description: "Each activation expands the number of communities and peers students can connect with.",
    },
    {
      label: "Ecosystem Conversations",
      value: "Ongoing",
      description: "Builder conversations continue beyond the event and help students discover more of the ecosystem.",
    },
    {
      label: "Opportunities Discovered",
      value: "Opening",
      description: "Students begin to find more direct pathways into programs, communities and technologies.",
    },
    {
      label: "Projects & Participation",
      value: "Building",
      description: "The work encourages students to move from interest into building and participating publicly.",
    },
  ] as OpenBuildWeekOutcome[],
};

export const gallerySection = {
  number: "09",
  title: "The Builders Behind the Experience",
  items: [
    { label: "Campus Activation", title: "Builder session", tone: "tone-1" },
    { label: "Event Photo", title: "Community gathering", tone: "tone-2" },
    { label: "Student Experience", title: "Open source conversation", tone: "tone-3" },
    { label: "Campus Story", title: "Builder networking", tone: "tone-4" },
    { label: "Program Moment", title: "Collaboration", tone: "tone-5" },
    { label: "Event Recap", title: "Opportunity discovery", tone: "tone-6" },
  ] as OpenBuildWeekGalleryItem[],
};

export const learnings = [
  "Community begins before the event and continues after it.",
  "The best campus programs are designed around what students actually need.",
  "Connections and follow-up opportunities matter as much as the event itself.",
  "Strong ecosystems are built through repeated participation and trust.",
  "Taking opportunities directly to students can reduce the gap between learning and real-world participation.",
];

export const nextSection = {
  number: "11",
  title: "Still Building",
  description:
    "OpenBuild Week continues to explore how campus communities can become stronger entry points into developer ecosystems, open source, collaboration and builder opportunities.",
  tags: [
    "Campus Communities",
    "Builder Programs",
    "Open Source",
    "Developer Ecosystems",
    "Collaboration",
    "Opportunities",
  ],
};

export const exploreTheWork = {
  title: "Explore More Work",
  items: [
    {
      label: "HackUnion",
      title: "HackUnion",
      description: "View the ecosystem case study",
      href: "/work/hackunion",
    },
    {
      label: "Community Work",
      title: "Community Work",
      description: "Explore community experiences",
      href: "/work/community-work",
    },
    {
      label: "Playground",
      title: "Playground",
      description: "Explore interactive experiments",
      href: "/playground",
    },
  ],
};
