import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="//" eyebrow="contact" title="Let's build something" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-text/80">
            I'm open to backend and distributed-systems roles. Have a high-throughput
            problem to solve? My inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-bg transition-all hover:bg-accent-bright hover:accent-glow"
          >
            Say hello <span aria-hidden>→</span>
          </a>
          <a
            href={profile.cv}
            download
            className="mt-4 block font-mono text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
          >
            ↓ Download my CV (PDF)
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {channels.map((c) => (
              <li key={c.label} className="bg-bg-2">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col gap-1.5 p-5 transition-colors hover:bg-surface-2"
                >
                  <span className="eyebrow text-[0.62rem]">{c.label}</span>
                  <span className="truncate font-mono text-sm text-text/85 transition-colors group-hover:text-accent">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
