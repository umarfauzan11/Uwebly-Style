import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function copyLegacyCssPlugin() {
  return {
    name: 'copy-legacy-css',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const mainCss = path.join(distDir, 'uwebly.min.css')
      if (fs.existsSync(mainCss)) {
        // Sematkan banner lisensi resmi Bmdu di baris pertama
        const banner = '/*! Uwebly Style v3.0.1 | (c) 2026 Bmdu Studio | https://style.uwebly.com */\n'
        const content = fs.readFileSync(mainCss, 'utf8')
        if (!content.startsWith('/*! Uwebly Style')) {
          fs.writeFileSync(mainCss, banner + content)
        }

        // Sinkronisasi file legacy CDN
        fs.copyFileSync(mainCss, path.join(distDir, 'uwebly3.min.css'))
        fs.copyFileSync(mainCss, path.join(distDir, 'uwebly2.min.css'))
        console.log('[build] Synchronized uwebly.min.css -> uwebly3.min.css & uwebly2.min.css (with license banner)')
      }

      // Sinkronisasi JS bundle jika ada
      const mainJs = path.join(distDir, 'uwebly.min.js')
      if (fs.existsSync(mainJs)) {
        fs.copyFileSync(mainJs, path.join(distDir, 'uwebly3.min.js'))
        console.log('[build] Synchronized uwebly.min.js -> uwebly3.min.js')
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyLegacyCssPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 1121,
    host: true, // Buka akses IP lokal LAN (untuk tes via HP/tablet)
    cors: true  // Izinkan cross-origin antar localhost ports
  },
  preview: {
    port: 4173,
    host: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    target: 'es2022',
    assetsDir: 'assets',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          if (name.endsWith('.css')) {
            return 'uwebly.min.css'
          }
          return 'assets/[name][extname]'
        }
      }
    },
    sourcemap: false
  }
})
