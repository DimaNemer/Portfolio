
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "dimanemer2003@gmail.com",
    href: "mailto:dimanemer2003@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dima-nemer",
    href: "https://www.linkedin.com/in/dima-nemer/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/DimaNemer",
    href: "https://github.com/DimaNemer",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-border"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            05 / Contact
          </p>

          <div>
            <h2
              id="contact-heading"
              className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build
              <span className="font-serif italic text-accent">
                {" "}something useful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I am open to software development opportunities,
              collaborative projects, and conversations about
              building reliable web and mobile applications.
              Have something in mind? I had love to hear from you.
            </p>

            {/* Contact links */}
            <div className="mt-10 border-t border-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.external ? "_blank" : undefined
                  }
                  rel={
                    link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group grid gap-2 border-b border-border
                    py-5 transition-colors
                    hover:border-accent/40
                    sm:grid-cols-[0.28fr_1fr_auto]
                    sm:items-center sm:gap-4
                  "
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-accent">
                    {link.label}
                  </span>

                  <span className="min-w-0 break-all text-sm font-medium transition-colors group-hover:text-accent sm:break-normal sm:text-base">
                    {link.value}
                  </span>

                  <span
                    aria-hidden="true"
                    className="hidden text-lg text-accent transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 sm:inline"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Primary actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:dimanemer2003@gmail.com"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-md bg-accent px-6 py-3.5
                  text-sm font-medium text-white
                  transition-colors hover:bg-accent-hover
                "
              >
                Send an email
                <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/resume/DimaNemerCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-md border border-border bg-surface
                  px-6 py-3.5 text-sm font-medium
                  transition-colors hover:border-accent
                  hover:text-accent
                "
              >
                View resume
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Closing note */}
            <p className="mt-8 font-mono text-[11px] text-muted-foreground">
              Based in Lebanon · Open to remote opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
