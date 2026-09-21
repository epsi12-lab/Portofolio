import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le site est servi sous /Portofolio/ par GitHub Pages (pas de domaine personnalisé).
export default defineConfig({
  base: '/Portofolio/',
  plugins: [react()],
  build: { target: 'es2022' },
})
