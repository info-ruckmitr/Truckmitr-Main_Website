import { useEffect, useState } from 'react'

function getInitialReduced() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Client-only hook: true when the user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(getInitialReduced)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
