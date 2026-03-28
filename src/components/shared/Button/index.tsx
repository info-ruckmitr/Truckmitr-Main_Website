import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'whatsapp';

type Props = {
  variant?: Variant;
  href?: string;
  external?: boolean;
  icon?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:opacity-90',
  secondary: 'bg-surface-container-low text-primary border border-outline-variant/20 hover:bg-surface-container-high',
  tertiary: 'bg-tertiary text-on-tertiary hover:brightness-110',
  outline: 'border border-outline-variant text-on-surface hover:bg-surface-container',
  whatsapp: 'bg-[#25D366] text-white hover:brightness-95',
};

export function Button({ variant = 'primary', href, external, icon, children, className = '', ...rest }: Props) {
  const base = `inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {icon && <span className="material-symbols-outlined">{icon}</span>}
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={base}>
        {icon && <span className="material-symbols-outlined">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...rest}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
}
