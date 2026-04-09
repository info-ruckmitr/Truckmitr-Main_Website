import { useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { jobs } from '@data/jobs'
import { jobsPageHero, jobsMarketingTags, jobsFleetPromo } from '@data/jobsPageContent'
import { IMAGES } from '@utils/constants'
import JobCard from './JobCard'
import JobFilters, { SALARY_MIN, SALARY_MAX } from './JobFilters'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Jobs.module.css'

function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

export default function Jobs() {
  const [route, setRoute] = useState('')
  const [vehicle, setVehicle] = useState('All')
  const [salaryMin, setSalaryMin] = useState(SALARY_MIN)
  const [salaryMax, setSalaryMax] = useState(SALARY_MAX)
  const [licenses, setLicenses] = useState([])
  const [state, setState] = useState('All')

  const toggleLicense = useCallback((l) => {
    setLicenses((prev) => (prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]))
  }, [])

  const filtered = useMemo(() => {
    const r = normalize(route)
    return jobs.filter((job) => {
      if (r && !normalize(job.route).includes(r) && !normalize(job.title).includes(r)) return false
      if (vehicle !== 'All' && job.type !== vehicle) return false
      if (state !== 'All' && job.state !== state) return false
      if (job.salary.max < salaryMin || job.salary.min > salaryMax) return false
      if (licenses.length > 0 && !licenses.includes(job.license)) return false
      return true
    })
  }, [route, vehicle, state, salaryMin, salaryMax, licenses])

  const hasActiveFilters =
    route !== '' ||
    vehicle !== 'All' ||
    state !== 'All' ||
    salaryMin !== SALARY_MIN ||
    salaryMax !== SALARY_MAX ||
    licenses.length > 0

  const pills = []
  if (route)
    pills.push({ key: 'route', label: `Route: ${route}`, clear: () => setRoute('') })
  if (vehicle !== 'All')
    pills.push({ key: 'vehicle', label: `Vehicle: ${vehicle}`, clear: () => setVehicle('All') })
  if (state !== 'All') pills.push({ key: 'state', label: `State: ${state}`, clear: () => setState('All') })
  if (salaryMin !== SALARY_MIN || salaryMax !== SALARY_MAX)
    pills.push({
      key: 'salary',
      label: `Salary: ₹${salaryMin.toLocaleString('en-IN')}–₹${salaryMax.toLocaleString('en-IN')}`,
      clear: () => {
        setSalaryMin(SALARY_MIN)
        setSalaryMax(SALARY_MAX)
      },
    })
  licenses.forEach((l) => {
    pills.push({
      key: `lic-${l}`,
      label: `License: ${l}`,
      clear: () => setLicenses((prev) => prev.filter((x) => x !== l)),
    })
  })

  const removePill = (key) => {
    const p = pills.find((x) => x.key === key)
    p?.clear()
  }

  return (
    <div className={styles.page}>
      <header className={styles.marketingHero}>
        <div
          className={styles.marketingHeroBg}
          style={{ backgroundImage: `url(${IMAGES.jobsPageHero})` }}
          aria-hidden
        />
        <div className={styles.marketingHeroOverlay} aria-hidden />
        <div className={`container ${styles.marketingInner}`}>
          <ScrollReveal>
            <span className={styles.eyebrow}>{jobsPageHero.eyebrow}</span>
            <h1 className={styles.title}>{jobsPageHero.title}</h1>
            <p className={styles.lead}>{jobsPageHero.lead}</p>
          </ScrollReveal>
        </div>
      </header>
      <div className={styles.sticky}>
        <div className="container">
          <JobFilters
            route={route}
            setRoute={setRoute}
            routePlaceholder={jobsPageHero.routeSearchPlaceholder}
            vehicle={vehicle}
            setVehicle={setVehicle}
            salaryMin={salaryMin}
            setSalaryMin={setSalaryMin}
            salaryMax={salaryMax}
            setSalaryMax={setSalaryMax}
            licenses={licenses}
            toggleLicense={toggleLicense}
            state={state}
            setState={setState}
            pills={pills}
            removePill={removePill}
          />
        </div>
      </div>
      <div className="container">
        <div className={styles.toolbar}>
          <p className={styles.toolbarLine}>
            Showing <strong>{jobsPageHero.showingCountLabel}</strong> verified jobs across India
            {hasActiveFilters && (
              <>
                {' '}
                · <strong>{filtered.length}</strong> match your filters
              </>
            )}
          </p>
          <div className={styles.marketingTags} aria-label="Popular job categories">
            {jobsMarketingTags.map((t) => (
              <span
                key={t.id}
                className={t.tone === 'orange' ? styles.tagOrange : styles.tagGreen}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {filtered.map((job) => (
            <ScrollReveal key={job.id}>
              <JobCard job={job} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <aside className={styles.fleetPromo}>
            <div>
              <h3>{jobsFleetPromo.title}</h3>
              <p>{jobsFleetPromo.body}</p>
            </div>
            <Link className={styles.fleetPromoCta} to={jobsFleetPromo.ctaTo}>
              {jobsFleetPromo.cta}
            </Link>
          </aside>
        </ScrollReveal>
      </div>
    </div>
  )
}
