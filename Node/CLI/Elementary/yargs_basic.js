#!/usr/bin/env node
var argv = require('yargs').argv;
var aliasArgv = require('yargs').alias('n', 'name').argv;
require('shelljs/global'); // shelljs的全局模式, 允许直接在脚本中写 shell 命令, 不需要通过exec来执行了

echo('hello ', argv.name);
echo(`yargs.argv ===>>> ${JSON.stringify(argv)}`); // yargs 可以把参数改为一个对象，每个参数项就是一个键值对
echo(`yargs.alias ===>>> ${JSON.stringify(aliasArgv)}`); // 使用 alias 方法，指定 name 是 n 的别名
echo(`yargs params without '-' ===>>> ${JSON.stringify(argv._)}`); // argv 对象有一个下划线（_）属性，可以获取非连词线开头的参数。

// // 检查控制台是否以运行`git `开头的命令
// if (!which('git')) { // shell.which: 在环境变量PATH中寻找指定命令的地址，判断该命令是否可执行，返回该命令的绝对地址。
//     echo('Sorry, this script requires git'); // 在控制台输出内容
//     exit(1); // 以退出码为code退出当前进程
// }

// mkdir('-p', 'out/Release'); // 强制递归删除`out/Release目录`
// cp('-R', 'stuff/*', 'out/Release'); // 将`stuff/`中所有内容拷贝至`out/Release`目录

// cd('lib'); // 进入`lib`目录

// ls('*.js').forEach(function (file) {
//     /* 这是一个难点: sed流编辑器, 建议专题学习, -i表示直接作用源文件 */
//     sed('-i', 'v0.1.2', 'v0.1.2', file); // 将build_version字段替换为'v0.1.2'
//     sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file); // 将包含`REMOVE_THIS_LINE`字符串的行删除
//     sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file); // 将包含`REPLACE_LINE_WITH_MACRO`字符串的行替换为`macro.js`中的内容
// });

// cd('..'); // 返回上一级目录

// 同步运行外部工具
// if (exec('git commit -am "Auto-commit"').code !== 0) {
//     echo('Error: Git commit failed');
//     exit(1); // 以退出码为code退出当前进程
// }