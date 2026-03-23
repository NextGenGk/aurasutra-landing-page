'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Heart: (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Leaf: (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C10.5 14.5 12 14.5 16 20" />
    </svg>
  ),
  Brain: (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  ),
  Baby: (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 5 6.3" />
      <path d="M12 2.1a5 5 0 0 1 7 4.2" />
      <path d="M12 2.1a5 5 0 0 0-7 4.2" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

const posts = [
  {
    tag: 'Heart Health',
    tagColor: '#ff6b6b',
    title: '10 Daily Habits That Dramatically Reduce Your Risk of Heart Disease',
    excerpt: 'Small, consistent lifestyle changes can cut cardiovascular risk by up to 80%. Our cardiologists reveal the most impactful habits backed by science.',
    date: 'March 10, 2026',
    readTime: '6 min read',
    icon: icons.Heart,
    large: true,
    image: '/blog-1.png',
  },
  {
    tag: 'Nutrition',
    tagColor: '#00b894',
    title: 'The Anti-Inflammatory Diet: What to Eat for Long-Term Wellness',
    excerpt: 'Discover how food choices directly influence chronic inflammation and the conditions it drives.',
    date: 'March 5, 2026',
    readTime: '4 min read',
    icon: icons.Leaf,
    large: false,
    image: '/blog-2.png',
  },
  {
    tag: 'Mental Health',
    tagColor: '#6c5ce7',
    title: 'Understanding Anxiety: Signs, Triggers, and Modern Treatment Options',
    excerpt: 'A compassionate guide to recognizing anxiety disorders and the evidence-based approaches that truly work.',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    icon: icons.Brain,
    large: false,
    image: '/blog-3.png',
  },
  {
    tag: 'Pediatrics',
    tagColor: '#fdcb6e',
    title: "Childhood Vaccine Schedule: A Complete Parent's Guide for 2026",
    excerpt: 'Stay up to date with the latest immunization recommendations and what to expect at each milestone.',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    icon: icons.Baby,
    large: false,
    image: '/blog-4.png',
  },
]

function BlogCard({ post, index, large }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="blog-card card-hover"
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        className={`img-zoom flex-shrink-0 relative overflow-hidden ${large ? 'h-[200px] lg:h-[240px]' : 'h-[160px]'}`}
        style={{
          background: post.tagColor + '15',
        }}
      >
        <img 
          src={post.image} 
          alt={post.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
        />
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: post.tagColor,
          color: '#fff',
          borderRadius: 50,
          padding: '5px 14px',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}>
          {post.tag}
        </div>
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          width: 32, height: 32,
          background: '#fff',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: post.tagColor,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 2,
        }}>
          {post.icon}
        </div>
      </div>

      <div style={{ padding: large ? '28px' : '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{post.date}</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>·</span>
          <span style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 500 }}>{post.readTime}</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: large ? '22px' : '17px',
          fontWeight: 800,
          lineHeight: 1.35,
          color: 'var(--dark-text)',
          marginBottom: 12,
          flex: 1,
        }}>
          {post.title}
        </h3>

        {large && (
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            {post.excerpt}
          </p>
        )}

      </div>
    </motion.div>
  )
}

export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="blog" className="py-16 lg:py-[100px]" style={{ background: 'var(--light-bg)' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 lg:mb-[52px] flex-wrap gap-5" ref={ref}>
          <div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}>
              <span className="pill-badge">
                <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
                Health Insights
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 800,
                marginTop: 16,
                color: 'var(--dark-text)',
              }}
            >
              Latest From Our <span style={{ color: 'var(--primary)' }}>Medical Blog</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <button className="btn-primary">
              All Articles
              <span className="arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-[24px] items-start">
          <BlogCard post={posts[0]} index={0} large={true} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {posts.slice(1).map((post, i) => (
              <BlogCard key={i} post={post} index={i + 1} large={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
