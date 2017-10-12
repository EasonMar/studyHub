document.getElementById('note').innerHTML = 'Usage of properties above';

/**
 * 扩展运算符的运用
 *
 * 1、替代数组的 apply 方法
 * 由于扩展运算符可以展开数组,所以不再需要apply方法,将数组转为函数的参数了.
 */

// ES5 的写法
function fes5(x, y, z) {
  // ...
}
var args_es5 = [0, 1, 2];
fes5.apply(null, args_es5); // 使用数组作为参数,ES5变用obj的apply方法

// ES6的写法
function fes6(x, y, z) {
  // ...
}
let args_es6 = [0, 1, 2];
fes6(...args_es6);  // 使用扩展运算符把数组变成参数序列.


// 下面是扩展运算符取代apply方法的一个实际的例子,应用Math.max方法,简化【求出一个数组最大元素】的写法.
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])
// 等同于 Math.max(14, 3, 77);


// 另一个例子是通过push函数,将一个数组添加到另一个数组的尾部.

// ES5的 写法
var arr1_es5 = [0, 1, 2];
var arr2_es5 = [3, 4, 5];
Array.prototype.push.apply(arr1_es5, arr2_es5);

// ES6 的写法
let arr1_es6 = [0, 1, 2];
let arr2_es6 = [3, 4, 5];
arr1_es6.push(...arr2_es6);
// 上面代码的 ES5 写法中,push方法的参数不能是数组,所以只好通过apply方法变通使用push方法.
// 有了扩展运算符,就可以直接将数组传入push方法.


// 下面是另外一个例子.
// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);

/**
 * 2-复制数组
 * 数组是复合的数据类型,直接复制的话,只是复制了指向底层数据结构的指针,而不是克隆一个全新的数组.
 */
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
console.log(a1); // [2, 2]
// 上面代码中,a2并不是a1的克隆,而是指向同一份数据的另一个指针.修改a2,会直接导致a1的变化.


// ES5 只能用变通方法来复制数组.
const a1_es5 = [1, 2];
const a2_es5 = a1_es5.concat();

a2_es5[0] = 2;
a1_es5 // [1, 2]
// 上面代码中,a1会返回原数组的克隆,再修改a2就不会对a1产生影响.


// 扩展运算符提供了复制数组的简便写法.
const a1_es6 = [1, 2];
// 写法一
// const a2_es6 = [...a1_es6];
// 写法二
const [...a2_es6] = a1_es6; // 与解构赋值结合起来-生成新数组.
console.log(a2_es6);

// 上面的两种写法,a2都是a1的克隆.

/**
 * 3-合并数组
 * 扩展运算符提供了数组合并的新写法.
 */


/**
 * 4-与解构赋值结合
 * 扩展运算符可以与解构赋值结合起来,用于生成数组.
 */
let list = [1,2,3,4,5,6];
// ES5
let a_es5 = list[0], rest_es5 = list.slice(1)
// ES6
let [a_es6, ...rest_es6] = list
console.log(a_es6,rest_es6);

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
// const [...butLast, last] = [1, 2, 3, 4, 5]; 报错
// const [first, ...middle, last] = [1, 2, 3, 4, 5]; 报错

/**
 * 5-字符串
 * 扩展运算符还可以将字符串转为真正的数组.
 */
console.log([...'hello']); // [ "h", "e", "l", "l", "o" ]

/**
 * 6-实现了 Iterator 接口的对象
 * 任何 Iterator 接口的对象（参阅 Iterator 一章）,都可以用扩展运算符转为真正的数组.
 */

/**
 * 7-Map 和 Set 结构,Generator 函数
 * 扩展运算符内部调用的是数据结构的 Iterator 接口,
 * 因此只要具有 Iterator 接口的对象,都可以使用扩展运算符,比如 Map 结构.
 */