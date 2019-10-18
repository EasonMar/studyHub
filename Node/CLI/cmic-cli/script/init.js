/**
 * 通过 generator 生成模板
 * 模板仓库前缀 cmic-
 */

const install = require('./install')

module.exports = async function () {
    const genObj = this.getInstalledGenerators(this.dir.tpl)
    if (!Object.keys(genObj).length) {
        this.console(`【warn】未检测到template, 请先执行以下命令进行安装:`, 'red')
        this.console(`        cmic-cli install <pkgName>`, 'green')
        return
    }
    // 对象解构赋值的一种写法：let { foo: baz } = { foo: 'aaa', bar: 'bbb' }; baz // "aaa" 
    const { tpl: pkgName } = await this.inquirer.prompt({ message: '请选择一个模板：', type: 'list', name: 'tpl', choices: Object.keys(genObj) })
    const status = this.getInstalledStatus(pkgName, this.dir.tpl)
    if (status !== 2) {
        // 对象解构赋值的常见写法
        const { needUpdate } = await this.inquirer.prompt({ message: '有最新模板是否更新：', type: 'list', name: 'needUpdate', choices: ['是', '否'] })
        if (needUpdate === '是') await install.call(this, pkgName)
    }

    // 通过 yeoman 开启 cmic-tpl 中的模板构建：this.dir.tpl ==> {homeDir}/.cmic-generator/{pkgName}
    this.yeomanEnv.register(this.resolveFrom(this.dir.tpl, pkgName), pkgName) // 注册 generator
    this.yeomanEnv.run(pkgName, (e) => { // 执行 generator, 猜测 e for error
        e && this.console('something went wrong', 'red')
    })
}