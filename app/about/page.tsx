import type { Metadata } from "next";
import { Download } from "lucide-react";
import { bio, values, education, experience, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: `More about ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">About</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            The person behind the agents
          </h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 space-y-5 text-[15px] leading-relaxed text-text-dim">
          <p>{bio.intro}</p>
          <p>{bio.approach}</p>
        </Reveal>

        <Reveal delay={0.14} className="mt-10">
          <Button href={siteConfig.resumeUrl} variant="secondary" size="sm">
            <Download size={15} /> Download résumé
          </Button>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <SectionHeading eyebrow="Principles" title="How I work" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-sm font-semibold text-text">{v.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-dim">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <SectionHeading eyebrow="Journey" title="Experience" />
          </Reveal>
          <div className="max-w-2xl border-l border-border pl-8">
            {experience.map((exp, i) => (
              <Reveal key={exp.role + exp.org} delay={i * 0.06} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-violet ring-4 ring-bg" />
                <p className="font-mono text-xs text-text-faint">{exp.period}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold text-text">
                  {exp.role} <span className="font-body text-sm font-normal text-text-dim">· {exp.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{exp.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {education.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <SectionHeading eyebrow="Education" title="Education & certifications" />
            </Reveal>
            <div className="space-y-4">
              {education.map((ed) => (
                <div key={ed.school} className="rounded-xl border border-border bg-surface p-5">
                  <p className="font-mono text-xs text-text-faint">{ed.period}</p>
                  <h3 className="mt-1 font-display text-sm font-semibold text-text">{ed.credential}</h3>
                  <p className="text-sm text-text-dim">{ed.school}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}