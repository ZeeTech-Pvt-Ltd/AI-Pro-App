/**
 * AI Pro App logo - a lightweight SVG wordmark + ascending market bars.
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
      <rect x="3.25" y="13.5" width="4" height="7" rx="1.4" fill="currentColor" opacity="0.8" />
      <rect x="10" y="9.5" width="4" height="11" rx="1.4" fill="currentColor" />
      <rect x="16.75" y="5" width="4" height="15.5" rx="1.4" fill="currentColor" opacity="0.9" />
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
