"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "tech", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-end gap-2 px-6 py-4">
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-1.5 font-mono text-[0.8rem] transition-colors ${
                active === l.href.slice(1)
                  ? "text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="ml-3 rounded-md border border-accent-deep bg-accent/10 px-4 py-1.5 font-mono text-[0.8rem] font-medium text-accent transition-all hover:bg-accent/20 hover:accent-glow"
          >
            Download CV ↓
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-mono text-lg">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm text-muted hover:bg-surface hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-accent-deep bg-accent/10 px-3 py-2 text-center font-mono text-sm text-accent"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
