import { defineConfig } from 'vitest/config'

const enableTestContainer = false
const env: Record<string, string> = { PORT: '9000' }

if (enableTestContainer) {
  env.DEBUG = 'testcontainers'
}

export default defineConfig({
  test: {
    env,
    threads: false,
    watch: false,
    restoreMocks: true,
    include: ['**/*.test.ts'],
    coverage: {
      enabled: true,
      clean: true,
      cleanOnRerun: true,
      provider: 'v8',
      include: ['**/src/**'],
      exclude: ['**/**/*.d.ts'],
      reportsDirectory: './coverage',
      reportOnFailure: true
    }
  }
})
