import type { APIRoute } from "astro";

const robotsTxt = `
# Bashir Hamza - Software Craftsman
# https://bashirhamza.com

User-agent: *
Allow: /

# Crawl-delay for politeness
Crawl-delay: 1

# Sitemaps
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}

# Block AI training crawlers (optional - uncomment if desired)
# User-agent: GPTBot
# Disallow: /

# User-agent: ChatGPT-User
# Disallow: /

# User-agent: Google-Extended
# Disallow: /

# User-agent: CCBot
# Disallow: /
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};