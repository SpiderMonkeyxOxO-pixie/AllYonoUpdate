export interface SitemapPageEntry {
  path: string;
  file: string;
}

export const sitemapPages: SitemapPageEntry[] = [
  { path: '/', file: 'src/pages/index.astro' },
  { path: '/latest-updates/', file: 'src/pages/latest-updates.astro' },
  { path: '/game-updates/', file: 'src/pages/game-updates.astro' },
  { path: '/app-updates/', file: 'src/pages/app-updates.astro' },
  { path: '/events-notices/', file: 'src/pages/events-notices.astro' },
  { path: '/update-archive/', file: 'src/pages/update-archive.astro' },
  { path: '/promo-code-updates/', file: 'src/pages/promo-code-updates.astro' },
  { path: '/all-yono-games/', file: 'src/pages/all-yono-games.astro' },
  { path: '/blog-updates/', file: 'src/pages/blog-updates.astro' },
  { path: '/editorial-policy/', file: 'src/pages/editorial-policy.astro' },
  { path: '/about/', file: 'src/pages/about.astro' },
  { path: '/contact/', file: 'src/pages/contact.astro' },
  { path: '/disclaimer/', file: 'src/pages/disclaimer.astro' },
  { path: '/privacy-policy/', file: 'src/pages/privacy-policy.astro' },
  { path: '/terms-of-use/', file: 'src/pages/terms-of-use.astro' },
];
