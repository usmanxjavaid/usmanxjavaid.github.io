"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="What I build"
            title="Services"
            description="Every project starts the same way — understand the workflow you actually want automated, then build the smallest agent that does it reliably."
          />
        </Reveal>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={revealItem}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover"
            >
              <h3 className="font-display text-base font-semibold text-text">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-dim">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-text-dim">
                    <Check size={14} className="mt-0.5 shrink-0 text-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}