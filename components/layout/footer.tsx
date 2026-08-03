import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-display text-[10px] font-bold text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                {siteConfig.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <span className="font-display text-lg font-semibold text-text">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{siteConfig.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-dim transition-colors hover:border-border-hover hover:text-text"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-dim transition-colors hover:border-border-hover hover:text-text"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-dim transition-colors hover:border-border-hover hover:text-text"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-faint">Site</p>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-text-dim hover:text-text">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-faint">Elsewhere</p>
              <ul className="space-y-2">
                <li>
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim hover:text-text">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-text-dim hover:text-text">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
          <a href="#top"
            className="flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-text"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}