// 检查node和npm的版本

'use strict'
const chalk = require('chalk') // Terminal string styling
const semver = require('semver') // 语义化版本 for npm (参考资料：https://semver.org/lang/zh-CN/)
const packageConfig = require('../package.json')
const shell = require('shelljs') // Portable Unix shell commands for Node.js

function exec (cmd) {
  // child_process 模块提供了衍生子进程的功能
  return require('child_process').execSync(cmd).toString().trim()
}

// 支持版本的信息
const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

// shell.which：Searches for command in the system's PATH
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    // 如果不符合版本，则发送警告
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1) // process.exit()方法以结束状态码code指示Node.js同步终止进程
  }
}
