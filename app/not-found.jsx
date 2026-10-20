import NotFoundPage from '@/NotFoundPage.jsx';

// Next adds its own noindex tag to the 404 output, so robots is deliberately
// omitted here rather than duplicated.
export const metadata = {
  title: { absolute: 'Page Not Found | AI Pro App' },
  description:
    'The page you are looking for could not be found. Head back to the AI Pro App homepage to explore our AI-assisted crypto research platform.',
};

export default function NotFound() {
  return <NotFoundPage />;
}
