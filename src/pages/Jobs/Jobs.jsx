import { useEffect, useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { jobsPageHero, jobsMarketingTags, jobsFleetPromo } from '@data/jobsPageContent'
import { IMAGES } from '@utils/constants'
import JobCard from './JobCard'
import JobFilters, { SALARY_MIN, SALARY_MAX } from './JobFilters'
import JobModal from './JobModal'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Jobs.module.css'

function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

/** Parse "20000-25000" → { min: 20000, max: 25000 } */
function parseSalaryRange(str) {
  if (!str) return { min: 0, max: 0 }
  const parts = str.split('-').map(Number)
  return { min: parts[0] || 0, max: parts[1] || parts[0] || 0 }
}

/** Generate a deterministic fake application count based on job id */
function fakeApplications(id) {
  const seed = ((id * 2654435761) >>> 0) % 1000
  if (seed < 200) return Math.floor(seed / 2) + 5
  if (seed < 600) return Math.floor(seed / 4) + 25
  return Math.floor(seed / 6) + 50
}

/** Days ago from date string */
function daysAgo(dateStr) {
  if (!dateStr) return 'Recently'
  const d = new Date(dateStr)
  const now = new Date()
  const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24))
  if (diff <= 0) return 'Today'
  if (diff === 1) return '1 day ago'
  if (diff < 7) return `${diff} days ago`
  if (diff < 30) return `${Math.floor(diff / 7)} week${Math.floor(diff / 7) > 1 ? 's' : ''} ago`
  return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? 's' : ''} ago`
}

/** Determine badge based on job traits */
function getBadge(job) {
  const d = new Date(job.Created_at)
  const now = new Date()
  const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24))
  if (diff <= 3) return 'new'
  if (job.number_of_drivers_required >= 10) return 'hot'
  if (job.subscription_plan_name === 'super_premium_job') return 'premium'
  return null
}

/** Transform API item to a normalized job object */
function transformJob(item) {
  const salary = parseSalaryRange(item.Salary_Range)
  return {
    id: item.id,
    jobId: item.job_id,
    title: item.job_title
      ?.replace(/[\u{1F600}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{FE00}-\u{FEFF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim() || 'Driver Required',
    location: item.job_location || 'India',
    experience: item.Required_Experience || 'Any',
    salary,
    licenseType: (item.Type_of_License || '').toUpperCase(),
    vehicleType: item.vehicle_type || 'Other',
    description: item.Job_Description || '',
    deadline: item.Application_Deadline || '',
    driversNeeded: item.number_of_drivers_required || 1,
    postedAt: daysAgo(item.Created_at),
    createdAt: item.Created_at,
    badge: getBadge(item),
    applications: fakeApplications(item.id),
    isPremium: item.subscription_plan_name?.includes('premium'),
    isClosed: item.closed_job === 'yes',
    subId: item.sub_id,
  }
}

export default function Jobs() {
  const [apiJobs, setApiJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)

  /* Filters */
  const [search, setSearch] = useState('')
  const [vehicle, setVehicle] = useState('All')
  const [salaryMin, setSalaryMin] = useState(SALARY_MIN)
  const [salaryMax, setSalaryMax] = useState(SALARY_MAX)
  const [license, setLicense] = useState('All')
  const [location, setLocation] = useState('All')
  const [experience, setExperience] = useState('All')
  const [datePosted, setDatePosted] = useState('All')

  /* Fetch API */
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch('https://truckmitr.com/api/all-jobs-web')
      .then((r) => r.json())
      .then((res) => {
        if (cancelled) return
        if (res.status && Array.isArray(res.data)) {
          const jobs = res.data
            .filter((j) => j.active_inactive === 1 && j.status === '1')
            .map(transformJob)
          setApiJobs(jobs)
        }
        setLoading(false)
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [])

  /* Derive filter options from data */
  const filterOptions = useMemo(() => {
    const locations = [...new Set(apiJobs.map((j) => j.location))].sort()
    const vehicles = [...new Set(apiJobs.map((j) => j.vehicleType))].sort()
    const licenses = [...new Set(apiJobs.map((j) => j.licenseType).filter(Boolean))].sort()
    const experiences = [...new Set(apiJobs.map((j) => j.experience).filter(Boolean))].sort()
    return { locations, vehicles, licenses, experiences }
  }, [apiJobs])

  /* Apply filters */
  const filtered = useMemo(() => {
    const s = normalize(search)
    return apiJobs.filter((job) => {
      if (s && !normalize(job.title).includes(s) && !normalize(job.location).includes(s) && !normalize(job.vehicleType).includes(s)) return false
      if (vehicle !== 'All' && job.vehicleType !== vehicle) return false
      if (location !== 'All' && job.location !== location) return false
      if (license !== 'All' && job.licenseType !== license) return false
      if (experience !== 'All' && job.experience !== experience) return false

      if (datePosted !== 'All') {
        const d = new Date(job.createdAt)
        const now = new Date()
        const diffHours = (now - d) / (1000 * 60 * 60)
        if (datePosted === '24h' && diffHours > 24) return false
        if (datePosted === '7d' && diffHours > 24 * 7) return false
        if (datePosted === '30d' && diffHours > 24 * 30) return false
      }

      if (job.salary.max < salaryMin || job.salary.min > salaryMax) return false
      return true
    })
  }, [search, vehicle, location, license, experience, datePosted, salaryMin, salaryMax, apiJobs])

  const hasActiveFilters =
    search !== '' ||
    vehicle !== 'All' ||
    location !== 'All' ||
    license !== 'All' ||
    experience !== 'All' ||
    datePosted !== 'All' ||
    salaryMin !== SALARY_MIN ||
    salaryMax !== SALARY_MAX

  const clearAll = useCallback(() => {
    setSearch('')
    setVehicle('All')
    setLocation('All')
    setLicense('All')
    setExperience('All')
    setDatePosted('All')
    setSalaryMin(SALARY_MIN)
    setSalaryMax(SALARY_MAX)
  }, [])

  /* Active filter pills */
  const pills = []
  if (search)
    pills.push({ key: 'search', label: `"${search}"`, clear: () => setSearch('') })
  if (vehicle !== 'All')
    pills.push({ key: 'vehicle', label: vehicle, clear: () => setVehicle('All') })
  if (location !== 'All')
    pills.push({ key: 'location', label: location, clear: () => setLocation('All') })
  if (license !== 'All')
    pills.push({ key: 'license', label: `License: ${license}`, clear: () => setLicense('All') })
  if (experience !== 'All')
    pills.push({ key: 'experience', label: `Exp: ${experience}`, clear: () => setExperience('All') })
  if (datePosted !== 'All') {
    const labels = { '24h': 'Past 24 hours', '7d': 'Past 7 days', '30d': 'Past 30 days' }
    pills.push({ key: 'datePosted', label: labels[datePosted], clear: () => setDatePosted('All') })
  }
  if (salaryMin !== SALARY_MIN || salaryMax !== SALARY_MAX)
    pills.push({
      key: 'salary',
      label: `₹${salaryMin.toLocaleString('en-IN')}–₹${salaryMax.toLocaleString('en-IN')}`,
      clear: () => { setSalaryMin(SALARY_MIN); setSalaryMax(SALARY_MAX) },
    })

  const removePill = (key) => {
    const p = pills.find((x) => x.key === key)
    p?.clear()
  }

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
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
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>{loading ? '—' : apiJobs.length}</strong>
                <span>Live Jobs</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{loading ? '—' : filterOptions.locations.length}</strong>
                <span>Locations</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{loading ? '—' : filterOptions.vehicles.length}</strong>
                <span>Vehicle Types</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ── Content ── */}
      <div className={`container ${styles.layoutWrapper}`}>
        <aside className={styles.sidebarWrapper}>
          <JobFilters
            search={search}
            setSearch={setSearch}
            vehicle={vehicle}
            setVehicle={setVehicle}
            salaryMin={salaryMin}
            setSalaryMin={setSalaryMin}
            salaryMax={salaryMax}
            setSalaryMax={setSalaryMax}
            license={license}
            setLicense={setLicense}
            location={location}
            setLocation={setLocation}
            experience={experience}
            setExperience={setExperience}
            datePosted={datePosted}
            setDatePosted={setDatePosted}
            filterOptions={filterOptions}
            pills={pills}
            removePill={removePill}
            hasActiveFilters={hasActiveFilters}
            clearAll={clearAll}
          />
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.toolbar}>
            <p className={styles.toolbarLine}>
              {loading ? (
                'Loading jobs…'
              ) : (
                <>
                  Showing <strong>{filtered.length}</strong> of <strong>{apiJobs.length}</strong> verified jobs across India
                  {hasActiveFilters && (
                    <>
                      {' '}· <strong>{filtered.length}</strong> match your filters
                    </>
                  )}
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

          {/* Loading */}
          {loading && (
            <div className={styles.loaderWrap}>
              <div className={styles.loader} />
              <p>Fetching latest jobs from TruckMitr…</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className={styles.errorWrap}>
              <p>⚠️ Failed to load jobs: {error}</p>
              <button onClick={() => window.location.reload()} className={styles.retryBtn}>Retry</button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && filtered.length === 0 && (
            <div className={styles.emptyWrap}>
              <p className={styles.emptyIcon}>🔍</p>
              <h3>No jobs found</h3>
              <p>Try adjusting your filters or search terms.</p>
              {hasActiveFilters && (
                <button onClick={clearAll} className={styles.retryBtn}>Clear All Filters</button>
              )}
            </div>
          )}

          {/* Job List */}
          {!loading && !error && filtered.length > 0 && (
            <div className={styles.list}>
              {filtered.map((job) => (
                <ScrollReveal key={job.id}>
                  <JobCard job={job} onViewDetails={() => setSelectedJob(job)} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </main>
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

      {/* Modal */}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  )
}
