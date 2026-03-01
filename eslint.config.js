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
    ignores: ['.next', 'dist', 'out', 'coverage', 'public', '.agents', 'playwright-report', 'test-results', 'drizzle', '_migration-temp'],
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
        // GSAP animation selectors and custom component classes — not Tailwind utilities
        ignoredKeys: ['compoundVariants', 'defaultVariants', 'variants'],
        whitelist: [
          'hero\\-text\\-anim',
          'dashboard\\-mockup',
          'floating\\-card',
          'footer\\-anim',
          'feature\\-row',
          'feature\\-text',
          'feature\\-image',
          'no\\-scrollbar',
          'engine\\-block',
          'glass',
          'animate\\-in',
          'fade\\-in',
          'zoom\\-in\\-95',
          'slide\\-in\\-from\\-bottom\\-2',
          'slide\\-in\\-from\\-bottom\\-4',
          'text\\-primary\\-foreground',
          'marquee\\-header',
          'faq\\-header',
          'faq\\-item',
          'faq\\-question',
          'faq\\-answer',
          'interactive\\-title',
          'category\\-btn',
          'feature\\-card',
          'philosophy\\-card',
          'pricing\\-text',
          'pricing\\-card',
          'circle\\-outer',
          'circle\\-middle',
          'circle\\-inner',
          'grid\\-dot',
          'scanner\\-line',
          'waveform\\-path',
          'pulse\\-glow',
          'protocol\\-card',
          'text\\-content',
          'visual\\-content',
          'parallax\\-line',
        ],
      },
    },
  },
)
