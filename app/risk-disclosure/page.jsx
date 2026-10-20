import LegalPage from '@/LegalPage.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('risk-disclosure');

export default function Page() {
  return <LegalPage docKey="risk" />;
}
