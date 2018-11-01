const path = require('path');
const _VueLoaderPlugin = require('vue-loader/lib/plugin');
const _MiniExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HardSourcePlugin = require('hard-source-webpack-plugin');
const _VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const _PrerenderSpaPlugin = require('prerender-spa-plugin');


const HardSourcePlugin = new _HardSourcePlugin();
const VueLoaderPlugin = new _VueLoaderPlugin();
const MiniExtractPlugin = new _MiniExtractPlugin('[name].css');
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/scss'),
  files: '**/*.scss',
  failOnError: false,
  quiet: false
});
const VuetifyLoaderPlugin = new _VuetifyLoaderPlugin();
const PrerenderSpaPlugin = new _PrerenderSpaPlugin({
  // Required - The path to the webpack-outputted app to prerender.
  staticDir: path.join(__dirname, '../'),
  indexPath: path.join(__dirname, '../', 'index.template.html'),
  // Required - Routes to render.
  routes: ['/'],
  outputDir: path.join(__dirname, '../'),
  postProcessHtml: function (context) {
    var titles = {
      '/': 'My home page',
      '/about': 'My awesome about page'
    }
    return context.html.replace(
      /<title>[^<]*<\/title>/i,
      '<title>' + titles[context.route] + '</title>'
    )
  }
});


module.exports = {
  MiniExtractPlugin: MiniExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  VueLoaderPlugin: VueLoaderPlugin,
  HardSourcePlugin: HardSourcePlugin,
  VuetifyLoaderPlugin: VuetifyLoaderPlugin
};