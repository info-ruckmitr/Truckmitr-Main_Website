import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@utils/cn'
import styles from './TestimonialsSection.module.css'

export default function TestimonialsSection({ items, title = 'What drivers say' }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || !items?.length) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4000)
    return () => clearInterval(id)
  }, [paused, items?.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el || !items?.length) return
    const card = el.querySelector(`[data-i="${index}"]`)
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index, items?.length])

  if (!items?.length) return null

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className={styles.heading}>
          {title}
        </h2>
        <div
          className={styles.viewport}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className={styles.track}>
            {items.map((t, i) => (
              <article key={t.id} data-i={i} className={styles.card}>
                <span className={styles.quote} aria-hidden>
                  &ldquo;
                </span>
                <p className={styles.text}>{t.quote}</p>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating || 5 }).map((_, si) => (
                    <Star key={si} className={styles.star} size={18} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <div className={styles.author}>
                  <img src={t.avatar} alt="" className={styles.avatar} loading="lazy" width={56} height={56} />
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    {t.role ? <p className={styles.role}>{t.role}</p> : null}
                    <p className={styles.loc}>{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.dots} role="tablist" aria-label="Testimonial slides">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn(styles.dot, i === index && styles.dotActive)}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
