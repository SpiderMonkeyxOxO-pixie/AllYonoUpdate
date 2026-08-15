import type { APIRoute } from 'astro';
import { sitemapPages } from '../data/sitemapPages';
import { FALLBACK_BASE_URL, lastModified } from '../lib/sitemap';
import { apps } from '../lib/apps';
import { blogPosts } from '../data/blogPosts';
import { frontmatter as gamesListFrontmatter } from '../../content/blog/all-yono-games-list-2026.md';

function latest(dates: string[]): string {
  return [...dates].sort().at(-1) ?? lastModified('src/data/sitemapPages.ts');
}

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.toString() ?? FALLBACK_BASE_URL).replace(/\/$/, '');

  const pagesLastmod = latest(sitemapPages.map((page) => lastModified(page.file)));
  const categoriesLastmod = latest([lastModified('src/data/categories.ts'), lastModified('src/data/hubs.ts')]);
  const appsLastmod = latest(apps.map((app) => app.updated));
  const updatesLastmod = latest([
    ...blogPosts.map((post) => post.lastReviewedDate),
    gamesListFrontmatter.date_modified,
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${pagesLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-categories.xml</loc>
    <lastmod>${categoriesLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-apps.xml</loc>
    <lastmod>${appsLastmod}</lastmod>
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
