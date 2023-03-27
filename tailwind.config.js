/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cgreen': '#B2F252',
        'cyellow': '#fdde83',
        'cgray': '#747E7E',
        'cwhite': '#DEEFE7',
      },
      animation: {
        'blink-fast': 'blink 1.5s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        }
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [],
}
