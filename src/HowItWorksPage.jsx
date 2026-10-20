import { ArrowRight, Clock3, ListChecks, ShieldCheck } from 'lucide-react';
import PageHero from './components/PageHero.jsx';
import PageCTA from './components/PageCTA.jsx';
import RiskNote from './components/RiskNote.jsx';
import { STEPS } from './components/HowItWorks.jsx';

const READY = [
  {
    icon: Clock3,
    title: 'A Few Minutes',
    text: 'Registration asks for your name, email and phone number. There are no card details and no passwords at sign up.',
  },
  {
    icon: ShieldCheck,
    title: 'Basic Details Only',
    text: 'We collect only what we need to set up your workspace, and we never ask for wallet keys or financial account details.',
  },
  {
    icon: ListChecks,
    title: 'At Your Own Pace',
    text: 'Start with the guided basics or go straight to the tools you want to explore. Nothing is locked behind a long setup.',
  },
];

/**
 * Dedicated How It Works page. A separate dark hero introduces the page, then
 * the three steps and setup details sit on the white content surface below.
 */
export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="How It Works"
        title="How AI Pro App Works"
        description="Three simple steps take you from sign up to a calmer research routine. No card details, no jargon and no long setup."
      />

      <section className="py-16 sm:py-20" aria-labelledby="steps-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="steps-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              Up And Running In Three Simple Steps
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              No steep learning curve, just a clear path from sign up to smarter research.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article
                key={step.number}
                className="flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-7 text-center shadow-card"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-accent/30 bg-white font-display text-lg font-extrabold text-primary shadow-card">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/#register" className="btn-primary">
              Get Started Today
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 py-16 sm:py-20" aria-labelledby="ready-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="ready-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              What You Need To Get Started
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Getting set up is deliberately simple. Here is what registration involves.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {READY.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-steel">
            Have a question before you begin? The{' '}
            <a
              href="/faq"
              className="font-semibold text-primary underline decoration-accent/60 underline-offset-2 hover:text-secondary"
            >
              FAQ
            </a>{' '}
            covers registration, security and what the platform does.
          </p>
        </div>
      </section>

      <RiskNote />
      <PageCTA />
    </div>
  );
}
