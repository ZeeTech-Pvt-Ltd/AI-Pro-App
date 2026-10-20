/**
 * AI Pro App logo - a lightweight SVG wordmark + AI spark mark.
 * `tone`: 'light' renders on a light page; 'dark' renders on a dark (navy) background.
 */
export function LogoMark({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Large four-point AI spark */}
      <path
        d="M9.5 2c.7 4.5 4 7.8 8.5 8.5-4.5.7-7.8 4-8.5 8.5C8.8 14.5 5.5 11.2 1 10.5 5.5 9.8 8.8 6.5 9.5 2Z"
        fill="currentColor"
      />
      {/* Small companion spark */}
      <path
        d="M18.5 13.5c.4 2.2 1.8 3.6 4 4-2.2.4-3.6 1.8-4 4-.4-2.2-1.8-3.6-4-4 2.2-.4 3.6-1.8 4-4Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Logo({ tone = 'light' }) {
  const onDark = tone === 'dark';
  const textColor = onDark ? 'text-white' : 'text-ink';
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md"
      aria-label="AI Pro App, back to homepage"
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white shadow-card ${
          onDark
            ? 'bg-gradient-to-br from-accent to-secondary'
            : 'bg-gradient-to-br from-primary to-secondary'
        }`}
      >
        <LogoMark className="h-[18px] w-[18px]" />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
        AI Pro{' '}
        <span className={onDark ? 'text-accent' : 'text-secondary'}>App</span>
      </span>
    </a>
  );
}
