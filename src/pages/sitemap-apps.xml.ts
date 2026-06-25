import type { APIRoute } from 'astro';
import { FALLBACK_BASE_URL } from '../lib/sitemap';
import { apps } from '../lib/apps';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const urls = apps
    .map((app) => `  <url>\n    <loc>${baseUrl}${app.url}</loc>\n    <lastmod>${app.updated}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
