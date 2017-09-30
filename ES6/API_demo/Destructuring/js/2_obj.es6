document.getElementById('note').innerHTML = 'Obj';

console.group('对象的解构赋值');

    // 对象的属性没有次序,【变量必须与属性同名,才能取到正确的值】.(形式上与对象的key匹配)
    let { bar2, foo4 } = { foo4: "aaa", bar2: "bbb" };
    console.log("foo4=" + foo4) // "aaa"
    console.log("bar2=" + bar2) // "bbb"

    let { baz1 } = { foo: "aaa", bar: "bbb" };
    console.log(baz1) // undefined
    // 上面代码的第一个例子,等号左边的两个变量的次序,与等号右边两个同名属性的次序不一致,但是对取值完全没有影响.
    // 第二个例子的变量没有对应的同名属性,导致取不到值,最后等于undefined.


    // 如果变量名与属性名不一致,必须写成下面这样.(形式上与对象的value匹配)
    var { foo5: baz2 } = { foo5: 'aaa', bar: 'bbb' };
    console.log("baz2=" + baz2); // "aaa"

    let obj = { first: 'hello', last: 'world' };
    let { first: fi, last: la } = obj;
    console.log("fi=" + fi);
    console.log("la=" + la);

    // 【【这实际上说明,对象的解构赋值是下面形式的简写】】
    let { foo: foo6, bar: bar3 } = { foo: "aaa", bar: "bbb" };
    // 也就是说,对象的解构赋值的内部机制,是【先找到同名属性,然后再赋给对应的变量】
    // 【【真正被赋值的是后者(变量),而不是前者】】

    /*
        let { foo: baz } = { foo: "aaa", bar: "bbb" };
        baz // "aaa"
        foo // error: foo is not defined
        上面代码中,foo是匹配的模式,baz才是变量.真正被赋值的是变量baz,而不是模式foo.
    */

    // ======================================================================================================
    // 注意,采用这种写法时,变量的【声明和赋值是一体的】.
    // 对于let和const来说,变量不能重新声明,所以一旦赋值的变量以前声明过,就会报错.
    // let foo7;
    // let {foo7} = {foo7: 1}; // SyntaxError: Duplicate declaration "foo7"

    // let baz3;
    // let {bar: baz3} = {bar: 1}; // SyntaxError: Duplicate declaration "baz3"
    // 上面代码中,解构赋值的变量都会重新声明,所以报错了.
    // 不过,因为var命令允许重新声明,所以这个错误只会在使用let和const命令时出现.
    // 如果没有第二个let命令,上面的代码就不会报错.

    let foo7;
    ({ foo7 } = { foo7: 1 }); // 成功

    let baz4;
    ({ bar: baz4 } = { bar: 1 }); // 成功
    // 上面代码中,let命令下面一行的圆括号是必须的,否则会报错.
    // 因为解析器会将起首的大括号,理解成一个代码块,而不是赋值语句.
    // ======================================================================================================
console.groupEnd();
console.log("");


// 和数组一样,解构也可以用于嵌套结构的对象.
console.group('嵌套结构的对象');

    let obj1 = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };

    let { p: [x, { y }] } = obj1;
    console.log("x:" + x) // "Hello"
    console.log("y:" + y) // "World"
    // 注意,这时p是模式,不是变量,因此不会被赋值.


    // 如果p也要作为变量赋值,可以写成下面这样.
    let obj2 = {
        p2: [
            'Hello',
            { y2: 'World' }
        ]
    };

    let { p2, p2: [x2, { y2 }] } = obj2;
    console.log(x2) // "Hello"
    console.log(y2) // "World"
    console.log(p2) // ["Hello", {y: "World"}]

    // 
    var node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };
    var { loc: { start: { line } } } = node;
    console.log("line:" + line) // 1
    /*
        loc  // error: loc is undefined
        start // error: start is undefined
        // 上面代码中,只有line是变量,loc和start都是模式,不会被赋值.
    */

    // 对比
    var node2 = {
        loc2: {
            start2: {
                line2: 1,
                column2: 5
            }
        }
    };
    var { loc2, loc2: { start2 }, loc2: { start2: { line2 } } } = node2;
    console.log("line2:" + line2) // 1
    console.log(loc2) // Object {start: Object}
    console.log(start2) // Object {line: 1, column: 5}
    // 上面代码有三次解构赋值,分别是对loc、start、line三个属性的解构赋值.
    // 注意,最后一次对line属性的解构赋值之中,只有line是变量,loc和start都是模式,不是变量.
console.groupEnd();
console.log("");

console.group('默认值');
    // 1、对象的解构也可以指定默认值.
    // 2、默认值生效的条件是,对象的属性值严格等于undefined.

console.groupEnd();
console.log("");

console.group('注意事项');
    /////////////////////////////////////////////////////////////////////////
    // 如果解构模式是嵌套的对象,而且子对象所在的父属性不存在,那么将会报错. //
    /////////////////////////////////////////////////////////////////////////

    // 报错
    // let {foo: {bar}} = {baz: 'baz'};
    // 上面代码中,等号左边对象的foo属性,对应一个子对象.该子对象的bar属性,解构时会报错.
    // 原因很简单,因为foo这时等于undefined,再取子属性就会报错,请看下面的代码.
    // let _tmp = {baz: 'baz'};
    // _tmp.foo.bar // 报错


    //////////////////////////////////////////////////////////
    // 如果要将一个已经声明的变量用于解构赋值,必须非常小心. //
    //////////////////////////////////////////////////////////
    // 错误的写法
    // let x;
    // {x} = {x: 1};
    // SyntaxError: syntax error
    // 上面代码的写法会报错,因为 JavaScript 引擎会将{x}理解成一个代码块,从而发生语法错误.只有不将大括号写在行首,避免 JavaScript 将其解释为代码块,才能解决这个问题.

    // 正确的写法
    let xk;
    ({xk} = {xk: 1});
    console.log(xk);
    // 上面代码将整个解构赋值语句,放在一个圆括号里面,就可以正确执行.


    /*
        解构赋值允许等号左边的模式之中,不放置任何变量名.因此,可以写出非常古怪的赋值表达式.
        ({} = [true, false]);
        ({} = 'abc');
        ({} = []);
        上面的表达式虽然毫无意义,但是语法是合法的,可以执行.
     */


    ////////////////////////////////////////////////////////////////
    // 对象的解构赋值,可以很方便地将现有对象的方法,赋值到某个变量.//
    ////////////////////////////////////////////////////////////////
    let { log, sin, cos } = Math;
    // 上面代码将Math对象的对数、正弦、余弦三个方法,赋值到对应的变量上,使用起来就会方便很多.


    ////////////////////////////////////////////////////////////////
    // 由于数组本质是特殊的对象,因此可以对数组进行对象属性的解构. //
    ////////////////////////////////////////////////////////////////
    let arr = [1, 2, 3];
    let {0 : first, [arr.length - 1] : last} = arr;
    console.log(first); // 1
    console.log(last); // 3
    // 上面代码对数组进行对象解构.数组arr的0键对应的值是1,[arr.length - 1]就是2键,对应的值是3.
    // 方括号这种写法,属于"属性名表达式",参见《对象的扩展》一章.
console.groupEnd();
console.log("");