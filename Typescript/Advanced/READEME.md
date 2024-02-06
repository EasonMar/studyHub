# Syntax
1. in：遍历属性
2. as：类型断言
3. is：类型推断表达式的关键字, 通过和函数返回值的比较, 从而"缩小"参数的类型范围, 从而起到 类型保护 的作用
   ```typescript
    const isString = (val: any): val is string => typeof val === 'string
    if (isString(value)) {
      // 如果 isString(value) 为true，则 value 就可以被类型系统推断为 string 类型
      // 换句话说 if isString return true, then (val is string) is true
      console.log(value.toUpperCase());
    } else {
      console.log('Not a string');
    }

    // 如果不使用 val is string 这个类型谓语，则无法对 val 进行类型推断
    // 在 Playground 中 鼠标悬到 value 之上可以看到区别
   ```
4. !
   - 属性或参数中使用 ! ：强制解析，告诉typescript编译器，这里一定有值
   - 变量后使用 ！：表示类型推断排除null、undefined
5. typeof：获取type
6. keyof：获取key
7. extends：
   - 泛型约束：T extends U
   - 条件判断：T extends U ? X : Y
   - 泛型推断-infer：type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
     - infer R 就相当于声明了一个类型变量，这个类型变量随后可以在true的分支中使用
     - 推断了一个类型变量，高效的对类型进行模式匹配
   - [TypeScript 中的 extends 怎么那么骚啊](https://mp.weixin.qq.com/s/WOlSNmwbddKPC8hO-Hi1uw)
   - [never 于 extends](https://www.jianshu.com/p/79204a56b4bc)
8. [索引签名](https://www.cnblogs.com/UmaruChan/p/16287509.html)
   - 数字索引签名（数组）：[index:number]: string
   - 字符串索引签名：[key:string]: string
   - 一旦定义了索引签名, 并且还定义了其他属性，那么确定属性和可选属性的类型都必须是它的类型的子集
   - 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型，这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。 
9.  Mapped Type：映射类型建立在索引签名的语法之上，用于声明未提前声明的属性类型
10. T[P]：索引访问操作符
11. 模板字面量类型：`${}`：[文档](https://ts.nodejs.cn/docs/handbook/2/template-literal-types.html#handbook-content)
12. 构造函数类型：type Constructor = new (...args: any[]) => any


# Wired Feature
1. 联合类型在泛型中的表现是分配之后再传入
   - type A = number | string extends string ? string : number // number
   - 试用泛型会有不一样的结果
     - type P<T> = T extends string ? string : number
     - type A = P<number | string> // string | number
   - 可以使用如下的方式避免这种先分配再传入的规则
     - type P<T> = [T] extends [string] ? string : number
     - type A = P<number | string> // number
     - 想到以前看的TS类型声明就是用了这种 数组包裹 类型变量的方式，可能就是为了规避这个问题
   - never
     - never 表示所有类型的子类型，因此也被看成是一个空的联合类型，当我们在泛型中传入 never 时也会同理出现同样的问题
     - 问题就在于：先分配，再传入，但是由于没得分配，所以没得传入，所以就没得执行，也就相当于 是 never 了
       - type P<T> = T extends string ? string : number
       - type A = P<never> // never
     - 注意他们的不同
       - type P<T> = [T] extends [string] ? string : number
       - type A = P<never> // string
       - type B = never extends string ? string : number; // string
