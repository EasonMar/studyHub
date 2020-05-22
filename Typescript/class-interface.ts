// 定义 一 约束类 的接口, 接口只能约束类的公有属性
interface HumanI {
	name: string; // 属性
	eat(): void; // 方法
}

// 类 实现接口, 必须实现接口中定义的所有成员, 可以添加接口中未定义的成员
class Man implements HumanI {
	constructor(name: string) {
		this.name = name;
	}

	// 定义非公共成员属性
	private priname: string = 'pri';
	protected proname: string = 'pro';

	// 实现接口成员属性
	name: string;
	// 实现接口成员方法
	eat() {
		console.log('eating');
	}
}

/**
 * 接口继承
 */
// 继承一个接口
interface ManI extends HumanI {
	run(): void;
}
interface BoyI extends HumanI {
	cry(): void;
}
// 继承多个接口 ===> 多个接口合并为一个接口
interface Boy extends ManI, BoyI {}

// 定义一Boy类型的对象...需要实现Boy接口的所有成员
let boy: Boy = {
	name: 'wang',
	eat() {},
	run() {},
	cry() {},
};

// 继承类 ===> 可以把类成员抽象出来
interface ManEI extends Man {}

// class ManEIC implements ManEI {
// 	name: string;
// 	// private priname: string; 如果接口继承的类具有非公有成员, 则必须由其子类才能实现该接口...
// 	protected proname: string;
// 	eat() {}
// }

// Man 的子类 实现了 ManEI 接口
class ManEI extends Man implements ManEI {}
