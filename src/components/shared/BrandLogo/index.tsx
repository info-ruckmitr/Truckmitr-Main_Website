import logo from '../../../assets/logo/logotrick.png';

type Props = {
  className?: string;
  /** Visual height in CSS pixels (width scales with aspect ratio) */
  height?: number;
};

export function BrandLogo({ className = '', height = 40 }: Props) {
  return (
    <img
      src={logo}
      alt="TruckMitr"
      className={`w-auto max-w-[min(220px,55vw)] object-contain object-left ${className}`}
      style={{ height }}
      decoding="async"
    />
  );
}
