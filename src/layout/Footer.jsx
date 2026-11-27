export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16 bg-canvas-sub/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-sub">
        <div className="flex items-center gap-2">
          <span className="font-bold text-text-main">Bmdu Studio</span>
          <span>•</span>
          <span>Uwebly Design</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a href="https://uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main">Uwebly.com</a>
          <a href="https://umessage.uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main">UMessage</a>
          <a href="https://velora.uwebly.com" target="_blank" rel="noreferrer" className="hover:text-text-main">Velora</a>
        </div>
      </div>
    </footer>
  )
}
