#!/usr/bin/env node

/**
 * 命令行参数的配置
 */
// var argv = require('yargs')
//   .demand(['n']) // 需要此参数
//   .default({n: 'tom'}) // 参数默认值
//   .describe({n: 'your name'}) // 帮组文档里的说明
//   .argv;

// options 方法允许将所有这些配置写进一个对象。
var argv = require('yargs')
    .option('n', {
        alias: 'name',
        demand: true,
        default: 'tom',
        describe: 'your name',
        type: 'string'
    })
    .option('a', {
        alias: 'age',
        demand: true,
        default: 18,
        describe: 'your age',
        type: 'number'
    })
    .option('b', {
        boolean: true
    })
    .usage('Usage: yargsConf [options]')
    .example('yargsConf -n tom', 'say yargsConf to Tom')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015')
    .argv;

console.log(`your name = ${argv.n}, age = ${argv.a}`);