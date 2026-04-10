/**
 * Returns text starting at the first word that contains a Latin letter
 * (strips leading emoji clusters for display-only; original string unchanged).
 */
export function displayTextAfterEmoji(str) {
  if (!str) return ''
  const words = str.trim().split(/\s+/)
  const idx = words.findIndex((w) => /[A-Za-z]/.test(w))
  return idx === -1 ? str : words.slice(idx).join(' ')
}
