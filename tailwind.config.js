module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        card: {
          50: '#e7e8ff',
          100: '#bab9f9',
          200: '#8d8af2',
          300: '#605ced',
          400: '#352ee8',
          500: '#1f16ce',
          600: '#1711a1',
          700: '#100c73',
          800: '#080646',
          900: '#03011a',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
