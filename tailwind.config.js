/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
