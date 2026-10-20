import { seo } from '@/data/seo.js';

/**
 * Emits a route's structured data straight into the prerendered HTML, where
 * search engines can read it without waiting for client JavaScript.
 */
export default function JsonLd({ route }) {
  const schema = seo[route]?.schema || [];
  return schema.map((data, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  ));
}
