import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores the expected “new page starts at the top” behaviour on client-side navigations.
 * Without this, the window keeps the previous page’s scroll position.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
