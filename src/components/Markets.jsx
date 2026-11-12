import { ArrowLeftRight, Bitcoin, Building2, Gem } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const MARKETS = [
  {
    icon: Bitcoin,
    title: 'Crypto',
    text: 'Trade ideas on top digital assets such as Bitcoin and Ethereum.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Forex',
    text: 'Signals on heavily traded pairs built around USD, EUR and GBP.',
  },
  {
    icon: Building2,
    title: 'Stocks',
    text: 'Setups on shares of major companies worldwide.',
  },
  {
    icon: Gem,
    title: 'Commodities',
    text: 'Alerts on price swings in gold, silver and oil.',
  },
];

export default function Markets() {
  return (
    <section id="markets" className="section overflow-hidden bg-white" aria-labelledby="markets-title">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Coverage</Eyebrow>
          <h2
            id="markets-title"
            className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
          >
            Markets
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Research and signals across the markets that move most.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="h-full" delay={index * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
