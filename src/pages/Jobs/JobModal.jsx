import { useEffect } from 'react'
import { X, MapPin, Truck, FileBadge, Briefcase, Users, TrendingUp, Clock, Calendar } from 'lucide-react'
import { formatSalaryRange } from '@utils/formatters'
import Button from '@components/ui/Button/Button'
import styles from './Jobs.module.css'

export default function JobModal({ job, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  /** Clean the description for readable rendering */
  const cleanDescription = (desc) => {
    if (!desc) return ''
    return desc
      .replace(/[\u2500]+/g, '') // remove box lines
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
  }

  const lines = cleanDescription(job.description)

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLeft}>
            <div className={styles.modalLogo}>{job.vehicleType.slice(0, 2).toUpperCase()}</div>
            <div>
              <h2 className={styles.modalTitle}>{job.title}</h2>
              <p className={styles.modalSubtitle}>{job.jobId} · {job.vehicleType}</p>
            </div>
          </div>
          <button className={styles.modalClose} onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        {/* Key info chips */}
        <div className={styles.modalChips}>
          <div className={styles.modalChip}><MapPin size={15} /> {job.location}</div>
          <div className={styles.modalChip}><Truck size={15} /> {job.vehicleType}</div>
          <div className={styles.modalChip}><FileBadge size={15} /> {job.licenseType || 'Any'}</div>
          <div className={styles.modalChip}><Briefcase size={15} /> {job.experience} yrs exp</div>
          <div className={styles.modalChip}><Calendar size={15} /> Deadline: {job.deadline || 'Open'}</div>
        </div>

        {/* Stats */}
        <div className={styles.modalStats}>
          <div className={styles.modalStatCard}>
            <span className={styles.modalStatValue}>{formatSalaryRange(job.salary)}</span>
            <span className={styles.modalStatLabel}>Salary Range</span>
          </div>
          <div className={styles.modalStatCard}>
            <span className={styles.modalStatValue}>{job.applications}</span>
            <span className={styles.modalStatLabel}>Applications</span>
          </div>
          <div className={styles.modalStatCard}>
            <span className={styles.modalStatValue}>{job.driversNeeded}</span>
            <span className={styles.modalStatLabel}>Openings</span>
          </div>
          <div className={styles.modalStatCard}>
            <span className={styles.modalStatValue}>{job.postedAt}</span>
            <span className={styles.modalStatLabel}>Posted</span>
          </div>
        </div>

        {/* Application progress bar */}
        <div className={styles.applicationProgress}>
          <div className={styles.applicationProgressHeader}>
            <span>Application Status</span>
            <span className={styles.applicationCount}>
              {job.applications} / {job.driversNeeded > 0 ? Math.max(job.applications + Math.ceil(job.driversNeeded * 1.5), 100) : 100} capacity
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${Math.min(
                  (job.applications / Math.max(job.applications + Math.ceil(job.driversNeeded * 1.5), 100)) * 100,
                  95
                )}%`
              }}
            />
          </div>
          <p className={styles.progressHint}>Apply soon — positions are filling quickly!</p>
        </div>

        {/* Description */}
        <div className={styles.modalBody}>
          <h3 className={styles.modalSectionTitle}>Job Description</h3>
          <div className={styles.modalDescription}>
            {lines.map((line, i) => (
              <p key={i} className={styles.descLine}>{line}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button type="button" className={styles.viewDetailsBtn} onClick={onClose}>
            Close
          </button>
          <Button variant="primary" size="md">
            Apply Now →
          </Button>
        </div>
      </div>
    </div>
  )
}
