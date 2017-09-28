document.getElementById('note').innerHTML = 'default';

console.group('函数参数的默认值');
	// ES6 允许为函数的参数设置默认值,即直接写在参数定义的后面.
	function log(x, y = 'World') {console.log(x, y)}

	log('Hello') // Hello World
	log('Hello', 'China') // Hello China
	log('Hello', '') // Hello
	// 可以看到,ES6 的写法比 ES5 简洁许多,而且非常自然.下面是另一个例子.

	function Point(x = 0, y = 0) {
	    this.x = x;
	    this.y = y;
	}

	var p = new Point();
	console.log(p); // { x: 0, y: 0 }

	// 除了简洁,ES6 的写法还有两个好处：
	// 首先,阅读代码的人,可以立刻意识到哪些参数是可以省略的,不用查看函数体或文档;
	// 其次,有利于将来的代码优化,即使未来的版本在对外接口中,彻底拿掉这个参数,也不会导致以前的代码无法运行.

	// 参数变量是默认声明的,所以不能用let或const"再次"声明.
	// function foo(x = 5) {
	//     let x = 1; // error
	//     const x = 2; // error
	// }

	// 上面代码中,参数变量x是默认声明的,在函数体中,不能用let或const再次声明,否则会报错.


	// 使用参数默认值时,函数不能有同名参数.
	// function foo(x, x, y = 1) {
	//     // ...
	// }
	// SyntaxError: Duplicate parameter name not allowed in this context

	// 另外,一个容易忽略的地方是,参数默认值不是传值的,而是每次都重新计算默认值表达式的值.也就是说,参数默认值是惰性求值的.
	let x = 99;
	function foo(p = x + 1) {console.log(p)}

	foo(); // 100
	x = 100;
	foo(); // 101

	// 上面代码中,参数p的默认值是x + 1.这时,每次调用函数foo,都会重新计算x + 1,而不是默认p等于 100.
console.groupEnd();
console.log("");


console.group('【与解构赋值默认值结合使用】');
	// 参数默认值可以与解构赋值的默认值,结合起来使用.   
	// ----- 区分 【函数参数默认值】 和 【解构赋值的默认值】 -----

	function foo1({x, y = 5}) {
		console.log(x, y);
	}
	foo1({}) // undefined, 5
	foo1({x: 1}) // 1, 5
	foo1({x: 1, y: 2}) // 1, 2
	// foo1() // TypeError: Uncaught TypeError: Cannot match against 'undefined' or 'null'.

	// 上面代码使用了"对象的解构赋值默认值",而没有使用函数参数的默认值.
	// 只有当函数foo的参数是一个对象时,变量x和y才会通过"解构赋值"而生成.
	// 如果函数foo调用时参数不是对象,变量x和y就不会生成,从而报错.
	// 如果参数对象没有y属性,y的默认值5才会生效.


	// 下面是另一个"对象的解构赋值默认值"的例子.
	function fetch(url, { body = '', method = 'GET', headers = {} }) {console.log(method)}
	fetch('http://example.com', {}) // "GET"
	// fetch('http://example.com');  // 报错 : FunctionExtension.html:81 Uncaught TypeError: Cannot match against 'undefined' or 'null'.
	// 上面代码中,如果函数fetch的第二个参数是一个对象,就可以为它的三个属性设置默认值.


	// 上面的写法不能省略第二个参数,如果结合"函数参数的默认值",就可以省略第二个参数.这时,就出现了双重默认值.
	function fetch1(url, { method = 'GET' } = {}) {console.log(method)}
	fetch1('http://example.com'); // "GET"
	// 【解析】
	// 上面代码中,函数fetch没有第二个参数时,"函数参数的默认值"就会生效,
	// 然后才是"解构赋值的默认值"生效,变量method才会取到默认值GET.


	// 再请问下面两种写法有什么差别？
	// 写法一
	function m1({x = 0, y = 0} = {}) {return [x, y]}

	// 写法二
	function m2({x, y} = { x: 0, y: 0 }) {return [x, y]}
	// 上面两种写法都对"函数的参数"设定了默认值,区别是:
	// 写法一"函数参数的默认值"是空对象,但是设置了"对象解构赋值的默认值";
	// 写法二"函数参数的默认值"是一个有具体属性的对象,但是没有设置"对象解构赋值的默认值".
	// 区别/输出不同的原因在于:属性的默认值所在地方的不同... 对象解构赋值的默认值 VS 函数参数的默认值

	// 函数没有参数的情况
	console.log(m1()); // [0, 0]
	console.log(m2()); // [0, 0]

	// x和y都有值的情况
	console.log(m1({x: 3, y: 8})); // [3, 8]
	console.log(m2({x: 3, y: 8})); // [3, 8]

	// x有值,y无值的情况
	console.log(m1({x: 3})); // [3, 0]
	console.log(m2({x: 3})); // [3, undefined]  当传入了函数参数时,函数参数的默认值失效...挺绕.

	// x和y都无值的情况
	console.log(m1({})); // [0, 0];
	console.log(m2({})); // [undefined, undefined]

	console.log(m1({z: 3})); // [0, 0]
	console.log(m2({z: 3})); // [undefined, undefined]
console.groupEnd();
console.log("")


console.group('参数默认值的位置');
	// 通常情况下,定义了默认值的参数,应该是函数的尾参数.因为这样比较容易看出来,到底省略了哪些参数.
	// 如果非尾部的参数设置默认值,"实际"上这个参数是没法省略的.

	// 例一
	function f(x = 1, y) {return [x, y]}

	f()  // [1, undefined]
	f(2) // [2, undefined])  	实际省略了第二参数.
	// f(, 1) // 报错  Uncaught SyntaxError: Unexpected token ,
	f(undefined, 1) // [1, 1]

	// 例二
	function f(x, y = 5, z) {return [x, y, z]}

	f()  // [undefined, 5, undefined]
	f(1) // [1, 5, undefined]
	// f(1, ,2) // 报错
	f(1, undefined, 2) // [1, 5, 2]

	// 上面代码中,有默认值的参数都不是尾参数.
	// 这时,【无法只省略该参数,而不省略它后面的参数】,除非显式输入undefined.

	// 如果传入undefined,将触发该参数等于默认值,null则没有这个效果.
	function foo1(x = 5, y = 6) {console.log(x, y)}
	
		// 因为ES6内部使用严格相等运算符（===）,判断一个位置是否有值.
		// 所以,如果一个数组成员不严格等于undefined,默认值是不会生效的.
	
	foo1(undefined, null) // 5 null
	// 上面代码中,x参数对应undefined,结果触发了默认值,y参数等于null,就没有触发默认值.
console.groupEnd();
console.log("")


console.group('函数的 length 属性');
	// 指定了默认值以后,函数的length属性,将返回没有指定默认值的参数个数.
	// 也就是说,指定了默认值后,length属性将失真.
	console.log((function (a) {}).length); // 1
	console.log((function (a = 5) {}).length); // 0
	console.log((function (a, b, c = 5) {}).length); // 2
	// 上面代码中,length属性的返回值,等于函数的参数个数减去指定了默认值的参数个数.
	// 比如,上面最后一个函数,定义了3个参数,其中有一个参数c指定了默认值,因此length属性等于3减去1,最后得到2.

	/* -----------------------------------------------------------
		这是因为length属性的含义是,该函数预期传入的参数个数.
		某个参数指定默认值以后,预期传入的参数个数就不包括这个参数了.
		同理,rest 参数也不会计入length属性.
	 ------------------------------------------------------------*/

	console.log((function(...args) {}).length); // 0
	// 如果设置了默认值的参数不是尾参数,那么length属性也不再计入后面的参数了.

	console.log((function (a = 0, b, c) {}).length); // 0
	console.log((function (a, b = 1, c) {}).length);// 1
console.groupEnd();
console.log("")

console.group('参数默认值-作用域');

	// 一旦设置了参数的默认值,函数进行声明初始化时,参数会形成一个单独的作用域（context）.
	// 等到初始化结束,这个作用域就会消失.这种语法行为,在不设置参数默认值时,是不会出现的.
	var x1 = 1;

	function f1(x1, y = x1) {
	  	console.log(y);
	}

	f1(2); // 2
	// 上面代码中,参数y的默认值等于变量x.调用函数f时,参数形成一个单独的作用域.
	// 在这个作用域里面,默认值变量x指向第一个参数x,而不是全局变量x,所以输出是2.


	// 再看下面的例子.
	let x2 = 1;  // 用let会导致fun报错：Uncaught ReferenceError: x2 is not defined  ----  实际并无报错
	// var x2 = 1; 

	function f2(y = x2) {
	  	let x2 = 2;
	  	console.log(y);
	}

	f2(); // 1
	// 上面代码中,函数f调用时,参数y = x形成一个单独的作用域.
	// 这个作用域里面,变量x本身没有定义,所以指向外层的全局变量x.
	// 函数调用时,函数体内部的局部变量x影响不到默认值变量x.


	// 如果此时,全局变量x不存在,就会报错.
	// function f(y = x3) {
	//   	let x3 = 2;
	//   	console.log(y);
	// }
	// f() // Uncaught ReferenceError: x3 is not defined


	// 下面这样写,也会报错.
	var x4 = 1;
	// function foo2(x4 = x4) {
	//   	// ...
	// }
	// foo2(); // ReferenceError: x4 is not defined

	// 上面代码中,参数x = x形成一个单独作用域.
	// 实际执行的是let x = x,由于暂时性死区的原因,这行代码会报错"x 未定义".
	

	// 如果参数的默认值是一个函数,该函数的作用域也遵守这个规则.请看下面的例子.
	let foo3 = 'outer';
	function bar(func = x => foo3) {
	  	let foo3 = 'inner';
	  	console.log(func());
	}
	bar(); // outer
	// 上面代码中,函数bar的参数func的默认值是一个匿名函数,返回值为变量foo.
	// 函数参数形成的单独作用域里面,并没有定义变量foo,所以foo指向外层的全局变量foo,因此输出outer.


	// 如果写成下面这样,就会报错.
	// function bar1(func = () => foo4) {
	//   	let foo4 = 'inner';
	//   	console.log(func());
	// }
	// bar1() // ReferenceError: foo is not defined
	// 上面代码中,匿名函数里面的foo指向函数外层,但是函数外层并没有声明变量foo,所以就报错了.


	// 下面是一个更复杂的例子.
	var x5 = 1;
	function foo4(x5, y = function() { x5 = 2; }) {
	  	var x5 = 3;
	  	y();
	  	console.log(x5);
	}

	foo4(); // 3
	console.log("x5:"+x5); // 1
	// 上面代码中,函数foo的参数形成一个单独作用域.
	// 这个作用域里面,首先声明了变量x,然后声明了变量y,y的默认值是一个匿名函数.
	// 这个匿名函数内部的变量x,指向同一个作用域的第一个参数x.
	// 函数foo内部又声明了一个内部变量x,该变量与第一个参数x由于不是同一个作用域,
	// 所以不是同一个变量,因此执行y后,内部变量x和外部全局变量x的值都没变.


	// 如果将var x = 3的var去除,函数foo的内部变量x就指向第一个参数x,
	// 与匿名函数内部的x是一致的,所以最后输出的就是2,而外层的全局变量x依然不受影响.
	var x6 = 1;
	function foo5(x6, y = function() { x6 = 2; }) {
	  	x6 = 3;
	  	y();
	  	console.log(x6);
	}
	foo5(); // 2
	console.log("x6:"+x6); // 1
console.groupEnd();
console.log("")

console.group('应用');
	// 利用参数默认值,可以指定某一个参数不得省略,如果省略就抛出一个错误.
	function throwIfMissing() {
	  	throw new Error('Missing parameter');
	}

	function foo6(mustBeProvided = throwIfMissing()) {
	  	return mustBeProvided;
	}

	// foo6(); // Error: Missing parameter
	// 上面代码的foo函数,如果调用的时候没有参数,就会调用默认值throwIfMissing函数,从而抛出一个错误.

	// 从上面代码还可以看到,参数mustBeProvided的默认值等于throwIfMissing函数的运行结果（注意函数名throwIfMissing之后有一对圆括号）,
	// 这表明参数的默认值不是在定义时执行,而是在运行时执行.如果参数已经赋值,默认值中的函数就不会运行.


	// 另外,可以将参数默认值设为undefined,表明这个参数是可以省略的.
	function foo7(optional = undefined) { 
		// ··· 
	}
console.groupEnd();
console.log("")