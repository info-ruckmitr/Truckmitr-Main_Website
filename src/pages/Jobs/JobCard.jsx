import { MapPin, Truck, FileBadge, Users, Clock, BadgeCheck, TrendingUp, Briefcase, Calendar } from 'lucide-react'
import { formatSalaryRange } from '@utils/formatters'
import Button from '@components/ui/Button/Button'
import Tag from '@components/ui/Tag/Tag'
import styles from './Jobs.module.css'

export default function JobCard({ job, onViewDetails }) {
  return (
    <article className={`${styles.card} ${job.isPremium ? styles.cardPremium : ''} ${job.isGreenline ? styles.cardGreenline : ''}`}>
      {/* Ribbon */}
      {!job.isGreenline && job.badge === 'urgent' && (
        <div className={`${styles.premiumRibbon} ${styles.ribbonUrgent}`}>
          👑 URGENT HIRING
        </div>
      )}
      {!job.isGreenline && job.badge === 'fast' && (
        <div className={`${styles.premiumRibbon} ${styles.ribbonFast}`}>
          👑 FAST HIRING
        </div>
      )}

      <div className={styles.cardTop}>
        <div className={styles.logo} aria-hidden>
          {job.vehicleType.slice(0, 2).toUpperCase()}
        </div>
        <div className={styles.cardHead}>
          <div className={styles.titleRow}>
            <h2 className={styles.cardTitle}>{job.title}</h2>
          </div>
          <p className={styles.company}>{job.jobId} · {job.vehicleType}</p>
        </div>
      </div>

      <div className={styles.meta}>
        <Tag>
          <span className={styles.metaInner}>
            <MapPin size={14} /> {job.location}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <Truck size={14} /> {job.vehicleType}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <FileBadge size={14} /> {job.licenseType || 'Any'}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <Briefcase size={14} /> {job.experience} yrs
          </span>
        </Tag>
      </div>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <span className={styles.statItem} title="Applications received">
          <Users size={13} />
          <strong>{job.applications}</strong> applied
        </span>
        <span className={styles.statItem} title="Open positions">
          <TrendingUp size={13} />
          <strong>{job.driversNeeded}</strong> openings
        </span>
        <span className={styles.statItem} title="Posted date">
          <Clock size={13} />
          {job.postedAt}
        </span>
        {job.deadline && (
          <span className={`${styles.statItem} ${styles.deadline}`} title="Application deadline">
            <Calendar size={13} />
            Deadline: {job.deadline}
          </span>
        )}
      </div>

      <div className={styles.bottom}>
        <p className={styles.salary}>{formatSalaryRange(job.salary)}</p>
        <div className={styles.cardActions}>
          <button
            type="button"
            className={styles.viewDetailsBtn}
            onClick={onViewDetails}
          >
            View Details
          </button>
          <Button variant="primary" size="sm" onClick={() => window.location.href = 'https://truckmitr.com/login/'}>
            Apply Now →
          </Button>
        </div>
      </div>

      {job.isClosed && (
        <div className={styles.closedOverlay}>
          <span>Position Filled</span>
        </div>
      )}
    </article>
  )
}
