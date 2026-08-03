import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/content/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://usmanxjavaid.github.io";

  const staticRoutes = ["", "/projects", "/about", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}