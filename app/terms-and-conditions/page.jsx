import LegalPage from '@/LegalPage.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('terms-and-conditions');

export default function Page() {
  return <LegalPage docKey="terms" />;
}
