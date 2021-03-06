document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin:50% 0 0;font-weight: bold;text-align: center;" id="note">3_usage</p>`


/**
 * 调用Iterator接口的场合
 *
 * 有一些场合会默认调用 Iterator 接口(即Symbol.iterator方法),
 * 除了下文会介绍的for...of循环,还有几个别的场合.
 *
 *
 * (1)解构赋值
 * 对数组和 Set 结构进行解构赋值时,会默认调用Symbol.iterator方法.
 *
 *
 * (2)扩展运算符
 * 数组的扩展运算符(...)也会调用默认的 Iterator 接口.
 *
 * 实际上,这提供了一种简便机制,可以将任何部署了 Iterator 接口的数据结构,转为数组.
 * 也就是说,只要某个数据结构部署了 Iterator 接口,就可以对它使用扩展运算符,将其转为数组.
 *
 * let arr = [...iterable];
 *
 * (3)yield*
 * yield*后面跟的是一个可遍历的结构,它会调用该结构的遍历器接口.
 *
 * (4)其他场合
 * 由于数组的遍历会调用遍历器接口,所以任何接受数组作为参数的场合,其实都调用了遍历器接口.
 * 下面是一些例子.
 * for...of
 * Array.from()
 * Map(), Set(), WeakMap(), WeakSet()(比如new Map([['a',1],['b',2]]))
 * Promise.all()
 * Promise.race()
 */


/**
 * 字符串的Iterator接口
 * 字符串是一个类似数组的对象,也原生具有 Iterator 接口.
 */
var someString = "hi";
typeof someString[Symbol.iterator]; // "function"

var iterator = someString[Symbol.iterator]();

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
/**
 * 上面代码中,调用Symbol.iterator方法返回一个遍历器对象,在这个遍历器上可以调用next方法,实现对于字符串的遍历.
 *
 *
 * 可以覆盖原生的Symbol.iterator方法,达到修改遍历器行为的目的.
 * 下面代码中,字符串str的Symbol.iterator方法被修改了,所以扩展运算符(...)返回的值变成了bye,而字符串本身还是hi.
 */
var str = new String("hi");

console.log([...str]); // ["h", "i"]

str[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    };
};

console.log([...str]); // ["bye"]
console.log(str); // "hi"

/**
 * Iterator接口与Generator函数
 * Symbol.iterator方法的最简单实现,还是使用下一章要介绍的Generator函数.
 */
var myIterable = {};

myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]

// 或者采用下面的简洁写法
let obj = {
    *[Symbol.iterator]() {
        yield 'hello';
        yield 'world';
    }
};

for (let x of obj) {
    console.log(x);
}
// hello
// world
/**
 * 上面代码中,Symbol.iterator方法几乎不用部署任何代码,只要用yield命令给出每一步的返回值即可.
 */


/**
 * 遍历器对象的return(),throw()
 * 遍历器对象除了具有next方法,还可以具有return方法和throw方法.
 * 如果你自己写遍历器对象生成函数,那么next方法是必须部署的,return方法和throw方法是否部署是可选的.
 *
 * return方法的使用场合是,如果for...of循环提前退出(通常是因为出错,或者有break语句或continue语句),
 * 就会调用return方法.如果一个对象在完成遍历前,需要清理或释放资源,就可以部署return方法.
 *
 * 注意,return方法必须返回一个对象,这是Generator规格决定的.
 *
 * throw方法主要是配合Generator函数使用,一般的遍历器对象用不到这个方法.请参阅《Generator函数》一章.
 */