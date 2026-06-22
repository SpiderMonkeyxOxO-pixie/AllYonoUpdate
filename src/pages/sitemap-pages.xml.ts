import type { APIRoute } from 'astro';
import { sitemapPages } from '../data/sitemapPages';
import { FALLBACK_BASE_URL, lastModified } from '../lib/sitemap';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const urls = sitemapPages
    .map((page) => {
      const loc = `${baseUrl}${page.path}`;
      const lastmod = lastModified(page.file);
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
