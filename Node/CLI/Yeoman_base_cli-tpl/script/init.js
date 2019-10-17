/**
 * 通过 generator 生成模板
 * 模板仓库前缀 gen-
 */

const install = require('./install')

module.exports = async function() {
  const genObj = this.getInstalledGenerators(this.dir.tpl)
  if (!Object.keys(genObj).length) {
    this.console(`您还没有安装任何 generator，请先执行 install 命令安装`)
    return
  }
  const { tpl: pkgName } = await this.inquirer.prompt({ message: '请选择一个模板：', type: 'list', name: 'tpl', choices: Object.keys(genObj) })
  const status = this.getInstalledStatus(pkgName, this.dir.tpl)
  if (status !== 2) {
    const { needUpdate } = await this.inquirer.prompt({ message: '有最新模板是否更新：', type: 'list', name: 'needUpdate', choices: ['是', '否'] })
    if (needUpdate === '是') await install.call(this, pkgName)
  }

  // yeoman API
  this.yoemanEnv.register(this.resolveFrom(this.dir.tpl, pkgName), pkgName)
  this.yoemanEnv.run(pkgName, (e, d) => {
    this.console(`run-e for ${e}`) // 这个应该是是error
    this.console(`run-d for ${d}`) // undefined, 并无第二参数
    e && this.console(JSON.stringify(e), 'red')
  })
}

/**
 * 其玩法跟yeoman类似，得先安装生成器(generator), 才能初始化项目
 * 而 vue-cli\create-react-app 没有 生成器 这一部分, 命令行直接就能初始化项目
 * 或者说 此项目的脚手架 比CLI 命令 高了一个层次
 * 
 * 其模板也是通过 npm i 来安装的
 * 从其安装模板的操作配置来看, 是先把模板放到了 npm 仓库上
 */ 