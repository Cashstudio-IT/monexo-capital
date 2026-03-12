import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"TASA Orbiter"', 'sans-serif'],
        sans: ['var(--font-tasa-orbiter)', 'sans-serif'],
      },
    },
  },
}

export default config
