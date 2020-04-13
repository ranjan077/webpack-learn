const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.config');

module.exports = merge(webpackCommon, {
  mode: 'development',
});
