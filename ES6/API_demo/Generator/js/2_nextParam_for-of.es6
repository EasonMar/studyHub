document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin: 50% 0 0;font-weight: bold;text-align: center;" id="note">2.next(Param)_for-of</p>`;

/**
 * next 方法的参数
 *
 * yield表达式【本身没有返回值】,或者说总是【返回undefined】.
 * next方法可以带一个参数,该参数就会被当作【上一个】yield表达式的【返回值】.
 * 一定要注意是【上一个yield表达式】 --- 从Generator异步的角度去思考为什么是"上一个yield表达式"!
 * 因为本次yield表达式的执行可能依赖上一次yield表达式的结果
 * 本次yield表达式的结果不可能影响本次yield运算，这是因果关系问题
 */
function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        console.log(reset, i); 
        if (reset) { i = -1; }
    }
}
var g = f();
console.group('1');
console.log(g.next()); // { value: 0, done: false }  --- console.log未执行, 没有log
console.log(g.next()); // { value: 1, done: false }  --- console.log执行第一次, log: undefined 0
console.log(g.next(true)); // { value: 0, done: false } --- console.log执行第二次,并且reset得到上一个yield返回值true, log: true 1
console.groupEnd();


/**
 * 上面代码先定义了一个可以无限运行的 Generator 函数f,
 * 如果next方法没有参数,每次运行到yield表达式,变量reset的值总是undefined.
 * 当next方法带一个参数true时,变量reset就被重置为这个参数(即true),
 * 因此i会等于-1,下一轮循环就会从-1开始递增.
 *
 *
 * 这个功能有很重要的语法意义.
 * Generator 函数从暂停状态到恢复运行,它的上下文状态(context)是不变的.
 * 通过next方法的参数,就有办法在 Generator 函数开始运行之后,继续向函数体内部注入值.
 * 也就是说,可以在 Generator 函数运行的不同阶段,从外部向内部注入不同的值,从而调整函数行为.
 */

function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield(y / 3);
    return (x + y + z);
}
var a = foo(5);
a.next(); // Object{value:6, done:false}
a.next(); // Object{value:NaN, done:false}
a.next(); // Object{value:NaN, done:true}

var b = foo(5);
b.next(); // { value:6, done:false }
b.next(12); // { value:8, done:false }
b.next(13); // { value:42, done:true }
/**
 * 上面代码中,第二次运行next方法的时候不带参数,导致y的值等于2 * undefined(即NaN),
 * 除以3以后还是NaN,因此返回对象的value属性也等于NaN.
 * 第三次运行Next方法的时候不带参数,所以z等于undefined,返回对象的value属性等于5 + NaN + undefined,即NaN.
 *
 * 如果向next方法提供参数,返回结果就完全不一样了.
 * 上面代码第一次调用b的next方法时,返回x+1的值6；
 * 第二次调用next方法,将上一次yield表达式的值设为12,因此y等于24,返回y / 3的值8；
 * 第三次调用next方法,将上一次yield表达式的值设为13,因此z等于13,这时x等于5,y等于24,所以return语句的值等于42.
 *
 * 注意,由于【next方法的参数】表示【上一个yield表达式的返回值】,所以在【第一次使用next方法时,传递参数是无效的】.
 * V8 引擎直接忽略第一次使用next方法时的参数,只有从第二次使用next方法开始,参数才是有效的.
 * 从语义上讲,第一个next方法用来启动遍历器对象,所以不用带有参数.
 *
 * 如果想要第一次调用next方法时,就能够输入值,可以在 Generator 函数外面再包一层(具体见教程)
 */

// 再看一个通过next方法的参数,向Generator函数内部输入值的例子.
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
genObj.next(); // Started
genObj.next('a'); // 1. a
genObj.next('b'); // 2. b
/**
 * 好好理解：
 * 第一次调用next,到第一个yield处就停止,并未执行console.log(`1. ${yield}`);  
 * --- why？此时yield表达式已经执行完了,但yield所在的console.log语句却未执行？
 * --- 注意：要区别开yield表达式和yield所在的语句！
 * --- yield所在的语句不会执行,但是yield表达式会执行！
 * 
 * 第二次调用next,第一个yield的返回值为a,并且执行完前面的console.log(`1. ${yield}`)语句;
 * 执行到第二个yield处时,yield所处的语句又停止(---- 但是yield表达式会执行),
 * 所以并未执行第二个yield所处的语句：console.log(`2. ${yield}`) 
 * 
 * 第三次调用next,第二个yield的返回值为b,并且执行完前面停止的console.log(`2. ${yield}`)语句;
 * 执行到return处再次停止,
 * 最后一个next的返回为{value:'result',done:true}
 */


/**
 * for...of 循环  ======  【需要在感性上好好认识for...of与Generator之间的关系】
 * 
 * *******************************************************************************
 * 
 * for...of循环可以自动遍历【Generator函数】执行时生成的【Iterator对象】
 * 
 * Generator函数执行生成的就是Iterator对象,然后Iterator对象是可以被for...of遍历的.
 * 
 * Generator函数里面的yield表达式中的值,就是当前成员信息中的value属性.
 */
function* fooA() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (let v of fooA()) {
    console.log(v); // 1 2 3 4 5
}
/**************************************************************
 * 上面代码使用for...of循环,依次显示5个yield表达式的值.
 * 这里需要注意,一旦next方法的返回对象的【done属性为true】,for...of循环就会中止,且【不包含】该返回对象,
 * 所以上面代码的return语句返回的6,不包括在for...of循环之中.
 * ---- 遇到return时,done属性会变成true ----
 * ******************************************************************************
 */

/**
 * 下面是一个利用 Generator 函数和for...of循环,实现斐波那契数列的例子.
 * 从代码中可见,使用for...of语句时不需要使用next方法. --- for...of内部自动执行了.
 */
function* fibonacci() {
    let [prev, curr] = [0, 1]; // 解构赋值
    for (;;) { // 无限循环
        // console.log([prev, curr]);  // 观察输出的变化.
        [prev, curr] = [curr, prev + curr]; // 解构赋值
        yield curr;
    }
}

/*for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}*/


/**************************************
 * 利用for...of循环,可以写出遍历任意对象(object)的方法.
 * 【原生的 JavaScript 对象】没有遍历接口,无法使用for...of循环,
 * 通过 Generator 函数为它加上这个接口,就可以用了.
 */
function* objectEntries(obj) {
    // Reflect.ownKeys方法用于返回对象的所有属性: 基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
let jane = { first: 'Jane', last: 'Doe' };
for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

/**
 * 上面代码中,对象jane原生不具备 Iterator 接口,无法用for...of遍历.
 * 这时,我们通过 Generator 函数objectEntries为它加上遍历器接口,就可以用for...of遍历了.
 */

/***********************
 * 加上遍历器接口的另一种写法是,将 Generator 函数加到对象的Symbol.iterator属性上面.
 *
 * ES5引入了Object.keys方法,返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键名.
 */
function* objectEntriesB() {
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]]; // yield后表达式的值就是 next()函数 返回对象的 value 值
    }
}

let janeB = { first: 'Jane', last: 'Doe' };
janeB[Symbol.iterator] = objectEntriesB;
for (let [key, value] of janeB) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

/******************************************
 * 除了for...of循环以外,扩展运算符(...)、解构赋值和Array.from方法内部调用的,都是遍历器接口.
 * 这意味着,它们都可以将 Generator 函数返回的 Iterator 对象,作为参数.
 * 
 * ---- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
 */
function* numbers() {
    yield 1
    yield 2
    return 3
    yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
    console.log(n)
}
// 1
// 2