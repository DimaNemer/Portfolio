
import Link from "next/link";

const background = [
  {
    number: "01",
    label: "Education",
    title: "B.S. in Computer Science",
    detail: "Lebanese International University",
    period: "2021 — 2024",
  },
  {
    number: "02",
    label: "Professional Development",
    title: "Front-End Web Development",
    detail: "UNRWA Digital Hub",
    period: "2025",
  },
  {
    number: "03",
    label: "Certification",
    title: "CyberOps Associate",
    detail: "Cisco",
    period: null,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            04 / About
          </p>

          <div>
            <h2
              id="about-heading"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              Beyond the code.
              <span className="text-muted-foreground">
                {" "}The person behind the work.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A little about my background, what drives my
              work, and how I continue growing as a software
              developer.
            </p>
          </div>
        </div>

        {/* About content */}
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-16">
          {/* Biography */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Introduction
            </p>

            <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Hi, I am Dima.
              <span className="italic text-accent">
                {" "}I build software that solves real problems.
              </span>
            </h3>

            <div className="mt-7 max-w-xl space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
              <p>
                I am a full-stack developer based in
                Lebanon, with a Bachelor degree in Computer
                Science from Lebanese International University.
                I work across web and mobile development,
                building applications that connect thoughtful
                interfaces with reliable backend systems.
              </p>

              <p>
                My experience includes developing production
                websites, contributing to full-stack platforms,
                and building mobile applications with a focus
                on secure data access and maintainable
                architecture.
              </p>

              <p>
                I enjoy understanding how systems work beyond
                the interface, learning new technologies, and
                collaborating with others to turn ideas into
                functional software.
              </p>
            </div>

            {/* Resume */}
            <div className="mt-9">
              <Link
                href="/resume/DimaNemerCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition-all hover:border-accent hover:text-accent"
              >
                View my resume

                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* Education and development */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Background & Education
            </p>

            <div className="mt-5 border-t border-border">
              {background.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[35px_1fr] gap-4 border-b border-border py-6"
                >
                  <span className="font-mono text-xs text-accent">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </p>

                      {item.period && (
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-3 text-base font-semibold tracking-tight sm:text-lg">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional interests */}
            <div className="mt-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Areas of Interest
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "Software Development",
                  "Frontend Development",
                  "Backend Development",
                  "Web Applications",
                  "Mobile Development",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-[11px] text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
