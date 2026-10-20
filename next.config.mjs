/**
 * Static export: every route is prerendered to HTML at build time, so the copy
 * ships in the first response instead of behind a JavaScript bundle.
 *
 * Routes are emitted as `about-us.html` rather than `about-us/index.html`, so
 * the canonical URLs match the entries in sitemap.xml without a trailing slash.
 * Vercel serves `/about-us` from `about-us.html` directly. `404.html` is emitted
 * too, so an unknown path gets a real 404 status rather than the homepage at 200.
 *
 * Legacy redirects and the CSP live in vercel.json: `redirects()` and
 * `headers()` are unsupported with `output: 'export'`.
 */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
