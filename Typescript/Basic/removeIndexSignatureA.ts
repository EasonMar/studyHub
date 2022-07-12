// 如何从类型中排除索引签名？ --- https://www.thinbug.com/q/51297731

// 如果我按以下方式定义我的类型，那么它将遵循我的期望行为。

interface Foo { }

interface Bar {
  a: string;
  b: boolean;
  c: Foo;
}

// type x = keyof Bar; // "a" | "b" | "c"
// 但是，如果我尝试添加索引签名，它将丢失我所有的预定义成员。

interface Bar {
  [index: string]: any;
}

type y = keyof Bar; // string | number
// 有没有办法在TypeScript中正确执行此操作？

// 类似的东西，进行了尝试，但是结果不正确：
type z = Exclude<Bar, { [index: string]: any }>; // never


// ========== 尝试了类似于杰克的解决方案

// 可索引的 --- Todo: 类型参数T感觉没用处吖
interface Indexable<T> {
  [index: string]: any;
}

// 如果T是可索引的，则BaseType的类型就等于传入Indexable的类型参数的类型，否则是never
type BaseType<T> = T extends Indexable<infer U> ? U : never;

interface BaseFoo { Name: string }

// Foo1 对 Indexable<BaseFoo> 兼容, 具体定义为 {}
interface Foo1 extends Indexable<BaseFoo> { }

// Foo2 等于 Indexable<BaseFoo>
type Foo2 = Indexable<BaseFoo>;

type base1 = BaseType<Foo1>; // unknown
type base2 = BaseType<Foo2>; // BaseFoo

// ========== 解答1

interface FooA { }

interface BarA {
  a: string;
  b: boolean;
  c: FooA;
}

interface IndexedBar extends BarA {
  [key: string]: any;
}

type xA = keyof BarA; // "a" | "b" | "c"
type zA = keyof IndexedBar

// ======== 解答2: 获取之前的键，添加索引签名：

interface FooB { }

interface BarCore {
  a: string;
  b: boolean;
  c: FooB;
}

type BarB = BarCore & {
  [index: string]: any;
}

type xB = keyof BarCore; //  "a" | "b" | "c"