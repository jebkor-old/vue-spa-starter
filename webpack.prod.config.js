const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const minifyOpts = {

};

const pluginOpts = {
  comments
};

module.exports = merge(baseConfig, {
    output: {
        filename: "[name].min.js"
    },
    devtool: "cheap-module-source-map",
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ]
});