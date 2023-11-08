import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        reporter: ['json-summary', 'html'],
        provider: 'v8'
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'coverage/*', 'cypress/*', 'node_modules/*', 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
