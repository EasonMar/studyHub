// 工具类 - TS关键字的运用

// Partial<T> - 将泛型中全部属性变为可选的

// missed: 泛型的声明要放到泛型参数传递区<>内
// type Partial_Tools<T> = P in keyof T {
//     P ?: T[P]
// }

// missed: 关键字 in \ extends 各自的用法和区别
// ---- in 遍历 类型的属性 \ extends 约束 泛型变量的范围
// type Partial_Tools<T, P in keyof T > {
//     P?: T[P]
// }

// missed: 关键字 in 和 extends 的用法和区别
// type Partial_Tools<T, P extends keyof T> {
//     P?: T[P]
// }

// 正解
// 解析一、明显这个工具类只需要传入一个泛型变量
type Partial_Tools<T> = {
    // 解析二、in 用在表达式中, 表示遍历
    [P in keyof T]?: T[P];
};

// ==========================================================================================

// Record<K, T> - 将 K 中所有属性值转化为 T 类型
type Record_Tools<K, T> = {
    [P in keyof K]: T
}

// 为什么官方的实现是如下这样？ 跟上面的实现有啥不同 --- 感觉自己审题有问题
// 解析一、深入了解 in 关键字的作用
// 解析二、了解一下「索引类型」
type Record_Tools_Official<K extends keyof any, T> = {
    [P in K]: T;
};
// Tips: keyof any 对应的类型为 number | string | symbol，也就是可以做对象键(专业说法叫索引 index)的类型集合
// https://stackoverflow.com/questions/55535598/why-does-keyof-any-have-type-of-string-number-symbol-in-typescript
// 只要是作为键-key, 且没有其他约束, 就加上 「extends keyof any」 这个 最小约束!

// ==========================================================================================

// Pick<T, K> - 将 T 类型中的 K 键列表提取出来，生成新的子键值对类型
type Pick_Tools<T, K extends keyof T> = {
    [P in K]: T[P]
}

// ==========================================================================================

// Exclude<T, U> - 在 T 类型中，去除 T 类型和 U 类型的交集，返回剩余的部分。

// missed: 1、不知道怎么表达T和U的交集... 2、表达了交集之后, 如何只返回T的剩余部分
// type Exclude_Tools<T, U> = {}

// 正解
type Exclude_Tools<T, U> = T extends U ? never : T
// 解析一、深入了解extends的意义... 及其 分配式 特点
// https://juejin.cn/post/6844904146877808653

// 解析二、任何类型联合上 never 类型，结果还是原来的类型

// 举一反三
// Include<T, U> - 在 T 类型中，返回 T 类型和 U 类型的交集
type Include_Tools<T, U> = T extends U ? T : never


// ==========================================================================================

// Omit<T, K> - 去除类型 T 中包含 K 的键值对, 可认为是「适用于键值对对象」的 Exclude --- Exclude 适用于什么对象？--- 我的理解是「联合类型对象」

// missed: 反思 Exclude_Tools的使用场景、Exclude_Tools<T, K> 返回的是啥...
// type Omit_Tools<T, K> = {
//     [P in keyof Exclude_Tools<T, K>]: T[P] // Type 'P' cannot be used to index type 'T'
// }

// missed: Exclude_Tools<T, K> 返回的不一定是能作为 key 的类型...
// type Omit_Tools<T, K> = {
//     [P in Exclude_Tools<T, K>]: T[P] // Type 'Exclude_Tools<T, K>' is not assignable to type 'string | number | symbol'.
// }

// 解析一、K extends keyof T: 约束K的值
// 解析二、Exclude_Tools 适用于联合类型, 所以 Exclude_Tools<keyof T, K> 才能正常返回 T 剔除 K 的剩余 key
type Omit_Tools<T, K extends keyof T> = {
    [P in Exclude_Tools<keyof T, K>]: T[P]
}

// 优化 --- 实际上前面包含了一个 Pick 的逻辑...可以直接用 Pick 来封装以上逻辑
type Omit_Tools_upgrate<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// ==========================================================================================

// ReturnType<T> - 获取 T 类型(函数)对应的返回值类型

// missed: 
// 函数类型的定义
// type ReturnType_Tools<T> = T extends () => infer R ? R : T


// 解析一、T泛型约束 为 函数类型: <T extends (...args: any) => any>
// 解析二、如果不符合函数类型定义...不应该返回T, 而是返回 any

type ReturnType_Tools<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// ==========================================================================================

// Required<T> - 此工具可以将类型 T 中所有的属性变为必选项。

// missed: 一开始又写成 P in T
type Required_Tools<T> = {
    [P in keyof T]-?: T[P]
}