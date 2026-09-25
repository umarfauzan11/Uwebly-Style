import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
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

  const tokens = [
    { name: 'Background', varName: '--bg-color', value: theme === 'dark' ? '#121212' : '#ffffff' },
    { name: 'Text Primary', varName: '--text-color', value: theme === 'dark' ? '#ffffff' : '#111111' },
    { name: 'Accent', varName: '--accent', value: '#ff42f2' },
    { name: 'Border', varName: '--border', value: theme === 'dark' ? '#333333' : '#e0e0e0' },
    { name: 'Hover Bg', varName: '--hover-bg', value: theme === 'dark' ? '#2a2a2a' : '#f0f0f0' },
  ]

  return (
    <div
      className="flex justify-center gap-10 max-w-7xl min-h-screen flex-wrap"
      style={{ margin: '0 auto', padding: '0 1.5rem' }}
    >
      {/* Left / Main Showcase Content */}
      <div
        className="flex-1 min-h-screen max-w-[780px]"
        style={{ padding: '3rem 0 6rem' }}
      >
        {/* Header */}
        <header
          className="flex justify-between items-center border-b border-[var(--border)]"
          style={{ marginBottom: '3rem', paddingBottom: '1.25rem' }}
        >
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Uwebly" className="w-9 h-9 rounded-xl" />
            <div>
              <h1
                className="text-lg font-semibold tracking-tight text-[var(--text-color)]"
                style={{ margin: 0 }}
              >
                Uwebly Design System
              </h1>
              <span className="text-xs text-[var(--text-secondary)]">CSS Stylesheet & UI Architecture</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="settings-btn border border-[var(--border)] rounded-[40%] transition-colors hover:bg-[var(--hover-bg)]"
              title="Toggle Light/Dark Theme"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-yellow-400' : 'bi-moon-stars text-slate-700'} text-base`}></i>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ marginBottom: '2rem' }} className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-[var(--text-color)]"
              style={{ marginBottom: '0.75rem' }}
            >
              Crafted with simplicity & speed.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Halaman showcase dan dokumentasi visual untuk menguji integrasi komponen <code className="rounded bg-[var(--border)] text-xs font-mono text-[var(--text-color)]" style={{ padding: '2px 6px', margin: '0 2px' }}>uwebly styles</code> dengan styling modern.
            </p>
          </div>
          <div>
            <img src="https://bmdu.uwebly.com/assets/posd/phoneposd.png" width={180} alt="" />
          </div>
        </section>

        {/* Interactive Controls Card */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div
            className="sidebar-card flex flex-col gap-6"
            style={{ padding: '1.5rem' }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-sm text-[var(--text-color)]">Interactive Counter</div>
                <div className="text-xs text-[var(--text-secondary)]">Klik untuk menguji response interaksi</div>
              </div>
              <button
                onClick={() => setCount(prev => prev + 1)}
                className="sidebar-ad-btn border-none inline-flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
                style={{ padding: '8px 20px' }}
              >
                <i className="bi bi-hand-index-thumb"></i>
                Clicks: <span className="font-bold">{count}</span>
              </button>
            </div>

            <hr className="border-none border-t border-[var(--border)]" style={{ margin: 0 }} />

            {/* Button Variations */}
            <div className="flex flex-wrap items-center" style={{ gap: '0.75rem' }}>
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

              <button
                className="notfound-button text-[var(--text-color)] font-medium text-sm hover:opacity-80 transition-opacity"
                style={{ padding: '8px 16px' }}
              >
                Secondary Action
              </button>

              <button
                className="report-btn-submit text-sm"
                style={{ padding: '8px 16px' }}
              >
                Submit
              </button>

              <button
                className="report-btn-cancel text-sm"
                style={{ padding: '8px 16px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Grid Components */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Mention Search Preview */}
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

              <div className="flex flex-col gap-1">
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
                    className="mention-avatar flex items-center justify-center text-white font-semibold"
                    style={{ background: 'linear-gradient(135deg, #0070f3 0%, #00dfd8 100%)' }}
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

            {/* Trending Topics */}
            <div className="sidebar-card" style={{ padding: '1.25rem' }}>
              <div className="sidebar-header-suggest" style={{ marginBottom: '0.75rem' }}>
                <h4>Trending Topics</h4>
                <span className="sidebar-see-all cursor-pointer">View All</span>
              </div>

              <div className="flex flex-col gap-1.5">
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
          className="border-t border-[var(--border)] flex justify-between items-center flex-wrap gap-4 text-xs text-[var(--text-secondary)]"
          style={{ marginTop: '4rem', paddingTop: '2rem' }}
        >
          <div>2026 - Bmdu Studio • Uwebly Style</div>
          <div className="flex items-center gap-3">
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Vite</span>
            <span>•</span>
            <span>React 19</span>
          </div>
        </footer>
      </div>

      {/* SISI KANAN: Bento Grid Showcase (Iklan & Gambar) */}
      <aside
        className="flex flex-col sticky top-8 h-fit shrink-0 w-full lg:w-[380px]"
        style={{ padding: '3rem 0', gap: '1.25rem' }}
      >
        {/* Header Bento Title */}
        {/* <div className="flex items-center justify-between" style={{ padding: '0 0.5rem' }}>
          <div className="flex items-center gap-2">
            <i className="bi bi-grid-1x2-fill text-[var(--accent)] text-sm"></i>
            <span className="font-semibold text-xs text-[var(--text-color)] tracking-wider uppercase">
              Featured Bento
            </span>
          </div>
          <span className="text-[11px] text-[var(--text-secondary)] font-mono">Ads & Showcase</span>
        </div> */}

        {/* Bento Item 1: Main Sponsored / Ad Banner */}
        <div
          className="sidebar-card relative overflow-hidden cursor-pointer items-center justify-center flex flex-col"
          style={{
            margin: 0,
          }}
        >
          <iframe
            src="https://uwebly.com/embed/ad?ratio=9%3A16"
            width="100%"
            height="680"
            frameBorder="0"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(128, 128, 128, 0.2)',
              maxWidth: '320px',
              width: '100%',
              display: 'block'
            }}
            scrolling="no"
            loading="lazy"
            title="Uwebly Ad Banner"
          ></iframe>
        </div>

        {/* Bento Row 2: Asymmetric Split Grid (Gambar & Fitur) */}
        <div className="grid grid-cols-2 gap-3" style={{ margin: 0 }}>
          {/* Bento Tile 2A: Creative Image Showcase */}
          <div
            className="relative rounded-2xl overflow-hidden border border-[var(--border)] group cursor-pointer flex flex-col justify-end"
            style={{
              height: '210px',
              padding: '1rem',
              backgroundImage: 'url("https://bmdu.uwebly.com/assets/uwebly/usahlanstand.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark gradient overlay for text readability */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:opacity-90"
              style={{ margin: 0, padding: 0 }}
            ></div>

            {/* Tag Pill */}
            <span
              className="absolute top-3 left-3 rounded-full text-[10px] font-semibold text-white bg-black/50 backdrop-blur-md border border-white/20"
              style={{ padding: '3px 8px', margin: 0 }}
            >
              Sponsored
            </span>

            {/* Content */}
            <div className="relative z-10 flex flex-col" style={{ margin: 0 }}>
              <span className="text-white text-xs font-bold leading-tight drop-shadow-sm">
                Uwebly 6.3 - Major Update for All
              </span>
              <span className="text-white/70 text-[10px]" style={{ marginTop: '2px' }}>
                by @bmdustudio
              </span>
            </div>
          </div>

          {/* Bento Tile 2B: Mini Feature / Promo Tile */}
          <div
            className="sidebar-card flex flex-col justify-between"
            style={{
              padding: '1rem',
              margin: 0,
              height: '210px',
              background: 'var(--card-bg)'
            }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center text-white"
                style={{
                  background: '#ff42f2',
                  marginBottom: '0.75rem'
                }}
              >
                <img src="https://uwebly.com/assets/posd/posdgradientbg11tr.png" width="38" alt="" />
              </div>
              <h4
                className="font-bold text-xs text-[var(--text-color)] leading-snug"
                style={{ margin: '0 0 4px 0' }}
              >
                Posd & Scrolls
              </h4>
              <p
                className="text-[11px] text-[var(--text-secondary)] leading-relaxed"
                style={{ margin: 0 }}
              >
                Post dan Bagikan Momenmu Sekarang!.
              </p>
            </div>

            <div
              className="flex items-center justify-between text-[11px] font-semibold text-[var(--accent)] cursor-pointer hover:underline"
              style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}
              onClick={() => window.open('https://uwebly.com/posd', '_blank')}
            >
              <span>Check</span>
              <i className="bi bi-chevron-right text-[10px]"></i>
            </div>
          </div>
        </div>

        {/* Bento Item 3: Secondary Image & Creator Badge Card */}
        <div
          className="sidebar-card flex items-center gap-3.5 group cursor-pointer"
          style={{
            padding: '1rem',
            margin: 0
          }}
        >
          <img
            src="https://img.uwebly.com/dc9u82gzj/image/upload/v1774529112/profile-photos/1774529112335_profile_1774529111052.jpg.webp"
            alt="Art Gallery"
            className="w-16 h-16 rounded-xl object-cover border border-[var(--border)] shrink-0 transition-transform group-hover:scale-105"
            style={{ margin: 0 }}
          />
          <div className="flex-1 min-w-0" style={{ margin: 0 }}>
            <div className="flex items-center gap-1.5" style={{ marginBottom: '2px' }}>
              <span className="font-semibold text-xs text-[var(--text-color)] truncate">
                Usahlan
              </span>
              <i className="bi bi-patch-check-fill text-[blue] text-[12px]"></i>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] truncate" style={{ margin: '0 0 6px 0' }}>
              Hello Guys, Welcome
            </p>
            <span
              className="text-[10px] font-medium text-[var(--accent)] rounded-md inline-block"
            >
              46 Followers
            </span>
          </div>
        </div>

        {/* Bento Item 4: Tokens Quick Status */}
        <div
          className="sidebar-card flex flex-col gap-4"
          style={{ padding: '1.25rem', margin: 0 }}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xs text-[var(--text-color)]" style={{ margin: 0 }}>
              Live Theme Tokens
            </h4>
            <span
              className="rounded-full text-[10px] font-semibold bg-[var(--hover-bg)] text-[var(--text-secondary)] uppercase"
              style={{ padding: '2px 8px' }}
            >
              {theme}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {tokens.slice(0, 4).map(tok => (
              <div key={tok.varName} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 rounded border border-[var(--border)] shadow-xs shrink-0"
                    style={{ backgroundColor: tok.value }}
                  ></div>
                  <span className="text-[var(--text-color)] font-medium text-[11px]">{tok.name}</span>
                </div>
                <code className="text-[10px] font-mono text-[var(--text-secondary)]">
                  {tok.value}
                </code>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
