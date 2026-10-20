'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

/*
 * Sample review content.
 *
 * These are clearly marked samples, not real customer testimonials. The house
 * rules do not allow invented reviews to be presented as genuine, so every
 * card carries a "Sample review" badge and the page carries a disclosure.
 * Replace this array with real, permissioned reviews when they are available.
 */
const REVIEWS = [
  {
    name: 'Alex M.',
    location: 'Sydney, NSW',
    rating: 5,
    image: '/reviews/reviewer-1.jpg',
    quote:
      'The workspace keeps market information in one place. I can check a chart, read the summary and move on without opening five tabs.',
  },
  {
    name: 'Priya S.',
    location: 'Melbourne, VIC',
    rating: 4.5,
    image: '/reviews/reviewer-2.jpg',
    quote:
      'The interface is calm and the explanations are plain. I would like more education content, but what is there is genuinely useful.',
  },
  {
    name: 'Daniel K.',
    location: 'Brisbane, QLD',
    rating: 4,
    image: '/reviews/reviewer-3.jpg',
    quote:
      'Good for keeping a watchlist and following market moves. It took me a little time to learn where everything sits.',
  },
  {
    name: 'Sophie L.',
    location: 'Perth, WA',
    rating: 4.5,
    image: '/reviews/reviewer-4.jpg',
    quote:
      'I use it to scan the market each morning. The daily summary saves me time and the charts are easy to read.',
  },
  {
    name: 'Marcus T.',
    location: 'Adelaide, SA',
    rating: 5,
    image: '/reviews/reviewer-5.jpg',
    quote:
      'Clear layout, no pressure and no hype. The risk labels are visible, which I appreciate.',
  },
];

function Stars({ rating }) {
  return (
    <span
      role="img"
      aria-label={`${rating} out of 5 stars, sample review`}
      className="flex items-center gap-0.5"
    >
      {[0, 1, 2, 3, 4].map((index) => {
        const value = index + 1;
        if (rating >= value) {
          return (
            <Star
              key={value}
              className="h-4 w-4 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
          );
        }
        if (rating >= value - 0.5) {
          return (
            <StarHalf
              key={value}
              className="h-4 w-4 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
          );
        }
        return <Star key={value} className="h-4 w-4 text-ink/15" aria-hidden="true" />;
      })}
    </span>
  );
}

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const total = REVIEWS.length;
  const move = (delta) => setIndex((current) => (current + delta + total) % total);

  return (
    <div aria-roledescription="carousel" aria-label="Sample customer reviews">
      <div className="overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-card">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {REVIEWS.map((review, position) => (
            <article
              key={review.name}
              className="w-full shrink-0 p-6 sm:p-10 lg:p-12"
              aria-roledescription="slide"
              aria-label={`${position + 1} of ${total}`}
              aria-hidden={position !== index}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <img
                  src={review.image}
                  alt=""
                  aria-hidden="true"
                  width="96"
                  height="96"
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-accent/15 sm:h-24 sm:w-24"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-base font-bold text-primary">{review.name}</p>
                      <p className="text-xs text-muted">{review.location}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Stars rating={review.rating} />
                      <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
                        Sample review
                      </span>
                    </div>
                  </div>
                  <blockquote className="mt-5 text-lg font-medium leading-relaxed text-ink sm:text-xl">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous sample review"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-primary shadow-card transition hover:border-primary/40 hover:text-secondary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next sample review"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-primary shadow-card transition hover:border-primary/40 hover:text-secondary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {REVIEWS.map((review, position) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setIndex(position)}
              aria-label={`Show sample review ${position + 1}`}
              aria-current={position === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all ${
                position === index ? 'w-6 bg-primary' : 'w-2.5 bg-ink/15 hover:bg-ink/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
