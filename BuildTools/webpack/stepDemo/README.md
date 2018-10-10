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
6. 整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 __dirname这个全局变量。可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期工作
7. 类似这样的结构会非常有用：以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起。这种配置方式会使你的代码更具备可移植性，因为现有的统一放置的方式会造成所有资源紧密耦合在一起。假如你想在另一个项目中使用 /my-component，只需将其复制或移动到 /components 目录下。只要你已经安装了任何扩展依赖(external dependencies)，并且你已经在配置中定义过相同的 loader，那么项目应该能够良好运行
```
- |- /assets
+ |– /components
+ |  |– /my-component
+ |  |  |– index.jsx
+ |  |  |– index.css
+ |  |  |– icon.svg
+ |  |  |– img.png
```
