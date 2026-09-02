import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import shn from '@bmdu_studio/shnjs'

function App() {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)
  const [isFollowing, setIsFollowing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const [likedPosts, setLikedPosts] = useState({})

  const toggleLikePost = id => {
    setLikedPosts(prev => {
      const isLiked = prev[id];
      shn(isLiked ? 'Unlike' : 'Like');
      return {
        ...prev,
        [id]: !isLiked,
      };
    });
  };

  const tiktokFeed = [
    {
      id: 1,
      author: 'uwebly.style',
      avatar: 'https://github.com/umarfauzan11.png',
      caption: 'Explore clean UI design system with pure CSS! ✨ #webdesign #minimalism #css #developer',
      music: 'uwebly - Original Aesthetic Sound',
      likes: 1240,
      comments: 88,
      shares: 34,
      bg: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #0f172a 100%)',
      tag: '#Featured'
    },
    {
      id: 2,
      author: 'design.motion',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60',
      caption: 'Smooth vertical snap scrolling concept in React 19 📱 Try scrolling up & down! #uidesign #tiktok',
      music: 'Future Lo-Fi Beats • Smooth Chill',
      likes: 2480,
      comments: 142,
      shares: 95,
      bg: 'linear-gradient(145deg, #4c0519 0%, #881337 45%, #18181b 100%)',
      tag: '#Concept'
    },
    {
      id: 3,
      author: 'umarfauzan11',
      avatar: 'https://github.com/umarfauzan11.png',
      caption: 'Light / Dark mode ready with CSS variables. Simple yet powerful! ⚡ #frontend #apple #google',
      music: 'Ambient Soundscape - Minimal Wave',
      likes: 3820,
      comments: 215,
      shares: 160,
      bg: 'linear-gradient(145deg, #064e3b 0%, #047857 45%, #09090b 100%)',
      tag: '#Showcase'
    }
  ]

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        minHeight: '100vh',
        flexWrap: 'wrap'
      }}
    >
      <div style={{ flex: '1 1 600px', minHeight: '100vh', padding: '3rem 0 6rem', maxWidth: '780px' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>
              <h1 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
                Uwebly Design System
              </h1>
              <span style={{ fontSize: '0.8rem', opacity: 0.55 }}>CSS Stylesheet & UI Archive</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={toggleTheme}
              className="settings-btn"
              title="Toggle Light/Dark Theme"
              style={{ border: '1px solid var(--border)', borderRadius: '40%' }}
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars'}`} style={{ fontSize: '1rem' }}></i>
            </button>
          </div>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: '0.5rem'
            }}
          >
            Overview & Showcase
          </p>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '0.75rem'
            }}
          >
            Crafted with simplicity.
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.65, lineHeight: 1.6, maxWidth: '640px' }}>
            Halaman preview minimalis untuk menguji dan memvisualisasikan styling komponen yang berasal dari {' '}
            <code>
              uwebly styles
            </code>.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <div className="sidebar-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1.5rem' }}>
            {/* Main Counter Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Interactive Counter</div>
                <div style={{ fontSize: '0.825rem', opacity: 0.6 }}>Klik untuk menguji response interaksi</div>
              </div>
              <button
                onClick={() => setCount(prev => prev + 1)}
                className="sidebar-ad-btn"
                style={{ border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <i className="bi bi-hand-index-thumb"></i>
                Clicks: <span style={{ fontWeight: 700 }}>{count}</span>
              </button>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: 0 }} />

            {/* Button Variations */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`sidebar-follow-btn ${isFollowing ? 'following' : ''}`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>

              <button className="ee-login-btn">
                <i className="bi bi-box-arrow-in-right"></i>
                Login Button
              </button>

              <button className="notfound-button" style={{ color: 'var(--text-color)', fontWeight: 500, fontSize: '0.85rem' }}>
                Secondary Action
              </button>

              <button className="report-btn-submit" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                Submit
              </button>

              <button className="report-btn-cancel" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                Cancel
              </button>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            <div className="sidebar-card" style={{ padding: '1.25rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div className="search-wrapper">
                  <i className="bi bi-search search-icon"></i>
                  <input
                    type="text"
                    placeholder="Cari user atau tag..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a
                  href="https://github.com/umarfauzan11"
                  target="_blank"
                  rel="noreferrer"
                  className="mention-item"
                >
                  <img
                    src="https://github.com/umarfauzan11.png"
                    alt="umarfauzan11"
                    className="mention-avatar"
                  />
                  <div className="mention-info">
                    <span className="mention-name">UFauzan</span>
                    <span className="mention-usertag">@umarfauzan11</span>
                  </div>
                </a>

                <div className="mention-item">
                  <div
                    className="mention-avatar"
                    style={{
                      background: 'linear-gradient(135deg, #0070f3 0%, #00dfd8 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600
                    }}
                  >
                    D
                  </div>
                  <div className="mention-info">
                    <span className="mention-name">Design System</span>
                    <span className="mention-usertag">@uwebly.style</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Trending Hashtags */}
            <div className="sidebar-card" style={{ padding: '1.25rem' }}>
              <div className="sidebar-header-suggest" style={{ marginBottom: '0.75rem' }}>
                <h4>Trending Topics</h4>
                <span className="sidebar-see-all" style={{ cursor: 'pointer' }}>View All</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div className="sidebar-hashtag-item">
                  <div className="hashtag-rank">1</div>
                  <div className="hashtag-info">
                    <span className="hashtag-name">#minimalism</span>
                    <span className="hashtag-count">14.2k posts</span>
                  </div>
                  <i className="bi bi-chevron-right hashtag-arrow"></i>
                </div>

                <div className="sidebar-hashtag-item">
                  <div className="hashtag-rank" style={{ background: 'var(--border)', color: 'var(--text-color)' }}>2</div>
                  <div className="hashtag-info">
                    <span className="hashtag-name">#apple_google_style</span>
                    <span className="hashtag-count">8.9k posts</span>
                  </div>
                  <i className="bi bi-chevron-right hashtag-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            opacity: 0.6
          }}
        >
          <div>2026 - Bmdu Studio</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Public</span>
            <span>•</span>
            <span>React 19</span>
          </div>
        </footer>
      </div>

      {/* SISI KANAN: TikTok-Style Vertical Scrolling Feed */}
      <aside
        style={{
          flex: '0 0 340px',
          position: 'sticky',
          top: '2rem',
          height: 'calc(100vh - 4rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            scrollbarWidth: 'none',
            width: '100%',
            maxWidth: '340px',
            height: '600px',
            borderRadius: '28px',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            border: '2px solid var(--border)',
            background: '#000',
            position: 'relative'
          }}
        >
          {tiktokFeed.map(post => {
            const isLiked = likedPosts[post.id]
            const currentLikes = post.likes + (isLiked ? 1 : 0)

            return (
              <div
                key={post.id}
                style={{
                  width: '100%',
                  height: '100%',
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'always',
                  position: 'relative',
                  background: post.bg,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1rem 1.25rem',
                  color: '#fff',
                  boxSizing: 'border-box'
                }}
              >
                {/* Top Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '15px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {post.tag}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.8, fontSize: '0.75rem' }}>
                    <span>Example Scroll Concept</span>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    opacity: 0.25
                  }}
                >
                  <i className="bi bi-play-circle-fill" style={{ fontSize: '4.5rem' }}></i>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    bottom: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    zIndex: 10
                  }}
                >
                  {/* Creator Avatar with Follow button */}
                  <div style={{ position: 'relative', marginBottom: '4px' }}>
                    <img
                      src={post.avatar}
                      alt={post.author}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        objectFit: 'cover'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--accent)',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'white'
                      }}
                    >
                      +
                    </div>
                  </div>

                  {/* Like Button */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                      onClick={() => toggleLikePost(post.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isLiked ? '#ff2b54' : '#fff',
                        fontSize: '1.6rem',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'transform 0.15s ease'
                      }}
                    >
                      <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </button>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{currentLikes}</span>
                  </div>

                  {/* Comment Button */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <i className="bi bi-chat-dots-fill"></i>
                    </button>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{post.comments}</span>
                  </div>

                  {/* Share Button */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <i className="bi bi-share-fill"></i>
                    </button>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{post.shares}</span>
                  </div>
                </div>

                {/* Bottom Caption & Audio Info */}
                <div style={{ zIndex: 2, paddingRight: '50px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    @{post.author}
                    <i className="bi bi-patch-check-fill" style={{ color: 'var(--accent)', fontSize: '0.85rem' }}></i>
                  </div>
                  <p style={{ fontSize: '0.825rem', opacity: 0.9, lineHeight: 1.4, margin: '0 0 8px 0' }}>
                    {post.caption}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', opacity: 0.75 }}>
                    <i className="bi bi-music-note-beamed"></i>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {post.music}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

