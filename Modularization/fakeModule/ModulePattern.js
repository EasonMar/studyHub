/** 
 * 模块模型
 * 
 * 封装了变量和function, 和全局的namaspace不接触, 松耦合
 * 只暴露可用public的方法, 其它私有方法全部隐藏
 * 
 * 解析：
 * 传入app到立即执行函数内, 在立即执行函数内并改变app
 * 最后返回新的app, 并赋值给全局app上
 */
// file app.js
var app = {};

// file greeting.js
app = (function (app) {
    var _app = app || {};

    _app.helloInLang = {
        en: 'Hello world!'
    };

    return _app;
}(app));

// file hello.js
app = (function (app) {
    var _app = app || {};

    _app.writeHello = function (lang) {
        document.write(app.helloInLang[lang]);
    };

    return _app;
}(app));