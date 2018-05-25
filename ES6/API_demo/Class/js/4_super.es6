/****************************************
 * super 关键字
 *
 * super这个关键字,既可以当作函数使用,也可以当作对象使用.在这两种情况下,它的用法完全不同.
 *
 *
 ****************************************
 * 第一种情况,super作为函数调用时,代表【父类的构造函数】.ES6 要求,子类的构造函数必须执行一次super函数.
	class A {}

	class B extends A {
	  constructor() {
	    super(); -------- 当super作为函数用的时候,代表父类构造函数,这里相当于ES5中的A.call(this)
	  }
	}
 * 上面代码中,子类B的构造函数之中的super(),代表调用【父类的构造函数】.这是必须的,否则 JavaScript 引擎会报错.
 * 注意,super虽然代表了父类A的构造函数,但是返回的是子类B的实例,即super内部的this指的是B,因此super()在这里相当于:
 * A.prototype.constructor.call(this).
 */
class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A() // A
new B() // B
/**
 * 上面代码中,new.target指向当前正在执行的函数.
 * 可以看到,在super()执行时,它指向的是子类B的构造函数,而不是父类A的构造函数.
 * 也就是说,super()内部的this指向的是B.
 *
 *
 * 作为函数时,super()只能用在【子类的构造函数】之中,用在其他地方就会报错.
	class A {}

	class B extends A {
	  m() {
	    super(); // 报错
	  }
	}
 * 上面代码中,super()用在B类的m方法之中,就会造成句法错误.
 */


/*****************************************
 * 第二种情况,super作为对象时,用在【普通方法中】,指向【父类的原型对象】；在静态方法中,指向父类.
	class A {
	  p() {
	    return 2;
	  }
	}

	class B extends A {
	  constructor() {
	    super();
	    console.log(super.p()); // 2 
	    // -------- 当super当做对象来用时,代表父类的原型对象,这里就相当于ES5中的A.prototype.p.call(this)...
	  }
	}

	let b = new B();
 *
 * 上面代码中,子类B当中的super.p(),就是将super当作一个对象使用.
 * 这时,super在普通方法之中,指向A.prototype,所以super.p()就相当于A.prototype.p().
 *
 * 这里需要注意,由于super指向父类的原型对象,所以定义在父类实例上的方法或属性,是无法通过super调用的.
	class A {
	  constructor() {
	    this.p = 2;
	  }
	}

	class B extends A {
	  get m() {
	    return super.p;
	  }
	}

	let b = new B();
	b.m // undefined
 * 上面代码中,p是父类A实例的属性,super.p就引用不到它.
 */

/**
 * ES6 规定,通过super调用父类的方法时,【super会绑定子类的this】. --- 等同于ES5的A.prototype.print.call(this)
	class A {
	  constructor() {
	    this.x = 1;
	  }
	  print() {
	    console.log(this.x);
	  }
	}

	class B extends A {
	  constructor() {
	    super();
	    this.x = 2;
	  }
	  m() {
	    super.print();
	  }
	}

	let b = new B();
	b.m() // 2
 * 
 * 上面代码中,super.print()虽然调用的是A.prototype.print(),但是A.prototype.print()会绑定子类B的this,导致输出的是2,而不是1.
 * 也就是说,实际上执行的是super.print.call(this).
 *
 *
 * 由于绑定子类的this,所以如果通过super对某个属性赋值,这时super就是this,赋值的属性会变成子类实例的属性.
	class A {
	  constructor() {
	    this.x = 1;
	  }
	}

	class B extends A {
	  constructor() {
	    super();
	    this.x = 2;
	    super.x = 3;
	    console.log(super.x); // undefined
	    console.log(this.x); // 3
	  }
	}

	let b = new B();
 *
 * 上面代码中,super.x赋值为3,这时等同于对this.x赋值为3. 
 * 而当读取super.x的时候,读的是A.prototype.x,所以返回undefined. 
 */


/**
 * 如果super作为对象,用在【静态方法之中】,这时【super将指向父类】,而不是父类的原型对象. 
 */
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }

    myMethod(msg) {
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2

/**
 * 最后,由于对象总是继承其他对象的,所以可以在任意一个对象中,使用super关键字. 
 */
var obj = {
    toString() {
        return "MyObject: " + super.toString();
    }
};

obj.toString(); // MyObject: [object Object]