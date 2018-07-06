const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    output: {
        filename: "[name].js",
        pathinfo: false
    },
    devtool: "source-map"
});