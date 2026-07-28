import type { AppEntry } from './apps';

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildCollectionPageSchema(name: string, description: string, items: AppEntry[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((app, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${baseUrl}${app.url}`,
        name: app.name,
      })),
    },
  };
}

export function buildItemListSchema(items: AppEntry[], baseUrl: string) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: app.name,
      url: `${baseUrl}${app.url}`,
    })),
  };
}

export function buildArticleSchema(options: { headline: string; description: string; datePublished: string; dateModified: string; url: string }) {
  return {
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    mainEntityOfPage: options.url,
  };
}

export function buildBlogPostingSchema(options: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    mainEntityOfPage: options.url,
    image: options.image,
    author: {
      '@type': 'Organization',
      name: 'All Yono Update',
    },
    publisher: {
      '@type': 'Organization',
      name: 'All Yono Update',
      logo: {
        '@type': 'ImageObject',
        url: `${new URL(options.url).origin}/logo.webp`,
      },
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildSoftwareApplicationSchema(app: AppEntry, baseUrl: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: `${baseUrl}${app.url}`,
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
  };
  if (app.softwareVersion !== null) schema.softwareVersion = app.softwareVersion;
  if (app.fileSize !== null) schema.fileSize = app.fileSize;
  return schema;
}
