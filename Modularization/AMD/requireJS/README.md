## 参考文档
- [requireJS官网](https://requirejs.org/)     
- [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)    

## 强调-说明
- require.js的诞生，就是为了解决这两个问题：
    - 实现js文件的异步加载，避免网页失去响应
    - 管理模块之间的依赖性，便于代码的编写和维护

### 加载
- 加载`require.js`这个文件，也可能造成网页失去响应。解决办法有两个，一个是把它放在网页底部加载，另一个是写成下面这样：
    ```html
    <script src="js/require.js" data-main="js/main" defer async="true" ></script>
    ```
- async属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上
- data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，这个文件会第一个被require.js加载
- 由于require.js默认的文件后缀名是js，所以可以把main.js简写成main