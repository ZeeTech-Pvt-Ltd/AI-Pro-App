import { ArrowRight, GraduationCap, Scale, Wallet } from 'lucide-react';
import Eyebrow from './components/Eyebrow.jsx';
import PageCTA from './components/PageCTA.jsx';
import RiskNote from './components/RiskNote.jsx';
import { FEATURES } from './components/Features.jsx';

const NOT_LIST = [
  {
    icon: Wallet,
    title: 'Not A Brokerage',
    text: 'AI Pro App does not place orders, hold funds or manage portfolios. It is a research and education workspace.',
  },
  {
    icon: Scale,
    title: 'Not Personal Advice',
    text: 'Nothing on the platform is a recommendation to buy or sell. Information is general and does not consider your circumstances.',
  },
  {
    icon: GraduationCap,
    title: 'Not A Shortcut',
    text: 'The platform helps you research with more context, but it cannot remove market risk or predict what happens next.',
  },
];

/**
 * Dedicated Features page. The feature grid is the hero, inside a
 * shadow-card panel and without a separate gradient header or gray background.
 * Feature copy is shared with the homepage version.
 */
export default function FeaturesPage() {
  return (
    <div className="bg-white pt-10 sm:pt-12">
      <section className="pb-16 sm:pb-20" aria-labelledby="features-title">
        <div className="shell">
          <div className="rounded-[2rem] border border-ink/5 bg-white p-7 shadow-card sm:p-10 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow center>Features</Eyebrow>
              <h1
                id="features-title"
                className="mt-5 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-primary"
              >
                Features Built For Clearer Market Research
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Market scanning, watchlists, charts, daily summaries and plain English education,
                arranged in one organised workspace.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-primary">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="/#register" className="btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 py-16 sm:py-20" aria-labelledby="boundaries-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="boundaries-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              What The Platform Is Not
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Clear boundaries are part of an honest research tool. Here is what AI Pro App does
              not do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NOT_LIST.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-steel">
            Want to see how the workspace fits together? Read the{' '}
            <a
              href="/how-it-works"
              className="font-semibold text-primary underline decoration-accent/60 underline-offset-2 hover:text-secondary"
            >
              How It Works
            </a>{' '}
            page for the three step walkthrough.
          </p>
        </div>
      </section>

      <RiskNote />
      <PageCTA />
    </div>
  );
}
