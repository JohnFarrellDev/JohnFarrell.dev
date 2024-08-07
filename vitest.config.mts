import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx', '**/*.test.ts'],
    globals: true,
    setupFiles: ['./vitestSetup.ts'],
  },
})
