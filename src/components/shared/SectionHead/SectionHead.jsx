import { cn } from '@utils/cn'
import styles from './SectionHead.module.css'

export default function SectionHead({
  label,
  title,
  subtitle,
  align = 'left',
  highlightWord,
}) {
  return (
    <div className={cn(styles.wrap, align === 'center' && styles.center)}>
      {label && (
        <p className={styles.label}>
          <span className={styles.dot} aria-hidden />
          {label}
        </p>
      )}
      {title && (
        <h2 className={styles.title}>
          {highlightWord && title.includes(highlightWord) ? (
            <>
              {title.slice(0, title.indexOf(highlightWord))}
              <span className={styles.hl}>{highlightWord}</span>
              {title.slice(title.indexOf(highlightWord) + highlightWord.length)}
            </>
          ) : (
            title
          )}
        </h2>
      )}
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  )
}
