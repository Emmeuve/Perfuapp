import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Perfuapp/', // 👈 nombre exacto del repo en GitHub
})
// vite.config.ts
// Configuración de Vite para el proyecto Perfuapp
// Importa defineConfig de Vite y el plugin de React
