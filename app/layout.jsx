import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { LegalProvider } from '@/components/LegalModal.jsx';

// Self-hosted at build time, so the font files ship from this origin and there
// is no render-blocking request to fonts.googleapis.com.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

const SITE = 'https://ai-proapp.com';

export const metadata = {
  metadataBase: new URL(SITE),
  applicationName: 'AI Pro App',
  title: {
    default: 'AI Pro App | AI Crypto Research Assistant for Australia',
    template: '%s | AI Pro App',
  },
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'yIZq51b8UkuBaTtdJO0NKl4j-kISNx_gjXTy2_a9vf8',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#4338CA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LegalProvider>
          {/* Skip link for keyboard users */}
          <a
            href="#main"
            className="sr-only z-[70] rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>

          <Header />

          <main id="main">{children}</main>

          <Footer />
        </LegalProvider>

        {/* Analytics is fetched once the page is idle so the tag never competes
            with the document for bandwidth or main-thread time. */}
        <Script
          id="ga-lib"
          src="https://www.googletagmanager.com/gtag/js?id=G-00EHNDSXTT"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-00EHNDSXTT');
        `}</Script>
      </body>
    </html>
  );
}
