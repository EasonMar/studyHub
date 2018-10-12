# 总览
1. 这部分代码是follow [webpack指南](https://webpack.docschina.org/guides/) 中的demo

# 说明

## 安装
1. webpack版本为 `4.20.2`
2. 使用 webpack v4+ 版本，你还需要安装 CLI

## 起步
1. Node 8.2/npm 5.2.0 以上版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack）：
```
npx webpack
```
2. 在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 配置文件。这比在终端(terminal)中手动输入大量命令要高效的多,现在，让我们通过新配置文件再次执行构建：
```
npx webpack --config webpack.config.js  // 指定配置文件
```
- 注意，当在 Windows 中通过调用路径去调用 webpack 时，必须使用反斜线()。例如 node_modules\.bin\webpack --config webpack.config.js --- Windows坑爹的地方！

3. 通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：
```
npm run build -- --colors   // 不知道具体效果是怎样的
```
4. 整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 __dirname这个全局变量。可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期工作

## 管理资源
1. 类似下面的项目结构会非常有用：以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起。这种配置方式会使你的代码更具备可移植性，因为现有的统一放置的方式会造成所有资源紧密耦合在一起。假如你想在另一个项目中使用 /my-component，只需将其复制或移动到 /components 目录下。只要你已经安装了任何扩展依赖(external dependencies)，并且你已经在配置中定义过相同的 loader，那么项目应该能够良好运行
```
- |- /assets
+ |– /components
+ |  |– /my-component
+ |  |  |– index.jsx
+ |  |  |– index.css
+ |  |  |– icon.svg
+ |  |  |– img.png
```

## 管理输出
1. 如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 `HtmlWebpackPlugin` 来解决这个问题。
2. 通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。`clean-webpack-plugin` 是一个比较普及的管理插件
3. Manifest，这个是必须掌握的一个东西！[参考链接](https://webpack.docschina.org/concepts/manifest)

## 开发(开发工具)
1. 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。为了更容易地追踪错误和警告，JavaScript 提供了 `source map` 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，`source map` 就会明确的告诉你(在开发环境使用)
2. `webpack-dev-server` 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
3. `webpack-dev-middleware` 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。对指南中的例子有疑问：为什么有`webpack --watch`的效果？

## 模块热替换(Hot Module Replacement 或 HMR)
1. 模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。
2. HMR 不适用于生产环境，这意味着它应当只在开发环境使用。启用此功能实际上相当简单。而我们要做的，就是更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件。
3. 的确输出了例子中所描述的log，但是并么有展示出printMe新的输出逻辑？这是什么情况？ --- 后面有说到这个`问题`
4. 模块热替换可能比较难掌握。为了说明这一点，我们回到刚才的示例中。如果你继续点击示例页面上的按钮，你会发现控制台仍在打印这旧的 printMe 功能。这是因为按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。为了让它与 HRM 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上
5. 借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签
6. 社区还有许多其他 loader 和示例，可以使 HMR 与各种框架和库(library)平滑地进行交互……