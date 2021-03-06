document.getElementById('note').innerHTML = 'Arrow Function';


// ======================================================================================================
console.group('省略{}和return');

    // 以下箭头函数相当于function (x) { return x * x; }
    var a = x => x * x;
    console.log("x => x * x : " + a(4));
console.groupEnd();
console.log("");

// ================================================
console.group('不能省略{}和return; ' + '如果箭头函数的代码块部分多于一条语句,就要使用大括号将它们括起来,' + '当存在{}时,如果要返回内容,就要用return了');

    var b = x => {
        if (x > 0) {
            return x * x;
        } else {
            return -x * x;
        }
    }
    console.log("b(10):" + b(10));
    console.log("b(-10):" + b(-10));
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('无参、多个参数、rest参数');
    var aa = () => 5;
    console.log("() => 5   ~   " + aa());
    var am = (x, y) => x * x + y * y;
    console.log("(x, y) => x * x + y * y   ~   " + am(2, 3));
    var bm = (x, y, ...rest) => {
        var i, sum = x + y;
        for (i = 0; i < rest.length; i++) {
            sum += rest[i];
        }
        return sum;
    }
    console.log("(x, y, ...rest)   ~   " + bm(1, 2, 3, 4, 5));
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('返回一个对象--如果是这个对象是表达式,需要注意加括号');
    var ao = x => {
        foo: x
    }; // undefined
    var bo = x => ({
        foo: x
    });
    console.log(ao(3));
    console.log(bo(3));
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('this的变更');

    // 箭头函数看上去是匿名函数的一种简写,但实际上,箭头函数和匿名函数有个明显的区别:
    var objo = {
        birth: 1990,
        getAge: function() {
            var b = this.birth; // 1990
            var fn = function() {
                return new Date().getFullYear() - this.birth; // this指向window或undefined
            };
            return fn();
        }
    };
    console.log("objo.getAg   ~   " + objo.getAge()); // NaN,因为这里的this指向window或undefined

    // 箭头函数内部的this是【词法作用域】,由上下文确定.
    // 词法作用域意味着 [ 作用域 ] 是由书写代码时 [ 函数声明的位置 ] 来决定的.
    var obja = {
        birth: 1990,
        getAge: function() {
            var b = this.birth; // 1990
            var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
            return fn();
        }
    };
    console.log("obja.getAg   ~   " + obja.getAge());

    // 那这样会如何呢？依旧是【词法作用域】
    var objb = {
        birth: 1990,
        getAge: function() {
            var b = this.birth; // 1990
            var fn = () => {
                console.log('这里的this.birth:'+ this.birth);
                return new Date().getFullYear() - this.birth;
            } // this指向obj对象
            return fn();
        }
    };
    console.log("objb.getAg   ~   " + objb.getAge());

    // 由于this在箭头函数中已经按照词法作用域绑定了,
    // 所以,用call()或者apply()调用箭头函数时,无法对this进行绑定,即传入的第一个参数被忽略？
    var objc = {
        birth: 1990,
        getAge: function(year) {
            var b = this.birth; // 1990
            var fn = (y) => y - this.birth; // this.birth仍是1990
            return fn.call({
                birth: 2000
            }, year); // 妄图传入{birth: 2000}对象使this指向{birth: 2000} - -!
        }
    };
    console.log("objc.getAge(2015)   ~   " + objc.getAge(2015)); // 25
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('箭头函数可以与变量解构结合使用');
    const full = ({ first, last }) => first + ' ' + last;

    // 等同于
    // function full(person) {return person.first + ' ' + person.last; }
    var p = {first:1,last:2};
    console.log( full(p) );
console.groupEnd();
console.log("");

// ======================================================================================================
console.group('箭头函数的一个用处是简化回调函数');

    // 正常函数写法
    // [1,2,3].map(function (x) {
    //     return x * x;
    // });

    // 箭头函数写法
    console.log( [1,2,3].map(x => x * x) );

    // =================================================
    // 另一个例子
    var values = [123,123,23,33,11,3];
    // 正常函数写法
    // var result = values.sort(function (a, b) {
    //   return a - b;
    // });

    // 箭头函数写法
    var result = values.sort((a, b) => a - b);
    console.log( result );
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('下面是rest参数与箭头函数结合的例子');

    const numbers = (...nums) => nums;
    console.log(numbers(1, 2, 3, 4, 5));   // [1,2,3,4,5]

    const headAndTail = (head, ...tail) => [head, tail];
    console.log(headAndTail(1, 2, 3, 4, 5)) // [1,[2,3,4,5]]
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('使用注意点');

    /*箭头函数有几个使用注意点.

    （1）函数体内的this对象,就是 [ 定义时所在的对象 ] ,而不是使用时所在的对象.(不管有无大括号)
    （2）不可以当作构造函数,也就是说,不可以使用new命令,否则会抛出一个错误.
    （3）不可以使用arguments对象,该对象在函数体内不存在.如果要用,可以用 rest 参数代替.
    （4）不可以使用yield命令,因此箭头函数不能用作 Generator 函数.

    上面四点中,第一点尤其值得注意.[ this对象的指向是可变的,但是在箭头函数中,它是固定的. ] */
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);
        }, 100);
    }
    var id = 21;
    foo.call({ id: 42 });
    /*
        上面代码中,setTimeout的参数是一个箭头函数,这个箭头函数的定义生效是在foo函数生成时,
        而它的真正执行要等到100毫秒后.如果是普通函数,执行时this应该指向全局对象window,
        这时应该输出21.但是,箭头函数导致this总是指向函数定义生效时所在的对象(本例是{id: 42}),
        所以输出的是42.
        箭头函数可以让setTimeout里面的this,绑定定义时所在的作用域,而不是指向运行时所在的作用域.
     */

    // 另一个例子
    function Timer() {
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数
        setInterval(() => this.s1++, 1000);
        // 普通函数
        setInterval(function () {
            this.s2++;
        }, 1000);
    }
    var timer = new Timer();
    setTimeout(() => console.log('s1: ', timer.s1), 3100);
    setTimeout(() => console.log('s2: ', timer.s2), 3100);
    /*
        上面代码中,Timer函数内部设置了两个定时器,分别使用了箭头函数和普通函数.
        前者的this绑定定义时所在的作用域(即Timer函数),后者的this指向运行时所在的作用域(即全局对象).
        所以,3100毫秒之后,timer.s1被更新了3次,而timer.s2一次都没更新.
     */

    // =========================================================
    // 
    /*
        箭头函数可以让this指向固定化,这种特性很有利于封装回调函数.
        下面是一个例子,DOM 事件的回调函数封装在一个对象里面.
     */
    var handler = {
        id: '123456',
        init: function() {
            document.addEventListener('click',
            event => this.doSomething(event.type), false);
        },
        doSomething: function(type) {
            console.log('Handling ' + type  + ' for ' + this.id);
        }
    };
    /*
        上面代码的init方法中,使用了箭头函数,这导致这个箭头函数里面的this,总是指向handler对象.
        否则,回调函数运行时,this.doSomething这一行会报错,因为此时this指向document对象.
     */
    handler.init();

    // =========================================================
    // =========================================================
    // =========================================================

    /*
        this指向的固定化,并不是因为箭头函数内部有绑定this的机制,
        实际原因是箭头函数根本没有自己的this,导致内部的this就是外层代码块的this.
        正是因为它没有this,所以也就不能用作构造函数.
     */

    // =========================================================
    // =========================================================
    // =========================================================
    // 请问下面的代码之中有几个this？

    function foo() {
      return () => {
        return () => {
          return () => {
            console.log('id:', this.id);
          };
        };
      };
    }

    var f = foo.call({id: 1});

    var t1 = f.call({id: 2})()(); // id: 1
    var t2 = f().call({id: 3})(); // id: 1
    var t3 = f()().call({id: 4}); // id: 1
    // 上面代码之中,只有一个this,就是函数foo的this,所以t1、t2、t3都输出同样的结果.
    // 因为所有的内层函数都是箭头函数,都没有自己的this,它们的this其实都是最外层foo函数的this.
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('嵌套的箭头函数');
    // 箭头函数内部,还可以再使用箭头函数.下面是一个 ES5 语法的多重嵌套函数.

    // 把多个操作分派给不同的函数层面,并且可以链式操作！---新颖！！！！
    function insert(value) {
      return {into: function (array) {
        return {after: function (afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value);   
          return array;
        }};
      }};
    }
    /*
        复习splice:
        语法:arrayObject.splice(index,howmany,item1,.....,itemX)
        index   必需.整数,规定添加/删除项目的位置,使用负数可从数组结尾处规定位置.
        howmany 必需.要删除的项目数量.如果设置为 0,则不会删除项目.
        item1, ..., itemX   可选.向数组添加的新项目.
    */

    console.log(insert(2).into([1, 3]).after(1)); //[1, 2, 3]

    // 上面这个函数,可以使用箭头函数改写.
    let insertA = (value) => ({into: (array) => ({after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }})});

    console.log(insertA(2).into([1, 3]).after(1)); //[1, 2, 3]


    // 下面是一个部署管道机制（pipeline）的例子,即前一个函数的输出是后一个函数的输入. (这里:plus的输出是mult的输入)
    const pipeline = (...funcs) =>
        val => funcs.reduce((a, b) => b(a), val);
    /*
        ES5翻译：
        function pipeline(){
            var _arg = arguments;
            return function(val){
                _arg.reduce(function(a,b){return b(a)},val)
            }
        }
    */

    const plus1 = a => a + 1;
    const mult2 = a => a * 2;
    const addThenMult = pipeline(plus1, mult2);

    /*
        ES5翻译：
        addThenMult = function(val){
            [plus1,mult2].reduce(function(a,b){return b(a)},val)
        }

        // 这里有val这个初始值,所以最终计算过程是: mult2(plus1(val));
        
    */

    addThenMult(5) // 12

    /*
        复习reduce：array1.reduce(callbackfn[, initialValue])
        Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上,这个函数必须接收两个参数,
        reduce()把结果继续和序列的下一个元素做累积计算,其效果就是：
        [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
        如果指定 initialValue,则它将用作初始值来启动累积.第一次调用 callbackfn 函数会将此值作为参数而非数组值提供.
    */

    // 如果觉得上面的写法可读性比较差,也可以采用下面的写法.

    const plus1A = a => a + 1;
    const mult2A = a => a * 2;

    mult2A(plus1A(5)) // 12


    // 箭头函数还有一个功能,就是可以很方便地改写λ演算.

    // λ演算的写法
    // fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

    // ES6的写法
    var fix = f => (x => f(v => x(x)(v)))
                   (x => f(v => x(x)(v)));
    // 上面两种写法,几乎是一一对应的.由于λ演算对于计算机科学非常重要,这使得我们可以用ES6作为替代工具,探索计算机科学.
console.groupEnd();
console.log("");


// ======================================================================================================
// 以下内容需事先复习call-bind-apply 的内容
console.group('绑定this,新东西,ES7提案,浏览器尚不支持');
    /*
        箭头函数可以绑定this对象,大大减少了显式绑定this对象的写法（call、apply、bind）.
        但是,箭头函数并不适用于所有场合,所以ES7提出了“函数绑定”（function bind）运算符,
        用来取代call、apply、bind调用.虽然该语法还是ES7的一个提案,但是Babel转码器已经支持.
     */

    // 函数绑定运算符是并排的两个冒号（::）,双冒号左边是一个对象,右边是一个函数.
    // 该运算符会自动将左边的对象,作为上下文环境（即this对象）,绑定到右边的函数上面.
    // foo::bar;  等同于 bar.bind(foo);
    // foo::bar(...arguments); 等同于 bar.apply(foo, arguments);

    const hasOwnProperty = Object.prototype.hasOwnProperty;
    // 借用Object.prototype的hasOwnProperty方法！
    function hasOwn(obj, key) {
        // return obj::hasOwnProperty(key);
    }

    // 如果双冒号左边为空,右边是一个对象的方法,则等于将该方法绑定在该对象上面.
    // var method = obj::obj.foo;  等同于 var method = ::obj.foo; 
    // let log = ::console.log;  等同于 var log = console.log.bind(console);


    // 由于双冒号运算符返回的还是原对象,因此可以采用链式写法.
    // 例一
    // import { map, takeWhile, forEach } from "iterlib";

    // getPlayers()
    // ::map(x => x.character())
    // ::takeWhile(x => x.strength > 100)
    // ::forEach(x => console.log(x));

    // 例二
    // let { find, html } = jake;

    // document.querySelectorAll("div.myClass")
    // ::find("p")
    // ::html("hahaha");
console.groupEnd();
console.log("");