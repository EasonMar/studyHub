// ===== 下面的语法在 TS v3.x.x 时会报错... 说明很多是新版本ts的语法

// `${}`: 模板字面量类型

type RemoveIndexSignature<Obj extends Record<string, any>> = {
  // 对于infer的理解看 infer.ts... 所以意思是：如果Key等于某个字符串`${Str}`... 则Key就取这个字符串
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];

  // 索引部分正确断句：Key in (keyof Obj as (Key extends `${infer Str}` ? Str : never))
  // 这里有好几个特性：as类型断言、infer设定推断类型参数、模板字面量类型、in、keyof
};



// ===== https://segmentfault.com/q/1010000041790130?utm_source=sf-similar-question ==== 
type FooSecond = {
  [key: string]: any
  foo(): void
}

type RemoveIndexSignatureSecond<T> = {
  [K in keyof T as string extends K ? never : K]: T[K]
  // K in keyof T as (string extends K ? never : K)
  // 因为 string extends 'foo' 结果为 false，所以取下了'foo':()=>void这一类型。
}

type ASecond = RemoveIndexSignatureSecond<FooSecond> // expected { foo(): void }

type ASecondAbove = RemoveIndexSignature<FooSecond>