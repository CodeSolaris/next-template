import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import antfu from '@antfu/eslint-config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import storybook from 'eslint-plugin-storybook'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,
    ignores: ['.next', 'dist', 'out', 'coverage', 'public', '.agents', 'playwright-report', 'test-results', 'drizzle'],
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,

  // --- Storybook Rules ---
  ...storybook.configs['flat/recommended'],

  // --- Tailwind CSS Rules ---
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/app/styles/globals.css`,
      },
    },
  },
)
