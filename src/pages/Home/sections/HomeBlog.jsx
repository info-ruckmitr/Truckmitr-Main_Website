import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { useNavigation } from '@hooks/useNavigation'
import styles from './HomeBlog.module.css'

export default function HomeBlog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)
  const { closeMenu } = useNavigation()

  useEffect(() => {
    fetch('https://truckmitr.com/api/blogs')
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          // Take the latest 4 blogs as requested (3,4 blogs)
          setBlogs(json.data.slice(0, 4))
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching blogs:', err)
        setLoading(false)
      })
  }, [])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (offsetWidth * 0.85))
    setActiveIdx(Math.min(index, blogs.length - 1))
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const getImageUrl = (path) => {
    if (!path) return 'https://truckmitr.com/static/media/truck_bg.jpg'
    if (path.startsWith('http')) return path
    return `https://truckmitr.com/public/${path}`
  }

  // If no blogs, don't show the section
  if (!loading && blogs.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="blog-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <div className={styles.titleWrap}>
              <span className={styles.label}>News & Insights</span>
              <h2 id="blog-heading" className={styles.title}>
                Latest from <span className={styles.accent}>Our Blog</span>
              </h2>
            </div>
            <div className={styles.viewAllTop}>
              <Link to="/Blog" className={styles.link} onClick={closeMenu}>
                View all articles →
              </Link>
            </div>
          </header>
        </ScrollReveal>

        <div className={styles.gridWrap}>
          <div className={styles.grid} ref={scrollRef} onScroll={handleScroll}>
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={`${styles.card} ${styles.skeleton}`}>
                      <div className={styles.imageWrap} />
                      <div className={styles.content}>
                        <div className={styles.skeletonTitle} />
                        <div className={styles.skeletonText} />
                      </div>
                    </div>
                  ))
                  : blogs.map((blog, i) => (
                      <ScrollReveal
                        key={blog.id}
                        delay={i * 0.1}
                        className={styles.blogCardWrap}
                      >
                        <Link 
                          to={`/blog/${blog.slug || blog.id}`} 
                          className={styles.card}
                          onClick={closeMenu} // Ensure any open menu closes on navigation
                        >
                          <div className={styles.imageWrap}>
                            <img
                              src={getImageUrl(blog.images)}
                              alt={blog.name}
                              className={styles.image}
                              loading="lazy"
                            />
                            <div className={styles.date}>{formatDate(blog.dates)}</div>
                          </div>
                          <div className={styles.content}>
                            <h3 className={styles.blogTitle}>{blog.name}</h3>
                            <p className={styles.excerpt}>
                              {blog.description 
                                ? blog.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...'
                                : 'Discover the latest updates, industry trends, and success stories from the world of TruckMitr...'}
                            </p>
                            <div className={styles.footer}>
                              <span className={styles.readMore}>Read Full Story →</span>
                            </div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
          </div>

          {/* Carousel indicators for mobile */}
          {!loading && (
            <div className={styles.indicators}>
              {blogs.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.dot} ${activeIdx === i ? styles.dotActive : ''}`}
                  aria-hidden
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.mobileViewAll}>
          <Link to="/Blog" className={styles.btnLink} onClick={closeMenu}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
