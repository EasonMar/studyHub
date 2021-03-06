document.getElementsByTagName('body')[0].innerHTML = `
  <p style="font-size: 90px;margin: 50% 0 0;font-weight: bold;text-align: center;" id="note">3.throw_return</p>`;

console.group('1')
/**
 * Generator.prototype.throw()
 * 
 * Generator函数返回的遍历器对象,都有一个throw方法 
 * 可以在【函数体外抛出错误】,然后在Generator【函数体内捕获】.
 *
 * 下面代码中,遍历器对象i连续抛出两个错误.
 * 第一个错误被Generator函数体内的catch语句捕获.
 * i第二次抛出错误,由于Generator函数【内部的catch语句已经执行过了】,
 * 【不会再捕捉到】这个错误了 --- 因为代码指针已经pass了
 * 所以这个错误就【被抛出了Generator函数体】,被函数体外的catch语句捕获.
 */
var g = function*() {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = g();
console.log(i.next()); // --- 1-这句不执行,则i.throw('a')也会变成外部捕获？--因为指针还没开始进入函数内-
// console.log(i.next()); // --- 2-多加一句,i.throw('a')也会变成外部捕获？--因为指针已经指向函数末端-

try {
    i.throw('a');
    i.throw('b');
    // console.log("这句不会被执行."); // 这里并不会执行,因为上一句抛出错误后,就跳到catch里去了.
} catch (e) {
    console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
console.groupEnd()

/**
 * 疑问分析：https://segmentfault.com/q/1010000004880307
 *
 * Generator函数是延迟的,不调用next是不会进入函数执行的.
 * 如果不调用next直接g.throw(),抛出的异常没有在generator的try-catch语句中,所以就直接抛到函数外了.
 *
 * g.throw()-首先,这句话进入函数体去执行代码,相当于在var value = yield i后面抛了异常.
 * 所以跳过了console.log(i),执行了console.log("catch exception...").
 * 由于是在for语句中,又还没有遇到yield,所以进入了下一次循环(i = 1的循环).
 * 直到遇到了yield i,终止generator函数的执行,返回{value: 1, done: false}.
 * 这里就是你说的"就好像g.next()也被执行了一次"
 *
 * g.throw()的执行方式跟g.next()相同,而且也会返回{value, done:}！
 *
 * 真是原因是：throw方法被捕获以后,【会附带执行一次next方法】,即会执行下一条yield表达式.
 */

var generator = function*() {
    for (let i = 0; i < 10; i++) {
        try {
            var value = yield i;
            console.log(i);
        } catch (e) {
            console.log("catch exception...");
        }
    }
};

var gene = generator();
console.log(gene.next()); // Object {value: 0, done: false}
console.log(gene.throw()); // catch exception...   -- {value: 1, done: false}
console.log(gene.next()); // Object {value: 2, done: false}



/**
 * throw方法可以接受一个参数,该参数会被catch语句接收,建议抛出Error对象的实例.
 */
var g1 = function*() {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
};

var i1 = g1();
i1.next();
i1.throw(new Error('出错了！'));
// Error: 出错了！(…)

/**
 * 注意,不要混淆遍历器对象的throw方法和全局的throw命令.
 * 上面代码的错误,是用遍历器对象的throw方法抛出的,而不是用throw命令抛出的.
 * 后者只能被函数体外的catch语句捕获.
 */

var g2 = function*() {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') throw e;
            console.log('内部捕获', e);
        }
    }
};
var i2 = g2();
i2.next();

try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log('外部捕获', e);
}
// 外部捕获 [Error: a]

/**
 * 上面代码之所以只捕获了a,
 * 是因为函数体外的catch语句块,捕获了抛出的a错误以后,就不会再继续try代码块里面剩余的语句了.
 *
 * 如果 Generator 函数内部没有部署try...catch代码块,
 * 那么throw方法抛出的错误,将被外部try...catch代码块捕获.
 *
 * 如果 Generator 函数内部和外部,都没有部署try...catch代码块,那么程序将报错,直接中断执行.
 */

/**
 * 另外,throw命令与g.throw方法是无关的,两者互不影响.
 */
var gen = function* gen() {
    yield console.trace('hello'); // 为什么 这个 hello 会在后面重现一次？ 函数、变量提升导致的？
    yield console.log('world');
}
console.group('hello');
var g3 = gen();
g3.next();

try {
    throw new Error();
} catch (e) {
    g3.next();
}
console.groupEnd();
// hello
// world
/**
 * 上面代码中,throw命令抛出的错误不会影响到遍历器的状态,所以两次执行next方法,都进行了正确的操作.
 *
 * 这种函数体内捕获错误的机制,大大方便了对错误的处理.
 * 多个yield表达式,可以只用一个try...catch代码块来捕获错误.
 * 如果使用回调函数的写法,想要捕获多个错误,就不得不为每个函数内部写一个错误处理语句,
 * 现在只在 Generator 函数内部写一次catch语句就可以了.
 *
 *
 * Generator 函数体外抛出的错误,可以在函数体内捕获；
 * 反过来,Generator【函数体内抛出的错误】,也可以被【函数体外的catch捕获】.
 */
function* foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
}

var it = foo();

it.next(); // { value:3, done:false }

try {
    it.next(42);
} catch (err) {
    console.log(err);
}

/**
 * 上面代码中,第二个next方法向函数体内传入一个参数42,数值是没有toUpperCase方法的,
 * 所以会抛出一个TypeError错误,被函数体外的catch捕获.
 *
 *
 * 一旦Generator执行过程中抛出错误,且【没有被内部捕获】,就不会再执行下去了.
 * 如果此后还调用next方法,将返回一个value属性等于undefined、done属性等于true的对象,
 * 即JavaScript引擎认为这个Generator已经运行结束了.
 */
function* g4() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
}

function log(generator) {
    var v;
    console.log('starting generator');
    try {
        v = generator.next();
        console.log('第一次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第二次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第三次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    console.log('caller done');
}
console.group('g4');
log(g4());
console.groupEnd();
// starting generator
// 第一次运行next方法 { value: 1, done: false }

// throwing an exception
// 捕捉错误 { value: 1, done: false }

// 第三次运行next方法 { value: undefined, done: true }
// caller done
/**
 * 上面代码一共三次运行next方法,第二次运行的时候会抛出错误,
 * 然后第三次运行的时候,Generator 函数就已经结束了,不再执行下去了.
 */


/**
 * Generator.prototype.return() 
 * 
 * Generator函数返回的遍历器对象,还有一个return方法,可以返回给定的值,并且终结遍历Generator函数.
 */

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();

g.next() // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next() // { value: undefined, done: true }

/**
 * 如果return方法调用时,不提供参数,则返回值的value属性为undefined.
 *
 * 如果 Generator 函数内部有try...finally代码块,那么return方法会推迟到finally代码块执行完再执行.
 */
function* numbers() {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var g = numbers();
console.group('return')
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.return(7)); // { value: 4, done: false }
console.log(g.next()); // { value: 5, done: false }
console.log(g.next()); // { value: 7, done: true }
console.groupEnd();

/**
 * 上面代码中,调用return方法后,就开始执行finally代码块,然后等到finally代码块执行完,再执行return方法.
 */