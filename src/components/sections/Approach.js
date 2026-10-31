
const approachGroups = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "I approach software as a connected system, building responsive interfaces and integrating them with backend services, APIs, and databases to deliver complete web and mobile experiences.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React Native",
      "Expo",
    ],
  },
  {
    number: "02",
    title: "Backend & Data Architecture",
    description:
      "I focus on organizing application data, defining access boundaries, and connecting backend functionality to the features users interact with every day.",
    skills: [
      "Supabase",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "Database Design",
      "Authentication",
      "File Storage",
      "Realtime",
    ],
  },
  {
    number: "03",
    title: "Security by Design",
    description:
      "Security is part of my development process. I work with authentication, authorization, database policies, secure file access, and dependency management to reduce application risks.",
    skills: [
      "Row Level Security",
      "Authorization",
      "Input Validation",
      "Rate Limiting",
      "Secure File Access",
      "Dependency Security",
    ],
  },
  {
    number: "04",
    title: "Delivery & Collaboration",
    description:
      "I value maintainable code, clear communication, and structured workflows. From feature development and code reviews to deployment, I aim to make software easier to build, improve, and maintain.",
    skills: [
      "Git",
      "GitHub",
      "Pull Requests",
      "Code Review",
      "Jira",
      "Notion",
      "Vercel",
      "Docker",
      "Postman",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="border-b border-border"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 / Approach
          </p>

          <div>
            <h2
              id="approach-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              How I approach
              <span className="text-muted-foreground">
                {" "}software engineering.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              My work combines full-stack development, secure
              architecture, and collaborative engineering
              practices to build software that is functional,
              reliable, and maintainable.
            </p>
          </div>
        </div>

        {/* Approach grid */}
        <div className="grid md:grid-cols-2">
          {approachGroups.map((group, index) => (
            <article
              key={group.number}
              className={`
                group border-b border-border py-9
                md:px-8 md:py-10
                ${index % 2 === 0
                  ? "md:border-r md:pl-0"
                  : "md:pr-0"}
                ${index >= approachGroups.length - 2
                  ? "md:border-b-0"
                  : ""}
              `}
            >
              {/* Number and visual indicator */}
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-accent">
                  {group.number}
                </span>

                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-accent"
                >
                  ↘
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                {group.description}
              </p>

              {/* Technical capabilities */}
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Technologies & Practices
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-md border border-border
                        bg-surface px-3 py-1.5
                        font-mono text-[11px]
                        text-foreground
                        transition-colors duration-200
                        hover:border-accent/40
                        hover:bg-accent-soft
                        hover:text-accent
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
