// 定义 ===> 有四种方式

// 1. function
function add1(x: number, y: number) {
	return x + y;
}

// 2. 变量
let add2: (x: number, y: number) => number;

// 3. 类型别名 ===> 跟变量的方式太像了
type add4 = (x: number, y: number) => number;

// 4. 接口
interface add3 {
	(x: number, y: number): number;
}

/**
 * TS 函数参数
 * 1. 形参个数 = 实参个数
 * 2. 可选参数 ===> 【可选参数】必须位于【必须参数】之后 add5
 * 3. 参数默认值 ===> 必选参数 之前的 参数, 不管有无默认值, 都是要传值的 add6
 * 4. 剩余参数 (a, b, ...rest:number[])
 */
function add5(x: number, y?: number) {
	return y ? x + y : x;
}

function add6(x: number, y = 1, z: number) {
	return x + y + z;
}
console.log(add6(1, undefined, 2));

function add7(x: number, y: number, ...rest: number[]) {
	return x + y + rest.reduce((pre, cur) => pre + cur); // 得好好复习一下 reduce 了
}
console.log(add7(1, 2, 3, 4, 5));

/**
 * TS 函数重载
 * 1. 函数名称相同
 * 2. 函数参数个数或参数类型不同
 *
 * How
 * 1. 先定义一系列名称相同的【函数声明】 --- 【只能使用function来声明？】
 * 2. 在类型最宽松的函数声明中实现重载
 * 3. 编译器处理重载时，会依据【声明列表】从上往上下匹配；
 */
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
	let first = rest[0];
	if (typeof first === 'number') {
		return rest.reduce((pre, cur) => pre + cur);
	}

	if (typeof first === 'string') {
		return rest.join(',');
	}

	throw new Error("what' going on?");
}
console.log(add8(1, 2, 3, 4));
console.log(add8('a', 'b', 'c', 'd'));
