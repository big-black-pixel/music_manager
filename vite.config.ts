import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
  ],

  // 1. Подмена для твоего исходного кода и финальной prod-сборки
  define: {
    __DEV__: JSON.stringify(command === 'serve'),
  },

  // 2. Подмена внутри предбампленных зависимостей (здесь живёт mobx)
  optimizeDeps: {
    esbuildOptions: {
      define: {
        __DEV__: command === 'serve' ? 'true' : 'false',
      },
    },
  },
}))