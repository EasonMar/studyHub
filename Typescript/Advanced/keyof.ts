// https://blog.csdn.net/lcl130/article/details/125214788


// 示例类型
type PersonForKeyOf = {
    id: number;
    name: string;
    age: number;
};

// 1. 基本用法
// 通过 keyof 操作符可以获取对象中的所有键类型组成的联合类型
type Pfko1 = keyof PersonForKeyOf; //'id' | 'name' | 'age'


// 2. 获取对象所有属性的类型
type Pfko2 = PersonForKeyOf[keyof PersonForKeyOf]
// PersonForKeyOf[keyof PersonForKeyOf]本质上是执行 PersonForKeyOf['id' | 'name' | 'age']
// 由于联合类型具有分布式的特性，Person['id' | 'name' | 'age'] 变成了 PersonForKeyOf['id'] ｜ PersonForKeyOf['name'] ｜ PersonForKeyOf['age']
// 最后得到的结果就是 number | string


// 3. 约束范型参数的范围
type PickForKeyOf<T, K extends keyof T> = {
    [P in K]: T[P]
};
type Pfko3 = PickForKeyOf<PersonForKeyOf, 'id' | 'age'>
// K extends keyof T对K进行了约束，只能是'id'，'name'，'age'中的一个类型或者几个类型组成的联合类型;
// 如果没有这个约束，{ [P in K]: T[P] } 则会报错。