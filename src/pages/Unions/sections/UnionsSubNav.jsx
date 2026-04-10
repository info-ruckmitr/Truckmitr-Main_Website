import { unionsSubNav, unionsHero } from '@data/unionsPageContent'
import { cn } from '@utils/cn'
import styles from '../Unions.module.css'

export default function UnionsSubNav({ className }) {
  return (
    <nav className={cn(styles.subNav, className)} aria-label="On this page">
      <div className={`container ${styles.subNavInner}`}>
        <div className={styles.subNavLinks}>
          {unionsSubNav.map((item) => (
            <a key={item.id} className={styles.subNavLink} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <a className={styles.subNavCta} href={unionsHero.navCta.href}>
          {unionsHero.navCta.label}
        </a>
      </div>
    </nav>
  )
}
