
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DimaNemer",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dima-nemer/",
  },
  {
    label: "Email",
    href: "mailto:dimanemer2003@gmail.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:items-end lg:py-14">
          {/* Identity */}
          <div>
            <Link
              href="/#top"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
              aria-label="Dima Nemer — Back to homepage"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 font-mono text-xs font-semibold text-accent">
                DN.
              </span>

              <span className="text-sm font-semibold tracking-tight">
                Dima Nemer
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Full-stack developer building
              reliable web and mobile applications with
              a focus on secure, thoughtful engineering.
            </p>

            <p className="mt-4 font-mono text-[11px] text-white/40">
              Based in Lebanon · Open to remote opportunities
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-7 sm:items-end">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <Link
              href="/#top"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
            >
              Back to top

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-1"
              >
                ↑
              </span>
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 font-mono text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Dima Nemer. All rights reserved.</p>

          <p>Designed &amp; developed by Dima Nemer.</p>
        </div>
      </div>
    </footer>
  );
}
