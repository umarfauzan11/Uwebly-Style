import { useState } from 'react'
import { CopyIcon, ExternalLinkIcon } from '../icons'

export function Hero({ copyToClipboard }) {
  const [installTab, setInstallTab] = useState('html')

  const CSS_SRI = 'sha384-BbkDiRn9IiYi67jlWkpv3YsEWZ0waKl582XgXCqfsEIrw6zT8i9cC//UIMs0xa8/'
  const JS_SRI = 'sha384-wITgPxV4ePOzfIoUFLy7jYeeyRNOqG2CF9iroLYpo8Gt7CsWEqNTK94ZT6QQ6m0G'

  const SNIPPETS = {
    html: {
      label: 'HTML <link>',
      desc: 'Stylesheet mandiri cepat untuk semua halaman web.',
      code: '<link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" />'
    },
    sri: {
      label: 'Secure SRI',
      desc: 'Standar keamanan enterprise anti-tampering via hash SHA-384.',
      code: `<link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" integrity="${CSS_SRI}" crossorigin="anonymous" />`
    },
    import: {
      label: 'CSS @import',
      desc: 'Impor langsung di dalam file styles.css atau SCSS proyekmu.',
      code: '@import url("https://style.uwebly.com/uwebly3.min.css");'
    },
    js: {
      label: 'JS Companion',
      desc: 'Engine vanilla interaktif (~2KB) untuk modal, drawer, accordion & theme switch.',
      code: `<script type="module" src="https://style.uwebly.com/uwebly.min.js" integrity="${JS_SRI}" crossorigin="anonymous"></script>`
    },
    bundle: {
      label: 'Full Suite',
      desc: 'Paket lengkap CSS & JS engine siap pakai untuk HTML/PHP/Laravel.',
      code: `<!-- Uwebly Style 3.0 CSS -->\n<link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" integrity="${CSS_SRI}" crossorigin="anonymous" />\n\n<!-- Uwebly Companion JS Engine -->\n<script type="module" src="https://style.uwebly.com/uwebly.min.js" integrity="${JS_SRI}" crossorigin="anonymous"></script>`
    },
    ai: {
      label: 'AI Docs',
      desc: 'Panduan lengkap dan aturan arsitektur BMDU untuk AI Assistants (llms.txt).',
    }
  }

  const activeSnippet = SNIPPETS[installTab]

  return (
    <section className="border-b border-border bg-canvas-sub/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-text-main leading-tight mb-4">
              The Design Language of Bmdu.
            </h1>
            <p className="text-base sm:text-lg text-text-sub leading-relaxed mb-6">
              Token desain murni, stylesheet produksi mandiri, dan engine UI interaktif berstandar. Teroptimasi untuk performa CDN maksimal.
            </p>

            {/* Quick Start Installation Deck (Bootstrap-style) */}
            <div className="border border-border bg-card rounded-2xl overflow-hidden shadow-none">
              {/* Tabs Bar */}
              <div className="flex items-center gap-1 p-1.5 border-b border-border bg-canvas-sub/60 overflow-x-auto scrollbar-none">
                {Object.entries(SNIPPETS).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setInstallTab(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${installTab === key
                        ? 'bg-text-main text-canvas'
                        : 'text-text-sub hover:text-text-main hover:bg-hover'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Code Display & Action Button (Copy / See Docs) */}
              <div className="p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-canvas">
                {installTab !== 'ai' && (
                  <div className="overflow-x-auto scrollbar-none font-mono text-xs text-text-main py-1">
                    <pre className="whitespace-pre overflow-x-auto scrollbar-none selection:bg-accent/30">
                      {activeSnippet.code}
                    </pre>
                  </div>
                )}

                {installTab === 'ai' ? (
                  <a
                    href="/llms.txt"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center w-full justify-center gap-2 px-4 py-2 bg-text-main text-canvas text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 shrink-0 cursor-pointer self-end sm:self-center"
                    title="Buka dokumen lengkap llms.txt di tab baru"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    <span>See Docs</span>
                  </a>
                ) : (
                  <button
                    onClick={() => copyToClipboard(activeSnippet.code, `${activeSnippet.label} snippet`)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-text-main text-canvas text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 shrink-0 cursor-pointer self-end sm:self-center"
                    title="Copy snippet to clipboard"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Image slot */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden">
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
  )
}
