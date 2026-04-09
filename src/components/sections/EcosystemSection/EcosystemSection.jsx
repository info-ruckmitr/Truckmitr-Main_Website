import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './EcosystemSection.module.css'

const items = [
  { n: '01', title: 'Verified Profiles', text: 'Drivers and fleets trust our KYC-first onboarding.' },
  { n: '02', title: 'Jobs & Matching', text: 'Route and vehicle-fit roles that pay on time.' },
  { n: '03', title: 'Welfare & Schemes', text: 'PMSBY, PMJJBY, ESIC — simplified in your language.' },
  { n: '04', title: 'Training', text: 'MoRTH-aligned modules and EV upskilling.' },
  { n: '05', title: 'Safety & Compliance', text: 'Digital logs, fatigue alerts, and audit readiness.' },
  { n: '06', title: 'Income Protection', text: 'Insurance + benefits that keep families secure.' },
]

export default function EcosystemSection() {
  return (
    <section className={styles.section} aria-labelledby="eco-heading">
      <div className="container">
        <ScrollReveal>
          <h2 id="eco-heading" className={styles.heading}>
            The TruckMitr ecosystem
          </h2>
          <p className={styles.lead}>
            A full stack for drivers, fleets, and partners — built for India&apos;s highways.
          </p>
        </ScrollReveal>
        <div className={styles.grid}>
          {items.map((it, i) => (
            <ScrollReveal key={it.n} delay={i * 0.06}>
              <article className={styles.card}>
                <span className={styles.num}>{it.n}</span>
                <h3 className={styles.title}>{it.title}</h3>
                <p className={styles.text}>{it.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
