import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
    base: 'https://dev.timmatane.ca/etudiants/2023/maurerc/portfolio/', // ← ça force les chemins relatifs
})
