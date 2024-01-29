import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
}
export default config
