import { useState, useRef, useEffect, useCallback } from 'react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeTestimonials } from '@data/homeContent'
import styles from './HomeTestimonials.module.css'

/* ── video testimonials data ──────────────────────────────────── */
const videoTestimonials = [
  {
    id: 'v1',
    src: new URL('@assets/testomonial-videos/testimonial-1.mp4', import.meta.url).href,
    name: 'Driver Testimonial',
    caption: 'Hear directly from our drivers',
  },
  {
    id: 'v2',
    src: new URL('@assets/testomonial-videos/testimonial-2.mp4', import.meta.url).href,
    name: 'Fleet Owner Story',
    caption: 'Fleet owners share their experience',
  },
  {
    id: 'v3',
    src: new URL('@assets/testomonial-videos/testimonial-3.mp4', import.meta.url).href,
    name: 'On the Road',
    caption: 'Real stories from the highway',
  },
  {
    id: 'v4',
    src: new URL('@assets/testomonial-videos/testimonial-4.mp4', import.meta.url).href,
    name: 'Community Voices',
    caption: 'What the community has to say',
  },
  {
    id: 'v5',
    src: new URL('@assets/testomonial-videos/testimonial-5.mp4', import.meta.url).href,
    name: 'Success Story',
    caption: 'A journey with TruckMitr',
  },
]

/* ── Single Shorts-style video card ───────────────────────────── */
function VideoCard({ video, isActive, index }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const controlsTimeout = useRef(null)

  // Auto-play/pause based on active state
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    if (isActive) {
      vid.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      vid.pause()
      setPlaying(false)
    }
  }, [isActive])

  // Track progress
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const onTime = () => {
      setProgress(vid.currentTime)
      setDuration(vid.duration || 0)
    }
    vid.addEventListener('timeupdate', onTime)
    vid.addEventListener('loadedmetadata', onTime)
    return () => {
      vid.removeEventListener('timeupdate', onTime)
      vid.removeEventListener('loadedmetadata', onTime)
    }
  }, [])

  // Auto-hide controls
  const flashControls = useCallback(() => {
    setShowControls(true)
    clearTimeout(controlsTimeout.current)
    controlsTimeout.current = setTimeout(() => {
      if (playing) setShowControls(false)
    }, 2500)
  }, [playing])

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) {
      vid.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      vid.pause()
      setPlaying(false)
    }
    flashControls()
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const vid = videoRef.current
    if (!vid) return
    vid.muted = !vid.muted
    setMuted(vid.muted)
    flashControls()
  }

  const handleSeek = (e) => {
    e.stopPropagation()
    const vid = videoRef.current
    if (!vid || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    vid.currentTime = pct * duration
    setProgress(vid.currentTime)
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const pct = duration ? (progress / duration) * 100 : 0

  return (
    <div
      className={`${styles.videoCard} ${isActive ? styles.videoCardActive : ''}`}
      onClick={togglePlay}
      onMouseMove={flashControls}
      onMouseEnter={flashControls}
      role="button"
      tabIndex={0}
      aria-label={`Play ${video.name} video`}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className={styles.videoEl}
        src={video.src}
        loop
        muted={muted}
        playsInline
        preload={index < 2 ? 'metadata' : 'none'}
      />

      {/* Gradient overlays */}
      <div className={styles.videoGradientTop} />
      <div className={styles.videoGradientBottom} />

      {/* Center play button (shown when paused) */}
      {!playing && (
        <div className={styles.centerPlayBtn}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.5)" />
            <path d="M22 17L40 28L22 39V17Z" fill="white" />
          </svg>
        </div>
      )}

      {/* Bottom overlay — info + controls */}
      <div
        className={`${styles.videoOverlay} ${showControls ? styles.videoOverlayVisible : ''}`}
      >
        {/* Progress bar */}
        <div className={styles.progressBarWrap} onClick={handleSeek}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className={styles.videoBottom}>
          <div className={styles.videoInfo}>
            <span className={styles.videoName}>{video.name}</span>
            <span className={styles.videoCaption}>{video.caption}</span>
          </div>

          <div className={styles.videoControls}>
            <span className={styles.timeLabel}>
              {formatTime(progress)} / {formatTime(duration)}
            </span>
            <button
              className={styles.muteBtn}
              onClick={toggleMute}
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Side badge */}
      <div className={styles.shortsLogo}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
        </svg>
        <span>Shorts</span>
      </div>
    </div>
  )
}

/* ── Video Carousel (scrollable) ──────────────────────────────── */
function VideoCarousel() {
  const scrollRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  // Intersection observer for snap-scroll active detection
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const cards = container.querySelectorAll('[data-video-card]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = Number(entry.target.dataset.videoCard)
            setActiveIdx(idx)
          }
        })
      },
      { root: container, threshold: 0.6 },
    )

    cards.forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (dir) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.children[0]?.offsetWidth || 300
    const gap = 16
    container.scrollBy({
      left: dir === 'next' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.carouselWrap}>
      {/* Nav arrows */}
      <button
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        onClick={() => scrollTo('prev')}
        aria-label="Previous video"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className={styles.carouselTrack} ref={scrollRef}>
        {videoTestimonials.map((v, i) => (
          <div key={v.id} data-video-card={i} className={styles.carouselSlide}>
            <VideoCard video={v} isActive={i === activeIdx} index={i} />
          </div>
        ))}
      </div>

      <button
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        onClick={() => scrollTo('next')}
        aria-label="Next video"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {videoTestimonials.map((v, i) => (
          <button
            key={v.id}
            className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
            onClick={() => {
              const container = scrollRef.current
              if (!container) return
              const card = container.children[i]
              card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
            }}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ── Main Section ──────────────────────────────────────────────── */
export default function HomeTestimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <span className={styles.label}>{homeTestimonials.label}</span>
            <h2 id="testimonials-heading" className={styles.title}>
              {homeTestimonials.title}
            </h2>
          </header>
        </ScrollReveal>

        {/* ── Video Testimonials (Shorts-style) ── */}
        <ScrollReveal>
          <div className={styles.videoSection}>
            <div className={styles.videoSectionHeader}>
              <div className={styles.shortsTag}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
                <span>Video Testimonials</span>
              </div>
              <p className={styles.videoSectionSub}>
                Real voices, real stories from the TruckMitr community
              </p>
            </div>
            <VideoCarousel />
          </div>
        </ScrollReveal>
      </div>

      {/* ── Text Testimonials ── */}
      <div className={styles.cardsContainer}>
        <div className={styles.grid}>
          {homeTestimonials.items.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08} style={{ height: '100%' }}>
              <blockquote className={styles.card}>
                <span className={styles.quoteMark} aria-hidden>
                  &ldquo;
                </span>
                <p className={styles.text} lang={t.id === 't1' ? 'hi' : undefined}>
                  {t.quote}
                </p>
                <footer className={styles.author}>
                  <div className={styles.avatar} aria-hidden>
                    {t.initials}
                  </div>
                  <div>
                    <span className={styles.name}>{t.name}</span>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
