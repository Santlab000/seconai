/** @type {import('next').NextConfig} */

// Repo name — the site is served from https://<user>.github.io/<repo>/
const repo = "seconai";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Produce a fully static site in ./out for GitHub Pages
  output: "export",
  // GitHub Pages serves from a subpath in production
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // GitHub Pages has no Next.js image optimization server
  images: { unoptimized: true },
  // Emit /about/index.html etc. so routes resolve as static files
  trailingSlash: true,
};

export default nextConfig;
