const minimist = require('minimist') // 解析用户命令，将 process.argv 解析成对象
const fs = require('fs')
const chalk = require('chalk')
const requireFrom = require('import-from').silent // 类似 require，但支持指定目录，让你可以跨工程目录进行 require，比如全局包想引用工程路径下的内容
const resolveFrom = require('resolve-from').silent // Returns undefined instead of throwing when the module can't be found.
const homeDir = require('osenv').home() // 跨平台 - os env: Look up environment settings specific to different operating systems.
const mkdirp = require('mkdirp') // 跨平台 - Like mkdir -p, but in node.js!
const path = require('path')
const inquirer = require('inquirer') // A collection of common interactive command line user interfaces.
const yoemanEnv = require('yeoman-environment').createEnv()
const pkg = require('./package.json')
const execSync = require('child_process').execSync // 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。
const args = minimist(process.argv)
const cmdDirName = 'script' // 把命令单独封装为文件，放到 script 文件夹中
const tplDir = path.resolve(homeDir, '.maoda') // 模板所在目录
const Utils = require('./utils')

class M extends Utils { // 继承Utils

  // 初始化
  constructor(args) {
    super()
    this.args = args
    this.bindTools()
    this.checkTplDir()

    // 读取script文件夹下的js脚本
    const cmdArr = fs.readdirSync(path.resolve(__dirname, cmdDirName)).map(item => item.split('.')[0])
    
    // 判断输入的命令是否存在
    if (!cmdArr.includes(process.argv[2])) throw new Error(`没有该命令 ${process.argv[2]}，请使用以下命令 JSON.stringify(cmdArr)`)
    
    // 找到对应命令的js脚本
    const cmd = require(path.resolve(__dirname, cmdDirName, process.argv[2]))
    
    // 检查 CLI 版本、提示更新
    this.checkCliUpdate()
    
    // 执行js脚本
    cmd.call(this) // script 里的命令函数可读取 this 实例
  }

  // 工具绑定
  bindTools() {
    this.chalk = chalk
    this.resolveFrom = resolveFrom // 真正调用，在其父类的方法内，好奇怪的写法
    this.requireFrom = requireFrom // 真正调用，在其父类的方法内，好奇怪的写法
    this.dir = {
      home: homeDir,
      tpl: tplDir, // {homeDir}/.maoda
      cwd: process.cwd(), // 当前脚本目录 - 没用上
    }
    this.yoemanEnv = yoemanEnv
    this.inquirer = inquirer
  }

  // 检查 CLI 版本、提示更新
  checkCliUpdate() {
    const pkgName = pkg.name
    const version = pkg.version
    const ltsVersion = execSync(`npm view ${pkgName} version --registry=https://registry.npm.taobao.org`) + '' // 返回 buffer 转 string
    if (ltsVersion.trim() !== version) this.console(`cli 版本过旧，建议执行 npm i -g ${pkgName}@latest 升级 cli： ${version} -> ${ltsVersion} `)
  }

  // 检查 模板插件包 目录
  checkTplDir() {
    mkdirp(this.dir.tpl) // 不管当前有无此目录, 先 mkdir -p, 为后续写入 pkgFile作预备工作
    const pkgFile = path.resolve(this.dir.tpl, 'package.json')
    if (!fs.existsSync(pkgFile)) {
      fs.writeFileSync(pkgFile, JSON.stringify({ name: '_', description: '_', repository: '_', license: 'MIT' }))
    }
  }

  // 封装 chalk 和 console.log --- 自己之前没想到, 封装思维很重要, OOP思维很重要
  console(data, color = 'yellow') {
    const fn = chalk[color] || chalk.yellow
    console.log(fn(data))
  }
}

module.exports = new M(args)
