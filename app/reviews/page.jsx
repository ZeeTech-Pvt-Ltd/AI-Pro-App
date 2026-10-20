import ReviewsPage from '@/ReviewsPage.jsx';
import { pageMetadata } from '@/lib/metadata.js';

export const metadata = pageMetadata('reviews');

export default function Page() {
  return <ReviewsPage />;
}
