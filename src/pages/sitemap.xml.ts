import type { APIRoute } from 'astro';
import { sitemapPages } from '../data/sitemapPages';
import { FALLBACK_BASE_URL, lastModified } from '../lib/sitemap';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const pagesLastmod = sitemapPages
    .map((page) => lastModified(page.file))
    .sort()
    .at(-1) ?? new Date().toISOString().slice(0, 10);
  const updatesLastmod = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${pagesLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-updates.xml</loc>
    <lastmod>${updatesLastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
