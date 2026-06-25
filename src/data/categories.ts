import type { AppCategory } from '../lib/apps';

export interface CategoryMeta {
  key: AppCategory | 'all';
  path: string;
  targetKeyword: string;
  h1: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  intro: string;
  updateHubHref: string;
}

export const categories: CategoryMeta[] = [
  {
    key: 'rummy',
    path: '/yono-rummy/',
    targetKeyword: 'yono rummy apk',
    h1: 'Yono Rummy Apps: APK Download & Latest Versions',
    title: 'Yono Rummy APK Download — Latest Versions & Updates',
    description: 'Browse Yono Rummy and related rummy-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono Rummy APK Download — Latest Versions and Updates',
    ogDescription: 'Browse Yono Rummy and related rummy-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono rummy apk', 'rummy yono', 'yono rummy download', 'yono rummy app', 'yono rummy app download'],
    intro:
      "Yono Rummy is one of the most searched rummy-style apps in the wider All Yono lineup, alongside related platforms such as ABC Rummy, Boss Rummy, Joy Rummy, and Rummy888. This page lists every rummy-category app currently recorded in the All Yono directory, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads to the platform's own website, not to a file stored here.\n\nThese apps are generally presented by their publishers as skill-based card games. Listing order, app version, and download links can change without notice, so the information shown reflects what was last recorded, not a live guarantee. Always confirm current details on the platform's own website before downloading.",
    updateHubHref: '/new-yono-rummy/',
  },
  {
    key: 'arcade',
    path: '/yono-arcade/',
    targetKeyword: 'yono arcade apk',
    h1: 'Yono Arcade Games: APK Download & Latest Versions',
    title: 'Yono Arcade APK Download — Latest Versions & Updates',
    description: 'Browse Yono Arcade and related arcade-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono Arcade APK Download — Latest Versions and Updates',
    ogDescription: 'Browse Yono Arcade and related arcade-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono arcade', 'yono arcade game apk', 'yono arcade games', 'yono arcade apk'],
    intro:
      'Yono Arcade is the most searched arcade-style title in the All Yono lineup, listed here alongside related arcade apps such as Jaiho Arcade, Maha Games, and Yono Games. This page records the arcade-category apps currently tracked in the All Yono directory, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website.\n\nArcade-style apps in this category typically combine simple casual gameplay with in-app rewards systems defined by each individual publisher. Listing order, recorded version, and download links can change without notice, so always confirm current details on the platform\'s own website before downloading anything.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'vip',
    path: '/yono-vip/',
    targetKeyword: 'yono vip game',
    h1: 'Yono VIP Apps: APK Download & Latest Versions',
    title: 'Yono VIP APK Download — Latest Versions & Updates',
    description: 'Browse Yono Vip and related VIP-tier apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono VIP APK Download — Latest Versions and Updates',
    ogDescription: 'Browse Yono Vip and related VIP-tier apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono vip game', 'yono vip games', 'yono vip'],
    intro:
      'Yono Vip is the primary VIP-tier app tracked in the All Yono directory, listed here alongside related platforms such as Neta Vip, Club INR, and Ind Club. VIP-tier apps are generally presented by their publishers as offering tiered membership features compared to standard listings. This page records the VIP-category apps currently tracked, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads to the platform\'s own website.\n\nMembership tiers, recorded version numbers, and download links can change without notice, so the information shown reflects what was last recorded, not a live guarantee. Confirm current membership terms directly on the platform\'s own website.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'slots',
    path: '/yono-slots/',
    targetKeyword: 'yono slot game',
    h1: 'Yono Slots Apps: APK Download & Latest Versions',
    title: 'Yono Slots APK Download — Latest Versions & Updates',
    description: 'Browse Yono Slots and related slot-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono Slots APK Download — Latest Versions and Updates',
    ogDescription: 'Browse Yono Slots and related slot-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono slot game', 'yono slots'],
    intro:
      'Yono Slots is the lead slot-style title in the All Yono lineup, recorded here alongside related platforms such as 567 Slots, Saga Slots, Share Slots, and Slots Winner. This page lists the slot-category apps currently tracked in the All Yono directory, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website.\n\nSlot-style apps typically use randomized in-app outcomes defined by each publisher\'s own systems. Listing order, recorded version, and download links can change without notice, so always confirm current details directly on the platform\'s own website before downloading.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'spin',
    path: '/yono-spin/',
    targetKeyword: 'yono spin',
    h1: 'Yono Spin Apps: APK Download & Latest Versions',
    title: 'Yono Spin APK Download — Latest Versions & Updates',
    description: 'Browse Yes Spin, Spin Lucky, and related spin-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono Spin APK Download — Latest Versions and Updates',
    ogDescription: 'Browse spin-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono spin'],
    intro:
      'This page records the spin-category apps currently tracked in the All Yono directory, including titles such as Yes Spin, Spin Gold, Spin 777, Spin Lucky, and Spin Winner, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website, not to a file hosted here.\n\nSpin-style apps generally combine a spin-wheel or reel mechanic with publisher-defined in-app rewards. Listing order, recorded version, and download links can change without notice, so the information shown reflects what was last recorded, not a live guarantee. Confirm current details directly on the platform\'s own website.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'sevens',
    path: '/yono-777/',
    targetKeyword: 'yono 777 online',
    h1: 'Yono 777 Apps: APK Download & Latest Versions',
    title: 'Yono 777 APK Download — Latest Versions & Updates',
    description: 'Browse Yono 777 and related 777-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono 777 APK Download — Latest Versions and Updates',
    ogDescription: 'Browse Yono 777 and related 777-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono 777 online'],
    intro:
      'Yono 777 is the lead title in the 777-category cluster of the All Yono directory, recorded here alongside related platforms such as 777 Game, Hindi 777, and Yn 777. This page lists the 777-category apps currently tracked, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website.\n\nApps in this category are generally presented by their publishers as casino-style games. Listing order, recorded version, and download links can change without notice, so always confirm current details directly on the platform\'s own website before downloading anything.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'bingo',
    path: '/yono-bingo/',
    targetKeyword: 'yono bingo',
    h1: 'Yono Bingo Apps: APK Download & Latest Versions',
    title: 'Yono Bingo APK Download — Latest Versions & Updates',
    description: 'Browse Bingo 101, Ind Bingo, and related bingo-category apps in the All Yono directory, with a direct download link, recorded version, and last-checked date for each title.',
    ogTitle: 'Yono Bingo APK Download — Latest Versions and Updates',
    ogDescription: 'Browse bingo-category apps in the All Yono directory, with a direct download link for each title.',
    keywords: ['yono bingo'],
    intro:
      'This page records the bingo-category apps currently tracked in the All Yono directory, including Bingo 101 and Ind Bingo, with a direct download link for each title where one has been recorded. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website, not to a file hosted here.\n\nBingo-style apps typically combine a number-matching format with publisher-defined in-app rewards. Listing order, recorded version, and download links can change without notice, so always confirm current details directly on the platform\'s own website before downloading anything.',
    updateHubHref: '/new-yono-games/',
  },
  {
    key: 'all',
    path: '/yono-games-apk/',
    targetKeyword: 'yono games apk',
    h1: 'Yono Games APK: Full Directory of Latest Versions',
    title: 'Yono Games APK — Full Directory & Latest Versions',
    description: 'Browse the full All Yono APK directory across rummy, slots, spin, 777, arcade, VIP, and bingo-category apps, with a direct download link and last-checked date for each title.',
    ogTitle: 'Yono Games APK — Full Directory and Latest Versions',
    ogDescription: 'Browse the full All Yono APK directory across every recorded category, with a direct download link for each title.',
    keywords: ['yono games apk', 'all yono games', 'all yono app'],
    intro:
      'This page is the full All Yono APK directory, listing every app currently recorded across the rummy, slots, spin, 777, arcade, VIP, and bingo categories, with a direct download link for each title where one has been recorded. Use the category pages linked from this directory for a narrower list focused on one type of app. AllYonoUpdate.com does not develop, host, or operate any of these applications — every Download button leads directly to the platform\'s own website, not to a file hosted here.\n\nThis directory is reviewed when a title is added, removed, renamed, or recategorized, so the list reflects what was last recorded rather than a live, real-time feed. Always confirm current download links and version details directly on each platform\'s own website.',
    updateHubHref: '/new-yono-games/',
  },
];

export function getCategoryMeta(key: AppCategory | 'all'): CategoryMeta {
  const found = categories.find((c) => c.key === key);
  if (!found) throw new Error(`Unknown category key: ${key}`);
  return found;
}
