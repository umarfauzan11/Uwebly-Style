import { CopyIcon } from '../icons'
import { COLOR_GROUPS, RADII_TOKENS } from '../data/tokensData'

export function TokensSection({ theme, copyToClipboard }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl font-bold text-text-main mb-1">Color Palette Tokens</h2>
        <p className="text-xs text-text-sub">
          Klik pada swatch kartu mana saja untuk meng-copy nama token CSS (misal: <code>var(--accent)</code>).
        </p>
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
                  className="group border border-border bg-card hover:bg-hover p-3.5 rounded-xl cursor-pointer flex flex-col justify-between h-36"
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
          <h2 className="text-xl font-bold text-text-main mb-1">Corner Radii Tokens</h2>
          <p className="text-xs text-text-sub">
            Karakter sudut melengkung modular yang diterapkan secara konsisten di seluruh aplikasi Bmdu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {RADII_TOKENS.map(r => (
            <div
              key={r.varName}
              onClick={() => copyToClipboard(`var(${r.varName})`, r.varName)}
              className="border border-border bg-card p-4 rounded-xl flex flex-col items-center text-center cursor-pointer hover:bg-hover group"
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
  )
}
