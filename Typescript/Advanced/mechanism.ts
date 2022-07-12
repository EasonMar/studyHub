namespace mechanism {
    // ================== 类型检查机制 - 类型推断、类型兼容、类型保护 ==================
    // ================== TS编译器在做类型检查时, 所秉承的一些原则, 以及表现出的一些行为
    // ====== 作用：辅助开发, 提高开发效率
    // ==========================================================================

    // ====================
    // ====== 类型推断 ======
    // =====================
    // 不需要指定变量的类型, TS可以根据某些规则自动地为其推断出一个类型
    // 基础类型推断
    // 最佳通用类型推断 - 从多个类型中推断出一个类型的时候, TS尽可能推断出兼容当前所有类型的通用类型
    // 上下文类型推断 - 从左到右推断，通常发生在事件处理函数中

    // 类型断言 - 覆盖类型推断 - as


    // ====================
    // ====== 类型兼容 ======
    // ====================
    // 定义：当类型Y可以被赋值给类型X时，就可以说类型X兼容类型Y
    // X兼容Y ---->  X(目标类型) = Y(源类型)
    let s: string = 'a'
    s = null // string 兼容 null --- 需要关闭 strickNullCheck配置项


    // 【接口兼容性】 --- 成员少的可以兼容成员多的
    interface X {
        a: any,
        b: any
    }

    interface Y {
        a: any,
        b: any,
        c: any
    }

    let x: X = { a: 1, b: 2 }
    let y: Y = { a: 1, b: 2, c: 3 }
    x = y // X类型 可以兼容 Y类型, 因为Y类型具备X类型具有的所有属性 --- 鸭式辨型法：源类型必须具备目标类型的必要属性


    // 【函数兼容性】 --- 参数个数、参数类型、返回值
    // 需要判断俩函数是否兼容, 通常发生在两个函数相互赋值的情况下(例如函数作为参数的情况)
    type Handler = (a: number, b: number) => void
    function hof(handler: Handler) {
        return handler
    }

    // 1. 参数个数: 目标函数的参数个数 要多于 源函数的参数个数 (跟接口的感觉相反)
    let handler1 = (a: number) => { }
    hof(handler1)

    let handler2 = (a: number, b: number, c: number) => { }
    // hof(handler2) // Argument of type '(a: number, b: number, c: number) => void' is not assignable to parameter of type 'Handler'.

    // 可选参数和剩余参数
    // - 固定参数 兼容 可选参数、剩余参数
    // - 可选参数 不兼容 固定参数、剩余参数 --- 可以关闭 strickFunctionTypes 配置项来实现兼容
    // - 剩余参数 兼容 固定参数、可选参数
    let a = (p1: number, p2: number) => { }
    let b = (p1?: number, p2?: number) => { }
    let c = (...args: number[]) => { }
    a = b
    a = c
    b = c // 竟然没报错?
    b = a // 竟然没报错?
    c = a
    c = b

    // 2. 参数类型
    let handler3 = (a: string) => { }
    // hof(handler3) // Argument of type '(a: string) => void' is not assignable to parameter of type 'Handler'.

    interface Point3D {
        x: number;
        y: number;
        z: number;
    }

    interface Point2D {
        x: number;
        y: number;
    }

    let p3d = (point: Point3D) => { }
    let p2d = (point: Point2D) => { }

    p3d = p2d
    // p2d = p3d // 不兼容 --- 可以关闭 strickFunctionTypes 配置项来实现兼容
    // 把接口的属性看做函数的参数，所以参数多的兼容参数少的...具体原理是啥呢...

    // 3. 返回值类型 --- 目标函数的返回值类型，必须与源函数返回值类型相同，或为其子类型
    let f = () => ({ name: 'Alice' });
    let g = () => ({ name: 'Alice', location: 'Beijing' });
    f = g // 又是鸭式辨型法，成员少的兼容成员多的(「目标」少 - 「源」多)
    // g = f // g不兼容f...因为f返回值类型是g返回值类型的子类型


    // 函数重载
    // - 函数重载的列表(目标函数类型)
    // - 函数的具体实现(源函数类型)
    // - - 兼容规则同函数
    function overload(a: number, b: number): number // 重载列表
    function overload(a: string, b: string): string // 列表列表
    function overload(a: any, b: any): any { } // 函数的具体实现


    // 【枚举兼容性】
    enum Fruit { Apple, Banana }
    enum Color { Red, Yellow }

    // 枚举类型和数值类型是可以完全互相兼容的
    let fruit: Fruit.Apple = 1
    let no: number = Fruit.Apple

    // 枚举之间是完全不兼容的
    // let color: Color.Red = Fruit.Apple



    // 【类兼容性】--- 跟接口比较相似，只比较结构
    // -- 如果两个类具有相同的实例成员，则这两个类的实例，就可以完全相互兼容
    // -- 注意：静态成员、构造函数不参与比较
    class A {
        constructor(p: number, q: number) { }
        id: number = 1
    }

    class B {
        static s = 1
        constructor(p: number) { }
        id: number = 2
    }

    let aa = new A(1, 2)
    let bb = new B(1)

    aa = bb
    bb = aa

    // 如果类中含有私有成员，则其实例是不能和其他类实例相互兼容的，此时只有父类和子类的实例可以相互兼容
    class APrivate {
        constructor(p: number, q: number) { }
        id: number = 1
        private name: string = ''
    }

    class BPrivate {
        static s = 1
        constructor(p: number) { }
        id: number = 2
        private name: string = ''
    }

    let aap = new APrivate(1, 2)
    let bbp = new BPrivate(1)

    // aap = bbp // 不兼容
    // bbp = aap // 不兼容
    // aap = aa // 不兼容

    class C extends APrivate { }

    let cc = new C(1, 2)
    cc = aap
    aap = cc


    // 【泛型兼容性】

    // 泛型接口
    // - 泛型接口内部没有任何成员
    interface Empty<T> { }
    let obj1: Empty<number> = {}
    let obj2: Empty<string> = {}
    obj1 = obj2

    // 只有当「类型参数T」, 被「接口成员」使用的时候, 才会影响泛型的兼容性
    interface Empty2<T> {
        value: T
    }
    let obj12: Empty2<number> = {
        value: 123
    }
    let obj22: Empty2<string> = {
        value: '123'
    }
    // obj12 = obj22 // 不兼容

    // 泛型函数 --- missed, 泛型函数这个知识点有点忘记了...
    // 如果两个泛型函数的定义相同, 但是没有指定类型参数, 则他们之间是可以相互兼容的
    let log1 = <T>(x: T): T => {
        console.log('x')
        return x
    }
    let log2 = <U>(y: U): U => {
        console.log('y')
        return y
    }

    log1 = log2


    // 通俗理解总结
    // 结构之间兼容：我要的你都有, 我就兼容你
    // 函数之间的兼容：你给我太多我处理不了, 我不能兼容你

    // TS运行在类型兼容的变量之间相互赋值, 此特性增加了语言的灵活性


    // ====================
    // ====== 类型保护 ======
    // ====================
    // A type guard is some expression that performs a runtime check that guarantees the type in some scope. —— TypeScript 官方文档
    // 目前主要有四种的方式来实现类型保护：
    // 1. in 关键字 --- 判断 某属性 是否属于 某个对象
    // 2. typeof 关键字 --- 可以判断对象的类型
    // 3. instanceof 关键字 --- 判断 某实例 是否属于 某个类
    // 4. 自定义类型保护函数的「类型谓词(is)」
    // ps: in\typeof\instanceof 在js中本来就有, 这里ts加以利用来作为类型保护




    // 强制转换 ？
}

// ==========================================
// ================== Q & A =================
// ==========================================
/*
既然有instanceof和typeof了（个人觉得只有instanceof就够了），为什么还需要其他两种实现方法呢？
统一用一种最简单的方法能提高可读性。或者说其他方法有特殊存在的意义？

作者回复: 不同的判断方法有不同的使用场景：
    typeof：判断一个变量的类型
    instanceof：判断一个实例是否属于某个类
    in：判断一个属性是否属于某个对象
    类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内
*/