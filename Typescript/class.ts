class Dog {
	// 构造函数参数 类型注解; 构造函数的返回值默认为 Dog 类型
	constructor(name: string) {
		// this.name = name; // 【 为啥不用初始化也行...? 】
	}
	name: string; // 显式声明属性(ES6不需要); 成员属性 类型注解

	run() {
		// 默认返回值是 void
	}
}
console.log(Dog.prototype);
console.log(new Dog('旺财'));

// 继承
class Husky extends Dog {
	// 子类构造函数的参数必须覆盖父类的
	constructor(name: string, public color: string) {
		super(name); // super代表父类的实例

		// this.color = color; // 参数加上public 相当于做了这个赋值
	}

	// color: string; // 参数加上public 相当定义了此属性
}

/**
 * 成员修饰符
 * 1. public: 所有人可见（默认）
 * 2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用
 * 3. protected: 只能在类本身其子类中调用
 * 4. readonly: 只读属性
 * 5. static: 静态属性，可以被类或类的子类调用，不能被实例调用
 */

// 抽象类
abstract class Human {
	greet() {
		console.log('Hello');
	}
	abstract sleep(): void; // 抽象方法
}

class Asian extends Human {
	// 需要在子类中实现sleep方法
	sleep() {
		console.log('Asian Sleep');
	}
}

let LiLei = new Asian();
LiLei.greet();

// 多态
class European extends Human {
	sleep() {
		console.log('European Sleep');
	}
}
let Eason = new European();
let arr = [LiLei, Eason];

arr.forEach((p) => {
	p.sleep(); // 不同子类以不同的方式实现父类抽象方法
});

// this类型与链式调用 ===> 所有方法返回 this
class Chain {
	do1() {
		console.log('chain 1');
		return this;
	}

	do2() {
		console.log('chain 2');
		return this;
	}
}
new Chain().do1().do2();

class SubChain extends Chain {
	next() {
		console.log('sub-chain');
		return this;
	}
}

// 子类返回的this 也可以调用父类的方法
new SubChain().next().do1().next().do2();
