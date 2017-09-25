/************************************************
 * String：string trim 去除字符串的空白
 */
let str = '    abc';
console.log("|" + str + "|");
console.log("|" + str.trim() + "|");

/************************************************
 * Date
 */
console.log(Date.now()); // 返回1970年7月1日到现在秒数
console.log(new Date().toJSON()); // toJSON() 方法返回 Date 对象的字符串形式。
console.log(new Date().toISOString().slice(0, 10)); // 把年月日切割出来.
// toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。


/************************************************
 * Number:toFixed()小数四舍五入
 */
let a = new Number(1.326);
let b = new Number(1.324);
console.log(a.toFixed(2)); //1.33
console.log(b.toFixed(2)); //1.32
let c = 1000000000000000000000;
console.log(c.toPrecision(4)); //1.000e+21   toPrecision() 方法以指定的精度返回该数值对象的字符串表示。
// ps: 在es5中我们经常用Math.round()


/************************************************
 * function.bind：用来改变this指针的作用域
 */
var x = 1;
let obj5 = {
    x: 2
}

function fn1() {
    console.log(this.x);
    console.log(this);
}

let fn2 = fn1.bind(obj5);
fn2()



/************************************************
 * es5严格模式
 * 'use strict'
 *
 * 设立"严格模式"的目的，主要有以下几个：
 *　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
 *　- 消除代码运行的一些不安全之处，保证代码运行的安全；
 *　- 提高编译器效率，增加运行速度；
 *　- 为未来新版本的Javascript做好铺垫。
 *
 * 严格模式弃用以前版本的语法，再用就报错,这会让你使用一些最新版本的语法
 * 使用var声明变量严格模式中将不通过
 * 任何使用'eval'的操作都会被禁止
 * 创设eval作用域
 * 禁止使用with语句
 * caller/callee 被禁用
 * 禁止扩展的对象添加新属性会报错
 * 除系统内置的属性会报错
 * delete使用var声明的变量或挂在window上的变量报错
 * delete不可删除属性(isSealed或isFrozen)的对象时报错
 * 对一个对象的只读属性进行赋值将报错
 * 对象有重名的属性将报错
 * 函数有重名的参数将报错
 * 八进制表示法被禁用
 * arguments严格定义为参数，不再与形参绑定
 * 函数必须声明在顶层
 * ES5里新增的关键字不能当做变量标示符使用，如implements, interface, let, package, private, protected, pulic, static, yield
 * call/apply的第一个参数直接传入不包装为对象
 * call/apply的第一个参数为null/undefined时，this为null/undefined
 * bind的第一个参数为null/undefined时，this为null/undefined
 */