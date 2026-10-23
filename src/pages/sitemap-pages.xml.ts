import type { APIRoute } from 'astro';
import { sitemapPages } from '../data/sitemapPages';
import { notices } from '../data/notices';
import { FALLBACK_BASE_URL, lastModified } from '../lib/sitemap';

// Category/status hub pages that noindex themselves while they have zero
// entries (see app-updates.astro, update-archive.astro) — keep them out of
// the sitemap in that state too, since a sitemap listing a noindex URL sends
// a mixed signal. Both flip back in automatically once real content exists.
const hasAppChangeNotice = notices.some((n) => n.category === 'App Changes');
const hasArchivedNotice = notices.some((n) => n.status === 'Ended' || n.status === 'Archived');
const emptyHubPaths = new Set([
  ...(hasAppChangeNotice ? [] : ['/app-updates/']),
  ...(hasArchivedNotice ? [] : ['/update-archive/']),
]);

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const urls = sitemapPages
    .filter((page) => !emptyHubPaths.has(page.path))
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
