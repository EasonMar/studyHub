/**
 * 类型推断
 * 从右向左
 */

let a = 1;
let b = [1];

let c = (x = 1) => x + 1;

/**
 * 类型推断
 * 从左向右 （根据上下文）
 * 老师，我在最新版本的vscode中，输入window.onkeydown = (event) => { console.log('onkeydown')}，
 * 编辑器会提示参数“event”隐式具有“any”类型，而没有进行上下文推断。
 * 但是在之前的一些版本里就可以正常推断，请问这个是哪里的问题呢？
 * 作者回复: 嗯，这个提示是之前没有的，加上 KeyboardEvent 类型就可以了。
 */
// window.onkeydown = (event) => {
// 	console.log(event);
// };

/**
 * 类型断言
 */

interface Foo {
	bar: number;
}
let foo = {} as Foo;
foo.bar = 1;

/**
 * 以上使用`as`的方式，不会提示是否缺失定义`bar`属性，
 * 最好的方式是使用下面代码，在定义时就指明类型
 *
 * Property 'bar' is missing in type '{}' but required in type 'Foo'.
 */

let foo02: Foo = {
	bar: 1,
};

/**
 * 类型兼容
 */

// 泛型接口
interface Empty<T> {
	value: T;
}

let obj1: Empty<number> = {
	value: 1,
};
let obj2: Empty<number> = {
	value: 2,
};
obj1 = obj2;

/**
 * 高级类型
 */

// 映射类型
type MyReadonly<T> = {
	readonly [P in keyof T]: T[P];
};

type MySelectable<T> = {
	[P in keyof T]?: T[P];
};



// 一时反应不过来的类型
type KEYOFANY = keyof any // string | number | symbol