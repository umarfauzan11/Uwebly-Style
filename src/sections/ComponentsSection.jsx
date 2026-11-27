import { useState } from 'react'
import { CopyIcon, SearchIcon, VerifiedBadgeIcon, ChevronRightIcon } from '../icons'

export function ComponentsSection({
  isFollowing,
  setIsFollowing,
  searchQuery,
  setSearchQuery,
  setActiveModal,
  copyToClipboard,
}) {
  // Local tab state per card: 'preview' | 'code'
  const [activeCodeTabs, setActiveCodeTabs] = useState({
    buttons: 'preview',
    dropdown: 'preview',
    accordion: 'preview',
    modals: 'preview',
    bottomsheet: 'preview',
    mentions: 'preview',
    sidebar: 'preview',
  })

  // Dropdown interactive test state
  const [activeDropdown, setActiveDropdown] = useState(null) // null | 'tl' | 'tr' | 'bl' | 'br'

  // Accordion interactive test state
  const [openAccordions, setOpenAccordions] = useState([0]) // Array of open item indices

  const toggleAccordionItem = (idx) => {
    setOpenAccordions(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const setCardTab = (section, tab) => {
    setActiveCodeTabs(prev => ({ ...prev, [section]: tab }))
  }

  const renderTabSwitcher = (sectionKey) => {
    const isPreview = activeCodeTabs[sectionKey] === 'preview'
    return (
      <div className="flex items-center gap-1 bg-input p-1 rounded-lg border border-border">
        <button
          onClick={() => setCardTab(sectionKey, 'preview')}
          title="Preview"
          className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${
            isPreview ? 'bg-text-main text-canvas' : 'text-text-sub hover:text-text-main'
          }`}
        >
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
          <span className="!hidden md:!inline">Preview</span>
        </button>

        <button
          onClick={() => setCardTab(sectionKey, 'code')}
          title="Code"
          className={`px-2 md:px-2.5 py-1 text-xs font-semibold rounded-full cursor-pointer flex items-center justify-center ${
            !isPreview ? 'bg-text-main text-canvas' : 'text-text-sub hover:text-text-main'
          }`}
        >
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
          <span className="!hidden md:!inline">Code</span>
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl font-bold text-text-main mb-1">Official UI Components</h2>
        <p className="text-xs text-text-sub">
          Komponen berstandar BMDU Ecosystem yang didistribusikan langsung di dalam <code>uwebly3.min.css</code> & engine <code>uwebly.min.js</code>.
        </p>
      </div>

      {/* ========================================================
          1. Multi-Origin Scale Dropdowns
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-text-main">Multi-Directional Scale Dropdown</h3>
            </div>
            <span className="text-xs text-text-sub">Menu kontekstual yang dapat mekar (scale-in) dari 4 sudut berbeda tanpa shadow.</span>
          </div>
          {renderTabSwitcher('dropdown')}
        </div>

        {activeCodeTabs.dropdown === 'preview' ? (
          <div className="p-6">
            <div className="text-xs text-text-sub mb-4">
              Klik salah satu tombol di bawah untuk mencoba animasi ekspansi sudut:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 pb-20 justify-items-center">
              {/* Dropdown 1: Top-Left */}
              <div className="uwebly-dropdown">
                <button
                  onClick={() => setActiveDropdown(prev => (prev === 'tl' ? null : 'tl'))}
                  className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-text-main hover:bg-hover cursor-pointer"
                >
                  Scale Kiri Atas ▾
                </button>
                <div className={`uwebly-dropdown-menu origin-top-left ${activeDropdown === 'tl' ? 'show' : ''}`}>
                  <div className="uwebly-dropdown-header">Top-Left Menu</div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Profil Saya</span>
                  </button>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Pengaturan Akun</span>
                  </button>
                  <div className="uwebly-dropdown-divider"></div>
                  <button className="uwebly-dropdown-item danger" onClick={() => setActiveDropdown(null)}>
                    <span>Keluar Akun</span>
                  </button>
                </div>
              </div>

              {/* Dropdown 2: Top-Right */}
              <div className="uwebly-dropdown">
                <button
                  onClick={() => setActiveDropdown(prev => (prev === 'tr' ? null : 'tr'))}
                  className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-text-main hover:bg-hover cursor-pointer"
                >
                  Scale Kanan Atas ▾
                </button>
                <div className={`uwebly-dropdown-menu origin-top-right ${activeDropdown === 'tr' ? 'show' : ''}`}>
                  <div className="uwebly-dropdown-header">Top-Right Menu</div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Notifikasi</span>
                  </button>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Pusat Bantuan</span>
                  </button>
                  <div className="uwebly-dropdown-divider"></div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Versi v3.0</span>
                  </button>
                </div>
              </div>

              {/* Dropdown 3: Bottom-Left */}
              <div className="uwebly-dropdown">
                <button
                  onClick={() => setActiveDropdown(prev => (prev === 'bl' ? null : 'bl'))}
                  className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-text-main hover:bg-hover cursor-pointer"
                >
                  Scale Kiri Bawah ▴
                </button>
                <div className={`uwebly-dropdown-menu origin-bottom-left ${activeDropdown === 'bl' ? 'show' : ''}`}>
                  <div className="uwebly-dropdown-header">Bottom-Left Menu</div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Buka File</span>
                  </button>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Bagikan Tautan</span>
                  </button>
                  <div className="uwebly-dropdown-divider"></div>
                  <button className="uwebly-dropdown-item danger" onClick={() => setActiveDropdown(null)}>
                    <span>Hapus Item</span>
                  </button>
                </div>
              </div>

              {/* Dropdown 4: Bottom-Right */}
              <div className="uwebly-dropdown">
                <button
                  onClick={() => setActiveDropdown(prev => (prev === 'br' ? null : 'br'))}
                  className="px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-text-main hover:bg-hover cursor-pointer"
                >
                  Scale Kanan Bawah ▴
                </button>
                <div className={`uwebly-dropdown-menu origin-bottom-right ${activeDropdown === 'br' ? 'show' : ''}`}>
                  <div className="uwebly-dropdown-header">Bottom-Right Menu</div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Filter Data</span>
                  </button>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Ekspor CSV</span>
                  </button>
                  <div className="uwebly-dropdown-divider"></div>
                  <button className="uwebly-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span>Reset Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
            <button
              onClick={() =>
                copyToClipboard(
                  `<div class="uwebly-dropdown">\n  <button data-uwebly-toggle="dropdown" class="notfound-button">Menu ▾</button>\n  <div class="uwebly-dropdown-menu origin-top-left">\n    <div class="uwebly-dropdown-header">Opsi</div>\n    <button class="uwebly-dropdown-item">Profil</button>\n    <button class="uwebly-dropdown-item">Pengaturan</button>\n    <div class="uwebly-dropdown-divider"></div>\n    <button class="uwebly-dropdown-item danger">Keluar</button>\n  </div>\n</div>`,
                  'Dropdown HTML'
                )
              }
              className="absolute top-3 right-3 text-xs text-text-sub hover:text-text-main flex items-center gap-1 cursor-pointer"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
            <pre className="text-text-sub">
              {`<!-- 1. Scale Kiri Atas (Top-Left) -->
<div class="uwebly-dropdown">
  <button data-uwebly-toggle="dropdown">Opsi ▾</button>
  <div class="uwebly-dropdown-menu origin-top-left">
    <div class="uwebly-dropdown-header">Akun</div>
    <a href="#" class="uwebly-dropdown-item">Profil</a>
    <a href="#" class="uwebly-dropdown-item">Pengaturan</a>
    <div class="uwebly-dropdown-divider"></div>
    <button class="uwebly-dropdown-item danger">Keluar</button>
  </div>
</div>

<!-- Variasi class origin:
  origin-top-left     (Mekar dari sudut kiri atas)
  origin-top-right    (Mekar dari sudut kanan atas)
  origin-bottom-left  (Mekar dari sudut kiri bawah)
  origin-bottom-right (Mekar dari sudut kanan bawah)
-->`}
            </pre>
          </div>
        )}
      </div>

      {/* ========================================================
          2. Accordion / Collapse (NEW)
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-text-main">Interactive Accordion & FAQ Collapse</h3>
            </div>
            <span className="text-xs text-text-sub">Struktur tanya-jawab datar dengan animasi rotasi chevron dan transisi expand halus.</span>
          </div>
          {renderTabSwitcher('accordion')}
        </div>

        {activeCodeTabs.accordion === 'preview' ? (
          <div className="p-6 max-w-2xl">
            <div className="uwebly-accordion">
              {/* Accordion Item 1 */}
              <div className={`uwebly-accordion-item ${openAccordions.includes(0) ? 'open' : ''}`}>
                <button className="uwebly-accordion-header" onClick={() => toggleAccordionItem(0)}>
                  <span className="uwebly-accordion-title">
                    Apa filosofi desain utama BMDU Ecosystem?
                  </span>
                  <svg
                    className="uwebly-accordion-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="uwebly-accordion-collapse">
                  <div className="uwebly-accordion-body">
                    BMDU Ecosystem mengusung filosofi <strong>Flat Zero-Shadow</strong> (tanpa drop-shadow buram), border tegas 1px solid <code>var(--border)</code>, avatar squircle 40%, serta palet warna modular yang teroptimasi untuk performa ultra-ringan.
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className={`uwebly-accordion-item ${openAccordions.includes(1) ? 'open' : ''}`}>
                <button className="uwebly-accordion-header" onClick={() => toggleAccordionItem(1)}>
                  <span className="uwebly-accordion-title">
                    Bagaimana cara menggunakan Uwebly Style di proyek HTML biasa?
                  </span>
                  <svg
                    className="uwebly-accordion-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="uwebly-accordion-collapse">
                  <div className="uwebly-accordion-body">
                    Cukup sertakan tag <code>&lt;link rel="stylesheet" href=".../uwebly3.min.css"&gt;</code> di dalam tag <code>&lt;head&gt;</code> dan sertakan script engine <code>uwebly.min.js</code> untuk otomatisasi komponen interaktif seperti modal dan accordion.
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className={`uwebly-accordion-item ${openAccordions.includes(2) ? 'open' : ''}`}>
                <button className="uwebly-accordion-header" onClick={() => toggleAccordionItem(2)}>
                  <span className="uwebly-accordion-title">
                    Apakah mendukung mode gelap (Dark Mode)?
                  </span>
                  <svg
                    className="uwebly-accordion-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="uwebly-accordion-collapse">
                  <div className="uwebly-accordion-body">
                    Ya, secara bawaan seluruh token warna sudah terikat dengan atribut <code>data-theme="light|dark"</code> pada elemen root HTML. Tombol dengan <code>data-uwebly-theme="toggle"</code> dapat langsung mengubah tema tanpa baris kode tambahan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
            <button
              onClick={() =>
                copyToClipboard(
                  `<div class="uwebly-accordion">\n  <div class="uwebly-accordion-item open">\n    <button class="uwebly-accordion-header" data-uwebly-toggle="accordion">\n      <span class="uwebly-accordion-title">Judul FAQ</span>\n      <span class="uwebly-accordion-chevron">▾</span>\n    </button>\n    <div class="uwebly-accordion-collapse">\n      <div class="uwebly-accordion-body">Isi jawaban FAQ...</div>\n    </div>\n  </div>\n</div>`,
                  'Accordion HTML'
                )
              }
              className="absolute top-3 right-3 text-xs text-text-sub hover:text-text-main flex items-center gap-1 cursor-pointer"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
            <pre className="text-text-sub">
              {`<div class="uwebly-accordion">
  <!-- Item 1 (Terbuka secara default: tambahkan class 'open') -->
  <div class="uwebly-accordion-item open">
    <button class="uwebly-accordion-header" data-uwebly-toggle="accordion">
      <span class="uwebly-accordion-title">Apa itu BMDU Ecosystem?</span>
      <svg class="uwebly-accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
    <div class="uwebly-accordion-collapse">
      <div class="uwebly-accordion-body">
        BMDU Ecosystem mengusung filosofi flat zero-shadow...
      </div>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="uwebly-accordion-item">
    <button class="uwebly-accordion-header" data-uwebly-toggle="accordion">
      <span class="uwebly-accordion-title">Pertanyaan berikutnya</span>
      <svg class="uwebly-accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
    <div class="uwebly-accordion-collapse">
      <div class="uwebly-accordion-body">
        Jawaban konten...
      </div>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        )}
      </div>

      {/* ========================================================
          3. Standard Dialog Modal (NEW)
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-text-main">Standard BMDU Modal & Dialogs</h3>
            </div>
            <span className="text-xs text-text-sub">Kotak dialog modular dengan backdrop blur, animasi scale-in, dan pilihan ukuran (sm, lg, xl).</span>
          </div>
          {renderTabSwitcher('modals')}
        </div>

        {activeCodeTabs.modals === 'preview' ? (
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveModal('modalDemo')}
                className="px-4 py-2 bg-text-main text-canvas rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Buka Standard Modal Demo</span>
              </button>
              <button
                onClick={() => setActiveModal('report')}
                className="px-4 py-2 border border-border rounded-xl text-xs font-semibold hover:bg-hover cursor-pointer text-text-main"
              >
                Buka Report Modal
              </button>
            </div>
            <p className="text-xs text-text-sub">
              Didukung kontrol otomatis keyboard (tombol <code>ESC</code>) dan penutupan saat area overlay backdrop diklik.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
            <button
              onClick={() =>
                copyToClipboard(
                  `<div id="myModal" class="uwebly-modal-overlay">\n  <div class="uwebly-modal modal-md">\n    <div class="uwebly-modal-header">\n      <h3 class="uwebly-modal-title">Judul Dialog</h3>\n      <button class="uwebly-modal-close" data-uwebly-dismiss="modal">&times;</button>\n    </div>\n    <div class="uwebly-modal-body">Konten dialog...</div>\n    <div class="uwebly-modal-footer">\n      <button class="uwebly-modal-btn btn-cancel" data-uwebly-dismiss="modal">Batal</button>\n      <button class="uwebly-modal-btn btn-primary">Lanjutkan</button>\n    </div>\n  </div>\n</div>`,
                  'Modal HTML'
                )
              }
              className="absolute top-3 right-3 text-xs text-text-sub hover:text-text-main flex items-center gap-1 cursor-pointer"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
            <pre className="text-text-sub">
              {`<!-- Tombol Pemicu -->
<button data-uwebly-toggle="modal" data-uwebly-target="#myModal" class="uwebly-modal-btn btn-primary">
  Buka Modal
</button>

<!-- Komponen Modal -->
<div id="myModal" class="uwebly-modal-overlay">
  <div class="uwebly-modal modal-md">
    <div class="uwebly-modal-header">
      <h3 class="uwebly-modal-title">Konfirmasi Tindakan</h3>
      <button class="uwebly-modal-close" data-uwebly-dismiss="modal">
        &times;
      </button>
    </div>
    <div class="uwebly-modal-body">
      <p>Isi dialog konfirmasi standar BMDU...</p>
    </div>
    <div class="uwebly-modal-footer">
      <button class="uwebly-modal-btn btn-cancel" data-uwebly-dismiss="modal">Batal</button>
      <button class="uwebly-modal-btn btn-primary">Lanjutkan</button>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        )}
      </div>

      {/* ========================================================
          4. Mobile BottomSheet Drawer (NEW)
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-text-main">Mobile-First BottomSheet</h3>
            </div>
            <span className="text-xs text-text-sub">Drawer slide-up dari bawah layar ponsel dengan drag handle bar dan sudut melengkung 24px.</span>
          </div>
          {renderTabSwitcher('bottomsheet')}
        </div>

        {activeCodeTabs.bottomsheet === 'preview' ? (
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveModal('bottomsheetDemo')}
                className="px-4 py-2 bg-text-main text-canvas rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Buka Mobile BottomSheet Demo</span>
              </button>
              <button
                onClick={() => setActiveModal('drawer')}
                className="px-4 py-2 border border-border rounded-xl text-xs font-semibold hover:bg-hover cursor-pointer text-text-main"
              >
                Buka Right Slide Drawer
              </button>
            </div>
            <p className="text-xs text-text-sub">
              Sangat ideal untuk aksi cepat di mobile seperti tombol share, menu navigasi bawah, atau filter ringkas.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-canvas font-mono text-xs overflow-x-auto relative">
            <button
              onClick={() =>
                copyToClipboard(
                  `<div id="mySheet" class="uwebly-bottomsheet-overlay">\n  <div class="uwebly-bottomsheet">\n    <div class="uwebly-bottomsheet-handle"></div>\n    <div class="uwebly-bottomsheet-header">\n      <h3 class="uwebly-bottomsheet-title">Aksi Cepat</h3>\n      <button class="uwebly-bottomsheet-close" data-uwebly-dismiss="bottomsheet">&times;</button>\n    </div>\n    <div class="uwebly-bottomsheet-body">Konten menu opsi...</div>\n  </div>\n</div>`,
                  'BottomSheet HTML'
                )
              }
              className="absolute top-3 right-3 text-xs text-text-sub hover:text-text-main flex items-center gap-1 cursor-pointer"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
            <pre className="text-text-sub">
              {`<!-- Tombol Pemicu -->
<button data-uwebly-toggle="bottomsheet" data-uwebly-target="#mySheet">
  Buka BottomSheet
</button>

<!-- Komponen BottomSheet -->
<div id="mySheet" class="uwebly-bottomsheet-overlay">
  <div class="uwebly-bottomsheet">
    <!-- Drag Handle Bar -->
    <div class="uwebly-bottomsheet-handle"></div>

    <div class="uwebly-bottomsheet-header">
      <h3 class="uwebly-bottomsheet-title">Pilihan Aksi</h3>
      <button class="uwebly-bottomsheet-close" data-uwebly-dismiss="bottomsheet">
        &times;
      </button>
    </div>

    <div class="uwebly-bottomsheet-body">
      <p>Daftar aksi mobile ramah sentuhan...</p>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        )}
      </div>

      {/* ========================================================
          5. Action Buttons & Chips
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <h3 className="font-bold text-sm text-text-main">Action Buttons & Chips</h3>
            <span className="text-xs text-text-sub">Variasi tombol primer, sekunder, login, dan destruktif.</span>
          </div>
          {renderTabSwitcher('buttons')}
        </div>

        {activeCodeTabs.buttons === 'preview' ? (
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
              onClick={() =>
                copyToClipboard(
                  `<button class="ee-login-btn">Login Button</button>\n<button class="sidebar-follow-btn">Follow</button>\n<button class="report-btn-submit">Delete</button>`,
                  'Button Markup'
                )
              }
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

      {/* ========================================================
          6. Mention Search & Dropdown Preview
          ======================================================== */}
      <div className="border border-border bg-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-canvas-sub/30">
          <div>
            <h3 className="font-bold text-sm text-text-main">Search & Mention Dropdown</h3>
            <span className="text-xs text-text-sub">Input wrapper dengan icon dan daftar mention pengguna.</span>
          </div>
          {renderTabSwitcher('mentions')}
        </div>

        {activeCodeTabs.mentions === 'preview' ? (
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
                <img src="https://github.com/velora-assistant.png" alt="Velora" className="mention-avatar" />
                <div className="mention-info">
                  <div className="flex items-center gap-1">
                    <span className="mention-name">Velora</span>
                    <VerifiedBadgeIcon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="mention-usertag">@velora-assistant</span>
                </div>
              </div>
              <div className="mention-item">
                <img src="https://github.com/ahzanmc.png" alt="AhZanMC" className="mention-avatar" />
                <div className="mention-info">
                  <div className="flex items-center gap-1">
                    <span className="mention-name">AhZanMC</span>
                    <VerifiedBadgeIcon className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="mention-usertag">@ahzanmc</span>
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

      {/* ========================================================
          7. Trending Topics & Sidebar Cards
          ======================================================== */}
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
    </div>
  )
}
