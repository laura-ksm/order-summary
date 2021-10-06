module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'container-background': "url('./pattern-background-desktop.svg')",
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
    },
  },
  plugins: [],
}
