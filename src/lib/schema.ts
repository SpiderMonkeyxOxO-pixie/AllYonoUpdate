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
        url: `${baseUrl}/app/${app.slug}/`,
        name: app.name,
      })),
    },
  };
}

export function buildSoftwareApplicationSchema(app: AppEntry, baseUrl: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    url: `${baseUrl}/app/${app.slug}/`,
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
    dateModified: app.catalogReviewedDate,
  };
  if (app.version) schema.softwareVersion = app.version;
  if (app.fileSize) schema.fileSize = app.fileSize;
  return schema;
}
