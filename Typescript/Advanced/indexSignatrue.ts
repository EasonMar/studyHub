// 索引签名

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}


class Animal {
    name: string;
}
class Dog11 extends Animal {
    breed: string;
}

// 错误：数字索引的返回值必须是字符串索引返回值类型的子类型
// 因为当使用number来索引时，JavaScript会将它转换成string然后再去索引对象
// 也就是说用100(number) 去索引, 等同于使用"100"(string)去索引，因此两者需要保持一致
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog11;
}

interface Okay {
    [x: string]: Animal;
    [y: number]: Dog11
}
