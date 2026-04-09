import { useEffect, useRef, useState } from 'react'

const variantClass = {
  'fade-up': null,
  'fade-left': 'sr-fade-left',
  'fade-right': 'sr-fade-right',
  'scale-up': 'sr-scale-up',
  stagger: null,
}

/**
 * @param {object} options
 * @param {import('react').RefObject<HTMLElement | null>} [options.ref]
 * @param {'fade-up'|'fade-left'|'fade-right'|'scale-up'|'stagger'} [options.variant]
 * @param {number} [options.delay]
 * @param {number} [options.threshold]
 * @param {boolean} [options.once]
 */
export function useScrollReveal({
  ref: externalRef,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.1,
  once = true,
} = {}) {
  const internalRef = useRef(null)
  const ref = externalRef ?? internalRef
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cls = variantClass[variant]
    el.classList.add('sr-hidden')
    if (cls) el.classList.add(cls)
    if (delay > 0) el.style.transitionDelay = `${delay}s`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          el.classList.add('sr-visible')
          el.classList.remove('sr-hidden')
          if (once) obs.disconnect()
        } else if (!once) {
          setVisible(false)
          el.classList.remove('sr-visible')
          el.classList.add('sr-hidden')
        }
      },
      { threshold },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, variant, delay, threshold, once])

  return { ref, visible }
}
