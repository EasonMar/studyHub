// ================================================================
// 一、如何理解  new (...args: any[]) => any

type Constructor = new (...args: any[]) => any

/**
 * 1. () => any 该函数没有输入参数，返回任意类型
 * 2. (...args: any[]) => any
 *      ..args: any[]使用的是Rest Parameters构造，因为存在数量未知的any参数，所以参数的类型是any的数组
 * 3. new (...args: any[]) => any
 *      此处的new关键字指定可以将此函数视为类构造函数，并使用new关键字进行调用
 * 
 * 总结: 该函数是一个可以接受返回类型any的任意数量的参数(类型为any的函数)，并且可以用作带有new关键字的构造函数
 */


// ================================================================
// 二、怎么理解 { new(...args: any[]): T & {}; } 和 { (): T}

type PropConstructor<T = any> = {
    new(...args: any[]): T & {};
} | {
    (): T;
}

type PropCon2<T = any> = {
    (): T
}

type PropCon2Imple = PropCon2<string> // () => string 
type PropConstructorImple = PropConstructor<string> //  (new (...args: any[]) => string) | (() => string)

// 当 {} 内仅仅存在一个函数时, 大括号竟然不代表 对象？！ 仅仅表示 代码块 的分界？！
// 所以本质是以下形式？只是写法不同而已？！

type PropConstructorNoWrap<T = any> = (new (...args: any[]) => T) & {} | (() => T)
type pcnw = PropConstructorNoWrap<string>


// 以下写法都是定义一个函数 ===> https://juejin.cn/post/7063521133340917773
type addType1 = {
    (num1: number, num2: number): number
}

const addtype1: addType1 = (num1, num2) => num1 + num2

interface addType2 {
    (num1: number, num2: number): number
}

const addtype2: addType2 = (num1, num2) => num1 + num2



// ================================================================
// 三、[T] extends [((...args: any) => any) | undefined] 跟 T extends ((...args: any) => any) | undefined 是否相同？
// 感觉是一样的效果...为啥不用后者？
type PropMethodA<T> = [T] extends [
    ((...args: any) => any) | undefined
] ? 'true' : 'false';

type PropMethodB<T> = T extends ((...args: any) => any) | undefined ? 'true' : 'false';


type tpma = PropMethodA<string>
type tpmb = PropMethodB<string>


// ================================================================