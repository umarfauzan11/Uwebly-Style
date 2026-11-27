# Uwebly Style Guide

Official design tokens, stylesheets, and UI architecture for the Uwebly ecosystem by Bmdu Studio.

> 🤖 **Panduan AI Assistant**: Dokumen khusus AI & LLM tersedia di [`llms.txt`](./llms.txt) atau dapat diakses via URL `https://style.uwebly.com/llms.txt`.

---

## Overview

**Uwebly Style** adalah fondasi sistem desain resmi untuk seluruh produk web Bmdu Studio (termasuk [uwebly.com](https://uwebly.com), [umessage.uwebly.com](https://umessage.uwebly.com), dan [velora.uwebly.com](https://velora.uwebly.com)). Repository ini mengelola token desain global, komponen CSS murni modular, engine interaktif vanilla JS, dan mendistribusikan stylesheet produksi yang teroptimasi via CDN.

---

## Quick Start (CDN Usage)

### 1. Production CDN (CSS + JS Companion)
Sertakan stylesheet dan script companion langsung di dalam tag `<head>`:

```html
<!-- Uwebly Style 3.0 CSS -->
<link
  rel="stylesheet"
  href="https://style.uwebly.com/uwebly3.min.css"
  integrity="sha384-BbkDiRn9IiYi67jlWkpv3YsEWZ0waKl582XgXCqfsEIrw6zT8i9cC//UIMs0xa8/"
  crossorigin="anonymous"
/>

<!-- Uwebly Companion JS Engine (Zero-dependency interaktif modal, drawer, accordion, theme) -->
<script
  type="module"
  src="https://style.uwebly.com/uwebly.min.js"
  integrity="sha384-wITgPxV4ePOzfIoUFLy7jYeeyRNOqG2CF9iroLYpo8Gt7CsWEqNTK94ZT6QQ6m0G"
  crossorigin="anonymous"
></script>
```

### 2. In-Stylesheet (@import)
```css
@import url("https://style.uwebly.com/uwebly3.min.css");
```

---

## Design Principles (Bmdu Studio Standard)

1. **Flat & Clean (Zero Shadow)**: Seluruh kedalaman visual dan pemisah konten menggunakan `1px solid var(--border)`. Dilarang menggunakan `box-shadow` buram pada kartu, modal, maupun drawer.
2. **Standard Avatar Squircle (40%)**: Avatar profil wajib menggunakan `border-radius: 40%` (`var(--radius-avatar)`), bukan lingkaran penuh (50%) atau radius sembarang.
3. **Strict Border Coloring**: Garis batas elemen selalu mengacu pada `var(--border)`, tidak pernah menggunakan `var(--accent)`.
4. **WCAG Accessibility & Contrast**: Palet warna Light dan Dark dirancang presisi untuk memastikan rasio kontras teks selalu terbaca dengan jelas.
5. **Ultra-Lightweight & Decoupled**: Bebas dari dependensi font binary eksternal, menghasilkan file CSS yang sangat ramping (~60 kB / ~11 kB gzipped).

---

## Design Tokens (CSS Variables)

### Color Palette

| Token | Light Mode | Dark Mode | Deskripsi |
|---|---|---|---|
| `--bg-color` | `#ffffff` | `#121212` | Background utama aplikasi |
| `--bg-secondary` | `#f4f4f5` | `#1e1e1e` | Background area sekunder |
| `--card-bg` | `#ffffff` | `#121212` | Background kartu dan kontainer |
| `--input-bg` | `#f4f4f5` | `#1e1e1e` | Background input form |
| `--text-color` | `#111111` | `#ffffff` | Teks judul dan konten utama |
| `--text-secondary`| `#71717a` | `#a1a1aa` | Teks sekunder, deskripsi, sublabel |
| `--text-muted` | `#a1a1aa` | `#71717a` | Teks penjelas dan timestamp |
| `--accent` | `#ff42f2` | `#ff42f2` | Aksen warna khas Uwebly |
| `--border` | `#e0e0e0` | `#333333` | Garis batas komponen & kartu |
| `--hover-bg` | `#f0f0f0` | `#2a2a2a` | State hover elemen interaktif |
| `--danger` | `#ff4757` | `#ff4757` | Aksi destruktif, badge notifikasi |
| `--danger-hover` | `#ff2222` | `#ff2222` | Hover aksi destruktif |

### Radius Scale

| Token | Nilai | Penggunaan |
|---|---|---|
| `--radius-xs` | `4px` | Tag dan lencana kecil |
| `--radius-sm` | `8px` | Tombol kecil, dropdown item, input |
| `--radius-md` | `12px` | Kartu standar, accordion, dropdown |
| `--radius-lg` | `16px` | Modal dialog container |
| `--radius-xl` | `24px` | BottomSheet top radius, drawer |
| `--radius-avatar` | `40%` | Standar Squircle Bmdu |

---

## Komponen Utama

- **Standard Modal & Dialog**: Dialog popup flat border dengan animasi *scale-in* halus (`.uwebly-modal`, `.uwebly-modal-overlay`). Pemicu otomatis via `data-uwebly-toggle="modal"`.
- **Mobile BottomSheet Drawer**: Drawer geser bawah mobile-friendly dengan drag handle (`.uwebly-bottomsheet`, `.uwebly-bottomsheet-overlay`) dan animasi *slide-up* & *slide-down*. Pemicu via `data-uwebly-toggle="bottomsheet"`.
- **Accordion / FAQ**: Collapse ekspansi halus dengan rotasi icon chevron 180° (`.uwebly-accordion`, `.uwebly-accordion-item`). Pemicu via `data-uwebly-toggle="accordion"`.
- **Multi-Directional Scale Dropdown**: Menu kontekstual yang dapat mekar dari 4 sudut berbeda (`.origin-top-left`, `.origin-top-right`, `.origin-bottom-left`, `.origin-bottom-right`). Pemicu via `data-uwebly-toggle="dropdown"`.
- **Action Buttons & Chips**: Tombol login (`.ee-login-btn`), follow interaktif (`.sidebar-follow-btn`), sekunder (`.notfound-button`), dan bahaya (`.report-btn-submit`).
- **Mention Search & Squircle**: Input pencarian pengguna dan tagar dengan preview avatar 40%.
- **Theme Auto-Toggle**: Tombol dengan `data-uwebly-theme="toggle"` untuk beralih mode terang/gelap secara instan.

---

## Struktur Proyek

```text
Uwebly-Style/
├── public/
│   ├── uwebly.min.js        # Engine pendukung interaktif vanilla JS
│   └── llms.txt             # Panduan prompt AI assistant
├── src/
│   ├── base/                # CSS reset & base layer
│   ├── tokens/              # Token desain CSS murni
│   ├── components/          # Stylesheet komponen CSS modular
│   │   ├── modal.css        # Dialog modal standar
│   │   ├── bottomsheet.css  # Drawer mobile slide-up & slide-down
│   │   ├── accordion.css    # Accordion FAQ & collapse
│   │   ├── dropdown.css     # Menu dropdown 4-corner scale
│   │   └── ...              # Komponen lainnya
│   ├── data/                # Data token JS
│   ├── icons/               # Kumpulan SVG icon modular
│   ├── layout/              # Navbar, Hero (Installation Deck), Footer, Modals
│   ├── sections/            # 4 Section portal showcase
│   ├── App.jsx              # State controller utama portal
│   ├── main.jsx             # Entry point React
│   └── index.css            # Stylesheet utama
├── llms.txt                 # Standar panduan AI di root repository
└── README.md                # Dokumentasi utama proyek
```

---

## Development & Build

```bash
# Menjalankan Dev Server
npm run dev

# Linting
npm run lint

# Membangun Bundle Produksi
npm run build
```

---

## License & Credits

© 2026 **Bmdu Studio**. All rights reserved.  
Created and maintained by [Umar Fauzan Irvan](https://github.com/umarfauzan11).
