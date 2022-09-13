/**
 * https://juejin.cn/post/7063521133340917773 
 * 
 * interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
 * 
 * type (类型别名)，顾名思义，类型别名只是给类型起一个新名字。它并不是一个类型，只是一个别名而已
 */


// 一、相同点：
// 1. 都可以定义一个对象或函数

// 2. 都允许继承（extends）
// interface 使用 extends 实现继承， type 使用交叉类型实现继承


// 二、不同点
// 1. type 可以，interface 不行
// 声明基本类型、联合类型、交叉类型、元组

// 2. interface可以，type 不行
// 声明合并：合并重复声明

// 给函数挂载属性 --- Todo 这种类型声明竟然也是一个函数？ 这应该是一个广义的对象了吧...
interface FuncWithAttachment {
    (param: string): boolean;
    someProperty: number;
}

const testFunc: FuncWithAttachment = function (param: string) {
    return param.indexOf("Neal") > -1;
};
const resultTestFunc = testFunc("Nealyang"); // 有类型提醒
testFunc.someProperty = 4;


/***
 * interface 和 type 被 TS 设计出来，是完全不同的东西，有各自的职责。
 * interface 是接口，用于描述一个对象。
 * type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。
 * 只是有时候两者都能实现同样的功能，才会经常被混淆，相信看完本文你能分清他俩了。
 * 平时开发中，一般使用组合或者交叉类型的时候，用 type。
 * 一般要用类的 extends 或 implements 时，用 interface。
 * 其他情况，比如定义一个对象或者函数，就看你心情了。
 */ 