import type { NextConfig } from "next";

// Auto-detects the repo name from GitHub Actions so the site works whether
// it's deployed as a root user page (usmanxjavaid.github.io) or a project
// page (usmanxjavaid.github.io/some-repo). No manual editing needed.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPage = repo?.endsWith(".github.io");
const basePath = repo && !isUserPage ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;