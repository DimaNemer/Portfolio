
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";

/* ----------------------------------------
   Static routes
---------------------------------------- */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* ----------------------------------------
   Dynamic metadata
---------------------------------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

/* ----------------------------------------
   Shared section heading
---------------------------------------- */

function SectionHeading({ number, label, title }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {number} / {label}
      </p>

      <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/* ----------------------------------------
   Project page
---------------------------------------- */

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main id="main-content">
      {/* Project introduction */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pt-14 lg:px-8 lg:pb-20">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Back to selected work
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.36fr] lg:gap-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {project.number} / {project.category}
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {project.title}
                <span className="text-accent">.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {project.overview}
              </p>

              {/* External project links */}
              {(project.links?.live ||
                project.links?.github) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                    >
                      Visit live project
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                      View source code
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Project metadata */}
            <aside className="grid content-start gap-6 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-2">
              {[
                ["My Role", project.role],
                ["Organization", project.organization],
                ["Team", project.team],
                ["Timeline", project.period],
                ["Status", project.status],
              ]
                .filter(([, value]) => Boolean(value))
                .map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6">
                      {value}
                    </p>
                  </div>
                ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Project metrics */}
      {project.metrics?.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3 lg:px-8">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-l-2 border-accent pl-5"
              >
                <p className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {metric.value}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contributions */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            number="01"
            label="Contributions"
            title="What I built and contributed."
          />

          <div className="mt-9 grid gap-4 lg:ml-[26%]">
            {project.responsibilities.map(
              (responsibility, index) => (
                <div
                  key={responsibility}
                  className="grid grid-cols-[36px_1fr] gap-4 border-b border-border py-4"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-3xl text-sm leading-7 sm:text-base">
                    {responsibility}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Engineering highlights */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            number="02"
            label="Engineering"
            title="Technical decisions and engineering highlights."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {project.engineeringHighlights.map(
              (highlight, index) => (
                <article
                  key={highlight.title}
                  className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(24,24,27,0.04)] sm:p-7"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {highlight.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {highlight.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            number="03"
            label="Technology"
            title="Tools and technologies."
          />

          <div className="mt-9 flex flex-wrap gap-3 lg:ml-[26%]">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      {projects.length > 1 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Continue exploring
            </p>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-5 flex flex-wrap items-center justify-between gap-6"
            >
              <div>
                <p className="font-mono text-xs text-accent">
                  Next project / {nextProject.number}
                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent sm:text-5xl">
                  {nextProject.title}
                </h2>
              </div>

              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-xl transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
              >
                ↗
              </span>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
