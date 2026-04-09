import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'
import { cn } from '@utils/cn'

const variantClass = {
  'fade-up': null,
  'fade-left': 'sr-fade-left',
  'fade-right': 'sr-fade-right',
  'scale-up': 'sr-scale-up',
  stagger: null,
}

export default function ScrollReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.1,
  style,
  ...rest
}) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cls = variantClass[variant]
    if (reducedMotion) {
      el.classList.remove('sr-hidden')
      el.classList.add('sr-visible')
      return
    }

    el.classList.add('sr-hidden')
    if (cls) el.classList.add(cls)
    if (delay > 0) el.style.transitionDelay = `${delay}s`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible')
          el.classList.remove('sr-hidden')
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [variant, delay, threshold, reducedMotion])

  return (
    <div ref={ref} className={cn(className)} style={style} {...rest}>
      {children}
    </div>
  )
}
