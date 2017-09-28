document.getElementById('note').innerHTML = 'rest to name';

console.group('rest参数');
	// ES6引入rest 参数（形式为...变量名）,用于获取函数的多余参数,这样就不需要使用arguments对象了.
	// rest参数搭配的变量是一个【数组】,该变量将多余的参数放入数组中.

	function add(...values) {
	  	let sum = 0;
	  	for (var val of values) {
	  	  	sum += val;
	  	}
	  	return sum;
	}

	console.log(add(2, 5, 3)); // 10
	// 上面代码的add函数是一个求和函数,利用rest参数,可以向该函数传入任意数目的参数.


	// 下面是一个rest参数代替arguments变量的例子.
	// arguments变量的写法
	function sortNumbers() {
		// 因为arguments不是数组,不具有slice方法.
	  	return Array.prototype.slice.call(arguments).sort(); 
	}

	// rest参数的写法
	const sortNumbersR = (...numbers) => numbers.sort();
	// 上面代码的两种写法,比较后可以发现,rest 参数的写法更自然也更简洁.


	// rest参数中的变量代表一个【数组】,所以"数组特有的方法"都可以用于这个变量.
	// 下面是一个利用 rest 参数改写数组push方法的例子.
	function push(array, ...items) {
	  	items.forEach(function(item) {
	  	  	array.push(item);
	  	  	console.log(item);
	  	});
	}
	var a = [];
	push(a, 1, 2, 3)
	console.log(a);


	// 注意,rest 参数之后不能再有其他参数（即只能是最后一个参数）,否则会报错.
	// 报错 - Uncaught SyntaxError: Rest parameter must be last formal parameter
	// function f(a, ...b, c) {
	//   // ...
	// }


	// 函数的length属性,不包括 rest 参数.
	console.log((function(a) {}).length);  // 1
	console.log((function(...a) {}).length);  // 0
	console.log((function(a, ...b) {}).length);  // 1
console.groupEnd();
console.log("");


console.group('严格模式');
	
console.groupEnd();
console.log("");

console.group('name属性');
	// 函数的name属性,返回该函数的函数名.

	function foo() {}
	foo.name // "foo"
	// 这个属性早就被浏览器广泛支持,但是直到 ES6,才将其写入了标准.

	// 需要注意的是,ES6 对这个属性的行为做出了一些修改.
	// 如果将一个匿名函数赋值给一个变量,ES5 的name属性,会返回空字符串,而 ES6 的name属性会返回实际的函数名.

	var f = function () {};

	// ES5
	f.name // ""

	// ES6
	f.name // "f"
	
	// 上面代码中,变量f等于一个匿名函数,ES5 和 ES6 的name属性返回的值不一样.


	// 如果将一个具名函数赋值给一个变量,则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字.
	const bar = function baz() {};

	// ES5
	console.log(bar.name); // "baz"

	// ES6
	console.log(bar.name); // "baz"


	// Function构造函数返回的函数实例,name属性的值为anonymous.
	(new Function).name // "anonymous"


	// bind返回的函数,name属性值会加上bound前缀.
	function foo() {};
	foo.bind({}).name; // "bound foo"
	(function(){}).bind({}).name // "bound "
console.groupEnd();
console.log("");