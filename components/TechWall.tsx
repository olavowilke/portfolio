"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { techStack } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export function TechWall() {
  return (
    <section id="tech" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="//" eyebrow="stack" title="Tools I build with" />

      <motion.ul
        className="mt-12 grid grid-cols-4 gap-2.5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.035 } } }}
      >
        {techStack.map((t) => (
          <TechTile key={t.name} name={t.name} slug={t.slug} />
        ))}
      </motion.ul>
    </section>
  );
}

function TechTile({ name, slug }: { name: string; slug: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) return null;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      }}
      className="group relative flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-surface/40 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-accent-deep hover:bg-surface-2 hover:shadow-[0_10px_32px_-12px_rgba(63,207,142,0.35)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${CDN}/${slug}.svg`}
        alt={name}
        loading="lazy"
        onError={() => setBroken(true)}
        className="h-7 w-7 transition-transform duration-300 ease-out group-hover:scale-[1.45]"
      />
      <span className="font-mono text-[0.55rem] leading-none text-faint transition-colors group-hover:text-muted">
        {name}
      </span>
    </motion.li>
  );
}
