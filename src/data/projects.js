
const projects = [
  {
    slug: "careerbrain",
    number: "01",
    title: "Career Brain",
    category: "Full-Stack Career Intelligence Platform",

    shortDescription:
      "A full-stack career intelligence platform connecting job seekers and employers through AI-assisted job matching, application tracking, and real-time collaborative workspaces.",

    overview:
      "Career Brain is a career intelligence platform with dedicated experiences for job seekers and employers. Job seekers can create professional profiles, discover matched opportunities, track applications, and collaborate in private workspaces. Employers can publish jobs, review candidates, evaluate skill-match scores, and manage recruitment decisions.",

    role: "Full-Stack Developer & Team Lead",
    organization: "TechTalks",
    team: "6-member development team",
    status: "Completed",
    period: "Jun 2026 – Aug 2026",

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Realtime",
      "Supabase Storage",
      "Git",
      "GitHub",
      "Jira",
      "Notion",
    ],

    responsibilities: [
      "Led a six-member development team, coordinating sprint tasks, project documentation, and development activities using Jira and Notion.",

      "Established the team's Git and GitHub workflow, including feature branching, pull requests, code reviews, and merge practices.",

      "Developed a real-time collaborative workspace with task management, team chat, file sharing, and scheduling functionality.",

      "Implemented member-level authorization using PostgreSQL Row Level Security across 21 database tables.",

      "Architected authentication and secure file-storage functionality using private Supabase Storage, JWT verification, and Row Level Security.",

      "Contributed to full-stack application functionality supporting job seekers, employers, applications, and collaborative workspaces.",
    ],

    engineeringHighlights: [
      {
        title: "Technical Leadership",
        description:
          "Led a six-member development team, coordinated sprint delivery, and established collaborative Git workflows with pull requests and code reviews.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Built a collaborative workspace combining task boards, team chat, file sharing, and scheduling using Supabase Realtime.",
      },
      {
        title: "Database Security",
        description:
          "Implemented member-level access controls through Row Level Security across 21 PostgreSQL database tables.",
      },
      {
        title: "Secure File Management",
        description:
          "Designed authentication and secure file access using private Supabase Storage, JWT verification, and authorization policies.",
      },
    ],

    metrics: [
      { value: "6", label: "Team members" },
      { value: "21", label: "Database tables" },
      { value: "Real-time", label: "Collaboration" },
    ],

    links: {
      github: "https://github.com/DimaNemer/CareerBrain",
      live: "https://career-brain-ten.vercel.app/",
    },
  },

  {
    slug: "cybergame",
    number: "02",
    title: "CyberGame",
    category: "Cybersecurity Learning Application",

    shortDescription:
      "A mobile cybersecurity learning application featuring eight interactive games powered by a shared game engine and a security-focused backend.",

    overview:
      "CyberGame is a mobile cybersecurity learning application developed for HTP Consultancy. It combines eight interactive educational games with a centralized game engine, scoring systems, timers, tutorials, glossaries, and real-time features. The application uses Supabase and PostgreSQL with layered security controls to protect user information and sensitive operations.",

    role: "Software Developer",
    organization: "HTP Consultancy Ltd.",
    team: "Contract project",
    status: "Completed",
    period: "Mar 2026 – Sep 2026",

    stack: [
      "React Native",
      "Expo",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Realtime",
      "PostgreSQL RPC",
      "Row Level Security",
      "Git",
      "GitHub",
    ],

    responsibilities: [
      "Developed eight interactive cybersecurity learning games using React Native, Expo, Supabase, and PostgreSQL.",

      "Architected a centralized game engine supporting scoring, timers, audio, tutorials, glossaries, and multiple gameplay mechanics.",

      "Designed the game architecture so new learning experiences could be introduced through database configuration instead of duplicated game logic.",

      "Designed a 12-table PostgreSQL database with Row Level Security policies and server-side database functions.",

      "Integrated Supabase Authentication, Realtime subscriptions, and database functions across dashboard, leaderboard, profile, and messaging features.",

      "Implemented layered security controls including input validation, rate limiting, authorization, and server-side operations.",

      "Managed dependency security using GitHub Dependabot, reducing alerts from 44 to 7 and eliminating all Critical issues while maintaining Expo SDK compatibility.",
    ],

    engineeringHighlights: [
      {
        title: "Reusable Game Engine",
        description:
          "Designed a shared game engine supporting eight interactive cybersecurity games with reusable scoring, timing, audio, and learning mechanics.",
      },
      {
        title: "Security Architecture",
        description:
          "Implemented layered security using authentication, Row Level Security, PostgreSQL functions, input validation, and server-side rate limiting.",
      },
      {
        title: "Database & Realtime",
        description:
          "Designed a 12-table PostgreSQL database and integrated authentication, realtime subscriptions, and database functions across application features.",
      },
      {
        title: "Dependency Security",
        description:
          "Reduced GitHub Dependabot alerts from 44 to 7 and eliminated all Critical issues while preserving Expo SDK compatibility.",
      },
    ],

    metrics: [
      { value: "8", label: "Interactive games" },
      { value: "12", label: "Database tables" },
      { value: "44 → 7", label: "Security alerts" },
    ],

    links: {
      github: "https://github.com/DimaNemer/CyberGame",
      live: "",
    },
  },

  {
    slug: "htp-consultancy",
    number: "03",
    title: "HTP Consultancy",
    category: "Production Business Website",

    shortDescription:
      "A six-page production website for a UK cybersecurity consultancy, featuring responsive interfaces, reusable components, and an integrated contact workflow.",

    overview:
      "Designed, developed, and deployed the production website for HTP Consultancy, a UK-based cybersecurity consultancy. The website presents the company's services through responsive layouts, reusable components, and a contact workflow integrated with Resend. Production delivery included deployment and custom-domain DNS and SSL configuration.",

    role: "Software Developer",
    organization: "HTP Consultancy Ltd.",
    team: "Contract project",
    status: "Live",
    period: "Mar 2026 – Sep 2026",

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Resend",
      "Vercel",
      "DNS",
      "SSL",
    ],

    responsibilities: [
      "Designed and developed a six-page production website using Next.js, React, and Tailwind CSS.",

      "Created reusable UI components and responsive layouts optimized for desktop, tablet, and mobile devices.",

      "Implemented a contact workflow powered by Resend for handling website inquiries.",

      "Deployed the website to production and configured custom-domain DNS and SSL.",

      "Delivered the website with an emphasis on usability, maintainability, and cross-device consistency.",
    ],

    engineeringHighlights: [
      {
        title: "End-to-End Delivery",
        description:
          "Delivered the website from interface implementation through production deployment and domain configuration.",
      },
      {
        title: "Responsive Architecture",
        description:
          "Built six responsive pages with reusable components and layouts optimized across different screen sizes.",
      },
      {
        title: "Contact Integration",
        description:
          "Implemented a production contact workflow using Resend to handle website inquiries.",
      },
      {
        title: "Deployment & Infrastructure",
        description:
          "Configured production hosting, custom-domain DNS, and SSL for a publicly accessible business website.",
      },
    ],

    metrics: [
      { value: "6", label: "Production pages" },
      { value: "Live", label: "Deployment" },
      { value: "Resend", label: "Contact workflow" },
    ],

    links: {
      github: "",
      live: "https://www.htpconsultancy.com/",
    },
  },
];

export default projects;

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
