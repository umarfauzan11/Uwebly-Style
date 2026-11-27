// ==========================================
// src/data/tokensData.js
// Token data definitions for Uwebly-Style
// ==========================================

export const COLOR_GROUPS = [
  {
    category: 'Canvas & Surfaces',
    tokens: [
      { name: 'Background Canvas', varName: '--bg-color', light: '#ffffff', dark: '#121212', desc: 'Background utama aplikasi' },
      { name: 'Secondary Canvas', varName: '--bg-secondary', light: '#f4f4f5', dark: '#1e1e1e', desc: 'Background kontainer sekunder' },
      { name: 'Card Background', varName: '--card-bg', light: '#ffffff', dark: '#121212', desc: 'Latar kartu dan panel' },
      { name: 'Input Background', varName: '--input-bg', light: '#f4f4f5', dark: '#1e1e1e', desc: 'Input field dan textarea' },
      { name: 'Hover State', varName: '--hover-bg', light: '#f0f0f0', dark: '#2a2a2a', desc: 'State hover tombol & item' },
    ]
  },
  {
    category: 'Text & Hierarchy',
    tokens: [
      { name: 'Text Primary', varName: '--text-color', light: '#111111', dark: '#ffffff', desc: 'Heading dan teks utama' },
      { name: 'Text Secondary', varName: '--text-secondary', light: '#71717a', dark: '#a1a1aa', desc: 'Subjudul dan deskripsi' },
      { name: 'Text Muted', varName: '--text-muted', light: '#a1a1aa', dark: '#71717a', desc: 'Placeholder dan caption' },
    ]
  },
  {
    category: 'Brand, Border & Status',
    tokens: [
      { name: 'Uwebly Accent', varName: '--accent', light: '#ff42f2', dark: '#ff42f2', desc: 'Warna identitas khas Uwebly' },
      { name: 'Standard Border', varName: '--border', light: '#e0e0e0', dark: '#333333', desc: 'Flat border batas komponen' },
      { name: 'Danger / Destructive', varName: '--danger', light: '#ff4757', dark: '#ff4757', desc: 'Aksi hapus dan lencana peringatan' },
      { name: 'Danger Hover', varName: '--danger-hover', light: '#ff2222', dark: '#ff2222', desc: 'State hover aksi destruktif' },
    ]
  },
  {
    category: 'Skeletons & Shimmer',
    tokens: [
      { name: 'Skeleton Base', varName: '--skeleton-bg', light: '#e0e0e0', dark: '#2a2a2a', desc: 'Dasar loading placeholder' },
      { name: 'Skeleton Shimmer', varName: '--skeleton-shimmer', light: '#f0f0f0', dark: '#3a3a3a', desc: 'Animasi kilau placeholder' },
    ]
  }
]

export const RADII_TOKENS = [
  { name: 'Radius XS', varName: '--radius-xs', value: '4px', desc: 'Tag dan lencana kecil' },
  { name: 'Radius SM', varName: '--radius-sm', value: '8px', desc: 'Tombol kecil dan input' },
  { name: 'Radius MD', varName: '--radius-md', value: '12px', desc: 'Kartu standar & dropdown' },
  { name: 'Radius LG', varName: '--radius-lg', value: '16px', desc: 'Modal container & banner' },
  { name: 'Radius XL', varName: '--radius-xl', value: '24px', desc: 'Camera modal & drawer' },
  { name: 'Radius Avatar', varName: '--radius-avatar', value: '40%', desc: 'Standar Squircle Bmdu' },
  { name: 'Radius Full', varName: '--radius-full', value: '50%', desc: 'Pills dan circular button' },
]

export const TYPE_SCALES = [
  { level: 'Display Hero', size: '36px / 44px', weight: '700 Bold', text: 'Simplicity and Speed Redefined', usage: 'Halaman hero landing & showcase' },
  { level: 'Title H1', size: '28px / 36px', weight: '700 Bold', text: 'Modern Design for Clean Web', usage: 'Header section artikel & dashboard' },
  { level: 'Title H2', size: '20px / 28px', weight: '600 SemiBold', text: 'Realtime Messaging Experience', usage: 'Judul kartu dan modal header' },
  { level: 'Body Standard', size: '15px / 24px', weight: '400 Regular', text: 'Clean typography optimized for high readability across OLED and LCD displays.', usage: 'Konten paragraf berita & pesan teks' },
  { level: 'Caption Muted', size: '12px / 18px', weight: '500 Medium', text: '26 November 2026 • Verified Bmdu Ecosystem Standard', usage: 'Timestamp, lencana status, sublabel' },
]
