import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FymmanCreativo/', // 👈 esta línea es CLAVE para GitHub Pages
  plugins: [react()],
})
