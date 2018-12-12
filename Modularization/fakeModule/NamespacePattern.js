/**
 * 命名空间
 * 
 * 命名空间模式始于2002年，使用特殊的约定命名，用于避免命名冲突和全局作用域污染
 * 
 * 缺点：大型项目可维护性较差，没有解决模块间依赖管理的问题
 */

// file app.js
var app = {};

// file greeting.js
app.helloInLang = {
    en: 'Hello world!'
};

// file hello.js
app.writeHello = function (lang) {
    document.write(app.helloInLang[lang]);
};