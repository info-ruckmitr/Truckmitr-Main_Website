import { unionsSubNav, unionsHero } from '@data/unionsPageContent'
import { cn } from '@utils/cn'
import styles from '../Unions.module.css'

export default function UnionsSubNav({ className, onRegister }) {
  return (
    <nav className={cn(styles.subNav, className)} aria-label="On this page">
      <div className={`container ${styles.subNavInner}`}>
        <div className={styles.subNavLinks}>
          {unionsSubNav.map((item, index) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 'inherit' }}>
              <span className={styles.subNavSep}>•</span>
              <a className={styles.subNavLink} href={`#${item.id}`}>
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
