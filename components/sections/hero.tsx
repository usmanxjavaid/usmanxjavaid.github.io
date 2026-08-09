"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/site";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Hero() {
  const channelCount = new Set(projects.flatMap((p) => p.channels)).size;

  return (
    <section className="px-6 pb-16 pt-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        className="mx-auto max-w-3xl"
      >
        <motion.p variants={fadeUp} className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
          Usman Javaid — AI Agent Developer
        </motion.p>
        <motion.div variants={fadeUp} className="mb-8 h-px w-16 bg-border" />

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-6xl"
        >
          AI agents that businesses{" "}
          <span className="gradient-text italic">actually put to work.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-text-dim">
          I design and ship AI agents for Telegram, WhatsApp, and Shopify — support bots,
          booking systems, RAG chatbots, and lead-gen tools built to be handed to a client
          and switched on.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/projects" size="lg">
            View projects <ArrowRight size={16} />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get in touch
          </Button>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-12 font-mono text-xs text-text-faint">
          {projects.length} agents shipped · {channelCount} channels · Python, FastAPI, LangChain, Groq, Docker
        </motion.p>

        <motion.a href="#skills"
          variants={fadeUp}
          className="mt-14 flex w-fit items-center gap-1.5 font-mono text-xs text-text-faint transition-colors hover:text-text-dim"
        >
          Scroll to explore <ArrowUpRight size={12} className="rotate-90" />
        </motion.a>
      </motion.div>
    </section>
  );
}