const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.config');

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],
});
