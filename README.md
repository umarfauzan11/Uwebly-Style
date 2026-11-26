# Uwebly Style Guide

Official design tokens, stylesheets, and UI architecture for the Uwebly ecosystem by Bmdu Studio.

---

## Overview

**Uwebly Style** adalah fondasi sistem desain resmi untuk seluruh produk web Bmdu Studio (termasuk [uwebly.com](https://uwebly.com), [umessage.uwebly.com](https://umessage.uwebly.com), dan [velora.uwebly.com](https://velora.uwebly.com)). Repository ini mengelola token desain global, komponen CSS murni yang modular, dan mendistribusikan stylesheet produksi yang teroptimasi via CDN.

---

## Quick Start (CDN Usage)

Untuk mengintegrasikan Uwebly Style ke aplikasi web atau landing page eksternal, sertakan stylesheet resmi langsung di dalam tag `<head>`:

```html
<!-- Uwebly Style CDN -->
<link rel="stylesheet" href="https://style.uwebly.com/uwebly3.min.css" />
```

---

## Design Principles (Bmdu Studio Standard)

1. **Flat & Clean (Zero Shadow)**: Seluruh kedalaman visual dan pemisah konten menggunakan `1px solid var(--border)`. Tidak menggunakan `box-shadow` pada kartu, modal, maupun drawer.
2. **Standard Avatar Squircle (40%)**: Avatar profil wajib menggunakan `border-radius: 40%` (`var(--radius-avatar)`), bukan lingkaran penuh (50%) atau radius sembarang.
3. **Strict Border Coloring**: Garis batas elemen selalu mengacu pada `var(--border)`, tidak pernah menggunakan `var(--accent)`.
4. **WCAG Accessibility & Contrast**: Palet warna Light dan Dark dirancang presisi untuk memastikan rasio kontras teks selalu terbaca dengan jelas.
5. **Ultra-Lightweight & Decoupled**: Bebas dari dependensi font binary eksternal, menghasilkan file CSS yang sangat ramping (~16 kB gzipped ~4 kB).

---

## Design Tokens (CSS Variables)

### Color Palette

| Token | Light Mode | Dark Mode | Deskripsi |
|---|---|---|---|
| `--bg-color` | `#ffffff` | `#121212` | Background utama aplikasi |
| `--bg-secondary` | `#f4f4f5` | `#1e1e1e` | Background area sekunder |
| `--card-bg` | `#ffffff` | `#121212` | Background kartu dan kontainer |
| `--text-color` | `#111111` | `#ffffff` | Teks judul dan konten utama |
| `--text-secondary`| `#71717a` | `#a1a1aa` | Teks sekunder, deskripsi, sublabel |
| `--text-muted` | `#a1a1aa` | `#71717a` | Teks penjelas dan timestamp |
| `--accent` | `#ff42f2` | `#ff42f2` | Aksen warna khas Uwebly |
| `--border` | `#e0e0e0` | `#333333` | Garis batas komponen & kartu |
| `--hover-bg` | `#f0f0f0` | `#2a2a2a` | State hover elemen interaktif |
| `--danger` | `#ff4757` | `#ff4757` | Aksi destruktif, badge notifikasi |
| `--danger-hover` | `#ff2222` | `#ff2222` | Hover aksi destruktif |

### Radius Tokens

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-avatar: 40%; /* Standar squircle Bmdu */
--radius-full: 9999px;
```

### Layout & Z-Index Tokens

```css
--desktop-nav-width: 220px;
--z-base: 1;
--z-nav: 1000;
--z-dropdown: 1050;
--z-modal: 1100;
--z-toast: 1200;
```

---

## Dark Mode Implementation

Tema dikontrol melalui atribut `data-theme` pada tag `<html>` atau `<body>`:

```html
<!-- Light Theme (Default) -->
<html data-theme="light">

<!-- Dark Theme -->
<html data-theme="dark">
```

Mengubah tema via JavaScript:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## Modular Component Structure

```bash
src/
├── base/
│   └── base.css             # CSS reset, typography, seleksi teks
├── tokens/
│   └── tokens.css           # Variabel token warna, radius, dan z-index
├── components/
│   ├── avatar-animations.css# Animasi flip dan modal share avatar
│   ├── camera-modal.css     # Komponen UI modal kamera
│   ├── layout.css           # Container dua kolom & grid layout
│   ├── mention.css          # Dropdown mention (@user)
│   ├── message-drawer.css   # Laci pesan slide-in
│   ├── navigation.css       # Top navbar dan navigasi sidebar
│   ├── report-modal.css     # Modal laporkan konten/pengguna
│   ├── sidebar.css          # Kartu sidebar, hashtag trends, following
│   ├── skeleton.css         # Shimmer placeholder loading
│   └── utilities.css        # Utility fade-in, responsive notfound
├── index.css                # Titik masuk penggabungan seluruh stylesheet
└── main.jsx                 # Showcase interactive visual playground
```

---

## Development & Build

### Requirements

- Node.js >= 20
- npm >= 10

### Menjalankan Playground Showcase

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` untuk melihat showcase interaktif seluruh komponen dan token warna.

### Membangun Stylesheet Produksi

```bash
npm run build
```

Perintah build akan:
1. Memproses dan meminifikasi CSS ke `dist/uwebly.min.css`.
2. Menyelaraskan secara otomatis ke `dist/uwebly3.min.css` dan `dist/uwebly2.min.css` untuk kompatibilitas CDN.

---

## License & Credits

© 2026 **Bmdu Studio**. All rights reserved.  
Created and maintained by [Umar Fauzan Irvan](https://github.com/umarfauzan11).
