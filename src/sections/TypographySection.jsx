import { CopyIcon } from '../icons'
import { TYPE_SCALES } from '../data/tokensData'

export function TypographySection({
  typeText,
  setTypeText,
  typeSize,
  setTypeSize,
  typeWeight,
  setTypeWeight,
  copyToClipboard,
}) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-text-main mb-1">Typography Scale & Type Tester</h2>
        <p className="text-xs text-text-sub">
          Uji render tipografi Inter font secara interaktif seperti Fonts, lengkap dengan kontrol size dan font-weight.
        </p>
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
                className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-lg cursor-pointer ${
                  typeWeight === w.val ? 'bg-text-main text-canvas' : 'text-text-sub hover:text-text-main'
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
            className="text-text-main break-words max-w-full"
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
            <span className="md:hidden">Copy CSS Snippet</span>
          </button>
        </div>
      </div>

      {/* Typography Hierarchy Specimen */}
      <section className="space-y-4 pt-6 border-t border-border">
        <h3 className="text-sm font-semibold text-text-sub tracking-wider">Hierarchy & Scales</h3>
        <div className="border border-border bg-card rounded-xl divide-y divide-border">
          {TYPE_SCALES.map(item => (
            <div key={item.level} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="w-48 shrink-0">
                <div className="font-bold text-xs text-text-main">{item.level}</div>
                <div className="font-mono text-[11px] text-text-sub">{item.size} • {item.weight}</div>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-text-main truncate"
                  style={{
                    fontSize: item.size.split(' ')[0],
                    fontWeight: item.weight.startsWith('700')
                      ? 700
                      : item.weight.startsWith('600')
                      ? 600
                      : item.weight.startsWith('500')
                      ? 500
                      : 400
                  }}
                >
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
  )
}
