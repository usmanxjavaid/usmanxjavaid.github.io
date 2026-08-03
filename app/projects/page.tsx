import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/primitives";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI agents built for Telegram, WhatsApp, Shopify, and the web.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="All work"
          title="Projects"
          description="Every agent I've shipped — filter by channel or search by name and stack."
        />
        <ProjectsGrid />
      </div>
    </section>
  );
}