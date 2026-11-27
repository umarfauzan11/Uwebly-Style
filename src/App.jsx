import { useState, useEffect } from 'react'
import { showNotification } from './services/notification'
import { PaletteIcon, TypeIcon, ComponentsIcon, ShapesIcon } from './icons'
import { Navbar } from './layout/Navbar'
import { Hero } from './layout/Hero'
import { Footer } from './layout/Footer'
import { Modals } from './layout/Modals'
import { TokensSection } from './sections/TokensSection'
import { TypographySection } from './sections/TypographySection'
import { ComponentsSection } from './sections/ComponentsSection'
import { SquircleSection } from './sections/SquircleSection'

export default function App() {
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

  return (
    <div className="min-h-screen bg-canvas text-text-main duration-200">
      {/* Header / Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <Hero copyToClipboard={copyToClipboard} />

      {/* Main Tab Navigation */}
      <div className="border-b rounded-xl overflow-hidden border-border sticky top-16 z-[950] bg-bg-blur backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 justify-center sm:px-6 flex gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-2">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer shrink-0 ${
              activeTab === 'tokens'
                ? 'bg-text-main text-canvas'
                : 'text-text-sub hover:text-text-main hover:bg-hover'
            }`}
          >
            <PaletteIcon className="w-4 h-4" />
            <span className="!hidden md:!flex">Design Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer shrink-0 ${
              activeTab === 'typography'
                ? 'bg-text-main text-canvas'
                : 'text-text-sub hover:text-text-main hover:bg-hover'
            }`}
          >
            <TypeIcon className="w-4 h-4" />
            <span className="!hidden md:!flex">Typography Tester</span>
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer shrink-0 ${
              activeTab === 'components'
                ? 'bg-text-main text-canvas'
                : 'text-text-sub hover:text-text-main hover:bg-hover'
            }`}
          >
            <ComponentsIcon className="w-4 h-4" />
            <span className="!hidden md:!flex">Components & Code</span>
          </button>

          <button
            onClick={() => setActiveTab('shapes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer shrink-0 ${
              activeTab === 'shapes'
                ? 'bg-text-main text-canvas'
                : 'text-text-sub hover:text-text-main hover:bg-hover'
            }`}
          >
            <ShapesIcon className="w-4 h-4" />
            <span className="!hidden md:!flex">Squircle 40% Architecture</span>
          </button>
        </div>
      </div>

      {/* Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {activeTab === 'tokens' && (
          <TokensSection theme={theme} copyToClipboard={copyToClipboard} />
        )}

        {activeTab === 'typography' && (
          <TypographySection
            typeText={typeText}
            setTypeText={setTypeText}
            typeSize={typeSize}
            setTypeSize={setTypeSize}
            typeWeight={typeWeight}
            setTypeWeight={setTypeWeight}
            copyToClipboard={copyToClipboard}
          />
        )}

        {activeTab === 'components' && (
          <ComponentsSection
            componentCodeTab={componentCodeTab}
            setComponentCodeTab={setComponentCodeTab}
            isFollowing={isFollowing}
            setIsFollowing={setIsFollowing}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveModal={setActiveModal}
            copyToClipboard={copyToClipboard}
          />
        )}

        {activeTab === 'shapes' && (
          <SquircleSection
            squircleRadius={squircleRadius}
            setSquircleRadius={setSquircleRadius}
          />
        )}
      </main>

      {/* Modals & Drawers */}
      <Modals
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        copyToClipboard={copyToClipboard}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
