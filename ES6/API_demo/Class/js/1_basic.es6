// ES5
/**
 * 构造函数
 * function Point(x, y) {
 *    this.x = x;
 *    this.y = y;
 * }
 * 
 * 类方法
 * Point.prototype.toString = function () {
 *    return '(' + this.x + ', ' + this.y + ')';
 * };
 * 
 * var p = new Point(1, 2);
 */

/********************************************
 * ES6 提供了更接近传统语言的写法,引入了 Class(类)这个概念,作为对象的模板. 
 * 通过class关键字,可以定义类. 
 * 基本上,ES6 的class可以看作只是一个语法糖,它的绝大部分功能,ES5 都可以做到,
 * 新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已. 
 * 上面的代码用 ES6 的class改写,就是下面这样. 
 */

//定义类
class Point {
    // 构造方法 - 对应ES5的Point函数
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
/**
 * 上面代码定义了一个“类”,可以看到里面有一个constructor方法,这就是构造方法,
 * 而this关键字则代表实例对象. 也就是说,ES5 的构造函数Point,对应 ES6 的Point类的构造方法. 
 *
 * Point类除了构造方法,还定义了一个toString方法. 
 * 注意,定义“类”的方法的时候,前面不需要加上function这个关键字,直接把函数定义放进去了就可以了. 
 * 另外,方法之间不需要逗号分隔,加了会报错. 
 */


// ES6 的类,完全可以看作构造函数的另一种写法. 

typeof Point; // "function"
Point === Point.prototype.constructor; // true

// 上面代码表明,类的数据类型就是函数,类本身就指向构造函数. 



/********************************************
 * 构造函数的prototype属性,在 ES6 的“类”上面继续存在. 
 * 事实上,类的所有方法都定义在类的prototype属性上面. 
 *
 * class Point {
 *	  constructor() {
 *	    // ...
 *	  }
 *
 *	  toString() {
 *	    // ...
 *	  }
 *
 *	  toValue() {
 *	    // ...
 *	  }
 *	}
 *
 *	// 等同于
 *
 *	Point.prototype = {
 *	  constructor() {},  // ？？ 对于constructor放于这里表示疑问...
 *	  toString() {},
 *	  toValue() {},
 *	};
 */


// 在类的实例上面调用方法,其实就是调用原型(prototype) 上的方法. *********************
class B {}
let b = new B();
b.constructor === B.prototype.constructor; // true

// 上面代码中, b是B类的实例, 它的constructor方法就是B类原型的constructor方法. 


/**
 * prototype对象的constructor属性,直接指向“类”的本身,这与 ES5 的行为是一致的.  
 * 
 * Point.prototype.constructor === Point // true
 */


// 类的属性名,可以采用表达式. *********************
let methodName = 'getArea';
class Square {
    constructor(length) {
        // ...
    }

    [methodName]() {
        // ...
    }
}
// 上面代码中,Square类的方法名getArea,是从表达式得到的. 



/******************************************************************
 * constructor方法是类的默认方法,通过new命令生成对象实例时,自动调用该方法. 
 * 一个类必须有constructor方法,如果没有显式定义,一个空的constructor方法会被默认添加. 
 * 
	class Point {
	}

	// 等同于
	class Point {
	  constructor() {}
	}
 *
 * constructor方法默认返回实例对象(即this),完全可以指定返回另外一个对象. 
 *
 * 类必须使用new调用,否则会报错. 这是它跟普通构造函数的一个主要区别,后者不用new也可以执行. 
 */


/******************************************************************
 * 与 ES5 一样,实例的属性除非显式定义在其本身(即定义在this对象上),否则都是定义在原型上(即定义在class上). 
 */
//定义类
class PointT {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var pointT = new PointT(2, 3);

pointT.toString() // (2, 3)
pointT.hasOwnProperty('x') // true
pointT.hasOwnProperty('y') // true
pointT.hasOwnProperty('toString') // false
pointT.__proto__.hasOwnProperty('toString') // true
/**
 * 上面代码中,x和y都是实例对象point自身的属性(因为定义在this变量上),所以hasOwnProperty方法返回true,
 * 而toString是原型对象的属性(因为定义在Point类上),所以hasOwnProperty方法返回false. 
 * 这些都与 ES5 的行为保持一致. 
 *
 * 与 ES5 一样,类的所有实例共享一个原型对象. 
	var p1 = new Point(2,3);
	var p2 = new Point(3,2);

	p1.__proto__ === p2.__proto__ // true
 *
 * 上面代码中,p1和p2都是Point的实例,它们的原型都是Point.prototype,所以__proto__属性是相等的. 
 * 这也意味着,可以通过实例的__proto__属性为“类”添加方法. 
 * 使用实例的__proto__属性改写原型,必须相当谨慎,不推荐使用,因为这会改变“类”的原始定义,影响到所有实例. 

 * __proto__ 并不是语言本身的特性,这是各大厂商具体实现时添加的私有属性,
 * 虽然目前很多现代浏览器的JS引擎中都提供了这个私有属性,但依旧不建议在生产中使用该属性,避免对环境产生依赖. 
 * 生产环境中,我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型,然后再来为原型添加方法/属性. 
 */