document.getElementById('note').innerHTML = 'simplify_name';

// ======================================================================================================
console.group('属性的简洁表示法');
var foo = 'bar';
var baz = {foo};
console.log(baz); // {foo: "bar"}

// 等同于 var baz = {foo: foo};
// 上面代码表明,ES6 允许在对象之中,直接写变量.这时,属性名为变量名, 属性值为变量的值.下面是另一个例子.
function f(x, y) {return {x, y}; };
console.log(f(1, 2)); // Object {x: 1, y: 2}
// 等同于
// function f(x, y) {
//   return {x: x, y: y};
// }


// 除了属性简写,方法也可以简写.
var o = {
  	method() {
    	return "Hello!";
  	}
};
console.log(o.method);
// 等同于
// var o = {
//   method: function() {
//     return "Hello!";
//   }
// };


// 这种写法用于函数的返回值,将会非常方便.
function getPoint() {
  var x = 1;
  var y = 10;
  return {x, y};
}
console.log(getPoint()); // {x:1, y:10}


// 注意,简洁写法的属性名总是字符串,这会导致一些看上去比较奇怪的结果.
var obj = {
  class () {}
};
console.log(obj.class);

// 等同于
// var obj = {
//   'class': function() {}
// };

// 上面代码中,class是字符串,所以不会因为它属于关键字,而导致语法解析报错.


// 如果某个方法的值是一个Generator(?)函数,前面需要加上星号.
var obj = {
  * m(){
    yield 'hello world';
  }
};

console.groupEnd();
console.log("");


// ======================================================================================================
console.group('属性名表达式');

// ES6 允许字面量定义对象时,用方法二（表达式）作为对象的属性名,即把表达式放在方括号内.
let propKey = 'foo';
let objA = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
console.log(objA);

// 下面是另一个例子.
var lastWord = 'last word';
var a = {
  'first word': 'hello',
  [lastWord]: 'world'
};
console.log(a['first word']); // "hello"
console.log(a[lastWord]); // "world"
console.log(a['last word']); // "world"

// 表达式还可以用于定义方法名.
let objB = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
console.log(objB.hello()); // hi


// 注意,属性名表达式与简洁表示法,不能同时使用,会报错.
	// 报错
	// var foo = 'bar';
	// var bar = 'abc';
	// var baz = { [foo] };

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'}; 
console.log(baz); // Object {bar: "abc"}

// 注意,属性名表达式如果是一个对象,默认情况下会自动将对象转为字符串[object Object],这一点要特别小心.
const keyA = {a: 1};
const keyB = {b: 2};
const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
console.log(myObject) // Object {[object Object]: "valueB"}
// 上面代码中,[keyA]和[keyB]得到的都是[object Object],所以[keyB]会把[keyA]覆盖掉,而myObject最后只有一个[object Object]属性.

console.groupEnd();
console.log("");


// ======================================================================================================
console.group("方法的 name 属性")
// 函数的name属性,返回函数名.对象方法也是函数,因此也有name属性.
const person = {
  sayName() {
    console.log('hello!');
  },
};
console.log(person.sayName.name);   // "sayName"
// 上面代码中,方法的name属性返回函数名（即方法名）.

console.groupEnd();
console.log("");