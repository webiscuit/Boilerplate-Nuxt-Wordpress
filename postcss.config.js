module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-discard-duplicates': {},
    'postcss-discard-comments': { removeAllButFirst: false },
    'postcss-custom-media': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: "last 2 versions",
      features: {
        'nesting-rules': false
      }
    },
    'postcss-short': {},
    'postcss-calc': {},
    'postcss-nested': {}
  }
}