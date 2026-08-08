"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/primitives";
import { projects, siteConfig } from "@/content/site";
import { AgentNetwork } from "./agent-network";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Hero() {
  const channelCount = new Set(projects.flatMap((p) => p.channels)).size;

  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-10">
      {/* ambient gradient wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
          <motion.div variants={fadeUp}>
            <Badge tone="violet" className="mb-6">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
              {projects.length} agents shipped · {channelCount} channels
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            AI agents that businesses{" "}
            <span className="gradient-text">actually put to work.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-text-dim">
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

          <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {["Python", "FastAPI", "LangChain", "Groq", "Docker"].map((t) => (
              <span key={t} className="font-mono text-xs text-text-faint">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.a href="#skills"
            variants={fadeUp}
            className="mt-12 flex w-fit items-center gap-1.5 font-mono text-xs text-text-faint transition-colors hover:text-text-dim"
          >
            Scroll to explore <ArrowUpRight size={12} className="rotate-90" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <AgentNetwork />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass flex h-20 w-20 items-center justify-center rounded-full">
              <span className="font-display text-lg font-semibold text-text">
                {siteConfig.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
