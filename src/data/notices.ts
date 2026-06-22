export interface Notice {
  slug: string;
  status: 'Confirmed' | 'Being Reviewed' | 'Active' | 'Ended' | 'Archived';
  category: string;
  updateType: string;
  publishedDate: string;
  lastReviewedDate: string;
  headline: string;
  summary: string;
  sourceLabel?: string;
  sourceUrl?: string;
  sourceVerified?: boolean;
  /** 1200x630 banner image. Optional — cards render fine without one. */
  image?: string;
  imageAlt?: string;
}

export const notices: Notice[] = [
  {
    slug: 'yono-777-launches-dedicated-events-site',
    status: 'Confirmed',
    category: 'Events & Notices',
    updateType: 'Platform Notice',
    publishedDate: 'June 21, 2026',
    lastReviewedDate: 'June 21, 2026',
    headline: 'Yono 777 Launches a Dedicated Events Site',
    summary:
      'Yono 777 now has a separate events website at yono777-events.com, where it is posting live tournament windows, daily code-hunt resets, and winner announcements. AllYonoUpdate.com has confirmed the site is live, but has not independently verified the reward amounts, code-hunt mechanics, or referral and "mission" programs described on it. Treat bonus, multiplier, and referral claims there as third-party marketing, and never share passwords, OTPs, or payment details through unofficial referral or mission programs.',
    sourceLabel: 'yono777-events.com',
    sourceUrl: 'https://yono777-events.com/',
    sourceVerified: false,
    image: '/images/notices/yono-777-events-site.jpg',
    imageAlt: 'Yono777-events.com homepage showing live events and rewards',
  },
];
