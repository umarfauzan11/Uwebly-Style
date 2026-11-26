/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { showNotification } from './services/notification'
import './index.css'

function CopyIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function SunIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function SearchIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ChevronRightIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function VerifiedBadgeIcon({ className = 'w-3.5 h-3.5 text-blue-500' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 2.9 3.7-.7 1.1 3.6 3.4 1.7-1.3 3.5 1.3 3.5-3.4 1.7-1.1 3.6-3.7-.7L12 22l-2.4-2.9-3.7.7-1.1-3.6-3.4-1.7 1.3-3.5-1.3-3.5 3.4-1.7 1.1-3.6 3.7.7L12 2zm-1.1 13.9 5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z" />
    </svg>
  )
}

function PaletteIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
    </svg>
  )
}

function TypeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}

function ComponentsIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function ShapesIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.3 10a.7.7 0 0 1-.626-.382L5.148 4.735A.7.7 0 0 1 5.774 3.7h5.452a.7.7 0 0 1 .626 1.035L9.326 9.618A.7.7 0 0 1 8.3 10Z" />
      <circle cx="17.5" cy="17.5" r="4.5" />
      <rect width="8" height="8" x="3" y="13" rx="2" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}

function CloseIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

const COLOR_GROUPS = [
  {
    category: 'Canvas & Surfaces',
    tokens: [
      { name: 'Background Canvas', varName: '--bg-color', light: '#ffffff', dark: '#121212', desc: 'Background utama aplikasi' },
      { name: 'Secondary Canvas', varName: '--bg-secondary', light: '#f4f4f5', dark: '#1e1e1e', desc: 'Background kontainer sekunder' },
      { name: 'Card Background', varName: '--card-bg', light: '#ffffff', dark: '#121212', desc: 'Latar kartu dan panel' },
      { name: 'Input Background', varName: '--input-bg', light: '#f4f4f5', dark: '#1e1e1e', desc: 'Input field dan textarea' },
      { name: 'Hover State', varName: '--hover-bg', light: '#f0f0f0', dark: '#2a2a2a', desc: 'State hover tombol & item' },
    ]
  },
  {
    category: 'Text & Hierarchy',
    tokens: [
      { name: 'Text Primary', varName: '--text-color', light: '#111111', dark: '#ffffff', desc: 'Heading dan teks utama' },
      { name: 'Text Secondary', varName: '--text-secondary', light: '#71717a', dark: '#a1a1aa', desc: 'Subjudul dan deskripsi' },
      { name: 'Text Muted', varName: '--text-muted', light: '#a1a1aa', dark: '#71717a', desc: 'Placeholder dan caption' },
    ]
  },
  {
    category: 'Brand, Border & Status',
    tokens: [
      { name: 'Uwebly Accent', varName: '--accent', light: '#ff42f2', dark: '#ff42f2', desc: 'Warna identitas khas Uwebly' },
      { name: 'Standard Border', varName: '--border', light: '#e0e0e0', dark: '#333333', desc: 'Flat border batas komponen' },
      { name: 'Danger / Destructive', varName: '--danger', light: '#ff4757', dark: '#ff4757', desc: 'Aksi hapus dan lencana peringatan' },
      { name: 'Danger Hover', varName: '--danger-hover', light: '#ff2222', dark: '#ff2222', desc: 'State hover aksi destruktif' },
    ]
  },
  {
    category: 'Skeletons & Shimmer',
    tokens: [
      { name: 'Skeleton Base', varName: '--skeleton-bg', light: '#e0e0e0', dark: '#2a2a2a', desc: 'Dasar loading placeholder' },
      { name: 'Skeleton Shimmer', varName: '--skeleton-shimmer', light: '#f0f0f0', dark: '#3a3a3a', desc: 'Animasi kilau placeholder' },
    ]
  }
]

const RADII_TOKENS = [
  { name: 'Radius XS', varName: '--radius-xs', value: '4px', desc: 'Tag dan lencana kecil' },
  { name: 'Radius SM', varName: '--radius-sm', value: '8px', desc: 'Tombol kecil dan input' },
  { name: 'Radius MD', varName: '--radius-md', value: '12px', desc: 'Kartu standar & dropdown' },
  { name: 'Radius LG', varName: '--radius-lg', value: '16px', desc: 'Modal container & banner' },
  { name: 'Radius XL', varName: '--radius-xl', value: '24px', desc: 'Camera modal & drawer' },
  { name: 'Radius Avatar', varName: '--radius-avatar', value: '40%', desc: 'Standar Squircle Bmdu' },
  { name: 'Radius Full', varName: '--radius-full', value: '50%', desc: 'Pills dan circular button' },
]

// ==========================================
// MAIN COMPONENT
// ==========================================
function App() {
  const [theme, setTheme] = useState('light')
  const [activeTab, setActiveTab] = useState('tokens')

  // Interactive Type Tester State (Google Fonts style)
  const [typeText, setTypeText] = useState('Bmdu Studio builds ultra-fast, lightweight web applications.')
  const [typeSize, setTypeSize] = useState(28)
  const [typeWeight, setTypeWeight] = useState(600)

  // Interactive Squircle Sandbox
  const [squircleRadius, setSquircleRadius] = useState(40)

  // Component Code Tab State
  const [componentCodeTab, setComponentCodeTab] = useState({
    buttons: 'preview',
    inputs: 'preview',
    mentions: 'preview',
    sidebar: 'preview',
    skeletons: 'preview',
  })

  // Interactive UI Test States
  const [isFollowing, setIsFollowing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModal, setActiveModal] = useState(null) // 'report' | 'drawer'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    showNotification(`Copied ${label || text} to clipboard!`)
  }

  const cdnSnippet = '<link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" />'

  return (
    <div className="min-h-screen bg-canvas text-text-main  duration-200">
      <header className="sticky top-0 z-[1000] border-b border-border bg-canvas/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo tumpuk 3 ke kanan */}
            <div className="flex items-center -space-x-4">
              <img
                src="/favicon.svg"
                alt="Uwebly"
                className="w-8 h-8 rounded-[40%] ring-1 ring-border relative z-30"
              />
              <img
                src="https://barticle.uwebly.com/assets/barticle/favicon.svg"
                alt="Barticle"
                className="w-8 h-8 rounded-[40%] ring-1 ring-border relative z-20"
              />
              <img
                src="https://velora.uwebly.com/assets/favicon.svg"
                alt="Velora"
                className="w-8 h-8 rounded-[40%] ring-1 ring-border relative z-10"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-md  text-text-main">
                  .Style
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://uwebly.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-sub hover:text-text-main rounded-lg "
            >
              <span>.Style</span>
              <ExternalLinkIcon className="w-3 h-3 opacity-60" />
            </a>


            <span className="px-2 py-0.5 text-[10px] font-bold bg-border/15 text-color border border-border">
              v3.0
            </span>
            <button
              onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
              className="flex items-center justify-center w-9 h-9 rounded-[40%] border border-border bg-hover-bg text-text-main hover:bg-hover"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4 text-color" /> : <MoonIcon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-canvas-sub/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-text-main leading-tight mb-4">
                The Design Language of Bmdu.
              </h1>
              <p className="text-base sm:text-lg text-text-sub leading-relaxed mb-8">
                Token desain murni, stylesheet produksi mandiri, dan arsitektur UI berstandar. Teroptimasi untuk performa CDN maksimal.
              </p>

              {/* Quick Start CDN Box */}
              <div className="border border-border bg-card rounded-xl p-3 sm:p-4 flex flex-row sm:flex-row items-center justify-center sm:items-center gap-3">
                <div className="overflow-x-auto scrollbar-none font-mono text-xs text-text-main">
                  <span className="truncate overflow-x-auto">
                    &lt;link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" /&gt;
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(cdnSnippet, 'CDN tag')}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-text-main text-canvas text-xs font-semibold rounded-lg hover:opacity-90 active:scale-95 shrink-0 cursor-pointer"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span className="!hidden md:!flex">Copy Link</span>
                </button>
              </div>
            </div>

            {/* Right: Image slot */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden">
                {/* Ganti dengan <img> atau <Image> kamu */}
                <img
                  src="https://uwebly.com/assets/sidebarads/creator.png"
                  alt="Bmdu design language preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Navigation */}
      <div className="border-b rounded-xl overflow-hidden border-border sticky top-16 z-[950] bg-bg-blur backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 justify-center sm:px-6 flex gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-2">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold  cursor-pointer shrink-0 ${activeTab === 'tokens'
              ? 'bg-text-main text-canvas'
              : 'text-text-sub hover:text-text-main hover:bg-hover'
              }`}
          >
            <PaletteIcon className="w-4 h-4" />
            <span className="!hidden md:!flex">Design Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold  cursor-pointer shrink-0 ${activeTab === 'typography'
              ? 'bg-text-main text-canvas'
              : 'text-text-sub hover:text-text-main hover:bg-hover'
              }`}
          >
            <TypeIcon className="w-4 h-4" />
            <span className='!hidden md:!flex'>Typography Tester</span>
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold  cursor-pointer shrink-0 ${activeTab === 'components'
              ? 'bg-text-main text-canvas'
              : 'text-text-sub hover:text-text-main hover:bg-hover'
              }`}
          >
            <ComponentsIcon className="w-4 h-4" />
            <span className='!hidden md:!flex'>Components & Code</span>
          </button>

          <button
            onClick={() => setActiveTab('shapes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold  cursor-pointer shrink-0 ${activeTab === 'shapes'
              ? 'bg-text-main text-canvas'
              : 'text-text-sub hover:text-text-main hover:bg-hover'
              }`}
          >
            <ShapesIcon className="w-4 h-4" />
            <span className='!hidden md:!flex'>Squircle 40% Architecture</span>
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* ==============================================
            TAB 1: DESIGN TOKENS
            ============================================== */}
        {activeTab === 'tokens' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold  text-text-main mb-1">Color Palette Tokens</h2>
              <p className="text-xs text-text-sub">Klik pada swatch kartu mana saja untuk meng-copy nama token CSS (misal: <code>var(--accent)</code>).</p>
            </div>

            {COLOR_GROUPS.map(group => (
              <section key={group.category} className="space-y-4">
                <h3 className="text-sm font-semibold text-text-sub tracking-wider">{group.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {group.tokens.map(token => {
                    const activeVal = theme === 'dark' ? token.dark : token.light
                    return (
                      <div
                        key={token.varName}
                        onClick={() => copyToClipboard(`var(${token.varName})`, token.varName)}
                        className="group border border-border bg-card hover:bg-hover p-3.5 rounded-xl cursor-pointer  flex flex-col justify-between h-36"
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="w-10 h-10 rounded-lg border border-border shrink-0 transition-transform group-hover:scale-105"
                            style={{ backgroundColor: activeVal }}
                          ></div>
                          <span className="text-text-sec uppercase self-start leading-none">
                            {activeVal}
                          </span>
                        </div>

                        <div>
                          <div className="font-semibold text-xs text-text-main leading-snug truncate">{token.name}</div>
                          <div className="font-mono text-[11px] text-accent font-medium">{token.varName}</div>
                          <div className="flex items-center justify-between text-[10px] text-text-mute mt-1">
                            <span className="truncate">{token.desc}</span>
                            <span className="opacity-0 group-hover:opacity-100 text-[10px] font-mono text-text font-semibold flex items-center gap-1 transition-opacity">
                              <CopyIcon className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}

            {/* Radius Tokens Matrix */}
            <section className="space-y-4 pt-6 border-t border-border">
              <div>
                <h2 className="text-xl font-bold  text-text-main mb-1">Corner Radii Tokens</h2>
                <p className="text-xs text-text-sub">Karakter sudut melengkung modular yang diterapkan secara konsisten di seluruh aplikasi Bmdu.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {RADII_TOKENS.map(r => (
                  <div
                    key={r.varName}
                    onClick={() => copyToClipboard(`var(${r.varName})`, r.varName)}
                    className="border border-border bg-card p-4 rounded-xl flex flex-col items-center text-center cursor-pointer hover:bg-hover  group"
                  >
                    <div
                      className="w-16 h-16 border-2 border-text bg-[var(--text-color)] mb-3 transition-transform group-hover:scale-105 flex items-center justify-center font-mono text-[11px] font-bold text-[var(--bg-color)]"
                      style={{ borderRadius: r.value }}
                    >
                      {r.value}
                    </div>
                    <div className="font-bold text-xs text-text-main">{r.name}</div>
                    <div className="font-mono text-[11px] text-text">{r.varName}</div>
                    <div className="text-[10px] text-text-mute mt-1">{r.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==============================================
            TAB 2: TYPOGRAPHY TESTER (GOOGLE FONTS STYLE)
            ============================================== */}
        {activeTab === 'typography' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold  text-text-main mb-1">Typography Scale & Type Tester</h2>
              <p className="text-xs text-text-sub">Uji render tipografi Inter font secara interaktif seperti Google Fonts, lengkap dengan kontrol size dan font-weight.</p>
            </div>

            {/* Interactive Control Deck */}
            <div className="border border-border bg-card rounded-2xl p-5 space-y-5">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                {/* Input Text Field */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={typeText}
                    onChange={e => setTypeText(e.target.value)}
                    placeholder="Ketik teks kustom untuk menguji render font..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-input text-sm text-text-main outline-none focus:border-text-main"
                  />
                </div>

                {/* Size Slider */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-text-sub font-medium">Size:</span>
                  <input
                    type="range"
                    min="14"
                    max="64"
                    value={typeSize}
                    onChange={e => setTypeSize(Number(e.target.value))}
                    className="w-32 accent-accent cursor-pointer"
                  />
                  <span className="font-mono text-xs font-bold text-text-main w-10 text-right">{typeSize}px</span>
                </div>

                {/* Weight Selector */}
                <div className="flex items-center gap-1.5 shrink-0 bg-input p-1 rounded-xl border border-border">
                  {[
                    { label: '400', val: 400 },
                    { label: '500', val: 500 },
                    { label: '600', val: 600 },
                    { label: '700', val: 700 }
                  ].map(w => (
                    <button
                      key={w.val}
                      onClick={() => setTypeWeight(w.val)}
                      className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-lg cursor-pointer  ${typeWeight === w.val
                        ? 'bg-text-main text-canvas'
                        : 'text-text-sub hover:text-text-main'
                        }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Canvas Box */}
              <div className="border border-border rounded-xl p-6 bg-canvas min-h-[140px] flex items-center">
                <p
                  style={{
                    fontSize: `${typeSize}px`,
                    fontWeight: typeWeight,
                    lineHeight: 1.25,
                    fontFamily: 'var(--font-sans)',
                  }}
                  className="text-text-main  break-words max-w-full"
                >
                  {typeText || 'Ketik sesuatu di atas...'}
                </p>
              </div>

              {/* Font Token Quick Details */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs pt-2">
                <button
                  onClick={() => copyToClipboard('font-family: var(--font-sans);', 'Font family CSS')}
                  className="inline-flex items-center gap-1.5 text-xs text-text-main hover:underline cursor-pointer font-medium"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span className='md:hidden'>Copy CSS Snippet</span>
                </button>
              </div>
            </div>

            {/* Typography Hierarchy Specimen */}
            <section className="space-y-4 pt-6 border-t border-border">
              <h3 className="text-sm font-semibold text-text-sub tracking-wider">Hierarchy & Scales</h3>
              <div className="border border-border bg-card rounded-xl divide-y divide-border">
                {[
                  { level: 'Display Hero', size: '36px / 44px', weight: '700 Bold', text: 'Simplicity and Speed Redefined', usage: 'Halaman hero landing & showcase' },
                  { level: 'Title H1', size: '28px / 36px', weight: '700 Bold', text: 'Modern Design for Clean Web', usage: 'Header section artikel & dashboard' },
                  { level: 'Title H2', size: '20px / 28px', weight: '600 SemiBold', text: 'Realtime Messaging Experience', usage: 'Judul kartu dan modal header' },
                  { level: 'Body Standard', size: '15px / 24px', weight: '400 Regular', text: 'Clean typography optimized for high readability across OLED and LCD displays.', usage: 'Konten paragraf berita & pesan teks' },
                  { level: 'Caption Muted', size: '12px / 18px', weight: '500 Medium', text: '26 November 2026 • Verified Bmdu Ecosystem Standard', usage: 'Timestamp, lencana status, sublabel' },
                ].map(item => (
                  <div key={item.level} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="w-48 shrink-0">
                      <div className="font-bold text-xs text-text-main">{item.level}</div>
                      <div className="font-mono text-[11px] text-text-sub">{item.size} • {item.weight}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-main truncate" style={{ fontSize: item.size.split(' ')[0], fontWeight: item.weight.startsWith('700') ? 700 : item.weight.startsWith('600') ? 600 : item.weight.startsWith('500') ? 500 : 400 }}>
                        {item.text}
                      </p>
                    </div>
                    <div className="text-[11px] text-text-mute shrink-0 hidden lg:block">
                      {item.usage}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==============================================
            TAB 3: COMPONENTS & CODE
            ============================================== */}
        {activeTab === 'components' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold  text-text-main mb-1">Official UI Components</h2>
              <p className="text-xs text-text-sub">Komponen murni CSS yang didistribusikan langsung di dalam <code>uwebly3.min.css</code>. Klik tab "HTML Code" untuk menyalin markup.</p>
            </div>

            {/* Section 1: Buttons & Interactive Triggers */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
                <div>
                  <h3 className="font-bold text-sm text-text-main">Action Buttons & Chips</h3>
                  <span className="text-xs text-text-sub">Variasi tombol primer, sekunder, login, dan destruktif.</span>
                </div>
                <div className="flex items-center gap-1 bg-input p-1 rounded-lg border border-border">
                  <button
                    onClick={() => setComponentCodeTab(prev => ({ ...prev, buttons: 'preview' }))}
                    title="Preview"
                    className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${componentCodeTab.buttons === 'preview' ? 'bg-text-main text-canvas' : 'text-text-sub'
                      }`}
                  >
                    {/* Icon: Muncul di Mobile, Hilang di Desktop */}
                    <svg
                      xmlns="http://w3.org"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 !block md:!hidden"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>

                    {/* Text: Hilang di Mobile, Muncul di Desktop */}
                    <span className="!hidden md:!inline">Preview</span>
                  </button>

                  <button
                    onClick={() => setComponentCodeTab(prev => ({ ...prev, buttons: 'code' }))}
                    title="HTML Code"
                    className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${componentCodeTab.buttons === 'code' ? 'bg-text-main text-canvas' : 'text-text-sub'
                      }`}
                  >
                    {/* Icon: Muncul di Mobile, Hilang di Desktop */}
                    <svg
                      xmlns="http://w3.org"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 !block md:!hidden"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>

                    {/* Text: Hilang di Mobile, Muncul di Desktop */}
                    <span className="!hidden md:!inline">HTML Code</span>
                  </button>
                </div>

              </div>

              {componentCodeTab.buttons === 'preview' ? (
                <div className="p-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`sidebar-follow-btn ${isFollowing ? 'following' : ''}`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>

                  <button className="ee-login-btn">
                    <span>Login Button</span>
                  </button>

                  <button className="notfound-button text-text-main font-medium text-sm">
                    Secondary Action
                  </button>

                  <button className="report-btn-submit text-xs" style={{ padding: '8px 16px', borderRadius: '15px' }}>
                    Destructive Action
                  </button>

                  <button className="report-btn-cancel text-xs" style={{ padding: '8px 16px', borderRadius: '15px' }}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
                  <button
                    onClick={() => copyToClipboard(`<button class="ee-login-btn">Login Button</button>\n<button class="sidebar-follow-btn">Follow</button>\n<button class="report-btn-submit">Delete</button>`, 'Button Markup')}
                    className="absolute top-3 right-3 text-xs text-text-sub hover:text-text-main flex items-center gap-1 cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                  <pre className="text-text-sub">
                    {`<!-- Tombol Login / Primer -->
<button class="ee-login-btn">Login Button</button>

<!-- Tombol Follow / Interaktif -->
<button class="sidebar-follow-btn">Follow</button>
<button class="sidebar-follow-btn following">Following</button>

<!-- Tombol Destruktif (Danger) -->
<button class="report-btn-submit">Delete Post</button>`}
                  </pre>
                </div>
              )}
            </div>

            {/* Section 2: Mention Search & Dropdown Preview */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
                <div>
                  <h3 className="font-bold text-sm text-text-main">Search & Mention Dropdown</h3>
                  <span className="text-xs text-text-sub">Input wrapper dengan icon dan daftar mention pengguna.</span>
                </div>
                <div className="flex items-center gap-1 bg-input p-1 rounded-lg border border-border">
                  <button
                    onClick={() => setComponentCodeTab(prev => ({ ...prev, mentions: 'preview' }))}
                    title="Preview"
                    className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${componentCodeTab.mentions === 'preview' ? 'bg-text-main text-canvas' : 'text-text-sub'
                      }`}
                  >
                    {/* Icon: Muncul di Mobile, Hilang di Desktop */}
                    <svg
                      xmlns="http://w3.org"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 !block md:!hidden"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>

                    {/* Text: Hilang di Mobile, Muncul di Desktop */}
                    <span className="!hidden md:!inline">Preview</span>
                  </button>

                  <button
                    onClick={() => setComponentCodeTab(prev => ({ ...prev, mentions: 'code' }))}
                    title="HTML Code"
                    className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${componentCodeTab.mentions === 'code' ? 'bg-text-main text-canvas' : 'text-text-sub'
                      }`}
                  >
                    {/* Icon: Muncul di Mobile, Hilang di Desktop */}
                    <svg
                      xmlns="http://w3.org"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 !block md:!hidden"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>

                    {/* Text: Hilang di Mobile, Muncul di Desktop */}
                    <span className="!hidden md:!inline">HTML Code</span>
                  </button>
                </div>
              </div>

              {componentCodeTab.mentions === 'preview' ? (
                <div className="p-6 max-w-md space-y-4">
                  <div className="search-wrapper">
                    <span className="search-icon"><SearchIcon /></span>
                    <input
                      type="text"
                      placeholder="Cari pengguna atau tagar..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="border border-border rounded-xl p-2 bg-canvas space-y-1">
                    <div className="mention-item active">
                      <img src="https://github.com/umarfauzan11.png" alt="UFauzan" className="mention-avatar" />
                      <div className="mention-info">
                        <div className="flex items-center gap-1">
                          <span className="mention-name">UFauzan (Active)</span>
                          <VerifiedBadgeIcon className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <span className="mention-usertag">@umarfauzan11</span>
                      </div>
                    </div>
                    <div className="mention-item">
                      <img src="https://github.com/velora-assistant.png" alt="UFauzan" className="mention-avatar" />
                      <div className="mention-info">
                        <div className="flex items-center gap-1">
                          <span className="mention-name">Velora</span>
                          <VerifiedBadgeIcon className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <span className="mention-usertag">@velora-assistant</span>
                      </div>
                    </div>
                    <div className="mention-item">
                      <img src="https://github.com/ahzanmc.png" alt="UFauzan" className="mention-avatar" />
                      <div className="mention-info">
                        <div className="flex items-center gap-1">
                          <span className="mention-name">AhZanMC</span>
                          <VerifiedBadgeIcon className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <span className="mention-usertag">@ahzanmc</span>
                      </div>
                    </div>
                    <div className="mention-item">
                      <img src="https://ahzanmc.com/assets/zansocial/favicon.svg" alt="UFauzan" className="mention-avatar" />
                      <div className="mention-info">
                        <div className="flex items-center gap-1">
                          <span className="mention-name">Zansocial.</span>
                        </div>
                        <span className="mention-usertag">@zansocial</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
                  <pre className="text-text-sub">
                    {`<div class="search-wrapper">
  <span class="search-icon">🔍</span>
  <input type="text" placeholder="Cari..." />
</div>

<div class="mention-dropdown">
  <div class="mention-item active">
    <img src="/avatar.jpg" class="mention-avatar" />
    <div class="mention-info">
      <span class="mention-name">Usahlan</span>
      <span class="mention-usertag">@usahlan</span>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              )}
            </div>

            {/* Section 3: Trending Topics & Sidebar Cards */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
                <div>
                  <h3 className="font-bold text-sm text-text-main">Sidebar Card & Hashtag Ranking</h3>
                  <span className="text-xs text-text-sub">Kartu sidebar flat border tanpa shadow.</span>
                </div>
              </div>
              <div className="p-6 max-w-sm">
                <div className="sidebar-card" style={{ margin: 0 }}>
                  <div className="sidebar-header-suggest">
                    <h4>Top Trends</h4>
                    <span className="sidebar-see-all cursor-pointer">Lihat Semua</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="sidebar-hashtag-item">
                      <div className="hashtag-rank">1</div>
                      <div className="hashtag-info">
                        <span className="hashtag-name">#uwebly_style</span>
                        <span className="hashtag-count">18.4k posts</span>
                      </div>
                      <ChevronRightIcon className="hashtag-arrow" />
                    </div>
                    <div className="sidebar-hashtag-item">
                      <div className="hashtag-rank" style={{ background: 'var(--border)', color: 'var(--text-color)' }}>2</div>
                      <div className="hashtag-info">
                        <span className="hashtag-name">#bmdu_studio</span>
                        <span className="hashtag-count">9.1k posts</span>
                      </div>
                      <ChevronRightIcon className="hashtag-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Modal & Drawer Live Interactive Triggers */}
            <div className="border border-border bg-card rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-bold text-sm text-text-main">Modal & Drawer Triggers</h3>
                <span className="text-xs text-text-sub">Klik tombol di bawah untuk mencoba modal dan drawer dengan styling flat border & animasi scale.</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModal('report')}
                  className="px-4 py-2 border border-border rounded-xl text-xs font-semibold hover:bg-hover cursor-pointer"
                >
                  Buka Report Modal
                </button>
                <button
                  onClick={() => setActiveModal('drawer')}
                  className="px-4 py-2 border border-border rounded-xl text-xs font-semibold hover:bg-hover cursor-pointer"
                >
                  Buka Message Drawer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================
            TAB 4: SQUIRCLE 40% ARCHITECTURE
            ============================================== */}
        {activeTab === 'shapes' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold  text-text-main mb-1">Bmdu Squircle Architecture (40%)</h2>
              <p className="text-xs text-text-sub">Kenapa seluruh ekosistem Bmdu menggunakan <code>border-radius: 40%</code> dan melarang bulat penuh 50%?</p>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Bmdu Standard 40% */}
              <div className="border-2 border-border bg-card rounded-2xl p-6 flex flex-col items-center text-center relative">
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-text text-bg">
                  Bmdu Standard
                </span>
                <img
                  src="https://uwebly.com/assets/avatar/profilesmall.webp"
                  alt="Squircle"
                  className="w-24 h-24 mb-4 object-cover border border-border"
                  style={{ borderRadius: '40%' }}
                />
                <h4 className="font-bold text-sm text-text-main">Squircle 40%</h4>
                <code className="text-xs text-accent font-mono mt-1 mb-2">border-radius: 40%;</code>
                <p className="text-xs text-text-sub leading-relaxed">
                  Estetika modern ala iOS & macOS. Sudut melengkung lembut tanpa memotong sudut foto secara berlebihan. Memberikan identitas visual khas Bmdu.
                </p>
              </div>

              {/* Card 2: Old Circle 50% */}
              <div className="border border-border bg-card rounded-2xl p-6 flex flex-col items-center text-center opacity-70">
                <img
                  src="https://uwebly.com/assets/avatar/profilesmall.webp"
                  alt="Circle"
                  className="w-24 h-24 mb-4 object-cover border border-border"
                  style={{ borderRadius: '50%' }}
                />
                <h4 className="font-bold text-sm text-text-main">Circle 50% (Legacy)</h4>
                <code className="text-xs text-text-sub font-mono mt-1 mb-2">border-radius: 50%;</code>
                <p className="text-xs text-text-sub leading-relaxed">
                  Bentuk lingkaran konvensional Web 2.0. Terlalu umum dan sering kali memotong informasi penting pada sudut avatar.
                </p>
              </div>

              {/* Card 3: Rigid Square 8px */}
              <div className="border border-border bg-card rounded-2xl p-6 flex flex-col items-center text-center opacity-70">
                <img
                  src="https://uwebly.com/assets/avatar/profilesmall.webp"
                  alt="Rigid"
                  className="w-24 h-24 mb-4 object-cover border border-border"
                  style={{ borderRadius: '8px' }}
                />
                <h4 className="font-bold text-sm text-text-main">Square 8px</h4>
                <code className="text-xs text-text-sub font-mono mt-1 mb-2">border-radius: 8px;</code>
                <p className="text-xs text-text-sub leading-relaxed">
                  Sudut kaku yang menyerupai favicon atau app icon, kurang luwes untuk merepresentasikan wajah pengguna.
                </p>
              </div>
            </div>

            {/* Interactive Squircle Playground Slider */}
            <div className="border border-border bg-card rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="font-bold text-sm text-text-main">Interactive Squircle Tester</h3>
                <span className="text-xs text-text-sub">Geser slider di bawah ini untuk melihat transisi bentuk dari kotak murni (0%) hingga lingkaran (50%).</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 justify-center py-4">
                <div
                  className="w-32 h-32 border-2 border-border overflow-hidden shrink-0  duration-150 flex items-center justify-center bg-canvas-sub"
                  style={{ borderRadius: `${squircleRadius}%` }}
                >
                  <img
                    src="https://uwebly.com/assets/avatar/profilesmall.webp"
                    alt="Tester"
                    className="w-full h-full object-cover"
                    style={{ borderRadius: `${squircleRadius}%` }}
                  />
                </div>

                <div className="flex-1 max-w-md space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-sub">Radius Value:</span>
                    <span className="font-bold text-base text-text">{squircleRadius}%</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={squircleRadius}
                    onChange={e => setSquircleRadius(Number(e.target.value))}
                    className="w-full accent-accent cursor-pointer"
                  />

                  <div className="flex items-center justify-between text-[11px] text-text-mute">
                    <span>0%</span>
                    <button
                      onClick={() => setSquircleRadius(40)}
                      className="px-2 py-1 rounded-full bg-border text-text font-semibold hover:bg-border/20 cursor-pointer"
                    >
                      Reset
                    </button>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==============================================
          MODAL PREVIEWS OVERLAY
          ============================================== */}
      {activeModal === 'report' && (
        <div className="report-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="report-modal-container" onClick={e => e.stopPropagation()}>
            <div className="report-modal-header">
              <div className="report-modal-title">
                <h3>Laporkan Konten</h3>
              </div>
              <button className="report-modal-close" onClick={() => setActiveModal(null)}>
                <CloseIcon />
              </button>
            </div>
            <div className="report-modal-body">
              <p className="report-modal-subtitle">Pilih alasan pelaporan:</p>
              <div className="report-reasons-list">
                <label className="report-reason-item">
                  <input type="radio" name="reason" defaultChecked />
                  <span className="report-reason-label">Spam atau iklan tidak diinginkan</span>
                </label>
                <label className="report-reason-item">
                  <input type="radio" name="reason" />
                  <span className="report-reason-label">Pelecehan atau ujaran kebencian</span>
                </label>
              </div>
            </div>
            <div className="report-modal-footer">
              <button className="report-btn-cancel" onClick={() => setActiveModal(null)}>
                Batal
              </button>
              <button className="report-btn-submit" onClick={() => { setActiveModal(null); copyToClipboard('Report submitted', 'Status') }}>
                Kirim Laporan
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'drawer' && (
        <div className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-xs flex justify-end" onClick={() => setActiveModal(null)}>
          <div className="message-drawer" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-sm text-text-main">Message Drawer Preview</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-lg hover:bg-hover cursor-pointer text-text-main">
                <CloseIcon />
              </button>
            </div>
            <div className="p-6 text-xs text-text-sub space-y-3">
              <p>Ini adalah tampilan drawer geser kanan (slide-in) yang menggunakan flat border kiri <code>1px solid var(--border)</code> tanpa shadow sama sekali.</p>
              <p>Mendukung responsivitas penuh di desktop (500px) maupun layar ponsel (100% full width).</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16 bg-canvas-sub/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-sub">
          <div className="flex items-center gap-2">
            <span className="font-bold text-text-main">Bmdu Studio</span>
            <span>•</span>
            <span>Uwebly Design System & Tokens</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main ">Uwebly.com</a>
            <a href="https://umessage.uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main ">UMessage</a>
            <a href="https://velora.uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main ">Velora</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
