import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { Badge, GlassCard } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/brand-icons";
import { ProjectVideo } from "@/components/projects/project-video";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneliner,
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  
  return (
    <article className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-text"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {project.channels.map((c) => (
            <Badge key={c} tone="violet">
              {c}
            </Badge>
          ))}
          <Badge>{project.category}</Badge>
        </div>

        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-2 text-lg text-text-dim">{project.subtitle}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={project.repo} variant="secondary" size="sm">
            <GithubIcon className="h-3.5 w-3.5" /> View source
          </Button>
          {project.demo && (
            <Button href={project.demo} size="sm">
              Live demo <ArrowUpRight size={14} />
            </Button>
          )}
        </div>

        <div className="mt-12">
          <ProjectVideo src={project.video} name={project.name} />
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-text">Overview</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-dim">{project.overview}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-text-faint">The hard part</p>
                <p className="text-sm leading-relaxed text-text">{project.challenge}</p>
              </div>
              <div className="rounded-xl border border-violet/30 bg-violet/5 p-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-violet">The decision</p>
                <p className="text-sm leading-relaxed text-text">{project.decision}</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-surface p-4 font-mono text-[13px] leading-relaxed text-text-dim">
              <span className="text-amber">flow</span> — {project.flow}
            </div>

            <h2 className="mt-10 font-display text-lg font-semibold text-text">Key features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-text-dim">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <GlassCard className="p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-faint">Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-text-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <p className="mb-5 font-mono text-xs uppercase tracking-wider text-text-faint">Next up</p>
          <div className="max-w-sm">
            <ProjectCard project={next} />
          </div>
        </div>
      </div>
    </article>
  );
}