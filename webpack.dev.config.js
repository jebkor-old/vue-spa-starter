const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const HardSourcePlugin = require('hard-source-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    pathinfo: false
  },
  devtool: 'source-map',
  plugins: [new HardSourcePlugin()],
  optimization: {
    nodeEnv: "development",
    minimize: false
  }
});
