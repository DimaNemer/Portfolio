
const experiences = [
  {
    number: "01",
    period: "Mar 2026 — Sep 2026",
    company: "HTP Consultancy Ltd.",
    role: "Software Developer",
    type: "Contract · Remote",
    location: "London, UK",

    summary:
      "Developed and delivered full-stack web and mobile applications for a UK cybersecurity consultancy, working across application architecture, secure backend systems, interactive learning experiences, and production deployment.",

    contributions: [
      "Developed a cybersecurity learning application using React Native, Expo, Supabase, and PostgreSQL, delivering eight interactive games through a shared game engine.",

      "Designed a 12-table PostgreSQL database with Row Level Security, server-side RPC functions, and rate limiting to protect sensitive operations.",

      "Integrated Supabase Authentication, Realtime subscriptions, and database functions across dashboard, leaderboard, profile, and messaging features.",

      "Reduced GitHub Dependabot alerts from 44 to 7, eliminating all Critical issues while maintaining Expo SDK compatibility.",

      "Designed and deployed HTP Consultancy's six-page production website using Next.js and Tailwind CSS, including a Resend-powered contact workflow and custom-domain configuration.",
    ],

    achievements: [
      { value: "8", label: "Interactive games" },
      { value: "12", label: "Database tables" },
      { value: "44 → 7", label: "Security alerts" },
    ],

    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Resend",
    ],
  },

  {
    number: "02",
    period: "Jun 2026 — Aug 2026",
    company: "TechTalks",
    role: "Software Developer Intern · Team Lead",
    type: "Software Development Internship",
    location: null,

    summary:
      "Led a six-member development team building Career Brain, a full-stack career intelligence platform, combining hands-on engineering with sprint coordination, technical collaboration, and secure application development.",

    contributions: [
      "Led a six-member development team, coordinating sprint tasks and project documentation using Jira and Notion.",

      "Established Git and GitHub workflows using feature branches, pull requests, and peer code reviews.",

      "Built a real-time collaborative workspace with task boards, team chat, file sharing, and scheduling using Supabase Realtime.",

      "Implemented member-level access control through Row Level Security across 21 PostgreSQL database tables.",

      "Architected authentication and secure file storage using private Supabase Storage, JWT verification, and authorization policies.",
    ],

    achievements: [
      { value: "6", label: "Team members" },
      { value: "21", label: "Database tables" },
      { value: "Real-time", label: "Collaboration" },
    ],

    technologies: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Jira",
      "Notion",
    ],
  },

  // This experience was provided in your existing code,
  // but it is not included in the uploaded CV.
  {
    number: "03",
    period: "Jun 2023 — Present",
    company: "SHAHD",
    role: "Web Development Trainer",
    type: "Technical Education",
    location: null,

    summary:
      "Deliver practical web development training through project-based sessions that connect programming fundamentals with real-world implementation.",

    contributions: [
      "Teach web development fundamentals, including HTML, CSS, JavaScript, and responsive design.",

      "Design hands-on exercises and projects that help students apply programming concepts.",

      "Guide students through development tools, debugging, and project structure.",
    ],

    achievements: [],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">

        {/* Section introduction */}
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            02 / Experience
          </p>

          <div>
            <h2
              id="experience-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              Experience that goes
              <span className="text-muted-foreground">
                {" "}beyond the code.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Building production software, collaborating with
              engineering teams, and translating technical
              challenges into reliable solutions.
            </p>
          </div>
        </div>

        {/* Experience entries */}
        <div>
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="grid gap-7 border-b border-border py-10 lg:grid-cols-[0.22fr_1fr] lg:gap-10 lg:py-12"
            >
              {/* Timeline */}
              <div>
                <p className="font-mono text-xs text-accent">
                  {experience.number}
                </p>

                <p className="mt-3 font-mono text-xs leading-6 text-muted-foreground">
                  {experience.period}
                </p>
              </div>

              {/* Main content */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {experience.type}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {experience.company}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="text-sm font-medium">
                    {experience.role}
                  </p>

                  {experience.location && (
                    <>
                      <span
                        aria-hidden="true"
                        className="text-border"
                      >
                        /
                      </span>

                      <p className="text-sm text-muted-foreground">
                        {experience.location}
                      </p>
                    </>
                  )}
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {experience.summary}
                </p>

                {/* Achievements */}
                {experience.achievements.length > 0 && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {experience.achievements.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-border bg-surface px-4 py-4"
                      >
                        <p className="font-mono text-xl font-semibold tracking-tight text-foreground">
                          {item.value}
                        </p>

                        <p className="mt-2 text-xs text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Contributions */}
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Key Contributions
                  </p>

                  <div className="mt-4 space-y-3">
                    {experience.contributions.map(
                      (contribution) => (
                        <div
                          key={contribution}
                          className="grid grid-cols-[18px_1fr] gap-3"
                        >
                          <span
                            aria-hidden="true"
                            className="font-mono text-sm text-accent"
                          >
                            +
                          </span>

                          <p className="max-w-3xl text-sm leading-6">
                            {contribution}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Technologies & Tools
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-subtle px-3 py-1.5 font-mono text-[11px] text-foreground"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
