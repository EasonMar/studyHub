# CMD

> Common Module Definition - 通用模块定义

- CMD规范是国内发展出来的，就像AMD有个requireJS，CMD有个浏览器的实现SeaJS，SeaJS要解决的问题和requireJS一样，只不过在模块定义方式和模块加载（可以说运行、解析）时机上有所不同
- CMD 是在 AMD 基础上改进的一种规范，解决了 AMD 对依赖模块的执行时机处理问题
- CMD 规范其实是在sea.js推广过程中产生的

## 特点
- 一个文件一个模块，所以经常就用文件名作为模块id
- 注意：以下所说的 `依赖就近` ，指的是 `定义模块` 过程中的依赖
- CMD推崇依赖就近、延迟执行，所以就可以按需加载，依赖就近
- CMD推崇依赖就近，所以一般不在define的参数中写依赖，在factory中写
- 模块化的顺序是这样的：模块预加载 => 主逻辑调用模块前才执行模块中的代码，通过依赖的延迟执行，很好解决了 RequireJS 被诟病的缺点
- SeaJS 还提供了 async API，实现依赖的延迟加载 `require.async`
    ```js
    define(function (require, exports, module) {
        var moduleA = require.async('a');
        console.log(moduleA.name);
    });
    ```
## 缺点
- CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略，(所以这个算不上真正的缺点)
- 依赖SPM打包，模块的加载逻辑偏重

## 与AMD的区别
- 很多人说requireJS是异步加载模块，SeaJS是同步加载模块，这么理解实际上是不准确的，其实加载模块都是异步的(都不会阻塞页面渲染)
    ```js
    // require.js - 加载一个模块，在加载完成时，执行回调
    require(['foo'], function(foo) {
        a.doSomething();
    })
    // seajs - 加载一个模块，在加载完成时，执行回调
    seajs.use('./a', function(a) {
        a.doSomething();
    });
    ```
- 只不过AMD依赖前置，js可以方便知道依赖模块是谁，立即加载，而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了什么模块，主逻辑调用模块前才执行模块中的代码(延迟执行)
    ```js
    /** AMD写法 **/
    define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
        // 等于在最前面声明并初始化了要用到的所有模块
        a.doSomething();
        if (false) {
            // 即便没用到某个模块 b，但 b 还是提前执行了
            b.doSomething()
        } 
    });
    /** CMD写法 **/
    define(function(require, exports, module) {
        var a = require('./a'); //在需要时申明
        a.doSomething();
        if (false) {
            var b = require('./b');
            b.doSomething();
        }
    });
    ```