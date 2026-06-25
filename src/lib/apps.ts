import appsData from '../data/apps.json';

export type AppCategory = 'rummy' | 'arcade' | 'vip' | 'slots' | 'spin' | '777' | 'misc';

export interface AppEntry {
  slug: string;
  name: string;
  category: AppCategory;
  logo: string;
  downloadUrl: string;
  catalogReviewedDate: string;
  version?: string;
  fileSize?: string;
  androidRequirement?: string;
  whatsNew?: string;
}

export const apps: AppEntry[] = appsData as AppEntry[];

export function getAppsByCategory(category: AppCategory): AppEntry[] {
  return apps.filter((app) => app.category === category);
}

export function getAppBySlug(slug: string): AppEntry | undefined {
  return apps.find((app) => app.slug === slug);
}

export function sortNewestFirst(list: AppEntry[]): AppEntry[] {
  return [...list].sort((a, b) => (a.catalogReviewedDate < b.catalogReviewedDate ? 1 : -1));
}
