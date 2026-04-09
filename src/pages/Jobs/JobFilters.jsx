import { MapPin } from 'lucide-react'
import { vehicleTypes, licenseTypes, indianStates } from '@data/jobs'
import Chip from '@components/ui/Chip/Chip'
import styles from './Jobs.module.css'

const SALARY_MIN = 20000
const SALARY_MAX = 150000

export default function JobFilters({
  route,
  setRoute,
  routePlaceholder = 'e.g. Delhi → Mumbai',
  vehicle,
  setVehicle,
  salaryMin,
  setSalaryMin,
  salaryMax,
  setSalaryMax,
  licenses,
  toggleLicense,
  state,
  setState,
  pills,
  removePill,
}) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterRow}>
        <label className={styles.field}>
          <span className={styles.label}>Route</span>
          <span className={styles.inputWrap}>
            <MapPin size={18} className={styles.inputIcon} aria-hidden />
            <input
              type="search"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              placeholder={routePlaceholder}
              className={styles.input}
            />
          </span>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Vehicle type</span>
          <select
            className={styles.select}
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="All">All</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <div className={styles.field}>
          <span className={styles.label}>
            Salary range (₹{salaryMin.toLocaleString('en-IN')} – ₹{salaryMax.toLocaleString('en-IN')})
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
        <label className={styles.field}>
          <span className={styles.label}>State</span>
          <select className={styles.select} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="All">All states</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.licenseRow}>
        <span className={styles.label}>License type</span>
        <div className={styles.chips}>
          {licenseTypes.map((l) => (
            <Chip key={l} selected={licenses.includes(l)} onClick={() => toggleLicense(l)}>
              {l}
            </Chip>
          ))}
        </div>
      </div>
      {pills.length > 0 && (
        <div className={styles.pills} aria-label="Active filters">
          {pills.map((p) => (
            <Chip key={p.key} selected onRemove={() => removePill(p.key)}>
              {p.label}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}

export { SALARY_MIN, SALARY_MAX }
