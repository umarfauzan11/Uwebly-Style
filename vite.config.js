import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
        fs.copyFileSync(mainCss, path.join(distDir, 'uwebly3.min.css'))
        fs.copyFileSync(mainCss, path.join(distDir, 'uwebly2.min.css'))
        console.log('[build] Synchronized uwebly.min.css -> uwebly3.min.css & uwebly2.min.css')
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyLegacyCssPlugin()],
  build: {
    outDir: 'dist',
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
    sourcemap: false,
  }
})
