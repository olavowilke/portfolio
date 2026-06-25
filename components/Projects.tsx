import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="//" eyebrow="selected work" title="Things I'm proud of" />
      <div className="mt-20 flex flex-col gap-28">
        {projects.map((p, i) => (
          <ProjectBlock key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ProjectBlock({ project: p, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="relative">
      {/* index watermark */}
      <span className="pointer-events-none absolute -top-16 right-0 select-none font-display text-[8rem] font-extrabold leading-none text-surface-2/70 sm:text-[11rem]">
        {p.index}
      </span>

      <Reveal>
        <p className="eyebrow mb-3">{p.context}</p>
        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {p.name}
        </h3>
        <p className="mt-5 max-w-3xl font-display text-xl font-medium leading-snug text-text/90 sm:text-2xl">
          <span className="gradient-text">{p.headline}</span>
        </p>
      </Reveal>

      {/* stats */}
      <Reveal delay={0.1}>
        <div className="mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-bg-2 px-4 py-5 text-center sm:px-6">
              <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div
        className={`mt-10 grid gap-10 lg:grid-cols-2 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* text column */}
        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-text/80">{p.summary}</p>

          <ul className="mt-7 space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-lg border border-border bg-surface/40 p-4">
            <p className="eyebrow mb-2 text-[0.65rem]">my role</p>
            <p className="text-sm leading-relaxed text-text/75">{p.role}</p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-border bg-bg-2 px-2.5 py-1 font-mono text-[0.7rem] text-muted"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* diagram column */}
        <Reveal delay={0.12}>
          <DiagramCard flow={p.diagram} />
        </Reveal>
      </div>
    </article>
  );
}

/* Renders the data-flow string as connected nodes — a stand-in until the
   Excalidraw architecture diagram lands in the design phase. */
function DiagramCard({ flow }: { flow: string }) {
  const nodes = flow.split("→").map((n) => n.trim());
  return (
    <div className="card relative h-full overflow-hidden p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="eyebrow text-[0.65rem]">architecture · data flow</p>
        <span className="flex gap-1.5">
          <Dot /> <Dot /> <Dot />
        </span>
      </div>

      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(63,207,142,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,207,142,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <ol className="relative space-y-2.5">
        {nodes.map((node, i) => (
          <li key={i} className="flex flex-col gap-2.5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border-strong bg-bg font-mono text-[0.7rem] text-accent">
                {i + 1}
              </span>
              <span className="rounded-md border border-border bg-surface-2/80 px-3 py-1.5 font-mono text-[0.78rem] leading-snug text-text/85">
                {node}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <span className="ml-3 font-mono text-accent-deep">↓</span>
            )}
          </li>
        ))}
      </ol>

      <p className="relative mt-5 border-t border-border pt-4 font-mono text-[0.65rem] text-faint">
        Interactive Excalidraw diagram coming in the design phase.
      </p>
    </div>
  );
}

function Dot() {
  return <span className="h-2 w-2 rounded-full bg-border-strong" />;
}
