[Seajs-官网](https://seajs.github.io/seajs/docs/)      
[API-快速参考](https://github.com/seajs/seajs/issues/266)

## 为什么使用 Sea.js ？
Sea.js 追求简单、自然的代码书写和组织方式，具有以下核心特性：
- 简单友好的模块定义规范：Sea.js 遵循 CMD 规范，可以像 Node.js 一般书写模块代码。
- 自然直观的代码组织方式：依赖的自动加载、配置的简洁清晰，可以让我们更多地享受编码的乐趣。   

Sea.js 还提供常用插件，非常有助于开发调试和性能优化，并具有丰富的可扩展接口。     
Sea.js 遵循 MIT 协议，无论个人还是公司，都可以免费自由使用。        

> 他们仅仅支持js的模块化, 无法将 JavaScript、CSS 和 Template 同时都考虑到模块化方案中去

## 提示
### CMD规范的注意事项
- [CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)

#### define(factory)
- define 接受 factory 参数，factory 可以是一个函数，也可以是一个对象或字符串
- factory 为对象、字符串时，表示模块的接口就是该对象、字符串：
    ```js
    define({ "foo": "bar" });
    ```
- factory 为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。
- factory 方法在执行时，默认会传入三个参数：require、exports 和 module：
    ```js
    define(function(require, exports, module) {
        // 模块代码
    });
    ```
#### exports VS module.exports
- exports 仅仅是 module.exports 的一个引用，在 factory 内部给 exports 重新赋值时
- 并不会改变 module.exports 的值，而是改变了exports的指向而已
- 因此给 exports 赋值是无效的，不能用来更改模块接口
- 特别注意：下面这种写法是错误的
    ```js
    define(function(require, exports) {
        // 错误用法！！!
        exports = {
            foo: 'bar',
            doSomething: function() {}
        };
    });
    ```
- 正确的写法是用 return 或者给 module.exports 赋值
    ```js
    define(function(require, exports, module) {
        // 正确写法
        module.exports = {
            foo: 'bar',
            doSomething: function() {}
        };
    });    
    ```
#### return
- 除了给 exports 对象增加成员，还可以使用 return 直接向外提供接口
    ```js
    define(function(require) {
        // 通过 return 直接提供接口
        return {
            foo: 'bar',
            doSomething: function() {}
        };
    });
    ```
- 如果 return 语句是模块中的唯一代码，还可简化为
    ```js
    define({
        foo: 'bar',
        doSomething: function() {}
    });
    ```