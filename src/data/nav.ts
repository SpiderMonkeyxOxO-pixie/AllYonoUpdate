export interface NavItem {
  label: string;
  href: string;
}

/** Freshness/update routes — this is the domain's primary identity, so this dropdown leads. */
export const updateNav: NavItem[] = [
  { label: 'Latest Updates', href: '/latest-updates/' },
  { label: 'Game Updates', href: '/game-updates/' },
  { label: 'App Updates', href: '/app-updates/' },
  { label: 'Events & Notices', href: '/events-notices/' },
  { label: 'Update Archive', href: '/update-archive/' },
];

/** Directory/APK/promo-code routes — kept fully reachable, but positioned as supporting nav, not primary identity. */
export const categoryNav: NavItem[] = [
  { label: 'All Yono Games', href: '/all-yono-games/' },
  { label: 'Promo Code Status', href: '/promo-code-updates/' },
  { label: 'All Games APK', href: '/yono-games-apk/' },
  { label: 'Rummy', href: '/yono-rummy/' },
  { label: 'VIP', href: '/yono-vip/' },
  { label: '777', href: '/yono-777/' },
  { label: 'Arcade', href: '/yono-arcade/' },
  { label: 'Slots', href: '/yono-slots/' },
  { label: 'Bingo', href: '/yono-bingo/' },
];

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog Updates', href: '/blog-updates/' },
];

export const mobileNav: NavItem[] = [...primaryNav.slice(0, 1), ...updateNav, ...primaryNav.slice(1), ...categoryNav];

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About All Yono Update', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    heading: 'Policies',
    links: [
      { label: 'Editorial Policy', href: '/editorial-policy/' },
      { label: 'Terms of Use', href: '/terms-of-use/' },
      { label: 'Disclaimer', href: '/disclaimer/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
    ],
  },
];

export const aboutColumnLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Latest Updates', href: '/latest-updates/' },
  { label: 'Blog Updates', href: '/blog-updates/' },
  { label: 'Promo Code Status', href: '/promo-code-updates/' },
  { label: 'All Yono Games', href: '/all-yono-games/' },
];

export const bottomLinks: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Use', href: '/terms-of-use/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Editorial Policy', href: '/editorial-policy/' },
];

export const externalGuideUrl = 'https://allyonoofficial.com/';
export const externalIndiaUrl = 'https://allyonoindia.com/';
export const telegramUrl = 'https://t.me/Alluonoupdates';

export const externalSites: NavItem[] = [
  { label: 'All Yono Official', href: externalGuideUrl },
  { label: 'All Yono India', href: externalIndiaUrl },
  { label: 'Telegram Channel', href: telegramUrl },
];
