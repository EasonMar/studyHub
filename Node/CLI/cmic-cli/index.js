const program = require('commander'), // 解析输入的命令
    resolveFrom = require('resolve-from').silent, // Returns undefined instead of throwing when the module can't be found.
    fs = require('fs'),
    chalk = require('chalk'),
    figlet = require('figlet'),
    inquirer = require('inquirer'),
    yoemanEnv = require('yeoman-environment').createEnv(),
    mkdirp = require('mkdirp'), // 跨平台 - Like mkdir -p, but in node.js!
    path = require('path'),
    execSync = require('child_process').execSync, // 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。
    homeDir = require('osenv').home(), // 跨平台 - os env: Look up environment settings specific to different operating systems.
    pkg = require('./package.json'),
    cmdDirName = 'script', // 把命令单独封装为文件，放到 script 文件夹中
    tplDir = path.resolve(homeDir, '.cmic-tpl'); // 模板插件包将要安装的目录

class CMIC_CLI {
    // 初始化
    constructor() {
        this.bindTools()
        this.checkTplDir()
        // 检查 CLI 版本、提示更新 --- 并不主动安装更新
        this.checkCliUpdate() // 发布到npm之后才有效
        this.bindCommand()
    }

    // 工具绑定
    bindTools() {
        this.dir = {
            home: homeDir,
            tpl: tplDir, // {homeDir}/.cmic-tpl/
        }
        this.resolveFrom = resolveFrom // 供 init.js 消费
        this.yoemanEnv = yoemanEnv // 供 init.js 消费
        this.inquirer = inquirer // 供 init.js 消费
    }

    // 处理相应命令
    bindCommand() {
        const cmdfn = (arg) => {
            const cmd = require(path.resolve(__dirname, cmdDirName, arg))
            cmd.call(this)
        }
        // 顶层命令options
        if(/-h|--help/.test(process.argv.slice(-1))){
            // 如果是 help 帮助信息, 则打印 Logo
            program.outputHelp(() => { // 此方法未返回 commander 实例
                return chalk.yellow.bold(figlet.textSync('CMIC  CLI')) + '\n'
            });
        }
        program
            .version(chalk.green.bold(pkg.version), '-V, --version', 'cli版本号')
            .helpOption('-h, --help', '帮助信息')
        program
            .command('init')
            .description('初始化项目: 选择具体模板, 生成项目初始结构')
            .action(() => {cmdfn('init')})
            .on('--help', () => {
                this.console('Examples:');
                this.console('  cmic-cli init');
                this.console('  提示：运行后需要选择配置项, 请根据需要进行选择', 'green')
            });
        program
            .command('build')
            .description('构建项目: 构建项目, 生成可部署的前端静态资源')
            .action(() => {cmdfn('build')})
            .on('--help', () => {
                this.console('Examples:');
                this.console('  cmic-cli build');
                this.console('  注意：需要在项目目录内运行此命令', 'green')
            });
        program
            .command('dev')
            .description('本地运行项目: 启动本地服务, 以供调试代码')
            .action(() => {cmdfn('dev')})
            .on('--help', () => {
                this.console('Examples:');
                this.console('  cmic-cli dev');
                this.console('  注意：需要在项目目录内运行此命令', 'green')
            });
        program
            .command('install <pkgName>')
            .description('安装模板: 项目的初始化依赖相应的模板')
            .action(() => {cmdfn('install')})
            .on('--help', () => {
                this.console('Examples:');
                this.console('  cmic-cli install cmic-vue-tpl');
                this.console('  cmic-cli install vue-tpl');
                this.console('  注意：pkgName[模板名] 前缀为"cmic-", 若缺省会自动进行补全', 'green')
            });
    
        program.parse(process.argv)
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
    console(data, color = 'white', bold) {
        let fn = chalk[color]
        bold && (fn = chalk[color].bold)
        console.log(fn(data))
    }

    /**
     * 获取某个包的安装情况
     * 返回 0 表示未安装 1 表示安装并非最新 2 表示安装最新
     */
    getInstalledStatus(pkgName, targetDir) {
        const genObj = this.getInstalledPkgs(targetDir);
        if (!genObj[pkgName]) return 0;

        const lts = execSync(`npm view ${pkgName} version --registry=https://registry.npm.taobao.org`) + '' // buffer 转 string
        const current = require(path.join(targetDir, pkgName, "package.json")).version;
        
        if (current === lts.trim()) return 2;
        return 1;
    }

    // 获取路径下已经安装的 generator 包
    getInstalledGenerators(targetDir) {
        const dependencies = this.getInstalledPkgs(targetDir);
        Object.keys(dependencies).forEach(v => {
            if (!v.match(/^gen-/)) delete dependencies[v];
        });
        return dependencies;
    }

    /**
     * 获取路径下已经安装的包
     * - 读取 package.json 中的 dependencies
     */
    getInstalledPkgs(targetDir) {
        const pkgJsonFile = path.resolve(targetDir, "package.json");
        if (!fs.existsSync(pkgJsonFile)) return {};
        const pkgJson = require(pkgJsonFile);
        return pkgJson.dependencies || {};
    }

    // 获取 build 方法
    getBuilderFn() {
        const { builder } = this.getConfigs();
        const status = this.getInstalledStatus(builder, process.cwd());
        switch (status) {
            case 0:
                this.console(
                    `检测到工程并未添加${builder}，将自动为您安装最新版`,
                    "red"
                );
                this.console(`安装${builder}中...`);
                execSync(
                    `npm i ${builder}@latest -S --registry=https://registry.npm.taobao.org`,
                    { cwd: process.cwd() }
                );
                break;
            case 1:
                this.console(
                    `检测到您的${builder}并非最新版，推荐在工程下 npm i ${builder}@latest -S 进行更新`
                );
                break;
            default:
        }
        return require(path.join(process.cwd(), builder));
    }

    // 获取构建配置文件
    getConfigs() {
        const configs = require(path.join(process.cwd(), "./cmic-webpack.js"));
        if (!configs || !configs.builder) {
            this.console(
                "请确保工程根路径下有 cmic-webpack.js 文件，且文件中配置了 builder 属性",
                "red"
            );
            process.exit(1);
        }
        return configs;
    }
}

module.exports = new CMIC_CLI()
