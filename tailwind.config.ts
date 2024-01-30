import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      maxWidth: {
        'search-input': '436px',
      },
      borderColor: {
        'border-color': colors.orange[700],
      },
      backgroundImage: {
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
}
export default config
