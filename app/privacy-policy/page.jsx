import LegalPage from '@/LegalPage.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('privacy-policy');

export default function Page() {
  return <LegalPage docKey="privacy" />;
}
