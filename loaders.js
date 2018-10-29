const MiniExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      'es2015',
      'transform-es2015-shorthand-properties',
      'es2016',
      'env'
    ]
  }
};

const TSLoader = {
  test: /\.ts$/,
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    happyPackMode: true,
    appendTsSuffixTo: [/\.vue$/]
  }
};

const VueLoader = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss:
        'style-loader!MiniExtractPlugin.loader!css-loader?minimize=true!postcss-loader!sass-loader',
      js: 'babel-loader',
      ts: 'ts-loader',
      css: 'style-loader!css-loader'
    }
  }
};

const CssLoader = {
  test: /\.(css|scss)$/,
  use: [
    'style-loader',
    MiniExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    },
    'sass-loader'
  ]
};

const FileLoader = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
};

module.exports = {
  JSLoader: JSLoader,
  TSLoader: TSLoader,
  VueLoader: VueLoader,
  CssLoader: CssLoader,
  FileLoader: FileLoader
};