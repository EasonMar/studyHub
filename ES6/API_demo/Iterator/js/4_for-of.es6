document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin:50% 0 0;font-weight: bold;text-align: center;" id="note">4_for-of</p><p></p><p></p><p></p><p></p><p></p>`;


/**
 * ES6借鉴C++、Java、C#和Python语言,引入了for...of循环,作为遍历所有数据结构的统一的方法.
 *
 * 一个数据结构只要部署了Symbol.iterator属性,就被视为具有iterator接口,就可以用for...of循环遍历它的成员.
 * 也就是说,for...of循环内部调用的是数据结构的Symbol.iterator方法.
 * 
 * for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象（比如arguments对象、DOMNodeList对象）、
 * 后文的Generator对象,以及字符串.
 */


/**
 * 数组
 */

/**
 * 数组原生具备iterator接口（即默认部署了Symbol.iterator属性）,
 * for...of循环本质上就是调用这个接口产生的遍历器,可以用下面的代码证明.
 */
const arr = ['red', 'green', 'blue'];

for (let v of arr) {
    console.log(v); // red green blue
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for (let v of obj) {
    console.log(v); // red green blue
}
// 上面代码中,空对象obj部署了数组arr的Symbol.iterator属性,
// 结果obj的for...of循环,产生了与arr完全一样的结果.


// for...of循环可以代替数组实例的forEach方法
const arr2 = ['red', 'green', 'blue'];
arr2.forEach(function(element, index) {
    console.log(element); // red green blue
    console.log(index); // 0 1 2
});


// JavaScript原有的for...in循环,只能获得对象的键名,不能直接获取键值.
// ES6 提供for...of循环,允许遍历获得键值.
var arr3 = ['a', 'b', 'c', 'd'];
for (let a in arr3) {
    console.log(a); // 0 1 2 3
}
for (let a of arr3) {
    console.log(a); // a b c d
}
/**
 * 上面代码表明,for...in循环读取键名,for...of循环读取键值.
 * 如果要通过for...of循环,获取数组的索引,可以借助数组实例的entries方法和keys方法,
 * 参见《数组的扩展》章节.
 */


// for...of循环调用遍历器接口,数组的遍历器接口只返回具有数字索引的属性.这一点跟for...in循环也不一样.
// 下面代码中,for...of循环不会返回数组arr的foo属性.
let arr4 = [3, 5, 7];
arr4.foo = 'hello';
for (let i in arr4) {
    console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr4) {
    console.log(i); //  "3", "5", "7"
}


/**
 * Set和Map结构
 *
 * Set和Map结构也原生具有Iterator接口,可以直接使用for...of循环.
 *
 * 下面代码演示了如何遍历Set结构和Map结构.值得注意的地方有两个:
 * 首先,遍历的顺序是按照各个成员被添加进数据结构的顺序.
 * 其次,Set结构遍历时,返回的是一个值,而【Map结构遍历时,返回的是一个数组】,
 * 该数组的两个成员分别为当前Map成员的键名和键值.
 */

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log(e);
}
// Gecko
// Trident
// Webkit

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
    console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262

//【Map结构遍历时,返回的是一个数组】,该数组的两个成员分别为当前Map成员的键名和键值.
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
    console.log(pair);
}
// ['a', 1]
// ['b', 2]

for (let [key, value] of map) {
    console.log(key + ' : ' + value);
}
// a : 1
// b : 2



/**
 * 计算生成的数据结构
 *
 * 有些数据结构是在现有数据结构的基础上,计算生成的.
 * 比如,ES6的数组、Set、Map 都部署了以下三个方法,调用后都返回遍历器对象.
 *
 * entries()-返回一个【遍历器对象】,用来遍历[键名, 键值]组成的数组.
 *     对于数组,键名就是索引值;
 *     对于Set,键名与键值相同.
 *     Map结构的Iterator接口,默认就是调用entries方法.
 * 
 * keys()-返回一个遍历器对象,用来遍历所有的键名.
 * values()-返回一个遍历器对象,用来遍历所有的键值.
 *
 * 这三个方法调用后生成的遍历器对象,所遍历的都是计算生成的数据结构.
 */
let arr5 = ['a', 'b', 'c'];
for (let pair of arr5.entries()) {
    console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']



/**
 * 类似数组的对象
 * 类似数组的对象包括好几类.下面是for...of循环用于字符串、DOM NodeList 对象、arguments对象的例子.
 */

// 字符串
let str = "hello";
for (let s of str) {
    console.log(s); // h e l l o
}

// DOM NodeList对象
let paras = document.querySelectorAll("p");
for (let p of paras) {
    p.classList.add("test"); // 增加类的原生API.
}

// arguments对象
function printArgs() {
    for (let x of arguments) {
        console.log(x);
    }
}
printArgs('a', 'b');
// 'a'
// 'b'

/**
 * 对于字符串来说,for...of循环还有一个特点,就是会正确识别32位 UTF-16 字符.
 **
 *
 * 并不是所有类似数组的对象都具有 Iterator 接口,
 * 一个简便的解决方法,就是使用【Array.from】方法将其转为数组.  ----  Array.from是什么方法？？
 */
let arrayLike = { length: 2, 0: 'a', 1: 'b' };

// 报错
// for (let x of arrayLike) {
//     console.log(x);
// }

// 正确
for (let x of Array.from(arrayLike)) {
    console.log(x);
}


/**
 * 对象
 *
 * 对于普通的对象,for...of结构不能直接使用,会报错,必须部署了 Iterator 接口后才能使用.
 * 但是,这样情况下,for...in循环依然可以用来遍历键名.
 */

// 一种解决方法是,使用【Object.keys】方法将对象的键名生成一个数组,然后遍历这个数组.

/*for (var key of Object.keys(someObject)) {
    console.log(key + ': ' + someObject[key]);
}*/
// 另一个方法是使用 Generator 函数将对象重新包装一下.
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

for (let [key, value] of entries(obj)) {
    console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3



/**
 * 与其他遍历语法的比较
 *
 * 以数组为例,JavaScript 提供多种遍历语法.最原始的写法就是for循环.
 * 这种写法比较麻烦,因此数组提供内置的forEach方法.
 *
 * forEach写法的问题在于,无法中途跳出forEach循环,break命令或return命令都不能奏效.
 *
 * for...in循环可以遍历数组的键名.
 * for...in循环有几个缺点.
    - 数组的键名是数字,但是for...in循环是以字符串作为键名“0”、“1”、“2”等等.
    - for...in循环不仅遍历数字键名,还会遍历手动添加的其他键,甚至包括原型链上的键.
    - 某些情况下,for...in循环会以任意顺序遍历键名.
 * 总之,for...in循环主要是为遍历对象而设计的,不适用于遍历数组.
 * 
 *
 * for...of循环相比上面几种做法,有一些显著的优点.
    - 有着同for...in一样的简洁语法,但是没有for...in那些缺点.
    - 不同于forEach方法,它可以与break、continue和return配合使用.
    - 提供了遍历所有数据结构的统一操作接口.
 */

// 下面是一个使用break语句,跳出for...of循环的例子.
/*for (var n of fibonacci) {
    if (n > 1000)
        break;
    console.log(n);
}*/
// 上面的例子,会输出斐波纳契数列小于等于1000的项.如果当前项大于1000,就会使用break语句跳出for...of循环.