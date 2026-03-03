interface SectionHeaderProps {
  title: string
  italicTitle?: string
  description?: string
  accent?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeader({
  title,
  italicTitle,
  description,
  accent,
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {accent && (
        <div className="mb-4 font-mono text-sm font-semibold tracking-wider text-primary uppercase">
          {accent}
        </div>
      )}
      <h2 className="max-w-3xl font-sans text-4xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
        {title}
        {italicTitle && (
          <>
            {' '}
            <span className="font-serif text-primary italic">{italicTitle}</span>
          </>
        )}
        .
      </h2>
      {description && (
        <p className="mt-6 max-w-xl font-mono text-foreground/60">
          {description}
        </p>
      )}
    </div>
  )
}
