import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import paths from 'vite-tsconfig-paths'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    paths({
      loose: true,
    }),
    Unocss({}),
    react()
  ]
})
