/**
 * Format salary range in Indian Rupees.
 * @param {{ min: number; max: number }} range
 */
export function formatSalaryRange(range) {
  const fmt = (n) =>
    n >= 100000
      ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
      : `₹${n.toLocaleString('en-IN')}`
  return `${fmt(range.min)} – ${fmt(range.max)} / month`
}

/**
 * Compact salary for filters/sliders.
 */
export function formatRupee(n) {
  return `₹${n.toLocaleString('en-IN')}`
}

/**
 * Truncate string with ellipsis.
 */
export function truncate(str, maxLen = 120) {
  if (!str || str.length <= maxLen) return str
  return `${str.slice(0, maxLen).trim()}…`
}
