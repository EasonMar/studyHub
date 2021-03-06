/**
 * 类的 prototype 属性和__proto__属性
 * 
 * 大多数浏览器的 ES5 实现之中,每一个对象都有__proto__属性,指向对应的【构造函数的prototype属性】. 
 * Class 作为构造函数的语法糖,同时有prototype属性和__proto__属性,因此同时存在两条继承链. 
 * (1)子类的__proto__属性,表示【构造函数的继承】,总是指向父类. 
 * (2)子类prototype属性的__proto__属性,表示【方法的继承】,总是指向父类的prototype属性. 
 */
class A {}

class B extends A {}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
/**
 * 上面代码中,子类B的__proto__属性指向父类A,子类B的prototype属性的__proto__属性指向父类A的prototype属性. 
 *
 * 这样的结果是因为,类的继承是按照下面的模式实现的. 
	class A {} 
	class B {} 
	// B 的实例继承 A 的实例
	Object.setPrototypeOf(B.prototype, A.prototype); 
	// B 的实例继承 A 的静态属性
	Object.setPrototypeOf(B, A); 
	const b = new B();
 * 
 * 《对象的扩展》一章给出过Object.setPrototypeOf方法的实现. 
	Object.setPrototypeOf = function (obj, proto) {
	  obj.__proto__ = proto;
	  return obj;
	}
 *
 * 因此,就得到了上面的结果. 
	Object.setPrototypeOf(B.prototype, A.prototype);
	// 等同于
	B.prototype.__proto__ = A.prototype;

	Object.setPrototypeOf(B, A);
	// 等同于
	B.__proto__ = A;
 *
 * 这两条继承链,可以这样理解：
 * 作为一个对象,子类(B)的原型(__proto__属性)是父类(A)；
 * 作为一个构造函数,子类(B)的原型对象(prototype属性)是父类的原型对象(prototype属性)的实例. 
	Object.create(A.prototype);
	// 等同于
	B.prototype.__proto__ = A.prototype;
 */



/**
 * extends 的继承目标
 *
 * extends关键字后面可以跟多种类型的值. 
	class B extends A {}
 * 上面代码的A,只要是一个有prototype属性的函数,就能被B继承. 
 * 由于函数都有prototype属性(除了Function.prototype函数),因此A可以是任意函数. 
 *
 * 下面,讨论三种特殊情况.  
 * 第一种特殊情况,子类继承Object类. 
	class A extends Object {} 
	A.__proto__ === Object // true
	A.prototype.__proto__ === Object.prototype // true

 * 这种情况下,A其实就是构造函数Object的复制,A的实例就是Object的实例. 
 *
 * 第二种特殊情况,不存在任何继承. 
	class A {}
	A.__proto__ === Function.prototype // true
	A.prototype.__proto__ === Object.prototype // true

 * 这种情况下,A作为一个基类(即不存在任何继承),就是一个普通函数,所以直接继承Function.prototype. 
 * 但是,A调用后返回一个空对象(即Object实例),所以A.prototype.__proto__指向构造函数(Object)的prototype属性. 
 *
 * 第三种特殊情况,子类继承null. 
	class A extends null {}
	A.__proto__ === Function.prototype // true
	A.prototype.__proto__ === undefined // true

 * 这种情况与第二种情况非常像. A也是一个普通函数,所以直接继承Function.prototype. 
 * 但是,A调用后返回的对象不继承任何方法,所以它的__proto__指向Function.prototype,即实质上执行了下面的代码. 
	class C extends null {
	  constructor() { return Object.create(null); }
	}
 */


/**
 * 实例的 __proto__ 属性
 *
 * 子类实例的__proto__属性的__proto__属性,指向父类实例的__proto__属性. 
 * 也就是说,子类的原型的原型,是父类的原型(爷类). 
 * ---- 因为前面有讲,子类的__proto__属性就是父类 -- 子类实例的__proto__属性就是父类实例. 

	var p1 = new Point(2, 3);
	var p2 = new ColorPoint(2, 3, 'red');

	p2.__proto__ === p1.__proto__; // false
	p2.__proto__.__proto__ === p1.__proto__; // true

 * 上面代码中,ColorPoint继承了Point,导致前者原型的原型是后者的原型. 
 * 
 * 因此,通过【子类】实例的__proto__.__proto__属性,可以【修改父类】实例的行为. 
 
	p2.__proto__.__proto__.printName = function () {
	  console.log('Ha');
	};

	p1.printName() // "Ha"

 * 上面代码在ColorPoint的实例p2上向Point类添加方法,结果影响到了Point的实例p1. 
 */


/**
 * 原生构造函数的继承
 * 原生构造函数是指语言内置的构造函数,通常用来生成数据结构. ECMAScript 的原生构造函数大致有下面这些. 
 	Boolean()
	Number()
	String()
	Array()
	Date()
	Function()
	RegExp()
	Error()
	Object()
 *
 * 以前,这些原生构造函数是无法继承的,因为子类无法获得原生构造函数的内部属性,
 * 通过Array.apply()或者分配给原型对象都不行. 
 * 原生构造函数会忽略apply方法传入的this,也就是说,原生构造函数的this无法绑定,导致拿不到内部属性. 
 */


/**
 * Mixin 模式的实现
 * Mixin 模式指的是,将多个类的接口“混入”(mix in)另一个类. 它在 ES6 的实现如下. 
 */
function mix(...mixins) {
    class Mix {}

    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }

    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor" &&
            key !== "prototype" &&
            key !== "name"
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
// 上面代码的mix函数,可以将多个对象合成为一个类. 使用的时候,只要继承这个类即可. 
class DistributedEdit extends mix(Loggable, Serializable) {
    // ...
}