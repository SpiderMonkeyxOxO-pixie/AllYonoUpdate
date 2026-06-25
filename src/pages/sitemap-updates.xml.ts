import type { APIRoute } from 'astro';
import { FALLBACK_BASE_URL } from '../lib/sitemap';
import { blogPosts } from '../data/blogPosts';
import { frontmatter as gamesListFrontmatter } from '../../content/blog/all-yono-games-list-2026.md';

// Covers /blog/[slug]/ informational posts. Once a content collection backs
// the separate /updates/[slug]/ post template (see project_content_taxonomy
// memory), add those entries here too.
const updatePosts: { path: string; lastmod: string }[] = [
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}/`,
    lastmod: post.lastReviewedDate,
  })),
  {
    path: `/blog/${gamesListFrontmatter.slug}/`,
    lastmod: gamesListFrontmatter.date_modified,
  },
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const urls = updatePosts
    .map((post) => `  <url>\n    <loc>${baseUrl}${post.path}</loc>\n    <lastmod>${post.lastmod}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
