import { Check, Scale, ShieldCheck } from 'lucide-react';
import Eyebrow from './components/Eyebrow.jsx';
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
    title: 'Clearly Labelled',
    text: 'Sample cards on this page are marked as samples. Published reviews will come from real users who agreed to share them.',
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
 * Dedicated Reviews page. The review slider leads the page inside a
 * shadow-card panel, with no separate gradient header or gray background.
 * Sample reviews are visibly labeled and disclosed.
 */
export default function ReviewsPage() {
  return (
    <div className="bg-white pt-10 sm:pt-12">
      <section className="pb-16 sm:pb-20" aria-labelledby="reviews-title">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Reviews</Eyebrow>
            <h1
              id="reviews-title"
              className="mt-5 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-primary"
            >
              Reviews, Published Honestly
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              See how the platform feels to use, then share your own experience. The cards below
              are clearly marked samples until real customer reviews are published.
            </p>
          </div>

          <div className="mt-10">
            <ReviewsSlider />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-muted">
            Sample reviews and ratings are shown to demonstrate the layout. They are not real
            customer endorsements. Genuine reviews will replace them as they are published with
            permission.
          </p>
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
              <a
                href="/contact"
                className="btn-ghost"
              >
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
