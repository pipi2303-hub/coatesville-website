interface Props {
  tag?: string
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

export default function PageHero({ tag, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="bg-hero-gradient pt-36 pb-20 text-center text-white relative overflow-hidden">
      {/* decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-mid/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-xs text-white/50 mb-4 uppercase tracking-widest">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <span className={i === breadcrumb.length - 1 ? 'text-accent' : ''}>{b.label}</span>
              </span>
            ))}
          </div>
        )}
        {tag && <div className="section-tag-light mx-auto">{tag}</div>}
        <h1 className="text-white mt-2 mb-4">{title}</h1>
        {subtitle && (
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
