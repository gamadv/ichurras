import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        iChurras_bg: 'linear-gradient(0deg, #FFD836 85%, rgba(255, 216, 54, 0.00) 100%)'
      },
      boxShadow: {
        iChurras_cardShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
export default config
