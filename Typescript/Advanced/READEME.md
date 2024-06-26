# Syntax
1. in：遍历属性
2. as：类型断言
3. is：类型推断表达式的关键字, 通过和函数返回值的比较, 从而"缩小"参数的类型范围, 从而起到 类型保护 的作用
   ```typescript
    const isString = (val: any): val is string => typeof val === 'string'
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
   - 泛型约束-Generic Constraints：T extends U
   - 条件类型-Conditional Types：T extends U ? X : Y
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
9.  T[P]：索引访问操作符 
10. Mapped Type：映射类型建立在索引签名的语法之上，用于声明未提前声明的属性类型
    - Key Remapping via as，In TypeScript 4.1+, you can re-map keys in mapped types with an as clause in a mapped type
      ```typescript
        type MappedTypeWithNewProperties<Type> = {
            // 表示要遍历 Type 类型的所有属性，并将其重新映射为 NewKeyType 这个新的属性键
            // 在遍历过程中，[Properties in keyof Type] 遍历了 Type 类型的所有属性，并将每个属性命名为 Properties。
            // 而 as NewKeyType 部分表示将 Properties 重新映射为 NewKeyType。这里的 NewKeyType 是一个新的类型，用来替代属性键 Properties。
            // 最终，通过 Type[Properties] 来获取原始类型 Type 中 Properties 属性的类型，从而得到了新类型 MappedTypeWithNewProperties<Type>
            
            [Properties in keyof Type as NewKeyType]: Type[Properties]
            
            // 所以这里应该是这样看的: (Properties in keyof Type) as (NewKeyType)
        }
      ```
    - You can leverage features like template literal types to create new property names from prior ones
      ```typescript
        type Getters<Type> = {
            // 遍历 Type 类型的所有属性，并将其重新映射为 `get${Capitalize<string & Property>}`
            [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
        };
        
        interface Person {
            name: string;
            age: number;
            location: string;
        }
        
        type LazyPerson = Getters<Person>;
      ```
    - You can filter out keys by producing never via a conditional type:
      ```typescript
        // Remove the 'kind' property
        type RemoveKindField<Type> = {
            [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
        };
        
        interface Circle {
            kind: "circle";
            radius: number;
        }
        
        type KindlessCircle = RemoveKindField<Circle>;
      ```
    - You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:
      ```typescript
        type EventConfig<Events extends { kind: string }> = {
            [E in Events as E["kind"]]: (event: E) => void;
        }
        
        type SquareEvent = { kind: "square", x: number, y: number };
        type CircleEvent = { kind: "circle", radius: number };
        
        type Config = EventConfig<SquareEvent | CircleEvent>
      ```
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
     - never 表示所有类型的子类型，因此也被看成是一个**空的联合类型**，当我们在泛型中传入 never 时也会出现同样的问题
     - 问题就在于：先分配，再传入，但是由于没得分配，所以没得传入，所以就没得执行，也就相当于 是 never 了
       - type P<T> = T extends string ? string : number
       - type A = P<never> // never
     - 注意他们的不同
       - type P<T> = [T] extends [string] ? string : number
       - type A = P<never> // string
       - type B = never extends string ? string : number; // string
2. [Rest Arguments](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-arguments)
3. [Assignability of Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#assignability-of-functions)


# Advanced type declare
1. Array
2. Functions
   - Function Type Expressions：(a: string) => void) 、type GreetFunction = (a: string) => void;
   - Call Signatures：If we want to describe something callable with properties, we can write a call signature
      ```typescript
        type DescribableFunction = {
          description: string;
          // Note that the syntax is slightly different compared to a function type expression.
          (someArg: number): boolean; // use : between the parameter list and the return type rather than =>
        };
      ```
   - Construct Signatures：You can write a construct signature by adding the new keyword in front of a call signature
      ```typescript
        type SomeConstructor = {
          new (s: string): SomeObject;
        };
        function fn(ctor: SomeConstructor) {
          return new ctor("hello");
        }

        // 下面这样也表示构造函数... adding the new keyword in front of a function type expression
        type Constructor = new (...args: any[]) => any

        // Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:
        interface CallOrConstruct {
          (n?: number): string;
          new (s: string): Date;
        }
      ```
   - Generic Functions：In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature
      ```typescript
        function firstElement<Type>(arr: Type[]): Type | undefined {
          return arr[0];
        }
      ```
   - Function Overloads：
     - Some JavaScript functions can be called in a variety of argument counts and types，we can specify a function that can be called in different ways by writing overload signatures.
     - To do this, write some number of function signatures (usually two or more), followed by the body of the function:
       ```ts
        function makeDate(timestamp: number): Date;
        function makeDate(m: number, d: number, y: number): Date;
        function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
          // xxx
        }
       ```
     - Overload Signatures and the Implementation Signature
       - Again, the signature used to write the function body can’t be “seen” from the outside.
       - When writing an overloaded function, you should always have two or more signatures above the implementation of the function.
       - 意思是，在 TypeScript 中，函数体中使用的函数签名（函数的定义）对外部是不可见的。也就是说，**外部无法直接访问或观察到函数体中使用的函数签名**。
       - 在 TypeScript 中，我们可以为函数定义多个重载，每个重载对应不同的参数类型或个数。然后，我们在函数体内实现具体的逻辑。但是**外部只能看到我们定义重载的部分**，而无法看到函数体内的实现细节。
       - 这就是为什么下面的例子会报错的原因，因为外部看来，压根没有 function(){} 这个签名
          ```ts
          function fn(x: string): void;
          function fn() {
            // ...
          }
          fn(); // Expected to be able to call with zero arguments
          ```
       - The implementation signature must also be compatible with the overload signatures. 
     - Writing Good Overloads：Always prefer parameters with union types instead of overloads when possible
       - 重载不一定是最佳方案，有时候可能调整一下函数参数的类型即可...
3. Object Types
   - declare
     - via literal object
     - via interface
     - via type alias
   - Property Modifiers
     - Optional Properties - ?
     - readonly Properties - readonly
     - Index Signatures - [index: number]: string;
   - Extending Types：B extends B
   - Intersection Types - 交叉类型 - &：is mainly used to combine existing object types ——  在 TypeScript Playground 中无法直观显示出最终类型？
   - Generic Object Types
4. Union Types
5. Type Aliases
6. Interfaces
7. Type Assertions

# Tips
> 以上所有特性都可以在 [TypeSscirpt Playground](https://www.typescriptlang.org/play) 进行调试...