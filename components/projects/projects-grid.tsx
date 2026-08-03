"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { projects, type Channel } from "@/content/site";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const channels: (Channel | "All")[] = ["All", "Telegram", "WhatsApp", "Shopify", "Web"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Channel | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesChannel = filter === "All" || p.channels.includes(filter);
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.oneliner.toLowerCase().includes(query.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      return matchesChannel && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {channels.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
                filter === c
                  ? "border-violet bg-violet text-white"
                  : "border-border text-text-dim hover:border-border-hover hover:text-text"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-xs">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-full border border-border bg-surface py-2 pl-9 pr-4 text-sm text-text placeholder:text-text-faint focus:border-violet focus:outline-none"
          />
        </div>
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-text-faint">
          No projects match &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}