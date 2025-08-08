import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Perfuapp/', // 👈 nombre exacto del repo en GitHub
})

// Este archivo configura Vite para un proyecto React, especificando el uso del plugin de React y estableciendo la base para el despliegue en GitHub Pages.