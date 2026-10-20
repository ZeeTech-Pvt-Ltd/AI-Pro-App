/**
 * Shared dark page hero for the secondary pages.
 * Full-width band with a white H1, so it stays readable on the dark surface.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 80% at 30% 0%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 0%, black, transparent)',
          }}
        />
      </div>

      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
      </div>
    </section>
  );
}
