import type { APIRoute } from 'astro';
import { FALLBACK_BASE_URL } from '../lib/sitemap';

// No individual update posts exist yet. Once a content collection backs the
// /updates/[slug]/ post template (see project_content_taxonomy memory), populate
// this list from indexable, substantial posts only.
const updatePosts: { path: string; lastmod: string }[] = [];

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
