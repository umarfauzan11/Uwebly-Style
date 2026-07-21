import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './src/index.css',  // Entry point CSS
      output: {
        entryFileNames: 'uwebly.min.css',  // ⭐ Custom filename!
        assetFileNames: 'uwebly.min.css'
      }
    }
  }
})
