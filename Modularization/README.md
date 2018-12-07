> 本项目旨在探索前端各种模块化方案，获得感性认知

## 主要的模块化方案
1. 直接声明依赖（Directly Defined Dependences）
    - 除了备注描述，什么问题都没解决
2. 命名空间（Namespace Pattern）
    - 命名空间模式始于2002年，使用特殊的约定命名，用于避免命名冲突和全局作用域污染
    - 缺点：大型项目可维护性较差，没有解决模块间依赖管理的问题
3. 模块模式（Module Pattern）
    - 封装了变量和function，和全局的namespace不接触，松耦合
    - 只暴露可用public的方法，其它私有方法全部隐藏
4. 依赖分离定义（Detached Dependency Definitions）
    - 2009年 Angular 引入 Java 世界的依赖注入思想
    - 核心思想：某个模块不需要手动初始化某个依赖对象，只需要声明该依赖，并由外部框架自动实例化该对象，并传递到模块内
5. 沙盒（Sandbox）
6. 依赖注入（Dependency Injection）
7. 标签化模块（Labeled Modules）
8. CommonJS
    - 服务器端 javascript 模块化解决方案，适用于同步模块加载
9. AMD
    - 浏览器端 javascript 模块化解决方案，适用于异步模块加载
10. UMD
    - UMD 允许在环境中同时使用 AMD 与 CommonJS 规范
11. ES2015 Modules
    - ES2015 Modules 作为 JavaScript 官方标准，日渐成为了开发者的主流选择