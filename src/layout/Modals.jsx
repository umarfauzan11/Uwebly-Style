import { useState } from 'react'
import { CloseIcon } from '../icons'

export function Modals({ activeModal, setActiveModal, copyToClipboard }) {
  const [isClosing, setIsClosing] = useState(false)

  if (!activeModal) return null

  const handleClose = (callback) => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      setActiveModal(null)
      if (typeof callback === 'function') callback()
    }, 220)
  }

  return (
    <>
      {/* Standard BMDU Modal Demo */}
      {activeModal === 'modalDemo' && (
        <div
          className={`uwebly-modal-overlay active ${isClosing ? 'closing' : ''}`}
          onClick={() => handleClose()}
        >
          <div className="uwebly-modal" onClick={e => e.stopPropagation()}>
            <div className="uwebly-modal-header">
              <h3 className="uwebly-modal-title">Standard BMDU Dialog</h3>
              <button className="uwebly-modal-close" onClick={() => handleClose()}>
                <CloseIcon />
              </button>
            </div>
            <div className="uwebly-modal-body space-y-2">
              <p className="font-semibold text-text-main">Konfirmasi Tindakan Penting</p>
              <p className="text-xs text-text-sub">
                Komponen modal flat border zero-shadow dengan animasi scale-in & scale-out halus. Mendukung ukuran <code>modal-sm</code>, <code>modal-lg</code>, dan <code>modal-xl</code>.
              </p>
              <div className="p-3 border border-border rounded-xl bg-canvas-sub/40 text-xs text-text-sub">
                💡 Tip: Kamu bisa menutup modal ini dengan menekan tombol <strong>ESC</strong> atau mengklik area backdrop luar.
              </div>
            </div>
            <div className="uwebly-modal-footer">
              <button className="uwebly-modal-btn btn-cancel" onClick={() => handleClose()}>
                Batal
              </button>
              <button
                className="uwebly-modal-btn btn-primary"
                onClick={() => {
                  handleClose(() => copyToClipboard('Confirmed', 'Action'))
                }}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile BottomSheet Demo */}
      {activeModal === 'bottomsheetDemo' && (
        <div
          className={`uwebly-bottomsheet-overlay active ${isClosing ? 'closing' : ''}`}
          onClick={() => handleClose()}
        >
          <div className="uwebly-bottomsheet" onClick={e => e.stopPropagation()}>
            <div className="uwebly-bottomsheet-handle"></div>
            <div className="uwebly-bottomsheet-header">
              <h3 className="uwebly-bottomsheet-title">Mobile BottomSheet Drawer</h3>
              <button className="uwebly-bottomsheet-close" onClick={() => handleClose()}>
                <CloseIcon />
              </button>
            </div>
            <div className="uwebly-bottomsheet-body space-y-3">
              <p className="text-xs text-text-sub">
                BottomSheet ramah sentuhan (touch-friendly) untuk perangkat mobile dan responsive tablet/desktop dengan animasi naik (*slide-up*) dan turun (*slide-down*) yang mulus.
              </p>
              <div className="border border-border rounded-xl p-3 bg-canvas-sub/40 space-y-2">
                <span className="font-semibold text-xs text-text-main">Pilihan Tindakan Cepat:</span>
                <div className="flex flex-col gap-1 text-xs">
                  <button
                    onClick={() => {
                      handleClose(() => copyToClipboard('Bagikan Tautan', 'Aksi'))
                    }}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-hover text-text-main flex items-center justify-between cursor-pointer"
                  >
                    <span>Bagikan ke Sosial Media</span>
                    <span className="text-[11px] text-accent font-mono">Share</span>
                  </button>
                  <button
                    onClick={() => {
                      handleClose(() => copyToClipboard('Salin URL Halaman', 'Aksi'))
                    }}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-hover text-text-main flex items-center justify-between cursor-pointer"
                  >
                    <span>Salin URL Halaman</span>
                    <span className="text-[11px] text-accent font-mono">Copy</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="uwebly-bottomsheet-footer">
              <button className="uwebly-modal-btn btn-cancel" onClick={() => handleClose()}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legacy Report Modal */}
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
              <button
                className="report-btn-submit"
                onClick={() => {
                  setActiveModal(null)
                  copyToClipboard('Report submitted', 'Status')
                }}
              >
                Kirim Laporan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Modal */}
      {activeModal === 'drawer' && (
        <div
          className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-xs flex justify-end"
          onClick={() => setActiveModal(null)}
        >
          <div className="message-drawer" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-sm text-text-main">Message Drawer Preview</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg hover:bg-hover cursor-pointer text-text-main"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="p-6 text-xs text-text-sub space-y-3">
              <p>
                Ini adalah tampilan drawer geser kanan (slide-in) yang menggunakan flat border kiri{' '}
                <code>1px solid var(--border)</code> tanpa shadow sama sekali.
              </p>
              <p>Mendukung responsivitas penuh di desktop (500px) maupun layar ponsel (100% full width).</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
