"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-14 md:grid-cols-[1.4fr_1fr]"
      >
        {/* Left: intro */}
        <div>
          <motion.p variants={item} className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
            {profile.location} · Available for work
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl font-mono text-base text-muted md:text-lg"
          >
            <span className="text-accent">{">"}</span> {profile.role} ·{" "}
            {profile.yearsExperience} years
            <span className="caret">&nbsp;</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-text/80 md:text-lg"
          >
            {profile.bio[0]}
          </motion.p>

          {/* focus chips */}
          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-deep hover:text-text"
              >
                {f}
              </li>
            ))}
          </motion.ul>

          {/* actions */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-bright hover:accent-glow"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <SocialIcon href={profile.github} label="GitHub">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div variants={item} className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72">
            {/* rotating conic ring */}
            <div
              className="ring-rotate absolute -inset-3 rounded-full opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, var(--color-accent) 90deg, transparent 200deg, var(--color-accent-deep) 320deg, transparent 360deg)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              }}
            />
            {/* portrait */}
            <div className="absolute inset-0 overflow-hidden rounded-full border border-border-strong bg-surface-2 accent-glow">
              <Image
                src="/olavo-4.png"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                className="object-cover"
              />
            </div>
            {/* corner ticks */}
            <Corner className="-left-1 -top-1 border-l border-t" />
            <Corner className="-right-1 -top-1 border-r border-t" />
            <Corner className="-bottom-1 -left-1 border-b border-l" />
            <Corner className="-bottom-1 -right-1 border-b border-r" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Corner({ className }: { className: string }) {
  return <span className={`absolute h-4 w-4 border-accent/60 ${className}`} />;
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:text-accent"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        {children}
      </svg>
    </a>
  );
}
