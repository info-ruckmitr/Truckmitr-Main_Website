type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ label, title, subtitle, centered = false, className = '' }: Props) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">
          {label}
        </span>
      )}
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}
