import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogCategories, featuredPost, blogPosts } from '@data/blogContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Blog.module.css'

export default function Blog() {
  // Use first 5 posts for sidebar
  const sidebarPosts = blogPosts.slice(0, 5)
  // Use next 4 posts for middle grid
  const gridPosts = blogPosts.slice(0, 4) // Reusing for demo
  // Mock data for category section
  const industryNews = blogPosts.filter(p => p.category === 'Industry News')

  return (
    <div className={styles.page}>
      <div className="container">
        {/* ─── Top Section: Featured + Sidebar ─── */}
        <div className={styles.topGrid}>
          <ScrollReveal className={styles.featuredMain}>
            <div className={styles.featuredMainImgWrapper}>
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className={styles.featuredMainContent}>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className={styles.featuredMainMeta}>
                <span>{featuredPost.author}</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Featured Posts</h3>
            <div className={styles.sidebarList}>
              {sidebarPosts.map((post) => (
                <div key={post.id} className={styles.sidebarItem}>
                  <h3>{post.title}</h3>
                  <div className={styles.sidebarMeta}>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Middle Section: 4-Column Grid ─── */}
        <div className={styles.postGrid}>
          {gridPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1} className={styles.gridCard}>
              <div className={styles.gridCardImgWrapper}>
                <img src={post.image} alt={post.title} />
              </div>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <div className={styles.gridCardMeta}>
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─── Bottom Section: Category Breakdown ─── */}
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <h2>Industry News</h2>
            <div className={styles.headerLine} />
            <Link to="/blog" className={styles.seeMore}>See more industry articles</Link>
          </div>

          <div className={styles.subGrid}>
            {industryNews.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1} className={styles.subItem}>
                <h5>{post.title}</h5>
                <p>{post.excerpt}</p>
              </ScrollReveal>
            ))}
            
            {/* Visual placeholder for the orange graphic in your image */}
            <ScrollReveal delay={0.3} style={{ background: 'var(--saffron-xl)', borderRadius: '4px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" style={{ maxWidth: '80%', borderRadius: '4px' }} alt="Graphic" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
