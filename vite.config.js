import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from '@esbuild-plugins/node-globals-polyfill'
const nodeGlobalsPolyfill = pkg.default

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodeGlobalsPolyfill(),
  ],
  resolve: {
    alias: {
    }
  },
  define: {
    'global': 'window',
    'process.env': process.env, 
    // Define aquí otros globals si es necesario, pero ten cuidado de no sobredefinir
  }
})
