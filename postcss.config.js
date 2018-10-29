module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};