/**
 * 通过 generator 生成模板
 * 模板仓库前缀 cmic-
 */

const install = require('./install')

module.exports = async function () {
    const genObj = this.getInstalledGenerators(this.dir.tpl)
    if (!Object.keys(genObj).length) {
        this.console(`【warn】未检测到模板generator, 请先执行以下命令安装generator:`, 'red')
        this.console(`        cmic-cli install <generator>`, 'green')
        this.console(`        Available generator: cmic-tpl`, 'yellow')
        return
    }
    // 对象解构赋值的一种写法：let { foo: baz } = { foo: 'aaa', bar: 'bbb' }; baz // "aaa" 
    const { tpl: generator } = await this.inquirer.prompt({ message: '请选择一个模板：', type: 'list', name: 'tpl', choices: Object.keys(genObj) })
    const status = this.getInstalledStatus(generator, this.dir.tpl)
    if (status !== 2) {
        // 对象解构赋值的常见写法
        const { needUpdate } = await this.inquirer.prompt({ message: '有最新模板是否更新：', type: 'list', name: 'needUpdate', choices: ['是', '否'] })
        if (needUpdate === '是') await install.call(this, generator)
    }

    // 通过 yeoman 开启 generator cmic-tpl 中的模板生成：this.dir.tpl ==> {homeDir}/.cmic-generator/{generator}
    this.yeomanEnv.register(this.resolveFrom(this.dir.tpl, generator), generator) // 注册 generator
    this.yeomanEnv.run(generator, (e) => { // 执行 generator, 猜测 e for error
        e && this.console('something went wrong', 'red')
    })
}