/**
 * 枚举类型
 *
 * 【引子 - 角色判断】
 * function initByRole(role) {
 *   if (role === 1 || role === 2) {
 *   	// do sth
 *   } else if (role === 3 || role === 4) {
 *   	// do sth
 *   } else if (role === 5) {
 *   	// do sth
 *   } else {
 *   	// do sth
 *   }
 * }
 *
 * 【存在问题】
 * 1. 可读性差:难以记住数字的含义
 * 2. 可维护性差:硬编码, 牵一发动全身
 * */

// 数字枚举
enum Role {
	Reporter = 1, // 也可以自定义初始值, 后面的枚举成员的值也会相应递增
	Developer,
	Maintaner,
	Owner,
}
console.log(Role.Reporter); // 默认取值从0开始, 后面的枚举成员其值会递增
console.log(Role);
// 【枚举】跟【对象】很像, 枚举在编译后就变成了一个对象, 数字枚举的实现原理是 反向映射(既可以用枚举成员索引值, 也可以用枚举值索引枚举成员)

// 字符串枚举 ===> 编译后, 只有成员名称作为了对象的key, 不能映射
enum Message {
	Success = '成功',
	Fail = '失败',
}
console.log(Message);

// 异构枚举 ===> 混合 数字枚举 和 字符串枚举, 不建议这种使用方式
enum Answer {
	N,
	Y = 'Yes',
}
console.log(Answer);

// 枚举成员的性质
// Role.Owner = 1 // property is read-only, 只读不可更改
enum Char {
	// const 常量成员, 在编译时就计算出结果
	a,
	b = Char.a,
	c = 1 + 3,

	// computed 需要被计算的成员, 需要在代码执行阶段被计算
	d = Math.random(),
	e = '123'.length,

	// computed 后面的枚举成员, 一定要赋初值
	// f,
	f = 5,
}

//  常量枚举 ===> 在编译阶段会被移除, 在【不需要对象，只需要对象的值】时, 可以减少编译环境的代码
const enum Month {
	Jan,
	Fer,
	Mar,
}
let month = [Month.Jan, Month.Fer, Month.Mar];

// 自定义 枚举类型 ===> 某些情况下,【枚举】和【枚举成员】, 可以作为一种单独的【类型】存在（这块有点绕）

// 将【枚举类型】或者【枚举成员】作为一种数据类型，有什么用处呢？意义在什么地方呢？
// 答：一般情况下把枚举当作常量来使用即可。
// 课程中把枚举作为数据类型来讲，是想说明【枚举】、【枚举成员】和【数字类型】之间的兼容性问题，即【枚举类型】和【数字类型】是兼容的，枚举类型之间是不兼容的。

// 成员无初始值
enum E {
	a,
	b,
}
// 所有成员为数字枚举
enum F {
	a = 0,
	b = 1,
}
// 所有成员为字符串枚举
enum G {
	a = 'apple',
	b = 'banana',
}

// 【枚举】类型 ===> 可以把任意的【数字类型】 赋值给 【枚举类型】（他们之间兼容）
let e: E = 3;
let f: F = 3; // 取值可以超出枚举成员的定义
// e === f ;// 不同类型的枚举不可以比较

// 【枚举成员】类型
let e1: E.a = 2; // 【枚举】、【枚举成员】和【数字类型】之间兼容
let e2: E.b;
let e3: E.a = 2;
e1 === e3; // 相同类型的枚举可以比较

// 【字符串枚举】的取值只能是【枚举成员】的类型
let g1: G = G.a;
let g2: G.b = G.b; // 只能取值 G.b

/**
 * 课程小结 - 掌握一个思维方法
 * 1. 将程序中不容易记忆的【硬编码】
 * 2. 或在未来【可能改变的常量】
 * 3. 抽取出来, 定义成枚举类型
 * 4. 以提高程序的可读性、可维护性
 * 5. 枚举类型使程序做到“以不变应万变”
 *
 * 补充: 枚举类型可以当普通常量来使用，而且这些常量属同一类，比如星期，月份，错误编码，控制代码等
 * */

/* 课后习题 */
// 使用数字枚举
enum eRole {
	Guess = 1,
	Host,
	Maintaner,
	Owner,
	Developer,
	Reporter,
}
function initByRole(role: number) {
	if (role === eRole.Guess || role === eRole.Host) {
		console.log(`Your root are ${eRole[role]}`);
	} else if (role === eRole.Maintaner || role === eRole.Owner) {
		console.log(`Your root are  ${eRole[role]}`);
	} else if (role === eRole.Developer) {
		console.log(`Your root are ${eRole[role]}`);
	} else {
		console.log(`Your root are ${eRole[role]}`);
	}
}
function initByRoleSwitch(role: number) {
	switch (role) {
		case eRole.Guess:
		case eRole.Host:
			console.log(`Your root are  ${eRole[role]}`);
			break;
		case eRole.Maintaner:
		case eRole.Owner:
			console.log(`Your root are  ${eRole[role]}`);
			break;
		case eRole.Developer:
			console.log(`Your root are ${eRole[role]}`);
			break;
		default:
			console.log(`Your root are ${eRole[role]}`);
	}
}
initByRole(1);
initByRoleSwitch(5);
