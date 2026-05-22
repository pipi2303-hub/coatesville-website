interface Props {
  tag?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, light = false }: Props) {
  return (
    <div className="text-center mb-14">
      {tag && (
        <div className={light ? 'section-tag-light' : 'section-tag'}>
          {tag}
        </div>
      )}
      <h2 className={light ? 'text-white mt-1 mb-3' : 'mt-1 mb-3'}>{title}</h2>
      <div className="divider" />
      {subtitle && (
        <p className={`max-w-[580px] mx-auto mt-4 ${light ? 'text-white/65' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
