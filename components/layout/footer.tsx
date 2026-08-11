"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Copy, Check, ExternalLink, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { navLinks, siteConfig } from "@/content/site";

function EmailReveal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — email is still visible in the popover either way
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`;

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Show email address">
        {trigger}
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-surface p-4 shadow-lg sm:left-0 sm:translate-x-0">
          <p className="break-all font-mono text-[13px] text-text">{siteConfig.email}</p>

          <div className="mt-3 flex gap-2">
            <button
              onClick={copyEmail}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-text-dim transition-colors hover:border-border-hover hover:text-text"
            >
              {copied ? <Check size={13} className="text-violet" /> : <Copy size={13} />}
              {copied ? "Copied" : "Copy"}
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-violet px-3 py-2 text-xs font-medium text-white hover:bg-violet-dim"
            >
              Open in Gmail <ExternalLink size={12} />
            </a>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2.5 block text-center font-mono text-[11px] text-text-faint hover:text-text-dim"
          >
            or open in your default mail app
          </a>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded font-display text-[10px] font-bold text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                {siteConfig.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <span className="font-display text-lg font-semibold text-text">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{siteConfig.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
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
              <EmailReveal
                trigger={
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-dim transition-colors hover:border-border-hover hover:text-text">
                    <Mail size={16} />
                  </span>
                }
              />
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
                  <EmailReveal trigger={<span className="text-sm text-text-dim hover:text-text">Email</span>} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} {siteConfig.name} · <a href={siteConfig.github + "/usmanxjavaid.github.io"} target="_blank" rel="noopener noreferrer" className="hover:text-text-dim">Source on GitHub</a>
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