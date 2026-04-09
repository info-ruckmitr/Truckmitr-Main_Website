import styles from './HeroSection.module.css'

/** Thin wrapper for consistent hero padding on inner pages */
export default function HeroSection({ children, dark }) {
  return <div className={dark ? styles.dark : styles.light}>{children}</div>
}
