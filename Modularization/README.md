> 本项目旨在探索前端各种模块化方案，获得感性认知

## 前端模块化
- [前端模块化参考文章链接](https://juejin.im/post/5aaa37c8f265da23945f365c)    
- 模块化的开发方式可以提高代码复用率，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数
- 目前流行的js模块化规范有`CommonJS、AMD、CMD`以及ES6的模块系统`ES6 Module`
- 参见阮一峰老师的文章 [module-loader](http://es6.ruanyifeng.com/#docs/module-loader#ES6-模块与-CommonJS-模块的差异)

## 各种模块化方案
1. 直接声明依赖 (Directly Defined Dependences)
    - 除了备注描述，什么问题都没解决
2. 命名空间 (Namespace Pattern)
    - 命名空间模式始于2002年，使用特殊的约定命名，用于避免命名冲突和全局作用域污染
    - 缺点：大型项目可维护性较差，没有解决模块间依赖管理的问题
3. 模块模式 (Module Pattern)
    - 封装了变量和function，和全局的namespace不接触，松耦合
    - 只暴露可用public的方法，其它私有方法全部隐藏
4. 依赖分离定义 (Detached Dependency Definitions)
    - 2009年 Angular 引入 Java 世界的依赖注入思想
    - 核心思想：某个模块不需要手动初始化某个依赖对象，只需要声明该依赖，并由外部框架自动实例化该对象，并传递到模块内
5. 沙盒 (Sandbox)
6. 依赖注入 (Dependency Injection)
7. 标签化模块 (Labeled Modules)
8. CommonJS
    - 服务器端 javascript 模块化解决方案，适用于同步模块加载
9. AMD (Asynchronous Module Definition - 异步模块定义)
    - 浏览器端 javascript 模块化解决方案，适用于异步模块加载
    - 不能按需加载，必须提前加载所有的依赖(依赖前置)
10. CMD (Common Module Definition - 通用模块定义)
    - 浏览器端 javascript 模块化解决方案，适用于异步模块加载
    - 可以按需加载，依赖就近
11. UMD (Universal Module Definition)
    - UMD 允许在环境中同时使用 AMD 与 CommonJS 规范
    - UMD 是 AMD 和 CommonJS 的糅合
12. ES2015 Modules ( Also known as ES6 Modules )
    - ES2015 Modules 作为 JavaScript 官方标准，日渐成为了开发者的主流选择
    - 之前的几种模块化方案都是前端社区自己实现的，只是得到了大家的认可和广泛使用，而ES6的模块化方案是真正的规范