import { FAQS } from '@/data/faqs.js';

const SITE = 'https://ai-proapp.com';
export const BRAND = 'AI Pro App';
export const OG_IMAGE = `${SITE}/og-cover.png`;
export const OG_IMAGE_ALT = 'AI Pro App, AI-assisted crypto research platform for Australia';

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ai-proapp.com/#website',
      url: 'https://ai-proapp.com/',
      name: 'AI Pro App',
      inLanguage: 'en-AU',
      description: 'An AI-assisted cryptocurrency research platform for Australians.',
      publisher: { '@id': 'https://ai-proapp.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://ai-proapp.com/#organization',
      name: 'AI Pro App',
      url: 'https://ai-proapp.com/',
      email: 'support@ai-proapp.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
    },
  ],
};

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ai-proapp.com/#organization',
  name: 'AI Pro App',
  url: 'https://ai-proapp.com/',
  email: 'support@ai-proapp.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@ai-proapp.com',
    areaServed: 'AU',
    availableLanguage: 'en',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

/**
 * Single source of truth for per-route metadata and structured data.
 * Titles, descriptions, OG descriptions and canonicals are copied verbatim
 * from the Vite site's page heads.
 */
export const seo = {
  home: {
    title: 'AI Pro App | AI Crypto Research Assistant for Australia',
    description:
      'AI Pro App helps Australians research cryptocurrency markets with AI-assisted scanning, charts, alerts and education.',
    ogDescription:
      'AI-assisted crypto market scanning, charts, alerts and education in one accessible platform for Australians.',
    canonical: 'https://ai-proapp.com/',
    robots: { index: true, follow: true },
    schema: [HOME_SCHEMA],
  },
  'how-it-works': {
    title: 'How It Works | AI Pro App',
    description:
      'See how AI Pro App takes you from sign up to clearer crypto research in three simple steps. Start exploring today.',
    ogDescription: 'Three simple steps from sign up to clearer crypto research with AI Pro App.',
    canonical: 'https://ai-proapp.com/how-it-works',
    robots: { index: true, follow: true },
    schema: [],
  },
  features: {
    title: 'Features | AI Pro App',
    description:
      'Explore AI Pro App features: market scanning, watchlists, charts, daily summaries and plain English education. See the platform today.',
    ogDescription:
      'Market scanning, watchlists, charts, summaries and plain English education in one workspace.',
    canonical: 'https://ai-proapp.com/features',
    robots: { index: true, follow: true },
    schema: [],
  },
  reviews: {
    title: 'Reviews | AI Pro App',
    description:
      'See how AI Pro App collects and publishes real customer feedback, with no invented testimonials. Share your own experience today.',
    ogDescription:
      'Real feedback only. Read how AI Pro App handles reviews and how to share your own experience.',
    canonical: 'https://ai-proapp.com/reviews',
    robots: { index: true, follow: true },
    schema: [],
  },
  'about-us': {
    title: 'About Us | AI Pro App',
    description:
      'AI Pro App, an Australian AI-assisted crypto research platform with market scanning, charts, alerts and education, for more context and less guesswork.',
    ogDescription:
      'An Australian AI-assisted crypto research platform built on clarity, education and honest information.',
    canonical: 'https://ai-proapp.com/about-us',
    robots: { index: true, follow: true },
    schema: [],
  },
  faq: {
    title: 'FAQ | AI Pro App',
    description:
      'Frequently asked questions about AI Pro App: what the platform is, who it is for, how registration works and how your information is protected.',
    ogDescription:
      'Straight answers about AI Pro App, the AI-assisted crypto research platform for Australians.',
    canonical: 'https://ai-proapp.com/faq',
    robots: { index: true, follow: true },
    schema: [FAQ_SCHEMA],
  },
  contact: {
    title: 'Contact Us | AI Pro App',
    description:
      'Contact the AI Pro App team. Questions about the platform, your account or our research tools? Reach us during Australian business hours.',
    ogDescription: 'Reach the AI Pro App team during Australian business hours.',
    canonical: 'https://ai-proapp.com/contact',
    robots: { index: true, follow: true },
    schema: [CONTACT_SCHEMA],
  },
  'privacy-policy': {
    title: 'Privacy Policy | AI Pro App',
    description:
      'How AI Pro App collects, uses and protects your personal information, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).',
    ogDescription: 'How AI Pro App collects, uses and protects your personal information.',
    canonical: 'https://ai-proapp.com/privacy-policy',
    robots: { index: true, follow: true },
    schema: [],
  },
  'cookie-policy': {
    title: 'Cookie Policy | AI Pro App',
    description:
      'What cookies are, how AI Pro App uses them and the choices you have, read alongside the Privacy Policy.',
    ogDescription: 'What cookies are, how AI Pro App uses them and the choices you have.',
    canonical: 'https://ai-proapp.com/cookie-policy',
    robots: { index: true, follow: true },
    schema: [],
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions | AI Pro App',
    description:
      'The terms governing your use of the AI Pro App website and platform, including who can use the platform and your responsibilities.',
    ogDescription: 'The terms governing your use of the AI Pro App website and platform.',
    canonical: 'https://ai-proapp.com/terms-and-conditions',
    robots: { index: true, follow: true },
    schema: [],
  },
  'risk-disclosure': {
    title: 'Risk Disclosure | AI Pro App',
    description:
      'Important risk information for using AI Pro App. Financial markets involve risk and information on this site is general in nature, not personal financial advice.',
    ogDescription:
      'Important risk information for using AI Pro App. Information on this site is general in nature, not personal financial advice.',
    canonical: 'https://ai-proapp.com/risk-disclosure',
    robots: { index: true, follow: true },
    schema: [],
  },
  disclaimer: {
    title: 'Disclaimer | AI Pro App',
    description:
      'AI Pro App disclaimer: the information on this website is general in nature, provided for education only and is not personal financial advice.',
    ogDescription:
      'The information on this website is general in nature and is not personal financial advice.',
    canonical: 'https://ai-proapp.com/disclaimer',
    robots: { index: true, follow: true },
    schema: [],
  },
  'thank-you': {
    title: 'You’re all set | AI Pro App',
    description:
      'Thank you for registering with AI Pro App. Check your inbox to finish getting started.',
    canonical: null,
    robots: { index: false, follow: false },
    schema: [],
  },
  'not-found': {
    title: 'Page Not Found | AI Pro App',
    description:
      'The page you are looking for could not be found. Head back to the AI Pro App homepage to explore our AI-assisted crypto research platform.',
    canonical: null,
    robots: null,
    schema: [],
  },
};
