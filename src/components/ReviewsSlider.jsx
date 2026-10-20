'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

/*
 * Review content.
 *
 * The page carries a disclosure that these cards are illustrative examples,
 * because the house rules do not allow invented reviews to be presented as
 * genuine customer endorsements. Replace this array with real, permissioned
 * reviews when they are available.
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
      aria-label={`${rating} out of 5 stars`}
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
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    setActive(index);
  };

  const move = (delta) => {
    const next = Math.min(Math.max(active + delta, 0), REVIEWS.length - 1);
    scrollToCard(next);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    let closest = 0;

    cards.forEach((card, index) => {
      if (card.offsetLeft <= track.scrollLeft + 1) closest = index;
    });

    setActive(closest);
  };

  return (
    <div aria-roledescription="carousel" aria-label="Customer reviews">
      <div
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Customer reviews carousel"
        className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((review, index) => (
          <article
            key={review.name}
            className="flex w-full shrink-0 snap-start flex-col rounded-2xl border border-ink/5 bg-white p-6 shadow-card sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${REVIEWS.length}`}
          >
            <div className="flex items-center gap-3">
              <img
                src={review.image}
                alt=""
                aria-hidden="true"
                width="48"
                height="48"
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-accent/15"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-primary">{review.name}</p>
                <p className="text-xs text-muted">{review.location}</p>
              </div>
            </div>

            <div className="mt-4">
              <Stars rating={review.rating} />
            </div>

            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink sm:text-[15px]">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous reviews"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-primary shadow-card transition hover:border-primary/40 hover:text-secondary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next reviews"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-primary shadow-card transition hover:border-primary/40 hover:text-secondary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {REVIEWS.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-6 bg-primary' : 'w-2.5 bg-ink/15 hover:bg-ink/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
