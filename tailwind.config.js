module.exports = {
  purge: {
    enabled: true, // purge will be done when compiling (set to false at 1st until finishing dev phase)
    content: ['dist/**/*.html'] // will scan this path files to see which classes have been used
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
