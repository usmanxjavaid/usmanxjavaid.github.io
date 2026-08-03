import { experience } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Where I've worked" title="Experience" />
        </Reveal>

        <div className="max-w-2xl border-l border-border pl-8">
          {experience.map((exp, i) => (
            <Reveal key={exp.role + exp.org} delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-violet ring-4 ring-bg" />
              <p className="font-mono text-xs text-text-faint">{exp.period}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-text">
                {exp.role} <span className="font-body text-base font-normal text-text-dim">· {exp.org}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-text-faint">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}