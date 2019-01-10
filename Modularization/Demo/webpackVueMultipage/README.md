# webpack+vue组件化开发多页面vm项目

## 工程化
- webpack + fis3(jello)
- webpack打包模块、组件
- fis3(jello)支持本地vm运行时调试
- jenkins实现发布构建(每次都需要在服务器中装npm包吗？具体看脚本怎么配置)
- rundeck实现发布部署
- webpack打包之后，fis3起服务监听构建后的文件夹

## 组件化
- components下各组件用.vue的SFCs(单文件组件)形式组织，编译成js
- vm直接拷贝


### 注意事项
1. Error: Cannot find module 'vue-template-compiler'
    - 使用 `.vue` 文件还需要 `vue-template-compiler` 包
2. Module build failed: TypeError: Cannot read property 'vue' of undefined
    - 貌似跟 `webpack4` 有关, `webpack4` 不识别 低版本的 `vue-loader`
    - [参考资料](https://github.com/vuejs/vue-loader/issues/1177)：
    ```
    for webcpack ^4.x
    npm install vue-loader@14.2.2
    ```
3. Error: Cannot find module 'less'
    - 还要装 `less` 模块？那我们平时开发为啥不用装啊...
    - 因为我们全局装的 `fis-parser-less` 包里依赖了 `less` 包
4. No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.
5. [Vue warn]: Invalid value for option "components": expected an Object, but got Array. --- 不要用 html 存在的标签作为组件名
7. Do not use built-in or reserved HTML elements as component id: header