document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin: 50% 0 0;font-weight: bold;text-align: center;" id="note">2_default_pointer_add2Obj</p>
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;

/**
 ** 默认Iterator接口 **
 * Iterator接口的目的,就是为所有数据结构,提供了一种统一的访问机制,即for...of循环(详见下文).
 * 当使用for...of循环遍历某种数据结构时,该循环会自动去寻找Iterator接口.
 * 
 * 一种数据结构只要部署了Iterator接口,我们就称这种数据结构是"可遍历的"(iterable).
 * 
 * ES6规定,默认的Iterator接口部署在数据结构的Symbol.iterator属性,
 * 或者说,一个数据结构只要具有Symbol.iterator属性,就可以认为是"可遍历的"(iterable).
 * 
 * 【Symbol.iterator属性】本身是一个【函数】,就是当前数据结构默认的遍历器生成函数.
 * 【执行这个函数,就会返回一个遍历器】.
 * 
 * 至于属性名【Symbol.iterator】,它是一个【表达式】,返回【Symbol对象的iterator属性】,
 * 这是一个预定义好的、类型为Symbol的特殊值,
 * 所以它要放在方括号内,不能用点访问进行(点访问默认跟随的是字符串)
 *
 * 注意区分【Symbol.iterator属性】(value)和属性名【Symbol.iterator】(key),他们之间是key-value关系.
 */

const obj = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};
/**
 * 上面代码中,对象obj是可遍历的(iterable),因为具有Symbol.iterator属性.
 * 执行这个属性,会返回一个【遍历器对象】.该对象的【根本特征】就是具有next方法.
 * 每次调用next方法,都会返回一个【代表当前成员的信息对象】,具有value和done两个属性.
 */


/**
 * ES6 的有些数据结构原生具备Iterator接口(比如数组),即不用任何处理,就可以被for...of循环遍历.
 * 原因在于,这些数据结构原生部署了Symbol.iterator属性(详见下文),另外一些数据结构没有(比如对象).
 * 凡是部署了Symbol.iterator属性的数据结构,就称为部署了遍历器接口.调用这个接口,就会返回一个遍历器对象.
 * 
 * 下面的例子是数组的Symbol.iterator属性:
 * 变量arr是一个数组,原生就具有遍历器接口,部署在arr的Symbol.iterator属性上面.
 * 所以,调用这个属性,就得到遍历器对象.
 */
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }

/**
 * 对于原生部署Iterator接口的数据结构,不用自己写遍历器生成函数,for...of循环会自动遍历它们.
 * 除此之外,其他数据结构(主要是对象)的Iterator接口,都需要自己在Symbol.iterator属性上面部署,这样才会被for...of循环遍历.
 *
 * 对象(Object)之所以没有默认部署Iterator接口,是因为对象的哪个属性先遍历,哪个属性后遍历是不确定的,需要开发者手动指定.
 * 本质上,遍历器是一种线性处理,对于任何非线性的数据结构,部署遍历器接口,就等于部署一种线性转换.
 * 不过,严格地说,对象部署遍历器接口并不是很必要,因为这时对象实际上被当作Map结构使用,ES5没有Map结构,而ES6原生提供了.
 *
 * 一个对象如果要具备可被for...of循环调用的Iterator接口,
 * 就必须在Symbol.iterator的属性上部署遍历器生成方法(原型链上的对象具有该方法也可).
 */

class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    // 执行这个属性,会返回一个【遍历器对象】.该对象的【根本特征】就是具有next方法.
    [Symbol.iterator]() { return this; } // 这里返回了【当前对象】？

    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return { done: false, value: value };
        }
        return { done: true, value: undefined };
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
    console.log(value); // 0, 1, 2 --- 输出next返回对象中的value值
}

/**
 * 上面代码是一个类部署Iterator接口的写法.
 * Symbol.iterator属性对应一个函数,执行后返回当前对象的遍历器对象.
 *
 * 
 * 下面是通过遍历器实现【指针结构】的例子
 * 首先在构造函数的原型链上部署Symbol.iterator方法,
 * 调用该方法会返回遍历器对象iterator,调用该对象的next方法,
 * 在返回一个值的同时,自动将内部指针移到下一个实例.
 */
function Obj(value) {
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
    var iterator = { next: next };

    var current = this;

    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return { done: false, value: value };
        } else {
            return { done: true };
        }
    }
    return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

// 编辑指向
one.next = two;
two.next = three;

for (var i of one) {
    console.log(i); // 1, 2, 3 --- 输出next方法返回的对象中的value值
}


// 下面是另一个为对象添加 Iterator 接口的例子 
let obj_B = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

for (var a of obj_B) {
    console.log(a) // 'hello', 'world'--- 输出next返回对象中的value值
}


/**
 * 对于【类似数组的对象】--- (存在数值键名和length属性),
 * 部署Iterator接口,有一个简便方法,就是Symbol.iterator方法直接引用数组的Iterator接口.
 * 
 * NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
 * 或者
 * NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
 * 
 * [...document.querySelectorAll('div')] // 可以执行了？？ --- 不做以上操作,貌似也可以执行.
 * 
 * NodeList对象是类似数组的对象,本来就具有遍历接口,可以直接遍历.
 * 上面代码中,我们将它的遍历接口改成数组的Symbol.iterator属性,可以看到没有任何影响.
 * 
 * 数组扩展运算符(spread)是三个点(...).
 * 它好比rest参数的逆运算,将一个【数组】转为用逗号分隔的参数序列.
 */
console.log([...document.querySelectorAll('div')]); // Array
console.log(document.querySelectorAll('div')); // NodeList

/**
 * 下面是另一个【类似数组的对象】调用数组的Symbol.iterator方法的例子.
 */
let iterable_A = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable_A) {
    console.log(item); // 'a', 'b', 'c'
}

/**
 * 注意,普通对象部署数组的Symbol.iterator方法,并无效果.
 */
let iterable_B = {
    a: 'a',
    b: 'b',
    c: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable_B) {
    console.log(item); // undefined, undefined, undefined
}


/**
 * 如果Symbol.iterator方法对应的不是遍历器生成函数(即会返回一个遍历器对象),解释引擎将会报错.
 * 下面代码中,变量obj_C的Symbol.iterator方法对应的不是遍历器生成函数,因此报错.
 *
 * var obj_C = {};
 * 
 * obj_C[Symbol.iterator] = () => 1;
 * 
 * [...obj_C] // TypeError: [] is not a function
 * 
 * // Uncaught TypeError: Result of the Symbol.iterator method is not an object
 * 
 */


/**
 * 有了遍历器接口,数据结构就可以用for...of循环遍历(详见下文),也可以使用while循环遍历.
 * 
 * 下面代码中,ITERABLE代表某种可遍历的数据结构,$iterator是它的遍历器对象.
 * 遍历器对象每次移动指针(next方法),都检查一下返回值的done属性,
 * 如果遍历还没结束,就移动遍历器对象的指针到下一步(next方法),不断循环.
 *
 * var $iterator = ITERABLE[Symbol.iterator]();
 * var $result = $iterator.next();
 * while (!$result.done) {
 *    var x = $result.value;
 *    // ...
 *    $result = $iterator.next();
 * }
 */