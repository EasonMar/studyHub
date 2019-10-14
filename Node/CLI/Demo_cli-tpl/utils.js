const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync; // 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。

class Utils {
  /**
   * 获取某个包的安装情况
   * 返回 0 表示未安装 1 表示安装并非最新 2 表示安装最新
   */
  getInstalledStatus(pkgName, targetDir) {
    const genObj = this.getInstalledPkgs(targetDir);
    if (!genObj[pkgName]) return 0;
    const lts = execSync(`npm view ${pkgName} version --json --registry=https://registry.npm.taobao.org`) + '' // buffer 转 string

    // 为什么可以在这里访问 requireFrom , Utils类里没有这货, 它的子类 M 才有啊？
    // 虽然并没有单独使用 Utils 这个类（它仅作为一个工具库, 被 M 继承这些方法）, 但是这种写法, 感觉好奇怪
    const current = this.requireFrom(targetDir, path.join(pkgName, "package.json")).version;
    if (current === lts.trim()) return 2;
    return 1;
  }

  /**
   * 获取路径下已经安装的 generator 包
   */
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

  /**
   * 获取 build 方法
   */
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
    return this.requireFrom(process.cwd(), builder);
  }

  getConfigs() {
    const configs = this.requireFrom(process.cwd(), "./maoda.js");
    if (!configs || !configs.builder) {
      this.console(
        "请确保工程根路径下有 maoda.js 文件，且文件中配置了 builder 属性",
        "red"
      );
      process.exit(1);
    }
    return configs;
  }
}

module.exports = Utils;
