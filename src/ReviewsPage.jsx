import { Check, Scale, ShieldCheck } from 'lucide-react';
import PageHero from './components/PageHero.jsx';
import PageCTA from './components/PageCTA.jsx';
import RiskNote from './components/RiskNote.jsx';
import ReviewsSlider from './components/ReviewsSlider.jsx';

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Permission First',
    text: 'We ask before we publish anything, and we use only the name the person agrees to share.',
  },
  {
    icon: Check,
    title: 'Disclosed Clearly',
    text: 'The example cards above are disclosed as illustrative, not presented as real customer endorsements.',
  },
  {
    icon: Scale,
    title: 'No Payment For Praise',
    text: 'We do not pay for reviews. Positive and critical feedback is treated the same way.',
  },
];

const STANDARDS = [
  {
    title: 'Clarity',
    text: 'Can a new user understand what they are looking at without a guide?',
  },
  {
    title: 'Calm',
    text: 'Does the platform reduce noise instead of adding to it?',
  },
  {
    title: 'Honesty',
    text: 'Do we label examples, avoid promises and keep risk visible?',
  },
];

/**
 * Dedicated Reviews page. A separate dark hero introduces the page, then the
 * three-card review slider, review policy and feedback sections follow.
 */
export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Reviews"
        title="Reviews, Published Honestly"
        description="See how the platform feels to use, then share your own experience with AI Pro App."
      />

      <section className="py-16 sm:py-20" aria-labelledby="reviews-slider-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="reviews-slider-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              What People Are Saying
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              A look at the kind of experience the platform is built to deliver.
            </p>
          </div>

          <div className="mt-10">
            <ReviewsSlider />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 py-16 sm:py-20" aria-labelledby="review-policy-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="review-policy-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              How We Handle Reviews
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Three rules keep this page trustworthy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
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
        </div>
      </section>

      <section className="border-t border-ink/5 py-16 sm:py-20" aria-labelledby="standards-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="standards-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              What We Aim To Be Reviewed On
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              These are the qualities we want every user to judge us on.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STANDARDS.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-ink/5 bg-white p-7 shadow-card"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-sm font-extrabold text-accent-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 py-16 sm:py-20" aria-labelledby="feedback-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="feedback-title"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-primary"
            >
              Share Your Experience
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Used AI Pro App? Tell us what worked, what did not, and what would make the platform
              clearer for you. We read every message.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:support@ai-proapp.com?subject=Feedback%20about%20AI%20Pro%20App"
                className="btn-primary"
              >
                Send Feedback
              </a>
              <a href="/contact" className="btn-ghost">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <RiskNote />
      <PageCTA />
    </div>
  );
}
