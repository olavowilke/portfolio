import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">
            <span className="text-faint">{index}</span> {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="hairline mt-7" />
    </Reveal>
  );
}
