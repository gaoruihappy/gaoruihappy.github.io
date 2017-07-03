var common = require('./config.common')
const fs = require('fs')
const path = require('path')
module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  webpackConfig.devtool = 'source-map'

  return webpackConfig
}