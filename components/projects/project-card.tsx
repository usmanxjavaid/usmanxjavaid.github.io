import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassCard, Badge } from "@/components/ui/primitives";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <GlassCard className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-text">{project.name}</h3>
            <p className="mt-1 text-sm text-text-dim">{project.subtitle}</p>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet"
          />
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-text-dim">{project.oneliner}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.channels.map((c) => (
            <Badge key={c} tone="violet">
              {c}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="font-mono text-[11px] text-text-faint">
              {s}
              {project.stack.slice(0, 4).indexOf(s) < 3 ? " ·" : ""}
            </span>
          ))}
        </div>
      </GlassCard>
    </Link>
  );
}