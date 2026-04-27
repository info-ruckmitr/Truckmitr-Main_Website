import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Truck, Clock, Users, Calendar } from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import { homeJobsStrip } from '@data/homeContent'
import { formatSalaryRange } from '@utils/formatters'
import styles from './HomeJobsStrip.module.css'

/** Parse "20000-25000" → { min: 20000, max: 25000 } */
function parseSalaryRange(str) {
  if (!str) return { min: 0, max: 0 }
  const parts = str.split('-').map(Number)
  return { min: parts[0] || 0, max: parts[1] || parts[0] || 0 }
}

/** Formatted date */
function formatDate(dateStr) {
  if (!dateStr) return 'Recently'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return 'Recently'
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

/** Transform API item */
function transformJob(item) {
  return {
    id: item.id,
    jobId: item.job_id,
    title: item.job_title
      ?.replace(/[\u{1F600}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{FE00}-\u{FEFF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim() || 'Driver Required',
    location: item.job_location || 'India',
    vehicleType: item.vehicle_type || 'Truck',
    salary: parseSalaryRange(item.Salary_Range),
    postedAt: formatDate(item.Updated_at || item.updated_at || item.Created_at),
    deadline: item.Application_Deadline || '',
    driversNeeded: item.number_of_drivers_required || 1,
  }
}

export default function HomeJobsStrip() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch('https://truckmitr.com/api/all-jobs-web')
      .then((r) => r.json())
      .then((res) => {
        if (cancelled) return
        if (res.status && Array.isArray(res.data)) {
          const now = Date.now()
          const ONE_WEEK = 7 * 24 * 60 * 60 * 1000
          const live = res.data
            .filter((j) => j.active_inactive === 1 && j.status === '1')
            .filter((j) => {
              const updated = new Date(j.Updated_at || j.updated_at || j.Created_at).getTime()
              return now - updated <= ONE_WEEK
            })
            .sort((a, b) => new Date(b.Updated_at || b.updated_at || b.Created_at) - new Date(a.Updated_at || a.updated_at || a.Created_at))
            .slice(0, 3)
            .map(transformJob)
          setJobs(live)
        }
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

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
              {homeJobsStrip.sub && (
                <p className={styles.sub}>{homeJobsStrip.sub}</p>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <Button to={homeJobsStrip.viewAllTo} variant="primary" size="md">
              {homeJobsStrip.viewAllLabel}
            </Button>
          </ScrollReveal>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className={styles.grid}>
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.skeleton} />
            ))}
          </div>
        )}

        {/* Live job cards */}
        {!loading && jobs.length > 0 && (
          <div className={styles.grid}>
            {jobs.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 0.07}>
                <Link to={`/jobs?jobId=${job.id}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logo} aria-hidden>
                      {job.vehicleType.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className={styles.jobTitle}>{job.title}</div>
                      <span className={styles.vehicleType}>{job.jobId} · {job.vehicleType}</span>
                    </div>
                  </div>

                  <div className={styles.chipRow}>
                    <span className={styles.chip}>
                      <MapPin size={13} /> {job.location}
                    </span>
                    <span className={styles.chip}>
                      <Truck size={13} /> {job.vehicleType}
                    </span>
                  </div>

                  <div className={styles.statsRow}>
                    <span className={styles.statItem}>
                      <Users size={12} />
                      <strong>{job.driversNeeded}</strong> openings
                    </span>
                    <span className={styles.statItem}>
                      <Clock size={12} />
                      {job.postedAt}
                    </span>
                    {job.deadline && (
                      <span className={styles.statItem} style={{ color: 'var(--india-orange)', fontWeight: 500 }}>
                        <Calendar size={12} />
                        Deadline: {job.deadline}
                      </span>
                    )}
                  </div>

                  <div className={styles.footer}>
                    <span className={styles.pay}>{formatSalaryRange(job.salary)}</span>
                    <span className={styles.apply}>View Details →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Fallback if API returns nothing */}
        {!loading && jobs.length === 0 && (
          <div className={styles.emptyState}>
            <p>No jobs available right now. Check back soon!</p>
            <Button to="/jobs" variant="primary" size="sm">
              Visit Jobs Page →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
