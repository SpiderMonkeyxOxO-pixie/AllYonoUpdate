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
  /** Which Yono-related platform/app this notice is about, if entity-specific. */
  entity?: string;
  /** What the situation was before this change. Omit rather than guess. */
  previousState?: string;
  /** What the situation is now. Omit rather than guess. */
  currentState?: string;
  /** What the reader should know or do as a result. Omit rather than guess. */
  userAction?: string;
}

export const notices: Notice[] = [
  {
    slug: 'spin-rummy-is-now-live',
    status: 'Confirmed',
    category: 'Game Updates',
    updateType: 'Platform Launch',
    publishedDate: 'October 30, 2026',
    lastReviewedDate: 'October 30, 2026',
    headline: 'Spin Rummy Is Now Live',
    summary:
      "Spin Rummy launched on 30 October 2026 at 8:00 AM IST and has joined the All Yono directory with a recorded download link at spinrummy.cx. The homepage launch countdown has been removed now that the app is available. AllYonoUpdate.com has not independently verified any bonus, welcome offer, or promo code for the platform, and does not host the Spin Rummy APK file.",
    sourceLabel: 'spinrummy.cx',
    sourceUrl: 'https://spinrummy.cx/?code=31X42Q6DH9P&t=1793332810',
    sourceVerified: false,
    entity: 'Spin Rummy',
    previousState: 'Scheduled to launch on 30 October 2026 at 8:00 AM IST, with no download link, welcome bonus, or promo code recorded.',
    currentState: 'Live, with a recorded download link at spinrummy.cx. Its launch-status and promo-code pages have been updated accordingly.',
    userAction: "Review the Spin Rummy launch status page for the current download link, and treat any bonus, welcome offer, or promo-code claim outside this site as unverified.",
  },
  {
    slug: 'vip-rummy-is-now-live',
    status: 'Confirmed',
    category: 'Game Updates',
    updateType: 'Platform Launch',
    publishedDate: 'October 20, 2026',
    lastReviewedDate: 'October 20, 2026',
    headline: 'VIP Rummy Is Now Live',
    summary:
      "VIP Rummy launched on 20 October 2026 from 8:00 AM IST and has joined the All Yono directory with a recorded download link at viprummy6.com. The homepage launch countdown has been removed now that the app is available. AllYonoUpdate.com has not independently verified any bonus, welcome offer, or promo code shown on the platform's own website, and does not host the VIP Rummy APK file.",
    sourceLabel: 'viprummy6.com',
    sourceUrl: 'https://viprummy6.com/?code=XSDWNSC153Q&t=1792476153',
    sourceVerified: false,
    entity: 'VIP Rummy',
    previousState: 'Scheduled to launch on 20 October 2026 at 8:00 AM IST, with no download link, welcome bonus, or promo code recorded.',
    currentState: 'Live, with a recorded download link at viprummy6.com. Its app page and directory record have been updated accordingly.',
    userAction: "Review the VIP Rummy app page for the current download link, and treat any bonus, welcome offer, or promo-code claim on the platform's own website as unverified.",
  },
  {
    slug: 'jaiho-play-is-now-live',
    status: 'Confirmed',
    category: 'Game Updates',
    updateType: 'Platform Launch',
    publishedDate: 'October 15, 2026',
    lastReviewedDate: 'October 15, 2026',
    headline: 'Jaiho Play Is Now Live',
    summary:
      "Jaiho Play launched on 15 October 2026 from 8:00 AM IST and has joined the All Yono directory with a recorded download link at jaihogo.com. The homepage launch countdown has been removed now that the app is available. AllYonoUpdate.com has not independently verified any bonus, welcome offer, or promo code shown on the platform's own website, and does not host the Jaiho Play APK file.",
    sourceLabel: 'jaihogo.com',
    sourceUrl: 'https://jaihogo.com/?code=E4VW58CDZFY&t=1792035058',
    sourceVerified: false,
    entity: 'Jaiho Play',
    previousState: 'Scheduled to launch on 15 October 2026 at 8:00 AM IST, with no download link, welcome bonus, or promo code recorded.',
    currentState: 'Live, with a recorded download link at jaihogo.com. Its app page and directory record have been updated accordingly.',
    userAction: "Review the Jaiho Play app page for the current download link, and treat any bonus, welcome offer, or promo-code claim on the platform's own website as unverified.",
  },
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
