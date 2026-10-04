import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the built site works from any folder on Hostinger.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
