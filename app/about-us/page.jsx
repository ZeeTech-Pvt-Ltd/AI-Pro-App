import AboutPage from '@/AboutPage.jsx';
import { pageMetadata } from '@/lib/metadata.js';
import '@/about-page.css';

export const metadata = pageMetadata('about-us');

export default function Page() {
  return <AboutPage />;
}
