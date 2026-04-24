import { MapPin, Truck, FileBadge, Users, Clock, BadgeCheck, TrendingUp, Briefcase } from 'lucide-react'
import { formatSalaryRange } from '@utils/formatters'
import Button from '@components/ui/Button/Button'
import Tag from '@components/ui/Tag/Tag'
import styles from './Jobs.module.css'

export default function JobCard({ job, onViewDetails }) {
  return (
    <article className={`${styles.card} ${job.isPremium ? styles.cardPremium : ''}`}>
      {/* Premium ribbon */}
      {job.isPremium && <div className={styles.premiumRibbon}>⭐ Premium</div>}

      <div className={styles.cardTop}>
        <div className={styles.logo} aria-hidden>
          {job.vehicleType.slice(0, 2).toUpperCase()}
        </div>
        <div className={styles.cardHead}>
          <div className={styles.titleRow}>
            <h2 className={styles.cardTitle}>{job.title}</h2>
            {job.badge && (
              <span
                className={
                  job.badge === 'new'
                    ? styles.badgeNew
                    : job.badge === 'hot'
                      ? styles.badgeHot
                      : job.badge === 'premium'
                        ? styles.badgePremium
                        : styles.badgeUrgent
                }
              >
                {job.badge === 'new' ? 'NEW' : job.badge === 'hot' ? '🔥 HOT' : job.badge === 'premium' ? 'FEATURED' : 'URGENT'}
              </span>
            )}
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
        <span className={styles.statItem}>
          <Users size={13} />
          <strong>{job.applications}</strong> applied
        </span>
        <span className={styles.statItem}>
          <TrendingUp size={13} />
          <strong>{job.driversNeeded}</strong> openings
        </span>
        <span className={styles.statItem}>
          <Clock size={13} />
          {job.postedAt}
        </span>
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
          <Button variant="primary" size="sm">
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
