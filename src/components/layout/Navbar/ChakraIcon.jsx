import styles from './Navbar.module.css'

export default function ChakraIcon({ size = 24 }) {
  const spokes = Array.from({ length: 24 }, (_, i) => (
    <line
      key={i}
      x1="12"
      y1="3"
      x2="12"
      y2="7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      transform={`rotate(${i * 15} 12 12)`}
    />
  ))

  return (
    <svg
      className={styles.chakraSvg}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      {spokes}
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
