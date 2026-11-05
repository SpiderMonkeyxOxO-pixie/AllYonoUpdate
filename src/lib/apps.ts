import appsData from '../data/apps.json';

export type AppCategory = 'rummy' | 'slots' | 'spin' | 'sevens' | 'arcade' | 'vip' | 'bingo';

export interface AppFaq {
  q: string;
  a: string;
}

export interface AppEntry {
  id: string;
  name: string;
  slug: string;
  category: AppCategory;
  featured: boolean;
  tag?: string;
  description: string;
  targetKeyword: string;
  softwareVersion: string | null;
  fileSize: string | null;
  minAndroid: string | null;
  rating: number | null;
  updated: string;
  icon: string;
  apkUrl: string | null;
  url: string;
  faq: AppFaq[];
  relatedArticle?: { label: string; href: string };
}

export interface ComplianceMeta {
  ageNotice: string;
  restrictedStates: string;
  disclaimer: string;
}

interface AppsJson {
  _meta: {
    siteName: string;
    baseUrl: string;
    compliance: ComplianceMeta;
  };
  apps: AppEntry[];
}

const data = appsData as AppsJson;

// apps.json's `apps` array order IS the display order: the homepage "Top N
// Best Choices" rank grid and the "All Yono App Directory" list both just
// map over this array in order (see src/pages/index.astro). Owner rule:
// when a new platform launches, move its entry to the very top of the
// array so it becomes rank #1 and the rest shift down (2026-11-05).
export const apps: AppEntry[] = data.apps;
export const compliance: ComplianceMeta = data._meta.compliance;
export const siteMeta = data._meta;

export function getAppsByCategory(category: AppCategory): AppEntry[] {
  return apps.filter((app) => app.category === category);
}

export function getFeaturedApps(): AppEntry[] {
  return apps.filter((app) => app.featured);
}

export function getAppBySlug(slug: string): AppEntry | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppByName(name: string): AppEntry | undefined {
  return apps.find((app) => app.name === name);
}

export function sortNewestFirst(list: AppEntry[]): AppEntry[] {
  return [...list].sort((a, b) => (a.updated < b.updated ? 1 : -1));
}
