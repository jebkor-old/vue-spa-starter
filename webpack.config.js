const webpack = require('webpack');
const path = require('path');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const loaders = require('./loaders'); // Seperate file with all of the loaders

module.exports = {
  entry: {
    main: ['./src/ts/index.ts']
  },
  module: {
    rules: [
      loaders.FileLoader,
      loaders.CssLoader,
      loaders.JSLoader,
      loaders.TSLoader,
      loaders.VueLoader
    ]
  },
  resolve: {
    extensions: ['.html', '.scss', '.css', '.js', '.vue', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      Vue$: 'vue/dist/vue.esm.js',
      '@root': path.resolve('./src'),
      '@declarations': path.resolve('./src/ts/declarations'),
      '@models': path.resolve('./src/ts/model'),
      '@services': path.resolve('./src/ts/services'),
      '@types': path.resolve('./src/ts/types'),
      '@utilities': path.resolve('./src/ts/utilities'),
      '@vendor': path.resolve('./src/ts/vendor'),
      '@vue': path.resolve('./src/ts/vue')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new ForkTsCheckerPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        }
      }
    }
  }
};
