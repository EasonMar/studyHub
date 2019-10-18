const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./configs/webpack.dev.js') // 开发环境webpack配置
const prodConfig = require('./configs/webpack.prod.js') // 线上环境webpack配置

/**
 * options: 环境参数
 * webpackCustom: 个性化webpack配置
 */ 
module.exports = function start(options, webpackCustom = {}) {
  const { env } = options
  if (env === 'development') webpack(merge({}, devConfig, webpackCustom)).run()
  else webpack(merge({}, prodConfig, webpackCustom)).run()
}
