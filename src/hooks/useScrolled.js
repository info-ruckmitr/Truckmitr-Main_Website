import { useEffect, useState } from 'react'

const THRESHOLD = 20

export function useScrolled() {
  const [scrolled, setScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > THRESHOLD : false,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}
