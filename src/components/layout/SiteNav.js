"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation sections
const navItems = [
  { number: "01", label: "Work", id: "work" },
  { number: "02", label: "Experience", id: "experience" },
  { number: "03", label: "Approach", id: "approach" },
  { number: "04", label: "About", id: "about" },
  { number: "05", label: "Contact", id: "contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return <SiteNavContent key={pathname} pathname={pathname} />;
}

function SiteNavContent({ pathname }) {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const offset = 160;
      const scrollPosition = window.scrollY + offset;

      let current = "";

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const getHref = (id) => `/#${id}`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className={`
          relative mx-auto w-full max-w-7xl
          rounded-2xl border border-border
          bg-surface/95 backdrop-blur-xl
          transition-shadow duration-300
          ${
            scrolled
              ? "shadow-[0_10px_40px_rgba(24,24,27,0.08)]"
              : "shadow-[0_4px_20px_rgba(24,24,27,0.03)]"
          }
        `}
      >
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">
          {/* Brand */}
          <Link
            href="/#top"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Dima Nemer — Back to top"
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg bg-foreground
                font-mono text-[11px] font-semibold
                text-background
                transition-colors duration-200
                group-hover:bg-accent
              "
            >
              DN.
            </span>

            <span className="text-sm font-semibold tracking-tight">
              Dima Nemer
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => {
              const active =
                isHome && activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={getHref(item.id)}
                  aria-current={active ? "location" : undefined}
                  className={`
                    group relative flex items-center gap-1.5
                    py-2 text-sm transition-colors duration-200
                    ${
                      active
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }
                  `}
                >
                  <span
                    className={`
                      font-mono text-[10px]
                      ${
                        active
                          ? "text-accent"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  <span className="font-medium">
                    {item.label}
                  </span>

                  <span
                    className={`
                      absolute inset-x-0 bottom-0 h-0.5
                      origin-left rounded-full bg-accent
                      transition-transform duration-300
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="/resume/dima-nemer-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden items-center gap-2
                border-l border-border pl-5
                font-mono text-[11px] font-medium
                uppercase tracking-[0.08em]
                text-muted-foreground
                transition-colors hover:text-accent
                sm:inline-flex
              "
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex h-10 w-10 flex-col
                items-center justify-center gap-1.5
                rounded-lg border border-border
                transition-colors hover:bg-subtle
                lg:hidden
              "
            >
              <span
                className={`
                  h-0.5 w-4 bg-foreground
                  transition-transform duration-200
                  ${
                    menuOpen
                      ? "translate-y-1 rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-0.5 w-4 bg-foreground
                  transition-transform duration-200
                  ${
                    menuOpen
                      ? "-translate-y-1 -rotate-45"
                      : ""
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* Mobile and tablet navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border px-4 pb-5 pt-3 sm:px-6 lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active =
                  isHome && activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={getHref(item.id)}
                    onClick={() => setMenuOpen(false)}
                    aria-current={
                      active ? "location" : undefined
                    }
                    className={`
                      flex items-center justify-between
                      border-b border-border/70
                      py-3.5 transition-colors
                      ${
                        active
                          ? "text-accent"
                          : "hover:text-accent"
                      }
                    `}
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.number}
                      </span>

                      <span className="text-base font-medium">
                        {item.label}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-muted-foreground"
                    >
                      ↗
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success" />
                Open to opportunities
              </span>

              <a
                href="/resume/dima-nemer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-medium text-accent sm:hidden"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
