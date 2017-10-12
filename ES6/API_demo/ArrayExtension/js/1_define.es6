document.getElementById('note').innerHTML = 'define of useful properties';

/**
 **************
 * 1-扩展运算符
 **************
 * 
 * 扩展运算符（spread）是三个点（...）
 * 
 * 它好比 rest 参数的逆运算,将一个【数组】转为用【逗号分隔的参数序列】.
 */
console.log(...[1, 2, 3]); // 1 2 3
console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5

// 该运算符主要用于"函数调用".
// example.1
function push(array, ...items) { // 定义函数时,参数内的...items是rest参数;
  array.push(...items);  // 调用函数时,参数内的...是"扩展运算符";
}

// example.2
function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers)); // 42

/**
 * 上面代码中,array.push(...items)和add(...numbers)这两行,都是函数的调用,
 * 它们的都使用了扩展运算符.该运算符将一个数组,变为参数序列.
 *
 * 扩展运算符与正常的函数参数可以结合使用,非常灵活.
 */

function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

// 扩展运算符后面还可以放置表达式.
let x = 1;
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
console.log(arr);

// 如果扩展运算符后面是一个空数组,则不产生任何效果.
[...[], 1]; // [1]


/**
 * 2-Array.from
 * Array.from方法用于将两类对象转为真正的数组：
 * 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）.
 */


/**
 * 3-Array.of
 * Array.of方法用于将一组值，转换为数组。
 */
Array.of(3, 11, 8) // [3,11,8]


/**
 * 4-数组实例的 entries()，keys() 和 values()
 * ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。
 * 它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，
 * 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
 */

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

/*for (let elem of ['a', 'b'].values()) {  // 竟然报错了... 因为Chrome未实现 
  console.log(elem);
}*/
// 'a'
// 'b'

for (let [index_b, elem_b] of ['a', 'b'].entries()) {
  console.log(index_b, elem_b);
}
// 0 "a"
// 1 "b"


/**
 * 5-数组实例的 includes()
 * Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
 * ES2016 引入了该方法。
 *
 * 没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值。
 * indexOf方法有两个缺点:
 * 一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
 * 二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
 * [NaN].indexOf(NaN) // -1
 *
 * includes使用的是不一样的判断算法，就没有这个问题。
 * [NaN].includes(NaN) // true
 */
