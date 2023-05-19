/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-landscape': {
          raw: '(max-height: 390px) and (orientation: landscape)'
        },
        'tabled-landscape': {
          raw: '(max-height: 820px) and (orientation: landscape)'
        }
      },
      spacing: {
        '160vh': '160vh',
        '115vh': '115vh'
      }
    }
  },
  variants: {},
  plugins: []
}
