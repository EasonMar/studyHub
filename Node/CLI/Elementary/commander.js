#!/usr/bin/env node
const chalk = require('chalk');
const program = require('commander');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza'); // <type> required参数, 使用时必须传参数, 否则程序会报错. 尖括号内的参数是required的

// must be before .parse() since node's emit() is immediate
program.on('--help', function () {
  console.log('  自定义的例子:')
  console.log('')
  console.log('    输出命令  wcj -d')
  console.log('    输出命令  wcj -l python')
  console.log('')
})

program.parse(process.argv);

console.log(chalk.greenBright(JSON.stringify(program.opts())));

// chalk: Compose multiple styles using the chainable API
console.log(chalk.yellow.bgRed.bold('pizza details:'));

if (program.small) console.log(chalk.underline.bgBlue('- small pizza size'));

// chalk: Nest styles - 中横杠写法要转换为驼峰 pizza-type ===>>> pizzaType
if (program.pizzaType) console.log(chalk.red('-', chalk.underline.bgYellow(`${program.pizzaType}`)));