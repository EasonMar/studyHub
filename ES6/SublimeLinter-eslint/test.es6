var a = x => x * x;

var b = x => {
	if (x > 0) {
		return x * x;
	} else {
		return -x * x;
	}
};
// ======================================================================================================
var aa = () => 5;
var am = (x, y) => x * x + y * y;
var bm = (x, y, ...rest) => {
	var i, sum = x + y;
	for (i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return sum;
};


// ======================================================================================================
var ao = x => {
	x;
}; // undefined
var bo = x => ({
	foo: x
});

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

// 那这样会如何呢？依旧是【词法作用域】
var objb = {
	birth: 1990,
	getAge: function() {
		var b = this.birth; // 1990
		var fn = () => {
			console.log('这里的this.birth:' + this.birth);
			return new Date().getFullYear() - this.birth;
		}; // this指向obj对象
		return fn();
	}
};

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


// ======================================================================================================
const full = ({ first, last }) => first + ' ' + last;

var p = { first: 1, last: 2 };

var values = [123, 123, 23, 33, 11, 3];

// 箭头函数写法
var result = values.sort((a, b) => a - b);


// ======================================================================================================

const numbers = (...nums) => nums;

const headAndTail = (head, ...tail) => [head, tail];
