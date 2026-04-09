import styles from './PageWrapper.module.css'

export default function PageWrapper({ children, className }) {
  return <div className={`${styles.wrap} ${className || ''}`}>{children}</div>
}
