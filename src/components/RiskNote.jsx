import { AlertTriangle } from 'lucide-react';

/**
 * Shared capital-at-risk note used on the secondary pages, so the downside is
 * visible before any call to action.
 */
export default function RiskNote() {
  return (
    <section className="py-8" aria-labelledby="risk-note-title">
      <div className="shell">
        <div className="flex items-start gap-4 rounded-2xl border border-amber-300/60 bg-amber-50 p-5 sm:p-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 id="risk-note-title" className="text-base font-bold text-primary sm:text-lg">
              Capital At Risk
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">
              Cryptocurrency markets are volatile, and the value of digital assets can fall as well
              as rise. AI Pro App provides general information and educational tools only, not
              personal financial advice. Read our{' '}
              <a
                href="/risk-disclosure"
                className="font-semibold text-primary underline decoration-accent/60 underline-offset-2 hover:text-secondary"
              >
                Risk Disclosure
              </a>{' '}
              before making any decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
