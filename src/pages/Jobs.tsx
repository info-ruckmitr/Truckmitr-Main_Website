import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { JobCard, type JobListing } from '../components/jobs/JobCard'
import { Button } from '../components/ui/Button'
import { SectionReveal, StaggerSection, FadeItem } from '../components/motion/SectionReveal'
import { cn } from '../lib/utils'

const filters = [
  'All Routes',
  'Long-Haul',
  'Regional',
  'Local',
  'Container',
  'Tipper',
  'Tanker',
  'Refrigerated',
] as const

const jobs: JobListing[] = [
  {
    company: 'ABC Logistics Pvt Ltd',
    badge: '✓ Verified',
    salary: '₹28,000 – ₹35,000 /month',
    route: '🛣️ Delhi → Mumbai (Long-Haul)',
    truck: '🚛 40ft Container',
    licence: '📋 HMV Licence Required',
    joining: '⏰ Immediate Joining',
    benefits: ['🏠 Accommodation', '🏥 Medical Support', '💰 Trip Incentive'],
  },
  {
    company: 'XYZ Transport Co.',
    badge: '✓ Verified',
    salary: '₹22,000 – ₹28,000 /month',
    route: '🛣️ Jaipur → Ahmedabad (Regional)',
    truck: '🚛 Tipper / Open Body',
    licence: '📋 HMV Licence Required',
    joining: '⏰ Within 2 Weeks',
    benefits: ['💰 Monthly Fixed', '🏥 PMSBY Enrolled', '📅 Weekly Off'],
  },
  {
    company: 'National Freight Services',
    badge: '✓ Verified',
    salary: '₹32,000 – ₹40,000 /month',
    route: '🛣️ Chennai → Bangalore (Regional)',
    truck: '🚛 Refrigerated Van',
    licence: '📋 HMV + Cold Chain Exp.',
    joining: '⏰ Immediate Joining',
    benefits: [
      '🏠 Accommodation',
      '🏥 Health Check-ups',
      '💰 Performance Bonus',
      '📱 e-Shram Supported',
    ],
  },
  {
    company: 'GreenWheels EV Fleet',
    badge: '⚡ EV Fleet',
    badgeVariant: 'ev',
    salary: '₹30,000 – ₹38,000 /month',
    route: '🛣️ Pune → Mumbai (Short-Haul)',
    truck: '⚡ Electric Truck',
    licence: '📋 HMV + EV Training Pref.',
    joining: '⏰ Flexible Start',
    benefits: ['⚡ EV Training Provided', '🏥 Full Medical', '💰 Fixed + Incentive'],
  },
]

export default function Jobs() {
  const [active, setActive] = useState<string>('All Routes')

  const pillColor = (f: string) => {
    if (f === active) return 'bg-[#FF9933] text-white border-[#FF9933]'
    if (f === 'Long-Haul') return 'border-[#138808]/50 hover:bg-[#138808]/10'
    if (f === 'Regional') return 'border-[#0055A4]/50 hover:bg-[#0055A4]/10'
    if (f === 'Local') return 'border-[#6B5CE7]/50 hover:bg-[#6B5CE7]/10'
    return 'border-[var(--border)] bg-white hover:bg-slate-50'
  }

  return (
    <>
      <Helmet>
        <title>Driver Job Board — TruckMitr</title>
      </Helmet>

      <section className="bg-[var(--bg-primary)] px-6 py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <h1 className="font-display text-4xl font-black text-[var(--text-primary)]">
              Driver <span className="text-[#FF9933]">Job Board</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
              Verified jobs with clear salary, route, and benefits. No scams. Apply in one tap.
            </p>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-[var(--text-secondary)]">
              A job board for drivers should not feel like a gamble. It should feel like clarity.
              Every listing on TruckMitr follows a standard format so you can compare jobs and
              choose what works for you and your family.
            </p>
          </SectionReveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  pillColor(f),
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <StaggerSection>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <FadeItem key={job.company}>
                  <JobCard job={job} />
                </FadeItem>
              ))}
            </div>
          </StaggerSection>

          <SectionReveal>
            <div className="mt-16 rounded-2xl border border-[#138808]/20 bg-[#138808]/10 p-8">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                🛡️ How We Reduce Job Scams
              </h2>
              <p className="mt-2 text-[var(--text-secondary)]">
                Trust is the entire product. Here is what &apos;verified&apos; means on TruckMitr:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>✓ Fleet partner identity confirmed — we verify who is posting the job</li>
                <li>✓ Job poster contact verified — a real person, not a fake number</li>
                <li>✓ Basic job details checked — salary range, route, and requirements confirmed</li>
                <li>
                  ✓ What you should still ask: advance policy, deduction details, actual route
                  realities
                </li>
                <li className="text-[#E53E3E]">
                  ⚠️ Never pay anyone for a job placement. TruckMitr never charges drivers
                  placement fees.
                </li>
              </ul>
            </div>
          </SectionReveal>

          <div className="mt-16 rounded-2xl bg-[var(--section-alt)] p-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Don&apos;t See the Right Job Today?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[var(--text-secondary)]">
              Create your profile once. We will send job matches when new openings come.
            </p>
            <Button variant="saffron" size="lg" className="mt-6" as="a" href="#">
              Create Driver Profile →
            </Button>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Takes 2 minutes. WhatsApp or OTP based. No long forms.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
