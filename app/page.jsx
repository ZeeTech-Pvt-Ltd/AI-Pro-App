import App from '@/App.jsx';
import JsonLd from '@/components/JsonLd.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('home');

export default function HomePage() {
  return (
    <>
      <JsonLd route="home" />
      <App />
    </>
  );
}
