module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {},
    'postcss-discard-duplicates': {},
    'postcss-import': { root: 'assets/css/' },
    'postcss-discard-comments': { removeAllButFirst: false },
    'postcss-custom-media': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: "last 3 versions, ie >= 11",
      features: {
        'nesting-rules': false
      }
    },
    'postcss-short': {},
    'postcss-calc': {},
    'postcss-nested': {}
  }
}