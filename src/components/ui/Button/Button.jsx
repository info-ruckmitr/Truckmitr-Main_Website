import { Link } from 'react-router-dom'
import { cn } from '@utils/cn'
import styles from './Button.module.css'

function ChakraSpinner({ className }) {
  return (
    <svg
      className={cn(styles.spinner, className)}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        className={styles.chakraRing}
      />
    </svg>
  )
}

function buttonClassName({ variant, size, className }) {
  return cn(
    styles.btn,
    styles[variant],
    styles[`size-${size}`],
    variant === 'primary' && styles.primaryGlow,
    className,
  )
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  type = 'button',
  to,
  href,
  ...rest
}) {
  const isDisabled = disabled || loading
  const cls = buttonClassName({ variant, size, className })

  const inner = (
    <>
      {loading ? (
        <ChakraSpinner />
      ) : (
        Icon &&
        iconPosition === 'left' && <Icon className={styles.icon} size={18} aria-hidden />
      )}
      {children && <span className={styles.label}>{children}</span>}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={styles.icon} size={18} aria-hidden />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} aria-disabled={isDisabled} {...rest}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} aria-disabled={isDisabled} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} className={cls} disabled={isDisabled} {...rest}>
      {inner}
    </button>
  )
}

export { ChakraSpinner }
