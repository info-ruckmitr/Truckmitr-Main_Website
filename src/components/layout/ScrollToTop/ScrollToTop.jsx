import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores the expected “new page starts at the top” behaviour on client-side navigations.
 * Without this, the window keeps the previous page’s scroll position.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Longer timeout to ensure page layout is stable
        setTimeout(() => {
          const navbarHeight = 90; // Approximate height of the sticky navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 200)
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}
