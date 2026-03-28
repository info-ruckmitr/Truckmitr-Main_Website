import { type ReactNode } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className = '', delay }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
