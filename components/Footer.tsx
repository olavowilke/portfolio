import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {profile.name} · Built with Next.js + Tailwind
        </p>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
