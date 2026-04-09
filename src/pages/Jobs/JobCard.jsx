import { useState } from 'react'
import { MapPin, Truck, FileBadge, Clock, BadgeCheck } from 'lucide-react'
import { formatSalaryRange, truncate } from '@utils/formatters'
import Button from '@components/ui/Button/Button'
import Tag from '@components/ui/Tag/Tag'
import styles from './Jobs.module.css'

export default function JobCard({ job }) {
  const [open, setOpen] = useState(false)
  const desc = open ? job.description : truncate(job.description, 140)

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.logo} aria-hidden>
          {job.company.slice(0, 1)}
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
                      : styles.badgeUrgent
                }
              >
                {job.badge === 'new' ? 'NEW' : job.badge === 'hot' ? 'HOT' : 'URGENT'}
              </span>
            )}
          </div>
          <p className={styles.company}>{job.company}</p>
        </div>
        {job.verified && (
          <span className={styles.verified}>
            <BadgeCheck size={16} /> Verified
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <Tag>
          <span className={styles.metaInner}>
            <MapPin size={14} /> {job.route}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <Truck size={14} /> {job.type}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <FileBadge size={14} /> {job.license}
          </span>
        </Tag>
        <Tag>
          <span className={styles.metaInner}>
            <Clock size={14} /> {job.posted}
          </span>
        </Tag>
      </div>
      <p className={styles.desc}>
        {desc}{' '}
        <button type="button" className={styles.readMore} onClick={() => setOpen(!open)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      </p>
      <div className={styles.bottom}>
        <p className={styles.salary}>{formatSalaryRange(job.salary)}</p>
        <Button variant="primary" size="sm">
          Apply Now →
        </Button>
      </div>
    </article>
  )
}
