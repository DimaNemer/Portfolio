
import Link from "next/link";
import projects from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-b border-border"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            01 / Selected Work
          </p>

          <div>
            <h2
              id="work-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              Selected work.
              <span className="text-muted-foreground">
                {" "}Built for real-world use.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              From full-stack platforms to mobile applications
              and production websites, these projects reflect
              my approach to building reliable, secure, and
              maintainable software.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                group relative -ml-3 grid gap-6
                border-b border-l-2 border-border
                border-l-transparent
                py-9 pl-3
                transition-all duration-300
                hover:border-l-accent
                hover:bg-accent-soft/30
                sm:-ml-5 sm:pl-5
                lg:grid-cols-[0.12fr_1fr_0.5fr]
                lg:gap-8 lg:py-11
              "
            >
              {/* Project number */}
              <div>
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                  {project.number}
                </span>
              </div>

              {/* Project information */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {project.category}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.shortDescription}
                </p>

                {/* Engineering metrics */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric.label}
                      className="
                        rounded-md border border-border
                        bg-surface px-3 py-1.5
                        font-mono text-[10px]
                        text-muted-foreground
                        transition-colors
                        group-hover:border-accent/25
                      "
                    >
                      <span className="font-semibold text-foreground">
                        {metric.value}
                      </span>
                      {" / "}
                      {metric.label}
                    </span>
                  ))}
                </div>

                {/* Case study link */}
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Explore case study

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </span>
              </div>

              {/* Role and technology stack */}
              <div className="flex flex-col gap-6 border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    My Role
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    {project.role}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md bg-subtle
                          px-2.5 py-1.5
                          font-mono text-[11px]
                          text-foreground
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            03 / Featured Projects
          </p>

          <a
            href="https://github.com/DimaNemer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            Explore my GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
