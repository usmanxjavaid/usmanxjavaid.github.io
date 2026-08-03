"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const categories = Array.from(new Set(skills.map((s) => s.category)));

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I actually work with"
            description="The stack I reach for when shipping an agent end-to-end — from the model layer down to the database that remembers every conversation."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 0.06}>
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-faint">{cat}</p>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((s) => (
                      <div key={s.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-text">{s.name}</span>
                          <span className="font-mono text-xs text-text-faint">{s.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: "var(--gradient-primary)" }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}