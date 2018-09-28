module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    "precss": {},
    "autoprefixer": {},
    "cssnano": {}
  }
});