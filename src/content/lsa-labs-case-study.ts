export type LsaLabsFlowStage = {
  title: string;
  description: string;
};

export type LsaLabsContribution = {
  title: string;
  description: string;
};

export type LsaLabsJourneyStep = {
  title: string;
  description: string;
};

export type LsaLabsInsight = {
  number: string;
  text: string;
};

export const lsaLabsMetadata = {
  label: "PROGRAM DESIGN & EDUCATION",
  title: "LSA LABS",
  headline: "Designing structured pathways that help students move from learning to building.",
  shortDescription:
    "LSA Labs was an initiative focused on creating practical learning and project-based experiences for students and institutions. My work involved contributing across program design, technical operations, content adaptation, student engagement and community building.",
  role: "Associate Centre Manager",
  context: "LSA",
  focus: "Program Design • Student Projects • Technical Operations",
  started: "May 2026",
  links: [
    { label: "View work", href: "/work", external: false },
    { label: "Explore community work", href: "/work/community-work", external: false },
  ],
};

export const opportunitySection = {
  number: "01",
  title: "From Learning to Building",
  narrative:
    "The opportunity behind LSA Labs was simple but important: students often had access to learning content, but not always a clear structure for turning that learning into meaningful projects, practice, and applied outcomes.",
  question:
    "How do we design a program that helps students progress from exposure to practice, and from practice to real-world project work?",
  context: [
    "Learning",
    "Practice",
    "Projects",
    "Real-world application",
  ],
};

export const programFlow = {
  number: "02",
  title: "Building a Program for Institutions",
  intro:
    "The LSA Labs model was designed around the needs of institutions and the practical learning journey of students. The structure aimed to turn learning needs into a more visible and usable pathway for project-based growth.",
  stages: [
    {
      title: "Institution",
      description: "Understanding the institution, the student ecosystem, and the learning context.",
    },
    {
      title: "Student Needs",
      description: "Mapping what students actually need in order to learn and build with confidence.",
    },
    {
      title: "Learning Pathway",
      description: "Designing a structured progression that moves from fundamentals toward applied work.",
    },
    {
      title: "Mini Projects",
      description: "Creating smaller practical opportunities to help students test and refine ideas.",
    },
    {
      title: "Major Projects",
      description: "Scaling the learning journey toward larger and more ambitious builds.",
    },
    {
      title: "Build & Showcase",
      description: "Helping students turn project work into visible outcomes they can present and reflect on.",
    },
  ] as LsaLabsFlowStage[],
};

export const journeySteps: LsaLabsJourneyStep[] = [
  {
    title: "Start",
    description: "Students understand the fundamentals and begin to build confidence with the basics.",
  },
  {
    title: "Explore",
    description: "Students experiment with smaller ideas and begin connecting concepts to practical use.",
  },
  {
    title: "Build",
    description: "Students create mini projects that help them apply learning in a focused way.",
  },
  {
    title: "Iterate",
    description: "Students refine their work, test assumptions, and build stronger technical habits.",
  },
  {
    title: "Scale",
    description: "Students move toward larger or more substantial projects that require deeper thinking.",
  },
  {
    title: "Showcase",
    description: "Students present what they have built and make the work more visible to others.",
  },
];

export const contributionAreas: LsaLabsContribution[] = [
  {
    title: "Technical Operations",
    description: "Supporting the technical management and day-to-day functioning of programs and learning operations.",
  },
  {
    title: "Program Execution",
    description: "Helping turn plans and learning structures into real student experiences.",
  },
  {
    title: "Content Adaptation",
    description: "Adapting and organising content according to student needs and program requirements.",
  },
  {
    title: "Institution Collaboration",
    description: "Supporting the model for working with institutes and understanding how programs could be delivered.",
  },
  {
    title: "Community Work",
    description: "Contributing to student engagement and community-building activities.",
  },
  {
    title: "Program Design",
    description: "Designing the structure around mini and major project training.",
  },
];

export const lsaInternals = {
  number: "05",
  title: "Building From the Inside",
  label: "LSA INTERNALS",
  description:
    "Internal initiatives and experiments designed to improve learning, execution and the student experience.",
  note: "More documentation coming soon",
};

export const hackMiniSection = {
  number: "06",
  title: "Hack-a-Mini",
  fields: [
    {
      label: "The Idea",
      value:
        "A learning-oriented format designed to explore how students respond to short, practical problem-solving and project-building experiences.",
    },
    {
      label: "The Format",
      value:
        "A structured participation model intended to give students a focused working experience within a short timeframe.",
    },
    {
      label: "The Experience",
      value:
        "Participants were encouraged to build, test and explore ideas in a way that connected learning with immediate execution.",
    },
    {
      label: "The Learning",
      value:
        "This approach helped highlight how participation, short builds, and structured challenge formats can support student engagement and practical learning.",
    },
  ],
};

export const startupSystem = {
  number: "07",
  title: "More Than One Job Description",
  statement: "In an early-stage environment, building often means working across the gaps.",
  items: [
    "Operations",
    "Programs",
    "Content",
    "Students",
    "Community",
    "Experiments",
  ],
};

export const learnings: LsaLabsInsight[] = [
  {
    number: "01",
    text: "A program only works when the experience is practical for the people going through it.",
  },
  {
    number: "02",
    text: "Students need progression, not just isolated training sessions.",
  },
  {
    number: "03",
    text: "Small projects can create confidence before students attempt larger builds.",
  },
  {
    number: "04",
    text: "Operations and experience design are closely connected.",
  },
  {
    number: "05",
    text: "Working in a startup environment teaches you to understand systems beyond your immediate role.",
  },
];

export const exploreTheWork = {
  title: "Explore More Work",
  items: [
    {
      label: "HACKUNION",
      title: "HackUnion",
      description: "Ecosystem building",
      href: "/work/hackunion",
    },
    {
      label: "OPENBUILD WEEK",
      title: "OpenBuild Week",
      description: "Campus builder program",
      href: "/work/openbuild-week",
    },
    {
      label: "LORDS INSTITUTE × GITHUB",
      title: "Lords Institute × GitHub",
      description: "Open source and developer education",
      href: "/work/lords-github",
    },
  ],
};
