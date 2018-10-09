# 总览
1. 这部分代码是follow [webpack指南](https://webpack.docschina.org/guides/) 中的demo

# 说明
1. webpack版本为 `4.20.2`
2. 使用 webpack v4+ 版本，你还需要安装 CLI
3. Node 8.2/npm 5.2.0 以上版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack）：
```
npx webpack
```
4. 在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 配置文件。这比在终端(terminal)中手动输入大量命令要高效的多,现在，让我们通过新配置文件再次执行构建：
```
npx webpack --config webpack.config.js  // 指定配置文件
```
- 注意，当在 Windows 中通过调用路径去调用 webpack 时，必须使用反斜线()。例如 node_modules\.bin\webpack --config webpack.config.js --- Windows坑爹的地方！

5. 通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：
```
npm run build -- --colors
```
6. 