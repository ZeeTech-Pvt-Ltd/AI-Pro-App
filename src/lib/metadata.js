import { seo, OG_IMAGE, OG_IMAGE_ALT, BRAND } from '@/data/seo.js';

/**
 * Maps the per-route SEO config onto Next's Metadata API, so titles,
 * descriptions, canonicals and social tags are baked into the static HTML.
 */
export function pageMetadata(route) {
  const conf = seo[route];
  if (!conf) throw new Error(`No SEO config for route "${route}"`);

  const meta = {
    // absolute: the root layout's title template must not wrap this.
    title: { absolute: conf.title },
    description: conf.description,
    openGraph: {
      siteName: BRAND,
      locale: 'en_AU',
      type: 'website',
      title: conf.title,
      description: conf.ogDescription || conf.description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: conf.title,
      description: conf.ogDescription || conf.description,
      images: [OG_IMAGE],
    },
  };

  if (conf.robots) meta.robots = conf.robots;
  // Noindex routes carry no canonical: the two are contradictory signals.
  if (conf.canonical) {
    meta.alternates = { canonical: conf.canonical };
    meta.openGraph.url = conf.canonical;
  }

  return meta;
}
