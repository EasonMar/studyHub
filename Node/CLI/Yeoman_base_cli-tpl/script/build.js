/**
 * 调用 webpack 构建插件
 */

module.exports = async function() {
  const buildFn = this.getBuilderFn() // 获取构建插件包
  const { webpackCustom = {} } = this.getConfigs() // 获取个性化webpack配置
  this.console('开始build')
  buildFn({ env: 'production' }, webpackCustom)
}
