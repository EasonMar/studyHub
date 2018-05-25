// 由于类的方法都定义在prototype对象上面,所以类的新方法可以添加在prototype对象上面. 

class Point {
    constructor() {
        // ...
    }
}

// Object.assign方法,用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
// 因此Object.assign方法可以很方便地一次向类添加多个方法. 

Object.assign(Point.prototype, {
    toString() {
        alert('toString');
    },
    toValue() {
        alert('toValue');
    }
});



/**************************************************
 * 类的内部所有定义的方法,都是不可枚举的(non-enumerable).  
	class Point {
	  constructor(x, y) {
	     // ...
	  }

	  toString() {
	     // ...
	  }
	}

	Object.keys(Point.prototype) // []

	Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString"]

 **上面代码中,toString方法是Point类内部定义的方法,它是不可枚举的. 这一点与 ES5 的行为不一致. 


 **************************************************
	var Point = function (x, y) {
	   // ...
	};

	Point.prototype.toString = function() {
	   // ...
	};

	Object.keys(Point.prototype)  // ["toString"]

	Object.getOwnPropertyNames(Point.prototype)  // ["constructor","toString"]  
	// ------------------ 再次提醒：ES5中,类本身也是有constructor方法的！

 ***上面代码采用 ES5 的写法,toString方法就是可枚举的. 
 */


/**************************
 * 严格模式 
 * 类和模块的内部,默认就是严格模式,所以不需要使用use strict指定运行模式. 
 * 只要你的代码写在类或模块之中,就只有严格模式可用.  
 * 
 * 考虑到未来所有的代码,其实都是运行在模块之中,所以 ES6 实际上把整个语言升级到了严格模式. 
 */



/**************************
 * Class 表达式
 * 与函数一样,类也可以使用表达式的形式定义.
 */
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
/**
 * 上面代码使用表达式定义了一个类.
 * 需要注意的是,这个类的名字(标识符)是MyClass而不是Me,Me只在 Class 的内部代码可用,指代当前类.
 */
let inst = new MyClass();
inst.getClassName() // Me

// 注意...这应该等同于Me.name
MyClass.name // Me

// Me.name // ReferenceError: Me is not defined

/**
 * 上面代码表示,Me只在 Class 内部有定义.
 *
 * 如果类的内部没用到的话,可以省略Me,也就是可以写成下面的形式.
 * const MyClass = class { ... };
 * 此时 MyClass.name === 'MyClass'
 */

/**
 * 采用 Class 表达式,可以写出立即执行的 Class.
 */
let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName(); // "张三"



/****************************************************
 * 类不存在变量提升(hoist),这一点与 ES5 完全不同.
 * new Foo(); // ReferenceError
 * class Foo {}
 *
 * 上面代码中,Foo类使用在前,定义在后,这样会报错,因为 ES6 不会把类的声明提升到代码头部.
 * 这种规定的原因与下文要提到的继承有关,【必须保证子类在父类之后定义】.
 */
{
    let Foo = class {};
    class Bar extends Foo {}
}
/**
 * 上面的代码不会报错,因为Bar继承Foo的时候,Foo已经有定义了.
 * 但是,如果存在class的提升,上面代码就会报错,
 * 因为class会被提升到代码头部,而let命令是不提升的,所以导致Bar继承Foo的时候,Foo还没有定义.
 */


/******************************************************
 * 私有方法是常见需求,但 ES6 不提供,只能通过变通方法模拟实现. 
 * 与私有方法一样,ES6 不支持私有属性. 
 */



/************************************************************
 * this 的指向
 * 类的方法内部如果含有this,它默认指向类的实例. 但是,必须非常小心,一旦单独使用该方法,很可能报错. 
	class Logger {
	    printName(name = 'there') {
	        this.print(`Hello ${name}`);
	    }

	    print(text) {
	        console.log(text);
	    }
	}

	const logger = new Logger();
	const { printName } = logger;
	printName(); // TypeError: Cannot read property 'print' of undefined
 *
 * 上面代码中,printName方法中的this,默认指向Logger类的实例. 
 * 但是,如果将这个方法提取出来【单独使用】,this会指向该方法运行时所在的环境,因为找不到print方法而导致报错. 
 *
 * 一个比较简单的解决方法是,在构造方法中绑定this,这样就不会找不到print方法了. 
 * 另一种解决方法是使用箭头函数. 
 * 还有一种解决方法是使用Proxy,获取方法的时候,自动绑定this. 
 */



/**************************************************
 * 由于本质上,ES6 的类只是 ES5 的构造函数的一层包装,所以函数的许多特性都被Class继承,包括name属性. 
 * name属性总是返回紧跟在class关键字后面的类名. 
 */


/**************************************************
 * Class 的取值函数(getter)和存值函数(setter)
 * 与 ES5 一样,在“类”的内部可以使用get和set关键字,对【某个属性】设置存值函数和取值函数,拦截该属性的存取行为. 
 * 下面代码中,prop属性有对应的存值函数和取值函数,因此赋值和读取行为都被自定义了. 
 */
class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

let inst = new MyClass();

inst.prop = 123; // setter: 123

inst.prop; // 'getter'

// 存值函数和取值函数是设置在属性的 Descriptor 对象上的


/**
 * Class 的静态方法
 * 类相当于实例的原型,所有在类中定义的方法,都会被实例继承. 
 * 如果在一个方法前,加上static关键字,就表示该方法不会被实例继承,而是直接通过类来调用,这就称为“静态方法”. 
 */

class FooStatic {
    static classMethod() {
        return 'hello';
    }
}

FooStatic.classMethod() // 'hello'  
// ---- 注意,与"类必须使用new调用,否则会报错"这个特性区别开来！
// 所以Foo.classMethod()不会报错,而Foo()会报错.

var foo = new FooStatic();
// foo.classMethod() // TypeError: foo.classMethod is not a function
/**
 * 上面代码中,Foo类的classMethod方法前有static关键字,表明该方法是一个静态方法,
 * 可以直接在Foo类上调用(Foo.classMethod()),而不是在Foo类的实例上调用.
 * 如果在实例上调用静态方法,会抛出一个错误,表示不存在该方法.
 *
 * 
 * 注意,如果静态方法包含this关键字,这个this指的是类,而不是实例.
 */
class FooThis {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('hello');
    }
    baz() {
        console.log('world');
    }
}

FooThis.bar() // hello
/**
 * 上面代码中,静态方法bar调用了this.baz,这里的this指的是Foo类,而不是Foo的实例,等同于调用Foo.baz.
 * 另外,从这个例子还可以看出,静态方法可以与非静态方法重名.
 *
 * 父类的静态方法,可以被子类继承.
 */
class FooExtend {
    static classMethod() {
        return 'hello';
    }
}

class BarExtend extends FooExtend {}

BarExtend.classMethod() // 'hello'
/**
 * 上面代码中,父类Foo有一个静态方法,子类BarExtend可以调用这个方法.
 *
 * 静态方法也是可以从super对象上调用的.
 */
class FooSuper {
    static classMethod() {
        return 'hello';
    }
}

class BarSuper extends FooSuper {
    static classMethod() {
        return super.classMethod() + ', too';
    }
}

BarSuper.classMethod() // "hello, too"


/**
 * new.target 属性
 *
 * ES6 为new命令引入了一个new.target属性,该属性一般用在构造函数之中,返回new命令作用于的那个构造函数.
 * 如果构造函数不是通过new命令调用的,new.target会返回undefined,因此这个属性可以用来确定构造函数是怎么调用的.
 *
 * Class 内部调用new.target,返回当前 Class.
 * 需要注意的是,子类继承父类时,new.target会返回子类.
 * 利用这个特点,可以写出不能独立使用、必须继承后才能使用的类.
 */