import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogCategories } from '@data/blogContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Blog.module.css'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://truckmitr.com/api/blogs')
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          setBlogs(json.data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching blogs:', err)
        setLoading(false)
      })
  }, [])

  const stripHtml = (html) => {
    if (!html) return ''
    return html.replace(/<[^>]*>?/gm, '')
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className={styles.loader}>Loading blogs...</div>
          </div>
        </div>
      </div>
    )
  }

  if (blogs.length === 0) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <h2>No blogs found.</h2>
          </div>
        </div>
      </div>
    )
  }

  const featured = blogs[0]
  const sidebarPosts = blogs.slice(1, 6)
  const remainingPosts = blogs.slice(6)

  return (
    <div className={styles.page}>
      <div className="container">
        {/* ─── Top Section: Featured + Sidebar ─── */}
        <div className={styles.topGrid}>
          <ScrollReveal className={styles.featuredMain}>
            <Link to={`/blog/${featured.slug}`} className={styles.featuredMainImgWrapper}>
              <img src={`https://truckmitr.com/public/${featured.images}`} alt={featured.name} />
            </Link>
            <div className={styles.featuredMainContent}>
              <span className={styles.featuredCategory}>{featured.category_name}</span>
              <Link to={`/blog/${featured.slug}`} className={styles.titleLink}>
                <h2>{featured.name}</h2>
              </Link>
              <p>{stripHtml(featured.description).substring(0, 160)}...</p>
              <div className={styles.featuredMainMeta}>
                <span>{formatDate(featured.dates)}</span>
                <Link to={`/blog/${featured.slug}`} className={styles.readMore}>Read More →</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Featured Posts</h3>
            <div className={styles.sidebarList}>
              {sidebarPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className={styles.sidebarItem}>
                  <h3>{post.name}</h3>
                  <div className={styles.sidebarMeta}>
                    <span>{formatDate(post.dates)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ─── All Blogs Grid ─── */}
        <div className={styles.postGrid}>
          {remainingPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.05} className={styles.gridCard}>
              <Link to={`/blog/${post.slug}`} className={styles.gridCardImgWrapper}>
                <img src={`https://truckmitr.com/public/${post.images}`} alt={post.name} />
              </Link>
              <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                <h4>{post.name}</h4>
              </Link>
              <p>{stripHtml(post.description).substring(0, 100)}...</p>
              <div className={styles.gridCardMeta}>
                <span>{formatDate(post.dates)}</span>
                <Link to={`/blog/${post.slug}`} className={styles.readMoreSmall}>Read More →</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </div>
  )
}
