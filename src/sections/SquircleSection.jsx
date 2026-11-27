export function SquircleSection({ squircleRadius, setSquircleRadius }) {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold text-text-main mb-1">Bmdu Squircle Architecture (40%)</h2>
        <p className="text-xs text-text-sub">
          Kenapa seluruh ekosistem Bmdu menggunakan <code>border-radius: 40%</code> dan melarang bulat penuh 50%?
        </p>
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
          <span className="text-xs text-text-sub">
            Geser slider di bawah ini untuk melihat transisi bentuk dari kotak murni (0%) hingga lingkaran (50%).
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center py-4">
          <div
            className="w-32 h-32 border-2 border-border overflow-hidden shrink-0 duration-150 flex items-center justify-center bg-canvas-sub"
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
  )
}
