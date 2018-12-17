/**
 * webpack打包的代码，整体可以简化成下面的结构：
 * 整个打包生成的代码是一个IIFE(立即执行函数)
 */
(function(modules) { /* 省略函数内容 */ })
([
    function(module, exports, __webpack_require__) {
        /* 模块index.js的代码 */
    },
    function(module, exports, __webpack_require__) {
        /* 模块bar.js的代码 */
    }
]);


/**
 * 下面是摘取的函数内容，并添加了一些注释：
 */
// 1、模块缓存对象
var installedModules = {};
// 2、webpack实现的require
function __webpack_require__(moduleId) {
    // 3、判断是否已缓存模块
    if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
    }
    // 4、缓存模块
    var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
    };
    // 5、调用模块函数 --- modules 是整个IIFE的形参 
    // 将形参 modules 中各模块的业务逻辑绑定到缓存模块 module.exports ，所以要指定作用域为 module.exports
    // 传入 __webpack_require__ 供定义模块时的依赖使用
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // 【A】从传递的参数看出了模块定义内的 exports 只是 module.exports 的引用
    // 6、标记模块为已加载
    module.l = true;
    // 7、返回 module.exports
    return module.exports; // 【B】require 最后返回的是 module.exports
}
// 8、require第一个模块 - __webpack_require__.s 的含义是启动模块对应的 index
// return b = a 时，返回值是 a ，而非 b。同理，函数参数传入的是0，而不是__webpack_require__.s
return __webpack_require__(__webpack_require__.s = 0);


/**
 * IIFE(立即执行函数)的实参 --- 各模块函数
 * 参数对应：
 * modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
 *              function (                module, exports,        __webpack_require__) {...}
 * 再次强调：exports只是module.exports的引用
 */ 
([
/* 0 */
    (function (module, exports, __webpack_require__) {
        "use strict";
        //bar.js
        exports.bar = function () {
            return 1;
        }
    }),
    /* 1 */
    (function (module, exports, __webpack_require__) {
        "use strict";
        //index.js
        var bar = __webpack_require__(0);
        function foo() {
            return bar();
        }
    })
]);


/********************************************************************
 * all codes display here with comments
 */
/******/ (function(modules) { // webpackBootstrap - webpack引导程序
/******/    // The module cache - 模块缓存对象
/******/    var installedModules = {};
/******/
/******/    // The require function - webpack实现的require函数
/******/    function __webpack_require__(moduleId) {
/******/
/******/        // Check if module is in cache - 检查模块是否有缓存
/******/        if(installedModules[moduleId]) {
/******/            return installedModules[moduleId].exports;
/******/        }
/******/        // Create a new module (and put it into the cache) - 创建模块，并放入缓存中
/******/        var module = installedModules[moduleId] = {
/******/            i: moduleId,
/******/            l: false,
/******/            exports: {}
/******/        };
/******/
/******/        // Execute the module function - 执行模块函数
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/        // Flag the module as loaded - 标记模块为已加载
/******/        module.l = true;
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }
/******/
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // identity function for calling harmony imports with the correct context
/******/    __webpack_require__.i = function(value) { return value; };
/******/
/******/    // define getter function for harmony exports
/******/    __webpack_require__.d = function(exports, name, getter) {
/******/        if(!__webpack_require__.o(exports, name)) {
/******/            Object.defineProperty(exports, name, {
/******/                configurable: false,
/******/                enumerable: true,
/******/                get: getter
/******/            });
/******/        }
/******/    };
/******/
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = function(module) {
/******/        var getter = module && module.__esModule ?
/******/            function getDefault() { return module['default']; } :
/******/            function getModuleExports() { return module; };
/******/        __webpack_require__.d(getter, 'a', getter);
/******/        return getter;
/******/    };
/******/
/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
/******/
/******/    // Load entry module and return exports - __webpack_require__.s 的含义是启动模块对应的 index
/******/    return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//bar.js

exports.bar = function () {
    return 1;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//index.js

var bar = __webpack_require__(0);
function foo() {
    return bar();
}

/***/ })
/******/ ]);