import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/IAProjectWebsite/',
  server: {
    port: 5174,
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
})
