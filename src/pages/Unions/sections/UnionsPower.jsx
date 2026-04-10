import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsPower } from '@data/unionsPageContent'
import styles from '../Unions.module.css'

export default function UnionsPower() {
  const p = unionsPower
  return (
    <section className={styles.power}>
      <div className="container">
        <header className={`${styles.powerHeader} ${styles.sectionHead}`}>
          <ScrollReveal>
            <span className={styles.sLabel}>{p.label}</span>
            <h2 className={`${styles.sTitle} ${styles.sTitleDark}`}>
              {p.title}
              <br />
              <span className={styles.titleAccentOrange}>{p.titleAccent}</span>
            </h2>
            <p className={`${styles.sSub} ${styles.sSubMutedDark}`}>{p.sub}</p>
          </ScrollReveal>
        </header>
        <div className={styles.powerGrid}>
          {p.cells.map((cell) => (
            <ScrollReveal key={cell.title}>
              <article className={styles.powerCell}>
                <div className={styles.pcNum}>{cell.num}</div>
                <div className={styles.pcTitle}>{cell.title}</div>
                <p className={styles.pcDesc}>{cell.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
