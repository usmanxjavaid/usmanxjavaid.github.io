"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Check, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently, link text still shows the email on hover via title attr
    }
  };

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
              <div className="relative">
                
                 <a href={`mailto:${siteConfig.email}`}
                  onClick={copyEmail}
                  title={siteConfig.email}
                  aria-label="Email — opens your mail app, and copies the address as a backup"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-dim transition-colors hover:border-border-hover hover:text-text"
                >
                  {copied ? <Check size={16} className="text-violet" /> : <Mail size={16} />}
                </a>
                {copied && (
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-text">
                    Address copied too
                  </span>
                )}
              </div>
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
                  <a href={`mailto:${siteConfig.email}`} onClick={copyEmail} className="text-sm text-text-dim hover:text-text">
                    {copied ? "Address copied too" : "Email"}
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