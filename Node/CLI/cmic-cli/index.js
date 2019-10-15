// const requireFrom = require('import-from').silent // 类似 require，但支持指定目录，让你可以跨工程目录进行 require，比如全局包想引用工程路径下的内容
// const resolveFrom = require('resolve-from').silent // Returns undefined instead of throwing when the module can't be found.
const program = require('commander'), // 解析输入的命令
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
    tplDir = path.resolve(homeDir, '.cmic-tlp'); // 模板插件包将要安装的目录

class CMIC_CLI {
    // 初始化
    constructor() {
        this.bindTools()
        this.checkTplDir()

        // 读取script文件夹下的js脚本
        // const cmdArr = fs.readdirSync(path.resolve(__dirname, cmdDirName)).map(item => item.split('.')[0])

        // 如果没有传入参数, 则提示(最好是转到 -h, 这里没有写 -h)
        // if (args._.length < 3) {
        //     this.console(`请输入要执行的命令\n本来应该列一个help文档的\n但是作者太懒\nanyway\n请使用以下命令`, 'red')
        //     this.console(`dcli + ${JSON.stringify(cmdArr)}`, 'green')
        //     return
        // }

        // 判断输入的命令是否存在
        // if (!cmdArr.includes(process.argv[2])) throw new Error(`没有该命令 ${process.argv[2]}，请使用以下命令 ${JSON.stringify(cmdArr)}`)

        // 找到对应命令的js脚本
        // const cmd = require(path.resolve(__dirname, cmdDirName, process.argv[2]))

        // 检查 CLI 版本、提示更新 --- 并不主动安装更新
        // this.checkCliUpdate()

        // 执行js脚本
        // cmd.call(this) // script 里的命令函数可读取 this 实例
        this.bindCommand()
    }

    // 工具绑定
    bindTools() {
        // this.resolveFrom = resolveFrom
        // this.requireFrom = requireFrom
        this.dir = {
            home: homeDir,
            tpl: tplDir, // {homeDir}/.cmic-cli/
        }
        this.yoemanEnv = yoemanEnv // 供 init.js 消费
        this.inquirer = inquirer // 供 init.js 消费
        
        /**
         * 处理命令行 - 展示帮助信息
         */
        program
            .option('-i, --init', '初始化项目')
            .option('-b, --build', '构建项目')
            .version(`CMIC-CLI version V${pkg.version}`, '-V, --version', '版本号')
            .helpOption('-h, --help', '帮助信息')
            .on('--help', ()=>{
                this.logo("CMIC  CLI")
            })
    }

    bindCommand() {
        const cmdfn = () => {
            const cmd = require(path.resolve(__dirname, cmdDirName, 'init'))
            cmd.call(this)
        }
        program.parse(process.argv)

        // 命令处理
        program.init && cmdfn()
        program.build && cmdfn()        
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
    console(data, color = 'yellow', bold) {
        let fn = chalk[color]
        bold && (fn = chalk[color].bold)
        console.log(fn(data))
    }

    // 打印大Logo
    logo(data, color = 'yellow') {
        const _data = figlet.textSync(data);
        this.console(_data, color, true)
    }

    /**
     * 获取某个包的安装情况
     * 返回 0 表示未安装 1 表示安装并非最新 2 表示安装最新
     */
    getInstalledStatus(pkgName, targetDir) {
        const genObj = this.getInstalledPkgs(targetDir);
        if (!genObj[pkgName]) return 0;
        const lts = execSync(`npm view ${pkgName} version --json --registry=https://registry.npm.taobao.org`) + '' // buffer 转 string

        // const current = this.requireFrom(targetDir, path.join(pkgName, "package.json")).version;
        const current = require(path.join(targetDir, pkgName, "package.json")).version;
        
        // lts版本号, 坑爹的带了双引号, 要去掉...
        if (current === lts.trim().replace(/"/g, '')) return 2;
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
        // return this.requireFrom(process.cwd(), builder);
        return require(path.join(process.cwd(), builder));
    }

    // 获取构建配置文件
    getConfigs() {
        // const configs = this.requireFrom(process.cwd(), "./maoda.js");
        const configs = require(path.join(process.cwd(), "./cmic-webpack.js"));
        if (!configs || !configs.builder) {
            this.console(
                // "请确保工程根路径下有 maoda.js 文件，且文件中配置了 builder 属性",
                "请确保工程根路径下有 cmic-webpack.js 文件，且文件中配置了 builder 属性",
                "red"
            );
            process.exit(1);
        }
        return configs;
    }
}

module.exports = new CMIC_CLI()
