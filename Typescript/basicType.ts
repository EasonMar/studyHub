/**
 * 类型注解 ==>  a:type
 */

// 原始类型 ==> 注意类型的首字母为小写, 如果不小心写成了大写, 对应的其实是TS预定义的泛型接口
let bool: boolean = true;
let Bool: Boolean = false; /** Returns the primitive value of the specified object. */
let num: number = 1;
let str: string = 'str';

// 数组 ==> 有两种方式注解类型
let arr1: number[] = [1, 3, 5]; // a : type[] --- 数组内容类型声明在前
let arr2: Array<string> = ['Iwen', 'Eason', 'Alice']; // a : Array<type>  --- 数组内容类型声明在后, 这里的Array是TS预定义的泛型接口
let arr3: Array<string | number> = ['Iwen', 'Eason', 123]; // 数组内容为联合类型

// 元组 ==> 特殊的数组, 限定了特定元素类型、元素个数:  a : [type1, type2, ..., typen]
let tuple: [number, string] = [1, 'a'];
// let tuple: [number, string] = [1, 'a', 2]; // 报错
// let tuple: [number, string] = ['a', 1]; // 报错

// 元素的越界问题
// tuple.push(2); // 正常, 可以正常添加元素, 但是无法越界访问新添加的元素
// tuple[2]; // 报错, 无法越界访问

// 函数 ==> 函数参数需要加类型注解, 这里利用类型推断, 函数返回值可以省略类型注解
let addor = (x: number, y: number) => x + y;
// 函数的类型声明 和 函数实现可以分开
let compute: (x: number, y: number) => number;
// 实现函数时, 参数符号可以与定义时不一样, 参数也不用再指定类型了
compute = (a, b) => a + b;

// 对象
// 错误的方式: 没有指定对象含有什么属性
// let obj: Object = {
// 	x: 1,
// 	y: 2,
// };
// obj.x = 1; // 报错

let obj: { x: number; y: number } = {
	x: 1,
	y: 2,
};
obj.x = 3;

// symbole ===> 其含义为: 具有唯一的值
let s1: symbol = Symbol(); // 可以显式声明s1为symbol类型
let s2 = Symbol(); // 也可以不声明s2为symbol类型, 直接赋值
console.log(s1 === s2);

// undefined、null ===> 变量定义为这两个类型之后, 只能存他们本身
let un: undefined = undefined;
let nu: null = null;
// undefined、null 是任何类型的子类型, 要配置tsconfig.json\strictNullChecks:false, 才不会报错
num = undefined;
str = null;

// void
let noReturn = () => {};

// any ===> 不指定类型, 默认就是any类型, 跟js无异了
let x;
x = 1;
x = 'string';
x = [];

// never ==> 永远不会有返回值的类型
let error = () => {
	throw new Error('error');
};
let endless = () => {
	while (true) {}
};
