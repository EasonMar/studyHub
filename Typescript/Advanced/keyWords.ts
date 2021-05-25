/**
 * 键值获取 keyof
 * 语法：类型 = keyof 类型
 * keyof 可以获取一个类型所有键值，返回一个联合类型
 * keyof 的一个典型用途是限制访问对象的 key 合法化
 */
type Person_KeyWords = {
    name: string;
    age: number;
}
type PersonKey = keyof Person_KeyWords;  // PersonKey得到的类型为 'name' | 'age'


/**
 * 实例类型获取 typeof
 * 语法：类型 = typeof 实例对象
 * typeof 是获取一个对象/实例的类型
 */
const me_KeyWords: Person_KeyWords = { name: 'gzx', age: 16 };
type P = typeof me_KeyWords;  // { name: string, age: number | undefined }
const you_KeyWords: typeof me_KeyWords = { name: 'mabaoguo', age: 69 }  // 可以通过编译



/**
 * 遍历属性 in 
 * 「只能」用在类型的定义中，可以对「枚举类型」进行遍历
 * 语法：[自定义变量名 in 枚举类型]: 类型
 * demo：[P in keyof T]: string
 */
// 这个类型可以将任何类型的键值转化成number类型
type TypeToNumber<T> = {
    [key in keyof T]: number
}


/**
 * is
 * 一种类型推断表达式的关键字, 通过和函数返回值的比较, 从而"缩小"参数的类型范围, 从而起到 类型保护 的作用
 * 经常用来封装"类型判断函数", 这类函数都必须用"is"特性, 这类函数一般起名都会叫isString/isFood/isVnode等等
 */
const isString = (val: any): val is string => typeof val === 'string'
// 这段代码的意思是当isString返回值为true的时候, 参数val就是string类型.

// 上述写法与写一个返回值为 boolean 值函数的区别在哪里呢？
const isStringB = (val: any): boolean => typeof val === "string";

function example(foo: any) {
    if (isString(foo)) {
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
        // val is string 就是告诉 ts, isString返回值为true的时候, 参数val就是string类型
        // 所以如下代码编译时会出错，运行时也会出错，因为 foo 是 string 不存在toExponential方法
        console.log(foo.toExponential(2));
    }
    // 编译不会出错，但是运行时出错
    console.log(foo.toExponential(2));
}

function exampleB(foo: any) {
    if (isStringB(foo)) {
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
        // 如下代码编译时不会出错，而运行时会出错，因为 ts认为foo是 any, 不知道 foo 为string, 
        console.log(foo.toExponential(2));
    }
    // 编译不会出错，但是运行时出错
    console.log(foo.toExponential(2));
}

// Tips: 这个例子里的参数的类型用unknown替换any，强制转换会更加安全

/**
 * 泛型约束 extends
 * 语法：泛型名 extends 类型
 * 这里的意思是限制了 U 一定是 T 的 key 类型中的子集，这种用法常常出现在一些泛型工具库中
 */
type pick_KeyWords<T, U extends keyof T> = {
    [P in U]: T[P]
}

/**
 * 泛型条件 extends
 * 语法：泛型名A extends 类型B ? 类型C: 类型D
 * demo：T extends U ? X : Y
 * 注意，生成的结果是分配式的: 就是当上面的T为联合类型的时候，会进行拆分，有点类似数学中的分解因式: (a + b) * c => ac + bc
 * 举个例子：T extends U? T: never    ---   Tips: 任何类型联合上 never 类型，结果还是原来的类型
 * 此时返回的 T，是满足原来的 T 中包含 U 的部分，可以理解为 T 和 U 的交集。
 */
type Words = 'a' | 'b' | "c";
type W<T> = T extends Words ? true : false; // 注意, 等号左侧需要有地方传递「泛型变量」


/**
 * 泛型推断 infer
 * infer 的中文是“推断”的意思，一般是搭配上面的泛型条件语句使用的
 * 所谓推断，就是你不用预先指定在泛型列表中，在运行时会自动判断，不过你得先预定义好整体的结构
 */
type Foo_keyWords<T> = T extends { t: infer Test } ? Test : string
// 首选看 extends 后面的内容，{t: infer Test}可以看成是一个包含t属性的类型定义，这个t属性的 value 类型通过infer进行推断后会赋值给Test类型，
// 如果泛型实际参数符合{t: infer Test}的定义那么返回的就是Test类型，否则默认给缺省的string类型

type One = Foo_keyWords<number>  // string  --->  因为number不是一个包含t的对象类型
type Two = Foo_keyWords<{ t: boolean }>  // boolean  --->  因为泛型参数匹配上了，使用了infer对应的type
type Three = Foo_keyWords<{ a: number, t: () => void }> // () => void  ---> 泛型定义是参数的子集，同样适配
