/**
 * 接口 ==> 约束对象 函数 类的结构
 */
// ===================== interface of object =====================
interface List {
	readonly id: number; // 添加 readonly 之后, 属性不能被修改
	name: string; // 注意 声明属性类型之后, 用分号【;】 隔开, 而非逗号【,】
	age?: number; // 添加 ? 之后, age属性可有可无
}
interface Result {
	data: List[];
}
function render(res: Result) {
	res.data.forEach((val) => {
		console.log(val.id, val.name);
		if (val.age) {
			console.log(val.age);
		}
	});
}
let result = {
	data: [
		{ id: 1, name: 'a', sex: 'male' }, // 1. 鸭式变形...
		{ id: 2, name: 'b', age: 12 },
	],
};
render(result);
// render({
// 	data: [
// 		{ id: 1, name: 'a', sex: 'male' }, // 对象字面量会被检查
// 		{ id: 2, name: 'b' },
// 	],
// });

// 2. 类型断言 ===> 推荐使用 as 的语法
render({
	data: [
		{ id: 1, name: 'a', sex: 'male' },
		{ id: 2, name: 'b' },
	],
} as Result);

// 3. 索引签名
// interface ListIndex {
// 	id: number;
// 	name: string; // 类型“string”的属性“name”不能赋给字符串索引类型“number”。
// 	[x: string]: number; // 因为 索引签名是 【抽象出来的属性】, 所以其类型要囊括 【具体属性】的类型, 或者说【具体属性类型】必须是 索引签名类型的 子类型
// }

interface ListIndex {
	id: number;
	name: string;
	[x: string]: any;
}
interface ResultIndex {
	data: ListIndex[];
}
function renderIndex(res: ResultIndex) {
	res.data.forEach((val) => {
		console.log(val.id, val.name);
	});
}
renderIndex({
	data: [
		{ id: 1, name: 'a', sex: 'male' },
		{ id: 2, name: 'b' },
	],
});

// 4. 不确定属性的个数时, 使用"可索引类型的接口"

// 4-1. 数字索引
interface StringArray {
	[index: number]: string; // 用任意 number 去索引 StringArray, 得到 string 类型的值
	// 相当于定义了一个 字符串数组
}
let char: StringArray = ['A', 'B', 'C'];

// 4-2. 字符串索引
interface Name {
	[x: string]: string; // 用任意 string 去索引 StringArray, 得到 string 类型的值
	// y: number; // 与 具体的y 与抽象的 索引签名 类型冲突
	[index: number]: string; // ===> 不能与第一个索引签名的类型冲突
}

// ===================== interface of function =====================
// 官方文档 --- 清晰、全面 --- https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures
// 使用接口定义函数类型
interface Add {
	// ()表示函数类型 : 返回值为number类型
	(x: number, y: number): number;
}

// 等价于前面有讲到的函数类型定义
let addBefore: (x: number, y: number) => number;

// 第三种方式是使用类型别名: 即给当前类型起一个名字
type AddType = (x: number, y: number) => number;

// 混合类型接口
interface Lib {
	(): void; // 声明该接口为函数类型(不具名)
	version: string; // 添加属性
	doSomeThing(): void; // 添加方法(具名函数)
}

let lib: Lib = (() => { }) as Lib; // 使用断言 跳过 【version\doSomeThing暂时缺失的错误警告】
lib.version = '1.0';
lib.doSomeThing = () => { };

// 构造器 ===> 如果不封装上门的lib, 它就是一个全局变量, 封装后就可以通过闭包创建多个 lib
function getLib() {
	let lib: Lib = (() => { }) as Lib;
	lib.version = '1.0';
	lib.doSomeThing = () => { };
	return lib;
}



// ============== 接口的继承 ==============
// https://blog.csdn.net/FastText/article/details/125651057

// 单继承
// 多继承
interface Color {
	color: string;
}

interface Shape {
	name: string;
}

interface Circle extends Color, Shape {
	radius: number;
}

// 同名成员的兼容问题


// 接口继承类
// 接口也可以继承类，它会继承类的成员，但不包括具体的实现，只会把类的成员作为一种声明