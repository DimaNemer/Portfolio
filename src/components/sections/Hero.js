export default function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid min-h-[calc(100svh-100px)] w-full max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 lg:px-8 lg:py-10">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Full-Stack Developer
          </p>

       <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[clamp(3.5rem,5.3vw,5.5rem)]">
            Building <em className="font-serif italic font-medium">secure</em>,
            <br />
            production-ready
            <br />
            software.
          </h1>

         <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
  I design and develop full-stack web and mobile applications with a
  focus on clean architecture, reliable user experiences, and
  security-conscious engineering.
</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
             className="inline-flex items-center justify-center gap-3 bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              View selected work
              <span aria-hidden="true">↘</span>
            </a>

            <a
              href="/resume/DimaNemerCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border bg-surface px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

       <aside className="border-t border-border pt-6 lg:self-start lg:mt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
  <div className="space-y-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Profile
              </p>

              <p className="mt-3 text-lg font-medium">
                Dima Nemer
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Full-Stack Developer
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Core Stack
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "React Native",
                  "Expo",
                  "Supabase",
                ].map((s) => (
                  <span key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Links
              </p>

              <div className="mt-3 flex flex-col gap-1 text-sm">
                {["Email", "LinkedIn", "GitHub"].map((label) => (
                  <a
                    key={label}
                    href="#contact"
                    className="group flex items-center justify-between py-1.5 transition-colors hover:text-accent"
                  >
                    <span>{label}</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}