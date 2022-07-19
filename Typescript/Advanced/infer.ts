// 1. 性质: 它是 声明类型变量 的 关键字
// 2. 场景: 用在条件类型语句中, 它 声明一个类型变量并且对它进行使用

type str = "aaa,bbb"
type res = str extends `aaa,${infer rest}` ? rest : never; // type res = "bbb"



// 这个是infer的什么特性
type extendsInferTest<SourceStr extends string>
  = SourceStr extends `${infer PrefixChar}${infer RestStr}` ? `${PrefixChar},${RestStr}` : never

type testVar = extendsInferTest<'abcde'> // "a,bcde" ? 为什么是这种效果

type extendsInferTest2<SourceStr extends string>
  = SourceStr extends `${infer aaa}${infer bbb}${infer ccc}` ? `${aaa},${bbb},${ccc}` : never

type test2Var = extendsInferTest2<'abcedfg'> // "a,b,cedfg"

// 如果有多个infer, 前面的infer只会提取 一个字符, 最后的infer提取完剩下的字符


// ====== 面试题 1 =====

interface Action<T> { payload?: T; type: string; }

// 假设有Modle这样一个interface
interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(action: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

// 实现type Connect
// 保留属性为函数类型，其余的摒弃掉
// 把函数类型转化为<T, U>(args: T) => Action<U>
// type Connect<T> = 'xx' /** 你需要实现的逻辑 */
type ResultInger = Connect<Module>;

// ResultInger = {
//   asyncMethod<T, U>(input: T): Action<U>;
//   syncMethod<T, U>(action: T): Action<U>; 
// }


// 1. 先实现一个类型可以[筛选出为函数类型的属性]
type PickFuncProp<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

// 获取的其实是 函数名称联合类型
type testPF = PickFuncProp<Module>

// 根据 函数名称联合类型新建对象
type PickFuncNewObject = {
  [P in PickFuncProp<Module>]: Module[P]
}

// 2. 使用infer实现[函数的转换] --- Todo -- infer T\ infer U 没有用上也没事？--- 这里声明 T | U 只是为了构成特定 pattern 而已, 不需要使用
type TransformFunc<F> = F extends (action: Promise<infer T>) => Promise<Action<infer U>>
  ? <T, U>(action: T) => Action<U> :
  F extends (action: Action<infer T>) => Action<infer U> ?
  <T, U>(action: T) => Action<U> : F;


type testTFA = TransformFunc<Module['asyncMethod']>
type testTFS = TransformFunc<Module['syncMethod']>

// 3. 把PickFuncProp和TransitionFunc组合起来，实现Connect的方法.
type Connect<T> = {
  [P in PickFuncProp<T>]: TransformFunc<T[P]>;
};