import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './BlogDetail.module.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [recentBlogs, setRecentBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    
    // Fetch current blog
    fetch(`https://truckmitr.com/api/blog/${slug}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          setBlog(json.data)
        } else {
          setError('Blog post not found.')
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching blog detail:', err)
        setError('Failed to load blog content.')
        setLoading(false)
      })

    // Fetch recent blogs for sidebar
    fetch('https://truckmitr.com/api/blogs')
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          // Take first 5 blogs as recent, excluding current if needed
          setRecentBlogs(json.data.slice(0, 6).filter(b => b.slug !== slug))
        }
      })
      .catch(err => console.error('Error fetching recent blogs:', err))
  }, [slug])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className={styles.loader}>Loading blog content...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <h2>{error || 'Post not found'}</h2>
            <Link to="/blog" className={styles.backLink}>← Back to Blogs</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          <main className={styles.mainContent}>
            <div className={styles.header}>
              <span className={styles.category}>{blog.category_name}</span>
              <h1 className={styles.title}>{blog.name}</h1>
              <div className={styles.meta}>
                <span>{formatDate(blog.dates)}</span>
                <span className={styles.separator}>•</span>
                <span>admin</span>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <img src={`https://truckmitr.com/public/${blog.images}`} alt={blog.name} />
            </div>

            <div 
              className={styles.content} 
              dangerouslySetInnerHTML={{ __html: blog.description }} 
            />
          </main>

          <aside className={styles.sidebar}>
            <ScrollReveal delay={0.3}>
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Recent Posts</h3>
                <div className={styles.recentList}>
                  {recentBlogs.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className={styles.recentItem}>
                      <div className={styles.recentImg}>
                        <img src={`https://truckmitr.com/public/${post.images}`} alt={post.name} />
                      </div>
                      <div className={styles.recentInfo}>
                        <h4>{post.name}</h4>
                        <span>{formatDate(post.dates)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className={styles.sidebarAd}>
                 <h3>Ready to elevate your fleet?</h3>
                 <p>Join thousands of transporters using TruckMitr to optimize their business.</p>
                 <Link to="/contact" className={styles.adCta}>Get Started →</Link>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </div>
  )
}
