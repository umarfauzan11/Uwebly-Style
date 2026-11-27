import { ExternalLinkIcon, SunIcon, MoonIcon } from '../icons'

export function Navbar({ theme, setTheme }) {
  return (
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
              <span className="font-bold text-md text-text-main">
                .Style
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="px-2 py-0.5 text-[10px] font-bold bg-border/15 text-color border border-border">
            v3.0.1
          </span>
          <button
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            className="flex items-center justify-center w-9 h-9 rounded-[40%] border border-border bg-hover-bg text-text-main hover:bg-hover cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <SunIcon className="w-4 h-4 text-color" /> : <MoonIcon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  )
}
