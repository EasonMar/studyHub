/**
 * test
 * 
 * 当你想要知道一个模式是否存在于一个字符串中时,就可以使用 test()
 *
 * 和 exec() 一样,在相同的 '全局' 正则表达式实例上 多次调用test 将会越过之前的匹配
 * 如果正则表达式设置了全局标志g, test() 的执行会改变 '正则表达式'的lastIndex属性
 * 连续的执行test()方法, 后续的执行将会从 lastIndex 处开始匹配字符串
 */
var reg = /\w/g;
console.log(reg.test('abc')); // true
console.log(reg.test('abc')); // true
console.log(reg.test('abc')); // true
console.log(reg.test('abc')); // false


var str = "a||1@b||2@c||3";
var reg = /a/g;
console.log(reg2.test(str)); // true
console.log(reg2.test(str)); // false


// ------------------------------------------------------------

/**
 * exec
 *
 * 在相同的 '全局' 正则表达式实例上执行exec()，会改变正则本身的 lastIndex 属性值
 */
var str = "a||1@b||2@c||3";
var reg = /\|\|/g;
console.log(reg.exec(str)); // ["||", index: 1, input: "a||1@b||2@c||3"]
console.log(reg.exec(str)); // ["||", index: 6, input: "a||1@b||2@c||3"]
console.log(reg.exec(str)); // ["||", index: 11, input: "a||1@b||2@c||3"]
console.log(reg.exec(str)); // null
console.log(reg.exec(str)); // ["||", index: 1, input: "a||1@b||2@c||3"]

// 循环方式匹配全局
var reg = /\|\|/g;
while (result = reg.exec(str)) {
	console.log(result + ' ===>  index:' + result.index + ' input:' + result.input);
}

// // 非全局 - 未配置global，每次匹配的是相同的结果, 因为不会改变 lastIndex 属性
var reg = /\|\|/;
console.log(reg.exec(str)); // ["||", index: 1, input: "a||1@b||2@c||3"]
console.log(reg.exec(str)); // ["||", index: 1, input: "a||1@b||2@c||3"]
console.log(reg.exec(str)); // ["||", index: 1, input: "a||1@b||2@c||3"]


// ------------------------------------------------------------

/**
 * match
 *
 * 返回值:存放匹配结果的数组.该数组的内容依赖于 regexp 是否具有全局标志 g
 *
 * 如果正则表达式不包含 g 标志，则 str.match() 会返回和 RegExp.exec() 相同的结果
 * 返回的 Array 拥有一个额外的 input 属性，该属性包含被解析的原始字符串。另外，还拥有一个 index 属性，该属性表示匹配结果在原字符串中的索引
 * 如果正则表达式包含 g 标志，则该方法返回一个 Array ，它包含所有匹配的子字符串而不是匹配对象。捕获组不会被返回
 * 如果没有匹配到，则返回  null
 */
var str = 'abc';
// 不带 g 标 - 非全局正则
var reg = /\w/;
console.log(str.match(reg));  // ["a", index: 0, input: "abc", groups: undefined]
var reg = /(ab)c/;
console.log(str.match(reg));  // ["abc", "ab", index: 0, input: "abc", groups: undefined]
// 带 g 标 - 全局正则
var reg = /\w/g;
console.log(str.match(reg));  // ["a", "b", "c"]
var reg = /(ab)c/g;
console.log(str.match(reg));  // ["abc"]


// 还是前面的例子
var str = "a||1@b||2@c||3";
// 全局
var reg = /\|\|/g;
console.log(str.match(reg));  // ["||", "||", "||"]
// 非全局
var reg = /\|\|/;
console.log(str.match(reg));  // ["||", index: 1, input: "a||1@b||2@c||3", groups: undefined]

// 把模式匹配出来
var reg = /\w\|\|\d/g;
console.log(str.match(reg));  // ["a||1", "b||2", "c||3"]

var stR = "aac||123@bbc||223@cdd||323";
var reG = /\w+\|\|\d+/g; // 这样写更健壮
console.log(stR.match(reG));  // ["aac||123", "bbc||223", "cdd||323"]


// ------------------------------------------------------------

/**
 * replace
 */
var str = "Welcome to Microsoft! " +
		  "We are proud to announce that Microsoft has " +
		  "one of the largest Web Developers sites in the world."
// 全局匹配-替换
console.log(str.replace(/Microsoft/g, "替换"));  // Welcome to 替换! We are proud to announce that 替换 has ...省略

// replace with RegExp.$n
var str = "Doe, John";
var reg = /(\w+)\s*,\s*(\w+)/
console.log(str.replace(reg, "$2 $1")); // John Doe    \$n 为正则捕获的第n个分组

// nice
var tel = '13544534667';  // 注意要存为字符串
var reg = /(\d{3})\d{4}(\d{4})/g;
console.log(tel.replace(reg, "$1****$2"));


// 回调函数
var str = 'aaa bbb ccc';
var reg = /\b\w+\b/g;
console.log(str.replace(reg, function (word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);  // Aaa Bbb Ccc
}));