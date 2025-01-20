import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      base: '/dog-directory/', // Add this line
      build: {
        outDir: 'dist'
      }
    })
