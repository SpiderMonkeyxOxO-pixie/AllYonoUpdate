import type { AppCategory } from '../lib/apps';

export interface HubMeta {
  key: string;
  path: string;
  categoryFilter: AppCategory | 'all';
  h1: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  intro: string;
}

export const hubs: HubMeta[] = [
  {
    key: 'new-yono-games',
    path: '/new-yono-games/',
    categoryFilter: 'all',
    h1: 'New Yono Games: Latest Version Updates',
    title: 'New Yono Games — Latest Version Updates & Changelog',
    description: 'Track new and recently updated All Yono game apps across every category, with a visible last-updated date and a short summary of what changed for each title.',
    ogTitle: 'New Yono Games — Latest Version Updates and Changelog',
    ogDescription: 'Track new and recently updated All Yono game apps, with a visible last-updated date for each title.',
    keywords: ['yono new game', 'new yono games', 'new yono game', 'yono new games', 'yono game new', 'new yono all games'],
    intro:
      'This page tracks new and recently updated apps across the full All Yono directory — rummy, arcade, VIP, slots, spin, and 777-category titles. Each entry below shows when the catalog record was last checked and a short note on what changed, where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website.\n\nFor a category-specific update hub, see the dedicated rummy update page linked below. Listing order and recorded details can change without notice, so always confirm current version and download information directly on each platform\'s own website before downloading anything.',
  },
  {
    key: 'new-yono-rummy',
    path: '/new-yono-rummy/',
    categoryFilter: 'rummy',
    h1: 'New Yono Rummy: Latest Version Updates',
    title: 'New Yono Rummy — Latest Version Updates & Changelog',
    description: 'Track new and recently updated Yono Rummy and related rummy-category apps, with a visible last-updated date and a short summary of what changed for each title.',
    ogTitle: 'New Yono Rummy — Latest Version Updates and Changelog',
    ogDescription: 'Track new and recently updated rummy-category All Yono apps, with a visible last-updated date for each title.',
    keywords: ['yono rummy new', 'new yono rummy'],
    intro:
      'This page tracks new and recently updated rummy-category apps in the All Yono directory, including Yono Rummy, ABC Rummy, Boss Rummy, and other related titles. Each entry below shows when the catalog record was last checked and a short note on what changed, where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website.\n\nFor updates across every category, see the full update hub linked below. Listing order and recorded details can change without notice, so always confirm current version and download information directly on each platform\'s own website before downloading anything.',
  },
];
