// Set
// ES6提供了Set数据结构，它类似于数组，但是存储的元素都是唯一的，这里的唯一指的是他们存储的内存位置是唯一
let s_1 = new Set([12, 34, 45]);
let s_2 = new Set([12, 33, 44]);
let union_set = new Set(  [...s_1, ...s_2]  ); // 实现并集 s_1 u s_2
let intersect_set = new Set(  [...s_1].filter(x => s_2.has(x))  );  // 实现交集 s_1 n s_2


// 扩展运算符（...）也可以用于 Set 结构
console.log(  [...s_1]  );


// Array.from 可以将 Set 变为 Array
console.log(  Array.from(s_1)  );

/**
 * 遍历
 * 
 * 1 # 使用 forEach
    Target.forEach(function (value, key/index, Target){
        // Target的每个元素都将执行...
        // 针对Array对象，函数的变量就是元素的value、元素的索引（从0开始）、对象本身
        // 针对Map对象，函数的变量就是元素的value、元素的key、对象本身
        // 针对Set对象，函数的变量就是元素的value、元素的key、对象本身，其中Set对象的key和value相同而已
    });
 *
 * 
 * 2 # 使用 for
    for (let ele of s_1) {
        // ele是Set对象的元素值
    }
 */


/**
 * Set 结构的实例有以下属性:
 * Set.prototype.constructor：构造函数，默认就是Set函数。
 * Set.prototype.size：返回Set实例的成员总数。
 * 
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）
 * 
 * 先介绍Set结构的实例的四个操作方法:
 * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
 * Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * Set.prototype.clear()：清除所有成员，没有返回值。
 * 
 * Set结构的实例有四个遍历方法，可以用于遍历成员:
 * Set.prototype.keys()：返回键名的遍历器
 * Set.prototype.values()：返回键值的遍历器
 * Set.prototype.entries()：返回键值对的遍历器
 * Set.prototype.forEach()：使用回调函数遍历每个成员
 */  