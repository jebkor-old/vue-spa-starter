const webpack = require('webpack');
const path = require('path');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: [
    "./src/scss/all.scss",
    './src/ts/index.ts'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'style-loader!css-loader!sass-loader',
            js: 'babel-loader',
            ts: "ts-loader",
            css: 'style-loader!css-loader'
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          MiniExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "sass-loader"
        ],
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.scss', '.css', '.js', '.vue', '.ts', ".json"],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      Vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniExtractPlugin({
      filename: "styles/[name].css"
    })
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
