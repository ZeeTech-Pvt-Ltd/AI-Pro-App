import ContactPage from '@/ContactPage.jsx';
import JsonLd from '@/components/JsonLd.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('contact');

export default function Page() {
  return (
    <>
      <JsonLd route="contact" />
      <ContactPage />
    </>
  );
}
