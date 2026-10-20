import FAQPage from '@/FAQPage.jsx';
import JsonLd from '@/components/JsonLd.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('faq');

export default function Page() {
  return (
    <>
      <JsonLd route="faq" />
      <FAQPage />
    </>
  );
}
