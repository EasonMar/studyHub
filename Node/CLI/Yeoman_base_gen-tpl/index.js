const Generator = require('yeoman-generator') // 基于 yeoman-generator, 创建自己的 generator
const fs = require('fs')
const path = require('path')

/**
 * yeoman-generator API:
 * - prompt
 * - answer
 * - fs.copyTpl
 * - fs.copy
 * - templatePath
 * - destinationPath
 * - spawnCommandSync
 * - log
 */ 
module.exports = class extends Generator {
  /**
   * 钩子函数：prompting、writing、install、end
   */ 
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'appName',
        message: '项目名称：',
        validate(input) {
          if (!input) return '请输入项目名称'
          if (fs.readdirSync('.').includes(input)) {
            return '目录已存在'
          }
          return true
        },
      },
      {
        type: 'list',
        choices: ['Javascript', 'TypeScript'],
        name: 'language',
        message: '项目语言',
        default: 'TypeScript',
      },
    ]).then(answers => {
      this.answers = answers
    })
  }

  writing() {
    const { language, appName } = this.answers
    // copyTpl 会使用模板引擎，替换 <%= appName %> --- 把 模板插件包中的_package.json 替换关键字 并发布到 项目文件夹内
    this.fs.copyTpl(this.templatePath(language, '_package.json'), this.destinationPath(appName, 'package.json'), this.answers)

    // copy 支持文件/文件夹 --- 把 对应模板下的文件 拷贝到 项目文件夹内
    fs.readdirSync(this.templatePath(language))
      .filter(name => !name.startsWith('_'))
      .forEach(item => {
        this.fs.copy(this.templatePath(language, item), this.destinationPath(appName, item))
      })
  }

  install() {
    const projectDir = path.join(process.cwd(), this.answers.appName) // 项目目录
    // spawn(command[, args][, options])
    // options.cwd <string> Current working directory of the child process.    
    this.spawnCommandSync('npm', ['config', 'set', 'sass_binary_site=https://npm.taobao.org/mirrors/node-sass/'], {cwd: projectDir}) // 设置npm
    this.spawnCommandSync('npm', ['install', '--registry=https://registry.npm.taobao.org'], {cwd: projectDir}) // npm i - 安装依赖
  }

  end() {
    this.log('happy coding!')
  }
}
