type Variant = 'primary' | 'secondary' | 'tertiary' | 'error';

type Props = {
  children: string;
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
  error: 'bg-error/10 text-error',
};

export function BadgePill({ children, variant = 'secondary', className = '' }: Props) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
