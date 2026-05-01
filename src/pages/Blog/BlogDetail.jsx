import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { useNavigation } from '@hooks/useNavigation'
import styles from './BlogDetail.module.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [recentBlogs, setRecentBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { closeMenu } = useNavigation()

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)

    // Fetch current blog detail
    // Note: If the single blog API expects an ID instead of a slug, 
    // we might need to fetch all blogs and filter, but usually it supports slug.
    fetch(`https://truckmitr.com/api/blog/${slug}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          setBlog(json.data)
        } else {
          // Fallback: If single fetch fails, try finding it in the main list
          return fetch('https://truckmitr.com/api/blogs')
            .then(res => res.json())
            .then(listJson => {
              const found = listJson.data?.find(b => b.slug === slug)
              if (found) setBlog(found)
              else setError('Blog post not found.')
            })
        }
      })
      .catch(err => {
        console.error('Error fetching blog detail:', err)
        setError('Failed to load blog content.')
      })
      .finally(() => {
        setLoading(false)
      })

    // Fetch recent blogs for sidebar
    fetch('https://truckmitr.com/api/blogs')
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          // Take first 5 blogs as recent, excluding current
          setRecentBlogs(json.data.slice(0, 6).filter(b => b.slug !== slug))
        }
      })
      .catch(err => console.error('Error fetching recent blogs:', err))
  }, [slug])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getImageUrl = (path) => {
    if (!path) return 'https://truckmitr.com/static/media/truck_bg.jpg'
    if (path.startsWith('http')) return path
    return `https://truckmitr.com/public/${path}`
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>Loading the latest insights...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.errorState}>
            <h2>{error || 'Post not found'}</h2>
            <p>The article you are looking for might have been moved or deleted.</p>
            <Link to="/blog" className={styles.backBtn}>← Back to Blog</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {/* ── Progress Bar ── */}
      <div className={styles.readingProgress}></div>

      <div className="container">
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span className={styles.sep}>/</span>
          <Link to="/blog">Blog</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.current}>{blog.name}</span>
        </div>

        <div className={styles.layout}>
          <main className={styles.mainContent}>
            <article className={styles.article}>
              <header className={styles.header}>
                <div className={styles.categoryBadge}>{blog.category_name || 'Industry News'}</div>
                <h1 className={styles.title}>{blog.name}</h1>

                <div className={styles.meta}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>TM</div>
                    <div>
                      <div className={styles.authorName}>TruckMitr Editorial</div>
                      <div className={styles.publishDate}>{formatDate(blog.dates)}</div>
                    </div>
                  </div>
                  <div className={styles.readingTime}>• 5 min read</div>
                </div>
              </header>

              <div className={styles.imageWrapper}>
                <img src={getImageUrl(blog.images)} alt={blog.name} className={styles.featuredImage} />
              </div>

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* <footer className={styles.articleFooter}>
                <div className={styles.tags}>
                  <span>#Logistics</span>
                  <span>#Trucking</span>
                  <span>#Tech</span>
                </div>
                <div className={styles.share}>
                  <span>Share:</span>
                  <button className={styles.shareBtn}>FB</button>
                  <button className={styles.shareBtn}>TW</button>
                  <button className={styles.shareBtn}>LN</button>
                </div>
              </footer> */}
            </article>
          </main>

          <aside className={styles.sidebar}>
            <ScrollReveal delay={0.2} threshold={0}>
              <div className={styles.sidebarBox}>
                <h3 className={styles.sidebarTitle}>Recent Articles</h3>
                <div className={styles.recentList}>
                  {recentBlogs.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className={styles.recentItem} onClick={closeMenu}>
                      <div className={styles.recentImg}>
                        <img src={getImageUrl(post.images)} alt={post.name} />
                      </div>
                      <div className={styles.recentInfo}>
                        <h4>{post.name}</h4>
                        <span className={styles.recentDate}>{formatDate(post.dates)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.ctaBox}>
                <h3>Ready to optimize your fleet?</h3>
                <p>Join the future of Indian logistics with TruckMitr's smart tools.</p>
                <Link to="/contact" className={styles.ctaBtn} onClick={closeMenu}>Contact Us →</Link>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </div>
  )
}

