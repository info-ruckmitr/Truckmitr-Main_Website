import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

export interface JobListing {
  company: string
  badge: string
  badgeVariant?: 'verified' | 'ev'
  salary: string
  route: string
  truck: string
  licence: string
  joining: string
  benefits: string[]
}

export function JobCard({ job }: { job: JobListing }) {
  const isEv = job.badgeVariant === 'ev'
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        'rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 backdrop-blur-xl transition-colors',
        'hover:border-[#FF9933]/50 hover:shadow-[0_8px_32px_rgba(232,98,26,0.08)]',
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{job.company}</h3>
        <span
          className={cn(
            'rounded-full px-2.5 py-0.5 text-xs font-semibold',
            isEv ? 'bg-[#6B5CE7]/25 text-[#6B5CE7]' : 'bg-[#138808]/20 text-[#138808]',
          )}
        >
          {job.badge}
        </span>
      </div>
      <p className="mt-3 text-2xl font-extrabold text-[#FF9933]">{job.salary}</p>
      <div className="mt-4 grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
        <p>{job.route}</p>
        <p>{job.truck}</p>
        <p>{job.licence}</p>
        <p>{job.joining}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.benefits.map((b) => (
          <span
            key={b}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-[var(--text-secondary)]"
          >
            {b}
          </span>
        ))}
      </div>
      <Button variant="whatsapp" className="mt-6 w-full" as="a" href="#">
        💬 Apply via WhatsApp
      </Button>
    </motion.div>
  )
}
