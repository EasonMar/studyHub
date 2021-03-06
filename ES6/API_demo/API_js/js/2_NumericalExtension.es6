document.getElementById('note').innerHTML = 'NumericalExpansion';


// ============== 二进制和八进制表示法 ==============


// ============== Number.isFinite(), Number.isNaN() ==============
// Number.isFinite()用来检查一个数值是否为有限的（finite）.
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

// Number.isNaN()用来检查一个值是否为NaN.
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

/*
	它们与传统的全局方法isFinite()和isNaN()的区别在于,
	传统方法先调用Number()将非数值的值转为数值,再进行判断,
	而这两个新方法只对数值有效,Number.isFinite()对于非数值一律返回false, 
	Number.isNaN()只有对于NaN才返回true,非NaN一律返回false.
*/
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false



// ============== Number.parseInt(), Number.parseFloat() ==============
// ES6 将全局方法parseInt()和parseFloat(),移植到Number对象上面,行为完全保持不变.

// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// 这样做的目的,是逐步减少全局性方法,使得语言逐步模块化.
Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true

// ============== Number.isInteger() ==============
// Number.isInteger()用来判断一个值是否为整数.
// 需要注意的是,在 JavaScript 内部,整数和浮点数是同样的储存方法,所以3和3.0被视为同一个值.
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false

// ============== Number.EPSILON ==============
// ES6在Number对象上面,新增一个极小的常量Number.EPSILON.

Number.EPSILON
// 2.220446049250313e-16
Number.EPSILON.toFixed(20)
// '0.00000000000000022204'

// 引入一个这么小的量的目的,在于为浮点数计算,设置一个误差范围.我们知道浮点数计算是不精确的.

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 - 0.3); // 5.551115123125783e-17

console.log(5.551115123125783e-17.toFixed(20)); // '0.00000000000000005551'

// 但是如果这个误差能够小于Number.EPSILON,我们就可以认为得到了正确结果.

console.log(5.551115123125783e-17 < Number.EPSILON); // true
// 因此,Number.EPSILON的实质是一个可以接受的误差范围.

function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON;
}
withinErrorMargin(0.1 + 0.2, 0.3); // true
withinErrorMargin(0.2 + 0.2, 0.3); // false
// 上面的代码为浮点数运算,部署了一个误差检查函数.


// ============== 安全整数和Number.isSafeInteger() ==============
// JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）,超过这个范围,无法精确表示这个值.
// ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量,用来表示这个范围的上下限.

Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// true
Number.MAX_SAFE_INTEGER === 9007199254740991
// true
Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// true
Number.MIN_SAFE_INTEGER === -9007199254740991
// true

// 上面代码中,可以看到JavaScript能够精确表示的极限.
// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内.

// 验证运算结果是否落在安全整数的范围内,不要只验证运算结果,而要同时验证参与运算的每个值.



// ============== Math对象的扩展 ==============
// ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。

// -----------------------------------
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
Math.trunc('123.456')
// 123

// 对于空值和无法截取整数的值，返回NaN。
Math.trunc(NaN); // NaN
Math.trunc('foo'); // NaN
Math.trunc(); // NaN
// -----------------------------------




// ============== Math.signbit() ==============





// ============== 指数运算符 ==============




// ============== Integer 数据类型 ==============