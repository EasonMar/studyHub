/** 
 * Map
 * Map结构提供了 值-值 的对应，是一种更完善的Hash结构实现
 * 定义Map：let m = new Map([[k1, v1],[k2 v2]])
 * 转Array：[ ...m ] // [[k1, v1],[k2, v2]]，还原了定义 Map 时传入的参数
*/
let k1 = 'key_1', v1 = 'value_1', k2 = 'key_2', v2 = 'value_2';
let m = new Map([[k1, v1], [k2, v2]]);
console.log(   m        );
console.log(   [...m]   );

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
    for (let [key, value] of m_1) {
        // key和value就是Map对象某个元素的key与value
    }
 */

/**
 * Map 结构的实例有以下属性和操作方法。
 * 1. size 属性: 返回 Map 结构的成员总数。
 * 2. Map.prototype.set(key, value): 设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
 * 3. Map.prototype.get(key): 读取key对应的键值，如果找不到key，返回undefined。
 * 4. Map.prototype.has(key): 返回一个布尔值，表示某个键是否在当前 Map 对象之中。
 * 5. Map.prototype.delete(key): 删除某个键，返回true。如果删除失败，返回false。
 * 6. Map.prototype.clear(): 清除所有成员，没有返回值。
 * 
 * Map 结构原生提供三个遍历器生成函数和一个遍历方法。
 * Map.prototype.keys()：返回键名的遍历器。
 * Map.prototype.values()：返回键值的遍历器。
 * Map.prototype.entries()：返回所有成员的遍历器。
 * Map.prototype.forEach()：遍历 Map 的所有成员。
 * 
 * 需要特别注意的是，Map 的遍历顺序就是插入顺序。
 */ 