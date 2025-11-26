import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages usually serves at /repo-name/
  // If you deploy to username.github.io, use '/'
  // If you deploy to username.github.io/repo, use './' or '/repo/'
  base: './', 
})