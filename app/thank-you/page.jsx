import { ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: { absolute: 'You’re all set | AI Pro App' },
  description:
    'Thank you for registering with AI Pro App. Check your inbox to finish getting started.',
  robots: { index: false, follow: false },
};

const STEPS = [
  'Open the confirmation email we just sent and click the link to verify your address.',
  'Log in and set up your market watchlist to start exploring the tools and learning resources.',
  'Got questions? Our team replies Monday to Friday, 9am to 5pm AEST at support@ai-proapp.com.',
];

export default function ThankYouPage() {
  return (
    <div className="section">
      <div className="shell">
        <div className="mx-auto max-w-xl rounded-3xl border border-ink/5 bg-white p-8 text-center shadow-card sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent-dark">
            <Check className="h-8 w-8" aria-hidden="true" />
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            You&rsquo;re All Set!
          </h1>
          <p className="mt-4 text-base leading-relaxed text-steel">
            Thanks for registering with{' '}
            <strong className="font-semibold text-ink">AI Pro App</strong>. A confirmation email
            is on its way to the address you provided. Check your inbox to finish getting started.
          </p>

          <ol className="mt-7 space-y-3 text-left" aria-label="What happens next">
            {STEPS.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-xl border border-ink/5 bg-canvas/60 p-3.5 text-sm leading-relaxed text-ink"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <a href="/" className="btn-primary mt-8 w-full">
            Back To Homepage
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            <strong className="font-semibold text-ink">Risk warning:</strong> Financial markets
            involve risk. Information provided on this website is general in nature and does not
            constitute personal financial advice. Consider your circumstances and seek
            professional advice where appropriate.
          </p>
        </div>
      </div>
    </div>
  );
}
