/**
 * 安装 generator 
 * cmic自有generaotr的前缀约定为"cmic-"
 */

const execSync = require('child_process').execSync // 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。

module.exports = function (generator) {
    generator = generator || process.argv[3] || 'cmic-tpl'
    generator = generator.match(/^cmic-/) ? generator : `cmic-${generator}` // 约定带 cmic- 前缀, 防止与其他库重名
    const status = this.getInstalledStatus(generator, this.dir.tpl)
    if (status === 2) {
        this.console(`您已经安装最新的 "${generator}" 包，无需再进行安装`)
        return
    }
    this.console(`正在安装最新的 "${generator}" 包...`, 'green')
    try {
        execSync(`npm i ${generator}@latest --registry=https://registry.npm.taobao.org`, { cwd: this.dir.tpl })
        this.console(`升级完成`, 'green')
    } catch (e) {
        this.console(`安装失败，请检查包名称 "${generator}" 是否正确`, 'red')
    }
}
