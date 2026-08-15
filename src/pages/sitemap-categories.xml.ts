import type { APIRoute } from 'astro';
import { FALLBACK_BASE_URL, lastModified } from '../lib/sitemap';
import { categories } from '../data/categories';
import { hubs } from '../data/hubs';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');
  const categoriesLastmod = lastModified('src/data/categories.ts');
  const hubsLastmod = lastModified('src/data/hubs.ts');

  const urls = [
    ...categories.map((category) => ({ path: category.path, lastmod: categoriesLastmod })),
    ...hubs.map((hub) => ({ path: hub.path, lastmod: hubsLastmod })),
  ]
    .map((page) => `  <url>\n    <loc>${baseUrl}${page.path}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
