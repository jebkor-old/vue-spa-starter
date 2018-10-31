const path = require('path');
const _VueLoaderPlugin = require('vue-loader/lib/plugin');
const _MiniExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

const MiniExtractPlugin = new _MiniExtractPlugin('styles/[name].css');
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/scss'),
  files: '**/*.scss',
  failOnError: false,
  quiet: false
});
const VueLoaderPlugin = new _VueLoaderPlugin();



module.exports = {
  MiniExtractPlugin: MiniExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  VueLoaderPlugin: VueLoaderPlugin
};
