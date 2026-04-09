import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

/**
 * Animate from 0 to end when element enters viewport.
 * @param {number} end
 * @param {{ duration?: number; decimals?: number; prefix?: string; suffix?: string; startWhenVisible?: boolean }} [options]
 */
export function useAnimatedCounter(end, options = {}) {
  const {
    duration = 2000,
    decimals = 0,
    prefix = '',
    suffix = '',
    startWhenVisible = true,
  } = options

  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(!startWhenVisible)
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!startWhenVisible) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [startWhenVisible])

  useEffect(() => {
    if (!active || reducedMotion) return

    let raf
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = easeOutExpo(t)
      setValue(eased * end)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, active, reducedMotion])

  const effective = reducedMotion && active ? end : value
  const numStr =
    decimals > 0 ? effective.toFixed(decimals) : Math.round(effective).toLocaleString('en-IN')

  const display = `${prefix}${numStr}${suffix}`

  return { ref, display, raw: effective }
}
