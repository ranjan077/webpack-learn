const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
    vendor: path.resolve(__dirname, './src/vendor.js'),
  },
  output: {
    filename: '[name].[hash].bundle.js',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new ServiceWorkerWebpackPlugin({ entry: path.join(__dirname, 'src/sw.js') }), new MiniCssExtractPlugin({ filename: '[name].[hash].css' }), new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],
};
