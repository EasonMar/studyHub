document.getElementsByTagName('body')[0].innerHTML = `
  <p style="font-size: 90px;margin: 50% 0 0;font-weight: bold;text-align: center;" id="note">1.Base</p>
`;

/**
 * Generator 函数是 ES6 提供的一种【异步编程解决方案】,语法行为与传统函数完全不同.
 * 本章详细介绍 Generator 函数的语法和 API.
 *
 * Generator 函数有多种理解角度.从语法上,首先可以把它理解成：Generator 函数是一个状态机,封装了多个内部状态.
 *
 * 执行 Generator 函数会返回一个【遍历器对象 - Iterator】,
 * 也就是说,Generator 函数除了状态机,还是一个【遍历器对象【生成函数】】.
 * 返回的遍历器对象,可以依次遍历 Generator 函数内部的每一个状态.
 *
 * 形式上,Generator 函数是一个普通函数,但是有两个特征.
 * 一是,【function关键字与函数名之间】有一个【星号】；
 * 二是,函数体内部使用【yield表达式】,定义不同的内部状态(yield在英语里的意思就是“产出”).
 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

/***********************************************************************************************
 * 上面代码定义了一个 Generator 函数helloWorldGenerator,它内部有两个yield表达式(hello和world),
 * 即该函数有三个状态：hello,world 和 return 语句(结束执行).
 *
 * 然后,Generator 函数的【调用方法】与普通函数一样,也是在函数名后面加上一对圆括号.
 * 不同的是,调用 Generator 函数后,该函数【并不执行】,
 * 
 * 【返回】的也不是函数运行结果,而是一个指向内部状态的【指针对象】,
 * 也就是上一章介绍的遍历器对象【Iterator】.
 *
 * ********************************************************************
 * 下一步,【必须调用】遍历器对象的【next方法】,使得指针移向下一个状态.
 * ---- 也可以理解为指向下一个语句.
 * 也就是说,每次调用next方法,【内部指针】就从函数头部或上一次停下来的地方【开始执行】,每次执行一条语句
 * 
 * 【直到遇到】下一个yield表达式(或return语句)为止. 
 * ---- 注意,如果yield处在一个语句中,则其身处的语句本身,是未被执行的,但yield后的表达式会被执行.
 *
 * ********************************************************************
 * 换言之,Generator 函数是【分段执行】的,yield表达式是暂停执行的标记,而next方法可以恢复执行.
 */
console.group('helloWorldGenerator')
    console.log(hw.next()); // { value: 'hello', done: false } 
    console.log(hw.next()); // { value: 'world', done: false } 
    console.log(hw.next()); // { value: 'ending', done: true } 
    console.log(hw.next()); // { value: undefined, done: true }
console.groupEnd()


/**
 * 上面代码一共调用了四次next方法.
 *
 * 第一次调用,Generator 函数开始执行,直到遇到第一个yield表达式为止.
 * next方法返回一个对象,它的【value】属性就是【当前yield表达式的值】hello,
 * done属性的值false,表示遍历还没有结束.
 *
 * 第二次调用,Generator 函数从上次yield表达式停下的地方,一直执行到下一个yield表达式.
 * next方法【返回的对象】的【value】属性就是【当前yield表达式的值】world,
 * done属性的值false,表示遍历还没有结束.
 *
 * 第三次调用,Generator 函数从上次yield表达式停下的地方,一直执行到return语句
 * (如果没有return语句,就执行到函数结束).
 * next方法【返回的对象】的【value】属性,就是【紧跟在return语句后面的表达式的值】,
 * (如果没有return语句,则value属性的值为undefined)
 * done属性的值true,表示遍历已经结束.
 *
 * 第四次调用,此时 Generator 函数【已经运行完毕】,next方法返回对象的【value】属性为【undefined】,
 * done属性为true.
 * 以后再调用next方法,返回的都是这个值.
 */

// myTest - 直接输出hello world
var HW = helloWorldGenerator();
console.group('for...of VS Generator')
for(let h of HW){
  console.log(h);
}
console.groupEnd();

/**
 * 总结一下:
 * 调用 Generator 函数,返回一个遍历器对象(Iterator),【代表 Generator 函数的内部指针】.
 * 以后,每次调用遍历器对象的【next方法】,就会【返回】一个【有着value和done两个属性的对象】.
 * 【value属性】表示当前的【内部状态的值】,是【yield表达式后面那个表达式的值】；
 * done属性是一个布尔值,表示是【否遍历结束】.
 */


/**
 * ES6 没有规定,function关键字与函数名之间的星号,写在哪个位置.这导致下面的写法都能通过.
 * function * foo(x, y) { ··· }
 * function *foo(x, y) { ··· }
 * function* foo(x, y) { ··· }
 * function*foo(x, y) { ··· }
 * 由于 Generator 函数仍然是普通函数,所以一般的写法是上面的第三种,即【星号紧跟在function关键字后面】.
 */



/**
 * 【yield 表达式】
 *
 * 由于 Generator 函数返回的遍历器对象,【只有调用next方法】才会遍历下一个内部状态,
 * 所以其实提供了一种可以【暂停执行】的函数.yield表达式就是暂停标志.
 *
 * 遍历器对象的next方法的运行逻辑如下.
	(1)遇到yield表达式,就暂停执行后面的操作,并将【紧跟在yield后面的那个表达式的值】,作为【返回的对象的value属性值】.
	(2)下一次调用next方法时,再继续往下执行,直到遇到下一个yield表达式. 
	(3)如果没有再遇到新的yield表达式,就一直运行到函数结束,直到return语句为止,并将return语句后面的表达式的值,
		 作为返回的对象的value属性值. 
	(4)如果该函数没有return语句,则返回的对象的value属性值为undefined.
 
 * 需要注意的是,yield表达式后面的表达式,【只有当】调用next方法、内部指针指向该语句时【才会执行】,
 * 因此等于为 JavaScript 提供了手动的【惰性求值】(Lazy Evaluation)的语法功能.
 */

function* gen() {
    yield 123 + 456;
}
/**
 * 上面代码中,yield后面的表达式123 + 456,不会立即求值,只会在【next方法将指针移到这一句】时,才会求值.
 * ------ 证明了：遇到一个yield后,也会执行其后面的表达式. 之前没区分好: yield本身的表达式 和 yield所在的 表达式
 *
 * yield表达式与return语句既有相似之处,也有区别.
 * 相似之处在于,都能返回紧跟在语句后面的那个表达式的值.
 * 区别在于每次遇到yield,函数暂停执行,下一次再从该位置继续向后执行,而return语句不具备位置记忆的功能.
 * 一个函数里面,只能执行一次(或者说一个)return语句,但是可以执行多次(或者说多个)yield表达式.
 * 正常函数只能返回一个值,因为只能执行一次return；
 * Generator 函数可以返回一系列的值,因为可以有【任意多个yield】.
 * 从另一个角度看,也可以说 Generator 生成了一系列的值,这也就是它的名称的来历
 * (英语中,generator 这个词是【生成器】的意思).
 */


/**
 * Generator 函数可以不用yield表达式,这时就变成了一个单纯的【暂缓执行函数】.
 * 下面代码中,函数f如果是普通函数,在为变量generator赋值时就会执行.
 * 但是,函数f是一个 Generator 函数,就变成【只有调用next方法时】,函数f才会执行.
 *
 * 没有什么意义...反而比普通函数多了一步调用next的环节
 */
function* f() {
    console.group('Generator函数可以不用yield表达式');
    console.log('执行了！');
    console.groupEnd();
}

var generator = f();

setTimeout(() => generator.next(), 2000);

/**
 * 另外需要注意,yield表达式【只能用在 Generator 函数里面】,用在其他地方都会报错.
 * (function (){ yield 1;})()
 * 在一个普通函数中使用yield表达式,结果产生一个句法错误.
 */

// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function*(a) {
//     a.forEach(function(item) {
//         if (typeof item !== 'number') {
//             yield* flat(item);
//         } else {
//             yield item;
//         }
//     });
// };
// for (var f of flat(arr)) {
//     console.log(f);
// }

/**
 * 上面代码也会产生句法错误,因为【forEach方法的参数】是一个【普通函数】,但是在里面使用了yield表达式
 * (这个函数里面还使用了【yield*】表达式,详细介绍见后文).
 * 一种修改方法是改用for循环.
 */

var arr = [1, [[2, 3], 4 ], [5, 6] ];

var flat = function*(a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

console.group('yield表达式【只能用在 Generator 函数里面】');
for (var f of flat(arr)) {
    console.log(f); // 1, 2, 3, 4, 5, 6
}
console.groupEnd();

// myTest：
// 如果是普通函数而非Generator,会是怎样的形式...要分成3部分：容器-函数定义-函数执行.
// 对比后才发现,Generator一个函数内搞定,而且可以遍历结果,是多么方便、统一.
var tmp = [];
let flatNorm = function(a){
    let length = a.length;
    for (let i = 0; i < length; i++) {
        let item = a[i];
        if (typeof item !== 'number') {
            flatNorm(item); // 递归.
        } else {
            tmp.push(item);
        }
    }
}
flatNorm(arr);
console.group('不知道这是什么部分');
console.log(tmp);
console.groupEnd()

/**************
 * 另外,yield表达式如果用在【另一个表达式之中】,必须放在【圆括号里面】.
 */
function* demo1() {
    // console.log('Hello ' + yield); // SyntaxError
    // console.log('Hello ' + yield 123); // SyntaxError

    console.log('Hello ' + (yield)); // OK
    console.log('Hello ' + (yield 123)); // OK
}

var d1 = demo1(); // 注意：Generator本身不是Iterator,执行后才返回Iterator,Generato本身是Iterator生成器.
d1.next(); // {value: undefined, done: false}; 没有log; ---> 因为遇到了yield语句, 整条代码停止, 返回yield语句的值
d1.next(); // {value: 123, done: false}; log: Hello undefined; ---> 第一行代码得以运行, 但是本行同理停止, 依然返回yield语句的值
d1.next(); // {value: undefined, done: true}; log: Hello undefined; ---> 第二行代码运行, 返回 done:true
// 另外：【yield表达式本身】没有返回值,或者说总是【返回undefined】


/*************
 * yield表达式用作【函数参数】或放在【赋值表达式的右边】,可以不加括号.
 */
function* demo2() {
  	foo(yield 'a', yield 'b'); // OK
  	let input = yield; // OK
}


/**
 * 与 Iterator 接口的关系
 *
 * 上一章说过,任意一个对象的【Symbol.iterator方法】,等于该对象的【遍历器生成函数】,
 * 调用该函数会返回该对象的一个【遍历器对象-Iterator】.
 *
 * 由于Generator函数就是遍历器生成函数,因此可以【把Generator赋值给对象的Symbol.iterator属性】,
 * 从而使得该对象具有Iterator接口.
 *
 * 下面代码中,Generator函数赋值给Symbol.iterator属性,从而使得myIterable对象具有了Iterator接口,
 * 可以被...运算符(数组扩展运算符-spread)遍历了.
 */

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  	yield 1;
  	yield 2;
  	yield 3;
};
console.log( [...myIterable]); // [1, 2, 3]

/**
 * Generator函数执行后,返回一个【遍历器对象-iterator】.
 * 该对象本身也具有【Symbol.iterator属性】, 该对象的遍历器对象-iterator === 对象自身.
 */

function* gene(){
  // some code
}
var g = gene();
console.log( g[Symbol.iterator]() === g); // true