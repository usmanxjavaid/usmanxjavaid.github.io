"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="What clients say" />
        </Reveal>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <Quote size={18} className="text-violet" />
              <p className="mt-4 text-sm leading-relaxed text-text-dim">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-medium text-text">{t.name}</p>
              <p className="text-xs text-text-faint">{t.role}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-border p-12 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{ background: "var(--gradient-radial)" }}
          />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Have a workflow worth automating?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-text-dim">
            If it involves answering the same questions, booking the same slots, or qualifying
            the same leads — there&apos;s probably an agent for it.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Start a conversation <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}