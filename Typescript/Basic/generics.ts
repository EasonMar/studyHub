// =========================================================
// ======================== 泛型函数 ========================
// 把泛型理解为【代表类型的参数】, 给函数多加了 类型参数 而已
// =========================================================
// demo
// function xx<T>(val: T): T { return val }
// const xx = <T>(val: T): T => val
function log<T>(value: T): T {
	console.log(value);
	return value;
}

// 调用log之前, 可以理解其参数为any类型
// 调用之后, 又可以保证 其返回值 与 输入参数值 类型一致

// 调用方式一
log<string[]>(['a', 'b', 'c']);

// ==============================
// 调用方式二 : 推荐这种方式：利用TS的类型推断, 省略【类型参数】
log(['a', 'b', 'c']);
// ==============================

// 定义【函数类型】 --- 用类型别名来定义一个带有泛型的函数类型
type Log = <T>(p: T) => T;
let myLog: Log = log; // 为啥这里不需要传递【类型参数】: 这里泛型的含义仅在于约束输入输出类型一致【？】
myLog('string');
myLog(123);

type LogT<T> = (p: T) => T; // 这里就不一样了: 给类型别名加了泛型参数, 除了约束输入输出类型一致, 还得指定是什么类型【？】
let myLogT: LogT<number> = log;
myLogT(1);



// =========================================================
// ======================== 泛型接口 ========================
// =========================================================

// 这里仅仅是接口内部有个泛型函数
interface iLog {
	<T>(p: T): T; // 跟类型别名定义方式是等价的
	// 此接口【泛型】仅能约束一个成员函数 --- 因为【泛型参数】仅仅在函数上
}
let myILog: iLog = log;

// 这个才是【真正的泛型接口】吧
// 使【泛型】可以约束接口的所有成员, 【泛型参数】在接口上 --- 更加抽象
interface iLogT<T> {
	(p: T): T;
}
let myILogT: iLogT<string> = log; // 要给泛型参数传值
myILogT('abc');

// 给泛型指定默认类型
interface LogDefT<T = string> {
	(p: T): T;
}
let myLogDefT: LogDefT = log;
myLogDefT('ABC');



// =======================================================
// ======================== 泛型类 ========================
// =======================================================
class DogT<T> {
	run(value: T) {
		console.log(`dogt value = ${typeof value} ${value}`);
		return value;
	}

	// 泛型不能应用于类的静态成员
	// static stat: T; // 静态成员不能引用类类型参数
}
let dogT = new DogT<string>();
dogT.run('string');

let dogNT = new DogT();
dogNT.run(123);
dogNT.run('123');
dogNT.run({ value: 123 });



// ========================================================
// ======================== 泛型约束 =======================
// ========================================================
interface Length {
	length: number;
}
// 传入的参数必须具有length属性
function logLimit<T extends Length>(value: T) {
	console.log(value, value.length);
	return value;
}
logLimit([1]);
logLimit('[1]');
logLimit({ length: 1 });




// ======================================================
// ======================== Q & A =======================
// ======================================================
/*
老师，下面两种的区别
```
type Log = <T>(value: T) => T;
type Log<T> = (value: T) => T;
```
或者
```
interface Log {
  <T>(value: T):T
}

interface Log<T> {
  (value: T):T
}

```
作者回复: 1、3是等价的，使用时无需指定类型：
let log: Log = ...

2、4是等价的，使用时必须指定类型
let log: Log<number> = ...
*/

// ==================================================
/*
export function onceFunction<T>(fn: T): T {
	let once = true;
	// 不能将类型“(...a: unknown[]) => unknown”分配给类型“T”
	const onceFunction: T = function (...a: unknown[]): unknown {
		if (once) {
			once = false;
			if (fn instanceof Function) {
				return fn(...a);
			}
		}
	};
	return onceFunction;
}
*/

/**
 * 作者回复: 需要注意两点：
 * 1）函数的参数和返回值要区分别约束
 * 2）onceFunction 返回的函数可能会返回 void
 */
