const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base.conf');
const webpackConfig = merge(baseWebpack, {
  devtool: 'inline-source-map',
  mode: 'production'
})
module.exports = webpackConfig