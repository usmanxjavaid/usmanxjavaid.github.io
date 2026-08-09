"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, siteConfig, hero } from "@/content/site";
import type { Channel } from "@/content/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const channelIcons: Record<Channel, React.ReactNode> = {
  Telegram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm4.9 14.4c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.2.5-.3.6-.3h.5c.1 0 .3 0 .5.4l.7 1.7c.1.2.1.3 0 .5l-.3.4c-.1.2-.2.3-.1.5.2.3.7 1.1 1.5 1.8.9.8 1.7 1.1 2 1.2.2.1.3.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.1.4.2.1.2.1.9-.1 1.4Z" />
    </svg>
  ),
  Shopify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  ),
};

export function Hero() {
  const channels = Array.from(new Set(projects.flatMap((p) => p.channels)));

  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={fadeUp} className="font-display text-base font-bold text-text">
            {siteConfig.name}
          </motion.p>
          <motion.p variants={fadeUp} className="mb-7 font-mono text-xs uppercase tracking-[0.1em] text-text-faint">
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-text sm:text-5xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-text-dim">
            {hero.subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/projects" size="lg">
              View projects <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-8 border-t border-border pt-6">
            {hero.credentials.map((c) => (
              <div key={c.label} className="font-mono text-xs text-text-faint">
                <span className="mb-0.5 block font-display text-[15px] font-bold text-text">{c.label}</span>
                {c.detail}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col rounded-2xl border border-border bg-surface p-7"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-violet" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">Live</span>
          </div>

          <span className="font-display text-5xl font-bold text-text">
            {String(projects.length).padStart(2, "0")}
          </span>
          <span className="mt-1 font-mono text-xs uppercase tracking-wider text-text-faint">Agents built</span>

          <div className="mt-6 space-y-1 border-t border-border pt-4">
            {channels.map((c) => (
              <div key={c} className="flex items-center gap-3 py-2">
                <span className="h-[18px] w-[18px] shrink-0 text-text-dim">{channelIcons[c]}</span>
                <span className="flex-1 text-sm text-text">{c}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}