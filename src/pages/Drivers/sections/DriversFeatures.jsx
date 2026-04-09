import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { driversBenefits } from '@data/driversContent'
import styles from '../Drivers.module.css'

export default function DriversFeatures() {
  return (
    <section className={styles.benefits} aria-labelledby="drivers-benefits-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.benefitsHead}>
            <span className={styles.sLabel}>{driversBenefits.label}</span>
            <h2 id="drivers-benefits-heading" className={styles.benefitsTitle}>
              {driversBenefits.title}
            </h2>
            <p className={styles.benefitsSub}>{driversBenefits.sub}</p>
          </header>
        </ScrollReveal>
        <div className={styles.benefitsGrid}>
          {driversBenefits.cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.05}>
              <motion.article
                className={`${styles.benefitCard} hover-lift`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div
                  className={`${styles.benefitIconWrap} ${
                    c.variant === 'green' ? styles.benefitIconGreen : styles.benefitIconOrange
                  } card-icon`}
                >
                  {c.icon}
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
