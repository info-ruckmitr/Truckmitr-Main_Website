import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeTestimonials } from '@data/homeContent'
import styles from './HomeTestimonials.module.css'

export default function HomeTestimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <span className={styles.label}>{homeTestimonials.label}</span>
            <h2 id="testimonials-heading" className={styles.title}>
              {homeTestimonials.title}
            </h2>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {homeTestimonials.items.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <blockquote className={styles.card}>
                <span className={styles.quoteMark} aria-hidden>
                  &ldquo;
                </span>
                <p className={styles.text} lang={t.id === 't1' ? 'hi' : undefined}>
                  {t.quote}
                </p>
                <footer className={styles.author}>
                  <div className={styles.avatar} aria-hidden>
                    {t.initials}
                  </div>
                  <div>
                    <span className={styles.name}>{t.name}</span>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
