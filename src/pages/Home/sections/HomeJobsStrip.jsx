import { Link } from 'react-router-dom'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import { homeJobsStrip } from '@data/homeContent'
import styles from './HomeJobsStrip.module.css'

export default function HomeJobsStrip() {
  return (
    <section className={styles.section} aria-labelledby="jobs-strip-heading">
      <div className="container">
        <div className={styles.row}>
          <ScrollReveal>
            <div>
              <span className={styles.label}>{homeJobsStrip.label}</span>
              <h2 id="jobs-strip-heading" className={styles.title}>
                {homeJobsStrip.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <Button to={homeJobsStrip.viewAllTo} variant="primary" size="md">
              {homeJobsStrip.viewAllLabel}
            </Button>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {homeJobsStrip.jobs.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 0.07}>
              <Link to={homeJobsStrip.viewAllTo} className={styles.card}>
                <div className={styles.jobTitle}>{job.title}</div>
                <div className={styles.meta}>
                  {job.chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div className={styles.footer}>
                  <span className={styles.pay}>{job.pay}</span>
                  <span className={styles.apply}>Apply Now</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
