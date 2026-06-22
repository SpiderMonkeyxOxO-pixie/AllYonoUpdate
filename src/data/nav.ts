export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Latest Promo Code', href: '/promo-code-updates/' },
  { label: 'Latest Games', href: '/all-yono-games/' },
  { label: 'Blogs', href: '/blog-updates/' },
];

export const mobileNav: NavItem[] = primaryNav;

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
  { label: 'Latest Promo Code', href: '/promo-code-updates/' },
  { label: 'Latest Games', href: '/all-yono-games/' },
  { label: 'Blogs', href: '/blog-updates/' },
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
