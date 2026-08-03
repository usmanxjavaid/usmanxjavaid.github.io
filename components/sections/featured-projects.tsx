"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/content/site";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Agents doing real work"
              description="Eight systems, four channels — each one built to be dropped into a real business."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/projects" variant="secondary" size="sm">
              All projects <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <motion.div key={p.slug} variants={revealItem}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}