import { Search, X } from 'lucide-react'
import Chip from '@components/ui/Chip/Chip'
import styles from './Jobs.module.css'

const SALARY_MIN = 15000
const SALARY_MAX = 60000

export default function JobFilters({
  search,
  setSearch,
  vehicle,
  setVehicle,
  salaryMin,
  setSalaryMin,
  salaryMax,
  setSalaryMax,
  license,
  setLicense,
  location,
  setLocation,
  experience,
  setExperience,
  datePosted,
  setDatePosted,
  filterOptions,
  pills,
  removePill,
  hasActiveFilters,
  clearAll,
}) {
  return (
    <div className={styles.filters}>
      <h3 className={styles.filtersTitle}>Filters</h3>
      
      {/* Pills Area inside sidebar */}
      {pills.length > 0 && (
        <div className={styles.pills} aria-label="Active filters">
          {pills.map((p) => (
            <Chip key={p.key} selected onRemove={() => removePill(p.key)}>
              {p.label}
            </Chip>
          ))}
          {hasActiveFilters && (
            <button type="button" className={styles.clearAllBtn} onClick={clearAll}>
              <X size={14} /> Clear all
            </button>
          )}
        </div>
      )}

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Search</span>
          <span className={styles.inputWrap}>
            <Search size={16} className={styles.inputIcon} aria-hidden />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Title, location, vehicle…"
              className={styles.input}
            />
          </span>
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Location</span>
          <select className={styles.select} value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="All">All locations</option>
            {filterOptions.locations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Date Posted</span>
          <select className={styles.select} value={datePosted} onChange={(e) => setDatePosted(e.target.value)}>
            <option value="All">Any time</option>
            <option value="24h">Past 24 hours</option>
            <option value="7d">Past 7 days</option>
            <option value="30d">Past 30 days</option>
          </select>
        </label>
      </div>

      <div className={styles.filterGroup}>
        <span className={styles.label}>
          Salary range: ₹{salaryMin.toLocaleString('en-IN')} – ₹{salaryMax.toLocaleString('en-IN')}
        </span>
        <div className={styles.rangeRow}>
          <input
            type="range"
            min={SALARY_MIN}
            max={SALARY_MAX}
            step={1000}
            value={salaryMin}
            onChange={(e) => {
              const v = Number(e.target.value)
              setSalaryMin(v)
              if (v > salaryMax) setSalaryMax(v)
            }}
            className={styles.range}
          />
          <input
            type="range"
            min={SALARY_MIN}
            max={SALARY_MAX}
            step={1000}
            value={salaryMax}
            onChange={(e) => {
              const v = Number(e.target.value)
              setSalaryMax(v)
              if (v < salaryMin) setSalaryMin(v)
            }}
            className={styles.range}
          />
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Experience</span>
          <select className={styles.select} value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option value="All">Any experience</option>
            {filterOptions.experiences.map((exp) => (
              <option key={exp} value={exp}>{exp} yrs</option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Vehicle type</span>
          <select
            className={styles.select}
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="All">All vehicles</option>
            {filterOptions.vehicles.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.field}>
          <span className={styles.label}>License type</span>
          <select className={styles.select} value={license} onChange={(e) => setLicense(e.target.value)}>
            <option value="All">All licenses</option>
            {filterOptions.licenses.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>

    </div>
  )
}

export { SALARY_MIN, SALARY_MAX }
