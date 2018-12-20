# webpack4

## 基础
- 参考链接：[webpack4之基础篇](https://juejin.im/post/5ab79fa75188255582525400)

## 进阶

### 插件机制
- 英文原版教程：[Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)，是最正确的选择。
    - 一个webpack插件包含：
        - 一个命名的JavaScript函数
        - 在原型中定义了 `apply` 方法
        - 指定要插入的事件钩子([event hook](https://webpack.js.org/api/compiler-hooks/))
        - 操纵WebPACK内部实例特定数据
        - 在功能完成后调用WebPACK提供回调
        ```js
        // A JavaScript class.
        class MyExampleWebpackPlugin {
            // Define `apply` as its prototype method which is supplied with compiler as its argument
            apply(compiler) {
                // Specify the event hook to attach to
                compiler.hooks.emit.tapAsync(
                    'MyExampleWebpackPlugin',
                    (compilation, callback) => {
                        console.log('This is an example plugin!');
                        console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);

                        // Manipulate the build using the plugin API provided by webpack
                        compilation.addModule(/* ... */);

                        callback();
                    }
                );
            }
        }
        ```
    - Compiler and Compilation：在开发插件时，最重要的两个资源是 `Compiler` 和 `Compilation` 对象。理解它们的作用是扩展webpack引擎的重要第一步
        ```js
        class HelloCompilationPlugin {
            apply(compiler) {
                // Tap into compilation hook which gives compilation as argument to the callback function
                compiler.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
                    // Now we can tap into various hooks available through compilation
                    compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                        console.log('Assets are being optimized.');
                    });
                });
            }
        }
        module.exports = HelloCompilationPlugin;
        ```
- [探寻 webpack 插件机制](https://juejin.im/post/5ad704d86fb9a028c8136494)，但是文章里介绍的方法已经过时，仅作为参考
    - 一般来说，webpack 插件有以下特点：
        1. 独立的 JS 模块，暴露相应的函数
        2. 函数原型上的 apply 方法会注入 compiler 对象
        3. compiler 对象上挂载了相应的 webpack 事件钩子
        4. 事件钩子的回调函数里能拿到编译后的 compilation 对象，如果是异步钩子还能拿到相应的 callback     
        结合代码来看看：
        ```js
        // ============== ES5 ==============
        function MyPlugin(options) {}

        // 2.函数原型上的 apply 方法会注入 compiler 对象
        MyPlugin.prototype.apply = function(compiler) {

            // 3.compiler 对象上挂载了相应的 webpack 事件钩子 
            // 4.事件钩子的回调函数里能拿到编译后的 compilation 对象
            
            // 旧写法
            // compiler.plugin('emit', (compilation, callback) => {
            //    ...
            // })

            // 新写法
            // compiler.hooks.someHook.tap(pluginName, (compilation, callback) => {
            compiler.hooks.emet.tap(pluginName, (compilation, callback) => {
                ...
            })
        }
        // ============== ES6 ==============
        class MyPlugin{
            constructor(options){
                this.options = options
            }

            apply(compiler){
                
                // 旧写法
                // compiler.plugin('emit', (compilation, callback) => {
                //    ...
                // })

                // 新写法
                compiler.hooks.emit.tap(pluginName, (compilation, callback) => {
                    ...
                })
            }
        }
        // 1.独立的 JS 模块，暴露相应的函数
        module.exports = MyPlugin
        ```
    - 探索线索
        1. 疑问一：函数的原型上为什么要定义 apply 方法？阅读 [源码](https://github.com/webpack/webpack/blob/10282ea20648b465caec6448849f24fc34e1ba3e/lib/webpack.js#L35) 后发现源码中是通过 plugin.apply() 调用插件的：
            ```js
            const webpack = (options, callback) => {
                // ...
                // 获取配置中的plugins，通过 plugin.apply 调用插件，注入 compiler
                for (const plugin of options.plugins) {
                    plugin.apply(compiler);
                }
                // ...
            }
            ```
        2. 疑问二：compiler 对象是什么？compiler 即 webpack 的编辑器对象，在调用 webpack 时，会自动初始化 compiler 对象，[源码](https://github.com/webpack/webpack/blob/10282ea20648b465caec6448849f24fc34e1ba3e/lib/webpack.js#L30) 如下：
            ```js
            // webpack/lib/webpack.js
            const Compiler = require("./Compiler")
            const webpack = (options, callback) => {
                // ...
                options = new WebpackOptionsDefaulter().process(options) // 初始化 webpack 各配置参数
                let compiler = new Compiler(options.context)             // 初始化 compiler 对象，这里 options.context 为 process.cwd()
                compiler.options = options                               // 往 compiler 添加初始化参数
                new NodeEnvironmentPlugin().apply(compiler)              // 往 compiler 添加 Node 环境相关方法
                for (const plugin of options.plugins) {
                    plugin.apply(compiler);
                }
                // ...
            }
            ```
            compiler 对象中包含了所有 webpack 可配置的内容，开发插件时，我们可以从 compiler 对象中拿到所有和 webpack 主环境相关的内容
        3. 疑问三：事件钩子的回调函数里拿到的 compilation 对象又是什么？[compilation](https://webpack.js.org/api/compilation-hooks/) 对象代表了一次单一的版本构建和生成资源。当运行 webpack 时，每当检测到一个文件变化，一次新的编译将被创建，从而生成一组新的编译资源。一个编译对象表示了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息     
            结合 [源码](https://github.com/webpack/webpack/blob/e7c8fa414b718ac98d94a96e2553faceabfbc92f/lib/webpack.js#L58) 来理解下上面这段话，首先 webpack 在每次执行时会调用 compiler.run()，接着追踪 onCompiled 函数传入的 compilation 参数，可以发现 compilation 来自构造函数 Compilation：
            ```js
            // webpack/lib/Compiler.js
            const Compilation = require("./Compilation");
            newCompilation(params) {
                const compilation = new Compilation(this);
                // ...
                return compilation;
            }
            ```
        4. 疑问四：compiler 对象上的事件钩子是怎样的？事件钩子其实就是类似 MVVM 框架的生命周期函数，在特定阶段能做特殊的逻辑处理。了解一些常见的事件钩子是写 webpack 插件的前置条件，下面列举些常见的事件钩子以及作用：
            | 钩子 | 作用 | 参数 | 类型 |
            | --- | --- | --- | --- |
            | after-plugins | 设置完一组初始化插件之后 | compiler | sync |
            | after-resolvers | 设置完 resolvers 之后 | compiler | sync |
            | run | 在读取记录之前 | compiler | async |
            | compile | 在创建新 compilation 之前 | compilationParams | sync |
            | compilation | compilation 创建完成 | compilation | sync |
            | emit | 在生成资源并输出到目录之前 | compilation | async |
            | after-emit | 在生成资源并输出到目录之后 | compilation | async |
            | done | 完成编译 | stats | sync |
            完整地请参阅 [官方文档手册](https://webpack.js.org/api/compiler-hooks/)，同时浏览 [相关源码](https://github.com/webpack/webpack/blob/eca7bad8de54c39b9cb8b138793362b8a17ac11b/lib/Compiler.js#L32) 也能比较清晰地看到各个事件钩子的定义
        5. 那 compilation 对象上的事件钩子又有什么？ --- 直接看 [英文官方文档手册](https://webpack.js.org/api/compilation-hooks/)，才能看到最新最全的资料
    - 必须掌握的 tapable 库     
    介绍完 compiler 对象和 compilation 对象后，绕不过去的是 [tapable](https://github.com/webpack/tapable) 这个库，这个库暴露了所有和事件相关的 **pub/sub** 的方法。而且函数 [Compiler](https://github.com/webpack/webpack/blob/eca7bad8de54c39b9cb8b138793362b8a17ac11b/lib/Compiler.js#L29) 以及函数 [Compilation](https://github.com/webpack/webpack/blob/e7c8fa414b718ac98d94a96e2553faceabfbc92f/lib/Compilation.js#L98) 都继承自 Tapable