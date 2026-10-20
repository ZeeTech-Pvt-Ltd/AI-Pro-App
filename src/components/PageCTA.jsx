import { ArrowRight } from 'lucide-react';

/**
 * Shared closing call to action for secondary pages.
 * Links to the homepage register section, since the form lives there.
 */
export default function PageCTA({
  title = 'Start Exploring Smarter Market Tools',
  text = 'Create your account and see the platform for yourself, with no card details required.',
}) {
  return (
    <section className="pb-16 pt-8 sm:pb-24" aria-labelledby="page-cta-title">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary px-6 py-14 text-center shadow-soft sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="page-cta-title"
              className="text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight text-white"
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {text}
            </p>
            <div className="mt-8">
              <a
                href="/#register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-deep shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get Started
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Registration asks only for basic contact details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
