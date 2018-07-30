const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");


module.exports = merge(baseConfig, {
    output: {
        filename: "[name].min.js"
    },
    devtool: "cheap-module-source-map",
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    }
});