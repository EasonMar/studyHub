## webpack原理解析
- [Webpack模块化原理简析](https://segmentfault.com/a/1190000010409465)
- [Webpack模块化原理-系列文章](https://segmentfault.com/a/1190000010349749)

### webpack简介
- webpack是一个打包模块化js的工具，可以通过loader转换文件，通过plugin扩展功能
- 它的流行得益于模块化和单页应用的流行。webpack提供扩展机制，在庞大的社区支持下各种场景基本它都可找到解决方案
- 核心思想：一切皆模块，在webpack中，css,html.js，静态资源文件等都可以视作模块；便于管理，利于重复利用
- 按需加载：进行代码分割，实现按需加载
